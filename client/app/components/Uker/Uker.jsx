import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ListWeeks from '../../containers/ListWeeks.jsx'

const Uke = (props) => {
  return (
    <Grid fluid>
      <Row>
        <Col md={12}>
            <h3>Lag ny ukeplan</h3>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ListWeeks />
        </Col>
      </Row>
    </Grid>

  )
}

export default Uke
