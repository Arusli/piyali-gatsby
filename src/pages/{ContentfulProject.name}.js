import React from 'react'
import ProjectPageLayout from '../components/ProjectPageLayout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectTemplate = (props) => {
    const pageContent = props.data.allContentfulProject.nodes[0];
    console.log('pageContent', pageContent);
    const {name, description: {description}, projectNumber, images} = pageContent;
    
    return (
        <ProjectPageLayout>
            <h1>{name}</h1>
            <div style={{width: '60vw'}}>
              {images.map((obj, index)=>{
                const imagePath = getImage(obj);
                return (
                  <GatsbyImage image={imagePath} alt={obj.description} key={obj.id} />
                )
              })}
            </div>
            <p>{description}</p>
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

export default ProjectTemplate
