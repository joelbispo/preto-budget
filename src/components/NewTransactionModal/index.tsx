import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButtonContainer,
  ContentContainer,
  OverlayContainer,
  TransactionTypeButtonContainer,
  TransactionTypeContainer,
} from './styles'
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <OverlayContainer />
      <ContentContainer>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButtonContainer>
          <X size={24} />
        </CloseButtonContainer>

        <form action="">
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Value" required />
          <input type="text" placeholder="Category" required />
          <TransactionTypeContainer>
            <TransactionTypeButtonContainer value="income" variant="income">
              <ArrowCircleUp size={24} />
              Income
            </TransactionTypeButtonContainer>

            <TransactionTypeButtonContainer value="outcome" variant="outcome">
              <ArrowCircleDown size={24} />
              Outcome
            </TransactionTypeButtonContainer>
          </TransactionTypeContainer>

          <button type="submit">Cadastrar</button>
        </form>
      </ContentContainer>
    </Dialog.Portal>
  )
}
