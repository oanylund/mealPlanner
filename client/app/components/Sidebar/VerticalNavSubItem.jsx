import React from 'react'
import { Link } from 'react-router'

const SubListItem = (props) => {
    var path = ''

    if(props.parentpath.endsWith('/')) {
      path = props.parentpath + props.subpath;
    }
    else {
      path = props.parentpath + '/' + props.subpath;
    }

    return (
        <li className="VN-sub-list-item">
          <Link className="VN-nav-link VN-nav-sub-item" to={path} onClick={props.toggleSelf}>
            <i className={`fa fa-fw fa-${props.icon}`}></i>
            <span>{props.text}</span>
          </Link>
        </li>
    );
}

SubListItem.defaultProps = {
  icon: ''
}

export default SubListItem;
