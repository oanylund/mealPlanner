import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import { Grid, Row, Col } from 'react-bootstrap'
import Catrender from './IngrediensCategory.jsx'
import IngredCats from '../../composers/IngredCats'

class Ingredienser extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const categories = this.props.categories.map( (category) => {
      return (
        <Catrender category={category}/>
      )
    })
    return (
      <div className='marginSquare'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <h2>Ingredienser</h2>
              {/* TODO: Add category filter
              */}
            </Col>
          </Row>
          <Row>
              {categories}
          </Row>
        </Grid>
      </div>
    )
  }
}

export default composeWithTracker(IngredCats)(Ingredienser)
