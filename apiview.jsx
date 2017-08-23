import React from "react"
import ReactDOM from "react-dom"

import Superagent from "superagent"

export default class APIView extends React.Component {
    constructor() {
        super();
        this.timer = undefined;
        this.state = {
            URL: '',
            response: '',
            render: true
        };
    }

    onChecked() {
        // Don't check timer, because after start, the else branch should initalize it
        if (!this.refs.enable.checked) {
            clearInterval(this.timer);
        }
        else {
            this.timer = setInterval(() => { this.sendRequest() }, 500);
        }
    }

    onResponse(res) {
        this.setState({ response: this.state.response + res.text });
    }

    responseContainer() {
        return (<p>{this.state.response}</p>);
    }

    sendRequest() {
        if (this.state.URL == '') {
            return;
        }

        Superagent
            .get(this.state.URL)
            .end((error, response) => {
                if (error || !response.ok || response.text == "") {
                    return;
                }

                this.onResponse(response);
            });
    }

    render() {
        if (this.state.render == false) {
            return null;
        }

        return (
            <div className="col-xs-6 col-md-3">
                <div className="thumbnail">
                    <div className="caption">
                        <div className="input-group" >
                            <span className="input-group-addon" ref="request-desc">
                                URL
                            </span>
                            <input ref="request" className="form-control" type="url" aria-describedby="request-desc" onChange={(e) => this.setState({ URL: e.target.value })} required pattern="http://.+" />
                            <span className="input-group-addon">
                                <input ref="enable" type="checkbox" aria-describedby="request-desc" onClick={() => this.onChecked()} />
                            </span>
                            <span className="input-group-btn">
                                <input ref="remove" type="button" value="Remove" className="btn btn-default" aria-describedby="request-desc" onClick={() => this.setState({ render: false })} />
                            </span>
                        </div>
                        {this.responseContainer()}
                    </div>
                </div>
            </div>
        );
    }
}
