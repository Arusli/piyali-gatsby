import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import slugify from 'slugify'
import styled from 'styled-components'

const WorkDisplay = () => {

    const query = graphql`
    {
      allContentfulProject(sort: {fields: projectNumber, order: ASC}) {
        nodes {
          name
          projectNumber
        }
      }
    }
  `
    const data = useStaticQuery(query);
    const projects = data.allContentfulProject.nodes;
    console.log(projects);

    return (
        <Wrapper>
            {projects.map((project, index) => {
                const {name}= project;
                const slug = slugify(name, {lower: true});
                return (
                  <Link to={`/${slug}`} className='link project-icon' key={index}>
                    <div className='aspect-container'>
                      <div className='aspect-inner' >
                        <h3>{name}</h3> 
                      </div>                   
                    </div>
                  </Link>
                )
            })}
        </Wrapper>
    )
}

//styles

const Wrapper = styled.div`
  margin-top: 2vw;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  gap: 2vw;

  h3 {
    color: blue;
    width: 70%;
    font-size: 1.5rem;
  }
  
  .project-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .aspect-container {
    height: 0;
    padding-top: 100%;
    position: relative;
    width: 100%;
    background-color: pink;
  }

  .aspect-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }


  @media only screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default WorkDisplay
