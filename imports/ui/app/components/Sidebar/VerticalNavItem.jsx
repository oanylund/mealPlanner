import React from 'react'
import { Link } from 'react-router'
import Collapse from 'react-collapse'

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleSubItems = this.toggleSubItems.bind(this);
  }
  toggleSubItems() {
    this.setState({isOpen: !this.state.isOpen});
  }
  render () {
    let chevronState = (this.state.isOpen) ? 'minus' : 'plus';
    if(this.props.children === undefined ) { chevronState = ''; }
    let path = this.props.path;
    var Subitems = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, { parentpath: path, toggleSelf: this.toggleSubItems })
    }.bind(this));
    return (
      <ul className="VN-navbar">
        <li>
          <Link className="VN-nav-link" to={this.props.path}>
            <i className={`fa fa-fw fa-${this.props.icon}`}></i>
            <span>{this.props.text}</span>
          </Link>
          <i className={`fa fa-${chevronState} nav-chevron`} onClick={this.toggleSubItems} />
        </li>
        <Collapse isOpened={this.state.isOpen} springConfig={{stiffness: 300, damping: 40}}>
            { (this.props.children) ? Subitems : '' }
        </Collapse>
      </ul>
    );
  }
}

ListItem.defaultProps = {
  icon: ''
}

export default ListItem;
