import React, { Component } from 'react'
import { render } from 'react-dom'


class Counter extends Component {
    constructor() {
        super()
        this.state = { num: 0 }
    }
    incNum() {
        this.setState({ num: this.state.num + 1 })
    }
    decNum() {
        this.setState({ num: this.state.num - 1 })
    }
    render() {
        return (
          <div>
            <span onClick={this.decNum.bind(this)}>-</span>
            <span>{this.state.num}</span>
            <span onClick={this.incNum.bind(this)}>+</span>
          </div>
        )
    }
}


class App extends Component {
    loginfo(user) {
        console.log(user.name, user.editor)
    }
    render() {
        return (
            <div>
            {
                this.props.datas.map(
                    n => <div onClick={() => this.loginfo(n) }>{`${n.name} - ${n.editor}`}</div>
                )
            }
            <Counter />
            </div>
        )
    }
}

let datas = [{
    name: "rabbit",
    editor: "emacs"
},{
    name: "PL",
    editor: "vsc"
},{
    name: "wuwu",
    editor: "emacs"
}]

render(
    <App datas={datas} />,
    document.getElementById("app")
)
