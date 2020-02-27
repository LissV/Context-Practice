import React, { useContext } from "react";
import ListContainer from "./components/ListContainer";
import ActionButton from "./components/ActionButton";
import ListWrapper from "./components/ListWrapper";
import ListTitle from "./components/ListTitle";
import ListItemsWrapper from "./components/ListItemsWrapper";
import ItemWrapper from "./components/ItemWrapper";
import ItemsContext from "./ItemsContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  selected: {
    background: "#8567ab !important",
    color: "#ffffff !important"
  }
}));

const DoneItems = () => {
  const { items, changeList } = useContext(ItemsContext);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const classes = useStyles();

  const handleListItemClick = index => e => {
    setSelectedIndex(index);
  };

  const handleClickButton = index => e => {
    setSelectedIndex(null);
    changeList(index);
  };

  const getData = data => {
    return (
      data &&
      data.map((item, index) => {
        if (item.done)
          return (
            <ItemWrapper
              key={index}
              button
              selected={selectedIndex === index}
              onClick={handleListItemClick(index)}
              className={selectedIndex === index && classes.selected}
            >
              {item.title}
            </ItemWrapper>
          );
        else return null;
      })
    );
  };

  return (
    <ListWrapper>
      <ListTitle>Done tasks</ListTitle>
      <ListContainer>
        <ListItemsWrapper>{getData(items)}</ListItemsWrapper>
      </ListContainer>
      <ActionButton
        onClick={handleClickButton(selectedIndex)}
        disabled={selectedIndex === null}
      >
        Cancel
      </ActionButton>
    </ListWrapper>
  );
};

export default DoneItems;
