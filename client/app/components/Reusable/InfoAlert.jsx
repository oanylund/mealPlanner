import React, { PropTypes } from 'react'
import { Alert } from 'react-bootstrap'

const InfoAlert = ({ txt }) => {
  return (
    <Alert bsStyle='info'><p>{txt}</p></Alert>
  )
}

InfoAlert.propTypes = {
  txt: PropTypes.string.isRequired,
}

export default InfoAlert
