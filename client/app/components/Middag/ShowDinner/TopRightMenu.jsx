import React, { PropTypes } from 'react'
import ClassNames from 'classnames'

const TopRightMenu = ({ changeMode, deleteDinner, editMode }) => {
  const editStyle = ClassNames({
    'editActive': editMode
  })

  return (
    <div className='showDinner-TopRightMenu'>
      <button className={editStyle} onClick={changeMode}><i className='fa fa-edit' /> Endremodus</button>
      <button onClick={deleteDinner}><i className='fa fa-trash-o' /> Slett Middag</button>
    </div>
  )
}

export default TopRightMenu
