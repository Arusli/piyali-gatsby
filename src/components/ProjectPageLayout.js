import React from 'react'
import Navbar from './Navbar'
import ProjectMenu from './ProjectMenu'
import '../assets/styles/main.css'
import styled from 'styled-components'
import Footer from './Footer'


const ProjectPageLayout = ({children}) => {
    return (
        <Wrapper>
            <div className='margins'>
                <Navbar />
                <ProjectMenu />
                {children}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    max-width: 1200px;

    .margins {
        margin-right: 7vw;
        margin-left: 7vw;
    }
`

export default ProjectPageLayout
