import React, { PropTypes } from 'react'
import EditDescriptionForm from './EditDescriptionForm.jsx'

class EditDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editDescription: false
    }
    this.onStartEdit = this.onStartEdit.bind(this);
    this.onQuitEdit = this.onQuitEdit.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
  }
  onStartEdit() {
    this.setState({
      editDescription: true
    });
  }
  onQuitEdit() {
    this.setState({
      editDescription: false
    });
  }
  changeDescription(newDescription) {
    Meteor.call('editDinnerDescription', this.props.dinnerId, newDescription, () => {
      this.onQuitEdit();
    });
  }
  render () {

    const editDescriptionForm = <EditDescriptionForm close={this.onQuitEdit} changeDescription={this.changeDescription}
                            description={this.props.description} />;

    return (
      <span className='showDinner-Description'>
        { this.state.editDescription ? editDescriptionForm : <span style={{float:'left'}}>{this.props.descrWithBr}</span> }
        { !this.state.editDescription ? <button title='Endre beskrivelse' onClick={this.onStartEdit}><i className='fa fa-edit' /></button> : '' }
      </span>
    )
  }
}

export default EditDescription;
