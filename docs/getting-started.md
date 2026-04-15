# Getting Started

Get up and running with Artisan Sale Manager in just a few minutes. This guide will walk you through installation, initial setup, and creating your first campaign using our advanced segment builder.

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
- **MySQL**: 5.6 or higher

## First-Time Setup

### 1. Access the Plugin

After activation, navigate to:
**WooCommerce → Sale Manager**

You'll see the modern React-based campaign dashboard with an intuitive interface for managing your sales.

### 2. Understanding the Interface

The main dashboard shows:
- **Campaign List**: All your active, scheduled, and draft campaigns
- **Campaign Status**: Active, Draft, Scheduled, or Paused
- **Product Count**: How many products each campaign affects
- **Priority System**: Higher priority campaigns override lower ones
- **Duration Tracking**: See how long campaigns have been running

## Creating Your First Campaign

### Step 1: Create New Campaign

1. **Click "Create Campaign"** on the dashboard
2. **Enter campaign details**:
   - **Name**: "Electronics Flash Sale"
   - **Description**: "20% off all electronics for the weekend"
   - **Discount Type**: Percentage
   - **Discount Value**: 20%

### Step 2: Use the Segment Builder

This is where Artisan Sale Manager shines - advanced product targeting:

1. **Select Categories**: Choose "Electronics" and any subcategories
2. **Filter by Stock Status**: Select "In Stock" to avoid out-of-stock items
3. **Product Type Filter**: Include "Simple" and "Variable" products
4. **Preview Results**: See exactly which products will be affected

### Step 3: Set Schedule (Optional)

Choose your campaign timing:
- **Manual Control**: Activate/deactivate manually
- **Scheduled**: Set start and end dates for automatic management

### Step 4: Launch Campaign

1. **Review Settings**: Double-check discount and product selection
2. **Click "Create Campaign"**
3. **Activate Now** or save as draft for later

✅ **Done!** Your campaign is now live with real WooCommerce sale prices applied.

## Understanding Real Sale Prices

Unlike other plugins that only change display prices, Artisan Sale Manager updates the actual `_sale_price` meta fields in WooCommerce. This means:

- ✅ **Product feeds work correctly** (Google Shopping, Facebook Ads)
- ✅ **Third-party plugins see real sale prices**
- ✅ **WooCommerce analytics are accurate**
- ✅ **No theme compatibility issues**
- ✅ **Works with all payment gateways**

## Campaign Management

### Monitoring Your Campaigns

From the dashboard you can:
- **View Performance**: See how many products are affected
- **Check Conflicts**: Identify overlapping campaigns
- **Adjust Priority**: Change which campaign takes precedence
- **Pause/Resume**: Stop campaigns temporarily
- **Duplicate**: Copy successful campaigns for reuse

### Priority System

When multiple campaigns target the same product:
1. **Higher priority wins**: Campaign with highest priority applies its discount
2. **Automatic resolution**: No manual intervention needed
3. **Clear indicators**: Dashboard shows which campaign is winning
4. **Easy adjustment**: Change priorities anytime

## Advanced Features

### Conflict Resolution
- **Smart Detection**: Automatically identifies product conflicts
- **Priority-Based**: Highest priority campaign always wins
- **Visual Indicators**: Clear warnings when conflicts exist
- **Easy Resolution**: Adjust priorities or exclude products

### Backup & Rollback
- **Automatic Backup**: Original prices saved before changes
- **Safe Rollback**: Restore original prices anytime
- **Campaign History**: Track all changes and modifications

## What's Next?

Now that you have your first campaign running, explore these advanced features:

- **[Campaign Management](./features/campaigns)**: Master campaign creation and management
- **[Segment Builder](./features/segments)**: Advanced product targeting techniques
- **[Conflict Resolution](./features/conflicts)**: Handle overlapping campaigns
- **[Scheduling](./features/scheduling)**: Automated campaign management

## Need Help?

- **[Campaign Guide](./features/campaigns)**: Detailed campaign management
- **[Segment Builder Guide](./features/segments)**: Master product targeting
- **[FAQ](./faq)**: Common questions and solutions
- **[Support Forum](https://wordpress.org/support/plugin/artisan-sale-manager/)**: Community help
- **[GitHub Issues](https://github.com/g-gullstrand/artisan-sale-manager/issues)**: Bug reports and feature requests
