import React, { PropTypes } from 'react'
import Dag from './Dag.jsx'
import { Row, Col } from 'react-bootstrap'
import InfoAlert from '../../Reusable/InfoAlert.jsx'
import DagDinnerWrapper from './DagDinnerWrapper.jsx'

const DagListe = ({newWeek, deleteDay, editDay, translateDays}) => {

  const dayList = _.map(newWeek.days, (day,dayName) => {
    if ( day.dinnerId ) {
      return (
        <Col key={dayName} md={6} lg={4}>
          <DagDinnerWrapper
            key={dayName}
            day={translateDays[dayName]}
            deleteDay={deleteDay.bind(null,dayName)}
            editDay={editDay.bind(null,dayName)}
            comment={day.comment}
            dinnerId={day.dinnerId}
          />
        </Col>
      )
    }
    else {
      return (
        <Col key={dayName} md={6} lg={4}>
          <Dag key={dayName} title={translateDays[dayName]} description={day.whynot}
            descriptionGrey={day.comment}
            imgUrl='/images/hungry.jpg'
            menu={[{
              name: 'Endre dag',
              icon: 'edit',
              handler: editDay.bind(null,dayName)
            },
            {
              name: 'Slett dag',
              icon: 'close',
              handler: deleteDay.bind(null,dayName)
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
