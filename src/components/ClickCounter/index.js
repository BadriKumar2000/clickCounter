// Write your code here
import Component from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      console.log(prevState.count)
    })
  }
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>
          The button has been clicked <span>{count}</span> times
        </h1>
        <p>Click the button to increase the count!</p>
        <button onClick={this.onIncrement}>Click Me!</button>
      </div>
    )
  }
}

export default ClickCounter
