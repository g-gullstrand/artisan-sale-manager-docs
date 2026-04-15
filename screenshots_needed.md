# Screenshots Needed for Documentation

This document lists all screenshots needed for the Artisan Sale Manager documentation, organized by section and priority.

---

## 🗂️ Test Data Setup

Before taking screenshots, set up the following campaigns using the WooCommerce sample products. The sample data includes categories: **Clothing** (Hoodies, Tshirts), **Music**, **Decor**, **Accessories**, **Posters**.

### Campaigns to Create

| # | Name | Discount | Priority | Status | Products via Segment |
|---|------|----------|----------|--------|----------------------|
| 1 | **Summer Clothing Sale** | 20% off | 10 | Active | Category: Clothing |
| 2 | **Music & Accessories Bundle** | $5 off | 5 | Active | Category: Music + Accessories |
| 3 | **Spring Clearance** | 30% off | 8 | Paused | Category: Decor |
| 4 | **New Arrivals Preview** | 15% off | 3 | Draft | Category: Posters |
| 5 | **Flash Sale — Hoodies** | Set price $29 | 15 | Active | Category: Hoodies |

> **Conflict setup**: Campaigns 1 and 5 both target Hoodies — this creates a visible conflict where Campaign 5 (priority 15) wins over Campaign 1 (priority 10). Perfect for conflict screenshots.

---

## Priority 1: Essential Screenshots (Marketplace Requirements) ✅

### 1. Campaign Dashboard Overview
- **File**: `dashboard-overview.png`
- **Description**: Main campaign dashboard showing list of campaigns with different statuses
- **Setup**: All 5 campaigns created as above
- **Requirements**:
  - All 5 campaigns visible: Summer Clothing Sale (Active), Music & Accessories Bundle (Active), Spring Clearance (Paused), New Arrivals Preview (Draft), Flash Sale — Hoodies (Active)
  - Priority badges visible (3, 5, 8, 10, 15)
  - Product counts shown on each campaign
  - Show the actions dropdown open on "Summer Clothing Sale"

### 2. Campaign Creation Form - ✅
- **File**: `campaign-creation-form.png`
- **Description**: New campaign creation form with all fields visible
- **Setup**: Click "New Campaign", fill in but don't save
- **Requirements**:
  - Name: `"Spring Clearance"`
  - Description: `"End of season discounts on all home decor"`
  - Discount type: Percentage, Value: `30`
  - Priority: `8`
  - Schedule: Manual activation selected
  - All fields clearly visible before submitting

### 3. Segment Builder Interface    ✅
- **File**: `segment-builder.png`
- **Description**: Segment builder showing category and filter selection
- **Setup**: Inside "Summer Clothing Sale" → Products → Segment Builder
- **Requirements**:
  - Segment type: Category, Rule: Include
  - Selected: "Clothing" category in right box
  - Add a second segment: Stock Status = In Stock
  - Live product count showing (e.g. "12 products")
  - Preview button visible

### 4. Product Preview Grid - ✅
- **File**: `product-preview.png`
- **Description**: Product grid showing targeted products after segmentation
- **Setup**: Click "Preview" after setting up Clothing category segment
- **Requirements**:
  - Hoodie, T-shirt products visible with thumbnails
  - Product names (e.g. "Hoodie", "V-Neck T-Shirt") and prices
  - Sale price calculated and shown
  - At least 6–8 products visible in grid

### 5. Campaign Conflict Warning - ✅
- **File**: `conflict-warning.png`
- **Description**: Product list inside a campaign showing a conflicted product
- **Setup**: Open "Summer Clothing Sale" → Products tab. "Jacket" is also in "Flash Sale — Jackets" (priority 15), so it shows as conflicted here
- **Requirements**:
  - Product "Jacket" visible in the product list with a conflict indicator
  - Conflict warning showing that "Flash Sale — Jackets" (priority 15) is winning
  - Campaign name and context visible (we are inside "Summer Clothing Sale")
  - Note: conflict warnings appear per-product inside a campaign, NOT on the dashboard overview

---

## Priority 2: Feature Documentation Screenshots

### Getting Started Guide

#### Plugin Menu Location
- **File**: `plugin-menu-location.png`
- **Description**: WordPress admin sidebar showing WooCommerce → Sale Manager menu
- **Setup**: WordPress admin, hover WooCommerce menu
- **Requirements**:
  - WordPress admin sidebar visible
  - WooCommerce menu expanded
  - "Sale Manager" submenu item highlighted/visible

#### First Campaign Success
- **File**: `first-campaign-success.png`
- **Description**: Success state after creating first campaign
- **Setup**: Create "New Arrivals Preview" campaign, land on dashboard
- **Requirements**:
  - Success notice visible: `"Campaign 'New Arrivals Preview' created successfully"`
  - Campaign appears in dashboard as Draft
  - Activate button clearly visible

### Campaign Management Guide

#### Campaign Status Badges
- **File**: `campaign-status-badges.png`
- **Description**: Close-up showing all status badge variants
- **Setup**: Dashboard with all 5 campaigns (covers Active, Draft, Paused)
- **Requirements**:
  - Active (green) — "Summer Clothing Sale"
  - Paused (orange) — "Spring Clearance"
  - Draft (gray) — "New Arrivals Preview"
  - Crop/zoom to clearly show badge styles

#### Campaign Actions Menu
- **File**: `campaign-actions-menu.png`
- **Description**: Dropdown menu open on an active campaign
- **Setup**: Open actions dropdown on "Music & Accessories Bundle" (Active)
- **Requirements**:
  - Pause, Edit, Duplicate, Delete options visible
  - Campaign name visible in row context
  - Clean dropdown appearance

#### Campaign Details View
- **File**: `campaign-details.png`
- **Description**: Open campaign detail/edit view for a fully configured campaign
- **Setup**: Click into "Summer Clothing Sale"
- **Requirements**:
  - Campaign name, description, 20% discount settings
  - Product list showing Clothing products
  - Priority 10 visible
  - Edit controls visible

#### Priority System Example
- **File**: `priority-system.png`
- **Description**: Dashboard clearly showing priority hierarchy
- **Setup**: Sort dashboard by priority
- **Requirements**:
  - Flash Sale — Hoodies (15), Summer Clothing Sale (10), Spring Clearance (8), Music & Accessories Bundle (5), New Arrivals Preview (3)
  - Priority numbers clearly visible on each row
  - Conflict badge visible on lower-priority campaign

### Segment Builder Guide

#### Category Selection Interface
- **File**: `category-selection.png`
- **Description**: Category segment with the Available/Selected dual-box interface
- **Setup**: Segment Builder → Type: Category
- **Requirements**:
  - Available box showing: Clothing, Music, Accessories, Decor, Posters
  - Selected box showing: "Clothing" (moved over)
  - Move arrow buttons visible between boxes
  - Product count updating

#### Stock Status Filtering
- **File**: `stock-status-filter.png`
- **Description**: Stock status segment rule
- **Setup**: Add segment → Type: Stock Status
- **Requirements**:
  - Dropdown showing "In Stock" selected
  - Clear rule indication
  - Product count shown

#### Product Type Selection
- **File**: `product-type-selection.png`
- **Description**: Product type segment
- **Setup**: Add segment → Type: Product Type
- **Requirements**:
  - "Variable" selected (WooCommerce sample data has variable products like hoodies)
  - Available/Selected boxes visible
  - Product count updating

#### Live Product Count
- **File**: `live-product-count.png`
- **Description**: Product count display after segmentation
- **Setup**: Category: Clothing segment active
- **Requirements**:
  - Product count prominently shown (e.g. "14 products match your segments")
  - Add Segment button visible
  - Preview/Add Products buttons visible

#### Segmentation Preview Results
- **File**: `segmentation-preview.png`
- **Description**: Product grid after clicking Preview
- **Setup**: Clothing category segment → click Preview
- **Requirements**:
  - Hoodie, V-Neck T-Shirt, Polo, etc. shown with thumbnails
  - Product names and prices
  - Grid layout clearly showing multiple products

### Conflict Resolution Guide

#### Conflict Detection Dashboard
- **File**: `conflict-detection.png`
- **Description**: Dashboard with conflict warning badges
- **Setup**: Both "Summer Clothing Sale" and "Flash Sale — Hoodies" active
- **Requirements**:
  - Conflict warning visible on "Summer Clothing Sale"
  - Clear warning indicator distinguishable from normal status badges

#### Priority Comparison
- **File**: `priority-comparison.png`
- **Description**: Two conflicting campaigns clearly showing priority winner/loser
- **Setup**: Same as above, show both campaigns
- **Requirements**:
  - "Flash Sale — Hoodies" (priority 15) — winner
  - "Summer Clothing Sale" (priority 10) — loses on Hoodies products
  - Priority numbers clearly visible on both

#### Conflict Resolution Interface
- **File**: `conflict-resolution.png`
- **Description**: Editing priority to resolve a conflict
- **Setup**: Edit "Summer Clothing Sale", change priority field
- **Requirements**:
  - Priority field visible and being edited (change to 20)
  - Clear save action available
  - Campaign name visible for context

---

## Priority 3: Advanced Features & Use Cases

### Campaign Scheduling

#### Schedule Configuration
- **File**: `schedule-configuration.png`
- **Description**: Campaign creation form with scheduling enabled
- **Setup**: New or edit campaign → toggle "Scheduled Activation"
- **Requirements**:
  - Start date picker showing a near-future date (e.g. `2026-06-01`)
  - End date picker showing `2026-06-30` (month-long flash sale)
  - Manual vs scheduled toggle clearly visible
  - Campaign name: `"June Flash Sale"`

#### Scheduled Campaign Status
- **File**: `scheduled-campaign.png`
- **Description**: Dashboard showing a scheduled campaign
- **Setup**: Create "June Flash Sale" with future start date
- **Requirements**:
  - Scheduled status badge visible
  - Start date shown on campaign row
  - Campaign name "June Flash Sale" visible

### Advanced Segmentation

#### Multiple Category Selection
- **File**: `multiple-categories.png`
- **Description**: Multiple categories selected in segment builder
- **Setup**: Segment Builder → Category → select both Music and Accessories
- **Requirements**:
  - Selected box showing: Music, Accessories
  - Combined product count showing
  - Both category names clearly readable

#### Complex Filter Combination
- **File**: `complex-filters.png`
- **Description**: Multiple segment rules stacked
- **Setup**: Add 3 segments — Category: Clothing, Stock Status: In Stock, Product Type: Variable
- **Requirements**:
  - All 3 segment rows visible
  - Each segment type and value clearly shown
  - Cumulative product count shown
  - "Add Segment" button visible for context

### Campaign Performance

#### Campaign Monitoring
- **File**: `campaign-monitoring.png`
- **Description**: Dashboard showing active campaigns with product counts
- **Setup**: Dashboard with "Summer Clothing Sale" and "Flash Sale — Hoodies" active
- **Requirements**:
  - Active campaigns showing product counts
  - Duration/created date visible
  - Clean dashboard view

---

## Priority 4: Error States & Edge Cases

### Error Handling

#### No Products Found
- **File**: `no-products-found.png`
- **Description**: Segment builder returning zero results
- **Setup**: Category: Music + Stock Status: Out of Stock (unlikely combination)
- **Requirements**:
  - "0 products match" message visible
  - Segment rules visible showing why result is empty
  - Clear UI — not broken-looking

#### Campaign Deactivation Warning
- **File**: `deactivation-warning.png`
- **Description**: Warning notice after adding products deactivates a campaign
- **Setup**: Add a product to "Summer Clothing Sale" while it's active
- **Requirements**:
  - Yellow/orange notice: `"3 products added to campaign. Campaign was deactivated due to product changes. Please reactivate to apply sale prices."`
  - Reactivate button visible
  - Campaign showing as Draft/Paused status

#### Conflict Warning Details
- **File**: `conflict-warning-details.png`
- **Description**: Conflict detail view or tooltip
- **Setup**: Hover or click conflict indicator on "Summer Clothing Sale"
- **Requirements**:
  - Conflicting campaign names listed
  - Priority comparison visible
  - Affected product count shown

### Edge Cases

#### Empty Campaign Dashboard
- **File**: `empty-dashboard.png`
- **Description**: Dashboard with no campaigns (fresh install state)
- **Setup**: Use "Remove All Campaigns" tool to clear, then screenshot
- **Requirements**:
  - Empty state UI with welcome/CTA
  - "Create Your First Campaign" or similar button visible
  - Clean, encouraging design

#### Large Product Count
- **File**: `large-product-count.png`
- **Description**: Segment with broad criteria showing high product count
- **Setup**: Segment Builder → Stock Status: All (or no segment filter)
- **Requirements**:
  - High product count shown
  - Pagination or scroll indicator if applicable

---

## Priority 5: Frontend Integration

### WooCommerce Integration

#### Sale Prices on Product Page
- **File**: `frontend-sale-prices.png`
- **Description**: WooCommerce product page for a Hoodie showing campaign sale price
- **Setup**: Navigate to Hoodie product page with "Flash Sale — Hoodies" active (set price $29)
- **Requirements**:
  - Original price struck through (e.g. ~~$45~~)
  - Sale price $29 prominently shown
  - "Sale!" badge or custom campaign badge visible
  - Standard WooCommerce product page layout

#### Shop Page with Sale Products
- **File**: `shop-page-sales.png`
- **Description**: WooCommerce shop/clothing category page showing multiple products on sale
- **Setup**: Navigate to `/shop` or `/product-category/clothing/` with campaigns active
- **Requirements**:
  - Multiple products showing sale prices and badges
  - Hoodies showing "Flash Sale" badge, other clothing showing "Summer Clothing Sale" badge
  - Grid layout with 6+ products visible

#### Variable Product Pricing
- **File**: `variable-product-pricing.png`
- **Description**: Variable Hoodie product page showing variation pricing
- **Setup**: Navigate to Hoodie (variable product) with Flash Sale active
- **Requirements**:
  - Price range or variation selector visible
  - Sale price applying to selected variation
  - Clear discount indication

---

## Screenshot Specifications

### Technical Requirements
- **Resolution**: Minimum 1920x1080 for desktop screenshots
- **Format**: PNG
- **Quality**: High quality, crisp text and UI elements
- **Browser**: Chrome at 100% zoom
- **Window**: Full browser window, no personal bookmarks visible

### Content Requirements
- **Clean Interface**: No development/debug notices visible (disable WP_DEBUG display)
- **Professional Appearance**: WordPress admin bar can be hidden for frontend shots
- **Consistent Data**: Use the campaign names from the setup table above throughout

### Naming Convention
- Use filenames exactly as specified above
- Store in `/static/img/screenshots/` directory
- Create subdirectories by priority if needed

## Implementation Notes

### Documentation Integration
- Reference in markdown as: `![Alt text](../static/img/screenshots/filename.png)`
- Include captions explaining what the screenshot shows
- Update screenshots when UI changes significantly

### Maintenance
- Review screenshots quarterly for accuracy
- Update when major UI changes occur