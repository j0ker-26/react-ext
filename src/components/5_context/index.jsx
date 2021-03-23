import React, {Component} from 'react';
import './index.css'

const MyContext = React.createContext(),
    {Provider, Consumer} = MyContext;

class A extends Component {
    state = {username: 'tom', age: 18}

    render() {
        const {username, age} = this.state;
        return (
            <div className="parent">
                <h3>I am A</h3>
                <h4>My name is {username}</h4>
                <Provider value={{username, age}}>
                    <B/>
                </Provider>
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>I am B</h3>
                <C/>
            </div>
        );
    }
}

class C extends Component {
    static contextType = MyContext

    render() {
        const {username, age} = this.context;
        return (
            <div className="grand">
                <h3>I am C</h3>
                <h4>name gotten from A is {username}, age {age}</h4>
                <D/>
            </div>
        );
    }
}

function D() {
    return (
        <div className="grand_">
            <h3>I am D</h3>
            <h4>name gotten from A is
                <Consumer>
                    {({username, age}) => ` ${username}, age, ${age}`}
                </Consumer>
            </h4>
        </div>
    );
}

export default A;
