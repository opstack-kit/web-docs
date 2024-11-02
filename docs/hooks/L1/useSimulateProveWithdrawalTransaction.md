# useSimulateProveWithdrawalTransaction

Simulates proving a withdrawal transaction.

::: info
Multi support for fault-proofs New OP-Stack contracts v3.x.x. using: `"opstack-kit": "^1.6.0"`
:::

```tsx [example.tsx]
import { useSimulateProveWithdrawalTransaction } from 'opstack-kit'

function App() {
  const result = useSimulateProveWithdrawalTransaction({
    args: {
      withdrawalTxHash:
        '0x2effa77eda4fe8375ac01ad2961b4029435a085b2801dcf188ad788b840e7406',
    },
    l2ChainId: 11155420,
  })
}
```

## Parameters

### args

- #### withdrawalTxHash
  `Hash`

  The L2 transaction hash of the withdrawal initiation.

### l2ChainId

`number`

The chain ID of the chain you want to withdraw from.