import React from 'react'
import ProjectPageLayout from '../../components/ProjectPageLayout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const ProjectTemplate = (props) => {
    const pageContent = props.data.allContentfulProject.nodes[0];
    console.log('pageContent', pageContent);
    const {name, description: {description}, projectNumber, images} = pageContent;
    const markdown = description;
    return (
        <ProjectPageLayout>
          <Wrapper>
            <header>
              <h1 className='project-name'>{name}</h1>
            </header>
            <section className='grid-container' >
              <div className='images-container' >
                {images.map((obj, index)=>{
                  const imagePath = getImage(obj);
                  return (
                    <GatsbyImage className='image' image={imagePath} alt={obj.description} key={obj.id} />
                  )
                })}
              </div>
              <div className='description-container'>
                {/* <p className='description'>{description}</p> */}
                <ReactMarkdown className='description' children={markdown} />
              </div>
            </section>
          </Wrapper>
        </ProjectPageLayout>
    )
}

export const query = graphql`
query MyQuery($name: String) {
    allContentfulProject(
      sort: {fields: projectNumber, order: ASC}
      filter: {name: {eq: $name}}
    ) {
      nodes {
        name
        description {
          description
        }
        contentful_id
        projectNumber
        images {
          gatsbyImageData
          description
          title
          id
        }
      }
      totalCount
    }
  }
`

const Wrapper = styled.div`

margin: 20px 0;

h1 {
  color: white;
  background-color: black;
  text-align: center;
}

.description {
  text-align: left;
  font-size: .8rem;
}

.project-name {
  font-size: 1.2rem;
}

.image {
  margin: 0 0 2vw 0;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2vw;
}

.images-container {
  display: block;
  margin: 2vw 0;
}

.description-container {
  margin: 2vw 0;
}


//MEDIA QUERY
@media only screen and (min-width: 480px) {

    .images-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2vw;
    }

    .image {
      margin: 0 0 0 0;
    }

    .project-name {
      font-size: 1.6rem;
    }

    .description {
      font-size: .9rem;
    }
}


@media only screen and (min-width: 768px) {

  .project-name {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }

  .grid-container {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .images-container {
    display: block;
    grid-column: 1 / 4;
  }

  .description-container {
    grid-column: 5 / 7;
  }

  .image {
    margin: 0 0 2vw 0;
  }
  
} 
//end media query

`//end styled component

export default ProjectTemplate
