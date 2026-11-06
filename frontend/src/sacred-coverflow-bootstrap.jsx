import React from 'react';
import { createRoot } from 'react-dom/client';
import SacredDestinationsCoverFlow from './SacredDestinationsCoverFlow';

function readDestinationSlides(slider) {
  return Array.from(slider.querySelectorAll('.swiper-slide'))
    .map((slide) => {
      const card = slide.querySelector('.destination-card');
      if (!card) return null;
      const image = card.querySelector('.slide-image img');
      const title = card.querySelector('.card-body h3');
      const link = card.querySelector('.card-action-btn');
      if (!image || !title) return null;
      return {
        title: title.textContent.trim(),
        image: image.currentSrc || image.src,
        href: link?.href || '#'
      };
    })
    .filter(Boolean);
}

function mountSacredCoverFlow() {
  const section = document.querySelector('.destinations-preview');
  const slider = section?.querySelector('.home-slider');
  if (!section || !slider || section.querySelector('.sacred-coverflow-mount')) return false;

  const slides = readDestinationSlides(slider);
  if (!slides.length) return false;

  const mount = document.createElement('div');
  mount.className = 'sacred-coverflow-mount';
  slider.style.display = 'none';
  slider.setAttribute('aria-hidden', 'true');
  section.querySelector('.section-heading')?.setAttribute('aria-hidden', 'true');
  section.insertBefore(mount, slider);

  createRoot(mount).render(<SacredDestinationsCoverFlow slides={slides} />);
  return true;
}

const start = () => {
  if (mountSacredCoverFlow()) return;
  const observer = new MutationObserver(() => {
    if (mountSacredCoverFlow()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start, { once: true });
} else {
  start();
}
