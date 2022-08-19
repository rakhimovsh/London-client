import React, {FC} from 'react';
import styled from "styled-components";
import Button from "../Button";
import {ButtonType} from "../../enums/button";


const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;
  width: 100%;
  background: var(--mainColor);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 22px 30px 95px 1px rgba(86, 86, 86, 0.2);
  border-radius: 20px;
  @media screen and (max-width: 800px) {
    padding: 40px 30px;
  }

  & p {
    margin-bottom: 25px;
    font-weight: 700;
    font-size: 23px;
    line-height: 130%;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #FFFFFF;
    @media screen and (max-width: 800px) {
      margin-bottom: 20px;
      font-size: 20px;
    }
  }

  & h2 {
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 48px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: capitalize;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #FFFFFF;
    @media screen and (max-width: 800px) {
      font-size: 24px;
    }
  }

  & span {
    margin-bottom: 64px;
    font-weight: 400;
    font-size: 16px;
    line-height: 175%;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    @media screen and (max-width: 800px) {
      margin-bottom: 20px;
    }
  }
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 810px;
  width: 100%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
const Input = styled.input`
  width: 70%;
  padding: 10px 19px;
  background-color: transparent;
  border: 1px solid #AAAAAA;
  border-radius: 100px;
  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
    width: 100%;
  }

  &:focus {
    outline: none;
  }
`


const FooterForm: FC = (): JSX.Element => {
    return (
        <WrapperForm>
            <p>Newsletter</p>
            <h2>Subscribe to Our Newsletter</h2>
            <span>And never miss latest Updates!</span>
            <Form>
                <Input placeholder="Email Address" required autoComplete="off" />
                <Button type={ButtonType.LIGHT}>Subscribe</Button>
            </Form>
        </WrapperForm>
    );
};

export default FooterForm;