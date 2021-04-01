import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../img/Header logo FR.png';
import { selectTitle } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import BurgerMenu from './BurgerMenu';

function Header() {
    const history = useHistory();
    //Use dispatch to get titles clicked
    const dispatch = useDispatch();

    const [value, setValue] = useState(4);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //Onclick title tab, dispatch title on Homepage
    const handleClick = (e) => {
      dispatch(selectTitle({
          name: e.target.innerText, 
        }));
        history.push(`/${e.target.innerText.replace(/\s+/g, '').toLowerCase()}`);
    };

  return (
      <div className="header">
          <img src={logo} alt="logo" onClick={()=>history.push('/')}/>          
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Ligue 1" onClick={handleClick}/>
                <Tab label="Premier League" onClick={handleClick}/>
                <Tab label="Liga" onClick={handleClick}/>
                <Tab label="Serie A" onClick={handleClick}/>
                <Tab label="Bundesliga" onClick={handleClick}/>
            </Tabs>
        </Paper>
        <div className="burger-button">
            <BurgerMenu />
        </div>
      </div>
    
  );
};

export default Header;