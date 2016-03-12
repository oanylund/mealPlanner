import React, { PropTypes } from 'react'
import Cropper from 'react-cropper'
import { Row, Col } from 'react-bootstrap'

class CropImg extends React.Component {
  constructor(props) {
    super(props);
    this.cropImage = this.cropImage.bind(this);
  }

  cropImage() {
    let croppedImg = this.refs.cropper.getCroppedCanvas()
    if(typeof croppedImg === 'undefined'){
      return
      // TODO: Handle error if undefined
    }
    this.props.addImageThumb(croppedImg.toDataURL());
  }
  render () {
    const { image } = this.props;

    return (
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
          <button onClick={this.cropImage} style={{float: 'right'}}>Bruk justert bilde</button>
        </Col>
      </Row>
    )

  }
}

export default CropImg;
