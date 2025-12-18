import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bulk Operations',
    icon: '🚀',
    description: (
      <>
        Update thousands of products in seconds. Apply discounts, set sale prices, 
        and manage inventory across your entire catalog with powerful bulk operations.
      </>
    ),
  },
  {
    title: 'Smart Scheduling',
    icon: '⏰',
    description: (
      <>
        Set it and forget it. Schedule sales to start and end automatically, 
        with conflict detection and priority management for overlapping campaigns.
      </>
    ),
  },
  {
    title: 'Beautiful Display',
    icon: '🎨',
    description: (
      <>
        Showcase your sales anywhere with flexible shortcodes. Responsive grids, 
        customizable styling, and seamless WooCommerce integration.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
