import ReactDOM from 'react-dom'
import App from './App'

const spyAction = jest.spyOn(App.prototype, 'handleAction')
const spySetState = jest.spyOn(App.prototype, 'setState')

const renderComponent = () => {
  const utils = render(<App />)
  const Submit = utils.getByText('Send')
  return { Submit, ...utils }
}

describe('App.js Testing', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Handle Action', () => {
    const { Submit } = renderComponent()

    fireEvent.click(Submit)

    expect(spyAction).toHaveBeenCalled()
    expect(spyAction).toHaveBeenCalledTimes(1)

    expect(spySetState).toHaveBeenCalled()
    expect(spySetState).toHaveBeenCalledTimes(1)
  })
})
