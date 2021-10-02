import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
    <div>
        <ul style={{display: 'flex', flexDirection: 'row', listStyleType: 'none'}}>
            {projects.map((project, index) => {
                const {name} = project;
                return (
                <li style={{backgroundColor: 'lime', padding: '5px', margin: '10px'}} key={index}>{name}</li>
                )
            })}
        </ul>
    </div>
   )
        
    
}



export default ProjectMenu
