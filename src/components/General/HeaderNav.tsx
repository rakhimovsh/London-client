import React, {FC} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import Button from "../Button";
import {ButtonType} from "../../enums/button";

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


const HeaderNav: FC = (): JSX.Element => {
    const navigate = useNavigate()
    const handleBtnLogin = () => {
        navigate('/login')
    }
    return (
        <Nav>
            <NavList>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Button type={ButtonType.LIGHT} onClick={handleBtnLogin}>Log in</Button></li>

            </NavList>
        </Nav>
    );
};

export default HeaderNav;