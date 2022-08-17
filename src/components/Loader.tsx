import React, {FC} from 'react';
import {BounceLoader} from "react-spinners";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const Loader: FC = (): JSX.Element => {
    return (
        <LoaderContainer>
            <BounceLoader color="#BB2339" size={70} />
        </LoaderContainer>
    );
}

export default Loader;