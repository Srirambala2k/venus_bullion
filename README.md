# Venus Bullion website

Static site (HTML, CSS, JavaScript). No framework and no server code.
Pages: `index.html`, `network.html`, `privacy.html`, `404.html`. Languages: EN / FR / AR (switcher in the header).

## Folder layout

```
index.html network.html privacy.html 404.html   pages
css/  js/                                       styles and scripts (js/config.js = settings)
assets/
  img/  logo/  video/                           everything the website loads (photos, logos, videos)
  source/                                       full-size originals, NOT uploaded (images/, video/)
build.py  serve.py                              build tool, local preview
```
All photos and videos live under `assets/`. Nothing media-related sits outside it.

## Deploy to Hostinger

1. Run `python build.py`. It creates `dist/` and **`venus-bullion-hostinger.zip`**.
2. Hostinger hPanel > Websites > File Manager > open `public_html` (delete the default page first).
3. Upload `venus-bullion-hostinger.zip` to `public_html` and use **Extract** so `index.html` ends up directly in `public_html` (not in a sub-folder).
4. Turn on the free SSL certificate (hPanel > Security > SSL) and enable "Force HTTPS".
5. `.htaccess` (included) sets the 404 page, caching, compression and security headers. In Hostinger's File Manager enable "Show hidden files" to see it.
6. Edit `public_html/js/config.js` directly on the server to set the email / form service later.
7. After launch: submit `https://www.venusbullion.com/sitemap.xml` in Google Search Console.

Other hosts: upload the contents of `dist/` to the web root.

## Settings you edit (no rebuild needed): `js/config.js`

| Setting | What it does |
|---|---|
| `email` | Shows the email in the contact section and footer. Empty = those lines are hidden. |
| `formEndpoint` | URL of a form service (e.g. Formspree). Empty = enquiries open WhatsApp instead. If you use a service other than formspree.io, change the host in the `connect-src` part of `_headers` / `.htaccess`. |
| `whatsapp` | WhatsApp number, digits only. |
| `heroPhoto` | Set `true` after adding `assets/img/hero-desktop.jpg` and `hero-mobile.jpg`. |

## Changing content

- Text: edit the English text in the HTML, then the French and Arabic lines in `js/i18n.js` (the English text is the key).
  The privacy page is English only.
- Company details (address, phone) are written directly in the HTML, in `js/i18n.js` and in the structured data in `index.html`. Search for the old value to find every place.
- Photos: see `assets/README.txt` for the file names the pages look for.
- The intro animation plays once per browser. Open `/?intro=1` to replay it.

## Before going live — things only the business can supply or approve

- Official email address and form endpoint (above).
- Native-speaker review of the French and Arabic text (`js/i18n.js`) and of `privacy.html` by a legal adviser.
- Confirm the products shown in "Our Products" are real Venus Bullion lines (the images are AI-generated mock-ups with some garbled text).
- `assets/img/cat-watches.jpg` shows a Rolex-branded dial. Replace it with an unbranded watch image under the same file name.
