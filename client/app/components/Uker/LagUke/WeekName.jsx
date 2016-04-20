import React, { PropTypes } from 'react'
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap'

class WeekName extends React.Component {
  constructor(props) {
    super(props);
    this.validationStateStyle = this.validationStateStyle.bind(this);
    this.validationStateHelpTxt = this.validationStateHelpTxt.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }
  validationStateStyle() {
    const nameLength = this.props.weekName.length;
    if( !this.props.hasBeenChanged ) {
      return 'primary'
    }
    else if( nameLength > 0 ) {
      return 'success'
    }
    else {
      return 'error'
    }
  }
  validationStateHelpTxt() {
    const nameLength = this.props.weekName.length;
    if( nameLength > 0 || !this.props.hasBeenChanged ) {
      return ''
    }
    else {
      return 'Minimum 1 bokstav påkrevd'
    }
  }
  onNameChange(e) {
    this.props.nameChange(e.target.value);
  }
  render () {
    const { weekName } = this.props;

    return (
      <div style={{marginBottom:30}}>
        <p>Navn på ukemeny</p>
        <FormGroup validationState={this.validationStateStyle()}>
          <FormControl
            value={weekName}
            onChange={this.onNameChange}
          />
          <FormControl.Feedback />
          <HelpBlock>{this.validationStateHelpTxt()}</HelpBlock>
        </FormGroup>
      </div>
    )
  }
}

export default WeekName;
