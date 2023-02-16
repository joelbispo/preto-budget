import { SummaryCardContainer, SummaryContainer } from './styles'
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollarSimple,
} from 'phosphor-react'
export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCardContainer>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#007D59" />
        </header>
        <strong> R$ 17.400,00</strong>
      </SummaryCardContainer>

      <SummaryCardContainer>
        <header>
          <span>Outcome</span>
          <ArrowCircleDown size={32} color="#AB222E" />
        </header>
        <strong> R$ 17.400,00</strong>
      </SummaryCardContainer>

      <SummaryCardContainer variant="green">
        <header>
          <span>Income</span>
          <CurrencyDollarSimple size={32} color="#fff" />
        </header>
        <strong> R$ 17.400,00</strong>
      </SummaryCardContainer>
    </SummaryContainer>
  )
}
