import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: string
  createdAt: string
}

interface TransactionInput {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: Date
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(
    async (transaction: TransactionInput) => {
      const { description, type, category, price } = transaction

      const response = await api.post('transactions', {
        description,
        type,
        category,
        price,
        createdAt: new Date(),
      })

      setTransactions((state) => [...state, response.data])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ createTransaction, transactions, fetchTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
