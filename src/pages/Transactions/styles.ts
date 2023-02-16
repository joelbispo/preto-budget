import styled from 'styled-components'

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto;
  padding: 0 1.5rem;
`

export const TransactionTableContainer = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  border-collapse: separate;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['midnightblue-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-500']
      : props.theme['red-500']};
`
