import React, { PropTypes } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

class ActiveArchived extends React.Component {
  renderActive() {
    const { active, archived, activeClick } = this.props;
    const btnProps = {
      disabled: archived,
      bsStyle: active ? 'primary' : 'info',
      onClick: activeClick
    }
    return <Button {...btnProps}>Active</Button>
  }
  renderArchived() {
    const { active, archived, archivedClick } = this.props;
    const btnProps = {
      disabled: active,
      bsStyle: archived ? 'warning' : 'info',
      onClick: archivedClick
    }
    return <Button {...btnProps}>Archived</Button>
  }
  render () {
    return (
      <ButtonToolbar>
        { this.renderActive() }
        { this.renderArchived() }
      </ButtonToolbar>
    )
  }
}

export default ActiveArchived;
