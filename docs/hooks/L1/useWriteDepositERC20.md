# useWriteDepositERC20

Action for executing a deposit of an ERC20 to L2.

```tsx [example.tsx]
import { useWriteDepositERC20 } from 'opstack-kit'

const { writeDepositERC20 } = useWriteDepositERC20()

return (
  <button
    onClick={() =>
      writeDepositERC20({
        args: {
          l1Token: '0x12608ff9dac79d8443F17A4d39D93317BAD026Aa',
          l2Token: '0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2',
          to: '0x215db47f1B2ae03ec45024Cf62ce82879b137469',
          amount: 1n,
        },
        l2ChainId: 11155420,
      })}
  >
    Deposit ERC20
  </button>
)
```

## Parameters

### writeDepositERC20

`(variables: WriteDepositERC20Parameters, { onSuccess, onSettled, onError }) => void`

The mutation function you can call with variables to trigger the deposit.

- #### variables
  - ##### args

    - ###### l1Token
    `Address`

    The contract address of the token on L1.

    - ###### l2Token
    `Address`

    The contract address of the token on L2.

    - ###### to
    `Address`

    The address to deposit the tokens to.

    - ###### amount
    `bigint`

    The amount to deposit.

    - ###### minGasLimit (optional)
    `number`

    The minimum gas limit to use for the deposit transaction.

    - ###### extraData (optional)
    `Hex`

    Extra data to include in the transaction.

  - ##### l2ChainId
    `number`

    The chain ID of the chain you want to deposit to.

- #### options (optional)
  - ##### onSuccess
    `(data: WriteContractReturnType, variables: WriteDepositERC20Parameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteDepositERC20Parameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteDepositERC20Parameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.

### writeDepositERC20Async

`(variables: WriteDepositERC20Parameters, { onSuccess, onSettled, onError }) => Promise<WriteContractReturnType>`

Similar to writeDepositERC20 but returns a promise which can be awaited.

- #### variables
  - ##### args

    - ###### l1Token
    `Address`

    The contract address of the token on L1.

    - ###### l2Token
    `Address`

    The contract address of the token on L2.

    - ###### to
    `Address`

    The address to deposit the tokens to.

    - ###### amount
    `bigint`

    The amount to deposit.

    - ###### minGasLimit (optional)
    `number`

    The minimum gas limit to use for the deposit transaction.

    - ###### extraData (optional)
    `Hex`

    Extra data to include in the transaction.

  - ##### l2ChainId
    `number`

    The chain ID of the chain you want to deposit to.

- #### options (optional)
  - ##### onSuccess
    `(data: WriteContractReturnType, variables: WriteDepositERC20Parameters, context: TContext) => void`

    This function will fire when the mutation is successful and will be passed the mutation's result.

  - ##### onError
    `(error: WriteContractErrorType, variables: WriteDepositERC20Parameters, context: TContext | undefined) => void`

    This function will fire if the mutation encounters an error and will be passed the error.

  - ##### onSettled
    `(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteDepositERC20Parameters, context: TContext | undefined) => void`

    - This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    - If you make multiple requests, onSuccess will fire only after the latest call you've made.