import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { composeWithTracker } from 'react-komposer'
import IngredCats from '../../composers/IngredCats'
import AddIngredient from './AddIngredient.jsx'
import AddIngredientCategory from './AddIngredientCategory.jsx'
import Spinner from '../spinner.jsx'

class AddIngredientForm extends React.Component {
  render () {
    const catOptions = this.props.categories.map( (category,i) =>{
      return { value: category._id, label: category.name }
    })
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
              <AddIngredient categoryOptions={catOptions} />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <AddIngredientCategory />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default composeWithTracker(IngredCats, Spinner)(AddIngredientForm)
