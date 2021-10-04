import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <h1>Piyali Sircar - <Link to='/'>Work</Link> | <Link to='/about'>About</Link></h1>
        </Wrapper>
    )
}

//styled components
const Wrapper = styled.div`
    background-color: lightblue;
`

export default Navbar