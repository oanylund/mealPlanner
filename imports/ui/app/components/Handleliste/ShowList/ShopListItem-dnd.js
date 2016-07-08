import { findDOMNode } from 'react-dom';

const itemSource = {
  beginDrag(props) {
    return {
      index: props.index,
      itemString: props.itemString
    };
  },
  isDragging(props, monitor) {
    return props.itemString === monitor.getItem().itemString
  }
}

export {itemSource}

const itemTarget = {
  drop(props,monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    props.moveItem({ old: dragIndex , new: hoverIndex });
  }
}

export {itemTarget}

const dropCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isHovered: monitor.isOver()
  }
}

export {dropCollect}

const dragCollect = (connect,monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

export {dragCollect}
