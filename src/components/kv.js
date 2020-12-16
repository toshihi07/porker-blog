import React from "react"
import { Container , Row, Col } from "react-bootstrap"
//gatsbyでsassを使うにはプラグイン必要。installしてgatsby.configに追加。
import Style from "./kv.module.scss"

const Kv = () => {
  return (
    <div className={Style.wrap}>
      <div className={Style.overlay}></div>
      <Container className={Style.content}>
        <Row>
          <Col sm={12} className="mx-auto">
            <div className={Style.siteHeading}>
              <h1>Gatsby blog</h1>
              <span>A Blog by</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Kv