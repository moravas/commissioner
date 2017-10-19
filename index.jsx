import React from 'react';
import ReactDOM from 'react-dom';

import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line } from 'recharts';

export class MyChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var d = [
            { timeStamp: 4000, va: 2400 },
            {va: 1398 },
            { timeStamp: 2000, va: 9800 },
            { timeStamp: 2780, va: 3908 },
            { timeStamp: 1890, va: 4800.234 },
            { timeStamp: 2390, va: 3800 },
            { timeStamp: 3490, va: 4300 }
        ];

        var options = [];
        for (var index = 0; index < 10; index++) {
            options.push(<option key={index} value={index}>{index}</option>);
        }

        return (
            <div>
                <select onChange={(e) => this.setState({ database: e.target.value })}>
                    {options}
                </select>
                <LineChart width={600} height={300} data={d} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="timeStamp" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="va" stroke="#8884d8" />
                </LineChart>
            </div >
        );
    }
}

ReactDOM.render(<MyChart />, document.getElementById('chart'));
