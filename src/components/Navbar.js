import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <h1>Piyali Sircar</h1>
            <h1><Link to='/'>Work</Link> | <Link to='/about'>About</Link></h1>
        </Wrapper>
    )
}

//styled components
const Wrapper = styled.div`
    background-color: lightblue;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
`

export default Navbar