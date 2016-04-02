import React, { PropTypes } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import ChoseDinnerFilter from './ChoseDinnerFilter.jsx'
import ChoseDinnerList from './ChoseDinnerList.jsx'
import ChosenDinnerView from './ChosenDinnerView.jsx'

class ChoseDinnerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleFilter: '',
      limit: 10,
      chosenDinner: null
    }
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
    this.closeAndReset = this.closeAndReset.bind(this);
    this.onChoseDinner = this.onChoseDinner.bind(this);
    this.onAddDinner = this.onAddDinner.bind(this);
  }
  onFilterChange(e) {
    const filter = e.target.value;

    if( filter.length > 2 || filter === '' ) {
      this.setState({
        titleFilter: filter,
        limit: 10
      });
    }
    return
  }
  onLoadMore() {
    this.setState({
      limit: this.state.limit + 10
    });
  }
  closeAndReset() {
    this.setState({
      titleFilter: '',
      limit: 10,
      chosenDinner: null
    }, () => {
      this.props.close();
    });
  }
  onChoseDinner(dinnerId) {
    this.setState({
      chosenDinner: dinnerId
    });
  }
  onAddDinner(dinner) {
    this.props.addDinner(dinner);
    this.closeAndReset();
  }
  render () {
    const { show, close } = this.props;
    let routeParams = {
      dinnerId: this.state.chosenDinner
    }
    return (
      <Modal bsSize='large' show={show} onHide={this.closeAndReset} >
        <Modal.Header>
          <h4 className='addWeek-ChooseDinnerHeaderTitle'>Velg Middag</h4>
          <span className='addWeek-ChooseDinnerHeaderMenu'>
            <ChoseDinnerFilter filterChange={this.onFilterChange} />
            <button className='addWeek-ChooseDinnerCloseBtn btn btn-xs' onClick={this.closeAndReset}
              title='Lukk vindu' >
              <i className='fa fa-close' />
            </button>
          </span>
        </Modal.Header>
        <Modal.Body>
          <Row>
          <Col sm={6}>
            <ChoseDinnerList {...this.state} loadMore={this.onLoadMore} chooseDinner={this.onChoseDinner}/>
          </Col>
          <Col sm={6}>
            { this.state.chosenDinner ?
              <ChosenDinnerView routeParams={routeParams} addDinner={this.onAddDinner}/>
              : '' }
          </Col>
          </Row>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ChoseDinnerModal;
