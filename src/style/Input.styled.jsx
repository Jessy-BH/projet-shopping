import styled from 'styled-components'

export const Input = styled.input`
  border-radius: 5px;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: var(--clr-black);
  padding: 5px;
  min-width: 40px;
  width: ${props => props.width};

  &:focus {
    border-color: var(--clr-orange)
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`