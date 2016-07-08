import React, { PropTypes } from 'react'
import { ListGroup } from 'react-bootstrap'
import _ from 'underscore'
import ShopListRow from './ShopListRow.jsx'
import InfoAlert from '../../Reusable/InfoAlert.jsx'
import { Meteor } from 'meteor/meteor'

class ShopListList extends React.Component {
  render () {
    const { shoplists } = this.props;
    let notArchivedList = [];
    let archivedList = [];

    shoplists.forEach( (list,i) => {
      if( list.archived ) {
        archivedList.push(
          <ShopListRow key={i} {...list}
            deleteList={this.deleteShopList.bind(this,list._id, list.weekPlan.id)} />
        );
      }
      else {
        notArchivedList.push(
          <ShopListRow key={i} {...list}
            deleteList={this.deleteShopList.bind(this,list._id, list.weekPlan.id)} />
        );
      }
    });

    return (
      <div>
      { notArchivedList.length === 0 && archivedList.length === 0 ? <InfoAlert txt='Ingen handlelister finnes' /> : null }
      { notArchivedList.length > 0 ? <ListGroup>{notArchivedList}</ListGroup> : null }
      { archivedList.length > 0 ? <div><h5>Arkiverte lister</h5>
      <ListGroup>{archivedList}</ListGroup></div> : null }
      </div>
    );
  }
  deleteShopList(listId, weekPlanId, e) {
    e.stopPropagation();
    e.preventDefault();
    Meteor.call('removeShopList', listId, (err, res) => {
      Meteor.call('removeWeekShopListDep', weekPlanId, listId);
    });
  }
}

export default ShopListList;
