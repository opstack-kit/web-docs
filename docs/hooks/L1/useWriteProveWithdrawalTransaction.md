# useWriteProveWithdrawalTransaction

Action for proving a withdrawal transaction.

```tsx [example.tsx]
import { useWriteProveWithdrawalTransaction } from 'opstack-kit'

const { writeProveWithdrawalTransaction } = useWriteProveWithdrawalTransaction()

return (
  <button
    onClick={() =>
      writeProveWithdrawalTransaction({
        args: {
          withdrawalTxHash:
            '0x2effa77eda4fe8375ac01ad2961b4029435a085b2801dcf188ad788b840e7406',
        },
        l2ChainId: 11155420,
      })}
  >
    Prove Withdrawal
  </button>
)
```

## Parameters

### writeProveWithdrawalTransaction

`(variables: WriteProveWithdrawalTransactionParameters, { onSuccess, onSettled, onError }) => void`

The mutation function you can call with variables to trigger proving the provided withdrawal.

- #### variables
  - ##### args

    - ###### withdrawalTxHash
    `Hash`

    The L2 transaction hash of the withdrawal initiation.

  - ##### l2ChainId
    `number`

    The chain ID of the chain you are withdrawing from.

- #### options (optional)
  - ##### onSuccess
    `(data: WriteContractReturnType, variables: WriteProveWithdrawalTransactionParameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteProveWithdrawalTransactionParameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteProveWithdrawalTransactionParameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.

### writeProveWithdrawalTransactionAsync

`(variables: WriteProveWithdrawalTransactionParameters, { onSuccess, onSettled, onError }) => Promise<WriteContractReturnType>`

Similar to writeProveWithdrawalTransaction but returns a promise which can be awaited.

- #### variables
  - ##### args

    - ###### withdrawalTxHash
    `Hash`

    The L2 transaction hash of the withdrawal initiation.

  - ##### l2ChainId
    `number`

    The chain ID of the chain you are withdrawing from.

- #### options (optional)
  - ##### onSuccess
    `(data: WriteContractReturnType, variables: WriteProveWithdrawalTransactionParameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteProveWithdrawalTransactionParameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteProveWithdrawalTransactionParameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.