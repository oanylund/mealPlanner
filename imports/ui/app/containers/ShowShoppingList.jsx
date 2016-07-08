import React from 'react'
import { composeWithTracker } from 'react-komposer'
import getShopList from '../composers/getShopList'
import ShopList from '../components/Handleliste/ShowShoppingList.jsx'

const Loading = () => {
  return <i style={{fontSize:40}} className="fa fa-cog fa-spin"/>;
}

export default composeWithTracker(getShopList, Loading)(ShopList)
