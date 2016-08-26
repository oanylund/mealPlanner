import React from 'react'
import VerticalNav from './VerticalNav.jsx'
import { Link } from 'react-router'

const SideBar = (props) => {
  return (
    <aside id='leftNav'>
      <div className='fixedNav'>
        <Link
          id='headerLogo'
          activeClassName='headerActive'
          onlyActiveOnIndex
          to='/'
          >Middags<br/><strong>Planlegger</strong></Link>
        <VerticalNav/>
      </div>
    </aside>
  )
}

export default SideBar;
