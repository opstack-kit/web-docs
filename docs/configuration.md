# Configuration

Opstack Kit works with OP Stack chains. 
Type [/chains](/docs/types/chains) adding `opstack-kit/chains`

(or you can use <b>Viem =>2.17.11</b> you just need to add `viem/chains` the relevant chain object to work with `opstack-kit`)



::: code-group

```ts [main/config.ts]
// main.ts
import { sepolia, optimismSepolia } from 'opstack-kit/chains'

...
...
...
const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: import.meta.env.VITE_SOME_KEY,
  chains: [sepolia, optimismSepolia],
  ssr: true,
});

---------------------------------------------------------
// config.ts
import { createConfig, http } from 'wagmi'
import { sepolia, optimismSepolia } from 'opstack-kit/chains'

export const config = createConfig({
  chains: [sepolia, optimismSepolia],
  transports: {
    [sepolia.id]: http(),
    [optimismSepolia.id]: http(),
  },
})
```

```tsx [app.tsx]
import { useWriteDepositETH } from 'opstack-kit'

const { writeDepositETH } = useWriteDepositETH()

return (
  <button
    onClick={() =>
      // It should be on the correct L1 network with l2ChainId to start the transaction.
      writeDepositETH({ 
        args: {
          to: '0x215db47f1B2ae03ec45024Cf62ce82879b137469', // your addres
          amount: 10000000000000000n, // amount ETH (n = wei)
          // Others call args (If that doesn't work, you can try adding the required args, e.g. gasLimit: 21000n,)  
            // gasLimit: 21000n,
            // data: '0x',
        },
        l2ChainId: 11155420, // Your OP Stack chains by main/config.ts with "opstack-kit/chains"
      })}
  >
    Deposit ETH
  </button>
)
```

:::

Check out the [Support your OP-Stack network with "opstack-kit"](/docs/types/chains) for more.

#

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