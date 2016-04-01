import React, { PropTypes } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import ChoseDinnerFilter from './ChoseDinnerFilter.jsx'
import ChoseDinnerList from './ChoseDinnerList.jsx'

class ChoseDinnerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTitle: ''
    }
    this.onFilterChange = this.onFilterChange.bind(this);
  }
  onFilterChange(e) {
    this.setState({
      filterTitle: e.target.value
    });
  }
  render () {
    const { show, close, addDinner } = this.props;

    return (
      <Modal bsSize='large' show={show} onHide={close} >
        <Modal.Header>
          <h4 className='addWeek-ChooseDinnerHeaderTitle'>Velg Middag</h4>
          <span className='addWeek-ChooseDinnerHeaderMenu'>
            <ChoseDinnerFilter filterChange={this.onFilterChange} />
            <button className='addWeek-ChooseDinnerCloseBtn btn btn-xs' onClick={close}
              title='Lukk vindu' >
              <i className='fa fa-close' />
            </button>
          </span>
        </Modal.Header>
        <Modal.Body>
          <Row>
          <Col sm={6}>
            <ChoseDinnerList titleFilter={this.state.filterTitle} />
          </Col>
          <Col sm={6}>
            aef
          </Col>
          </Row>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ChoseDinnerModal;
