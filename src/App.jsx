import React from "react";
import styled from "styled-components";
import DoneItems from "./DoneItems";
import ToDoItems from "./ToDoItems";
import { useState } from "react";
import items from "./items";
import ItemsContext from "./ItemsContext";

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

const App = () => {
  const [currentItems, setItems] = useState(items);

  const changeItem = (index) => {
    const newItems = currentItems.splice(index, 1, {...currentItems[index], done: !currentItems[index].done});
    setItems(newItems);
  };

  return (
    <MainContainer>
      <ItemsContext.Provider
        value={{
          items: currentItems,
          changeList: changeItem
        }}
      >
        <Content>
          <ToDoItems />
          <DoneItems />
        </Content>
      </ItemsContext.Provider>
    </MainContainer>
  );
};

export default App;
