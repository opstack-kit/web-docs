# Opstack Kit Chains

<p align="center">
  Support your OP-Stack network with "opstack-kit"
    <br><br>
  <a href="https://www.npmjs.com/package/opstack-kit-chains">
    <img src="https://img.shields.io/npm/v/opstack-kit-chains" alt="Npm Badge" />
  </a>
</p>

<div align="center" style="display: flex; justify-content: center; flex-wrap: wrap; gap: 10px;">
  <a href="https://github.com/opstack-kit/opstack-kit-chains/stargazers">
    <img src="https://img.shields.io/github/stars/opstack-kit" alt="Stars Badge" />
  </a>
  <a href="https://github.com/opstack-kit/opstack-kit-chains/forks"><img src="https://img.shields.io/github/forks/opstack-kit/opstack-kit-chains" alt="Forks Badge"/>
  </a>
  <a href="https://github.com/opstack-kit/opstack-kit-chains/pulls">
    <img src="https://img.shields.io/github/issues-pr/opstack-kit/opstack-kit-chains" alt="Pull Requests Badge" />
  </a>
  <a href="https://github.com/opstack-kit/opstack-kit-chains/issues">
    <img src="https://img.shields.io/github/issues/opstack-kit/opstack-kit-chains" alt="Issues Badge" />
  </a>
  <a href="https://github.com/opstack-kit/opstack-kit-chains/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/opstack-kit/opstack-kit-chains?color=2b9348">
  </a>
</div>

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

```bash [yarn]
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