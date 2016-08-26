import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import { Grid, Row, Col } from 'react-bootstrap'
import Catrender from './IngrediensCategory.jsx'
import IngredCats from '../../composers/IngredCats'
import Spinner from '../spinner.jsx'

class Ingredienser extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const catOptions = this.props.categories.map( (category,i) =>{
      return { value: category._id, label: category.name }
    })

    const categories = this.props.categories.map( (category,i) => {
      return (
        <Catrender key={`CAT${i}`} catOptions={catOptions} category={category}/>
      )
    })
    return (
      <div className='marginSquare'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <h2 style={{marginTop:0}}>Ingredienser</h2>
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

export default composeWithTracker(IngredCats, Spinner)(Ingredienser)
