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
    {
      type: 'doc',
      id: 'introduction-to-investment-clubs',
      label: 'Introduction to Investment Clubs',
    },
    {
      type: 'category',
      label: 'The Problem',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'the-billion-dollar-small-team-era',
          label: 'The Billion Dollar Small Team Era',
        },
        {
          type: 'doc',
          id: 'the-crowdfunding-collapse',
          label: 'The Crowdfunding Collapse',
        },
        {
          type: 'doc',
          id: 'current-landscape-in-funding-early-stage-ventures',
          label: 'Current Landscape',
        },
      ],
    },
    {
      type: 'category',
      label: 'The Solution',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'intro',
          label: 'Fish Network Overview',
        },
        {
          type: 'doc',
          id: 'fish-network-whitepaper',
          label: 'Whitepaper',
        },
        {
          type: 'doc',
          id: 'the-fish-school-advantage',
          label: 'Fish School Advantage',
        },
      ],
    },
    {
      type: 'category',
      label: 'Key Benefits',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'liquidity-optionality-diversification',
          label: 'Liquidity, Optionality, Diversification',
        },
        {
          type: 'doc',
          id: 'fish-points-the-social-layer-of-capital',
          label: 'Fish Points',
        },
        {
          type: 'doc',
          id: 'unlocking-a-usd10b-market',
          label: 'Unlocking a $10B+ Market',
        },
        {
          type: 'doc',
          id: 'the-flywheel-of-the-new-economy',
          label: 'The Network Flywheel',
        },
      ],
    },
    {
      type: 'category',
      label: 'Technical',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'smart-contracts-and-tokenomics',
          label: 'Smart Contracts & Tokenomics',
        },
        {
          type: 'doc',
          id: 'system-and-method-for-blockchain-based-community-investment-pools',
          label: 'System Architecture & Patent',
        },
      ],
    },
    {
      type: 'category',
      label: 'The Next Layer of Crypto, Fish Network',
      items: [
        {
          type: 'doc',
          id: 'the-next-layer-of-crypto-fish-network/intro',
          label: 'Introduction',
        },
        {
          type: 'doc',
          id: 'the-next-layer-of-crypto-fish-network/whats-wrong-with-usd',
          label: 'What\'s wrong with USD?',
        },
        {
          type: 'doc',
          id: 'the-next-layer-of-crypto-fish-network/what-value-does-crypto-introduce',
          label: 'What value does Crypto introduce',
        },
        {
          type: 'doc',
          id: 'the-next-layer-of-crypto-fish-network/case-study-01',
          label: 'Case Study 01',
        },
        {
          type: 'doc',
          id: 'the-next-layer-of-crypto-fish-network/programmable-capital-a-new-paradigm',
          label: 'Programmable Capital: A New Paradigm',
        },
        {
          type: 'doc',
          id: 'the-next-layer-of-crypto-fish-network/governing-money-smart-contract-model',
          label: 'Governing Money (Smart Contract Model)',
        },
        {
          type: 'doc',
          id: 'the-next-layer-of-crypto-fish-network/owning-and-moving-money-fiat-rail-model',
          label: 'Owning & Moving Money (Fiat Rail Model)',
        },
        {
          type: 'doc',
          id: 'the-next-layer-of-crypto-fish-network/rule-creation-on-crypto-assets',
          label: 'Rule Creation on Crypto Assets',
        },
        {
          type: 'doc',
          id: 'the-next-layer-of-crypto-fish-network/underlying-technology-needed',
          label: 'Underlying Technology Needed',
        },
        {
          type: 'doc',
          id: 'the-next-layer-of-crypto-fish-network/smart-contract-platform-flow',
          label: 'Smart Contract Platform Flow',
        },
        {
          type: 'doc',
          id: 'the-next-layer-of-crypto-fish-network/traditional-bank-brokerage-flow',
          label: 'Traditional Bank/Brokerage Flow',
        },
        {
          type: 'doc',
          id: 'the-next-layer-of-crypto-fish-network/conclusion',
          label: 'Conclusion',
        },
      ],
    },
  ],
};

export default sidebars;

