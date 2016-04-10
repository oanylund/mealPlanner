import React, { PropTypes } from 'react'
import PanelList from '../../Reusable/PanelList.jsx'

const ShowWeekItem = (props) => {
  const { name, btnTxt, useWeekClick, days } = props;

  const data = {
    headerTxt: name,
    headerBtnTxt: btnTxt,
    headerBtnClick: useWeekClick,
    list: days
  }

  return (
    <PanelList {...data} />
  )
}


export default ShowWeekItem
