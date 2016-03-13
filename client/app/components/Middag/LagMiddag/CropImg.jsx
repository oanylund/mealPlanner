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
    const { image, thumb } = this.props;
    const previewStyle = { width: 200, height: 200, overflow: 'hidden' };

    if( thumb ) {
      return (
        <Row>
          <Col md={3}>
            <img src={thumb} style={previewStyle} />
            <p>Forhåndsvisning av bilde</p>
          </Col>
          <Col md={2}>
            <button className='btn btn-primary' onClick={this.props.resetImg}>Rediger/Nytt bilde</button>
          </Col>
        </Row>
      )
    }
    return (
      <Row>
        <Col md={3}>
          <div className="img-preview" style={previewStyle} />
          <p>Forhåndsvisning av bilde</p>
        </Col>
        <Col md={7}>
          <Cropper
            ref='cropper'
            src={image}
            preview='.img-preview'
            style={{ height: 300, width:500 }}
            aspectRatio={1}
            guides={false}
            viewMode={1}
          />
        </Col>
        <Col md={2} >
          <button className='btn btn-primary' onClick={this.cropImage}>Bruk justert bilde</button>
        </Col>
      </Row>
    )

  }
}

export default CropImg;
