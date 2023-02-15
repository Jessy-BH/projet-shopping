import React, { useEffect, useState } from "react";
import cart from "../assets/cart.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import account from "../assets/account.svg";
import { NavLink } from "react-router-dom";
import { H1Link, Ul, Img, NavStyle, LiLink, Btn } from "../style/Nav.styled";

const Nav = () => {
  const darkThemeLs = localStorage.getItem('dark-theme');
  const [isDarkTheme, setIsDarkTheme] = useState(darkThemeLs === null || darkThemeLs === 'false' ? false : true);
  

  const setTheme = () => {
    document.querySelector('body').classList.toggle('dark-theme')
    setIsDarkTheme(!isDarkTheme);

  }

  useEffect(() => {
     localStorage.setItem('dark-theme', isDarkTheme);
  });

  return (
    <NavStyle>
      <H1Link>
        <NavLink to="/" className="navlink-style">
          EZ Shopping
        </NavLink>
      </H1Link>
      <Ul>
        <LiLink>
          <NavLink to="/account" className="navlink-style">
            <Img src={account} alt="" />
            Alan Turing
          </NavLink>
        </LiLink>
        <LiLink>
          <NavLink to="/cart" className="navlink-style">
            <Img src={cart} alt="" />
            0 Items
          </NavLink>
        </LiLink>
        <LiLink>
          <Btn onClick={setTheme}>
            <Img src={isDarkTheme ? sun : moon} alt="" />
          </Btn>
        </LiLink>
      </Ul>
    </NavStyle>
  );
};

export default Nav;
