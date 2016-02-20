/* global Template, Blaze */
import React, {propTypes} from 'react';
import ReactDOM from 'react-dom';

export default class BlazeTemplate extends React.Component {
  // we don't want to re-render this component if parent changes
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    let {templateName} = this.props;
    this.view = Blaze.renderWithData(Template[templateName], this.props, ReactDOM.findDOMNode(this.refs.root));
  }
  componentWillUnmount() {
    Blaze.remove(this.view);
  }
  componentWillReceiveProps(props) {
      this.view.dataVar.set(props);
  }
  render() {
    let {component, ...props} = this.props;
    props.ref = 'root';
    return React.createElement(component, props);
  }
}
BlazeTemplate.defaultProps = {
  component: 'div',
}
BlazeTemplate.propTypes = {
  templateName: React.PropTypes.string.isRequired,
  component: React.PropTypes.any,
}
