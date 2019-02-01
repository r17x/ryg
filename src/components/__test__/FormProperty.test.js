import Component from 'components/FormProperty'
import 'jest-dom/extend-expect'

afterEach(cleanup)

const action = jest.fn(props => {
  return props
})
const renderComponent = props =>
  render(<Component {...props} action={action} />)

describe('Form Property Testing', () => {
  const { getByText, getByLabelText } = renderComponent()
  test('should have property full address & property name label & input', async () => {
    // Arrange
    const address = 'Property Full Address',
      name = 'Property Name',
      submitText = 'Send'

    const actionParam = { name: 'ri7nz', address: 'jakarta' }

    const labelAddress = getByText(address),
      labelName = getByText(name),
      inputAddress = getByLabelText(address),
      inputName = getByLabelText(name),
      submitButton = getByText(submitText)

    // action change input for address
    fireEvent.change(inputAddress, {
      target: { value: actionParam.address },
    })

    // action change input for name
    fireEvent.change(inputName, {
      target: { value: actionParam.name },
    })

    // action click submit button
    fireEvent.click(submitButton)

    // Assert Text or Label
    expect(labelAddress).toHaveTextContent(address)
    expect(labelName).toHaveTextContent(name)
    expect(submitButton).toHaveTextContent(submitText)

    // Assert Input
    expect(inputName.value).toBe(actionParam.name)
    expect(inputAddress.value).toBe(actionParam.address)
    // Assert Action has Called
    expect(action).toHaveBeenCalledTimes(1)
    expect(action).toHaveBeenCalledWith(actionParam)
    expect(action).toHaveReturned()
    expect(action).toHaveReturnedWith(actionParam)
  })
})
