import React, { PropTypes } from 'react'
import { Modal, Button, Grid } from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import CropImg from '../../LagMiddag/CropImg.jsx'

class EditImgModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageChosen: null,
      thumb: null
    }
    this.onDrop = this.onDrop.bind(this);
    this.addImageThumb = this.addImageThumb.bind(this);
    this.resetImg = this.resetImg.bind(this);
  }
  onDrop(imageArr) {
    this.setState({ imageChosen: imageArr[0] });
  }
  addImageThumb(thumb) {
    this.setState({ thumb: thumb }, () => {
      this.props.changeImage(thumb);
    });
  }
  resetImg() {
    this.setState({ thumb: null });
  }
  render () {
    const DropStyle = {
      width: '100%',
      height: 100,
      borderWidth: 1,
      borderColor: '#666',
      borderStyle: 'dashed',
      marginBottom: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "rgba(255, 255, 255, 0.30)"
    }

    const image = this.state.imageChosen ? this.state.imageChosen.preview : null;
    const cropImg = <CropImg addImageThumb={this.addImageThumb} resetImg={this.resetImg}
                      thumb={this.state.thumb} image={image} />;

    return (
      <Modal bsSize='large' show={this.props.showhide} onHide={this.props.closeModal} >
        <Modal.Header>Bytt Bilde</Modal.Header>
        <Modal.Body>
          <Dropzone style={DropStyle} ref="dropzone"
            onDrop={this.onDrop} multiple={false} >
            <div>Slipp bilde her, eller klikk for å åpne filvelgeren</div>
          </Dropzone>
          { this.state.imageChosen ? <Grid fluid>{cropImg}</Grid> : '' }
        </Modal.Body>
        <Modal.Footer><Button onClick={this.props.closeModal}>Lukk</Button></Modal.Footer>
      </Modal>
    )
  }
}

export default EditImgModal;
