# useSimulateWithdrawERC20

Simulates initiating a withdrawal of an ERC20 to L1.

```tsx [example.tsx]
import { useSimulateWithdrawERC20 } from 'opstack-kit'

function App() {
  const result = useSimulateWithdrawERC20({
    args: {
      l2Token: '0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2',
      to: '0x215db47f1B2ae03ec45024Cf62ce82879b137469',
      amount: 1n,
    },
    chainId: 11155420,
  })
}
```

## Parameters

### args

- #### l2Token
  `Address`

  The contract address of the token on L2.

- #### to
  `Address`

  The address to withdraw the tokens to.

- #### amount
  `bigint`

  The amount to withdraw.

- #### minGasLimit (optional)
  `number`

  Minimum gas limit to use for the transaction.

- #### extraData (optional)
  `Hex`

  Extra data to include in the transaction.

### chainId

`number`

The chain ID of the chain you want to withdraw from.