import React, { PropTypes } from 'react';
import ClassNames from 'classnames';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';

const stepSource = {
  beginDrag(props) {
    return {
      index: props.index,
      stpTxt: props.stepTxt
    };
  },
  isDragging(props, monitor) {
    return props.stepTxt === monitor.getItem().stpTxt
  }
}

const stepTarget = {
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

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    props.moveStep({ old: dragIndex , new: hoverIndex });
    monitor.getItem().index = hoverIndex;
  }
}

class AddedStepItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      emptyErr: false
    }
    this.onEdit = this.onEdit.bind(this);
    this.onSaveEdit = this.onSaveEdit.bind(this);
    this.onExitEdit = this.onExitEdit.bind(this);
    this.onTxtChange = this.onTxtChange.bind(this);
  }
  onEdit() {
    this.setState({
      editMode: true
    }, () => {
      this.refs.stepEdit.focus();
    });
  }
  onSaveEdit() {
    if( !this.state.emptyErr ) {
      this.props.editStep({
        index: this.props.index,
        newTxt: this.refs.stepEdit.value
      });
      this.setState({ editMode: false });
    }
  }
  onExitEdit() {
    this.setState({
      editMode: false
    });
    this.refs.stepEdit.value = this.props.stepTxt;
  }
  onTxtChange() {
    if ( this.refs.stepEdit.value === '' ) {
      this.setState({ emptyErr: true });
    }
    else {
      this.setState({ emptyErr: false });
    }
  }
  render () {
    const { addStep, deleteStep, moveStep, moveStepUp, moveStepDown, stepTxt, index } = this.props;
    const { connectDragSource, connectDropTarget, isDragging } = this.props;

    const stepClass = ClassNames('addDinner-addedStep', {
      editTrue: this.state.editMode
    });
    const saveEditBtnClass = ClassNames('fa', 'fa-save', {
      emptyErr: this.state.emptyErr
    });
    const editTxtClass = ClassNames('addedStep-Desc', 'editMode', {
      emptyErr: this.state.emptyErr
    })

    const editView = <textarea ref='stepEdit' className={editTxtClass}
                      onChange={this.onTxtChange}  defaultValue={stepTxt} />;
    const descView = this.state.editMode ? editView : <p className='addedStep-Desc'>{stepTxt}</p>;
    const saveChangeBtnTitle = this.state.emptyErr ? 'Kan lagre tomt steg' : 'Lagre endring';
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
        <div className={stepClass} style={{ opacity }}>
          <div className='addedStep-Order'>
            <i title='Flytt steg ett hakk opp' className='fa fa-chevron-up' onClick={moveStepUp.bind(null,index)} />
            <span title='Nåværende steg' className='addedStep-Step'>{index+1}</span>
            <i title='Flytt steg ett hakk ned' className='fa fa-chevron-down' onClick={moveStepDown.bind(null,index)} />
          </div>
          {descView}
          { this.state.editMode ?
          <div className='addedStep-Menu'>
            <i title={saveChangeBtnTitle} className={saveEditBtnClass} onClick={this.onSaveEdit} />
            <i title='Forkast endring' className='fa fa-close' onClick={this.onExitEdit} />
          </div>
          : '' }
          <div className='addedStep-Menu'>
            <i title='Slett steg' className='fa fa-trash-o' onClick={deleteStep.bind(null,index)} />
            <i title='Endre Steg' className='fa fa-edit' onClick={this.onEdit} />
          </div>
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

export default DropTarget('step', stepTarget, dropCollect)(DragSource('step', stepSource, dragCollect)(AddedStepItem) );
