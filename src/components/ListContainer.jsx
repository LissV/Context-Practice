import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const ListWrapper = styled.div`
  background: white;
  height: 500px;
  width: 400px;
  padding: 15px 0;
  margin: 0;
  border-radius: 15px;
`;

const ListItemWrapper = styled(ListItem)`
    color: #46358f !important;
    font-family: Roboto !important;
    font-weight: 400;
    font-size: 1rem;
    padding: 16px !important;
    &:hover {
        background: #8567ab !important;
        color: white !important; 
    }
`;

const ListContainer = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const handleListItemClick = (index) => e => {
        setSelectedIndex(index);
      }
    return (
      <ListWrapper>
          <List>
              <ListItemWrapper
              button
              selected={selectedIndex === 0}
              onClick={handleListItemClick(0)}
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
          </List>
        
      </ListWrapper>
    );
  }
  
  export default ListContainer;