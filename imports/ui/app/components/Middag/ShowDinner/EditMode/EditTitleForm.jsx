import React, { PropTypes } from 'react'

class EditTitleForm extends React.Component {
  constructor(props) {
    super(props);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.dinnerTitle.focus();
  }
  onEditSubmit(e) {
    e.preventDefault();
    const newTitle = this.refs.dinnerTitle.value;
    this.props.changeTitle(newTitle);
  }
  render () {
    const { title, close } = this.props;
    return (
      <form onSubmit={this.onEditSubmit}>
        <input ref='dinnerTitle' type='text' defaultValue={title} onBlur={close} required/>
        <button type='submit' title='Lagre endring'><i className='fa fa-save' /></button>
      </form>
    )
  }
}

export default EditTitleForm;
