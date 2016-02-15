import React from 'react'
import VerticalNav from './VerticalNav.jsx'

const SideBar = (props) => {
  return (
    <aside id='leftNav'>
      <div className='fixedNav'>
        <header>Middags<br/><strong>Planlegger</strong></header>
        <VerticalNav/>
      </div>
    </aside>
  )
}

export default SideBar;
