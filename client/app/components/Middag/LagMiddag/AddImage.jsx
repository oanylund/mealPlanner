import React, { PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import Cropper from 'react-cropper'
import { Row, Col } from 'react-bootstrap'
import ClassName from 'classnames'

class AddImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null
    }
    this.onDrop = this.onDrop.bind(this)
    this.cropImage = this.cropImage.bind(this)
  }
  onDrop(imageArr) {
    this.setState({
      image: imageArr[0]
    })
  }
  cropImage(){

    let croppedImg = this.refs.cropper.getCroppedCanvas()

    if(typeof croppedImg === 'undefined'){
      return
    }

    var newFile = new FS.File();
    newFile.attachData(croppedImg.toDataURL(), function (error) {
      if (error) throw error;
      newFile.name("thumbnail.png");
      DinnerThumbs.insert(newFile, function (error, fileObj) {
      })
    })

  }
  render() {

    let image = this.state.image ? this.state.image.preview : null
    let DropStyle = {
      width: '100%',
      height: 100,
      borderWidth: 1,
      borderColor: '#666',
      borderStyle: 'dashed',
      marginBottom: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "rgba(255, 255, 255, 0.31)"
    }
    return (
        <div>
          <Row>
            <Col md={12}>
              <Dropzone style={DropStyle} ref="dropzone"
                onDrop={this.onDrop} multiple={false} >
                <div>Slipp fil her, eller klikk for å velge fil</div>
              </Dropzone>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="img-preview" style={{width: 200, height: 200, overflow: 'hidden'}}/>
            </Col>
            <Col md={8}>
              <Cropper
                ref='cropper'
                src={image}
                preview='.img-preview'
                style={{height: 300, width:500}}
                aspectRatio={1}
                guides={false}
                viewMode={1}
                />
              <button onClick={this.cropImage} style={{float: 'right'}}>Crop Image</button>
            </Col>
          </Row>
        </div>
    )
  }
}

export default AddImage;
