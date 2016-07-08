import React from 'react'
import { composeWithTracker } from 'react-komposer'
import GetUker from '../composers/GetUker'
import PickWeekList from '../components/Handleliste/GenerateList/PickWeekList.jsx'

const Loading = () => {
  return (
    <div>Laster...</div>
  )
}
export default composeWithTracker(GetUker, Loading)(PickWeekList)
