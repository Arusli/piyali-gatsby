import React from 'react'
import Navbar from './Navbar'
import ProjectMenu from './ProjectMenu'
import Footer from './Footer'

const Layout2 = ({children}) => {
    return (
        <>
            <Navbar />
            <ProjectMenu />
            {children}
        </>
    )
}

export default Layout2
