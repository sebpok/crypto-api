import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Bitcoin } from '../assets/icons/bitcoin-logo-svgrepo-com.svg';

const crypto = {

};

const Wrapper = styled.div`
`;

function Card() {
  return (
    <Wrapper>
      <div>
        <Bitcoin />
      </div>
      <h3>Bitcoin</h3>
      <div />
    </Wrapper>
  );
}

export default Card;
