import React, { PropTypes } from 'react'
import PanelListAccordion from '../../Reusable/PanelListAccordion.jsx'

const WeekPanelItem = (props) => {
  const { name, btnTxt, useWeekClick, days, onSelect, expanded } = props;

  const data = {
    headerTxt: name,
    headerTxtClick: onSelect,
    headerBtnTxt: btnTxt,
    headerBtnClick: useWeekClick,
    list: days,
    expanded: expanded
  }

  return (
    <PanelListAccordion {...data} />
  )
}


export default WeekPanelItem
