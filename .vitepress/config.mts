import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Opstack Kit | Docs",
  description: "npm i opstack-kit | is a toolkit for all upgrades. To easily connect and interact with the OP-Stack (Superchain)",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Get started', link: '/docs/getting-started' },
      { text: 'Quick start', link: '/docs/quick-start' },
      { text: 'Example', link: '/docs/example' },
    
      {
        text: 'More',
        items: [
          {
            text: 'Issuessions ',
            link: 'https://github.com/opstack-kit/opstack-kit/issues',
          },
          {
            text: 'Pullssions ',
            link: 'https://github.com/opstack-kit/opstack-kit/pulls',
          },
          {
            text: 'Release Notes ',
            link: 'https://github.com/opstack-kit/opstack-kit/releases',
          },
          {
            text: 'Contributing ',
            link: 'https://github.com/opstack-kit/opstack-kit',
          },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting started', link: '/docs/getting-started' },
          { text: 'Quick start', link: '/docs/quick-start' },
          { text: 'Example', link: '/docs/example' },
          { text: 'Configuration', link: '/docs/configuration' },
        ],
      },
      {
        text: 'Additional libraries',
        items: [
          { text: 'opstack-kit-chains', link: '/docs/opstack-kit-chains' },
        ],
      },
      {
        text: 'Hooks',
        items: [
          {
            text: 'L1',
            items: [
              {
                text: 'useSimulateDepositETH',
                link: '/docs/hooks/L1/useSimulateDepositETH',
              },
              {
                text: 'useWriteDepositETH',
                link: '/docs/hooks/L1/useWriteDepositETH',
              },
              {
                text: 'useSimulateDepositERC20',
                link: '/docs/hooks/L1/useSimulateDepositERC20',
              },
              {
                text: 'useWriteDepositERC20',
                link: '/docs/hooks/L1/useWriteDepositERC20',
              },
              {
                text: 'useSimulateProveWithdrawalTransaction',
                link: '/docs/hooks/L1/useSimulateProveWithdrawalTransaction',
              },
              {
                text: 'useWriteProveWithdrawalTransaction',
                link: '/docs/hooks/L1/useWriteProveWithdrawalTransaction',
              },
              {
                text: 'useSimulateFinalizeWithdrawalTransaction',
                link: '/docs/hooks/L1/useSimulateFinalizeWithdrawalTransaction',
              },
              {
                text: 'useWriteFinalizeWithdrawalTransaction',
                link: '/docs/hooks/L1/useWriteFinalizeWithdrawalTransaction',
              },
            ],
          },
          {
            text: 'L2',
            items: [
              {
                text: 'useSimulateWithdrawETH',
                link: '/docs/hooks/L2/useSimulateWithdrawETH',
              },
              {
                text: 'useWriteWithdrawETH',
                link: '/docs/hooks/L2/useWriteWithdrawETH',
              },
              {
                text: 'useSimulateWithdrawERC20',
                link: '/docs/hooks/L2/useSimulateWithdrawERC20',
              },
              {
                text: 'useWriteWithdrawERC20',
                link: '/docs/hooks/L2/useWriteWithdrawERC20',
              },
            ],
          },
        ],
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/opstack-kit' },
      { icon: 'twitter', link: 'https://x.com/opstackkit' }
    ]
  }
})
