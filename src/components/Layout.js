import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/styles/main.css'
import styled from 'styled-components'

const Layout = ({children}) => {
    return (
        <Wrapper>
            <div className='margins'>
                <Navbar />
                {children}
            </div>
        </Wrapper>
    )
}

// styling
const Wrapper = styled.div`
    width: 100vw;
    max-width: 1400px;

    .margins {
        margin-right: 7vw;
        margin-left: 7vw;
    }
`

export default Layout
