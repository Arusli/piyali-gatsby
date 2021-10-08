import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <h1 className='site-title'>Piyali Sircar | Design Researcher</h1>
            <div>
                <Link className='link' to='/'><h1>Work</h1></Link>
                <Link className='link' to='/about'><h1>About</h1></Link>
            </div>
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
    min-height: 6rem;

    h1 {
        color: black;
        font-weight: normal;
    }

    .site-title {
        color: black;
    }
`

export default Navbar