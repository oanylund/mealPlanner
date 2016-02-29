import React from 'react'
import { render } from 'react-dom'
import Routes from './routes.jsx'

Meteor.startup(function () {
  render(Routes(),document.getElementById('root'));
});

Tracker.autorun(function () {
  if (Meteor.status().connected) {
      console.log("Vi er connected");
      // TODO: Add notification system to alert user of status
  } else {
      console.log("Vi er disconnected");
  }
});
