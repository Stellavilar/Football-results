import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { selectTitle } from '../redux/actions';
import { useDispatch } from 'react-redux';

function BurgerMenu() {

  //Use dispatch to get titles clicked
  const dispatch = useDispatch();

  //Onclick title tab, dispatch title on Homepage
  const handleClick = (e, close) => {
    dispatch(selectTitle({
        name: e.target.innerText, 
        item1: 'Classement',
        item2: 'Calendrier',
        item3: 'Meilleurs buteurs',
      }));      
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
            Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={handleClick}>Ligue 1</MenuItem>
            <MenuItem onClick={(e) => 
              dispatch(selectTitle({
                name: e.target.innerText, 
                item1: 'Classement',
                item2: 'Calendrier',
                item3: 'Meilleurs buteurs',
              }))
            }>Premier League</MenuItem>
            <MenuItem onClick={(e) => 
              dispatch(selectTitle({
                name: e.target.innerText, 
                item1: 'Classement',
                item2: 'Calendrier',
                item3: 'Meilleurs buteurs',
              }))
            }>Liga</MenuItem>
            <MenuItem onClick={(e) => 
              dispatch(selectTitle({
                name: e.target.innerText, 
                item1: 'Classement',
                item2: 'Calendrier',
                item3: 'Meilleurs buteurs',
              }))
            }>Serie A</MenuItem>
            <MenuItem onClick={popupState.close}>Bundesliga</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default BurgerMenu;