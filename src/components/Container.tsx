import {FC} from 'react';
import styled from "styled-components";

const SiteContainer = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`

type Props = {
    children: JSX.Element | string
}

const Container: FC<Props> = ({children}): JSX.Element => {
    return (
        <SiteContainer>
            <>
                {children}
            </>
        </SiteContainer>
    );
};

export default Container;