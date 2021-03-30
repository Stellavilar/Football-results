import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../img/Header logo FR.png';

import BurgerMenu from './BurgerMenu';

export default function DisabledTabs() {
  const [value, setValue] = useState(4);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className="header">
          <img src={logo} alt="logo" />
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Ligue 1" />
                <Tab label="Premier League" />
                <Tab label="Liga" />
                <Tab label="Serie A" />
                <Tab label="Bundesliga" />
            </Tabs>
        </Paper>
        <div className="burger-button">
            <BurgerMenu />
        </div>
      </div>
    
  );
}