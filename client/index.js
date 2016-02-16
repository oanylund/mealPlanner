import React from 'react'
import { render } from 'react-dom'
import Routes from './routes.jsx'



Meteor.startup(function () {
  render(Routes(),document.getElementById('root'));
});
