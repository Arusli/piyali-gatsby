import React from 'react'
import Navbar from './Navbar'
import ProjectMenu from './ProjectMenu'
import '../assets/styles/main.css'
import styled from 'styled-components'
import Footer from './Footer'


const ProjectPageLayout = ({children}) => {
    return (
        <Wrapper>
            <Navbar />
            <ProjectMenu />
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-right: 5vw;
    margin-left: 5vw;
`

export default ProjectPageLayout
