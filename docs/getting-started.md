# Getting Started

## Overview
<div align="center">
  <a href="https://github.com/opstack-kit">
    <img src="https://avatars.githubusercontent.com/u/176029081?s=200&v=4" title="Logo" alt="Logo" width="200" height="200"/>
  </a>
  <br><br>
  <a href="https://github.com/opstack-kit"><img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=800&size=30&pause=1000&center=true&repeat=false&random=false&width=435&lines&color=F70000&width=435&lines=Opstack+Kit" alt="Typing SVG" />
  </a>

</div>
<p align="center">
  Bridging hooks for OP Stack Chains
    <br><br>
  <a href="https://www.npmjs.com/package/opstack-kit">
    <img src="https://img.shields.io/npm/v/opstack-kit" alt="Stars Badge" />
  </a>
</p>

<div align="center" style="display: flex; justify-content: center; flex-wrap: wrap; gap: 10px;">
  <a href="https://github.com/opstack-kit/opstack-kit/stargazers">
    <img src="https://img.shields.io/github/stars/opstack-kit" alt="Stars Badge" />
  </a>
  <a href="https://github.com/opstack-kit/opstack-kit/forks"><img src="https://img.shields.io/github/forks/opstack-kit/opstack-kit" alt="Forks Badge"/>
  </a>
  <a href="https://github.com/opstack-kit/opstack-kit/pulls">
    <img src="https://img.shields.io/github/issues-pr/opstack-kit/opstack-kit" alt="Pull Requests Badge" />
  </a>
  <a href="https://github.com/opstack-kit/opstack-kit/issues">
    <img src="https://img.shields.io/github/issues/opstack-kit/opstack-kit" alt="Issues Badge" />
  </a>
  <a href="https://github.com/opstack-kit/opstack-kit/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/opstack-kit/opstack-kit?color=2b9348">
  </a>
</div>

::: warning
Opstack Kit is currently in alpha development. The docs are not complete.
:::

## Features

- Simplifies cross L1 & L2 interactions

## Installation
- #### Additional libraries
  - ##### [opstack-kit-chains](/docs/opstack-kit-chains.md)

::: code-group

```bash [npm]
npm i opstack-kit
```

```bash [pnpm]
pnpm i opstack-kit
```

```bash [bun]
bun i opstack-kit
```

```bash [yarn]
yarn add opstack-kit
```

:::



## Example

After [configuring](/docs/configuration.md
) the network in your app, use ['opstack-kit-chains'](/docs/opstack-kit-chains.md) just import the "opstack-kit" hooks to start interacting with OP Stack chains.

```tsx
import { useWriteDepositETH } from 'opstack-kit'

const { writeDepositETH } = useWriteDepositETH()

return (
  <button
    onClick={() =>
      writeDepositETH({
        args: {
          to: '0x215db47f1B2ae03ec45024Cf62ce82879b137469',
          amount: 1n,
        },
        l2ChainId: 11155420,
      })}
  >
    Deposit ETH
  </button>
)
```

## Donate
```EVM [EVM]
0xB6Be617b1D6fE5DbdD21A6AcFD9e97A35ddCEfF5
```