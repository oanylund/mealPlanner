import React, { PropTypes } from 'react'

const PlusBtn = ({ click }) => {
  return (
    <button ref='showAddIngredFormBtn' type='button'
      className='btn btn-primary btn-block btn-xs' onClick={click}>
      <i className='fa fa-plus'/>
    </button>
  )
}

PlusBtn.propTypes = {
  click: PropTypes.func.isRequired,
}

export default PlusBtn
