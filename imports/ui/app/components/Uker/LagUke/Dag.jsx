import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class Dag extends React.Component {
  renderTopMenu() {
    const { menu } = this.props;
    const btns = menu.map( (btn, i) => {
      const { name, icon, handler } = btn;
      return <button key={i} title={name} onClick={handler}><i className={`fa fa-${icon}`} /></button>
    });
    return <div className='dashWidgetBtnField'>{ btns }</div>
  }
  render () {
    const { title, description, descriptionGrey, imgUrl, linkUrl, linkTxt, menu } = this.props;
    const img = imgUrl ? imgUrl : '/images/default-dinner.png';
    return (
      <div className='dashWidgetBox'>
        <img className='dashWidgetImg' src={img} alt="" />
        <div className='dashWidgetBody'>
          { menu ? this.renderTopMenu() : '' }
          <h3>{title}</h3>
          <span>{description}</span><br/>
          { descriptionGrey ? <span className='grey'>{descriptionGrey}</span> : '' }
          { linkUrl ?
          <Link to={linkUrl}>{linkTxt}</Link>
          : '' }
        </div>
      </div>
    )
  }
}

Dag.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionGrey: PropTypes.string,
  imgUrl: PropTypes.string,
  linkUrl: PropTypes.string,
  menu: PropTypes.array
}



export default Dag;
