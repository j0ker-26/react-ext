import React, { PureComponent } from 'react';
import './index.css'

export default class Demo extends PureComponent {
    state = {
        carName: 'benze'
    };

    changeCar = () => {
        this.setState({carName: 'audi'})
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps, nextState)
    //     console.log(this.props, this.state)
    //     return this.state.carName !== nextState.carName;
    // }

    render() {
        console.log('parent render')
        const { carName } = this.state;
        return (
            <div className="parent">
                <h3>I am parent component</h3>
                <span>My car is {carName}</span><br/>
                <button onClick={this.changeCar}>change car</button>
                <Child/>
            </div>
        )
    }
}

class Child extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps, nextState)
    //     console.log(this.props, this.state)
    //     return this.props.carName !== nextProps.carName;
    // }
    render() {
        console.log('child render')
        const { carName } = this.props;
        return (
            <div className="child">
                <h3>I am child component</h3>
                <span>I received car is {carName}</span>
            </div>
        )
    }
}
