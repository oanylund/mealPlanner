import React, { PropTypes } from 'react'
import Dag from './Dag.jsx'

const DagListe = (props) => {
  return (
    <Col md={6} lg={4}>
      <Dag title='Tirsdag' description='Taco'
        closeHandler={alert.bind(null,'test')}
        imgUrl='/images/taco.jpg'/>
    </Col>
  )
}

export default DagListe
