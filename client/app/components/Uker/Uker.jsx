import {composeWithTracker} from 'react-komposer';
import React, { PropTypes } from 'react'
// import BlazeTemplate from '../BlazeTemplate.jsx'
import { Grid, Row, Col, Panel} from 'react-bootstrap'

function composer(props, onData) {
  const handle = Meteor.subscribe('uker')
  if(handle.ready()) {
    const uker = Uker.find({}).fetch()
    onData(null, {uker})
  }
}

const Uke = ({uker}) => {
  return (
    <Grid fluid>
      <Row>
        <Col md={12}>
            <h3>Lag ny ukeplan</h3>

        </Col>
      </Row>
    </Grid>

  )
}



export default composeWithTracker(composer)(Uke)
//   <BlazeTemplate templateName='ukeForm'/>
