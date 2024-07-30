# useSimulateDepositERC20

Simulates a deposit of an ERC20 to L2.

```tsx [example.tsx]
import { useSimulateDepositERC20 } from 'opstack-kit'

function App() {
  const result = useSimulateDepositERC20({
    args: {
      l1Token: '0x12608ff9dac79d8443F17A4d39D93317BAD026Aa',
      l2Token: '0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2',
      to: '0x215db47f1B2ae03ec45024Cf62ce82879b137469',
      amount: 1n,
    },
    l2ChainId: 11155420,
  })
}
```

## Parameters

### args

- #### l1Token
  `Address`

  The contract address of the token on L1.

- #### l2Token
  `Address`

  The contract address of the token on L2.

- #### to
  `Address`

  The address to deposit the tokens to.

- #### amount
  `bigint`

  The amount to deposit.

- #### minGasLimit (optional)
  `number`

  The minimum gas limit to use for the deposit transaction.

- #### extraData (optional)
  `Hex`

  Extra data to include in the transaction.

### l2ChainId

`number`

The chain ID of the chain you want to deposit to.