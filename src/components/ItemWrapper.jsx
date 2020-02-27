import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";

export default styled(ListItem)`
  color: #46358f !important;
  font-family: Roboto !important;
  font-weight: 400;
  font-size: 1rem;
  padding: 16px !important;
  word-break: break-all;
  &:hover {
    background: #8567ab !important;
    color: white !important;
  }
`;
