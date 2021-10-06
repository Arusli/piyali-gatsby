import React from 'react'
import { useStaticQuery, graphql, Link} from 'gatsby'
import slugify from 'slugify'
import styled from 'styled-components'

const ProjectMenu = () => {

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

    //.map
   return (
    <Wrapper>
        <ul>
            {projects.map((project, index) => {
                const {name} = project;
                const slug = slugify(name, {lower: true});
                return (
                <Link className='link' to={`/${slug}`} key={index}>
                  <li key={index} >{name}</li>
                </Link>
                )
            })}
        </ul>
    </Wrapper>
   )   
}

const Wrapper = styled.div`

border-bottom: solid 1px black;
font-size: 1.4rem;
padding: 10px 0 10px 0;
margin: 0 0 10px 0;

  ul {
    display: flex;
    list-style-type: none;
    margin: 10px 0 10px 0;
    justify-content: space-evenly;
  }

  li {
    border: solid 1px grey;
    padding: 10px;
    margin: 5px;
    color: grey;
  }
`

export default ProjectMenu
