import React, { PropTypes } from 'react'
import { HOC } from 'formsy-react'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import { findDOMNode } from 'react-dom'

class RequiredInputNoHlp extends React.Component {
  componentDidMount() {
    findDOMNode(this.inputElement).focus();
  }
  render () {
    let style = this.props.showRequired() ? 'error' : null;
    const reqTxt = this.props.reqTxt || 'Kan ikke være tomt her';
    if( this.props.isPristine() ) {
      style = null;
    }
    const type = this.props.type || 'text';
    return (
      <FormGroup validationState={style}>
        { this.props.label ? <ControlLabel>{this.props.label}</ControlLabel> : '' }
        <FormControl
          value={this.props.getValue()}
          type={type}
          onChange={(e) => this.props.setValue(e.target.value)}
          placeholder={reqTxt}
          ref={ref => this.inputElement = ref}
          onBlur={this.props.onBlur}
        />
      </FormGroup>
    )
  }
}

export default HOC(RequiredInputNoHlp);
