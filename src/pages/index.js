import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"



const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keyword={['gatsby', 'application', 'react']}/>
    
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} title="Your Coffee, Our Coffify!" styleClass="default-background" />
    <Info />
    <Menu items={data.menu}/>
  </Layout>
  
);

export const query = graphql`
{
  img: file(relativePath:{ eq: "default-background.jpg"}){
    childImageSharp{
      fluid {
          ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
menu:allContentfulCoffeeItem{
  edges{
    node{
      id
      title
      description{
        description
      }
      price
      category
      image{
        fixed(width: 50, height: 50){
          ...GatsbyContentfulFixed_tracedSVG
        }
        
      }
    }
  }
  }
}`
export default IndexPage;
