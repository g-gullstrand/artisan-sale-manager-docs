import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bulk Sale Campaigns',
    icon: '🚀',
    description: (
      <>
        Apply percentage, fixed, or target-price discounts across hundreds of products 
        at once. Organize sales into named campaigns and activate them with a single click.
      </>
    ),
  },
  {
    title: 'Scheduling & Priority',
    icon: '⏰',
    description: (
      <>
        Set start and end dates — campaigns activate and deactivate automatically via WP Cron. 
        When campaigns overlap, the priority system ensures the right price always wins.
      </>
    ),
  },
  {
    title: 'Shortcode Display',
    icon: '🎨',
    description: (
      <>
        Show sale products anywhere with <code>[asm_products_on_sale]</code>. 
        Filter by campaign, sort by price, paginate, and override the template from your theme.
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
