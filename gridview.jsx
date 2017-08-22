import React from 'react'
import ReactDOM from 'react-dom'

import Add from "./add.jsx"
import APIView from "./apiview.jsx"

class GridView extends React.Component {
    constructor() {
        super();

        this.state = { views: 0 };
    }

    onAdd() {
        this.setState((prevState, props) => {
            return { views: prevState.views + 1 };
        });
    }

    render() {
        const view = [];
        for (var index = 0; index < this.state.views; index += 1) {
            view.push(<APIView key={index} />);
        };

        view.push(<Add key={this.state.views} onAdd={this.onAdd.bind(this)} />);

        return (
            <div className="container-fluid">
                <div className="row">
                    {view}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<GridView />, document.getElementById('root'));
