import React, { PropTypes } from 'react'
import { HOC } from 'formsy-react'
import { Input } from 'react-bootstrap'

const RequiredInput = (props) => {
  let style = props.showRequired() ? 'error' : 'success';
  const reqTxt = props.reqTxt || 'Kan ikke være tomt her';
  let help = props.showRequired() ? reqTxt : null;
  if( props.isPristine() ) {
    style = null;
    help = null;
  }
  const type = props.type || 'text';
  return (
      <Input type={type} bsStyle={style} onChange={(e) => props.setValue(e.target.value)}
        value={props.getValue()} help={help} label={props.label} />
  )
}
export default HOC(RequiredInput);
