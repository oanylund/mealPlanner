import React from 'react';
import { render } from 'react-dom';
import Routes from '../imports/ui/routes.jsx';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { meteorClientConfig } from 'meteor/apollo';

const client = new ApolloClient(meteorClientConfig());

import '../imports/startup/client';

Meteor.startup(function () {
  render(<ApolloProvider client={client}>
          {Routes()}
        </ApolloProvider>,document.getElementById('root'));
});

Tracker.autorun(function () {
  if (Meteor.status().connected) {
      console.log("Vi er connected");
      // TODO: Add notification system to alert user of status
  } else {
      console.log("Vi er disconnected");
  }
});
