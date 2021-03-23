import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        users: 'xxx'
    }
    render() {
        return (
            <div>
                <h4>I am Child.</h4>
                <ul>
                    {this.state.users.map(u=><li key={u.id}>{u.name}</li>)}
                </ul>
            </div>
        )
    }
}
