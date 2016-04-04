import React, { PropTypes } from 'react'
import { Input } from 'react-bootstrap'

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
        <Input type='text'
          value={weekName}
          bsStyle={this.validationStateStyle()}
          help={this.validationStateHelpTxt()}
          onChange={this.onNameChange}
          hasFeedback
        />
      </div>
    )
  }
}

export default WeekName;
