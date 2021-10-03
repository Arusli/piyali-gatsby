import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import slugify from 'slugify'

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
                const slug = slugify(name, {lower: true});
                return (
                    <div key={index} style={{padding: '10px', margin: '5px', backgroundColor: 'pink'}}><Link to={`/${slug}`}>{name}</Link></div>
                )
            })}
        </div>
    )
}

export default WorkDisplay
