import React, { PropTypes } from 'react'

class PlusBtn extends React.Component {
  constructor(props) {
    super(props)
    this.focusBtn = this.focusBtn.bind(this)
  }
  focusBtn() {
    this.refs.btn.focus()
  }
  render () {
    return (
      <button type='button' ref='btn'
        className='btn btn-primary btn-block btn-xs' onClick={this.props.click}>
        <i className='fa fa-plus'/>
      </button>
    )
  }
}

PlusBtn.propTypes = {
  click: PropTypes.func.isRequired,
}

export default PlusBtn
