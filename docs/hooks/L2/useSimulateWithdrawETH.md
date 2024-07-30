# useSimulateWithdrawETH

Simulates initiating a withdrawal of ETH to L1.

```tsx [example.tsx]
import { useSimulateWithdrawETH } from 'opstack-kit'

function App() {
  const result = useSimulateWithdrawETH({
    args: {
      to: '0x215db47f1B2ae03ec45024Cf62ce82879b137469',
      amount: 1n,
    },
    chainId: 11155420,
  })
}
```

## Parameters

### args

- #### to
  `Address`

  The address to withdraw the ETH to.

- #### amount
  `bigint`

  The amount of ETH to withdraw.

- #### minGasLimit (optional)
  `number`

  Minimum gas limit to use for the transaction.

- #### extraData (optional)
  `Hex`

  Extra data to include in the transaction.

### chainId

`number`

The chain ID of the chain you want to withdraw from.