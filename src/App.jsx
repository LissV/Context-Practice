import React from "react";
import styled from "styled-components";
import ListContainer from "./components/ListContainer";
import ActionButton from "./components/Button";

const MainContainer = styled.div`
  background: rgb(60, 49, 143);
  background: linear-gradient(
    to bottom,
    rgba(60, 49, 143, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(239, 179, 217, 1) 100%
  );
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListTitle = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-family: Roboto !important;
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const CustomActionButton = styled(ActionButton)`
  margin-top: 20px !important;
`;

const App = () => {
  return (
    <MainContainer>
      <Content>
        <ListWrapper>
          <ListTitle>Tasks to do</ListTitle>
          <ListContainer />
          <CustomActionButton />
        </ListWrapper>
        <ListWrapper>
          <ListTitle>Done tasks</ListTitle>
          <ListContainer />
          <CustomActionButton />
        </ListWrapper>
      </Content>
    </MainContainer>
  );
};

export default App;
