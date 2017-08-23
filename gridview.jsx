import React from 'react'
import ReactDOM from 'react-dom'

import Add from "./add.jsx"
import APIView from "./apiview.jsx"
import GraphView from "./graphview.jsx"

class GridView extends React.Component {
    constructor() {
        super();

        this.state = { views: [] };
    }

    onAdd(viewtype) {
        this.setState({ views: this.state.views.concat([viewtype]) });
    }

    render() {
        const view = [];
        for (var index = 0; index < this.state.views.length; index += 1) {
            if (this.state.views[index] == 0) {
                view.push(<APIView key={index} />);
            }
            else if(this.state.views[index] == 1) {
                view.push(<GraphView key={index} />);
            }
        };

        view.push(<Add key={this.state.views.length} onAdd={this.onAdd.bind(this)} />);

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
