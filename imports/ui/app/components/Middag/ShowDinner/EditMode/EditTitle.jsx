import React, { PropTypes } from 'react'
import EditTitleForm from './EditTitleForm.jsx'
import { Meteor } from 'meteor/meteor'

class EditTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editTitle: false
    }
    this.onStartEdit = this.onStartEdit.bind(this);
    this.onQuitEdit = this.onQuitEdit.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
  }
  onStartEdit() {
    this.setState({
      editTitle: true
    });
  }
  onQuitEdit() {
    this.setState({
      editTitle: false
    });
  }
  changeTitle(newTitle) {
    Meteor.call('editDinnerTitle', this.props.dinnerId, newTitle, () => {
      this.onQuitEdit();
    });
  }
  render () {

    const editTitleForm = <EditTitleForm close={this.onQuitEdit} changeTitle={this.changeTitle}
                            title={this.props.title} />;

    return (
      <span className='showDinner-Title'>
        { this.state.editTitle ? editTitleForm : this.props.title }
        { !this.state.editTitle ? <button title='Endre tittel' onClick={this.onStartEdit}><i className='fa fa-edit' /></button> : '' }
      </span>
    )
  }
}

export default EditTitle;
