import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Spinner from '../Reusable/LoadingCog.jsx';
import InfoAlert from '../Reusable/InfoAlert.jsx';
import { Link } from 'react-router';
import ShoppingListItems from '../../containers/ShopListItemsWithLiveData.jsx';
import Dag from '../Uker/LagUke/Dag.jsx';
import translateDays from '../../../../utils/translateDays.js';

class ActivePlan extends React.Component {
  renderDays(days) {
    return days.map( ({day, comment, whynot, dinner}, i) => {
      let props = {
        title: translateDays[day],
        description: dinner ? dinner.title : whynot,
        descriptionGrey: comment,
        imgUrl: dinner ? dinner.image.url : null,
        linkUrl: dinner ? `/middag/vis/${dinner._id}` : null,
        linkTxt: 'Se middag...',
      }
      return (
        <Col key={i} md={6} lg={4}>
          <Dag {...props} />
        </Col>
      )
    });
  }
  render () {
    const { loading, activePlan } = this.props;

    if(loading) {
      return (
        <div className='marginSquare'>
          <Spinner size={40}/>
        </div>
      )
    }

    if(!activePlan) {
      return (
        <div className='marginSquare'>
          <InfoAlert txt='Ingen plan er aktiv. Gå til handlelister og velg en aktiv liste' />
        </div>
      )
    }

    const { _id, name, week, year, weekPlan } = activePlan;
    const { days } = weekPlan;

    return (
      <div className='marginSquare'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <h5 style={{marginTop:0, marginBottom: 5}}>Aktiv plan</h5>
              <h2 style={{marginTop:0}}>
                <Link to={`/handleliste/vis/${_id}`}>{name}</Link>
              </h2>
            </Col>
            <Col md={12}>
              <p>Uke: {week}, År: {year}</p>
              <h3 style={{marginBottom:0, marginTop:25}}>
                Ukeplan:
                <Link to={`uker/vis/${weekPlan._id}`}>
                  {` ${weekPlan.name}`}
                </Link>
              </h3>
              <h4>Dager</h4>
            </Col>
          </Row>
          <Row>
            {this.renderDays(days)}
          </Row>
          <Row>
            <Col md={12}>
              <h3 style={{marginBottom:0}}>Handleliste</h3>
            </Col>
          </Row>
          <ShoppingListItems _id={_id} />
        </Grid>
      </div>
    )
  }
}

export default ActivePlan;
