import React from 'react'
import ProjectPageLayout from '../components/ProjectPageLayout'
import { graphql } from 'gatsby'

const ProjectTemplate = (props) => {
    const pageContent = props.data.allContentfulProject.nodes[0];
    console.log('pageContent', pageContent);
    const {name, description: {description}, projectNumber, images} = pageContent;
    
    return (
        <ProjectPageLayout>
            <h1>{name}</h1>
            <h2>images here</h2>
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
        }
      }
      totalCount
    }
  }
  
`

export default ProjectTemplate
