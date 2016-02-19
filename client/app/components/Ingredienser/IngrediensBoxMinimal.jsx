import React, { PropTypes } from 'react'

const IngrediensBoxMinimal = ({ingredient,click,btns}) => {
  return (
    <div className='ingrediensBox ingrediensBox-zoomIn' onClick={click}>
      <div className='ingrediensBox-Col'>
          <span>
            <strong>{ingredient.name.singular}</strong>
          </span>
      </div>
      <div className='ingrediensBox-Col'>
          <span>
            {ingredient.unit.singular}
          </span>
      </div>
      <div className='ingrediensBox-MenuCol'>
        <i className='fa fa-edit ingrediensBox-MenuItem' onClick={btns.edit.bind(null,ingredient._id)}/>
        <i className='fa fa-close ingrediensBox-MenuItem' onClick={btns.remove.bind(null,ingredient._id)} />
      </div>
    </div>
  )
}

export default IngrediensBoxMinimal
