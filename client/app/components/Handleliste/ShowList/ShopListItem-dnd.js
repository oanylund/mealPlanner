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

    props.moveItem({ old: dragIndex , new: hoverIndex });
    monitor.getItem().index = hoverIndex;
  }
}

export {itemTarget}

const dropCollect = (connect) => {
  return {
    connectDropTarget: connect.dropTarget()
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
