import APIView from "./apiview.jsx"

class GridView extends React.Component {
    constructor() {
        super();

        this.state = { views: 0 };

        this.onAdd = this.onAdd.bind(this);
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
                <input ref="add" type="button" onClick={this.onAdd} />
                <div>
                    {view}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<GridView />, document.getElementById('tablediv'));
