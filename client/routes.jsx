import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'

import App from './app/components/App.jsx'
import NotFound from './app/components/NotFound.jsx'

import UkeMain from './app/components/Uker/UkeMain.jsx'
import Uker from './app/components/Uker/Uker.jsx'
import LagUke from './app/components/Uker/LagUke.jsx'

import IngrediensListe from './app/components/Ingredienser/Ingredienser.jsx'
import RedigerKategori from './app/components/Ingredienser/Kategorier/IngrediensKategorier.jsx'


export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='uker' component={UkeMain}>
          <IndexRoute component={Uker} />
          <Route path='lag-ny' component={LagUke}/>
        </Route>
        <Route path='ingrediens' component={IngrediensListe}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  );
}
