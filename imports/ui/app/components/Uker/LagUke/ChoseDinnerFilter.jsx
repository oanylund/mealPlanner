import React, { PropTypes } from 'react'

const ChoseDinnerFilter = ({filterChange}) => {
  return (
    <div className='addWeek-ChooseDinnerFilter'>
      <span>Filter:</span>
      <input type='text' placeholder='Filtrer titler (Minimum 3 bokstaver)' onChange={filterChange}/>
    </div>
  )
}

export default ChoseDinnerFilter
