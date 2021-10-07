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
          backgroundImage {
            file {
              url
            }
          }
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
                const {name, backgroundImage: {file: {url}}}= project;
                console.log(url)
                const slug = slugify(name, {lower: true});
                return (
                  <Link to={`/${slug}`} className='link project-icon' key={index}>
                    <div className='aspect-container background-image' style={{backgroundImage: `url(${url})`}}>
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
    color: black;
    background-color: white;
    max-width: 70vw;
    padding: 0 15px 5px 0;
    font-size: 1rem;
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
  }

  .aspect-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    text-align: left;
    backdrop-filter: blur(0px);
  }

  .aspect-inner:hover {
    backdrop-filter: blur(5px);
  }

  .background-image {
    background-position: center;
    background-size: cover;
  }

  @media only screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default WorkDisplay
