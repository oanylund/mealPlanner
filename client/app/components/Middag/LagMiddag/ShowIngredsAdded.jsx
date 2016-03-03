import React, { PropTypes } from 'react'
import AddedIngredItem from './AddedIngredItem.jsx'
import { Row, Col } from 'react-bootstrap'

const ShowIngredsAdded = (props) => {

  const ingredList = props.ingreds.map( (ingred, i) => {
    return <AddedIngredItem key={`INgI${i}`}
              ingred={ingred} index={i}
              editQuantity={props.editQuantity}
              deleteIngred={props.deleteIngred}
              moveIngredUp={props.moveIngredUp}
              moveIngredDown={props.moveIngredDown}
           />
  })

  return (
    <Row>
      <Col md={8}>
        <div className='addDinner-IngredList'>
        {ingredList}
        </div>
      </Col>
    </Row>
  )
}

export default ShowIngredsAdded
