import React, { PropTypes } from 'react'

const ChoseDinnerFilter = ({filterChange}) => {
  return (
    <div className='addWeek-ChooseDinnerFilter'>
      <span>Filter:</span>
      <input type='text' placeholder='Filtrer middager etter tittel' onChange={filterChange}/>
    </div>
  )
}

export default ChoseDinnerFilter
