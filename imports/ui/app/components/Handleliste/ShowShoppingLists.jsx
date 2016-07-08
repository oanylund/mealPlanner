import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ShopListList from '../../containers/ShopListList'

const ShowShoppingLists = (props) => {
  return (
    <Grid fluid>
      <Row>
        <Col md={12}>
          <h2 style={{marginBottom:30,marginTop:0}}>Handlelister</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ShopListList />
        </Col>
      </Row>
    </Grid>
  )
}

export default ShowShoppingLists
