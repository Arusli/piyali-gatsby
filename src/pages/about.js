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

    return (
        <Layout>
            <h2>About Page</h2>
            <h2>Image here</h2>
            <p>{bio}</p>
        </Layout>
    )
}

export default About
