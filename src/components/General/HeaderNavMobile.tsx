import React, {FC, useState} from 'react';
import {Drawer} from "antd";
import styled from "styled-components";
import {Link} from "react-router-dom";

import {ReactComponent as Hamburger} from '../../assets/images/hamburgerMenu.svg'


const Button = styled.button`
  display: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 20px;
  background-color: transparent;
  border: none;

  @media screen and (max-width: 700px) {
    display: block;
  }
`

const NavList = styled.ul`
  padding: 0;
  list-style: none;

  & a {
    color: var(--mainColor);
  }

  & li {
    margin-bottom: 15px;
  }
`

const ButtonLink = styled(Link)`
  padding: 5px 20px;
  border: 1px solid var(--mainColor);
  border-radius: 100px;
`

const HeaderNavMobile: FC = (): JSX.Element => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button onClick={showDrawer}>
                <Hamburger />
            </Button>
            <Drawer title="" placement="right" onClose={onClose} visible={visible} contentWrapperStyle={{width: "85%"}}>
                <NavList>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><ButtonLink to="/contact">Log in</ButtonLink></li>
                </NavList>
            </Drawer>
        </>
    );
};

export default HeaderNavMobile;