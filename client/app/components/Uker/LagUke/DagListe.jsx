import React, { PropTypes } from 'react'
import Dag from './Dag.jsx'
import { Row, Col } from 'react-bootstrap'
import InfoAlert from '../../Reusable/InfoAlert.jsx'
import DagDinnerWrapper from './DagDinnerWrapper.jsx'

const DagListe = ({newWeek, deleteDay, translateDays}) => {

  const dayList = _.map(newWeek.days, (day,dayNumber) => {
    if ( day.dinnerId ) {
      return (
        <Col key={dayNumber} md={6} lg={4}>
          <DagDinnerWrapper
            key={dayNumber}
            day={translateDays[dayNumber]}
            close={deleteDay.bind(null,dayNumber)}
            comment={day.comment}
            dinnerId={day.dinnerId}
          />
        </Col>
      )
    }
    else {
      return (
        <Col key={dayNumber} md={6} lg={4}>
          <Dag key={dayNumber} title={translateDays[dayNumber]} description={day.whynot}
            descriptionGrey={day.comment}
            imgUrl='/images/hungry.jpg'
            menu={[{
              name: 'Slett dag',
              icon: 'close',
              handler: deleteDay.bind(null,dayNumber)
            }]}
          />
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
