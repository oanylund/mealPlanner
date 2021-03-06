import React, { PropTypes } from 'react'
import { SimpleSelect } from 'react-selectize'
import { composeWithTracker } from 'react-komposer'
import IngredSearchComposer from '../../../composers/IngredSearch'

const AddIngredSearch = ({
  searchChange,
  ingredsFound,
  categories,
  query,
  valSelected,
  plural,
  selectVal,
 }) => {
  const categoryGroups = categories.map( (cats) => {
    return {
      groupId: cats._id,
      title: cats.name
    }
  })
  return (
    <SimpleSelect
      placeholder = "Søk etter ingrediens"
      search={query}
      groups={categoryGroups}
      options={ingredsFound}
      onSearchChange={searchChange}
      onValueChange={selectVal}
      groupId={ (item) => {
        return item.categoryId
      }}
      renderValue={ (chosen) => {
        const renderNameSingular = chosen.name.singular || chosen.name.plural;
        const renderNamePlural = chosen.name.plural || chosen.name.singular;

        return (
          <div className='simple-value'>
            { plural ? <span>{renderNamePlural}</span> : <span>{renderNameSingular}</span> }
          </div>
        )
      }}
      renderOption={ (item) => {
        return (
          <div className="simple-option">
            <span>{item.name.singular}</span>
            {' - '}
            <span>{item.unit.singular}</span>
          </div>
        )
      }}
      filterOptions={ (options, search) => {
        return options;
      }}
      uid ={ (item) => {
        return item._id;
      }}
      renderNoResultsFound={ (item,search) => {
        return (
          <div className='no-results-found'>
            { search.length === 0 ? 'Skriv noen bokstaver for å få frem forslag' :
             `Ingen ingrediens funnet med navn ${search}`}
          </div>
        )
      }}
    />
  )
}

export default composeWithTracker(IngredSearchComposer)(AddIngredSearch)
