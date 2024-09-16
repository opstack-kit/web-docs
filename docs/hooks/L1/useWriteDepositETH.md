# useWriteDepositETH

Action for executing a deposit of ETH to L2.

```tsx [example.tsx]
import { useWriteDepositETH } from 'opstack-kit'

const { writeDepositETH } = useWriteDepositETH()

return (
  <button
    onClick={() =>
      writeDepositETH({
        args: {
          to: '0x215db47f1B2ae03ec45024Cf62ce82879b137469',
          amount: 1n,
        },
        l2ChainId: 11155420,
      })}
  >
    Deposit ETH
  </button>
)
```

## Parameters

### writeDepositETH

`(variables: WriteDepositETHParameters, { onSuccess, onSettled, onError }) => void`

The mutation function you can call with variables to trigger the ETH deposit.

- #### variables
  - ##### args

    - ###### to
    `Address`

    The address to deposit the ETH to.

    - ###### amount
    `bigint`

    The amount of ETH to deposit.

    - ###### gasLimit (optional)
    `number`

    The minimum gas limit to use for the deposit transaction.

    - ###### data (optional)
    `Hex`

    Data to include in the transaction.

  - ##### l2ChainId
    `number`

    The chain ID of the chain you want to deposit to.

- #### options (optional)
  - ##### onSuccess
    `(data: WriteContractReturnType, variables: WriteDepositETHParameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteDepositETHParameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteDepositETHParameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.

##

### writeDepositETHAsync

`(variables: WriteDepositETHParameters, { onSuccess, onSettled, onError }) => Promise<WriteContractReturnType>`

Similar to writeDepositETH but returns a promise which can be awaited.

- #### variables
  - ##### args

    - ###### to
    `Address`

    The address to deposit the ETH to.

    - ###### amount
    `bigint`

    The amount of ETH to deposit.

    - ###### gasLimit (optional)
    `number`

    The minimum gas limit to use for the deposit transaction.

    - ###### data (optional)
    `Hex`

    Data to include in the transaction.

  - ##### l2ChainId
    `number`

    The chain ID of the chain you want to deposit to.

- #### options (optional)
  - ##### onSuccess
    `(data: WriteContractReturnType, variables: WriteDepositETHParameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteDepositETHParameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteDepositETHParameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.