import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ButtonWrapper = styled(Button)`
    border-radius: 6px !important;
    background: #443691 !important;
    color: #ffffff !important;
    text-transform: uppercase;
    width: 150px;
`;

const ActionButton = () => {
    return (
      <ButtonWrapper>
          Done
      </ButtonWrapper>
    );
  }
  
  export default ActionButton;