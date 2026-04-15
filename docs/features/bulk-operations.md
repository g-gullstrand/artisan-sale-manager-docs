# Bulk Operations & Performance

Learn how Artisan Sale Manager handles operations on multiple products simultaneously and what to expect when working with larger product catalogs.

## Overview

Artisan Sale Manager processes campaign operations efficiently:
- **Direct Processing**: Campaign activation/deactivation happens immediately
- **Efficient Queries**: Optimized database operations for product updates
- **Real-time Updates**: Sale prices applied instantly across your store
- **Scalable Design**: Handles hundreds to thousands of products reliably
- **Memory Efficient**: Optimized for standard WordPress hosting

## How Bulk Operations Work

### Campaign Activation Process

When you activate a campaign targeting multiple products:

1. **Segment Resolution**: System identifies all products matching your criteria
2. **Price Calculation**: Discount applied to each product's regular price
3. **Database Update**: Sale prices updated in WooCommerce product meta
4. **Cache Clearing**: Product caches cleared for immediate frontend updates
5. **Completion**: Campaign marked as active, changes visible immediately

### Campaign Deactivation Process

When you deactivate a campaign:

1. **Product Identification**: System finds all products in the deactivated campaign
2. **Targeted Price Sync**: Recalculates sale prices for products in any active campaign
3. **Conflict Resolution**: Remaining active campaigns apply their prices to overlapping products
4. **Price Clearing**: Products with no remaining active campaigns show regular prices
5. **Cache Clearing**: Ensures frontend shows updated prices
6. **Completion**: Campaign marked as inactive

## Performance Considerations

### Product Count Guidelines

**Small Campaigns (1-100 products)**
- Instant processing (< 2 seconds)
- No special considerations needed
- Suitable for most shared hosting

**Medium Campaigns (100-500 products)**
- Quick processing (2-10 seconds)
- May see brief loading during activation
- Works well on most hosting plans

**Large Campaigns (500-1,000+ products)**
- Processing time varies (10-30 seconds)
- Consider activating during low-traffic periods
- May require higher-performance hosting
- Monitor for PHP timeout issues

### Hosting Requirements

**Shared Hosting**
- Works fine for campaigns up to 500 products
- May experience slower processing on large campaigns
- Consider upgrading for stores with 1,000+ products

**VPS/Dedicated Hosting**
- Recommended for campaigns over 500 products
- Better performance and reliability
- Can handle larger product catalogs efficiently

**WordPress-Specific Hosting**
- Usually optimized for WordPress performance
- Good balance of cost and performance
- Suitable for most store sizes

## Troubleshooting Performance Issues

### Common Issues

**Campaign Activation Takes Too Long**
- **Cause**: Large number of products being processed
- **Solution**: Consider breaking into smaller campaigns
- **Prevention**: Test campaign size on staging environment

**PHP Timeout Errors**
- **Cause**: Server execution time limit reached
- **Solution**: Increase `max_execution_time` in PHP settings
- **Alternative**: Contact hosting provider for assistance

**Memory Limit Errors**
- **Cause**: PHP memory limit exceeded during processing
- **Solution**: Increase `memory_limit` in PHP settings
- **Workaround**: Reduce campaign size temporarily

**Slow Frontend Updates**
- **Cause**: Caching plugins not clearing properly
- **Solution**: Manually clear all caches after campaign activation
- **Prevention**: Configure caching plugin to clear on product updates

### Optimization Tips

**For Large Campaigns**
- Activate during low-traffic periods
- Clear all caches before and after activation
- Monitor server resources during processing
- Consider upgrading hosting if frequently handling large campaigns

**Database Optimization**
- Ensure WooCommerce database tables are optimized
- Regular database maintenance recommended
- Consider database indexing for large product catalogs

## Best Practices

### Campaign Size Management
- **Start small**: Test with 10-50 products initially
- **Scale gradually**: Increase campaign size as you gain confidence
- **Monitor performance**: Watch for slowdowns or errors
- **Plan timing**: Activate large campaigns during off-peak hours

### Server Considerations
- **Know your limits**: Understand your hosting plan's capabilities
- **Monitor resources**: Watch CPU and memory usage during operations
- **Plan upgrades**: Consider better hosting for growing stores
- **Backup regularly**: Always backup before large operations

## Getting Help

- **[Campaign Management Guide](./campaigns)**: Learn campaign creation and management
- **[Segment Builder Guide](./segments)**: Master product targeting
- **[Conflict Resolution](./conflicts)**: Handle overlapping campaigns
- **[FAQ](../faq)**: Common questions and troubleshooting
- **[Support Forum](https://wordpress.org/support/plugin/artisan-sale-manager/)**: Community help
