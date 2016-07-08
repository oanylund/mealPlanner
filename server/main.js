import { createApolloServer } from 'meteor/apollo';

import schema from '../imports/api/gql/schema';
import resolvers from '../imports/api/gql/resolvers';

import '../imports/startup/server';

createApolloServer({
    graphiql: true,
    pretty: true,
    schema,
    resolvers,
});
