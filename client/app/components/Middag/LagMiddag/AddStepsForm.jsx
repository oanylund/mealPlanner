import React, { PropTypes } from 'react'
import ClassNames from 'classnames'

class AddStepsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      hasBeenChanged: false,
      emptyErr: false
    }
    this.textChange = this.textChange.bind(this);
    this.validateAndInsert = this.validateAndInsert.bind(this);
  }
  componentDidMount() {
    this.refs.addStepTextArea.focus();
  }
  textChange() {
    const formText = this.refs.addStepTextArea.value;
    const emptyTxt = formText === '';
    this.setState({
      text: formText,
      hasBeenChanged: true,
      emptyErr: emptyTxt
    });
  }
  validateAndInsert() {
    const { text, hasBeenChanged, emptyErr } = this.state;
    if( !hasBeenChanged && text === '' ) {
      this.setState({
        hasBeenChanged: true,
        emptyErr: true
      })
    }
    else {
      // TODO: Call Action insert
    }
  }
  render () {
    const { text, hasBeenChanged, emptyErr } = this.state;

    const emptyMsg = 'Stegbeskrivelse kan ikke være tom.';
    const textFieldClass = ClassNames('form-group',{
      'has-error': emptyErr,
      'has-success': hasBeenChanged && !emptyErr
    })
    const btnStyle = ClassNames()
    return (
      <div className='addDinner-StepAddForm'>
        <i className='fa fa-close' onClick={this.props.closeForm} />
        <div className={textFieldClass}>
          <label className='control-label'>Beskriv nytt steg</label>
          <textarea ref='addStepTextArea' className='form-control'
            onChange={this.textChange} value={text} />
          { emptyErr ? <div className='help-block'>{emptyMsg}</div> : '' }
        </div>
        <div className='form-group' style={{textAlign: 'right'}}>
          <input className='btn btn-primary addIngredBtn' type='button'
            value='Legg til' disabled={emptyErr} onClick={this.validateAndInsert}/>
        </div>
      </div>
    )
  }
}

export default AddStepsForm;
