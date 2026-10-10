# Venus Bullion website

Static site (HTML, CSS, JavaScript). No framework and no server code.
Pages: `index.html`, `network.html`, `privacy.html`, `404.html`. Languages: EN / FR / AR (switcher in the header).

## Deploy

1. `python build.py` (needs Python 3 and Node). This creates **`dist/`**.
2. Upload the **contents of `dist/`** to the web root of the host. Do not upload the project folder itself:
   it contains large original videos and unused files that `dist/` leaves out.
3. Host settings come with the build:
   - Netlify / Cloudflare Pages: `_headers` is used automatically (security headers + caching).
   - Apache: `.htaccess` is used automatically (needs mod_headers, mod_expires, mod_deflate).
   - Other hosts: copy the headers from `_headers` into the host's configuration. Serve over HTTPS.
4. After launch: submit `https://www.venusbullion.com/sitemap.xml` in Google Search Console.

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
