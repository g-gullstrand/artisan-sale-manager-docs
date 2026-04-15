# Frequently Asked Questions

Find answers to common questions about Artisan Sale Manager, from basic setup to advanced campaign management.

## General Questions

### What makes Artisan Sale Manager different from other sale plugins?

Artisan Sale Manager updates **real WooCommerce sale prices** instead of just changing display prices. This means:
- Product feeds work correctly (Google Shopping, Facebook Ads)
- Third-party plugins see actual sale prices
- WooCommerce analytics are accurate
- No theme compatibility issues

### Do I need coding knowledge to use this plugin?

No coding knowledge is required. The plugin features:
- Modern React-based interface
- Visual campaign builder
- Point-and-click product selection
- Automated conflict resolution

### Can I use this with my existing theme and plugins?

Yes, Artisan Sale Manager is designed for maximum compatibility:
- Works with all WooCommerce-compatible themes
- Compatible with caching plugins
- Integrates with product feed plugins
- Supports all payment gateways

## Installation & Setup

### What are the system requirements?

**Minimum Requirements:**
- WordPress 5.0 or higher
- WooCommerce 5.0 or higher
- PHP 7.4 or higher
- MySQL 5.6 or higher

**Recommended:**
- WordPress 6.0+
- WooCommerce 7.0+
- PHP 8.0+
- MySQL 8.0+

### How do I install the plugin?

**From WordPress Repository:**
1. Go to Plugins → Add New
2. Search for "Artisan Sale Manager"
3. Click Install Now → Activate

**Manual Installation:**
1. Download the plugin zip file
2. Upload to `/wp-content/plugins/`
3. Activate through WordPress admin

### Where do I access the plugin after installation?

Navigate to **WooCommerce → Sale Manager** in your WordPress admin to access the campaign dashboard.

### Do I need to configure anything after installation?

The plugin works out of the box with sensible defaults. However, you may want to review:
- Default campaign priorities
- Backup settings (enabled by default)
- Product feed compatibility settings

## Campaign Management

### How do I create my first campaign?

1. Go to WooCommerce → Sale Manager
2. Click "Create Campaign"
3. Enter campaign name and discount details
4. Use the segment builder to select products
5. Set schedule (optional) and priority
6. Click "Create Campaign" and activate

### What's the difference between Draft and Active campaigns?

**Draft Campaigns:**
- Created but not applying sale prices
- Can be edited without affecting your store
- Perfect for testing and preparation

**Active Campaigns:**
- Currently applying sale prices to products
- Visible to customers on your store
- Automatically handling conflicts with other campaigns

### Can I schedule campaigns to start and end automatically?

Yes! When creating a campaign, you can:
- Set automatic start dates
- Set automatic end dates
- Schedule campaigns weeks or months in advance
- Override scheduled campaigns with manual activation

### How many campaigns can I run simultaneously?

There's no limit to the number of campaigns you can run. The plugin efficiently handles:
- Multiple active campaigns
- Automatic conflict resolution
- Performance optimization for large catalogs

## Product Selection & Segmentation

### What is the segment builder?

The segment builder allows you to target products based on criteria rather than selecting them individually:
- **Categories**: Target entire product categories
- **Stock Status**: In-stock, out-of-stock, or low-stock products
- **Product Types**: Simple, variable, grouped products
- **Dynamic Selection**: New products automatically included

### How do I target products by category?

1. In the campaign editor, go to the Products tab
2. Select "Categories" in the segment builder
3. Choose one or more categories
4. Enable "Include Subcategories" if needed
5. Preview the results to see affected products

### Can I exclude specific products from a campaign?

Yes, you can exclude products in several ways:
- **Category Exclusions**: Exclude entire categories
- **Product Exclusions**: Exclude specific individual products
- **Stock Status Filtering**: Exclude out-of-stock items
- **Product Type Filtering**: Exclude certain product types

### What happens when I add new products to my store?

If new products match your campaign's segmentation criteria, they're automatically included. For example:
- Campaign targets "Electronics" category
- You add a new smartphone to Electronics
- Smartphone automatically gets the campaign discount

### How do I see which products will be affected before activating?

The segment builder shows:
- Real-time product count as you adjust criteria
- Preview list of affected products
- Conflict warnings for products in other campaigns
- Price impact estimates

## Conflict Resolution

### What happens when multiple campaigns target the same product?

The plugin uses a priority system to automatically resolve conflicts:
1. System identifies all campaigns targeting the product
2. Campaign with highest priority wins
3. That campaign's discount is applied
4. Other campaigns remain active but are overridden

### How do campaign priorities work?

**Priority Scale**: 0-999 (higher numbers win)
- **0-49**: Low priority campaigns
- **50-99**: Standard campaigns
- **100-199**: High priority campaigns
- **200+**: Critical/urgent campaigns

### Can I change campaign priorities after creation?

Yes, you can adjust priorities anytime:
1. Edit the campaign
2. Change the priority number
3. Save changes
4. Conflicts automatically resolve with new priorities

### How do I know if my campaigns have conflicts?

The dashboard shows conflict indicators:
- ⚠️ Warning icons on campaigns with conflicts
- Product count adjustments
- Clear indication of which campaign is winning
- Detailed conflict information in campaign details

### What's the best way to avoid conflicts?

**Prevention Strategies:**
- Plan priority structure before creating campaigns
- Use exclusive category targeting
- Leave priority gaps (use 10, 20, 30 instead of 1, 2, 3)
- Review segmentation for potential overlaps

## Pricing & Discounts

### What discount types are supported?

**Percentage Discounts:**
- 10% off, 25% off, 50% off, etc.
- Applied to regular price
- Automatically calculated for variable products

**Fixed Amount Discounts:**
- $5 off, $10 off, $25 off, etc.
- Subtracted from regular price
- Minimum price protection (won't go below $0)

### How are variable product discounts calculated?

For variable products (products with variations):
- Discount applied to each variation individually
- Each variation gets its own sale price
- Product page shows price range if variations differ
- Maintains proper WooCommerce pricing structure

### Can I set different discounts for different products in the same campaign?

Currently, each campaign applies one discount rate to all targeted products. For different discount rates:
- Create separate campaigns with different priorities
- Use segmentation to target different product groups
- Set priorities to control which discount applies to overlapping products

### What happens to products that are already on sale?

The campaign discount replaces any existing sale prices:
- Original prices are backed up automatically
- Campaign discount becomes the new sale price
- When campaign ends, original prices are restored
- Manual sale prices are preserved in backups

## Technical Questions

### Does the plugin work with caching plugins?

Yes, Artisan Sale Manager is compatible with all major caching plugins:
- WP Rocket
- W3 Total Cache
- WP Super Cache
- LiteSpeed Cache
- Cloudflare

The plugin automatically handles cache clearing when prices change.

### Will this work with my product feed plugins?

Yes! Because we update real WooCommerce sale prices, all product feed plugins see the correct prices:
- Google Shopping feeds
- Facebook product catalogs
- Amazon seller feeds
- Any WooCommerce-compatible feed plugin

### How does this affect my WooCommerce analytics?

Positively! Since we use real sale prices:
- WooCommerce reports show accurate sale data
- Revenue tracking is correct
- Sale performance metrics are reliable
- Third-party analytics plugins work properly

### Is the plugin translation-ready?

Yes, the plugin is fully internationalized:
- All text strings are translatable
- Supports RTL languages
- Compatible with WPML and Polylang
- Community translations welcome

## Performance & Scalability

### How many products can the plugin handle?

The plugin is designed for scalability:
- **Small stores**: 1-100 products (instant processing)
- **Medium stores**: 100-1,000 products (near-instant)
- **Large stores**: 1,000-10,000 products (background processing)
- **Enterprise**: 10,000+ products (optimized batch processing)

### Will this slow down my website?

No, the plugin is performance-optimized:
- Efficient database queries
- Minimal frontend impact
- Background processing for large operations
- Caching-friendly architecture

### How often should I clean up old campaigns?

**Best Practices:**
- Deactivate completed campaigns immediately
- Archive campaigns monthly
- Remove unused draft campaigns quarterly
- Keep successful campaigns as templates

## Troubleshooting

### My campaign isn't applying sale prices. What should I check?

**Common Solutions:**
1. **Check campaign status**: Ensure it's "Active" not "Draft"
2. **Verify product selection**: Use segment builder preview
3. **Check for conflicts**: Look for higher priority campaigns
4. **Clear cache**: Clear site and browser cache
5. **Check product status**: Ensure products are published

### Products show the wrong discount amount. How do I fix this?

**Troubleshooting Steps:**
1. **Check campaign priority**: Higher priority campaign may be winning
2. **Review segmentation**: Product may be in multiple campaigns
3. **Verify discount settings**: Check percentage vs. fixed amount
4. **Check product type**: Variable products may need individual variation review

### The segment builder shows 0 products. What's wrong?

**Common Causes:**
1. **Category selection**: Selected categories may be empty
2. **Stock status filter**: Too restrictive (e.g., only out-of-stock items)
3. **Product type filter**: No products of selected type exist
4. **Combination of filters**: Multiple filters may exclude all products

**Solutions:**
- Broaden category selection
- Change stock status to "All"
- Include more product types
- Remove some filters to test

### Campaign was automatically deactivated. Why?

This happens when you modify campaign products:
- **Product addition/removal**: Triggers auto-deactivation for safety
- **Segmentation changes**: Prevents unintended price changes
- **Reactivation required**: Click "Activate" to apply changes

This is a safety feature to prevent accidental price changes on your live store.

### Sale prices aren't showing on the frontend. What should I check?

**Troubleshooting Checklist:**
1. **Clear all caches**: Site cache, browser cache, CDN cache
2. **Check theme compatibility**: Test with default WooCommerce theme
3. **Verify campaign status**: Ensure campaign is active
4. **Check product pages**: Look at individual product pages
5. **Review conflict resolution**: Check if another campaign is winning

### How do I restore original prices if something goes wrong?

**Automatic Backup System:**
- Original prices are automatically backed up
- Deactivating campaigns restores original prices
- Backup data is stored safely in the database

**Manual Restoration:**
1. Deactivate the problematic campaign
2. Original prices are automatically restored
3. Check frontend to confirm restoration
4. Investigate and fix the issue before reactivating

## Getting More Help

### Where can I get additional support?

**Documentation:**
- [Getting Started Guide](./getting-started)
- [Campaign Management](./features/campaigns)
- [Segment Builder Guide](./features/segments)
- [Conflict Resolution](./features/conflicts)

**Community Support:**
- [WordPress.org Support Forum](https://wordpress.org/support/plugin/artisan-sale-manager/)
- [GitHub Issues](https://github.com/g-gullstrand/artisan-sale-manager/issues)

**Professional Support:**
- Consider professional WooCommerce development services for complex customizations
- Enterprise support available for large-scale implementations

### How do I report bugs or request features?

**Bug Reports:**
1. Check if the issue is already reported on GitHub
2. Provide detailed steps to reproduce
3. Include WordPress/WooCommerce versions
4. Attach relevant screenshots or logs

**Feature Requests:**
1. Search existing feature requests on GitHub
2. Describe the use case and expected behavior
3. Explain how it would benefit other users
4. Consider contributing to development

### Can I contribute to the plugin development?

Yes! We welcome contributions:
- **Code contributions**: Submit pull requests on GitHub
- **Documentation**: Help improve guides and tutorials
- **Translations**: Contribute language translations
- **Testing**: Report bugs and test new features
- **Community support**: Help other users in forums

The plugin is built with modern development practices and welcomes community involvement.
