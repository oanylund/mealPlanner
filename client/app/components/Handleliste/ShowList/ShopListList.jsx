import React, { PropTypes } from 'react'
import { ListGroup } from 'react-bootstrap'
import _ from 'underscore'
import ShopListRow from './ShopListRow.jsx'

class ShopListList extends React.Component {
  render () {
    const { shoplists } = this.props;

    const groupedLists = _.groupBy(shoplists, ({archived}) => {
      return archived ? 'archived' : 'notArchived';
    });

    const ShoppingLists = groupedLists.notArchived.map( (list, i) => {
      return <ShopListRow key={i} {...list} />
    });

    const ArchivedShoppingLists = groupedLists.archived.map( (list, i) => {
      return <ShopListRow key={i} {...list} />
    });

    return (
      <div>
      <ListGroup>{ShoppingLists}</ListGroup>
      <h5>Arkiverte lister</h5>
      <ListGroup>{ArchivedShoppingLists}</ListGroup>
      </div>
    );
  }
}

export default ShopListList;
