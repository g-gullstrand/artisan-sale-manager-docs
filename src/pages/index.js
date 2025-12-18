import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/installation">
            Get Started - 5min ⏱️
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/pricing"
            style={{marginLeft: '1rem'}}>
            View Pricing
          </Link>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <strong>10,000+</strong>
            <span>Active Installs</span>
          </div>
          <div className={styles.stat}>
            <strong>4.9★</strong>
            <span>User Rating</span>
          </div>
          <div className={styles.stat}>
            <strong>Free</strong>
            <span>Core Features</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Professional WooCommerce Sale Management`}
      description="Streamline your WooCommerce sales with powerful campaign management, bulk operations, and advanced scheduling. Free and premium features available.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        
        {/* Quick Demo Section */}
        <section className={styles.demoSection}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <Heading as="h2">See It In Action</Heading>
                <p>
                  Create professional sale campaigns in minutes, not hours. 
                  Bulk update thousands of products with a few clicks.
                </p>
                <ul>
                  <li>✅ Bulk price updates across unlimited products</li>
                  <li>✅ Advanced scheduling with automatic activation</li>
                  <li>✅ Campaign priority system for overlapping sales</li>
                  <li>✅ Beautiful shortcodes for frontend display</li>
                </ul>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/getting-started/first-campaign">
                  Create Your First Campaign →
                </Link>
              </div>
              <div className="col col--6">
                <div className={styles.demoVideo}>
                  {/* Placeholder for demo video/screenshot */}
                  <div className={styles.placeholder}>
                    <h3>🎬 Demo Video Coming Soon</h3>
                    <p>Watch how to create a sale campaign in under 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shortcode Preview */}
        <section className={styles.shortcodeSection}>
          <div className="container">
            <Heading as="h2" className="text--center">
              Display Sales Anywhere
            </Heading>
            <p className="text--center">
              Use simple shortcodes to showcase your sale products on any page
            </p>
            
            <div className="row">
              <div className="col col--6">
                <div className="shortcode-example">
                  <h4>Simple Grid</h4>
                  <code>[artisan_sale_products limit="6" columns="3"]</code>
                </div>
                
                <div className="shortcode-example">
                  <h4>Specific Campaign</h4>
                  <code>[artisan_sale_products campaign="123" limit="4"]</code>
                </div>
              </div>
              <div className="col col--6">
                <div className="shortcode-example">
                  <h4>Price Focused</h4>
                  <code>[artisan_sale_products orderby="price" show_sale_badge="true"]</code>
                </div>
                
                <div className="shortcode-example">
                  <h4>Custom Styling</h4>
                  <code>[artisan_sale_products class="my-sale-grid" columns="4"]</code>
                </div>
              </div>
            </div>
            
            <div className="text--center" style={{marginTop: '2rem'}}>
              <Link
                className="button button--outline button--primary"
                to="/docs/features/shortcodes">
                View All Shortcode Options →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className="text--center">
              <Heading as="h2">Ready to Streamline Your Sales?</Heading>
              <p>
                Join thousands of WooCommerce store owners who trust Artisan Sale Manager 
                for their promotional campaigns.
              </p>
              <div className={styles.ctaButtons}>
                <Link
                  className="button button--primary button--lg"
                  to="https://wordpress.org/plugins/artisan-sale-manager/">
                  Download Free Plugin
                </Link>
                <Link
                  className="button button--outline button--primary button--lg"
                  to="/docs/getting-started/installation"
                  style={{marginLeft: '1rem'}}>
                  Read Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
