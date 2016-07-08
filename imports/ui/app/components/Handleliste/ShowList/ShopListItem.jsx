import React, { PropTypes } from 'react'
import { FormGroup, FormControl, InputGroup, Glyphicon, Button } from 'react-bootstrap'
import FormsyInput from './ShopListItemForm.jsx'
import { Form } from 'formsy-react'
import { DragSource, DropTarget } from 'react-dnd';
import { itemSource, itemTarget, dropCollect, dragCollect } from './ShopListItem-dnd'

class ShopListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
    this.submitOnBlur = this.submitOnBlur.bind(this);
    this.changeItemTxt = this.changeItemTxt.bind(this);
    this.onEditMode = this.onEditMode.bind(this);
    this.renderField = this.renderField.bind(this);
  }
  submitOnBlur() {
    this.refs.itemForm.submit();
  }
  changeItemTxt({item}) {
    if( this.props.itemString !== item ) {
      this.props.changeItemTxt(item);
    }
    this.setState({ editMode: false });
  }
  onEditMode() {
    this.setState({ editMode: true });
  }
  renderField() {
    if( this.state.editMode ) {
      return (
        <FormsyInput name='item'
          value={this.props.itemString}
          onBlur={this.submitOnBlur}
          required
        />
      )
    }
    return (
      <div className='form-group'>
        <p className='form-control'onClick={this.onEditMode} style={{cursor:'pointer'}}>
          {this.props.itemString}
        </p>
      </div>
    )
  }
  render () {
    const { itemString, size, purchasedClick, removeClick } = this.props;
    const { connectDropTarget, connectDragSource, isDragging, isHovered } = this.props;
    const bssize = size || null;
    const opacity = isHovered ? 0.5 : (isDragging ? 0 : 1);

    return connectDropTarget(
      <div>
        <Form onValidSubmit={this.changeItemTxt} ref='itemForm' style={{opacity}} className='ShopListItem-Form'>
          <FormGroup bsSize={bssize}>
            <InputGroup bsSize={bssize}>
              <InputGroup.Addon>
                { connectDragSource(
                    <div style={{cursor:'move'}}>
                      <Glyphicon glyph='sort' />
                    </div>
                )}
                </InputGroup.Addon>
                {this.renderField()}
                <InputGroup.Button>
                  <Button title='Endre status til kjøpt' onClick={purchasedClick}>
                    <Glyphicon glyph='ok-circle' />
                  </Button>
                  <Button title='Slett artikkel' onClick={removeClick}>
                    <Glyphicon glyph='remove-circle' />
                  </Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </Form>
      </div>
    )
  }
}

export default DropTarget('shopListItem', itemTarget, dropCollect)(DragSource('shopListItem', itemSource, dragCollect)(ShopListItem) );
//
