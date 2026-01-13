---
sidebar_position: 1
---

# Shortcodes

Display your sale products anywhere on your site with powerful, flexible shortcodes.

## Basic Usage

The main shortcode for displaying sale products:

```
[artisan_sale_products]
```

This displays all products currently on sale in a responsive grid layout.

## Parameters

### Layout Options

| Parameter | Default | Description |
|-----------|---------|-------------|
| `columns` | `3` | Number of columns (1-6) |
| `limit` | `12` | Maximum products to show (-1 for unlimited) |
| `orderby` | `date` | Sort order: `date`, `title`, `price`, `rand` |
| `order` | `DESC` | Sort direction: `ASC` or `DESC` |

### Filtering Options

| Parameter | Default | Description |
|-----------|---------|-------------|
| `category` | `''` | Product category slug(s), comma-separated |
| `tag` | `''` | Product tag slug(s), comma-separated |
| `campaign` | `''` | Specific campaign name or ID |
| `min_price` | `0` | Minimum price filter |
| `max_price` | `0` | Maximum price filter (0 = no limit) |

### Display Options

| Parameter | Default | Description |
|-----------|---------|-------------|
| `show_price` | `true` | Show product prices |
| `show_sale_badge` | `true` | Show sale percentage badges |
| `show_add_to_cart` | `true` | Show add to cart buttons |
| `image_size` | `medium` | Image size: `thumbnail`, `medium`, `large`, `full` |

## Examples

### Basic Grid
```
[artisan_sale_products columns="4" limit="8"]
```

### Category-Specific Sales
```
[artisan_sale_products category="electronics,clothing" columns="3"]
```

### Campaign Showcase
```
[artisan_sale_products campaign="summer-sale" columns="2" limit="6"]
```

### Price Range Filter
```
[artisan_sale_products min_price="50" max_price="200" orderby="price" order="ASC"]
```

### Minimal Display
```
[artisan_sale_products show_sale_badge="false" show_add_to_cart="false" columns="5"]
```

## Styling

### CSS Classes

The shortcode generates semantic CSS classes for easy styling:

```css
.artisan-sale-products-grid {
    /* Main container */
}

.artisan-sale-product-item {
    /* Individual product card */
}

.artisan-sale-product-item .product-image {
    /* Product image container */
}

.artisan-sale-product-item .product-details {
    /* Product info section */
}

.artisan-sale-product-item .product-price {
    /* Price display */
}

.artisan-sale-product-item .sale-badge {
    /* Sale percentage badge */
}
```

### Responsive Behavior

The grid automatically adapts to different screen sizes:

- **Desktop**: Full column count
- **Tablet** (≤768px): Maximum 2 columns
- **Mobile** (≤480px): Single column

### Custom Styling Example

```css
/* Custom sale product styling */
.artisan-sale-products-grid {
    gap: 30px;
    margin: 40px 0;
}

.artisan-sale-product-item {
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.artisan-sale-product-item:hover {
    transform: translateY(-5px);
}

.sale-badge {
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    font-weight: bold;
}
```

## Advanced Usage

### Multiple Shortcodes

You can use multiple shortcodes on the same page:

```html
<h2>Featured Electronics Sale</h2>
[artisan_sale_products category="electronics" limit="4" columns="4"]

<h2>Clothing Clearance</h2>
[artisan_sale_products category="clothing" limit="6" columns="3" orderby="price"]
```

### Integration with Page Builders

The shortcode works seamlessly with popular page builders:

- **Elementor**: Use the Shortcode widget
- **Gutenberg**: Use the Shortcode block
- **Beaver Builder**: Use the HTML module
- **Divi**: Use the Code module

### Performance Considerations

For optimal performance:

- Use `limit` parameter to control the number of products
- Consider caching for high-traffic pages
- Use specific categories/campaigns rather than showing all sales

## Filters & Hooks

### PHP Filters

Developers can modify shortcode behavior:

```php
// Modify shortcode attributes
add_filter('artisan_sale_products_shortcode_atts', function($atts) {
    $atts['columns'] = 4; // Force 4 columns
    return $atts;
});

// Modify product query
add_filter('artisan_sale_products_query_args', function($args) {
    $args['meta_query'][] = [
        'key' => '_featured',
        'value' => 'yes'
    ];
    return $args;
});

// Modify output HTML
add_filter('artisan_sale_products_item_html', function($html, $product) {
    // Add custom content to each product
    return $html . '<div class="custom-badge">Hot Deal!</div>';
}, 10, 2);
```

### JavaScript Events

Frontend events for dynamic interactions:

```javascript
// Fired when products are loaded
document.addEventListener('artisan_sale_products_loaded', function(e) {
    console.log('Products loaded:', e.detail.products);
});

// Fired when add to cart is clicked
document.addEventListener('artisan_sale_add_to_cart', function(e) {
    console.log('Product added:', e.detail.product_id);
});
```

## Troubleshooting

### Common Issues

**No products showing:**
- Check if you have active sale campaigns
- Verify category/tag slugs are correct
- Ensure products have sale prices set

**Layout issues:**
- Check for theme CSS conflicts
- Verify container width is sufficient
- Test with default WordPress theme

**Performance problems:**
- Reduce the `limit` parameter
- Use specific filters (category, campaign)
- Enable caching plugins

### Debug Mode

Enable debug mode to see detailed information:

```
[artisan_sale_products debug="true"]
```

This will show:
- Number of products found
- Active filters
- Query parameters
- Execution time

## Support

Need help with shortcodes?

- Check the [FAQ section](../troubleshooting/faq)
- Visit our [support forum](https://wordpress.org/support/plugin/artisan-sale-manager/)
- Contact [premium support](mailto:support@organicmakers.se) (Pro users)
