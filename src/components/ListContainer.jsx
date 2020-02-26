import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  selected: {
    background: '#8567ab !important',
    color: '#ffffff !important',
  },
}));

const ListWrapper = styled.div`
  background: white;
  height: 500px;
  width: 400px;
  padding: 15px 0;
  margin: 0;
  border-radius: 15px;
`;

const ListItemsWrapper = styled(List)`
  overflow-y: auto;
  height: calc(100% - 30px);
  margin: 8px 0 !important;
  ::-webkit-scrollbar { width: 1px; height: 3px;}
  ::-webkit-scrollbar-track {  background-color: #fff;}
  ::-webkit-scrollbar-track-piece { background-color: #ffffff;}
  ::-webkit-scrollbar-thumb { height: 50px; background-color: #fff; border-radius: 3px;}
`;

const ListItemWrapper = styled(ListItem)`
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

const ListContainer = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const classes = useStyles();

    const handleListItemClick = (index) => e => {
        setSelectedIndex(index);
      }
    return (
      <ListWrapper>
          <ListItemsWrapper>
              <ListItemWrapper
              button
              selected={selectedIndex === 0}
              onClick={handleListItemClick(0)}
              className={selectedIndex === 0 && classes.selected}
              >
                Дело 1
              </ListItemWrapper>
              <ListItemWrapper
              button
              selected={selectedIndex === 1}
              onClick={handleListItemClick(1)}
              >
                Дело 2
              </ListItemWrapper>
              <ListItemWrapper
              button
              selected={selectedIndex === 2}
              onClick={handleListItemClick(2)}
              >
                Дело 3
              </ListItemWrapper>
              <ListItemWrapper
              button
              selected={selectedIndex === 3}
              onClick={handleListItemClick(3)}
              >
                Дело 4
              </ListItemWrapper>
              <ListItemWrapper
              button
              selected={selectedIndex === 4}
              onClick={handleListItemClick(4)}
              >
                Дело 5
              </ListItemWrapper>
              <ListItemWrapper
              button
              selected={selectedIndex === 5}
              onClick={handleListItemClick(5)}
              >
                Дело 6
              </ListItemWrapper>
              <ListItemWrapper
              button
              selected={selectedIndex === 6}
              onClick={handleListItemClick(6)}
              >
                Дело 7
              </ListItemWrapper>
              <ListItemWrapper
              button
              selected={selectedIndex === 7}
              onClick={handleListItemClick(7)}
              >
                Дело 8
              </ListItemWrapper>
              <ListItemWrapper
              button
              selected={selectedIndex === 7}
              onClick={handleListItemClick(7)}
              >
                Дело 8
              </ListItemWrapper>
              <ListItemWrapper
              button
              selected={selectedIndex === 8}
              onClick={handleListItemClick(8)}
              >
                Дело 9
              </ListItemWrapper>
              <ListItemWrapper
              button
              selected={selectedIndex === 9}
              onClick={handleListItemClick(9)}
              >
                Дело 10
              </ListItemWrapper>
              <ListItemWrapper
              button
              selected={selectedIndex === 10}
              onClick={handleListItemClick(10)}
              >
                Дело 11
              </ListItemWrapper>
          </ListItemsWrapper>
      </ListWrapper>
    );
  }
  
  export default ListContainer;