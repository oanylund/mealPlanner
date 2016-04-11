import React, { PropTypes } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import _ from 'underscore'
import alt from '../../alt'

import DagForm from './LagUke/DagForm.jsx'
import DagListe from './LagUke/DagListe.jsx'
import WeekName from './LagUke/WeekName.jsx'
import AlertBtn from './LagUke/AlertBtn.jsx'
import InfoAlert from '../Reusable/InfoAlert.jsx'
import PlusBtn from '../Reusable/PlusBtn.jsx'

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
      showAddForm: true
    }
    this.showAddForm = this.showAddForm.bind(this)
    this.hideAddForm = this.hideAddForm.bind(this)
  }
  componentWillUnmount() {
    alt.recycle(LagUkeStore);
  }
  showAddForm(state) {
    this.setState({showAddForm: true})
  }
  hideAddForm(state) {
    this.setState({showAddForm: false})
  }
  render() {
    const { newWeek, validation } = this.props

    const addDayEnabled = (Object.keys(newWeek.days).length < 7) ? true : false;
    const resetDisabled = Object.keys(newWeek.days).length === 0;
    const nameOk = newWeek.name.length > 0;
    const addWeekDisabled = resetDisabled || !nameOk;

    const addForm = this.state.showAddForm ?
    <DagForm alreadyAdded={Object.keys(newWeek.days)}
      hideForm={this.hideAddForm}
      addDay={LagUkeActions.addDay}
      translateDays={translateDays}/> :
    <PlusBtn click={this.showAddForm.bind(null,this.state.showAddForm)} /> ;

    return (
      <div className='marginSquare'>
        <Grid fluid>
          <Row><Col><h2 style={{marginBottom:30,marginTop:0}}>Lag ny ukeplan</h2></Col></Row>
          <Row>
            <Col md={6}>
              <WeekName weekName={newWeek.name}
                nameChange={LagUkeActions.weekNameChanged}
                hasBeenChanged={validation.nameHasBeenChanged}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}><p>Dager</p></Col>
          </Row>
          <DagListe newWeek={newWeek} translateDays={translateDays} deleteDay={LagUkeActions.deleteDay} />
          <Row>
            <Col md={12}>
              { addDayEnabled ? addForm : ''}
            </Col>
          </Row>
          <Row>
            <div style={{marginTop:15}}>
              <Col sm={6}>
                <Button disabled={addWeekDisabled} bsStyle='success'
                  onClick={LagUkeActions.addWeek}
                  block>
                  Lag uke
                </Button>
              </Col>
              <Col sm={6}>
                <AlertBtn disabled={resetDisabled} />
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
