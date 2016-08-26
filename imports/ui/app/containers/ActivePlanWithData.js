import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ActivePlan from '../components/ActivePlan/ActivePlan.jsx';

const ACTIVE_PLAN_QUERY = gql`
  query activeShoppingList {
    activeShoppingList {
      _id
      name
      week
      year
      weekPlan {
        _id
        name
        days {
          day
          comment
          whynot
          dinner {
            _id
            title
            description
            image {
              id
              url
            }
          }
        }
      }
    }
  }
`;

const ActivePlanWithData = graphql(ACTIVE_PLAN_QUERY, {
  props({ data: { loading, activeShoppingList } }) {
    return { loading, activePlan: activeShoppingList }
  }
})(ActivePlan);

export default ActivePlanWithData;
