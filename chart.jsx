import React from 'react';
import ReactDOM from 'react-dom';

import Superagent from 'superagent'

import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chartData: []};

        update();
    }

    render() {
        return (
            <LineChart width={600} height={300} data={this.state.chartData}>
                <XAxis dataKey="timeStamp" />
                <YAxis unit=" km" />
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="va" stroke="#8884d8" isAnimationActive={false} />
            </LineChart>
        );
    }

    update() {
        Superagent
            .get(this.props.path)
            .end((error, response) => {
                if (error || !response.ok || response.text == "") {
                    return;
                }

                this.setState({ chartData: JSON.stringify(response.text) });
            });
    }
}
