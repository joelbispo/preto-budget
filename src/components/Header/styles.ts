import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['midnightblue-900']};
  padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 3rem;
    max-height: 3rem;
  }
`
export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme.sandybrown};
  color: ${(props) => props.theme['midnightblue-900']};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-500']};
  }
`
