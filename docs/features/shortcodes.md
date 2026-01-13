# Shortcodes

Artisan Sale Manager provides several powerful shortcodes to display sale information and countdown timers on your website.

## Available Shortcodes

### `[asm_sale_countdown]`

Display a countdown timer for active sales.

**Basic Usage:**
```
[asm_sale_countdown]
```

**With Parameters:**
```
[asm_sale_countdown sale_id="123" format="days_hours_minutes"]
```

**Parameters:**
- `sale_id` (optional): Specific sale ID to display countdown for
- `format` (optional): Display format - `full`, `compact`, `days_hours_minutes`
- `style` (optional): CSS class to apply - `default`, `minimal`, `bold`

### `[asm_sale_products]`

Display products currently on sale.

**Basic Usage:**
```
[asm_sale_products]
```

**With Parameters:**
```
[asm_sale_products limit="8" columns="4" category="electronics"]
```

**Parameters:**
- `limit` (optional): Number of products to display (default: 12)
- `columns` (optional): Number of columns in grid layout (default: 3)
- `category` (optional): Filter by product category
- `orderby` (optional): Sort order - `date`, `price`, `title`, `random`

### `[asm_sale_banner]`

Display a promotional banner for active sales.

**Basic Usage:**
```
[asm_sale_banner]
```

**With Parameters:**
```
[asm_sale_banner sale_id="123" template="modern" show_countdown="true"]
```

**Parameters:**
- `sale_id` (optional): Specific sale ID to display banner for
- `template` (optional): Banner template - `default`, `modern`, `minimal`
- `show_countdown` (optional): Include countdown timer - `true`, `false`
- `background_color` (optional): Custom background color (hex code)

## Styling Shortcodes

All shortcodes support custom CSS classes and can be styled using your theme's CSS. Each shortcode generates semantic HTML with appropriate CSS classes for easy customization.

### Example Custom CSS

```css
/* Customize countdown timer */
.asm-countdown {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
}

/* Style sale products grid */
.asm-sale-products {
    display: grid;
    gap: 20px;
}

/* Customize sale banner */
.asm-sale-banner {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 12px;
}
```

## Advanced Usage

### Conditional Display

You can use WordPress conditional tags with shortcodes:

```php
// Only show on homepage
if (is_home()) {
    echo do_shortcode('[asm_sale_countdown]');
}

// Show different banners for different categories
if (is_product_category('electronics')) {
    echo do_shortcode('[asm_sale_banner category="electronics"]');
}
```

### Programmatic Usage

Use shortcodes in your theme files:

```php
// In your theme's functions.php or template files
echo do_shortcode('[asm_sale_products limit="6" columns="3"]');
```

## Troubleshooting

**Shortcode not displaying?**
- Ensure the plugin is activated
- Check that you have active sales configured
- Verify shortcode syntax is correct

**Styling issues?**
- Check for CSS conflicts with your theme
- Use browser developer tools to inspect generated HTML
- Ensure custom CSS is properly enqueued
