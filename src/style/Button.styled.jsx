import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--clr-orange);
  color: var(--clr-black);
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color .3s ease-in-out;

  &:hover {
    background-color: var(--clr-orange-hover)
  }
`