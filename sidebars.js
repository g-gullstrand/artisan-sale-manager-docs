/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/first-campaign',
        'getting-started/basic-concepts',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/campaigns',
        'features/bulk-operations',
        'features/scheduling',
        'features/shortcodes',
        'features/licensing',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/rest-endpoints',
        'api/hooks-filters',
        'api/extending',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/faq',
        'troubleshooting/performance',
      ],
    },
    'changelog',
  ],
};

export default sidebars;
