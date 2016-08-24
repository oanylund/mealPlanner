import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import DisplayWeek from '../components/Uker/VisUke/DisplayWeek.jsx';

const WEEK_QUERY = gql`
  query week($id: String!) {
    week(id: $id) {
      name
      days {
        day
        whynot
        comment
        dinner {
          _id
          title
          description
          image {
            url
          }
        }
      }
    }
  }
`;

const DisplayWeekWithData = graphql(WEEK_QUERY, {
    options(ownProps) {
      return {
        variables: {
          id: ownProps.routeParams.ukeId
        }
      }
    }
})(DisplayWeek)

export default DisplayWeekWithData;
