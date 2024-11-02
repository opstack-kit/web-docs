# useWriteInitiateWithdrawalETH

Action for initiating a withdrawal of ETH Native for CustomGasToken to L1.

::: tip
Use this withdrawal function Only for [CustomGasToken](/docs/hooks/L1/useWriteDepositCustomGasToken) to L1.
:::

```tsx [example.tsx]
import { useWriteInitiateWithdrawalETH } from 'opstack-kit'

const { writeInitiateWithdrawalETH } = useWriteInitiateWithdrawalETH()

return (
  <button
    onClick={() =>
      /** Use this withdrawal function Only for CustomGasToken to L1. */
      writeInitiateWithdrawalETH({
        args: {
          target: '0x215db47f1B2ae03ec45024Cf62ce82879b137469', // address
            // gasLimit: 21000n,
            // data: '0x'
        },
        amount: 100000000000000000n, // value
        chainId: 11155420, // l2ChainId
      })}
  >
    InitiateWithdrawal ETH
  </button>
)
```

Front-end testing: [react+opstack-kit with customgastoken](https://github.com/nidz-the-fact/opstack-kit-with-customgastoken)

## Parameters

### writeInitiateWithdrawalETH

`(variables: WriteWithdrawInitiateParameters, { onSuccess, onSettled, onError }) => void`

The mutation function you can call with variables to trigger initiating the ETH withdrawal.

- #### variables
  - ##### args

    - ###### target
    `Address`

    The address to withdraw the ETH to.

    - ###### gasLimit (optional)
    `number`

    Minimum gas limit to use for the transaction.

    - ###### data (optional)
    `Hex`

    Extra data to include in the transaction.

  - ###### amount
    `bigint`

    The amount of ETH to withdraw.

  - ##### chainId
    `number`

    The chain ID of the chain you want to withdraw from.

- #### options (optional)
  - ##### onSuccess
    `(data: WriteContractReturnType, variables: WriteWithdrawInitiateParameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteWithdrawInitiateParameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteWithdrawInitiateParameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.

##

### writeWithdrawETHAsync

`(variables: WriteWithdrawInitiateParameters, { onSuccess, onSettled, onError }) => Promise<WriteContractReturnType>`

Similar to writeInitiateWithdrawalETH but returns a promise which can be awaited.

- #### variables
  - ##### args

    - ###### target
    `Address`

    The address to withdraw the ETH to.

    - ###### gasLimit (optional)
    `number`

    Minimum gas limit to use for the transaction.

    - ###### data (optional)
    `Hex`

    Extra data to include in the transaction.

  - ###### amount
    `bigint`

    The amount of ETH to withdraw.

  - ##### chainId
    `number`

    The chain ID of the chain you want to withdraw from.

- #### options (optional)
  - ##### onSuccess
    `(data: WriteContractReturnType, variables: WriteWithdrawInitiateParameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteWithdrawInitiateParameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteWithdrawInitiateParameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.