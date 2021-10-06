import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/styles/main.css'
import styled from 'styled-components'

const Layout = ({children}) => {
    return (
        <Wrapper>
            <Navbar />
            {children}
        </Wrapper>
    )
}

// styling
const Wrapper = styled.div`
    margin-right: 5vw;
    margin-left: 5vw;
    max-width: 1200px;
`

export default Layout
