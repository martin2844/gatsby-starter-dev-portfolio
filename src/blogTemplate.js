import React from 'react';
import Layout from './components/Layout';
import {graphql} from 'gatsby';


//export query so gatsby can grab it as a prop
export const query = graphql`
query (
    $slug: String!
  ){
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ){
      frontmatter {
        title
        date
      }
      html
    }
  }

`

const blogTemplate = (props) => {
 return (
    <Layout>

        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
 )
}

export default blogTemplate