import { defineConfig } from 'vitepress'

// 
async function getPackageVersion() {
  const response = await fetch('https://registry.npmjs.org/opstack-kit'); //
  const data = await response.json();
  return data['dist-tags'].latest;
}
const pkgVersion = await getPackageVersion();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Opstack Kit | Docs",
  description: "npm i opstack-kit | is a toolkit for all upgrades. To easily connect and interact with the OP-Stack (Superchain)",
  
  lastUpdated: true,
  ignoreDeadLinks: true,
  

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/opstack-kit/web-docs/edit/main/:path',
      text: 'Suggest changes to this page',
    },
    footer: {
      message:
        'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Opstack Kit, Nidz',
    },
    logo: {
      light: '/ok.png',
      dark: '/ok.png',
      alt: 'OK = Opstack Kit',
    },

    nav: [
      { text: 'Get started', link: '/docs/getting-started' },
      { text: 'Quick start', link: '/docs/quick-start' },
      { text: 'Example', link: '/docs/example' },

      {
        text: pkgVersion,
        items: [
          {
            text: 'Issuessions',
            link: 'https://github.com/opstack-kit/opstack-kit/issues',
          },
          {
            text: 'Pullssions',
            link: 'https://github.com/opstack-kit/opstack-kit/pulls',
          },
          {
            text: 'Release Notes',
            link: 'https://github.com/opstack-kit/opstack-kit/releases',
          },
          {
            text: 'Contributing',
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
        text: 'Types',
        items: [
          { text: '/chains', link: '/docs/types/chains', 
            collapsed: true,
            items: [
              { text: 'L1 - Testnet' },
              {
                text: 'sepolia', 
                link: '/docs/networks/l1/testnet/sepolia',
              },
              {
                text: 'holesky', 
                link: '/docs/networks/l1/testnet/holesky',
              },

              { text: 'L1 - Mainnet' },
              {
                text: 'mainnet',
                link: '/docs/networks/l1/mainnet/mainnet',
              },


              { text: 'L2 - Testnet' },
              {
                text: 'optimismSepolia',
                link: '/docs/networks/l2/testnet/optimismSepolia',
              },
              {
                text: 'baseSepolia',
                link: '/docs/networks/l2/testnet/baseSepolia',
              },
              {
                text: 'zoraSepolia',
                link: '/docs/networks/l2/testnet/zoraSepolia',
              },
              {
                text: 'fraxtalHolesky',
                link: '/docs/networks/l2/testnet/fraxtalHolesky',
              },
              {
                text: 'modeTestnet',
                link: '/docs/networks/l2/testnet/modeTestnet',
              },
              {
                text: 'soneiumMinato',
                link: '/docs/networks/l2/testnet/soneiumMinato',
              },
              {
                text: 'garnetHolesky',
                link: '/docs/networks/l2/testnet/garnetHolesky',
              },
              {
                text: 'unichainSepolia',
                link: '/docs/networks/l2/testnet/unichainSepolia',
              },

              { text: 'L2 - Mainnet' },
              {
                text: 'optimism',
                link: '/docs/networks/l2/mainnet/optimism',
              },
              {
                text: 'base',
                link: '/docs/networks/l2/mainnet/base',
              },
              {
                text: 'zora',
                link: '/docs/networks/l2/mainnet/zora',
              },
              {
                text: 'fraxtal',
                link: '/docs/networks/l2/mainnet/fraxtal',
              },
              {
                text: 'mode',
                link: '/docs/networks/l2/mainnet/mode',
              },
              {
                text: 'redstone',
                link: '/docs/networks/l2/mainnet/redstone',
              },


              // +
              {
                text: '> Custom Network Chains',
                link: '/docs/configuration.html#custom-network-chains',
              },
            ], 
          },

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
                text: 'useWriteDepositCustomGasToken',
                link: '/docs/hooks/L1/useWriteDepositCustomGasToken',
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
              {
                text: 'useWriteInitiateWithdrawalETH',
                link: '/docs/hooks/L2/useWriteInitiateWithdrawalETH',
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
  },

  
})
