import { Button, Drawer } from '@material-ui/core';
import React, { useState } from 'react';

const Sidebar = (props) => {
    let {
        open,
        setOpen
    } = props;

    return (
        <>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <h1>Drawer</h1>
            </Drawer>
        </>
    )
};

export default Sidebar;