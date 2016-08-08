import React, { PropTypes } from 'react'
import Dag from '../LagUke/Dag.jsx'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import translateDays from '../../../../../utils/translateDays.js'
import { Meteor } from 'meteor/meteor'
import LoadingCog from '../../Reusable/LoadingCog.jsx'
import { browserHistory } from 'react-router'

class DisplayWeek extends React.Component {
  deleteWeek() {
    const weekId = this.props.routeParams.ukeId;
    Meteor.call('deleteWeek', weekId, (err, res) => {
      if (err) throw err;
      browserHistory.push('/uker');
    });
  }
  deleteDay(day, dinnerId) {
    const weekId = this.props.routeParams.ukeId;
    const refetch = this.props.data.refetch;
    Meteor.call('deleteDay', day, weekId, (err, res) => {
      if (err) { throw err }
      if(dinnerId) {
        Meteor.call('removeDinnerWeekDep', dinnerId, weekId);
      }
      refetch();
    });
  }
  render () {
    const self = this;
    if(this.props.data.loading) {
      return <div className='marginSquare'><Grid fluid><LoadingCog size={40} /></Grid></div>
    }

    const { name, days } = this.props.data.week;

    return (
      <div className='marginSquare'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <h2 style={{marginTop:0}}>{name}</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button bsStyle='primary'
                bsSize='sm'
                onClick={this.deleteWeek.bind(this)}>Slett uke</Button>
              <h4 style={{marginTop:0}}>Dager:</h4>
            </Col>
          </Row>
          <Row>
            {
              days.map( ({day, comment, whynot, dinner}, i) => {
                let props = {
                  title: translateDays[day],
                  description: dinner ? dinner.title : whynot,
                  descriptionGrey: comment,
                  imgUrl: dinner ? dinner.image.url : null,
                  linkUrl: dinner ? `/middag/vis/${dinner._id}` : null,
                  linkTxt: 'Se middag...',
                  menu: [
                    {
                      name: 'Endre dag',
                      icon: 'edit',
                      handler: alert
                    }
                  ]
                }
                if ( days.length > 1 ) {
                  props.menu.push({
                    name: 'Slett dag',
                    icon: 'close',
                    handler: this.deleteDay.bind(self, day, dinner ? dinner._id : null)
                  });
                }
                return (
                  <Col key={i} md={4}>
                    <Dag {...props} />
                  </Col>
                )
              })
            }
          </Row>
      </Grid>
    </div>
    )
  }
}

export default DisplayWeek;
