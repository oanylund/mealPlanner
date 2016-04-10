import React, { PropTypes } from 'react'
import _ from 'underscore'
import ShowDinnerItem from './ShowDinnerItem.jsx'
import PanelList from '../../Reusable/PanelList.jsx'

const ShowWeekItem = (props) => {
  const { weekName, useWeekClick, days } = props;

  const data = {
    headerTxt: weekName,
    headerBtnTxt: 'Bruk ukeplan',
    headerBtnClick: useWeekClick,
    list: _.map(days, (day,dayName) => {
      return <ShowDinnerItem day={dayName} {...day} />
    })
  }


  return (
    <PanelList {...data} />
  )
}

export default ShowWeekItem


export default ShowWeekItem
