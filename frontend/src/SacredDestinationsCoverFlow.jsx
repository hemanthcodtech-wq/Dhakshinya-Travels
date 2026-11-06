import React, { useEffect, useMemo, useRef, useState } from 'react';
import './sacred-coverflow.css';

export default function SacredDestinationsCoverFlow({ slides }) {
  const items = useMemo(() => slides || [], [slides]);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pointerStart = useRef(null);

  useEffect(() => {
    if (active >= items.length) setActive(0);
  }, [active, items.length]);

  useEffect(() => {
    if (items.length < 2 || isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [items.length, isPaused]);

  if (!items.length) return null;

  const go = (direction) => {
    setActive((current) => (current + direction + items.length) % items.length);
  };

  const positionFor = (index) => {
    let offset = index - active;
    const half = Math.floor(items.length / 2);
    if (offset > half) offset -= items.length;
    if (offset < -half) offset += items.length;
    return offset;
  };

  const handlePointerDown = (event) => {
    pointerStart.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) > 45) go(distance < 0 ? 1 : -1);
  };

  return (
    <div
      className="sacred-coverflow"
      aria-label="Sacred destinations carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div className="sacred-coverflow-heading">
        <p className="sacred-coverflow-eyebrow">EXPLORE DIVINE PLACES</p>
        <h2>Sacred <span>Destinations</span></h2>
        <p>Discover spiritual bliss with our comfortable and affordable travel services<br className="sacred-coverflow-break" /> to the most sacred destinations.</p>
      </div>

      <button type="button" className="sacred-coverflow-arrow sacred-coverflow-prev" onClick={() => go(-1)} aria-label="Previous destination">
        <span aria-hidden="true">‹</span>
      </button>

      <div className="sacred-coverflow-stage">
        {items.map((item, index) => {
          const position = positionFor(index);
          return (
            <article
              key={`${index}-${item.title}`}
              className={`sacred-coverflow-card ${position === 0 ? 'is-active' : ''}`}
              data-position={position}
              aria-hidden={position !== 0}
              onClick={() => position !== 0 && setActive(index)}
            >
              <div className="sacred-coverflow-image-wrap">
                <img src={item.image} alt={item.title} draggable="false" />
                <span className="sacred-coverflow-location">⌖ {item.title}</span>
              </div>
              <div className="sacred-coverflow-card-body">
                <div>
                  <h3>{item.title}</h3>
                  <div className="sacred-coverflow-meta">
                    <span>◷ 1 Day</span>
                    <span>♟ 2-10 People</span>
                    <span>▣ AC Cab</span>
                  </div>
                </div>
                <a href={item.href} className="sacred-coverflow-details" onClick={(event) => event.stopPropagation()}>
                  View Details <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <button type="button" className="sacred-coverflow-arrow sacred-coverflow-next" onClick={() => go(1)} aria-label="Next destination">
        <span aria-hidden="true">›</span>
      </button>

      <div className="sacred-coverflow-pagination" aria-label="Choose destination">
        {items.map((item, index) => (
          <button
            type="button"
            key={item.title}
            className={`sacred-coverflow-dot ${index === active ? 'is-active' : ''}`}
            onClick={() => setActive(index)}
            aria-label={`Go to ${item.title}`}
            aria-current={index === active ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}
