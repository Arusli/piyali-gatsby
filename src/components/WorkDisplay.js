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
                const {name} = project;
                const slug = slugify(name, {lower: true});
                return (
                  <Link to={`/${slug}`} className='project-icon' key={index}>{name}</Link>
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
  
  .project-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
    height: 5rem;
    margin: 5px;
  }

  @media only screen and (min-width: 680px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default WorkDisplay
