import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'
import { composeWithTracker } from 'react-komposer'
import DinnerItem from './DinnerItem.jsx'
import DinnersListData from '../../composers/DinnersListData'
import Spinner from '../spinner.jsx'

const ListDinners = ({dinners}) => {

  const dinnerList = dinners.map( (dinner, i) => {
    return (
      <Col key={i} md={6} >
        <DinnerItem key={i} title={dinner.title} description={dinner.description}
          imageId={dinner.imageId} linkUrl={`/middag/${dinner._id}`} />
      </Col>
    )
  })

  return (
    <Row>
      {dinnerList}
    </Row>
  )
}

export default composeWithTracker(DinnersListData, Spinner)(ListDinners)
