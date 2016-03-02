import React, { PropTypes } from 'react'
import AddedIngredItem from './AddedIngredItem.jsx'
import { Row, Col } from 'react-bootstrap'

const ShowIngredsAdded = (props) => {

  const ingredList = props.ingreds.map( (ingred, i) => {
    return <AddedIngredItem key={`INgI${i}`} ingred={ingred} index={i} />
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
