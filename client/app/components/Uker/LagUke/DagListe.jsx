import React, { PropTypes } from 'react'
import Dag from './Dag.jsx'
import { Row, Col } from 'react-bootstrap'
import InfoAlert from '../../Reusable/InfoAlert.jsx'

const DagListe = ({newWeek, deleteDay, translateDays}) => {

  const dayList = _.map(newWeek.days, (day,dayNumber) => {

    if (day.dinnerId ) {
      return (
        <div>Middag skal vises her. Id: {day.dinnerId}</div>
      )
    }
    else {
      return (
        <Col key={dayNumber} md={6} lg={4}>
          <Dag key={dayNumber} title={translateDays[dayNumber]} description={day.whynot}
            descriptionGrey={day.comment}
            closeHandler={deleteDay.bind(null,dayNumber)}
            imgUrl='/images/hungry.jpg' />
        </Col>
      )
    }
  })

  const daysAdded = Object.keys(newWeek.days).length;

  if ( daysAdded ) {
    return (
      <Row>
        {dayList}
      </Row>
    )
  }
  else {
    return (
      <Row>
        <Col md={12}>
          <div className='addDag'>
            <InfoAlert txt='Trykk + knappen for å legge en middag til en av ukedagene.' />
          </div>
        </Col>
      </Row>
    )
  }
}

export default DagListe
