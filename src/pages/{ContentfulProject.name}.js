import React from 'react'
import ProjectPageLayout from '../components/ProjectPageLayout'
import { graphql } from 'gatsby'

const ProjectTemplate = (props) => {

    console.log(props);

    return (
        <ProjectPageLayout>
            Hi there, project here
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
