import React, { PropTypes } from 'react'

class AddedStepItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
  }

  render () {

    const fakeProps = 'tetete blball e'

    const editView = <textarea className='addedStep-Desc editMode' defaultValue={fakeProps}></textarea>

    const descView = this.state.editMode ? editView : <p className='addedStep-Desc'>{fakeProps}</p>

    return (
        <div className='addDinner-addedStep'>
          <div className='addedStep-Order'>
            <i className='fa fa-chevron-up' />
            <span className='addedStep-Step'>10</span>
            <i className='fa fa-chevron-down' />
          </div>
          {descView}
          <div className='addedStep-Menu'>
            <i className='fa fa-close' />
            <i className='fa fa-edit' />
          </div>
        </div>
    )
  }
}

export default AddedStepItem;
