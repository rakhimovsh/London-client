import React, {FC} from 'react';
import styled from "styled-components";

import {ButtonType} from "../enums/button";


interface BtnStyle {
    buttonType: ButtonType
}

const ElButton = styled.button<BtnStyle>`
  padding: 10px 30px;
  border-radius: 100px;
  border: 1px solid ${props => props.buttonType === ButtonType.LIGHT ? 'white' : '#BB2339'};
  background-color: transparent;
  color: ${props => props.buttonType === ButtonType.LIGHT ? 'white' : 'black'};
  cursor: pointer;
`

interface Props {
    type: ButtonType,
    children: string,
    onClick?: () => void,
}

const Button: FC<Props> = ({type, children, onClick}): JSX.Element => {
    const handleClick = onClick ? onClick : () => {
    }
    return (
        <ElButton buttonType={type} onClick={handleClick}>
            {children}
        </ElButton>
    );
};

export default Button;