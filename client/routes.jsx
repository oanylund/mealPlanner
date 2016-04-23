import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'

import App from './app/components/App.jsx'
import NotFound from './app/components/NotFound.jsx'

import UkeMain from './app/components/Uker/UkeMain.jsx'
import Uker from './app/components/Uker/Uker.jsx'
import LagUke from './app/components/Uker/LagUke.jsx'

import IngrediensListe from './app/components/Ingredienser/Ingredienser.jsx'

import MiddagMain from './app/components/Middag/MiddagMain.jsx'
import ShowDinners from './app/components/Middag/ShowDinners.jsx'
import ShowDinner from './app/components/Middag/ShowDinner.jsx'
import LagMiddag from './app/components/Middag/LagMiddag/LagMiddag.jsx'

import ShoppingListMain from './app/components/Handleliste/ShoppingListMain.jsx'
import ShowShoppingLists from './app/components/Handleliste/ShowShoppingLists.jsx'
import ShowShoppingList from './app/containers/ShowShoppingList.jsx'
import GenerateList from './app/components/Handleliste/GenerateList.jsx'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>

        <Route path='uker' component={UkeMain}>
          <IndexRoute component={Uker} />
          <Route path='lag-ny' component={LagUke}/>
        </Route>

        <Route path='middag' component={MiddagMain}>
          <IndexRoute component={ShowDinners} />
          <Route path='vis/:dinnerId' component={ShowDinner}/>
          <Route path='lag-ny' component={LagMiddag}/>
        </Route>

        <Route path='ingrediens' component={IngrediensListe}/>

        <Route path='handleliste' component={ShoppingListMain}>
          <IndexRoute component={ShowShoppingLists} />
          <Route path='generer' component={GenerateList}/>
          <Route path='vis/:listId' component={ShowShoppingList}/>
        </Route>

        <Route path="*" component={NotFound}/>

      </Route>
    </Router>
  );
}
