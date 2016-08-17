import React from 'react'
import FRC from 'formsy-react-components'
import { Form } from 'formsy-react'

const BootForm = React.createClass({

    mixins: [FRC.ParentContextMixin],

    propTypes: {
        children: React.PropTypes.node
    },

    render() {
        return (
            <Form
                className={this.getLayoutClassName()}
                {...this.props}
                ref="BootForm"
            >
                {this.props.children}
            </Form>
        );
    }

});

export default BootForm
