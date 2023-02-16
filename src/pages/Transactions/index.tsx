import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchFOrm'
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTableContainer,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm></SearchForm>
        <TransactionTableContainer>
          <tbody>
            <tr>
              <td width="50%"> Compra no supermercado</td>
              <td>
                <PriceHighlight variant="income"> R$ 17.400,00</PriceHighlight>
              </td>
              <td> Supermercado</td>
              <td> 13/04/2022</td>
            </tr>
            <tr>
              <td width="50%"> Compra no Ivis Roche</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 17.400,00
                </PriceHighlight>
              </td>
              <td> Cosmetico</td>
              <td> 13/04/2022</td>
            </tr>
            <tr>
              <td width="50%"> Compra no restaurante</td>
              <td>
                <PriceHighlight variant="income"> R$ 17.400,00</PriceHighlight>
              </td>
              <td> Saidas</td>
              <td> 13/04/2022</td>
            </tr>
            <tr>
              <td width="50%"> Compra no Bar</td>
              <td>
                <PriceHighlight variant="outcome"> R$ 17.400,00</PriceHighlight>
              </td>
              <td> Saidas1</td>
              <td> 13/04/2022</td>
            </tr>
          </tbody>
        </TransactionTableContainer>
      </TransactionContainer>
    </div>
  )
}
