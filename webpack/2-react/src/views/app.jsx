import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div>
                <h2 className="title">webpack</h2>
                <input type="text" />
                <List list={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
            </div>
        )
    }
}

class List extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.list.map((item, index) =>
                        <li key={index}>
                            {item}
                        </li>
                    )
                }
            </ul>
        )
    }
}
export default App;