# useWriteDepositCustomGasToken

Action for executing a depositERC20Transaction of an CustomGasToken to L2.

::: tip
The token must be approved to portalAddress Before using the function useWriteDepositCustomGasToken. (and withdrawal should be used [InitiateWithdrawal](/docs/hooks/L2/useWriteInitiateWithdrawalETH))
:::

```tsx [example.tsx]
import { useWriteDepositCustomGasToken } from 'opstack-kit'

const { writeDepositCustomGasToken } = useWriteDepositCustomGasToken();

return (
  <button
    onClick={() =>
      /** The token must be approved to portalAddress 
      Before using the function useWriteDepositCustomGasToken. 
      (and withdrawal should be used InitiateWithdrawal) */
      writeDepositCustomGasToken({
        args: {
          to: '0x215db47f1B2ae03ec45024Cf62ce82879b137469', // address
          mint: 1000000000000000000n, // amount
          value: 1000000000000000000n, // amount
           // gasLimit: 21000n,
           // isCreation: false,
           // data: '0x',
        },
        l2ChainId: 11155420,
      })}
  >
    Deposit CustomGasToken
  </button>
)
```

Front-end testing: [react+opstack-kit with customgastoken](https://github.com/nidz-the-fact/opstack-kit-with-customgastoken)

## Parameters

### writeDepositCustomGasToken

`(variables: WriteDepositCustomGasParameters, { onSuccess, onSettled, onError }) => void`

The mutation function you can call with variables to trigger the deposit.

- #### variables
  - ##### args

    - ###### to
    `Address`

    The address to deposit the tokens to.

    - ###### mint
    `bigint`

    The amount to deposit. (Should be equal to "value")

    - ###### value
    `bigint`

    The amount to deposit. (Should be equal to "mint")

    - ###### gasLimit (optional)
    `number`

    The minimum gas limit to use for the deposit transaction.

    - ###### isCreation (optional)
    `false`

    Set the default value to false.

    - ###### data (optional)
    `Hex`

    Extra data to include in the transaction.

  - ##### l2ChainId
    `number`

    The chain ID of the chain you want to deposit to.

- #### options (optional)
  - ##### onSuccess
    `(data: WriteContractReturnType, variables: WriteDepositCustomGasParameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteDepositCustomGasParameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteDepositCustomGasParameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.

##

### writeDepositERC20Async

`(variables: WriteDepositCustomGasParameters, { onSuccess, onSettled, onError }) => Promise<WriteContractReturnType>`

Similar to writeDepositCustomGasToken but returns a promise which can be awaited.

- #### variables
  - ##### args

    - ###### to
    `Address`

    The address to deposit the tokens to.

    - ###### mint
    `bigint`

    The amount to deposit. (Should be equal to "value")

    - ###### value
    `bigint`

    The amount to deposit. (Should be equal to "mint")

    - ###### gasLimit (optional)
    `number`

    The minimum gas limit to use for the deposit transaction.

    - ###### isCreation (optional)
    `false`

    Set the default value to false.

    - ###### data (optional)
    `Hex`

    Extra data to include in the transaction.

  - ##### l2ChainId
    `number`

    The chain ID of the chain you want to deposit to.

- #### options (optional)
  - ##### onSuccess
    `(data: WriteContractReturnType, variables: WriteDepositCustomGasParameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteDepositCustomGasParameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteDepositCustomGasParameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.