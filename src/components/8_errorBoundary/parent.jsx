import React, { Component } from 'react'
import Child from "./child";

export default class Parent extends Component {
    state = {
        hasError: null
    }

    // when child error , be called.
    static getDerivedStateFromError(error) {
        return { hasError: error }
    }

    // send error log to server
    componentDidCatch(e, info) {
        console.error(e, info);
    }

    render() {
        return (
            <div>
                <h2>I am Parent.</h2>
                {
                    this.state.hasError ?
                        <h4>Network error, try later.</h4> :
                        <Child />
                }
            </div>
        )
    }
}
