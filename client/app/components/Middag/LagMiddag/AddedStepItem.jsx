import React, { PropTypes } from 'react'
import ClassNames from 'classnames'

class AddedStepItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
    this.onEdit = this.onEdit.bind(this);
    this.onExitEdit = this.onExitEdit.bind(this);
  }
  onEdit() {
    this.setState({
      editMode: true
    }, () => {
      this.refs.stepEdit.focus();
    });
  }
  onExitEdit() {
    this.setState({
      editMode: false
    });
  }
  render () {

    const fakeProps = 'tetete blball e';

    const editView = <textarea ref='stepEdit' className='addedStep-Desc editMode' defaultValue={fakeProps} />;

    const descView = this.state.editMode ? editView : <p className='addedStep-Desc'>{fakeProps}</p>;

    const stepClass = ClassNames('addDinner-addedStep', {
      editTrue: this.state.editMode
    })

    return (
        <div className={stepClass}>
          <div className='addedStep-Order'>
            <i title='Flytt steg ett hakk opp' className='fa fa-chevron-up' />
            <span title='Nåværende steg' className='addedStep-Step'>10</span>
            <i title='Flytt steg ett hakk ned' className='fa fa-chevron-down' />
          </div>
          {descView}
          { this.state.editMode ?
          <div className='addedStep-Menu'>
            <i title='Lagre endring' className='fa fa-save' />
            <i title='Forkast endring' className='fa fa-trash-o' onClick={this.onExitEdit} />
          </div> : '' }
          <div className='addedStep-Menu'>
            <i title='Slett steg' className='fa fa-close' />
            <i title='Endre Steg' className='fa fa-edit' onClick={this.onEdit} />
          </div>
        </div>
    )
  }
}

export default AddedStepItem;
