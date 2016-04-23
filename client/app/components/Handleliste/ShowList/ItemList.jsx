import React, { PropTypes } from 'react'
import ShopListItem from './ShopListItem.jsx'
import PlusBtn from '../../Reusable/PlusBtn.jsx'
import { Grid, Row, Col, Button } from 'react-bootstrap'

class ItemList extends React.Component {
  render () {
    const { listItems } = this.props;
    let purchasedList = [];
    let notPurchasedList = [];

    listItems.forEach( (item, i) => {

      if( !item.purchased ) {
        const props = {
          itemString: item.itemString,
          purchasedClick: this.setPurchased.bind(this, i),
          removeClick: this.deleteItem.bind(this,i),
          changeItemTxt: alert.bind(null,'endre text')
        }
        notPurchasedList.push(<ShopListItem key={i} {...props} />);
      }
      else {
        purchasedList.push(
          <p key={i}>{item.itemString}<span> </span>
            <Button bsSize='xs' onClick={this.setNotPurchased.bind(this,i)}>Ikke kjøpt</Button>
          </p>
        );
      }
    });

    return (
      <Row style={{marginTop:20}}>
        <Col md={12}>
        { notPurchasedList.length > 0 ?
          <Row>
            <Col md={12}>
              <h4>Ikke kjøpt</h4>
              { notPurchasedList }
            </Col>
          </Row>
          : '' }
          { purchasedList.length > 0 ?
          <Row>
            <Col md={12}>
              <h4>Kjøpt</h4>
              { purchasedList }
            </Col>
          </Row>
         : '' }
        </Col>
      </Row>
    )
  }
  setNotPurchased(index) {
    const { _id } = this.props;
    Meteor.call('setShopListItemNotPurchased', _id, index);
  }
  setPurchased(index) {
    const { _id } = this.props;
    Meteor.call('setShopListItemPurchased', _id, index);
  }
  deleteItem(index) {
    const { _id, listItems } = this.props;
    const newList = listItems.splice(index, 1);
    Meteor.call('deleteShopListItem', _id, newList);
  }
}

export default ItemList;
