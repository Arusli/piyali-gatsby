import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <h1>Piyali Sircar | Design Researcher</h1>
            <h1><Link className='link' to='/'>Work</Link> | <Link className='link' to='/about'>About</Link></h1>
        </Wrapper>
    )
}

//styled components
const Wrapper = styled.div`
    border-bottom: solid 1px grey;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
`

export default Navbar