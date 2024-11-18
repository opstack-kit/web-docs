# /chains

Support your networks with "opstack-kit" 

**install**: `npm i opstack-kit` <br>
**type**: `/chains` <br>
**import**: `opstack-kit/chains`

```ts[] 
import { sepolia, optimismSepolia } from 'opstack-kit/chains'
```

## Support networks

**L1**
<!-- #### L1 - Testnet -->
| L1 - Testnet |
|-----------|
| sepolia, holesky |
<!-- #### L1 - Mainnet -->
| L1 - Mainnet |
|-----------|
| mainnet |

**L2**
<!-- #### L2 - Testnet -->
| L2 - Testnet          |
|------------------|
| [optimismSepolia](/docs/networks/l2/testnet/optimismSepolia), [baseSepolia](/docs/networks/l2/testnet/baseSepolia), [zoraSepolia](/docs/networks/l2/testnet/zoraSepolia), [fraxtalHolesky](/docs/networks/l2/testnet/fraxtalHolesky), [modeTestnet](/docs/networks/l2/testnet/modeTestnet), [soneiumMinato](/docs/networks/l2/testnet/soneiumMinato), [garnetHolesky](/docs/networks/l2/testnet/garnetHolesky), [unichainSepolia](/docs/networks/l2/testnet/unichainSepolia), [inkSepolia](/docs/networks/l2/testnet/inkSepolia) |
<!-- #### L2 - Mainnet -->
| L2 - Mainnet   |
|-----------|
| [optimism](/docs/networks/l2/mainnet/optimism), [base](/docs/networks/l2/mainnet/base), [zora](/docs/networks/l2/mainnet/zora), [fraxtal](/docs/networks/l2/mainnet/fraxtal), [mode](/docs/networks/l2/mainnet/mode), [redstone](/docs/networks/l2/mainnet/redstone) |

Check out the [github](https://github.com/opstack-kit/opstack-kit/tree/main/src/chains) for more.

## Custom Network Chains

Opstack Kit works with OP Stack chains. By adding [viem](https://viem.sh/op-stack) can quickly add your chain and use it right away.

::: code-group

```tsx [customChains.tsx]
import { defineChain } from 'viem'
import { chainConfig } from 'viem/op-stack'

const sourceId = 123 // number = L1

export const customChains = defineChain({ // string = Name
  ...chainConfig,
  id: 111222333, // number
  name: 'customChains', // string = Name
  nativeCurrency: { name: 'XXX', symbol: 'XXX', decimals: 18 }, // string
  rpcUrls: {
    default: {
      http: ['https://xxxURL-RPCxxx.com'], // string = url
    },
  },
  blockExplorers: {
    default: {
      name: 'ExampleChain Scan', // string
      url: 'https://xxxURLxxx.com/', // string = url
      apiUrl: 'https://xxxURLxxx.com/api', // string = url
    },
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId]: {
        address: '0xXXX', // string
      },
    },
    portal: {
      [sourceId]: {
        address: '0xXXX', // string
      },
    },
    l1StandardBridge: {
      [sourceId]: {
        address: '0xXXX', // string
      },
    },

    // Others - add your want SmartContarct L2

    // multicall3: {
    //   [sourceId]: {
    //     address: '0xXXX', // string
    //   },
    // },

    // disputeGameFactory: {
    //   [sourceId]: {
    //     address: '0xXXX', // string
    //   },
    // },
  },
  testnet: true,
  sourceId,
});

```
```ts [main/config.ts]
//** main.ts */
...
// import file = customChains
import { customChains } from './customChains'

...
...
...
const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: import.meta.env.VITE_SOME_KEY,
  chains: [sepolia, customChains], // place
  ssr: true,
});

---------------------------------------------------------

//** config.ts */
import { createConfig, http } from 'wagmi'
import { sepolia, optimismSepolia } from 'opstack-kit/chains'
// import file = customChains
import { customChains } from './customChains'

export const config = createConfig({
  chains: [sepolia, customChains], // place
  transports: {
    [sepolia.id]: http(),
    [customChains.id]: http(), // place
  },
})
```

:::

Template starter: [react+rainbowkit](https://github.com/nidz-the-fact/React-with-Vitejs-for-Rainbowkit-to-Starter-Web3)

