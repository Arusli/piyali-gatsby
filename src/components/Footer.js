import React from 'react'
import styled from 'styled-components'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <Wrapper>
            <h5>&copy; {year} Penelope S.</h5>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
    margin: 2vw 0;
    border-top: solid 1px lightgrey;

    h5 {
        color: lightgrey;
    }
`

export default Footer
