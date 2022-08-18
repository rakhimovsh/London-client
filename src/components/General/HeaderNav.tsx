import React, {FC} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  max-width: 540px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  & a {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    text-decoration: none;
  }

`

const ButtonLink = styled(Link)`
  padding: 10px 40px;
  border: 1px solid #FFFFFF;
  border-radius: 100px;
`


const HeaderNav: FC = (): JSX.Element => {
    return (
        <Nav>
            <NavList>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><ButtonLink to="/contact">Log in</ButtonLink></li>
            </NavList>
        </Nav>
    );
};

export default HeaderNav;