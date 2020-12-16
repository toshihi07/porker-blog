import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"

function BlogItem({title, date,link, src}) {
  return (
    <Card>
      <Card.Img variant="top" src={src} />
      <Card.Title>{title}</Card.Title>
      <Card.Text>{date}</Card.Text>
      <Link to={link}>see more</Link>
    </Card>
  )
}

export default BlogItem
