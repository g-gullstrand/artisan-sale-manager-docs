# Campaign Management

Learn how to create, manage, and monitor sale campaigns with Artisan Sale Manager's powerful campaign system. This guide covers everything from basic campaign creation to advanced management techniques.

## Campaign Overview

Campaigns are the core of Artisan Sale Manager. Each campaign is an independent sale with its own:
- **Product Selection**: Which products to include using advanced segmentation
- **Discount Settings**: Percentage or fixed amount discounts
- **Schedule**: Manual control or automated start/end dates
- **Priority**: Determines which campaign wins when products overlap
- **Status**: Draft, Active, Scheduled, or Paused

## Creating Your First Campaign

### Step 1: Access Campaign Dashboard

Navigate to **WooCommerce → Sale Manager** to access the campaign dashboard. You'll see:
- List of existing campaigns
- Campaign status indicators
- Product counts and priorities
- Quick action buttons

### Step 2: Create New Campaign

Click **"Create Campaign"** to open the campaign creation form.

#### Basic Campaign Information

**Campaign Name**
```
Example: "Black Friday Electronics Sale"
```
Choose a descriptive name that clearly identifies the campaign's purpose.

**Description** (Optional)
```
Example: "25% off all electronics and accessories for Black Friday weekend"
```
Internal description to help you remember the campaign's goals.

**Discount Configuration**
- **Discount Type**: Choose "Percentage" or "Fixed Amount"
- **Discount Value**: Enter the discount amount (e.g., 25 for 25% off)

**Priority Setting**
- **Priority**: Number from 0-999 (higher numbers win conflicts)
- **Default**: 0 (standard priority)
- **High Priority**: 100+ (for important campaigns)

### Step 3: Product Selection

Use the advanced segment builder to target products. See the [Segment Builder Guide](./segments) for detailed instructions.

**Quick Selection Options:**
- **Categories**: Select entire product categories
- **Stock Status**: In-stock, out-of-stock, or low-stock products
- **Product Types**: Simple, variable, grouped products

### Step 4: Schedule Configuration

Choose how your campaign should run:

**Manual Control**
- Start and stop the campaign manually
- Perfect for flash sales or testing
- Full control over timing

**Scheduled Campaign**
- Set automatic start and end dates
- Campaign activates/deactivates automatically
- Ideal for planned promotions

### Step 5: Launch Campaign

**Save as Draft**
- Campaign created but not active
- Review and test before going live
- Make changes without affecting store

**Activate Immediately**
- Campaign goes live instantly
- Sale prices applied to all targeted products
- Visible to customers immediately

## Campaign Dashboard

### Understanding Campaign Status

**Active** 🟢
- Campaign is live and applying sale prices
- Products show discounted prices on frontend
- Highest priority among active campaigns

**Draft** ⚪
- Campaign created but not activated
- No effect on product prices
- Can be edited and activated later

**Scheduled** 🟡
- Campaign waiting for start date
- Will activate automatically at scheduled time
- Can be force-activated early if needed

**Paused** 🟠
- Campaign temporarily stopped
- Original prices restored
- Can be resumed anytime

### Campaign Information Display

Each campaign shows:
- **Name & Description**: Campaign identification
- **Status Badge**: Current campaign state
- **Priority Level**: Conflict resolution priority
- **Product Count**: Number of affected products
- **Duration**: How long campaign has been running
- **Actions**: Quick management buttons

## Managing Active Campaigns

### Campaign Actions

**Activate/Pause**
- Toggle campaign on/off instantly
- Useful for testing or temporary stops
- Original prices automatically restored when paused

**Edit Campaign**
- Modify discount amounts
- Change product selection
- Update schedules
- Adjust priorities

**Duplicate Campaign**
- Copy successful campaigns
- Modify for different products or discounts
- Reuse proven strategies

**View Details**
- See complete campaign configuration
- Review product selection
- Check for conflicts with other campaigns

### Priority Management

When multiple campaigns target the same products:

**Priority Rules**
1. **Higher number wins**: Campaign with highest priority applies its discount
2. **Automatic resolution**: System handles conflicts automatically
3. **Visual indicators**: Dashboard shows which campaign is winning
4. **Easy adjustment**: Change priorities anytime

**Priority Examples**
```
Campaign A: "Electronics Sale" (Priority: 10)
Campaign B: "Clearance Items" (Priority: 5)
Campaign C: "Flash Sale" (Priority: 15)

Result: Campaign C wins on overlapping products
```

**Best Practices**
- **Standard campaigns**: Priority 0-50
- **Important sales**: Priority 51-100
- **Flash/urgent sales**: Priority 101+
- **Leave gaps**: Use 10, 20, 30 instead of 1, 2, 3

## Campaign Monitoring

### Performance Tracking

**Product Count Monitoring**
- Track how many products are affected
- Monitor changes as inventory updates
- Identify campaigns with no products

**Conflict Detection**
- Automatic identification of overlapping campaigns
- Visual warnings in dashboard
- Easy resolution tools

**Duration Tracking**
- See how long campaigns have been running
- Identify campaigns that may need attention
- Plan campaign rotations

### Campaign Health Checks

**Regular Monitoring Tasks**
- ✅ Check for campaign conflicts
- ✅ Verify product counts are as expected
- ✅ Monitor frontend pricing accuracy
- ✅ Review campaign performance metrics

**Warning Signs**
- ⚠️ Campaign with 0 products (check segmentation)
- ⚠️ Multiple high-priority conflicts
- ⚠️ Campaigns running longer than intended
- ⚠️ Unexpected product count changes

## Advanced Campaign Strategies

### Campaign Hierarchies

**Seasonal Structure**
```
Black Friday (Priority: 100)
├── Electronics (Priority: 90)
├── Clothing (Priority: 80)
└── Books (Priority: 70)
```

**Product Lifecycle Management**
```
New Arrivals (Priority: 50)
Regular Sales (Priority: 25)
Clearance (Priority: 75)
End of Life (Priority: 100)
```

### Campaign Combinations

**Complementary Campaigns**
- Target different product categories
- No overlap, no conflicts
- Run simultaneously for store-wide sales

**Tiered Campaigns**
- Different discount levels by priority
- Premium products get smaller discounts
- Bulk items get larger discounts

### Seasonal Campaign Planning

**Preparation Phase**
1. Create campaigns as drafts
2. Configure product selection
3. Test on staging environment
4. Schedule activation dates

**Execution Phase**
1. Monitor campaign performance
2. Adjust priorities if needed
3. Handle conflicts quickly
4. Track sales metrics

**Cleanup Phase**
1. Deactivate completed campaigns
2. Archive successful strategies
3. Document lessons learned
4. Prepare for next season

## Campaign Best Practices

### Planning & Setup

**Campaign Naming**
- Use descriptive, consistent names
- Include dates for seasonal campaigns
- Mention discount amounts for clarity
- Example: "2024-Q1-Electronics-25pct"

**Priority Planning**
- Plan priority structure before creating campaigns
- Leave room for urgent campaigns
- Document priority meanings
- Review and adjust regularly

**Testing Strategy**
- Always test on staging environment
- Start with small product sets
- Verify pricing on frontend
- Check product feed compatibility

### Ongoing Management

**Daily Tasks**
- Check dashboard for conflicts
- Monitor campaign performance
- Verify frontend pricing accuracy

**Weekly Tasks**
- Review campaign effectiveness
- Adjust priorities if needed
- Plan upcoming campaigns
- Archive completed campaigns

**Monthly Tasks**
- Analyze campaign performance data
- Document successful strategies
- Clean up old draft campaigns
- Update priority structure if needed

## Troubleshooting Common Issues

### Campaign Not Applying Prices

**Check Campaign Status**
- Ensure campaign is "Active"
- Verify start date hasn't passed
- Check for higher priority conflicts

**Verify Product Selection**
- Review segment builder settings
- Check product count in dashboard
- Ensure products meet all criteria

**Frontend Caching**
- Clear site cache
- Check caching plugin settings
- Verify WooCommerce cache is cleared

### Priority Conflicts

**Identify Conflicts**
- Look for warning indicators in dashboard
- Check overlapping product selections
- Review priority assignments

**Resolve Conflicts**
- Adjust campaign priorities
- Exclude conflicting products
- Modify product selection criteria

### Performance Issues

**Large Campaign Optimization**
- Break large campaigns into smaller ones
- Use more specific segmentation
- Monitor server performance during activation

**Database Performance**
- Ensure proper indexing
- Monitor query performance
- Consider staging large changes

## Getting Help

### Documentation Resources
- **[Segment Builder Guide](./segments)**: Advanced product targeting
- **[Conflict Resolution](./conflicts)**: Managing campaign overlaps
- **[Scheduling Guide](./scheduling)**: Automated campaign management

### Support Channels
- **[FAQ](../faq)**: Common questions and solutions
- **[Support Forum](https://wordpress.org/support/plugin/artisan-sale-manager/)**: Community help
- **[GitHub Issues](https://github.com/g-gullstrand/artisan-sale-manager/issues)**: Bug reports and feature requests

### Professional Services
For complex implementations or custom requirements, consider professional WooCommerce development services to maximize your campaign effectiveness.
