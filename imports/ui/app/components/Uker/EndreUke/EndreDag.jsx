import React, { PropTypes } from 'react'
import { Modal } from 'react-bootstrap'
import EndreDagForm from './EndreDagForm.jsx'

class EndreDag extends React.Component {
  getProps() {
    const { submitEdit, closeEditModal, dayName, dayData } = this.props;
    let formProps = {}

    if( dayData.dinnerId ) {
      formProps.dinner = {
        dinnerId: dayData.dinnerId,
        title: dayData.title
      }
    }
    else {
      formProps.whynot = dayData.whynot;
    }

    if( dayData.comment ) {
      formProps.comment = dayData.comment;
    }

    formProps.dayToEdit = dayName;
    formProps.actions = {
      closeEdit: closeEditModal,
      changeDay: submitEdit
    }
    // debugger
    return formProps
  }
  render () {
    const { showEditModal, closeEditModal, dayData } = this.props;
    // debugger
    return (
      <Modal show={showEditModal} onHide={closeEditModal}>
        { dayData ? <EndreDagForm {...this.getProps()} /> : '' }
      </Modal>
    )
  }
}

export default EndreDag;
