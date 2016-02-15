import React, { PropTypes } from 'react'
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'
import _ from 'underscore'

import DagForm from './LagUke/DagForm.jsx'
import Dag from './LagUke/Dag.jsx'
import VelgUke from './LagUke/VelgUke.jsx'
import AlertBtn from './LagUke/AlertBtn.jsx'

import AltContainer from 'alt-container'
import LagUkeStore from '../../stores/LagUkeStore'
import LagUkeActions from '../../actions/LagUkeActions'

class LagUke extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddForm: false
    }
    this.showAddForm = this.showAddForm.bind(this)
  }
  showAddForm(state) {
    this.setState({showAddForm: true})
  }
  render() {
    const newWeek = this.props.newWeek
    const dayList = _.map(newWeek.days, (day,dayString) => {
          return (
            <Col key={dayString + 'C'} md={6} lg={4}>
              <Dag key={dayString + 'D'} title={dayString} description={day.explainNone}
                descriptionGrey={day.comment}
                imgUrl='/images/taco.jpg'/>
            </Col>
          )
    })
    
    const addForm = this.state.showAddForm ? <DagForm day='Tirsdag'/> :
    <Button bsStyle="primary" onClick={this.showAddForm.bind(null,this.state.showAddForm)} block><i className='fa fa-plus'/></Button> ;


    return (
      <div className='marginSquare'>
        <Grid fluid>
          <Row><Col><h2 style={{marginBottom:30,marginTop:0}}>Lag ny ukeplan</h2></Col></Row>
          <Row>
            <Col md={4}>
              <VelgUke year={newWeek.year} week={newWeek.week}/>
            </Col>
          </Row>
          <Row>
            <Col md={12}><p>Dager</p></Col>
          </Row>
          <Row>
            {dayList}
          </Row>
          <Row>
            <Col md={12}>
              {this.state.showAddForm}
              {addForm}
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
}

const altCont = () => {
  return (
    <AltContainer store={LagUkeStore}>
      <LagUke />
    </AltContainer>
  )
}

export default altCont
