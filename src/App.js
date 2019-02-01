import React, { Component } from 'react'
import FormProperty from 'components/FormProperty'
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  state = {
    data: {
      address: '',
      name: '',
    },
  }

  constructor(props) {
    super(props)
    this.handleAction = this.handleAction.bind(this)
  }

  handleAction(values) {
    const { data } = this.state
    Object.assign(data, values)
    this.setState({ data })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12">
            <h1>{process.env.REACT_APP_NAME}</h1>
            <hr />
            <FormProperty action={this.handleAction} />
          </Col>
        </Row>
      </Container>
    )
  }
}
