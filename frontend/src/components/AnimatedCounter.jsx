import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({
  end = 0,
  start = 0,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = ''
}) {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;
      const targetEnd = parseFloat(end);

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Ease-out cubic animation formula
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = start + easeProgress * (targetEnd - start);

        setCount(currentVal);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(targetEnd);
        }
      };

      requestAnimationFrame(step);
    }
  }, [isInView, end, start, duration]);

  const formattedValue = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString('en-IN');

  return (
    <span ref={ref} className={`animated-counter ${className}`}>
      {prefix}{formattedValue}{suffix}
    </span>
  );
}
