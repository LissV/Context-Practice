import React from "react";
import ListContainer from "./components/ListContainer";
import ActionButton from "./components/ActionButton";
import ListWrapper from "./components/ListWrapper";
import ListTitle from "./components/ListTitle";

const DoneItems = () => {
  return (
    <ListWrapper>
      <ListTitle>Done tasks</ListTitle>
      <ListContainer />
      <ActionButton>Cancel</ActionButton>
    </ListWrapper>
  );
};

export default DoneItems;
