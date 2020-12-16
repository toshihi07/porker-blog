import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Kv from "../components/kv"
import {Container , Row, Col} from "react-bootstrap"
import BlogItem from '../components/blogItem'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query{
    allContentfulBlogPost(sort :{
      fields: createdDate,
      order: ASC
    }) {
      edges {
        node {
          title
          slug
          createdDate(formatString: "YYYY/MM/DD")
          thumnail {
            fluid{
              src
            }
          }
        }
      }
    }
  }
  `)
  return (
    <Layout>
    <Kv />
    <Container>
      <Row>
        {
          data.allContentfulBlogPost.edges.map((edge,index) => {
            return (
              <Col sm={4} key={index}>
              <BlogItem 
                title = {edge.node.title}
                date = {edge.node.createdDate}
                src={edge.node.thumnail.fluid.src}
                link = {`/blog/${edge.node.slug}`}
              />
            </Col>
            )
          })
        }
      </Row>
    </Container>
  </Layout>
  )
}

export default IndexPage
