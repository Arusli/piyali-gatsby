import React from 'react'
import { useStaticQuery, graphql, Link} from 'gatsby'
import slugify from 'slugify'

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
                const slug = slugify(name, {lower: true});
                return (
                <Link to={`/${slug}`} key={index}>
                  <li style={{backgroundColor: 'lime', padding: '10px', margin: '5px'}} key={index}>{name}</li>
                </Link>
                )
            })}
        </ul>
    </div>
   )
        
    
}



export default ProjectMenu
