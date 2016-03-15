import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ListDinners from './ListDinners.jsx'


class ShowDinners extends React.Component {
  render () {
    return (
      <div className='marginSquare' >
        <Grid fluid>
          <Row>
            <Col md={12}>
              <h2 className='mainHeader'>Middager</h2>
            </Col>
          </Row>
          <ListDinners />
        </Grid>
      </div>
    )
  }
}

export default ShowDinners;
