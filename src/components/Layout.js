import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/styles/main.css'
import styled from 'styled-components'
import ProjectMenu from './ProjectMenu'

const Layout = ({children}) => {
    return (
        <Wrapper>
            <div className='margins'>
                <Navbar />
                {children}
                <Footer />
            </div>
        </Wrapper>
    )
}

// styling
const Wrapper = styled.div`
    width: 100vw;
    max-width: 1600px;

    .margins {
        margin-right: 7vw;
        margin-left: 7vw;
    }
`

export default Layout
