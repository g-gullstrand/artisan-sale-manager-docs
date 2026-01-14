# Getting Started

Get up and running with Artisan Sale Manager in just a few minutes. This guide will walk you through installation, initial setup, and creating your first sale campaign.

## Installation

### From WordPress Repository

1. **Navigate to Plugins** in your WordPress admin
2. **Click "Add New"**
3. **Search for "Artisan Sale Manager"**
4. **Click "Install Now"** and then **"Activate"**

### Manual Installation

1. **Download** the plugin from [WordPress.org](https://wordpress.org/plugins/artisan-sale-manager/)
2. **Upload** the plugin folder to `/wp-content/plugins/`
3. **Activate** the plugin through the 'Plugins' menu in WordPress

## Requirements

- **WordPress**: 5.0 or higher
- **WooCommerce**: 5.0 or higher  
- **PHP**: 7.4 or higher
- **Node.js**: 16+ (for development only)

## First-Time Setup

### 1. Access the Plugin

After activation, navigate to:
**WooCommerce → Sale Manager**

You'll see the modern React-based interface for managing your sales.

### 2. Initial Configuration

The plugin works out of the box with sensible defaults, but you may want to review:

- **Default sale duration**: How long sales run by default
- **Backup settings**: Whether to backup original prices
- **Feed compatibility**: Enable for Google Shopping/Facebook Ads

## Creating Your First Sale Campaign

### Quick Start: Category Sale

1. **Go to WooCommerce → Sale Manager**
2. **Click "New Campaign"**
3. **Choose "Category Sale"**
4. **Select your target category** (e.g., "Electronics")
5. **Set discount**: 20% off
6. **Set schedule**: Start now, end in 7 days
7. **Click "Apply Sale"**

✅ **Done!** All products in the Electronics category now have real sale prices applied.

### Understanding Real Sale Prices

Unlike other plugins that only change display prices, Artisan Sale Manager updates the actual `_sale_price` meta fields in WooCommerce. This means:

- ✅ **Product feeds work correctly** (Google Shopping, Facebook Ads)
- ✅ **Third-party plugins see real sale prices**
- ✅ **WooCommerce core features work properly**
- ✅ **Inventory and reporting are accurate**

## What's Next?

Now that you have your first sale running, explore these features:

- **[Bulk Operations](./features/bulk-operations)**: Apply sales to hundreds of products at once
- **[Smart Pricing](./features/pricing)**: Advanced discount calculations
- **[Scheduling](./features/scheduling)**: Automated sale management
- **[Shortcodes](./features/shortcodes)**: Display sale products on your site

## Need Help?

- **[Troubleshooting Guide](./troubleshooting)**: Common issues and solutions
- **[Support Forum](https://wordpress.org/support/plugin/artisan-sale-manager/)**: Community help
- **[GitHub Issues](https://github.com/g-gullstrand/artisan-sale-manager/issues)**: Bug reports and feature requests
