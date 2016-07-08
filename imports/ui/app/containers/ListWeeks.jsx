import React from 'react'
import { composeWithTracker } from 'react-komposer'
import GetUker from '../composers/GetUker'
import WeekList from '../components/Uker/VisUke/WeekList.jsx'

const Loading = () => {
  return (
    <div>Laster...</div>
  )
}
export default composeWithTracker(GetUker, Loading)(WeekList)
