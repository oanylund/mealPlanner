import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'
import DinnerItem from './DinnerItem.jsx'

const ListDinners = (props) => {
  return (
    <Row>
      <DinnerItem title='Taco' description='Testing flere ganger opptil 12 tretten'
        linkUrl='test' />
    </Row>
  )
}

export default ListDinners
