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

const PanelListAccordion = (props) => {
  const { headerTxt, headerTxtClick, headerBtnTxt, headerBtnClick, list, expanded } = props;
  const headerProps = {
    headerTxt: headerTxt,
    headerTxtClick: headerTxtClick,
    btnTxt: null || headerBtnTxt,
    btnClick: headerBtnClick,
  }
  const headerComponent = <Header {...headerProps} />;

  return (
    <Panel header={headerComponent} bsStyle='primary' collapsible expanded={expanded}>
      <ListGroup className='SL-ShowDinnerList' fill>
        {list}
      </ListGroup>
    </Panel>
  )
}

export default PanelListAccordion
