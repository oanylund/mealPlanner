import { connect } from 'react-apollo';
import gql from 'graphql-tag';
import DisplayWeek from '../components/Uker/VisUke/DisplayWeek.jsx';

const DisplayWeekWithData = connect({
  mapQueriesToProps: ({ ownProps }) => ({
    data: {
      query: gql`
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
      `,
      variables: {
        id: ownProps.routeParams.ukeId
      },
    }
  })
})(DisplayWeek)

export default DisplayWeekWithData;
