import React from 'react'
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const About = () => {

    const aboutQuery = graphql`
    {
        contentfulAbout {
          bio {
            bio
          }
          profilePicture {
            gatsbyImageData
          }
        }
      }
      
`
    const data = useStaticQuery(aboutQuery);
    const aboutContent = data.contentfulAbout;
    console.log(aboutContent);

    const {bio: {bio}, profilePicture} = aboutContent;
    console.log(profilePicture);
    const imagePath = getImage(profilePicture);

    return (
        <Layout>
            <div style={{width: '40vw'}}>
              <GatsbyImage image={imagePath} alt='Photo of Piyali' />
            </div>
            <p>{bio}</p>
        </Layout>
    )
}

export default About
