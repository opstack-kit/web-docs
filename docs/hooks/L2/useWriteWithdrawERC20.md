# useWriteWithdrawERC20

Action for initiating a withdrawal of an ERC20 to L1.

```tsx [example.tsx]
import { useWriteWithdrawERC20 } from 'opstack-kit'

const { writeWithdrawERC20 } = useWriteWithdrawERC20()

return (
  <button
    onClick={() =>
      writeWithdrawERC20({
        args: {
          l2Token: '0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2',
          to: '0x215db47f1B2ae03ec45024Cf62ce82879b137469',
          amount: 1n,
        },
        chainId: 11155420,
      })}
  >
    Withdraw ERC20
  </button>
)
```

## Parameters

### writeWithdrawERC20

`(variables: WriteWithdrawERC20Parameters, { onSuccess, onSettled, onError }) => void`

The mutation function you can call with variables to trigger initiating the ERC20 withdrawal.

- #### variables
  - ##### args

    - ###### l2Token
    `Address`

    The contract address of the token on L2.

    - ###### to
    `Address`

    The address to withdraw the tokens to.

    - ###### amount
    `bigint`

    The amount to withdraw.

    - ###### minGasLimit (optional)
    `number`

    Minimum gas limit to use for the transaction.

    - ###### extraData (optional)
    `Hex`

    Extra data to include in the transaction.

  - ##### chainId
    `number`

    The chain ID of the chain you want to withdraw from.

- #### options (optional)
  - ##### onSuccess
    `(data: WriteContractReturnType, variables: WriteWithdrawERC20Parameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteWithdrawERC20Parameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteWithdrawERC20Parameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.

### writeWithdrawERC20Async

`(variables: WriteWithdrawERC20Parameters, { onSuccess, onSettled, onError }) => Promise<WriteContractReturnType>`

Similar to writeWithdrawERC20 but returns a promise which can be awaited.

- #### variables
  - ##### args

    - ###### l2Token
    `Address`

    The contract address of the token on L2.

    - ###### to
    `Address`

    The address to withdraw the tokens to.

    - ###### amount
    `bigint`

    The amount to withdraw.

    - ###### minGasLimit (optional)
    `number`

    Minimum gas limit to use for the transaction.

    - ###### extraData (optional)
    `Hex`

    Extra data to include in the transaction.

  - ##### chainId
    `number`

    The chain ID of the chain you want to withdraw from.

- #### options (optional)
  - ##### onSuccess
    `(data: WriteContractReturnType, variables: WriteWithdrawERC20Parameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteWithdrawERC20Parameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteWithdrawERC20Parameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.