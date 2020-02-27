import React from "react";
import ListContainer from "./components/ListContainer";
import ActionButton from "./components/ActionButton";
import ListWrapper from "./components/ListWrapper";
import ListTitle from "./components/ListTitle";

const DoneItems = () => {
  return (
    <ListWrapper>
      <ListTitle>Tasks to do</ListTitle>
      <ListContainer />
      <ActionButton>Done</ActionButton>
    </ListWrapper>
  );
};

export default DoneItems;
