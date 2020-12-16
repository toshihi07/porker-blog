import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


export const query = graphql`
query ($slug:String){
  contentfulBlogPost (slug: {eq:$slug}){
    title
    createdDate
    body {
      json
    }
  }
  }
`

function BlogDetail(props) {
  const options = {
    renderNode: {
      //imageのnodeTypeを指定。nodeType毎に処理を加えることができる。
      "embedded-asset-block": (node) =>{
        return <img src={node.data.target.fields.file['en-US'].url}
        alt={node.data.target.fields.title['en-US']}
        width="100%"
        />
      }
    }
  }
  return (
    <Layout>
      <Container>
  <h1>{props.data.contentfulBlogPost.title}</h1>
  <p>{props.data.contentfulBlogPost.createdDate}</p>
  {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </Container>
      <Container className="text-center">
        <Button href="/" variant="outline-info">一覧へ戻る</Button>
      </Container>
    </Layout>
  )
}

export default BlogDetail
