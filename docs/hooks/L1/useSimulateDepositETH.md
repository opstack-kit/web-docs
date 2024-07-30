# useSimulateDepositETH

Simulates a deposit of ETH to L2.

```tsx [example.tsx]
import { useSimulateDepositETH } from 'opstack-kit'

function App() {
  const result = useSimulateDepositETH({
    args: {
      to: '0x215db47f1B2ae03ec45024Cf62ce82879b137469',
      amount: 1n,
    },
    l2ChainId: 11155420,
  })
}
```

## Parameters

### args

- #### to
  `Address`

  The address to deposit the ETH to.

- #### amount
  `bigint`

  The amount of ETH to deposit.

- #### gasLimit (optional)
  `number`

  The minimum gas limit to use for the deposit transaction.

- #### data (optional)
  `Hex`

  Data to include in the transaction.

### l2ChainId

`number`

The chain ID of the chain you want to deposit to.