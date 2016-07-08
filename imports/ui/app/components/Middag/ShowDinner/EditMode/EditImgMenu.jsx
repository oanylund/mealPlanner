import React, { PropTypes } from 'react'
import EditImgModal from './EditImgModal.jsx'
import { Meteor } from 'meteor/meteor'

class EditImgMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
  }
  openModal() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false});
  }
  changeImage(newImage) {
    const { dinnerId, imageId } = this.props;
    if( !imageId ) {
      Meteor.call('addDinnerImage', this.props.dinnerId, newImage);
    }
    else {
      Meteor.call('changeDinnerImage', this.props.dinnerId, this.props.imageId, newImage);
    }
    // TODO: Find out why collection fs gives 404 not found, when changeimg
  }
  deleteImage() {
    Meteor.call('deleteDinnerImage', this.props.dinnerId, this.props.imageId);
  }
  render () {
    const { noImage } = this.props;

    return (
      <div className='showDinner-EditImgMenu'>
        <button title='Bytt bilde' onClick={this.openModal}><i className='fa fa-edit' /></button>
        { !noImage ? <button title='Slett bilde' onClick={this.deleteImage}><i className='fa fa-trash-o' /></button> : '' }
        <EditImgModal showhide={this.state.showModal} closeModal={this.closeModal}
          changeImage={this.changeImage}
        />
      </div>
    )
  }
}

export default EditImgMenu;
