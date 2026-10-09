/* Venus Bullion — site behaviour (no dependencies) */
(() => {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = () => matchMedia('(max-width: 700px)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ------------------------------------------------------------------
     1. Splash: shards form the mark → wordmark appears → both fly into
        the left of the header (FLIP animation).
  ------------------------------------------------------------------ */
  const splash = $('#splash');
  function revealSite() {
    root.classList.add('ready', 'brand-on');
    try { localStorage.setItem('vb-intro-seen', '1'); } catch (e) {}
  }
  function runSplash() {
    if (!splash || root.classList.contains('no-splash') || !splash.isConnected) { splash?.remove(); revealSite(); return; }
    document.body.style.overflow = 'hidden';
    let done = false;
    const flip = () => {
      if (done) return; done = true;
      const pairs = [[$('#s-mark'), $('#h-mark')], [$('#s-word'), $('#h-word')]];
      $('.s-sweep', splash)?.remove();
      splash.classList.add('leaving');
      splash.style.transition = 'background-color 1s ease';
      splash.style.backgroundColor = 'transparent';
      const anims = pairs.map(([from, to]) => {
        const a = from.getBoundingClientRect(), b = to.getBoundingClientRect();
        from.style.transformOrigin = '0 0';
        return from.animate(
          [{ transform: 'none' }, { transform: `translate(${b.left - a.left}px,${b.top - a.top}px) scale(${b.width / a.width})` }],
          { duration: 1100, easing: 'cubic-bezier(.7,0,.2,1)', fill: 'forwards' }
        ).finished;
      });
      $('.s-glow', splash)?.remove();
      $('#s-skip')?.remove();
      setTimeout(() => root.classList.add('ready'), 650);
      Promise.all(anims).catch(() => {}).then(() => {
        root.classList.add('brand-on');
        splash.remove();
        document.body.style.overflow = '';
        try { localStorage.setItem('vb-intro-seen', '1'); } catch (e) {}
      });
    };
    const t = setTimeout(flip, 3700);
    const skip = () => { clearTimeout(t); flip(); };
    $('#s-skip')?.addEventListener('click', e => { e.stopPropagation(); skip(); });
    splash.addEventListener('click', skip);
  }
  // wait for fonts so the wordmark measures correctly
  (document.fonts && document.fonts.ready ? Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1500))]) : Promise.resolve()).then(runSplash);

  /* ------------------------------------------------------------------
     2. Header, mobile menu
  ------------------------------------------------------------------ */
  const header = $('#header');
  const onScrollHeader = () => header.classList.toggle('solid', scrollY > 40);
  addEventListener('scroll', onScrollHeader, { passive: true }); onScrollHeader();

  const burger = $('#burger');
  const setMenu = open => { root.classList.toggle('menu-open', open); burger.setAttribute('aria-expanded', open); };
  burger?.addEventListener('click', () => setMenu(!root.classList.contains('menu-open')));
  $$('#menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  addEventListener('resize', () => { if (innerWidth > 1000) setMenu(false); });

  /* ------------------------------------------------------------------
     3. Scroll reveal + count-up
  ------------------------------------------------------------------ */
  const countUp = el => {
    const end = +el.dataset.count, dur = 1600, t0 = performance.now();
    const step = t => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4); el.textContent = Math.round(end * e); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target; el.classList.add('in'); io.unobserve(el);
    if (el.dataset.count == null) $$('[data-count]', el).forEach(countUp); else countUp(el);
    if (el.classList.contains('tilt')) setTimeout(() => el.classList.add('done'), 1300 + (parseFloat(getComputedStyle(el).getPropertyValue('--d')) || 0) * 1000);
  }), { threshold: .15, rootMargin: '0px 0px -6% 0px' });
  $$('.rv').forEach(el => io.observe(el));

  /* ------------------------------------------------------------------
     4. 3D tilt on cards (pointer devices only)
  ------------------------------------------------------------------ */
  if (finePointer && !reduce) {
    $$('.tilt').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', x * 100 + '%'); card.style.setProperty('--my', y * 100 + '%');
        if (card.classList.contains('done')) card.style.transform = `rotateX(${(.5 - y) * 6}deg) rotateY(${(x - .5) * 8}deg) translateZ(0)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  /* ------------------------------------------------------------------
     5. Hero: photo slot, background video, parallax
  ------------------------------------------------------------------ */
  const hero = $('#hero');
  if (hero) {
    const media = $('#heroMedia'), content = $('#heroContent'), vid = $('#heroVideo');

    // optional hero photo: added only if the file exists (no failed request while it is not supplied)
    const photoSrc = isMobile() ? media.dataset.photoMobile : media.dataset.photo;
    if (photoSrc && (window.VB_CONFIG || {}).heroPhoto) {
      const probe = new Image();
      probe.onload = () => { const im = document.createElement('img'); im.className = 'hero-img'; im.alt = ''; im.decoding = 'async'; im.src = photoSrc; media.insertBefore(im, media.firstChild); media.classList.add('has-photo'); };
      probe.src = photoSrc;
    }

    // video — light variant on mobile, skipped on data-saver / reduced motion
    const saver = navigator.connection && navigator.connection.saveData;
    if (isMobile() && vid.dataset.posterMobile) vid.poster = vid.dataset.posterMobile;
    if (!saver && !reduce) {
      vid.muted = true; vid.defaultMuted = true;
      vid.src = isMobile() ? vid.dataset.srcMobile : vid.dataset.src;
      vid.addEventListener('error', () => { vid.removeAttribute('src'); }, { once: true });
      const play = () => vid.play().catch(() => {});
      play();
      new IntersectionObserver(([en]) => en.isIntersecting ? play() : vid.pause(), { threshold: .05 }).observe(hero);
      document.addEventListener('visibilitychange', () => document.hidden ? vid.pause() : play());
      // iOS low-power mode blocks autoplay until a touch
      addEventListener('touchstart', play, { once: true, passive: true });
    }

    // parallax (scroll) + subtle mouse depth
    let ticking = false, mx = 0, my = 0;
    const paint = () => {
      ticking = false;
      const y = Math.min(scrollY, innerHeight * 1.2);
      if (!reduce) {
        media.style.transform = `translate3d(${mx * -14}px,${y * .28 + my * -10}px,0) scale(1.04)`;
        content.style.transform = `translate3d(${mx * 10}px,${y * .12 + my * 6}px,0)`;
        content.style.opacity = Math.max(0, 1 - y / (innerHeight * .8));
      }
    };
    const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(paint); } };
    addEventListener('scroll', req, { passive: true });
    if (finePointer) hero.addEventListener('pointermove', e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; req(); });
    // gyroscope depth on phones (only where permission isn't required)
    if (!finePointer && 'DeviceOrientationEvent' in window && typeof DeviceOrientationEvent.requestPermission !== 'function') {
      addEventListener('deviceorientation', e => { if (e.gamma == null) return; mx = Math.max(-.5, Math.min(.5, e.gamma / 60)); my = Math.max(-.5, Math.min(.5, (e.beta - 45) / 90)); req(); }, { passive: true });
    }
  }

  /* ------------------------------------------------------------------
     6. Network diagram (hub → partner categories)
  ------------------------------------------------------------------ */
  const nodesG = $('#netNodes'), linesG = $('#netLines');
  if (nodesG) {
    const NS = 'http://www.w3.org/2000/svg', cx = 300, cy = 258, R = 172;
    const labels = ['Suppliers', 'Buyers', 'Logistics', 'Vaulting', 'Refining'];
    const mk = (n, a, p) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); (p || nodesG).appendChild(e); return e; };
    labels.forEach((l, i) => {
      const ang = (-90 + i * 72) * Math.PI / 180, x = cx + R * Math.cos(ang), y = cy + R * Math.sin(ang), c = Math.cos(ang);
      mk('path', { d: `M${cx} ${cy} L${x.toFixed(1)} ${y.toFixed(1)}`, class: 'net-line' }, linesG);
      const dot = mk('circle', { r: 3, fill: '#fff3c9' }, linesG);
      const m = mk('animateMotion', { dur: (3.2 + i * .7) + 's', repeatCount: 'indefinite', begin: (i * .5) + 's', path: `M${cx} ${cy} L${x.toFixed(1)} ${y.toFixed(1)}` }, dot);
      const g = mk('g', { class: 'net-node' });
      mk('circle', { class: 'halo', cx: x, cy: y, r: 14 }, g); mk('circle', { class: 'core', cx: x, cy: y, r: 5 }, g);
      const t = mk('text', { x: c > .3 ? x + 18 : c < -.3 ? x - 18 : x, y: c > .3 || c < -.3 ? y + 4 : (y < cy ? y - 20 : y + 30), 'text-anchor': c > .3 ? 'start' : c < -.3 ? 'end' : 'middle' }, g);
      t.textContent = window.VB ? window.VB.t(l) : l;
    });
  }

  /* ------------------------------------------------------------------
     7. Contact form → WhatsApp (swap for an endpoint when a backend exists)
  ------------------------------------------------------------------ */
  const form = $('#contactForm');
  const sel = $('#f-interest'), otherFld = $('#otherFld'), otherIn = $('#f-other'), otherErr = $('#otherErr');
  const tr = s => (window.VB ? window.VB.t(s) : s);
  sel?.addEventListener('change', () => {
    const on = sel.value === 'Other'; otherFld.hidden = !on; otherIn.required = on; otherErr.textContent = ''; otherIn.removeAttribute('aria-invalid');
    if (on) otherIn.focus();
  });
  otherIn?.addEventListener('input', () => { if (otherIn.value.trim()) { otherErr.textContent = ''; otherIn.removeAttribute('aria-invalid'); } });
  const CFG = window.VB_CONFIG || {};
  $$('[data-email]').forEach(el => {
    if (CFG.email) { const a = $('a', el); a.href = 'mailto:' + CFG.email; a.textContent = CFG.email; el.hidden = false; } else el.remove();
  });
  const note = form && $('.form-note', form);
  if (note && CFG.formEndpoint) note.textContent = tr('Your details are used only to respond to your enquiry.');
  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    if (d._gotcha) return;                                         // honeypot: bots fill this hidden field
    if (!d.name?.trim() || !d.contact?.trim()) { (!d.name?.trim() ? $('#f-name') : $('#f-contact')).focus(); return; }
    if (d.interest === 'Other' && !(d.other || '').trim()) { otherErr.textContent = tr('Please tell us what you are looking for.'); otherIn.setAttribute('aria-invalid', 'true'); otherIn.focus(); return; }
    if (d.interest === 'Other') d.interest = 'Other: ' + d.other.trim();
    const msg = `Hello Venus Bullion,\nName: ${d.name}\nCompany: ${d.company || '-'}\nContact: ${d.contact}\nInterest: ${d.interest}\n\n${d.message || ''}`;
    const wa = () => window.open('https://wa.me/' + (CFG.whatsapp || '971501263566') + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    if (!CFG.formEndpoint) { wa(); return; }
    const btn = $('button[type=submit]', form); btn.disabled = true;
    try {
      const r = await fetch(CFG.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: d.name, company: d.company || '', contact: d.contact, interest: d.interest, message: d.message || '', _subject: 'Website enquiry — Venus Bullion' }) });
      if (!r.ok) throw new Error(r.status);
      form.reset(); if (otherFld) otherFld.hidden = true; note.textContent = tr('Thank you — your enquiry has been sent. We will respond shortly.');
    } catch (err) { note.textContent = tr('Could not send online. Opening WhatsApp instead…'); wa(); }
    finally { btn.disabled = false; }
  });


  /* ------------------------------------------------------------------
     8. Extra motion: split text, bg words, glow, magnetic buttons, progress
  ------------------------------------------------------------------ */
  // letter-by-letter titles (hero + page hero h1)
  $$('.hero h1, .page-hero h1').forEach(h => {
    const txt = h.textContent.trim(); h.setAttribute('aria-label', txt); h.classList.add('split-ch'); h.textContent = ''; let i = 0;
    const arabic = /[\u0600-\u06FF]/.test(txt); // Arabic letters must stay joined, so animate per word
    txt.split(' ').forEach((w, wi, arr) => {
      const wd = document.createElement('span'); wd.className = 'wd'; wd.setAttribute('aria-hidden', 'true');
      (arabic ? [w] : [...w]).forEach(c => { const ch = document.createElement('span'); ch.className = 'ch'; ch.textContent = c; ch.style.setProperty('--i', i++); wd.appendChild(ch); });
      h.appendChild(wd); if (wi < arr.length - 1) { h.appendChild(document.createTextNode(' ')); i++; }
    });
  });
  // tagline words
  $$('.hero .tag').forEach(t => {
    const words = t.textContent.trim().split(/\s+/); t.setAttribute('aria-label', t.textContent.trim()); t.textContent = '';
    words.forEach((w, i) => { const s = document.createElement('span'); s.className = 'tw'; s.setAttribute('aria-hidden', 'true'); s.style.setProperty('--i', i); s.textContent = w; t.appendChild(s); t.appendChild(document.createTextNode(' ')); });
  });
  // h2 words slide up from a mask when scrolled into view
  const hio = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); hio.unobserve(en.target); } }), { threshold: .3 });
  $$('main h2').forEach(h => {
    const txt = h.textContent.trim(); h.setAttribute('aria-label', txt); h.classList.remove('rv'); h.classList.add('sp'); h.textContent = '';
    txt.split(/\s+/).forEach((w, i) => {
      const sw = document.createElement('span'); sw.className = 'sw'; sw.setAttribute('aria-hidden', 'true');
      const inner = document.createElement('span'); inner.style.setProperty('--i', i); inner.textContent = w; sw.appendChild(inner);
      h.appendChild(sw); h.appendChild(document.createTextNode(' '));
    });
    hio.observe(h);
  });

  // scroll progress bar + drifting background words
  const bar = document.createElement('div'); bar.className = 'progress'; document.body.appendChild(bar);
  const bgw = $$('.bg-word');
  const onScrollFx = () => {
    const max = document.documentElement.scrollHeight - innerHeight; bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    if (reduce) return;
    bgw.forEach(el => {
      const r = el.parentElement.getBoundingClientRect(); if (r.bottom < -200 || r.top > innerHeight + 200) return;
      el.style.transform = `translate3d(${(r.top + r.height / 2 - innerHeight / 2) * parseFloat(el.dataset.speed || -.15) * 2.4}px,0,0)`;
    });
  };
  addEventListener('scroll', () => requestAnimationFrame(onScrollFx), { passive: true }); onScrollFx();

  // magnetic buttons (pointer devices)
  if (finePointer && !reduce) {
    $$('.btn').forEach(b => {
      b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .22}px,${(e.clientY - r.top - r.height / 2) * .3}px)`; });
      b.addEventListener('pointerleave', () => { b.style.transform = ''; });
    });
  }


  /* ------------------------------------------------------------------
     9. Stacked, draggable category carousel (Trading section)
        Same maths as the reference component: wrapped offset → x / y / rotate / scale / opacity,
        drag + velocity → snap with a spring.
  ------------------------------------------------------------------ */
  const stack = $('#stack');
  if (stack) {
    const stage = $('.stack-stage', stack), surface = $('.stack-drag', stack), cards = $$('.scard', stack);
    const dotsBox = $('.sdots', stack), total = cards.length;
    const cfgFor = w => w < 640
      ? { dist: 120, vel: 500, sens: 180, x: 90, y: 20, rot: 8, scale: .06 }
      : w < 1024 ? { dist: 160, vel: 650, sens: 220, x: 190, y: 30, rot: 10, scale: .09 }
      : { dist: 200, vel: 800, sens: 250, x: 270, y: 40, rot: 12, scale: .12 };
    let cfg = cfgFor(innerWidth); addEventListener('resize', () => { cfg = cfgFor(innerWidth); render(); });

    // each card = photo layer (parallax) + glare layer + shade; the photo is only used when the file exists
    cards.forEach(c => {
      const lay = document.createElement('div'); lay.className = 'simg'; c.insertBefore(lay, c.firstChild); c._img = lay;
      const gl = document.createElement('i'); gl.className = 'sglare'; c.appendChild(gl); c._gl = gl;
      const sh = document.createElement('i'); sh.className = 'sshade'; c.appendChild(sh);
      c._body = $('.sbody', c);
      const src = c.dataset.img; if (!src) return;
      const im = new Image(); im.onload = () => { lay.style.backgroundImage = `url(${src})`; lay.style.backgroundPosition = c.dataset.pos || '50% 50%'; c.classList.add('has-img'); }; im.src = src;
    });
    cards.forEach((_, i) => { const d = document.createElement('button'); d.type = 'button'; d.setAttribute('aria-label', String(i + 1)); d.addEventListener('click', () => goTo(i)); dotsBox.appendChild(d); });
    const dots = $$('button', dotsBox);

    // piecewise-linear interpolation (like framer's useTransform with ranges)
    const lerpMap = (v, xs, ys) => { if (v <= xs[0]) return ys[0]; for (let i = 1; i < xs.length; i++) if (v <= xs[i]) { const t = (v - xs[i - 1]) / (xs[i] - xs[i - 1]); return ys[i - 1] + t * (ys[i] - ys[i - 1]); } return ys[ys.length - 1]; };
    let p = 0, vel = 0, target = 0, raf = 0, last = 0, active = -1;
    let tiltX = 0, tiltY = 0, tx = 0, ty = 0, gx = 50, gy = 40;   // 3D tilt of the front card (degrees) + glare position (%)

    function render() {
      cards.forEach((c, i) => {
        let o = (((i - p) % total) + total) % total; if (o > total / 2) o -= total;
        const a = Math.abs(o), act = Math.max(0, 1 - a * 1.4);
        const x = o * cfg.x, y = a < .05 ? 0 : a * cfg.y, r = a < .05 ? 0 : o * cfg.rot, s = 1 - a * cfg.scale;
        const ry = -o * 9 + tiltY * act, rx = tiltX * act;            // coverflow turn + cursor tilt
        c.style.transform = `perspective(1100px) translate3d(${x}px,${y}px,0) rotate(${r}deg) rotateY(${ry}deg) rotateX(${rx}deg) scale(${s})`;
        c.style.opacity = lerpMap(o, [-total / 2, -total / 2 + .5, 0, total / 2 - .5, total / 2], [0, 1, 1, 1, 0]);
        c.style.zIndex = Math.round(100 - a * 10);
        c.style.setProperty('--dim', lerpMap(o, [-2, -.5, 0, .5, 2], [.55, .25, 0, .25, .55]));
        c.style.setProperty('--act', act);
        c.style.setProperty('--sx', (-tiltY * 2.2 * act).toFixed(1) + 'px');
        c.style.setProperty('--gx', (act ? gx : 50) + '%'); c.style.setProperty('--gy', (act ? gy : 40) + '%');
        c._img.style.transform = `translate3d(${(-o * 20 - tiltY * 2.4 * act).toFixed(1)}px,${(tiltX * 2.4 * act).toFixed(1)}px,0) scale(1.18)`;   // photo drifts against the card = depth
        c._body.style.transform = `translate3d(${(tiltY * .9 * act).toFixed(1)}px,${(-tiltX * .9 * act).toFixed(1)}px,0)`;
        c._body.style.opacity = Math.max(0, 1 - a * 2);
        c._o = o;
      });
      const idx = ((Math.round(p) % total) + total) % total;
      if (idx !== active) { active = idx; dots.forEach((d, i) => { d.classList.toggle('on', i === idx); d.setAttribute('aria-current', i === idx); }); cards.forEach((c, i) => c.setAttribute('aria-hidden', i !== idx)); }
    }
    // spring (stiffness 200, damping 30, mass 1)
    function step(now) {
      const dt = Math.min(.032, (now - last) / 1000 || .016); last = now;
      vel += (200 * (target - p) - 30 * vel) * dt; p += vel * dt; render();
      if (Math.abs(target - p) < .001 && Math.abs(vel) < .001) { p = target; vel = 0; render(); raf = 0; return; }
      raf = requestAnimationFrame(step);
    }
    function springTo(t) { target = t; if (!raf) { last = performance.now(); raf = requestAnimationFrame(step); } }
    const goTo = i => { const base = Math.round(p); let d = ((i - base) % total + total) % total; if (d > total / 2) d -= total; springTo(base + d); };
    const next = n => springTo(Math.round(target) + n);

    // drag
    let dragging = false, startX = 0, startP = 0, lx = 0, lt = 0, v = 0, moved = 0;
    surface.addEventListener('pointerdown', e => {
      dragging = true; moved = 0; startX = lx = e.clientX; startP = p; lt = performance.now(); v = 0; surface.setPointerCapture(e.pointerId); surface.classList.add('dragging');
      cancelAnimationFrame(raf); raf = 0; vel = 0; target = p;
    });
    surface.addEventListener('pointermove', e => {
      if (!dragging) return;
      const now = performance.now(), dx = e.clientX - lx; moved += Math.abs(dx);
      v = .8 * v + .2 * (dx / Math.max(1, now - lt) * 1000); lx = e.clientX; lt = now;
      p += -dx / cfg.sens; target = p; render();
    });
    const end = e => {
      if (!dragging) return; dragging = false; surface.classList.remove('dragging');
      const offset = e.clientX - startX;
      if (moved < 6) { // tap: bring the tapped side card forward
        const hit = cards.filter(c => { const r = c.getBoundingClientRect(); return e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom && +c.style.opacity > .3; })
          .sort((a, b) => b.style.zIndex - a.style.zIndex)[0];
        springTo(hit ? Math.round(p) + Math.round(hit._o) : Math.round(p)); return;
      }
      let shift = Math.round(-offset / cfg.dist + -v / cfg.vel); shift = Math.max(-3, Math.min(3, shift));
      springTo(Math.round(startP) + shift);
    };
    surface.addEventListener('pointerup', end); surface.addEventListener('pointercancel', end);

    // 3D tilt follows the cursor over the stage; touch / idle = a slow sway
    let hoverP = false, inView = false, hover = false;
    stage.addEventListener('pointermove', e => {
      if (e.pointerType === 'touch' || reduce) return;
      const r = stage.getBoundingClientRect(), nx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2))), ny = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2)));
      hoverP = true; ty = nx * 13; tx = -ny * 10; gx = 50 + nx * 42; gy = 40 + ny * 42;
    });
    stage.addEventListener('pointerleave', () => { hoverP = false; });
    if (!reduce) (function loop(t) {
      if (inView) {
        if (!hoverP) { tx = Math.sin(t / 1700) * 3.2; ty = Math.cos(t / 2300) * 6; gx = 50 + Math.cos(t / 2300) * 25; gy = 40 + Math.sin(t / 1700) * 15; }
        tiltX += (tx - tiltX) * .09; tiltY += (ty - tiltY) * .09; render();
      }
      requestAnimationFrame(loop);
    })(0);

    // buttons + keyboard
    $('.sbtn.prev', stack).addEventListener('click', () => next(-1));
    $('.sbtn.next', stack).addEventListener('click', () => next(1));
    stage.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { next(1); e.preventDefault(); } if (e.key === 'ArrowLeft') { next(-1); e.preventDefault(); } });

    // gentle autoplay while visible (paused on hover / focus / drag)
    new IntersectionObserver(([en]) => { inView = en.isIntersecting; }, { threshold: .4 }).observe(stack);
    stack.addEventListener('pointerenter', () => hover = true); stack.addEventListener('pointerleave', () => hover = false);
    stack.addEventListener('focusin', () => hover = true); stack.addEventListener('focusout', () => hover = false);
    if (!reduce) setInterval(() => { if (inView && !hover && !dragging && !document.hidden) next(1); }, 4800);
    render();
  }


  // looping gold video in the "Professional by design" panel — loads only when scrolled near, pauses off-screen
  const sv = $('#shieldVideo');
  if (sv) {
    const saver = navigator.connection && navigator.connection.saveData;
    if (!saver && !reduce) {
      sv.muted = true; sv.defaultMuted = true;
      new IntersectionObserver(([en]) => {
        if (en.isIntersecting) { if (!sv.src) sv.src = sv.dataset.src; sv.play().catch(() => {}); } else sv.pause();
      }, { threshold: .15, rootMargin: '200px 0px' }).observe(sv);
      addEventListener('touchstart', () => { if (sv.src && sv.paused) sv.play().catch(() => {}); }, { once: true, passive: true });
    }
  }


  // scroll-spy: the menu link of the section being read is highlighted (About → Trading → How We Work → Compliance → Network)
  const spy = [['about', 'a[href="#about"]'], ['trading', 'a[href="#trading"]'], ['process', 'a[href="#process"]'], ['compliance', 'a[href="#compliance"]'], ['network', 'a[href="network.html"]']]
    .map(([id, sel]) => ({ sec: document.getElementById(id), link: $('#menu ' + sel) })).filter(s => s.sec && s.link);
  if (spy.length) {
    let cur = null, spyTick = false;
    const spyUpdate = () => {
      spyTick = false; const probe = innerHeight * .38; let hit = null;
      spy.forEach(s => { const r = s.sec.getBoundingClientRect(); if (r.top <= probe && r.bottom > probe) hit = s; });
      if (hit === cur) return; cur = hit;
      $$('#menu a').forEach(a => { a.classList.remove('active'); a.removeAttribute('aria-current'); });
      if (hit) { hit.link.classList.add('active'); hit.link.setAttribute('aria-current', 'true'); }
    };
    const spyReq = () => { if (!spyTick) { spyTick = true; requestAnimationFrame(spyUpdate); } };
    addEventListener('scroll', spyReq, { passive: true }); addEventListener('resize', spyReq); spyUpdate();
  }


  // network page hero video — phone-sized file on phones; still frame on data-saver / reduced motion; pauses off-screen
  const nv = $('#netVideo');
  if (nv) {
    const saver = navigator.connection && navigator.connection.saveData, mob = isMobile();
    if (mob && nv.dataset.posterMobile) nv.poster = nv.dataset.posterMobile;
    if (!saver && !reduce) {
      nv.muted = true; nv.defaultMuted = true; nv.src = mob ? nv.dataset.srcMobile : nv.dataset.src;
      nv.addEventListener('error', () => nv.removeAttribute('src'), { once: true });
      const go = () => nv.play().catch(() => {});
      go();
      new IntersectionObserver(([en]) => en.isIntersecting ? go() : nv.pause(), { threshold: .05 }).observe(nv.closest('section'));
      document.addEventListener('visibilitychange', () => document.hidden ? nv.pause() : go());
      addEventListener('touchstart', go, { once: true, passive: true });
    }
  }


  // partner photo slots: use the picture only if the file exists (otherwise the gold-gradient placeholder stays)
  $$('.partner-media[data-img]').forEach(el => {
    const im = new Image(); im.onload = () => { el.style.backgroundImage = `url(${el.dataset.img})`; el.classList.add('has-img'); }; im.src = el.dataset.img;
  });


  // Network Standards cards: endless right-to-left drift (cards cloned for a seamless loop; clones hidden from screen readers)
  const stdGrid = $('.std-grid');
  if (stdGrid) {
    const wrap = document.createElement('div'); wrap.className = 'std-marquee'; stdGrid.parentNode.insertBefore(wrap, stdGrid); wrap.appendChild(stdGrid);
    const originals = $$('.std', stdGrid); originals.forEach(c => { c.classList.remove('rv'); c.classList.add('in'); c.style.removeProperty('--d'); });
    for (let n = 0; n < 3; n++) originals.forEach(c => { const k = c.cloneNode(true); k.setAttribute('aria-hidden', 'true'); stdGrid.appendChild(k); });
  }

  const yr = $('#yr'); if (yr) yr.textContent = new Date().getFullYear();
})();
