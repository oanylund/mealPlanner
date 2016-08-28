import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ListWeeks from '../../containers/ListWeeks.jsx'

const Uke = (props) => {
  return (
    <div className='marginSquare'>
      <Grid fluid>
        <Row>
          <Col md={12}>
            <h2 className='mainHeader'>Ukeplaner</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ListWeeks />
          </Col>
        </Row>
      </Grid>
    </div>

  )
}

export default Uke
