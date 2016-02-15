import React, { PropTypes } from 'react'
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'

import DagForm from './LagUke/DagForm.jsx'
import Dag from './LagUke/Dag.jsx'
import VelgUke from './LagUke/VelgUke.jsx'
import AlertBtn from './LagUke/AlertBtn.jsx'

import AltContainer from 'alt-container'
import LagUkeStore from '../../stores/LagUkeStore'
import LagUkeActions from '../../actions/LagUkeActions'

const LagUke = ({newWeek}) => {
  return (
    <div className='marginSquare'>
      <Grid fluid>
        <Row>
          <Col>
            <h2 style={{marginBottom:30,marginTop:0}}>Lag ny ukeplan</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <VelgUke year={newWeek.year} week={newWeek.week}/>
          </Col>
        </Row>
        <Row>
        <Col md={12}>
        <p>Dager</p>
        </Col>
        </Row>
        <Row>
          <Col md={6} lg={4}>
            <Dag title='Tirsdag' description='Taco'
              closeHandler={alert.bind(null,'test')}
              imgUrl='/images/taco.jpg'/>
          </Col>
          <Col md={6} lg={4}>
            <Dag title='Onsdag' description='Laks' descriptionGrey='Ta opp laks fra frysern'/>
          </Col>
          <Col md={6} lg={4}>
            <Dag title='Torsdag' description='Moussaka' imgUrl='/images/mosaka.jpg'/>
          </Col>
          <Col md={6} lg={4}>
            <Dag title='Fredag' description='Biff' imgUrl='/images/steak.jpg'/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Button bsStyle="primary" block><i className='fa fa-plus'/></Button>
            {/*<DagForm day='Tirsdag'/>*/}
          </Col>
        </Row>
        <Row>
            <div style={{marginTop:15}}>
              <Col sm={6}>
                <Button bsStyle='success' block>Lag uke</Button>
              </Col>
              <Col sm={6}>
                <AlertBtn/>
              </Col>
            </div>
        </Row>
      </Grid>
    </div>
  )
}

const altCont = () => {
  return (
    <AltContainer store={LagUkeStore}>
      <LagUke />
    </AltContainer>
  )
}

export default altCont
