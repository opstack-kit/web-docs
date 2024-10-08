# Quick start

## How to

Opstack Kit works with OP Stack chains. Type [/chains](/docs/types/chains) adding `opstack-kit/chains`


<b>For this code example, we use [useWriteDepositETH](/docs/hooks/L1/useWriteDepositETH.html) To quickly deposit ETH to your L2 in just one click.</b>

::: code-group

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

:::

Check out the [Configuring](/docs/configuration.md) for more.