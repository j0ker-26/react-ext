import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>I am parent.</h3>
                <A render={name => <B name={name} />} />
            </div>
        )
    }
}

class A extends Component {
    state = { name: 'tom' }

    render() {
        return (
            <div className="a">
                <h3>I am A</h3>
                {this.props.render(this.state.name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className="b">
                <h3>I am B</h3>
                {this.props.name}
            </div>
        )
    }
}
