# Bulk Operations

Artisan Sale Manager's bulk operations allow you to apply sales to hundreds or thousands of products simultaneously, saving hours of manual work.

## Overview

The bulk operations system can handle:
- **Unlimited products**: No limits on how many products you can update
- **Category-based sales**: Apply to entire product categories
- **Individual selection**: Cherry-pick specific products
- **Smart filtering**: Target products by price, stock status, attributes
- **Batch processing**: Large operations are processed in background

## Category Sales

### Apply Sale to Entire Category

1. **Navigate to Sale Manager**
2. **Click "New Campaign"**
3. **Select "Category Sale"**
4. **Choose target categories**:
   - Single category: "Electronics"
   - Multiple categories: "Electronics", "Clothing", "Books"
   - Include subcategories: Enable to include child categories
5. **Configure discount** (see [Pricing Options](./pricing))
6. **Set schedule** (see [Scheduling](./scheduling))
7. **Click "Apply Sale"**

### Category Exclusions

Exclude specific products from category sales:

```
Category: Electronics (100 products)
Exclude: Premium headphones, Professional cameras
Result: 98 products get the sale price
```

## Individual Product Selection

### Manual Selection

1. **Choose "Individual Products"**
2. **Search and select products**:
   - Type product names
   - Use SKU search
   - Browse by category
3. **Review selection** in the preview panel
4. **Apply sale settings**

### Smart Filters

Target products based on criteria:

**Price Range**
```
Products priced between $50 - $200
Apply 15% discount
```

**Stock Status**
```
Only in-stock products
Exclude out-of-stock items
```

**Product Attributes**
```
Color: Red, Blue
Size: Large, XL
Brand: Nike, Adidas
```

## Bulk Pricing Strategies

### Tiered Discounts

Apply different discounts based on product price:

```
$0 - $50:     10% off
$51 - $100:   15% off  
$101 - $200:  20% off
$200+:        25% off
```

### Quantity-Based Pricing

Adjust discounts based on stock levels:

```
High stock (50+ units): 30% off (clear inventory)
Medium stock (10-49):   20% off (standard sale)
Low stock (1-9):        10% off (preserve margin)
```

## Processing Large Operations

### Background Processing

For operations affecting 500+ products:

1. **Operation queued**: Shows in processing queue
2. **Progress tracking**: Real-time progress bar
3. **Email notification**: Completion alert sent
4. **Error reporting**: Failed products listed

### Performance Optimization

**Batch Size**: Operations processed in batches of 100 products
**Memory Management**: Automatic memory cleanup between batches
**Server Load**: Respects server limits to prevent timeouts

## Monitoring and Rollback

### Operation History

Track all bulk operations:
- **Date/time** of operation
- **Products affected** count
- **Discount applied** details
- **User** who performed operation
- **Status** (completed, failed, rolled back)

### Rollback Operations

Undo bulk operations safely:

1. **Go to Operation History**
2. **Find the operation** to undo
3. **Click "Rollback"**
4. **Confirm** the rollback
5. **Original prices restored** automatically

⚠️ **Note**: Rollback only works if original prices were backed up (enabled by default).

## Best Practices

### Before Large Operations

- ✅ **Backup your database**
- ✅ **Test on staging site** first
- ✅ **Start with small batch** (10-50 products)
- ✅ **Check product feed compatibility**

### During Operations

- ✅ **Monitor progress** in admin dashboard
- ✅ **Don't close browser** during processing
- ✅ **Avoid other bulk operations** simultaneously

### After Operations

- ✅ **Verify prices** on frontend
- ✅ **Check product feeds** (Google Shopping, etc.)
- ✅ **Test checkout process**
- ✅ **Monitor sales performance**

## Troubleshooting

### Common Issues

**Operation Stuck/Frozen**
- Check server error logs
- Increase PHP memory limit
- Reduce batch size in settings

**Some Products Not Updated**
- Check product status (published/draft)
- Verify category assignments
- Review error log in operation history

**Product Feeds Not Updating**
- Clear WooCommerce cache
- Regenerate product feed
- Check feed plugin compatibility

### Getting Help

- **[Troubleshooting Guide](../troubleshooting)**: Detailed solutions
- **[Support Forum](https://wordpress.org/support/plugin/artisan-sale-manager/)**: Community help
- **[GitHub Issues](https://github.com/g-gullstrand/artisan-sale-manager/issues)**: Technical support
