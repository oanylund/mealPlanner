import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import AddIngAndCatForm from '../../containers/AddIngAndCatFormWithDataAndMethod.js';

class AddIngredientForm extends React.Component {
  render () {
    return (
      <div className='marginSquare'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <h2 style={{marginTop:0,marginBottom:0}}>Legg til nytt</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <AddIngAndCatForm/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default AddIngredientForm
