import React from 'react';
import styled from 'styled-components';
import ListContainer from './components/ListContainer';
import ActionButton from './components/Button';

const MainContainer = styled.div`
  background: rgb(60,49,143);
  background: linear-gradient(to bottom, rgba(60,49,143,1) 0%, rgba(9,9,121,1) 0%, rgba(239,179,217,1) 100%);
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const App = () => {
  return (
    <MainContainer>
      <ListContainer />
      <ActionButton />
    </MainContainer>
  );
}

export default App;
