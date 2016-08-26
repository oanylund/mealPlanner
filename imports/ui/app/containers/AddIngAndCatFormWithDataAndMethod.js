import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import IngAndCatForm from '../components/Ingredienser/AddIngredient/AddIngredientForm.jsx';
import { Meteor } from 'meteor/meteor';

const ING_CATEGORY_QUERY = gql`
  query ingredientCategories {
    ingredientCategories {
      _id
      name
    }
  }
`;

const IngAndCatFormWithData = graphql(ING_CATEGORY_QUERY, {
    props({ data: { loading, ingredientCategories } }) {
      return {
        loading,
        categories: ingredientCategories ? ingredientCategories.map((ingCat) => {
          return {
            value: ingCat._id,
            label: ingCat.name
          }
        }) : []
      }
    }
})(IngAndCatForm);

const ADD_CATEGORY_QUERY = gql`
  mutation addIngCat($categoryName: String!) {
    addIngredientCategory(categoryName: $categoryName) {
      _id
      name
    }
  }
`;

const IngAndCatFormWithDataAndMutations = graphql(ADD_CATEGORY_QUERY, {
  props({ ownProps, mutate }) {
    return {
      submitIngredientCategory(categoryName) {
        return mutate({
          variables: { categoryName },
          optimisticResponse: {
            __typename: 'Mutation',
            addIngredientCategory: {
              __typename: 'IngredientCategory',
              _id: '123',
              name: categoryName
            }
          },
          updateQueries: {
            ingredientCategories(prevQueryResult, { mutationResult }) {
              const newCategory = mutationResult.data.addIngredientCategory;
              const prevCategoryList = prevQueryResult.ingredientCategories;
              return Object.assign({}, prevQueryResult, {
                ingredientCategories: [...prevCategoryList, newCategory]
              });
            }
          }
        });
      },
      submitIngredient(ingredObj,cb) {
        Meteor.call('addIngredient', ingredObj, cb);
      }
    }
  }
})(IngAndCatFormWithData);

export default IngAndCatFormWithDataAndMutations;
