import React from "react"
import ReactDOM from "react-dom"

import Superagent from "superagent"

export default class APIView extends React.Component {
    constructor() {
        super();
        this.timer = undefined;
        this.state = {
            apiCall: '',
            render: true
        };
    }

    onURLUpdate(evt) {
        this.setState({ apiCall: evt.target.value });
    }

    onRemove() {
        this.setState({ render: false });
    }

    checkEnabled() {
        // Don't check timer, because after start, the else branch should initalize it
        if (!this.refs.enable.checked) {
            clearInterval(this.timer);
        }
        else {
            this.timer = setInterval(() => this.sendRequest(), 500);
        }
    }

    onResponse(error, response) {
        if (error || !response.ok || response.text.lenght == 0) {
            return;
        }

        var para = document.createElement("p");
        para.appendChild(document.createTextNode(response.text));
        this.refs.response.appendChild(para);
    }

    sendRequest() {
        if (this.state.apiCall == '') {
            return;
        }

        Superagent
            .get(this.state.apiCall)
            .end(() => this.onResponse());
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
                            <input ref="request" className="form-control" type="url" aria-describedby="request-desc" onChange={(e) => this.onURLUpdate(e)} required pattern="http://.+" />
                            <span className="input-group-addon">
                                <input ref="enable" type="checkbox" aria-describedby="request-desc" onClick={() => this.checkEnabled()} />
                            </span>
                            <span className="input-group-btn">
                                <input ref="remove" type="button" value="Remove" className="btn btn-default" aria-describedby="request-desc" onClick={() => this.onRemove()} />
                            </span>
                        </div>
                        <div ref="response">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
