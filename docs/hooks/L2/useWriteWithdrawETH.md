# useWriteWithdrawETH

Action for initiating a withdrawal of ETH to L1.

```tsx [example.tsx]
import { useWriteWithdrawETH } from 'opstack-kit'

const { writeWithdrawETH } = useWriteWithdrawETH()

return (
  <button
    onClick={() =>
      writeWithdrawETH({
        args: {
          to: '0x215db47f1B2ae03ec45024Cf62ce82879b137469',
          amount: 1n,
        },
        chainId: 11155420,
      })}
  >
    Withdraw ETH
  </button>
)
```

## Parameters

### writeWithdrawETH

`(variables: WriteWithdrawETHParameters, { onSuccess, onSettled, onError }) => void`

The mutation function you can call with variables to trigger initiating the ETH withdrawal.

- #### variables
  - ##### args

    - ###### to
    `Address`

    The address to withdraw the ETH to.

    - ###### amount
    `bigint`

    The amount of ETH to withdraw.

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
    `(data: WriteContractReturnType, variables: WriteWithdrawETHParameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteWithdrawETHParameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteWithdrawETHParameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.

##

### writeWithdrawETHAsync

`(variables: WriteWithdrawETHParameters, { onSuccess, onSettled, onError }) => Promise<WriteContractReturnType>`

Similar to writeWithdrawETH but returns a promise which can be awaited.

- #### variables
  - ##### args

    - ###### to
    `Address`

    The address to withdraw the ETH to.

    - ###### amount
    `bigint`

    The amount of ETH to withdraw.

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
    `(data: WriteContractReturnType, variables: WriteWithdrawETHParameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteWithdrawETHParameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteWithdrawETHParameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.