import React, {Component} from 'react';

class Demo extends Component {
    state = {count: 0}
    add = () => {
        // async data update.
        this.setState(state=> ({count: state.count + 1}))
    }
    render() {
        return (
            <div>
                <h1>Sum is {this.state.count}</h1>
                <button onClick={this.add}>click me + 1</button>
            </div>
        );
    }
}

export default Demo;
