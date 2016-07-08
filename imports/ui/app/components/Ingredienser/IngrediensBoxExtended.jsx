import React, { PropTypes } from 'react'
import ClassName from 'classnames'

const IngrediensBoxExtended = ({ingredient,click}) => {
    const namePlural = (ingredient.name.plural) ?
    <div className='ingrediensBox-Row'><span className='ingrediensBox-smallTitle'>Flertall:</span> <br/><strong>{ingredient.name.plural}</strong></div> : '';

    const unitPlural = (ingredient.unit.plural) ?
    <div className='ingrediensBox-Row'><span className='ingrediensBox-smallTitle'>Flertall:</span> <br/><strong>{ingredient.unit.plural}</strong></div> : '';

    const nameColStyle = ClassName({
      'ingrediensBox-Bodies': true,
      'ingrediensBox-centered':  !ingredient.name.plural,
    })
    const unitColStyle = ClassName({
      'ingrediensBox-Bodies': true,
      'ingrediensBox-centered': ingredient.unit.plural ? false : true ,
    })

    return (
      <div className='ingrediensBox ingrediensBox-Back ingrediensBox-zoomOut' onClick={click}>
        <div className='ingrediensBox-Col'>

          <div className='ingrediensBox-Headers'>
            <p>Navn</p>
          </div>
          <div className={nameColStyle}>
            <div className='ingrediensBox-Row'><span className='ingrediensBox-smallTitle'>Entall:</span> <br/><strong>{ingredient.name.singular}</strong></div>
            {namePlural}
          </div>

        </div>

        <div className='ingrediensBox-Col'>

          <div className='ingrediensBox-Headers'>
            <p>Enhet</p>
          </div>
          <div className={unitColStyle}>
            <div className='ingrediensBox-Row'><span className='ingrediensBox-smallTitle'>Entall:</span> <br/><strong>{ingredient.unit.singular}</strong></div>
            {unitPlural}
          </div>

        </div>
      </div>
    )
}

export default IngrediensBoxExtended
