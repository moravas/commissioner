import React from 'react'
import ReactDOM from 'react-dom'
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

        return (
            <div>
                <input ref="add" type="button" value="Add" className="btn btn-default" onClick={() => this.onAdd()} />
                <div className="container-fluid">
                    <div className="row">
                        {view}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<GridView />, document.getElementById('root'));
