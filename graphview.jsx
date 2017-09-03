import React from 'react'
import ReactDOM from 'react-dom'

import APIView from "./apiview.jsx"

export default class GraphView extends APIView {
    constructor() {
        super();
        this.state = Object.assign(this.state, { count: 0, });
    }

    onResponse(res) {
        var c = this.state.count + 1;
        this.setState({
            count: c,
            response: this.state.response + " " + c + "," + res.text
        });
    }

    responseContainer() {
        return (
            <svg height="auto" width="100%" style={{border: "1px solid" }}>
                <polyline points={this.state.response} style={{ fill: "none", stroke: "black", strokeWidth: "1" }} />
            </svg>
        );
    }
}
