import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    return {
      index: props.index,
    };
  }
}

const itemTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
    //   return;
    // }
    // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
    //   return;
    // }
    props.moveIngred({ old: dragIndex , new: hoverIndex });
    monitor.getItem().index = hoverIndex;
  }
}

class AddIngredItem extends React.Component {
  constructor(props) {
    super(props)
    this.onQuantityChange = this.onQuantityChange.bind(this)
    this.onDeleteIngred = this.onDeleteIngred.bind(this)
    this.onMoveUp = this.onMoveUp.bind(this)
    this.onMoveDown = this.onMoveDown.bind(this)
  }
  onQuantityChange(e) {
    const newQuantity = e.target.valueAsNumber

    if( newQuantity >= 1 && newQuantity <= 9999 ) {
      this.props.editQuantity({
        index: this.props.index,
        quantity: newQuantity
      })
    }
  }
  onDeleteIngred() {
    this.props.deleteIngred(this.props.index)
  }
  onMoveUp() {
    this.props.moveIngredUp(this.props.index)
  }
  onMoveDown() {
    this.props.moveIngredDown(this.props.index)
  }
  render () {
    const { ingred, connectDragSource, connectDropTarget, isDragging } = this.props
    const unitShown = ingred.quantity > 1 ? ingred.unit.plural : ingred.unit.singular
    const nameShown = ingred.quantity > 1 ? ingred.name.plural : ingred.name.singular
    const opacity = isDragging ? 1 : 1;

    return connectDragSource(connectDropTarget(
      <div style={{ opacity }}>
        <input className='addDinner-IngredItemQuantity' value={this.props.ingred.quantity}
          type='number' min={1} max={9999} onChange={this.onQuantityChange} />
        <span className='addDinner-IngredItemUnit'>{unitShown}</span>
        <span className='addDinner-IngredItemName'>{nameShown}</span>
        <span className='addDinnerIngredItemMenu'>
          <i className='fa fa-close' onClick={this.onDeleteIngred} />
          <i className='fa fa-chevron-down' onClick={this.onMoveDown} />
          <i className='fa fa-chevron-up' onClick={this.onMoveUp} />
        </span>
      </div>
    ));
  }
}

const dropCollect = (connect) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

const dragCollect = (connect,monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


export default DropTarget('item', itemTarget, dropCollect)(DragSource('item', itemSource, dragCollect)(AddIngredItem) );
