import React from 'react'
import { composeWithTracker } from 'react-komposer'
import GetShopListList from '../composers/GetShopListList'
import ShopListList from '../components/Handleliste/ShowList/ShopListList.jsx'

const Loading = () => {
  return <i style={{fontSize:40}} className="fa fa-cog fa-spin"/>;
}

export default composeWithTracker(GetShopListList, Loading)(ShopListList)
