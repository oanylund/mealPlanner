import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'
import { composeWithTracker } from 'react-komposer'
import DinnerItem from './DinnerItem.jsx'
import DinnersListData from '../../composers/DinnersListData'
import Spinner from '../Reusable/LoadingCog.jsx'

const ListDinners = ({dinners}) => {

  const dinnerList = dinners.map( (dinner, i) => {
    return (
      <Col key={i} md={6} >
        <DinnerItem key={i} title={dinner.title} description={dinner.description}
          imageId={dinner.imageId} linkUrl={`/middag/vis/${dinner._id}`} />
      </Col>
    )
  })

  return (
    <Row>
      {dinnerList}
    </Row>
  )
}

const Loading = () => {
  return <Spinner size={40}/>
}

export default composeWithTracker(DinnersListData, Loading)(ListDinners)
