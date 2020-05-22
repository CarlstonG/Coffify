import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products";
import Contact from "../components/Home/Contact";



const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keyword={['gatsby', 'application', 'react']}/>
    
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} title="Your Coffee, Our Coffify!" styleClass="default-background" />
    <Info />
    <Menu items={data.menu}/>
    <Products />
    <Contact />
  </Layout>
  
);

export const query = graphql`
{
  img: file(relativePath:{ eq: "default-background.jpg"}){
    childImageSharp{
      fluid {
          ...GatsbyImageSharpFluid
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
          ...GatsbyContentfulFixed
        }
        
      }
    }
  }
  }
}`
export default IndexPage;
