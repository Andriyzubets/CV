(() => {
  'use strict';

  const headingSelector = 'h1, h2, h3';
  const eyebrowSelector = '.eyebrow, .label';
  const targets = Array.from(document.querySelectorAll(`${headingSelector}, ${eyebrowSelector}`));

  if (!targets.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const splitNode = (node, state) => {
    const fragment = document.createDocumentFragment();

    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;

        if (/^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(part));
          return;
        }

        const word = document.createElement('span');
        word.className = 'word-reveal__word';
        word.style.setProperty('--word-index', state.index);
        word.textContent = part;
        state.index += 1;
        fragment.appendChild(word);
      });

      return fragment;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      fragment.appendChild(node.cloneNode(true));
      return fragment;
    }

    const clone = node.cloneNode(false);
    Array.from(node.childNodes).forEach((child) => clone.appendChild(splitNode(child, state)));
    fragment.appendChild(clone);
    return fragment;
  };

  targets.forEach((target) => {
    if (target.dataset.wordRevealReady === 'true') return;

    target.dataset.wordRevealReady = 'true';
    target.classList.add('word-reveal');

    if (!reduceMotion) {
      const state = { index: 0 };
      const fragment = document.createDocumentFragment();
      Array.from(target.childNodes).forEach((node) => fragment.appendChild(splitNode(node, state)));
      target.replaceChildren(fragment);
    }
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -12% 0px',
    threshold: .2
  });

  targets.forEach((target) => observer.observe(target));
})();

(() => {
  'use strict';

  const targets = Array.from(document.querySelectorAll('.appear'));

  if (!targets.length) return;

  document.querySelectorAll('[data-appear-group]').forEach((group) => {
    const items = Array.from(group.querySelectorAll('.appear')).filter(
      (item) => item.closest('[data-appear-group]') === group
    );

    items.forEach((item, index) => {
      item.style.setProperty('--appear-delay', `${Math.min(index * 70, 280)}ms`);
    });
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: .12
  });

  targets.forEach((target) => observer.observe(target));
})();
