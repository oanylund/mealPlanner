import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import _ from 'underscore'
import ActiveArchived from './ShowList/ActiveArchived.jsx'
import ItemList from './ShowList/ItemList.jsx'

class ShowShoppingList extends React.Component {
  render () {
    const { _id, name, week, year, active, archived, weekPlan, listItems } = this.props.shoplist;
    return (
      <Grid fluid>
        <Row>
          <Col md={12}>
            <h2 style={{marginBottom:5,marginTop:0}}>{name}</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p>Uke {week}, {year}<br/>
            Ukeplan brukt: <Link to={`/uker/vis/${weekPlan.id}`}>{weekPlan.name}</Link></p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ActiveArchived
              active={active}
              archived={archived}
              activeClick={this.activeBtnClick.bind(this)}
              archivedClick={this.archivedBtnClick.bind(this)}
            />
          </Col>
        </Row>
        <ItemList listItems={listItems} _id={_id} />
      </Grid>
    )
  }
  activeBtnClick() {
    const { _id, active } = this.props.shoplist;
    Meteor.call('setShopListActiveState', _id, !active);
  }
  archivedBtnClick() {
    const { _id, archived } = this.props.shoplist;
    Meteor.call('setShopListArchivedState', _id, !archived);
  }
}
export default ShowShoppingList;
