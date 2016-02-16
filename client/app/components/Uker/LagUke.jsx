import React, { PropTypes } from 'react'
import { Grid, Row, Col, Button, ButtonToolbar, Alert } from 'react-bootstrap'
import _ from 'underscore'

import DagForm from './LagUke/DagForm.jsx'
import Dag from './LagUke/Dag.jsx'
import VelgUke from './LagUke/VelgUke.jsx'
import AlertBtn from './LagUke/AlertBtn.jsx'

import AltContainer from 'alt-container'
import LagUkeStore from '../../stores/LagUkeStore'
import LagUkeActions from '../../actions/LagUkeActions'

const translateDays = {
  tuesday: 'Tirsdag',
  wednesday: 'Onsdag',
  thursday:  'Torsdag',
  friday:    'Fredag',
  saturday:  'Lørdag',
  sunday:   'Søndag',
  monday: 'Mandag',
}

class LagUke extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddForm: false
    }
    this.showAddForm = this.showAddForm.bind(this)
    this.hideAddForm = this.hideAddForm.bind(this)
  }
  showAddForm(state) {
    this.setState({showAddForm: true})
  }
  hideAddForm(state) {
    this.setState({showAddForm: false})
  }
  render() {
    const newWeek = this.props.newWeek
    const dayList = _.map(newWeek.days, (day,dayString) => {
      return (
        <Col key={dayString + 'C'} md={6} lg={4}>
          <Dag key={dayString + 'D'} title={translateDays[dayString]} description={day.title}
            descriptionGrey={day.comment}
            closeHandler={LagUkeActions.deleteDay.bind(null,dayString)}
            imgUrl={day.imgUrl}/>
        </Col>
      )
    })

    const addDayEnabled = (Object.keys(newWeek.days).length < 7) ? true : false;
    const resetEnabled = Object.keys(newWeek.days).length ? false : true;
    const addWeekEnabled = resetEnabled || this.props.weekExists;

    const addForm = this.state.showAddForm ?
    <DagForm alreadyAdded={Object.keys(newWeek.days)}
      hideForm={this.hideAddForm}
      translateDays={translateDays}/> :
    <Button bsStyle="primary" onClick={this.showAddForm.bind(null,this.state.showAddForm)} block><i className='fa fa-plus'/></Button> ;

    return (
      <div className='marginSquare'>
        <Grid fluid>
          <Row><Col><h2 style={{marginBottom:30,marginTop:0}}>Lag ny ukeplan</h2></Col></Row>
          <Row>
            <Col md={4}>
              <VelgUke year={newWeek.year} week={newWeek.week} weekExists={this.props.weekExists}/>
            </Col>
          </Row>
          <Row>
            <Col md={12}><p>Dager</p></Col>
          </Row>
          <Row>
            { Object.keys(newWeek.days).length ? dayList :
            <Col md={12}>
              <div className='addDag'>
                <Alert bsStyle='info'>
                  <p >Trykk + knappen for å legge en middag til en av ukedagene.</p>
                </Alert>
              </div>
            </Col>
            }
          </Row>
          <Row>
            <Col md={12}>
              { addDayEnabled ? addForm : ''}
            </Col>
          </Row>
          <Row>
            <div style={{marginTop:15}}>
              <Col sm={6}>
                <Button disabled={addWeekEnabled} bsStyle='success' block>Lag uke</Button>
              </Col>
              <Col sm={6}>
                <AlertBtn disabled={resetEnabled} />
              </Col>
            </div>
          </Row>
        </Grid>
      </div>
    )
  }
}

const altCont = () => {
  return (
    <AltContainer store={LagUkeStore}>
      <LagUke />
    </AltContainer>
  )
}

export default altCont
