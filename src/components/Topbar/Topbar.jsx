import React from 'react';

// Components
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Tipografia } from '../commons/Text'

// Icons
import MenuIcon from '@material-ui/icons/Menu';

const Topbar = (props) =>{
    const {
        callOpenSidebar
    } = props;

    return(
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" aria-label="menu" onClick={callOpenSidebar} >
                    <MenuIcon />
                </IconButton>
                <Tipografia tag="span" size="21px" weight="bold">Project Name</Tipografia>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar;