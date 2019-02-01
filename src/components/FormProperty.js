import React from 'react'
import { func } from 'prop-types'
import FormGroup from 'reactstrap/lib/FormGroup'
import Form from 'reactstrap/lib/Form'
import Label from 'reactstrap/lib/Label'
import Button from 'reactstrap/lib/Button'
import Input from 'reactstrap/lib/Input'

export default class Property extends React.Component {
  static propTypes = {
    action: func.isRequired,
  }

  state = {
    address: '',
    name: '',
  }

  handleAction = e => {
    e.preventDefault()
    const { address, name } = this.state
    this.props.action &&
      this.props.action({
        address,
        name,
      })
  }

  handleChange = e => {
    e.preventDefault()
    const { id, value } = e.currentTarget
    this.setState({
      [id]: value,
    })
  }

  render() {
    const { handleChange, handleAction } = this
    const { address, name } = this.state
    return (
      <Form>
        <FormGroup>
          <Label for="address">Property Full Address</Label>
          <Input
            type="textarea"
            id="address"
            placeholder="Property Full Address"
            value={address}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Property Name</Label>
          <Input
            type="textarea"
            id="name"
            placeholder="Property Name"
            value={name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Button color="primary" onClick={handleAction}>
            Send
          </Button>
        </FormGroup>
      </Form>
    )
  }
}
