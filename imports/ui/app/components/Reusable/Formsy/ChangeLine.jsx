import React, { PropTypes } from 'react'
import { Form, HOC } from 'formsy-react'


const RequiredInput = (props) => {
  let style = props.showRequired() ? 'error' : 'success';
  const reqTxt = props.reqTxt || 'Kan ikke være tomt';
  let help = props.showRequired() ? reqTxt : null;
  if( props.isPristine() ) {
    style = null;
    help = null;
  }
  const type = props.type || 'text';
  return (
    <input
      autoFocus
      value={props.getValue()}
      onChange={(e) => props.setValue(e.target.value)}
      type={type}
      size={2}
    />
  )
}
const RequiredInputHOC = HOC(RequiredInput);



class ChangeLineForm extends React.Component {
  onValid() {}
  onInvalid() {}
  render () {
    const { onSubmit, closeBtnTitle } = this.props;
    return (
      <div className='changeline-container'>
        <div className='changeline-txtBox changeline-txtBox-edit'>
          <Form
            onValidSubmit={onSubmit}
            onValid={this.onValid}
            onInvalid={this.onInvalid}
            >
            <RequiredInputHOC
              name='line'
              value={this.props.line}
              required
              />
          </Form>
        </div>
        <div className='changeline-btnBox'>
          <button
            title={closeBtnTitle}
            onClick={this.props.stopEdit}
            className='changeline-closeButton'>
            <i className='fa fa-close'/>
          </button>
        </div>
      </div>
    )
  }
}


class ChangeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
  }
  startEdit() {
    this.setState({ editMode: true });
  }
  stopEdit() {
    this.setState({ editMode: false });
  }
  submitChange(payload) {
    this.props.submitChange(payload.line);
  }
  renderNormal() {
    const { txt, editBtnTitle } = this.props;
    return (
      <div className='changeline-container'>
        <div className='changeline-txtBox changeline-txtBox-normal'>
          <h2>{txt}</h2>
        </div>
        <div className='changeline-btnBox'>
          <button
            title={editBtnTitle}
            className='changeline-editButton'
            onClick={this.startEdit.bind(this)}>
            <i className='fa fa-edit'/>
          </button>
        </div>
      </div>
    )
  }
  render () {
    const { txt, closeBtnTitle } = this.props;
    return this.state.editMode ?
      <ChangeLineForm
        line={txt}
        closeBtnTitle={closeBtnTitle}
        stopEdit={this.stopEdit.bind(this)}
        onSubmit={this.submitChange.bind(this)}/> :
      this.renderNormal();
  }
}

ChangeLine.defaultProps = {
  txt: 'Tekstfelt',
  editBtnTitle: 'Endre tekst',
  closeBtnTitle: 'Stopp redigering',
  submitChange(line) {
    console.log('Missing "submitChange" prop to handle submit.');
  }
}

export default ChangeLine;
