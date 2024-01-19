// Write your code here
import {Component} from "react" 

class ClickCounter extends Component {
    state = {count : 0}
    onIncrement = () => {
        this.setState((prevState)=> ({prevState.count + 1}))
    }
    render () {
        const {count} = this.state
        return (
            <div className="card-container">
                <h1 className="heading">The Button has been Clicked <span>{count}</span>times</h1>
                <p className="paragraph">Click the button to increase the count!</p>
                <button type="button" className="button" onClick={this.onIncrement}>Click Me!</button>
            </div>
        )
    }
} 
export default ClickCounter