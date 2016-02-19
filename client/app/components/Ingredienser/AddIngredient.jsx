import React, { PropTypes } from 'react'
import BlazeTemplate from '../BlazeTemplate.jsx'

const AddIngredient = ({categoryOptions}) => {
  return (
    <BlazeTemplate templateName='addIngredient' catOptions={categoryOptions} />
  )
}

export default AddIngredient
