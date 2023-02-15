import styled from 'styled-components'

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  padding: 50px;
`

export const Article = styled.article`
  display: grid; 
  grid-template-columns: 200px 1fr;
  gap: 10px;

  & img {
    max-height: 200px;
    max-width: 100%;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`

export const Category = styled.span`
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
  background-color: lightgrey;
  color: var(--clr-black) !important;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  width: fit-content;
`

export const Title = styled.h2`
  font-weight: 600;
`

export const Price = styled.p`
  font-size: 1.5em;
  font-weight: 600;
`