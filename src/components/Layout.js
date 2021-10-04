import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/styles/main.css'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout
