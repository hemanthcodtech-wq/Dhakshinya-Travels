import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  amount = 0.2,
  once = true
}) {
  const directions = {
    up: { opacity: 0, y: 35 },
    down: { opacity: 0, y: -35 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    zoom: { opacity: 0, scale: 0.92 }
  };

  const initial = directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      {children}
    </motion.div>
  );
}
