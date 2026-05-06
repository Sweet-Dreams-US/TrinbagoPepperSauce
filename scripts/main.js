// ==========================================================================
// TRINBAGO PEPPER SAUCE — Site interactions
// ==========================================================================

(function() {
  'use strict';

  // ---------- Nav scroll state ----------
  const nav = document.getElementById('nav');
  const setNavState = () => {
    if (!nav) return;
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', setNavState, { passive: true });
  setNavState();

  // ---------- Mobile nav toggle ----------
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        toggle.classList.remove('open');
        links.classList.remove('open');
      }
    });
  }

  // ---------- Reveal on scroll (handles all 3 reveal variants) ----------
  const revealEls = document.querySelectorAll('[data-reveal], [data-reveal-slide], [data-reveal-pop]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // ---------- Animated counters ----------
  const counters = document.querySelectorAll('[data-counter]');
  if ('IntersectionObserver' in window && counters.length) {
    const ic = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.counter);
        const dur = parseInt(el.dataset.duration || '1800', 10);
        const suffix = el.dataset.suffix || '';
        const start = performance.now();
        const fmt = (n) => {
          if (target >= 1000) return Math.round(n).toLocaleString();
          if (Number.isInteger(target)) return Math.round(n).toString();
          return n.toFixed(1);
        };
        const tick = (now) => {
          const t = Math.min((now - start) / dur, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = fmt(target * eased) + suffix;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        ic.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(c => ic.observe(c));
  }

  // ---------- Hero parallax (legacy .hero-image — keeps working on inner pages) ----------
  const heroImage = document.querySelector('.hero-image img');
  if (heroImage && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    const updateParallax = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroImage.parentElement.parentElement.offsetHeight;
      if (scrollY < heroHeight) {
        const offset = scrollY * 0.4;
        heroImage.style.transform = `translateY(${offset}px) scale(${1 + scrollY * 0.0003})`;
      }
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  // ---------- Hero photo: subtle scroll-zoom + opacity fade ----------
  const heroPhotoBg = document.getElementById('heroPhotoBg');
  const heroPhoto = document.getElementById('heroPhoto');
  if (heroPhotoBg && heroPhoto && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    const updateHero = () => {
      const rect = heroPhoto.getBoundingClientRect();
      const heroHeight = heroPhoto.offsetHeight;
      // progress: 0 when hero fully in view at top, 1 when fully scrolled past
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(scrolled / heroHeight, 1);

      // subtle zoom 1.0 → 1.18, opacity 1.0 → 0.15
      const scale = 1 + progress * 0.18;
      const opacity = 1 - progress * 0.85;
      heroPhotoBg.style.transform = `scale(${scale})`;
      heroPhotoBg.style.opacity = opacity.toFixed(3);
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateHero);
        ticking = true;
      }
    }, { passive: true });
    updateHero();
  }

  // ---------- Scroll progress bar (top of page) ----------
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);
  const updateProgress = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    progressBar.style.transform = `scaleX(${pct / 100})`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // ---------- Magnetic CTA buttons (slight pull on hover) ----------
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.btn-primary, .btn-pepper, .nav-cta').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ---------- Form interactions (demo only) ----------
  document.querySelectorAll('form[data-demo]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const wrap = form.closest('.form-wrap') || form;
      const data = Object.fromEntries(new FormData(form));
      console.log('[Trinbago Demo] Form submission:', data);

      const success = form.querySelector('.form-success');
      if (success) {
        success.classList.add('show');
        form.classList.add('submitted');
        return;
      }

      // Build success state with safe DOM methods
      while (wrap.firstChild) wrap.removeChild(wrap.firstChild);

      const successEl = document.createElement('div');
      successEl.className = 'form-success show';

      const eyebrow = document.createElement('span');
      eyebrow.className = 'mono text-pepper';
      eyebrow.textContent = '— Yuh in! —';
      successEl.appendChild(eyebrow);

      const heading = document.createElement('h3');
      heading.className = 'h-2 mt-4';
      heading.textContent = "Welcome to De Crew.";
      successEl.appendChild(heading);

      const lead = document.createElement('p');
      lead.className = 'lead mt-4';
      lead.textContent = "Check yuh inbox for de 10% off code + first drop alert. We don't spam, we just bring de heat.";
      successEl.appendChild(lead);

      wrap.appendChild(successEl);
    });
  });

  // ---------- Tilt on hover for cards (subtle) ----------
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const tiltCards = document.querySelectorAll('[data-tilt]');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateZ(0)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ---------- Tab system ----------
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const tabs = group.querySelectorAll('[data-tab]');
    const panels = group.querySelectorAll('[data-panel]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const id = tab.dataset.tab;
        tabs.forEach(t => t.classList.toggle('active', t === tab));
        panels.forEach(p => p.classList.toggle('active', p.dataset.panel === id));
      });
    });
  });

  // ---------- Pricing toggle (one-time vs subscription) ----------
  document.querySelectorAll('[data-price-toggle]').forEach(toggle => {
    const opts = toggle.querySelectorAll('button');
    opts.forEach(btn => {
      btn.addEventListener('click', () => {
        opts.forEach(b => b.classList.toggle('active', b === btn));
        const mode = btn.dataset.mode;
        document.querySelectorAll('[data-price]').forEach(el => {
          el.textContent = el.dataset[mode === 'founders' ? 'priceFounders' : 'priceStandard'];
        });
        document.querySelectorAll('[data-price-mode]').forEach(el => {
          el.textContent = mode === 'founders' ? 'One-Time Order' : 'Subscribe + Save 15%';
        });
      });
    });
  });

  // ---------- Year stamp ----------
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // ---------- Wobbly hover for stamp/badge elements ----------
  document.querySelectorAll('.stamp, .ticket-stamp').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.animation = 'wobble 0.6s ease-in-out';
    });
    el.addEventListener('animationend', () => {
      el.style.animation = '';
    });
  });

  // ---------- Inject scroll-progress styles ----------
  const style = document.createElement('style');
  style.textContent = `
    .scroll-progress {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--pepper), var(--scotch), var(--habanero));
      transform-origin: left;
      transform: scaleX(0);
      z-index: 100;
      pointer-events: none;
      box-shadow: 0 0 12px var(--pepper-glow);
    }
  `;
  document.head.appendChild(style);

})();
