import React, { useState } from 'react'

//Components
import { Container } from '../../components/commons/Layout'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'

const Main = () => {
    const [openSideBar, setOpenSideBar] = useState(false)

    return (
        <div>
            <Topbar
                callOpenSidebar={() => setOpenSideBar(true)}
            />

            <Sidebar open={openSideBar} setOpen={setOpenSideBar}/>

            <Container top="65px">
                <h1>Container</h1>
            </Container>
        </div>
    )
}

export default Main;