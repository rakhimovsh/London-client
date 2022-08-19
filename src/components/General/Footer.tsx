import React from 'react';
import styled from "styled-components";

import Container from "../Container";
import FooterForm from "./FooterForm";

const SiteFooter = styled.footer`

`

const Footer = () => {
    return (
        <SiteFooter>
            <Container>
                <>
                    <FooterForm />
                </>
            </Container>
        </SiteFooter>
    );
};

export default Footer;