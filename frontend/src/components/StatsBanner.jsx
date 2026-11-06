import { motion } from 'framer-motion';
import { Users, Award, ShieldCheck, Star, MapPin, Car, Sparkles, CheckCircle2 } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import './StatsBanner.css';

const defaultStats = [
  {
    icon: Users,
    value: 50000,
    suffix: '+',
    label: 'Happy Devotees & Travelers',
    subtext: 'Safely transported across South India'
  },
  {
    icon: Award,
    value: 15,
    suffix: '+ Yrs',
    label: 'Tirupati Travel Expertise',
    subtext: 'Deep local & temple routes knowledge'
  },
  {
    icon: Car,
    value: 120,
    suffix: '+ Cabs',
    label: 'Clean AC Vehicle Fleet',
    subtext: 'Sedans, Innovas, Tempo Travellers & Buses'
  },
  {
    icon: Star,
    value: 4.9,
    decimals: 1,
    suffix: ' / 5',
    label: 'Pilgrim Rating',
    subtext: 'Over 12,500+ verified customer reviews'
  }
];

export default function StatsBanner({ stats = defaultStats, title, subtitle, className = '' }) {
  const milestoneClass = subtitle === 'OUR MILESTONES' ? ' home-milestones' : '';

  return (
    <section className={`stats-banner-wrapper${milestoneClass} ${className}`}>
      <div className="stats-banner-container">
        {(title || subtitle) && (
          <div className="stats-header">
            {subtitle && <span className="stats-eyebrow">{subtitle}</span>}
            {title && <h2>{title}</h2>}
          </div>
        )}

        <div className="stats-grid">
          {stats.map((stat, i) => {
            const Icon = stat.icon || Sparkles;
            return (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="stat-card-glow" />
                <div className="stat-icon-wrapper">
                  <Icon size={24} />
                </div>
                <div className="stat-value-container">
                  <span className="stat-number">
                    <AnimatedCounter
                      end={stat.value}
                      start={stat.start || 0}
                      decimals={stat.decimals || 0}
                      prefix={stat.prefix || ''}
                      suffix={stat.suffix || ''}
                    />
                  </span>
                </div>
                <h3 className="stat-label">{stat.label}</h3>
                {stat.subtext && <p className="stat-subtext">{stat.subtext}</p>}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
