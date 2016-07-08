import React, { PropTypes } from 'react'
import ShopListItem from './ShopListItem.jsx'
import InsertItem from './InsertItem.jsx'
import { Grid, Row, Col, Button } from 'react-bootstrap'

class ItemList extends React.Component {
  render () {
    const { listItems } = this.props;
    let purchasedList = [];
    let notPurchasedList = [];

    listItems.forEach( (item, i) => {

      if( !item.purchased ) {
        const props = {
          index: i,
          itemString: item.itemString,
          purchasedClick: this.setPurchased.bind(this, i),
          removeClick: this.deleteItem.bind(this,i),
          changeItemTxt: this.changeItem.bind(this,i),
          moveItem: this.moveItem.bind(this)
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
          <Row>
            <Col md={12}>
              <InsertItem onNewItem={this.insertItem.bind(this)} />
            </Col>
          </Row>
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
    const newList = listItems;
    newList.splice(index, 1);
    if( newList.length > 0 ) {
      Meteor.call('deleteShopListItem', _id, newList);
    }
  }
  insertItem(newItem) {
    const { _id } = this.props;
    Meteor.call('addShopListItem', _id, newItem);
  }
  changeItem(index, changedItem) {
    const { _id } = this.props;
    Meteor.call('changedShopListItem', _id, changedItem, index);
  }
  moveItem(indexes) {
    const { _id, listItems } = this.props;
    let tmp = listItems;
    let tmpItem = listItems.splice(indexes.old,1);
    tmp.splice(indexes.new,0,tmpItem[0]);
    Meteor.call('reorderShopList', _id, tmp);
  }
}

export default ItemList;
