import styled from "styled-components";

export const Main = styled.main`
  padding: 50px;
`

export const Htwo = styled.h2`
  margin-bottom: 10px;
`

export const Hthree = styled.h3`
  margin-bottom: 10px;
`

export const Section = styled.section`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--clr-black);
`

export const Product = styled.li`
  display: grid;
  grid-template-columns: 200px 1fr;
  margin-bottom: 50px;

  & img {
    max-height: 200px;
    max-width: 100%;
  }
`

export const Category = styled.span`
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
  background-color: lightgrey;
  color: var(--clr-black) !important;
`
export const Title = styled.h2`
  font-weight: 600;
`

export const Price = styled.p`
  font-size: 1.5em;
  font-weight: 600;
`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 20px;
`