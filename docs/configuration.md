# Configuration

Opstack Kit works with OP Stack chains. 
By adding [opstack-kit-chains](/docs/opstack-kit-chains.html)

(or you can use <b>Viem =>2.17.11</b> you just need to add `viem/chains` the relevant chain object to work with `opstack-kit`)

[You can add "opstack-kit-chains" a network at this](https://github.com/opstack-kit/opstack-kit-chains/pulls).

::: code-group

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
          amount: 1n, // amount ETH (n = wei)
          // Others call args (If that doesn't work, you can try adding the required args, e.g. gasLimit: 21000n,)  
            // gasLimit: 2100n,
            // data: '0x',
        },
        l2ChainId: 11155420, // Your OP Stack chains by main/config.ts with "opstack-kit-chains"
      })}
  >
    Deposit ETH
  </button>
)
```

:::

Check out the [Support your OP-Stack network with "opstack-kit"](https://github.com/opstack-kit/opstack-kit-chains) for more.