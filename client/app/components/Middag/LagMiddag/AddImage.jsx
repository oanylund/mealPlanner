import React, { PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import { Row, Col } from 'react-bootstrap'
import ClassName from 'classnames'
import CropImg from './CropImg.jsx'

class AddImage extends React.Component {
  constructor(props) {
    super(props)
    this.onDrop = this.onDrop.bind(this)
  }
  onDrop(imageArr) {
    this.props.addImage(imageArr[0])
  }
  render() {
    const { showImg } = this.props
    let image = this.props.images.original ? this.props.images.original.preview : null

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
      backgroundColor: "rgba(255, 255, 255, 0.30)"
    }
    return (
        <fieldset className={showImg}>
          <legend>Legg til ingredienser</legend>
          <Row>
            <Col md={12}>
              <Dropzone style={DropStyle} ref="dropzone"
                onDrop={this.onDrop} multiple={false} >
                <div>Slipp Bilde her, eller klikk for å åpne filvelgeren</div>
              </Dropzone>
            </Col>
          </Row>
          <CropImg image={image}/>
        </fieldset>
    )
  }
}

export default AddImage;
