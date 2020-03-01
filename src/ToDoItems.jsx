import React, { useContext } from "react";
import ListContainer from "./components/ListContainer";
import ListWrapper from "./components/ListWrapper";
import ListTitle from "./components/ListTitle";
import ListItemsWrapper from "./components/ListItemsWrapper";
import ItemWrapper from "./components/ItemWrapper";
import ItemsContext from "./ItemsContext";

const ToDoItems = () => {
  const { items, setItems } = useContext(ItemsContext);
  const toDoItems = items.filter(item => !item.done);
  const handleListItemClick = (id) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          return { ...item, done: true };
        }

        return item;
      })
    );
  }

  return (
    <ListWrapper>
      <ListTitle>Tasks to do</ListTitle>
      <ListContainer>
        <ListItemsWrapper>
          {toDoItems.map(item => (
            <ItemWrapper
              key={item.id}
              button
              onClick={() => handleListItemClick(item.id)}
            >
              {item.title}
            </ItemWrapper>
          ))}
        </ListItemsWrapper>
      </ListContainer>
    </ListWrapper>
  );
};

export default ToDoItems;
