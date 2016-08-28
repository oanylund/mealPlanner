import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import { composeWithTracker } from 'react-komposer'
import GetDinner from '../../composers/GetDinner'
import Spinner from '../Reusable/LoadingCog.jsx'
import TopRightMenu from './ShowDinner/TopRightMenu.jsx'
import ShowTitle from './ShowDinner/ShowTitle.jsx'
import ShowDescription from './ShowDinner/ShowDescription.jsx'
import ShowDinnerImage from './ShowDinner/ShowDinnerImage.jsx'
import ShowIngreds from './ShowDinner/ShowIngreds.jsx'
import ShowSteps from './ShowDinner/ShowSteps.jsx'
import { Meteor } from 'meteor/meteor'

class ShowDinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
    this.changeMode = this.changeMode.bind(this);
    this.deleteDinner = this.deleteDinner.bind(this);
  }
  changeMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  }
  deleteDinner() {
    // TODO: Ensure dinner is not used in any week before removing. And error handling
    Meteor.call('deleteDinner', this.props.dinner._id, this.props.dinner.imageId, (err, res) => {
      if (err) throw err;
      browserHistory.push('/middag');
    });
  }
  render () {
    const { _id, title, description, imageId, ingredients, usedInWeek } = this.props.dinner;
    let { steps } = this.props.dinner;
    const cantDelete = !usedInWeek || usedInWeek.length === 0;
    let ingredWidth = steps ? 3 : 12;
    let stepWidth = 8;
    let stepOffset = 1;
    if( this.state.editMode ) {
      ingredWidth = 12;
      stepWidth = 12;
      stepOffset = 0;
    }
    if( !steps ) {
      steps = [];
    }
    return (
      <div id='ShowDinner'>
        <TopRightMenu {...this.state} changeMode={this.changeMode}
          deleteDinner={this.deleteDinner} cantDelete={cantDelete} />
        <div className='showDinner-Separator'/>
        <div className='showDinner-Container'>
          <div className='showDinner-Header'>
            <ShowDinnerImage dinnerId={_id} imageId={imageId} {...this.state} />
            <ShowTitle dinnerId={_id} title={title} {...this.state} />
            <ShowDescription dinnerId={_id} description={description} {...this.state} />
          </div>
          <Grid fluid>
            <Row>
              <Col md={ingredWidth}>
                <ShowIngreds dinnerId={_id} ingredients={ingredients} {...this.state} />
              </Col>
              { steps.length !== 0 || this.state.editMode ? <Col md={stepWidth} mdOffset={stepOffset}><ShowSteps id={_id} steps={steps} {...this.state} /></Col> : '' }
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

const Loading = () => {
  return (
    <div className="marginSquare">
      <Spinner size={40} />
    </div>
  )
}

export default composeWithTracker(GetDinner, Loading)(ShowDinner)
