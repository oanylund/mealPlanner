import React, { PropTypes } from 'react'

const IngrediensBoxMinimal = ({ingredient,click,btns}) => {
  const canBeDeleted = !ingredient.usedInDinners || ingredient.usedInDinners.length === 0;
  const cantDeleteStyle = {
    color: '#CCC'
  }
  const cantDeleteTitle = 'Ingrediensen brukes i en eller flere middager og kan ikke slettes';

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
        { canBeDeleted ?
          <i className='fa fa-close ingrediensBox-MenuItem' onClick={btns.remove.bind(null,ingredient._id)} />
        : <i title={cantDeleteTitle} className='fa fa-close ingrediensBox-MenuItem' style={cantDeleteStyle} /> }
      </div>
    </div>
  )
}

export default IngrediensBoxMinimal
