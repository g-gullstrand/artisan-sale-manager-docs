# Conflict Resolution & Priority System

Learn how Artisan Sale Manager handles situations where multiple campaigns target the same products, ensuring predictable and transparent campaign management through its intelligent conflict resolution system.

## Understanding Campaign Conflicts

A conflict occurs when multiple active campaigns target the same product. Since WooCommerce only supports one sale price per product, the system must determine which campaign's discount should be applied.

### What Causes Conflicts?

**Overlapping Segmentation**
```
Campaign A: Electronics (includes iPhone)
Campaign B: Mobile Phones (includes iPhone)
Result: iPhone appears in both campaigns
```

**Broad Category Selection**
```
Campaign A: All Categories (store-wide sale)
Campaign B: Electronics (category-specific sale)
Result: All electronics products appear in both campaigns
```

**Manual Product Addition**
```
Campaign A: Contains Product #123
Campaign B: User adds Product #123 manually
Result: Product #123 in multiple campaigns
```

## Priority-Based Resolution

Artisan Sale Manager uses a priority system to automatically resolve conflicts without user intervention.

### How Priority Works

**Priority Scale**: 0-999 (higher numbers win)
- **0-49**: Low priority campaigns
- **50-99**: Standard priority campaigns  
- **100-199**: High priority campaigns
- **200+**: Critical/urgent campaigns

**Automatic Resolution**
1. System identifies all campaigns targeting a product
2. Finds the campaign with the highest priority
3. Applies that campaign's discount to the product
4. Other campaigns are overridden but remain active

### Priority Examples

**Example 1: Clear Winner**
```
Product: Wireless Headphones

Campaign A: "Electronics Sale" (Priority: 50) - 20% off
Campaign B: "Audio Equipment" (Priority: 75) - 15% off
Campaign C: "Flash Sale" (Priority: 100) - 30% off

Result: Flash Sale wins → 30% off applied
```

**Example 2: Equal Priority**
```
Campaign A: "Summer Sale" (Priority: 50) - 25% off
Campaign B: "Category Sale" (Priority: 50) - 20% off

Result: Most recently activated campaign wins
```

## Conflict Detection

### Dashboard Indicators

The campaign dashboard shows conflict information:

**Visual Warnings**
- ⚠️ Yellow warning icons for campaigns with conflicts
- Product count adjustments showing actual vs. targeted products
- Priority badges indicating campaign hierarchy

**Conflict Details**
- Which products are in conflict
- Which campaign is currently winning
- How many products are affected

### Product-Level Conflicts

When viewing individual products:

**Conflict Warnings**
```
⚠️ Product Conflict Detected
This product is targeted by multiple campaigns:
- "Electronics Sale" (Priority: 50) - 20% off
- "Flash Sale" (Priority: 100) - 30% off ← Currently Applied
```

**Resolution Status**
- Clear indication of which discount is active
- List of all campaigns targeting the product
- Easy access to adjust priorities

## Managing Conflicts

### Adjusting Priorities

**Increase Priority**
```
Current: "Black Friday Sale" (Priority: 50)
Change to: "Black Friday Sale" (Priority: 150)
Result: Now overrides lower priority campaigns
```

**Decrease Priority**
```
Current: "Flash Sale" (Priority: 100)
Change to: "Flash Sale" (Priority: 25)
Result: Other campaigns may now override this one
```

### Excluding Products

**Campaign-Level Exclusions**
```
Campaign: "Electronics Sale"
Exclude: Premium Headphones, Professional Cameras
Result: These products won't conflict with other campaigns
```

**Segment Refinement**
```
Original: All Electronics
Refined: Electronics → Exclude Audio Equipment
Result: Reduces overlap with audio-specific campaigns
```

### Campaign Deactivation

**Temporary Resolution**
- Pause conflicting campaigns temporarily
- Test different priority configurations
- Reactivate with adjusted settings

**Permanent Resolution**
- Deactivate redundant campaigns
- Merge similar campaigns
- Restructure campaign hierarchy

## Conflict Prevention Strategies

### Strategic Priority Planning

**Hierarchical Structure**
```
Store-wide Sales (Priority: 200+)
├── Seasonal Sales (Priority: 150-199)
├── Category Sales (Priority: 100-149)
├── Product-specific Sales (Priority: 50-99)
└── Testing Campaigns (Priority: 0-49)
```

**Priority Gaps**
- Use increments of 10 or 25
- Leave room for urgent campaigns
- Plan for seasonal priority boosts

### Segmentation Best Practices

**Exclusive Categories**
```
Campaign A: Electronics (exclude Audio)
Campaign B: Audio Equipment only
Result: No overlap between campaigns
```

**Complementary Targeting**
```
Campaign A: High-value products (>$100)
Campaign B: Budget products (<$100)
Result: Natural separation by price point
```

**Time-Based Separation**
```
Campaign A: Weekday promotions
Campaign B: Weekend flash sales
Result: Temporal separation prevents conflicts
```

## Advanced Conflict Scenarios

### Multi-Level Conflicts

**Three-Way Conflicts**
```
Product: Gaming Laptop

Campaign A: "Electronics" (Priority: 50) - 15% off
Campaign B: "Computers" (Priority: 75) - 20% off  
Campaign C: "Gaming Gear" (Priority: 100) - 25% off

Resolution: Gaming Gear wins → 25% off applied
Dashboard: Shows 2 overridden campaigns
```

**Chain Conflicts**
```
Electronics Sale → overrides → Category Sale → overrides → Product Sale
Result: Clear hierarchy with visual indicators
```

### Dynamic Priority Changes

**Seasonal Boosts**
```
Normal: "Holiday Sale" (Priority: 75)
December: "Holiday Sale" (Priority: 200)
January: "Holiday Sale" (Priority: 75)

Result: Automatic seasonal priority management
```

**Flash Sale Overrides**
```
Running: "Electronics Sale" (Priority: 50)
Add: "Flash Sale" (Priority: 150)
Result: Flash sale temporarily overrides electronics sale
```

## Monitoring Conflicts

### Dashboard Monitoring

**Daily Checks**
- Review conflict warnings in dashboard
- Check for unexpected priority changes
- Monitor product count variations

**Weekly Reviews**
- Analyze conflict patterns
- Adjust priority structure if needed
- Plan upcoming campaign priorities

### Conflict Reports

**Campaign Performance**
- Which campaigns are being overridden
- How many products are affected by conflicts
- Revenue impact of priority decisions

**Product Analysis**
- Most contested products
- Categories with frequent conflicts
- Opportunities for better segmentation

## Troubleshooting Conflicts

### Common Issues

**Campaign Not Applying Prices**

*Check Priority Levels*
```
Issue: "Summer Sale" not applying discounts
Diagnosis: Lower priority than active "Flash Sale"
Solution: Increase Summer Sale priority or pause Flash Sale
```

*Verify Campaign Status*
```
Issue: Expected discount not showing
Diagnosis: Campaign is draft or paused
Solution: Activate campaign and check for conflicts
```

**Unexpected Discounts**

*Hidden High-Priority Campaign*
```
Issue: Products showing unexpected 30% discount
Diagnosis: Forgotten high-priority campaign still active
Solution: Review all active campaigns and priorities
```

*Segmentation Overlap*
```
Issue: Wrong campaign applying to products
Diagnosis: Broad segmentation rules causing overlap
Solution: Refine segmentation or adjust priorities
```

### Resolution Steps

**Step 1: Identify Conflicts**
- Check dashboard for warning indicators
- Review campaign product counts
- Look for priority conflicts

**Step 2: Analyze Impact**
- Determine which products are affected
- Assess revenue impact of current resolution
- Consider customer experience implications

**Step 3: Choose Resolution Method**
- Adjust priorities for desired outcome
- Refine segmentation to reduce overlap
- Exclude specific products from campaigns

**Step 4: Implement and Monitor**
- Apply chosen resolution method
- Verify correct discounts are applied
- Monitor for new conflicts

## Best Practices

### Priority Management

**Consistent Numbering**
- Use standardized priority ranges
- Document priority meanings
- Train team on priority system

**Regular Reviews**
- Monthly priority audits
- Seasonal priority adjustments
- Campaign performance analysis

### Conflict Prevention

**Planning Phase**
- Map out campaign priorities before creation
- Consider overlap potential during segmentation
- Plan for seasonal priority changes

**Execution Phase**
- Monitor conflicts during campaign activation
- Quick resolution of unexpected conflicts
- Communication with team about priority changes

### Documentation

**Priority Documentation**
```
Priority Ranges:
- 200+: Black Friday, Critical Sales
- 150-199: Major Seasonal Sales
- 100-149: Category-Specific Sales
- 50-99: Regular Promotions
- 0-49: Testing and Minor Sales
```

**Conflict Log**
- Track common conflict patterns
- Document resolution decisions
- Learn from conflict history

## Getting Help

### Documentation Resources
- **[Campaign Management](./campaigns)**: Creating and managing campaigns
- **[Segment Builder](./segments)**: Advanced product targeting
- **[Getting Started](../getting-started)**: Basic setup and workflow

### Support Channels
- **[FAQ](../faq)**: Common conflict resolution questions
- **[Support Forum](https://wordpress.org/support/plugin/artisan-sale-manager/)**: Community help
- **[GitHub Issues](https://github.com/g-gullstrand/artisan-sale-manager/issues)**: Technical support

The conflict resolution system is designed to be automatic and transparent. Most conflicts resolve themselves through the priority system, but understanding how it works helps you create more effective campaign strategies.
