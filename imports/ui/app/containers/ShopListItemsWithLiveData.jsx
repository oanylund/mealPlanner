import React from 'react'
import { composeWithTracker } from 'react-komposer'
import getShopListItems from '../composers/getShopListItems'
import ShopListItems from '../components/Handleliste/ShowList/ItemList.jsx'
import Spinner from '../components/Reusable/LoadingCog.jsx'

const Loading = () => {
  return <div><Spinner size={40} /></div>;
}

export default composeWithTracker(getShopListItems, Loading)(ShopListItems)
