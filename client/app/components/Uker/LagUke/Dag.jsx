import React, { PropTypes } from 'react'

const showImgElement = (props) => {
  let img = props.imgUrl ? props.imgUrl : '/images/default-dinner.png'
  return (
    <div className='dashWidgetBox'>
      <img className='dashWidgetImg' src={img} alt="" />
      <div className='dashWidgetBody'>
        { props.closeHandler ? <i className='fa fa-close fa-CloseBtn' onClick={props.closeHandler} /> : '' }
        <h3>{props.title}</h3>
        <span>{props.description}</span><br/>
        {props.descriptionGrey ? <span className='grey'>{props.descriptionGrey}</span> : '' }
        { props.linkUrl ?
        <a href={props.linkUrl}>Read more...</a>
        : '' }
      </div>
    </div>
  )
}

showImgElement.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionGrey: PropTypes.string,
  imgUrl: PropTypes.string,
  linkUrl: PropTypes.string,
}



export default showImgElement;
