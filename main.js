import React, { Component } from 'react'
import { render } from 'react-dom'


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
