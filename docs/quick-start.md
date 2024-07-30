# Quick start

## How to

Opstack Kit works with OP Stack chains. 
By adding [opstack-kit-chains](/docs/opstack-kit-chains.html) You can add "opstack-kit-chains" a network at [this](https://github.com/opstack-kit/opstack-kit-chains/pulls).


<b>For this example, we use [useWriteDepositETH](/docs/hooks/L1/useWriteDepositETH.html) To quickly deposit ETH to your L2 in just one click.</b>

::: code-group

```tsx [app.tsx]
import { useWriteDepositETH } from 'opstack-kit'

const { writeDepositETH } = useWriteDepositETH()

return (
  <button
    onClick={() => (writeDepositETH({
      args: {
        to: '0x215db47f1B2ae03ec45024Cf62ce82879b137469', // your addres
        amount: 1n, // amount ETH (n = gwei)
        // Others call args  
          // gasLimit: 2100n,
          // data: '0x',
      },
      l2ChainId: 11155420, // Your OP Stack chains by main/config.ts with "opstack-kit-chains"
    }))}
  >
    Deposit ETH
  </button>
)
```

```ts [main/config.ts]
// main.ts
import { sepolia, optimismSepolia } from 'opstack-kit-chains'

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
import { sepolia, optimismSepolia } from 'opstack-kit-chains'

export const config = createConfig({
  chains: [sepolia, optimismSepolia],
  transports: {
    [sepolia.id]: http(),
    [optimismSepolia.id]: http(),
  },
})
```

:::

Check out the [Configuring](/docs/configuration.md) for more.