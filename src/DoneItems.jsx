import React, { useContext } from "react";
import ListContainer from "./components/ListContainer";
import ListWrapper from "./components/ListWrapper";
import ListTitle from "./components/ListTitle";
import ListItemsWrapper from "./components/ListItemsWrapper";
import ItemWrapper from "./components/ItemWrapper";
import ItemsContext from "./ItemsContext";

const DoneItems = () => {
  const { items, setItems } = useContext(ItemsContext);
  const doneItems = items.filter(item => item.done);
  const handleListItemClick = (id) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          return { ...item, done: false };
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
          {doneItems.map(item => (
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

export default DoneItems;
