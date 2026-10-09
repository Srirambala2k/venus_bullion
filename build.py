"""Production build:  python build.py   ->  dist/

Creates a deploy-ready folder:
  * minified CSS / JS with a content hash appended to their URLs (long-term caching, instant updates)
  * only the media the pages actually use (the large original videos and unused logo files are left out)
  * server files: robots.txt, sitemap.xml, 404.html, _headers (Netlify / Cloudflare) and .htaccess (Apache)
Requires Node (uses `npx esbuild`). js/config.js is copied unminified so it can be edited after deployment.
"""
import hashlib, os, re, shutil, subprocess, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(ROOT, 'dist')
SKIP_ASSETS = {'box.mp4', 'network.mp4', 'README.txt'}          # large originals; web versions are used instead
PAGES = ['index.html', 'network.html', 'privacy.html', '404.html']
STATIC = ['robots.txt', 'sitemap.xml', '_headers', '.htaccess']

def run(args):
    r = subprocess.run(args, capture_output=True, text=True, shell=(os.name == 'nt'))
    if r.returncode: sys.exit(r.stderr or r.stdout)
    return r.stdout

os.makedirs(DIST, exist_ok=True)
for name in os.listdir(DIST):                                   # clear the contents (not the folder itself, which a running preview server may hold open)
    path = os.path.join(DIST, name)
    shutil.rmtree(path) if os.path.isdir(path) else os.remove(path)
os.makedirs(os.path.join(DIST, 'css')); os.makedirs(os.path.join(DIST, 'js'))

hashes = {}
def minify(src, dst, kind):
    run(['npx', '--yes', 'esbuild', os.path.join(ROOT, src), '--minify', '--legal-comments=none', '--target=es2020', '--charset=utf8', '--outfile=' + os.path.join(DIST, dst)])
    h = hashlib.md5(open(os.path.join(DIST, dst), 'rb').read()).hexdigest()[:8]
    hashes[src] = h

minify('css/main.css', 'css/main.css', 'css')
minify('js/main.js', 'js/main.js', 'js')
minify('js/i18n.js', 'js/i18n.js', 'js')
shutil.copy(os.path.join(ROOT, 'js/config.js'), os.path.join(DIST, 'js/config.js'))

for page in PAGES:
    html = open(os.path.join(ROOT, page), encoding='utf8').read()
    for src, h in hashes.items():
        html = re.sub(r'((?:href|src)="/?)' + re.escape(src) + '"', lambda m: m.group(1) + src + '?v=' + h + '"', html)
    # trim whitespace between tags / blank lines (keeps <pre>-free pages safe)
    html = re.sub(r'\n\s*\n+', '\n', html)
    open(os.path.join(DIST, page), 'w', encoding='utf8', newline='').write(html)

for f in STATIC:
    if os.path.exists(os.path.join(ROOT, f)): shutil.copy(os.path.join(ROOT, f), os.path.join(DIST, f))

for dirpath, _, files in os.walk(os.path.join(ROOT, 'assets')):
    for f in files:
        if f in SKIP_ASSETS: continue
        rel = os.path.relpath(os.path.join(dirpath, f), ROOT)
        os.makedirs(os.path.dirname(os.path.join(DIST, rel)), exist_ok=True)
        shutil.copy(os.path.join(ROOT, rel), os.path.join(DIST, rel))

total = sum(os.path.getsize(os.path.join(d, f)) for d, _, fs in os.walk(DIST) for f in fs)
print('dist ready: %.1f MB  | css %s js %s i18n %s' % (total / 1e6, hashes['css/main.css'], hashes['js/main.js'], hashes['js/i18n.js']))
for f in ['css/main.css', 'js/main.js', 'js/i18n.js']:
    print('  %-12s %6.1f KB (source %6.1f KB)' % (f, os.path.getsize(os.path.join(DIST, f)) / 1024, os.path.getsize(os.path.join(ROOT, f)) / 1024))
