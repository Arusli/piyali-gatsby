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
                const                       {name}= project;
                const slug = slugify(name, {lower: true});
                return (
                  <Link to={`/${slug}`} className='project-icon' key={index}>
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
  margin-top: 2rem;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;

  h3 {
    color: blue;
    width: 70%;
    font-size: 1.5rem;
  }
  
  .project-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    max-width: 60vw;
    background-color: pink;
  }

  .aspect-container {
    height: 0;
    padding-top: 100%;
    position: relative;
    width: 100%;
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

  @media only screen and (min-width: 680px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default WorkDisplay
