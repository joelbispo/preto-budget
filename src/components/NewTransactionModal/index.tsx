import * as Dialog from '@radix-ui/react-dialog'
import * as zod from 'zod'
import {
  CloseButtonContainer,
  ContentContainer,
  OverlayContainer,
  TransactionTypeButtonContainer,
  TransactionTypeContainer,
} from './styles'
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'

import { useContextSelector } from 'use-context-selector'

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.string().or(zod.number()),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type newTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction
    },
  )
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    const { description, price, category, type } = data

    console.log(data)

    await createTransaction({
      description,
      price: Number(price),
      category,
      type,
      createdAt: new Date(),
    })

    reset()
  }
  const onError = (errors: any, e: any) => console.log(errors, e)

  return (
    <Dialog.Portal>
      <OverlayContainer />
      <ContentContainer>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButtonContainer>
          <X size={24} />
        </CloseButtonContainer>

        <form onSubmit={handleSubmit(handleCreateNewTransaction, onError)}>
          <input
            {...register('description')}
            type="text"
            placeholder="Description"
            required
          />
          <input
            {...register('price')}
            type="number"
            placeholder="Value"
            required
          />
          <input
            {...register('category')}
            type="text"
            placeholder="Category"
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionTypeContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButtonContainer
                    value="income"
                    variant="income"
                  >
                    <ArrowCircleUp size={24} />
                    Income
                  </TransactionTypeButtonContainer>

                  <TransactionTypeButtonContainer
                    value="outcome"
                    variant="outcome"
                  >
                    <ArrowCircleDown size={24} />
                    Outcome
                  </TransactionTypeButtonContainer>
                </TransactionTypeContainer>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </ContentContainer>
    </Dialog.Portal>
  )
}
