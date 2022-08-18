import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components"

import Container from "../Container";

import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import HeaderNav from "./HeaderNav";
import HeaderNavMobile from "./HeaderNavMobile";

const SiteHeader = styled.header`
  padding: 26px 0;
  background: var(--mainColor);
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`

const Header: FC = (): JSX.Element => {
    return (
        <SiteHeader>
            <Container>
                <HeaderWrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <HeaderNav />
                    <HeaderNavMobile />
                </HeaderWrapper>
            </Container>
        </SiteHeader>
    );
};

export default Header;