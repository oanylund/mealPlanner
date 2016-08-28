import React, { PropTypes } from 'react'
import Dag from '../LagUke/Dag.jsx'
import { Grid, Row, Col, Button, Popover, OverlayTrigger } from 'react-bootstrap'
import translateDays from '../../../../../utils/translateDays.js'
import { Meteor } from 'meteor/meteor'
import LoadingCog from '../../Reusable/LoadingCog.jsx'
import { browserHistory, Link } from 'react-router'
import ChangeLine from '../../Reusable/Formsy/ChangeLine.jsx'
import EndreDag from '../EndreUke/EndreDag.jsx'
import _ from 'underscore';
import PlusBtn from '../../Reusable/PlusBtn.jsx';
import DagForm from '../LagUke/DagForm.jsx';

class DisplayWeek extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddForm: false,
      showEditModal: false,
      dayToEdit: null
    }
    this.generateDayData = this.generateDayData.bind(this);
    this.renderAddForm = this.renderAddForm.bind(this);
    this.renderDeleteBtn = this.renderDeleteBtn.bind(this);
    this.renderDays = this.renderDays.bind(this);
  }
  openEditModal(day) {
    this.setState({
      showEditModal: true,
      dayToEdit: day
    });
  }
  closeEditDay() {
    this.setState({
      showEditModal: false,
      dayToEdit: null
    });
  }
  generateDayData() {
    const { days } = this.props.data.week;
    const dayToEdit = this.state.dayToEdit;
    if (dayToEdit) {
      const groupedDays = _.indexBy(days, 'day');
      const day = groupedDays[dayToEdit];
      return {
        dinnerId: day.dinner ? day.dinner._id : null,
        title: day.dinner ? day.dinner.title : null,
        whynot: day.whynot,
        comment: day.comment
      }
    }
    return {}
  }
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
  editDay(newData) {
    const weekId = this.props.routeParams.ukeId;
    const { refetch, week } = this.props.data;
    const { days } = week;
    const groupedDays = _.indexBy(days, 'day');
    const prevDinner = groupedDays[newData.day].dinner;

    Meteor.call('editDay', weekId, newData, (err, res) => {
      if(err) throw err;
      if(newData.dinnerId) {
        Meteor.call('addDinnerWeekDep', newData.dinnerId, weekId);
      }
      if(prevDinner && (prevDinner !== newData.dinnerId)) {
        Meteor.call('removeDinnerWeekDep', prevDinner._id, weekId);
      }
      this.setState({
        showEditModal: false,
        dayToEdit: null
      }, () => {
        refetch();
      });
    });
  }
  editTitle(changedTitle) {
    const weekId = this.props.routeParams.ukeId;
    const refetch = this.props.data.refetch;
    Meteor.call('editWeekTitle', weekId, changedTitle, (err, res) => {
      if(err) throw err;
      refetch();
    })
  }
  addDay(newDay) {
    const weekId = this.props.routeParams.ukeId;
    const { refetch, week } = this.props.data;

    Meteor.call('editDay', weekId, newDay, (err, res) => {
      if(err) throw err;
      if(newDay.dinnerId) {
        Meteor.call('addDinnerWeekDep', newDay.dinnerId, weekId);
      }
        refetch();
    });
  }
  renderDays() {
    const { days } = this.props.data.week;
    return days.map( ({day, comment, whynot, dinner}, i) => {
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
            handler: this.openEditModal.bind(this, day)
          }
        ]
      }
      if ( days.length > 1 ) {
        props.menu.push({
          name: 'Slett dag',
          icon: 'close',
          handler: this.deleteDay.bind(this, day, dinner ? dinner._id : null)
        });
      }
      return (
        <Col key={i} md={6} lg={4}>
          <Dag {...props} />
        </Col>
      )
    });
  }
  renderAddForm() {
    if( this.state.showAddForm ) {
      return (
        <DagForm
          alreadyAdded={this.props.data.week.days.map( ({day}) => {
            return day;
          })}
          hideForm={() => { this.setState({ showAddForm: false }); }}
          addDay={this.addDay.bind(this)} />
      )
    }
    return <PlusBtn click={() => { this.setState({ showAddForm: true }); }} />
  }
  renderDeleteBtn() {
    const { usedInShopList } = this.props.data.week;
    if ( usedInShopList && usedInShopList.length > 0 ) {
      const popover = (
        <Popover
          id='DeleteWarning'
          title='Kan ikke slettes'>
          <strong>Ukeplan brukes i handlelister og kan ikke slettes</strong>
          <br/>
          Brukes i følgende handlelister:<br/>
          <ul>
            { usedInShopList.map( (shoplist, i) => {
              return (
                <li key={i}>
                  <Link to={`/handleliste/vis/${shoplist._id}`}>{shoplist.name}</Link>
                </li>
              );
            })}
          </ul>
        </Popover>
      );

      return (
        <OverlayTrigger
          trigger='click'
          placement='bottom'
          overlay={popover}
          rootClose
        >
          <Button
            bsSize='sm'
            >Slett uke</Button>
        </OverlayTrigger>
      );
    }

    return (
      <Button
        bsSize='sm'
        onClick={this.deleteWeek.bind(this)}>Slett uke</Button>
    );
  }
  render () {
    if(this.props.data.loading) {
      return <div className='marginSquare'><Grid fluid><LoadingCog size={40} /></Grid></div>
    }

    const { name, days } = this.props.data.week;
    return (
      <div className='marginSquare'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <ChangeLine
                txt={name}
                submitChange={this.editTitle.bind(this)}
                editBtnTitle='Rediger uketittel'
                />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div style={{marginTop:20, marginBottom:20}}>
                { this.renderDeleteBtn() }
              </div>
              <h4 style={{marginTop:0}}>Dager</h4>
            </Col>
          </Row>
          <Row>
            { this.renderDays() }
          </Row>
          <Row>
            <Col md={12}>
              { days.length < 7 ? this.renderAddForm() : '' }
            </Col>
          </Row>
      </Grid>
      <EndreDag showEditModal={this.state.showEditModal}
        closeEditModal={this.closeEditDay.bind(this)}
        submitEdit={this.editDay.bind(this)}
        dayName={this.state.dayToEdit}
        dayData={this.generateDayData()}
      />
    </div>
    )
  }
}

export default DisplayWeek;
