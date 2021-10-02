import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {projects.map((project, index) => {
                const {name} = project;
                return (
                    <div key={index} style={{padding: '10px', margin: '5px', backgroundColor: 'pink'}}>{name}</div>
                )
            })}
        </div>
    )
}

export default WorkDisplay
