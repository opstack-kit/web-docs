# Opstack Kit Chains

## Installation

::: code-group

```bash [npm]
npm i opstack-kit-chains
```

```bash [pnpm]
pnpm i opstack-kit-chains
```

```bash [bun]
bun i opstack-kit-chains
```

```yarn
yarn add opstack-kit-chains
```

:::

## How to

Opstack Kit Chains Quickly customize your network that uses Op Stack chains.

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
    onClick={() => (writeDepositETH({
      args: {
        to: '0x215db47f1B2ae03ec45024Cf62ce82879b137469',
        amount: 1n,
      },
      l2ChainId: 1234, // Your OP Stack chains by main/config.ts with "opstack-kit-chains"
    }))}
  >
    Deposit ETH
  </button>
)
```

:::

Check out the [Support your OP-Stack network with "opstack-kit"](https://github.com/opstack-kit/opstack-kit-chains) for more.