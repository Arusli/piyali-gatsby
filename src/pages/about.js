import React from 'react'
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'


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
          <Wrapper>
            <GatsbyImage className='photo' image={imagePath} alt='Photo of Piyali' />
            <p className='bio'>{bio}</p>
          </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`

  .bio {
    font-size: 1.2rem;
    margin-top: 1rem;
    text-align: justify;
  }

  .photo {
    margin-top: 1rem;
  }

  @media only screen and (min-width: 480px) {
    .photo {
      width: 50vw;
    }
  }

  @media only screen and (min-width: 960px) {
    .photo {
      width: 25vw;
    }
  }

`
//end styled component

export default About
