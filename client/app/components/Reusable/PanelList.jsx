import React, { PropTypes } from 'react'
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

const Header = ({headerTxt, headerTxtClick, btnTxt, btnClick}) => {
  return (
      <div className='SL-ShowWeekItemHeader'>
        <h4 onClick={headerTxtClick}>{headerTxt}</h4>
        { btnTxt ? <button className='btn btn-info btn-xs' onClick={btnClick}>{btnTxt}</button> : '' }
      </div>
  )
}

class PanelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandList: false
    }
    this.toggleExpand = this.toggleExpand.bind(this);
  }
  toggleExpand() {
    this.setState({
      expandList: !this.state.expandList
    });
  }
  render () {
    const { headerTxt, headerBtnTxt, headerBtnClick, list } = this.props;
    const headerProps = {
      headerTxt: headerTxt,
      headerTxtClick: this.toggleExpand,
      btnTxt: null || headerBtnTxt,
      btnClick: headerBtnClick,
    }
    const headerComponent = <Header {...headerProps} />;

    return (
      <Panel header={headerComponent} bsStyle='primary' expanded={this.state.expandList} collapsible>
        <ListGroup className='SL-ShowDinnerList' fill>
          {list}
        </ListGroup>
      </Panel>
    )
  }
}

export default PanelList
