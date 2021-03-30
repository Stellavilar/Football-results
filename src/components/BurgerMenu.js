import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function BurgerMenu() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
            Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Ligue 1</MenuItem>
            <MenuItem onClick={popupState.close}>Premier League</MenuItem>
            <MenuItem onClick={popupState.close}>Liga</MenuItem>
            <MenuItem onClick={popupState.close}>Serie A</MenuItem>
            <MenuItem onClick={popupState.close}>Bundesliga</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default BurgerMenu