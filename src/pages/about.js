import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection';
import Aboutinfo from "../components/Home/Aboutinfo"



const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keyword={['gatsby', 'application', 'react']}/>
    
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} title="About Coffify!" styleClass="default-background" styleClass="about-background"/>
    <Aboutinfo />
  </Layout>
  
);

export const query = graphql`
{
  img: file(relativePath:{ eq: "cupandbeans.jpeg"}){
    childImageSharp{
      fluid {
          ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  
}`
export default AboutPage;
