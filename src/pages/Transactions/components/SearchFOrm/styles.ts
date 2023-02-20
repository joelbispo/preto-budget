import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['midnightblue-900']};
    color: ${(props) => props.theme['midnightblue-300']};

    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['midnightblue-600']};
    }
  }
  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme.sandybrown};
    color: ${(props) => props.theme.sandybrown};
    font-weight: bold;
    border-radius: 6px;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: transparent;
      border: 1px solid ${(props) => props.theme.tomato};
      color: ${(props) => props.theme.tomato};
      transition: background-clor 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
