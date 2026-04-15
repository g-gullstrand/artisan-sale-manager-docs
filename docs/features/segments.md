# Segment Builder

The Segment Builder is Artisan Sale Manager's most powerful feature, allowing you to target products with precision using advanced filtering criteria. Instead of manually selecting individual products, you define rules that automatically include the right products in your campaigns.

## What is Product Segmentation?

Product segmentation allows you to target products based on their characteristics rather than selecting them individually. This means:

- **Dynamic Selection**: New products matching your criteria are automatically included
- **Scalable Management**: Handle thousands of products with simple rules
- **Precise Targeting**: Combine multiple criteria for exact product selection
- **Future-Proof**: Campaigns adapt as your inventory changes

## Accessing the Segment Builder

The Segment Builder is integrated into the campaign creation process:

1. **Create or edit a campaign**
2. **Navigate to the "Products" tab**
3. **Use the segment builder interface** to define your targeting rules
4. **Preview results** to see which products will be affected

## Core Segmentation Options

### Category Targeting

Target entire product categories and their subcategories.

**Single Category**
```
Category: Electronics
Result: All products in the Electronics category
```

**Multiple Categories**
```
Categories: Electronics, Clothing, Books
Result: Products from any of these categories
```

**Include Subcategories**
```
Category: Electronics
Include Subcategories: Yes
Result: Electronics + Computers + Mobile Phones + Accessories
```

**Category Exclusions**
```
Categories: Electronics
Exclude: Premium Headphones, Professional Cameras
Result: All electronics except specified products
```

### Stock Status Filtering

Control which products based on their availability status.

**In Stock Only**
```
Stock Status: In Stock
Use Case: Avoid promoting unavailable products
Result: Only products customers can purchase
```

**Out of Stock Targeting**
```
Stock Status: Out of Stock
Use Case: Pre-order promotions or restocking alerts
Result: Currently unavailable products
```

**Low Stock Alerts**
```
Stock Status: Low Stock
Use Case: Clearance sales to move remaining inventory
Result: Products with limited quantities
```

**All Stock Statuses**
```
Stock Status: All
Use Case: Store-wide promotions regardless of availability
Result: Every product matching other criteria
```

### Product Type Selection

Choose which WooCommerce product types to include.

**Simple Products**
```
Product Type: Simple
Result: Standard single-variant products
Best For: Straightforward promotions
```

**Variable Products**
```
Product Type: Variable
Result: Products with variations (size, color, etc.)
Best For: Clothing, accessories with options
```

**Grouped Products**
```
Product Type: Grouped
Result: Product bundles and sets
Best For: Bundle promotions
```

**External/Affiliate Products**
```
Product Type: External
Result: Products linking to external sites
Best For: Affiliate promotions
```

**Multiple Types**
```
Product Types: Simple, Variable
Result: Both simple and variable products
Best For: Most standard campaigns
```

## Advanced Segmentation Techniques

### Combining Multiple Criteria

Create precise targeting by combining different segmentation options:

**Example: Electronics Flash Sale**
```
Categories: Electronics, Computers
Stock Status: In Stock
Product Types: Simple, Variable
Result: Available electronics and computers with variations
```

**Example: Clearance Campaign**
```
Categories: Clothing, Accessories
Stock Status: Low Stock
Product Types: Simple
Result: Low-stock clothing and accessories for clearance
```

### Exclusion Strategies

Use exclusions to fine-tune your product selection:

**Category with Exclusions**
```
Category: Electronics
Exclude Categories: Premium Audio
Result: All electronics except premium audio products
```

**Product-Level Exclusions**
```
Categories: All Categories
Exclude Products: Featured Item #1, Featured Item #2
Result: Store-wide campaign excluding specific featured products
```

## Segmentation Preview

### Real-Time Product Count

The segment builder shows live product counts as you adjust criteria:

```
Current Selection:
- Categories: Electronics (150 products)
- Stock Status: In Stock (142 products)
- Product Types: Simple, Variable (138 products)

Final Result: 138 products will be affected
```

### Product Preview List

See exactly which products will be included:
- **Product names** and SKUs
- **Current prices** and stock status
- **Categories** and product types
- **Conflict warnings** if products are in other campaigns

## Segmentation Best Practices

### Start Broad, Then Narrow

**Step 1: Category Selection**
```
Start with: All Electronics (500 products)
```

**Step 2: Stock Filtering**
```
Add filter: In Stock Only (450 products)
```

**Step 3: Product Type**
```
Add filter: Simple + Variable (425 products)
```

**Step 4: Exclusions**
```
Exclude: Premium items (400 products)
Final selection: 400 targeted products
```

### Common Segmentation Patterns

**Seasonal Campaigns**
```
Categories: Seasonal categories (Winter Clothing, Holiday Decor)
Stock Status: In Stock
Timing: Scheduled for season start
```

**Inventory Clearance**
```
Categories: All categories
Stock Status: Low Stock
Discount: Higher percentages to move inventory
```

**New Product Promotions**
```
Categories: Relevant categories
Date Added: Recent products (if using custom fields)
Stock Status: In Stock
```

**Category-Specific Sales**
```
Categories: Target category only
Stock Status: In Stock
Product Types: Simple, Variable
Exclusions: Already discounted items
```

## Dynamic Segmentation Benefits

### Automatic Product Inclusion

When you add new products to your store:

**Before Segmentation**
- Manually add each new product to relevant campaigns
- Risk missing products in active promotions
- Time-consuming maintenance

**With Segmentation**
- New products automatically included if they match criteria
- Campaigns stay current without manual updates
- Consistent promotion coverage

### Inventory Management Integration

Segmentation adapts to inventory changes:

**Stock Status Changes**
```
Campaign: "In Stock Electronics Sale"
Product goes out of stock → Automatically excluded
Product restocked → Automatically included again
```

**Category Changes**
```
Campaign: "Electronics Promotion"
Product moved to Electronics category → Automatically included
Product moved out of Electronics → Automatically excluded
```

## Troubleshooting Segmentation

### No Products Found

**Check Category Selection**
- Verify categories exist and have products
- Check for typos in category names
- Ensure subcategories are included if needed

**Review Stock Status Filter**
- Confirm products have the selected stock status
- Check if "In Stock" filter is too restrictive
- Verify stock management is enabled

**Validate Product Types**
- Ensure selected product types exist in your store
- Check if products are published and visible
- Verify product type assignments

### Too Many Products

**Add More Filters**
- Use stock status to reduce selection
- Add category exclusions
- Exclude specific high-value products

**Split Into Multiple Campaigns**
- Create separate campaigns for different categories
- Use different priorities for different product groups
- Manage smaller, focused campaigns

### Unexpected Products Included

**Review Category Assignments**
- Check if products are in multiple categories
- Verify subcategory inclusion settings
- Review product categorization

**Check Exclusion Rules**
- Ensure exclusions are properly configured
- Verify excluded categories/products exist
- Test exclusion logic with preview

## Advanced Use Cases

### Multi-Tier Campaigns

Create campaigns with different discount levels:

**Premium Products (Priority 100)**
```
Categories: Premium Electronics
Discount: 10%
Stock Status: In Stock
```

**Standard Products (Priority 50)**
```
Categories: Electronics
Exclude Categories: Premium Electronics
Discount: 20%
Stock Status: In Stock
```

### Seasonal Rotation

Set up campaigns that activate based on inventory:

**Winter Clearance**
```
Categories: Winter Clothing
Stock Status: Low Stock
Discount: 40%
Schedule: End of winter season
```

**Spring Preparation**
```
Categories: Spring Clothing
Stock Status: In Stock
Discount: 15%
Schedule: Early spring
```

### A/B Testing Segments

Test different approaches on similar products:

**Campaign A: Electronics - Conservative**
```
Categories: Electronics
Discount: 15%
Exclude: High-value items
```

**Campaign B: Electronics - Aggressive**
```
Categories: Electronics
Discount: 25%
Include: All items
Priority: Higher than Campaign A
```

## Performance Considerations

### Large Catalog Optimization

**Efficient Segmentation**
- Use specific categories rather than "All Categories"
- Apply stock status filters to reduce processing
- Exclude large categories you don't need

**Batch Processing**
- Large campaigns process in background
- Monitor campaign activation progress
- Avoid multiple large campaigns simultaneously

### Database Performance

**Indexing Considerations**
- Ensure category and stock status fields are indexed
- Monitor query performance on large catalogs
- Consider staging large segmentation changes

## Getting Help

### Documentation Resources
- **[Campaign Management](./campaigns)**: Creating and managing campaigns
- **[Conflict Resolution](./conflicts)**: Handling overlapping campaigns
- **[Getting Started](../getting-started)**: Basic setup and first campaign

### Support Channels
- **[FAQ](../faq)**: Common segmentation questions
- **[Support Forum](https://wordpress.org/support/plugin/artisan-sale-manager/)**: Community help
- **[GitHub Issues](https://github.com/g-gullstrand/artisan-sale-manager/issues)**: Technical support

The Segment Builder is designed to make complex product targeting simple and intuitive. Start with basic category selection and gradually add more criteria as you become comfortable with the system.
