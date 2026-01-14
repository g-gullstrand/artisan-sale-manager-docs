# Shortcodes

Artisan Sale Manager provides a powerful shortcode to display products currently on sale on your website.

## Available Shortcode

### `[asm_products_on_sale]`

Display products currently on sale in a customizable grid layout.

**Basic Usage:**
```
[asm_products_on_sale]
```

**With Parameters:**
```
[asm_products_on_sale limit="8" columns="4" campaign="summer-sale"]
```

**Parameters:**
- `campaign` (optional): Filter by specific campaign name (default: 'all')
- `limit` (optional): Number of products to display (default: 12)
- `columns` (optional): Number of columns in grid layout (1-6, default: 3)
- `orderby` (optional): Sort order - `menu_order`, `date`, `price`, `title`, `random` (default: 'menu_order')
- `order` (optional): Sort direction - `ASC` or `DESC` (default: 'ASC')
- `paginate` (optional): Enable pagination - `true` or `false` (default: false)
- `show_sale_badge` (optional): Show sale badges - `true` or `false` (default: true)
- `show_original_price` (optional): Show original price - `true` or `false` (default: true)
- `class` (optional): Additional CSS class to apply

## Customizing the Shortcode Output

The shortcode provides multiple ways to customize its appearance and functionality.

### Template Override System

Like WooCommerce, you can override the shortcode template by copying it to your theme:

**Plugin Template Location:**
```
wp-content/plugins/artisan-sale-manager/templates/shortcode-products-on-sale.php
```

**Theme Override Location:**
```
your-theme/artisan-sale-manager/shortcode-products-on-sale.php
```

**Child Theme Override:**
```
child-theme/artisan-sale-manager/shortcode-products-on-sale.php
```

### Template Variables

When creating a custom template, these variables are available:

```php
<?php
/**
 * Available in template:
 * @var WC_Product[] $products Array of WooCommerce product objects
 * @var array $atts Shortcode attributes (campaign, limit, columns, etc.)
 */

// Example: Custom grid layout
foreach ($products as $product) {
    echo '<div class="my-custom-product">';
    echo '<h3>' . $product->get_name() . '</h3>';
    echo '<div class="price">' . $product->get_price_html() . '</div>';
    echo '</div>';
}
?>
```

### Default HTML Structure

If no template override is found, the shortcode generates:

```html
<div class="artisan-sale-products-grid columns-3">
    <div class="artisan-sale-product-item">
        <div class="sale-badge">-25%</div>
        <div class="product-image">
            <a href="..."><img src="..." /></a>
        </div>
        <div class="product-details">
            <h3 class="product-title"><a href="...">Product Name</a></h3>
            <div class="product-price">
                <span class="original-price">$100</span>
                <span class="sale-price">$75</span>
            </div>
            <div class="savings-info">Save 25%</div>
            <div class="product-actions">
                <!-- WooCommerce add to cart button -->
            </div>
        </div>
    </div>
</div>
```

### Example Custom CSS

```css
/* Style the products grid */
.artisan-sale-products {
    display: grid;
    gap: 20px;
    margin: 20px 0;
}

/* Individual product items */
.artisan-sale-product-item {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 15px;
    transition: transform 0.2s ease;
}

.artisan-sale-product-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Empty state message */
.artisan-sale-products-empty {
    text-align: center;
    padding: 40px 20px;
    color: #666;
    font-style: italic;
}
```

## Advanced Usage

### Conditional Display

You can use WordPress conditional tags with the shortcode:

```php
// Only show on homepage
if (is_home()) {
    echo do_shortcode('[asm_products_on_sale limit="6"]');
}

// Show different campaigns for different pages
if (is_shop()) {
    echo do_shortcode('[asm_products_on_sale campaign="featured" columns="4"]');
}
```

### Programmatic Usage

Use the shortcode in your theme files:

```php
// In your theme's functions.php or template files
echo do_shortcode('[asm_products_on_sale limit="6" columns="3"]');

// With specific campaign
echo do_shortcode('[asm_products_on_sale campaign="summer-sale" show_sale_badge="true"]');
```

### Available Hooks

The shortcode provides several filter hooks for customization:

```php
// Control when shortcode styles are enqueued
add_filter('artisan_sale_manager_enqueue_shortcode_styles', function($should_enqueue) {
    // Return true to force enqueue styles on current page
    return $should_enqueue;
});

// Filter query arguments
add_filter('asm_query_args_on_sale', function($query_args, $atts) {
    // Modify WP_Query arguments
    return $query_args;
}, 10, 2);

// Control template location
add_filter('asm_locate_template', function($template_path, $template_name) {
    // Return custom template path or false to use default
    return $template_path;
}, 10, 2);

// Filter no products message
add_filter('asm_message_on_sale', function($message, $atts) {
    return 'Custom no products message';
}, 10, 2);

// Filter grid HTML output
add_filter('asm_grid_html_on_sale', function($output, $products, $atts) {
    // Modify entire grid HTML
    return $output;
}, 10, 3);

// Filter individual product HTML
add_filter('asm_item_html_on_sale', function($output, $product, $atts) {
    // Modify individual product HTML
    return $output;
}, 10, 3);
```

## Template Examples

### Example 1: Simple List Layout

Create `your-theme/artisan-sale-manager/shortcode-products-on-sale.php`:

```php
<?php
// Simple list layout instead of grid
?>
<div class="sale-products-list">
    <?php foreach ($products as $product) : ?>
        <div class="sale-product-row">
            <div class="product-thumb">
                <?php echo $product->get_image('thumbnail'); ?>
            </div>
            <div class="product-info">
                <h4><?php echo $product->get_name(); ?></h4>
                <div class="price"><?php echo $product->get_price_html(); ?></div>
            </div>
            <div class="product-buy">
                <?php woocommerce_template_loop_add_to_cart(); ?>
            </div>
        </div>
    <?php endforeach; ?>
</div>
```

### Example 2: Block Theme Compatible

For modern block themes, create a template that matches your theme's design:

```php
<?php
// Block theme compatible layout
?>
<div class="wp-block-group sale-products-block">
    <div class="wp-block-columns has-<?php echo esc_attr($atts['columns']); ?>-columns">
        <?php foreach ($products as $product) : ?>
            <div class="wp-block-column">
                <div class="wp-block-group product-card">
                    <figure class="wp-block-image">
                        <a href="<?php echo esc_url($product->get_permalink()); ?>">
                            <?php echo $product->get_image('medium'); ?>
                        </a>
                    </figure>
                    <h3 class="wp-block-heading">
                        <a href="<?php echo esc_url($product->get_permalink()); ?>">
                            <?php echo esc_html($product->get_name()); ?>
                        </a>
                    </h3>
                    <div class="wp-block-group price-group">
                        <?php echo $product->get_price_html(); ?>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>
```

## Troubleshooting

**Shortcode not displaying?**
- Ensure the plugin is activated
- Check that you have products with sale prices set
- Verify shortcode syntax: `[asm_products_on_sale]`
- Check if the campaign parameter matches existing campaigns

**No products showing?**
- Verify products have `_sale_price` meta fields set
- Check campaign filters are correctly configured
- Ensure products are published and in stock

**Styling issues?**
- Check for CSS conflicts with your theme
- Use browser developer tools to inspect generated HTML
- Ensure custom CSS targets the correct classes: `.artisan-sale-products-grid`

**Template override not working?**
- Verify template file path: `your-theme/artisan-sale-manager/shortcode-products-on-sale.php`
- Check file permissions (should be readable)
- Ensure template file has proper PHP opening tags
- Clear any caching plugins after adding template
- **Note**: Template is required - shortcode will show error if no template found

**Template errors?**
- Check PHP error logs for syntax errors in custom template
- Verify all variables (`$products`, `$atts`) are used correctly
- Ensure proper escaping: `esc_attr()`, `esc_html()`, `esc_url()`
