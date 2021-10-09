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
                <Link className='link' to={`/work/${slug}`} key={index} activeClassName='active'>
                  <li key={index} >{name}</li>
                </Link>
                )
            })}
        </ul>
    </Wrapper>
   )   
}

const Wrapper = styled.div`

border-bottom: solid 1px lightgrey;
margin: 0;

  ul {
    font-size: .8rem;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 2vw 0 2vw 0;
    justify-content: flex-start;
  }

  li {
    color: grey;
    margin: 0 0 0 0;
    padding: 1vw 1vw;
    letter-spacing: -.5px;
  }

  .link {
    margin: 0 6vw 0 0;
  }

  @media only screen and (min-width: 480px) {
    ul {
      font-size: 1.1rem;
    }
  }

  @media only screen and (min-width: 960px) {
    ul {
      font-size: 1.3rem;
    }
  }
`

export default ProjectMenu
