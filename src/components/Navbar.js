import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <div class="wrapper">
                <div>
                <Link className='link' to='/work'>
                    <h1 className='site-title'>Piyali Sircar</h1>
                    <h1 className='subtitle'>Design Researcher</h1>
                </Link>
                </div>
                <div className='container'>
                    <Link className='link container-item' to='/work' activeClassName='active' partiallyActive={true}><h1>Work</h1></Link>
                    <Link className='link container-item' to='/about' activeClassName='active'><h1>About</h1></Link>
                </div>
            </div>
        </Wrapper>
    )
}

//styled components
const Wrapper = styled.div`

    .wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5rem;
    }

    .container {
        display: flex;
        justify-content: space-between;
    }

    .container-item {
        margin: 0 2vw;
        padding: 0 .1rem;
    }

    .subtitle {
        color: grey;
        display: none;
    }

    .site-title {
        color: black;
        max-width: 60vw;
        font-weight: bold;
    }

    h1 {
        color: black;
        font-weight: normal;
        font-size: 1rem;
        padding: 0;
    }

    @media only screen and (min-width: 480px) {

        .wrapper {
            height: 7rem;
        }

        h1 {
            font-size: 1.5rem;
        }

        .subtitle {
            display: block;
            font-size: 1.4rem;
        }

        .container-item {
            padding: 0 .5rem;
        }
      }

    @media only screen and (min-width: 960px) {
        
        .wrapper {
            height: 9rem;
        }
        
        h1 {
            font-size: 2rem;
        }
        .subtitle {
            display: block;
            font-size: 1.9rem;
        }
      }
`

export default Navbar