import React from 'react'
import { composeWithTracker } from 'react-komposer'
import GetUker from '../composers/GetUker'
import WeekList from '../components/Uker/VisUke/WeekList.jsx'
import LoadingCog from '../components/Reusable/LoadingCog.jsx'

const Loading = () => {
  return <LoadingCog size={40}/>;
}

export default composeWithTracker(GetUker, Loading)(WeekList)
