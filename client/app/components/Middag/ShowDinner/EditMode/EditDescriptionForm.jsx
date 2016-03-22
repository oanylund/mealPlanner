import React, { PropTypes } from 'react'

class EditDescriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.dinnerDescription.focus();
  }
  onEditSubmit(e) {
    e.preventDefault();
    const newDescription = this.refs.dinnerDescription.value;
    this.props.changeDescription(newDescription);
  }
  render () {
    const { description, close } = this.props;
    return (
      <form onSubmit={this.onEditSubmit}>
        <textarea ref='dinnerDescription' wrap='hard' defaultValue={description} required/>
        <button type='submit' title='Lagre endring'><i className='fa fa-save' /></button>
        <button type='button' title='Forkast endring' onClick={close}><i className='fa fa-close' /></button>
      </form>
    )
  }
}

export default EditDescriptionForm;
