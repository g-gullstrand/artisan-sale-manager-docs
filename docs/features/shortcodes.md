---
sidebar_position: 4
---

# Shortcodes

Display sale products anywhere on your site using flexible shortcodes.

## Basic Usage

### Show All Sale Products
```
[artisan_sale_products]
```

### Show Products from Specific Campaign
```
[artisan_sale_products campaign="123"]
```

### Limit Number of Products
```
[artisan_sale_products limit="8"]
```

## All Parameters

| Parameter | Default | Description | Example |
|-----------|---------|-------------|---------|
| `campaign` | `all` | Show products from specific campaign ID or "all" for any active campaign | `campaign="123"` |
| `limit` | `12` | Maximum number of products to display | `limit="8"` |
| `columns` | `3` | Number of grid columns (1-6) | `columns="4"` |
| `orderby` | `menu_order` | Sort products by: `menu_order`, `title`, `date`, `price`, `popularity` | `orderby="price"` |
| `order` | `ASC` | Sort direction: `ASC` or `DESC` | `order="DESC"` |
| `paginate` | `false` | Enable pagination (future feature) | `paginate="true"` |
| `show_sale_badge` | `true` | Display sale percentage badge | `show_sale_badge="false"` |
| `show_original_price` | `true` | Show crossed-out original price | `show_original_price="false"` |
| `class` | `""` | Add custom CSS classes | `class="my-custom-class"` |

## Examples

### Simple Grid
```
[artisan_sale_products limit="6" columns="3"]
```

### Price-Focused Display
```
[artisan_sale_products orderby="price" order="ASC" show_sale_badge="true"]
```

### Specific Campaign Showcase
```
[artisan_sale_products campaign="456" limit="4" columns="2" class="featured-sale"]
```

### Minimal Display
```
[artisan_sale_products show_sale_badge="false" show_original_price="false" columns="4"]
```

## Styling & Customization

### CSS Classes
The shortcode generates the following CSS structure:

```html
<div class="artisan-sale-products-grid columns-3">
    <div class="artisan-sale-product-item">
        <div class="sale-badge">-25%</div>
        <div class="product-image">...</div>
        <div class="product-details">
            <h3 class="product-title">...</h3>
            <div class="product-price">
                <span class="original-price">...</span>
                <span class="sale-price">...</span>
            </div>
            <div class="product-actions">...</div>
        </div>
    </div>
</div>
```

### Custom Styling
Add custom CSS to your theme:

```css
.artisan-sale-products-grid.my-custom-class {
    gap: 30px;
}

.artisan-sale-products-grid.my-custom-class .artisan-sale-product-item {
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```

## WordPress Filters

### Modify Query Arguments
```php
add_filter('artisan_sale_products_query_args', function($args, $atts) {
    // Add custom meta query
    $args['meta_query'][] = [
        'key' => '_featured',
        'value' => 'yes'
    ];
    return $args;
}, 10, 2);
```

### Customize Product HTML
```php
add_filter('artisan_sale_products_item_html', function($html, $product, $atts) {
    // Add custom product rating
    $rating = $product->get_average_rating();
    if ($rating) {
        $html = str_replace(
            '<div class="product-actions">',
            '<div class="product-rating">Rating: ' . $rating . '/5</div><div class="product-actions">',
            $html
        );
    }
    return $html;
}, 10, 3);
```

### Customize Grid Wrapper
```php
add_filter('artisan_sale_products_grid_html', function($html, $products, $atts) {
    // Add products count header
    $count = count($products);
    $header = '<h3>Sale Products (' . $count . ')</h3>';
    return $header . $html;
}, 10, 3);
```

### Custom No Products Message
```php
add_filter('artisan_sale_products_no_products_message', function($message, $atts) {
    if ($atts['campaign'] !== 'all') {
        return 'No products found in this campaign.';
    }
    return 'No sale products available right now. Check back soon!';
}, 10, 2);
```

## Responsive Design

The shortcode is fully responsive:
- **Desktop**: Shows specified number of columns
- **Tablet (≤768px)**: Max 2 columns for 3+ column layouts
- **Mobile (≤480px)**: Always 1 column

## Performance Tips

1. **Use specific campaigns** when possible instead of "all"
2. **Limit product count** for better page load times
3. **Cache pages** containing shortcodes if using caching plugins
4. **Optimize images** used in products for faster loading

## Troubleshooting

### No Products Showing
- Check if campaigns are active
- Verify products have sale prices set
- Ensure WooCommerce is active and products are published

### Styling Issues
- Check if theme CSS is conflicting
- Verify the shortcode CSS file is loading
- Use browser developer tools to inspect elements

### Performance Issues
- Reduce the `limit` parameter
- Use specific `campaign` instead of "all"
- Consider caching solutions
