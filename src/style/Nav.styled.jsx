import styled from "styled-components";

export const NavStyle = styled.nav`
  background-color: var(--clr-orange);
  padding: 20px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const H1Link = styled.h1`
  font-size: 30px;
  font-weight: 600;
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Img = styled.img`
  width: 24px;
  height: 24px;
`

export const LiLink = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`

export const Btn = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-orange-hover);
  }
`