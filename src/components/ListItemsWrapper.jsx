import styled from "styled-components";
import List from "@material-ui/core/List";

export default styled(List)`
  overflow-y: auto;
  height: calc(100% - 30px);
  margin: 8px 0 !important;
  ::-webkit-scrollbar {
    width: 1px;
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: #ffffff;
  }
  ::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #fff;
    border-radius: 3px;
  }
`;
