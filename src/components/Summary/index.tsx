import { SummaryCardContainer, SummaryContainer } from './styles'
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollarSimple,
} from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()
  return (
    <SummaryContainer>
      <SummaryCardContainer>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#007D59" />
        </header>
        <strong> {priceFormatter.format(summary.income)}</strong>
      </SummaryCardContainer>

      <SummaryCardContainer>
        <header>
          <span>Outcome</span>
          <ArrowCircleDown size={32} color="#AB222E" />
        </header>
        <strong> {priceFormatter.format(summary.outcome)}</strong>
      </SummaryCardContainer>

      <SummaryCardContainer variant="green">
        <header>
          <span>Income</span>
          <CurrencyDollarSimple size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCardContainer>
    </SummaryContainer>
  )
}
