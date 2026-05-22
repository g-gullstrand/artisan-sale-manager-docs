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
        <div className={styles.heroCallout}>
          <p className={styles.heroCalloutText}>
            Tired of discount plugins that over-promise and under-deliver?
          </p>
        </div>
        <Heading as="h1" className="hero__title">
          Finally, a Sober Sale Manager
        </Heading>
        <p className="hero__subtitle">
          This plugin does ONE thing, and it does it very well: <strong>sets real WooCommerce sale prices</strong>. 
          No gimmicks, no compatibility issues, no broken product feeds.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
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
            <strong>Free</strong>
            <span>Core Features</span>
          </div>
          <div className={styles.stat}>
            <strong>Open Source</strong>
            <span>GPL Licensed</span>
          </div>
          <div className={styles.stat}>
            <strong>WooCommerce Native</strong>
            <span>Real Sale Prices</span>
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
        {/* Real Sale Prices Section */}
        <section className={styles.realPricesSection}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <Heading as="h2">Real Sale Prices, Not Display Tricks</Heading>
                <p>
                  Unlike other plugins that only change what customers see, Artisan Sale Manager 
                  updates the actual <code>_sale_price</code> meta fields in WooCommerce.
                </p>
                <div className={styles.benefitsList}>
                  <div className={styles.benefit}>
                    <span className={styles.checkmark}>✅</span>
                    <strong>Product feeds work correctly</strong> (Google Shopping, Facebook Ads)
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.checkmark}>✅</span>
                    <strong>Third-party plugins see real prices</strong>
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.checkmark}>✅</span>
                    <strong>WooCommerce core blocks work properly</strong>
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.checkmark}>✅</span>
                    <strong>Inventory and reporting stay accurate</strong>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.comparisonBox}>
                  <h3>Other Plugins vs Artisan Sale Manager</h3>
                  <div className={styles.comparison}>
                    <div className={styles.comparisonItem}>
                      <span className={styles.cross}>❌</span>
                      <span>Display-only discounts</span>
                    </div>
                    <div className={styles.comparisonItem}>
                      <span className={styles.cross}>❌</span>
                      <span>Broken product feeds</span>
                    </div>
                    <div className={styles.comparisonItem}>
                      <span className={styles.cross}>❌</span>
                      <span>Complex, bloated features</span>
                    </div>
                    <div className={styles.comparisonDivider}></div>
                    <div className={styles.comparisonItem}>
                      <span className={styles.checkmark}>✅</span>
                      <span>Real WooCommerce sale prices</span>
                    </div>
                    <div className={styles.comparisonItem}>
                      <span className={styles.checkmark}>✅</span>
                      <span>Perfect feed compatibility</span>
                    </div>
                    <div className={styles.comparisonItem}>
                      <span className={styles.checkmark}>✅</span>
                      <span>Simple, focused, reliable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bridge Section */}
        <section className={styles.bridgeSection}>
          <div className="container">
            <div className="text--center">
              <Heading as="h2" className={styles.bridgeQuestion}>
                So it's a sale price bulk editor?
              </Heading>
              <p className={styles.bridgeAnswer}>
                Well... <strong>yes</strong>, and <strong>no</strong>.
              </p>
              <p className={styles.bridgeExplanation}>
                It <em>is</em> the sale price bulk editor you've been dreaming about. 
                But it's also <strong>so much more</strong>...
              </p>
            </div>
          </div>
        </section>
        
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
                  <code>[asm_products_on_sale limit="6" columns="3"]</code>
                </div>
                
                <div className="shortcode-example">
                  <h4>Specific Campaign</h4>
                  <code>[asm_products_on_sale campaign="summer-sale" limit="4"]</code>
                </div>
              </div>
              <div className="col col--6">
                <div className="shortcode-example">
                  <h4>Sort by Price</h4>
                  <code>[asm_products_on_sale orderby="price" order="ASC"]</code>
                </div>
                
                <div className="shortcode-example">
                  <h4>With Pagination</h4>
                  <code>[asm_products_on_sale per_page="12" paginate="true" class="my-sale-grid"]</code>
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
      </main>
    </Layout>
  );
}
