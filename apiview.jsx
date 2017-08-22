import React from "react"
import ReactDOM from "react-dom"

import Superagent from "superagent"

export default class APIView extends React.Component {
    constructor() {
        super();
        this.timer = undefined;
        this.state = { apiCall: '' };

        // bind it in order the "this" to be usable within callback
        this.onResponse = this.onResponse.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
    }

    onURLUpdate(evt) {
        this.setState({ apiCall: evt.target.value });
    }

    checkEnabled() {
        // Don't check timer, because after start, the else branch should initalize it
        if (!this.refs.enable.checked) {
            clearInterval(this.timer);
        }
        else {
            this.timer = setInterval(this.sendRequest, 500);
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
            .end(this.onResponse);
    }

    render() {
        return (
            <div className="col-xs-6 col-md-3">
                <div className="thumbnail">
                    <div className="caption">
                        <div className="input-group" >
                            <span className="input-group-addon" ref="request-desc">
                                API method
                            </span>
                            <input ref="request" className="form-control" type="url" aria-describedby="request-desc" onChange={(e) => this.onURLUpdate(e)} required pattern="http://.+" />
                            <span className="input-group-addon" ref="request-desc">
                                <input ref="enable" type="checkbox" aria-describedby="request-desc" onClick={() => this.checkEnabled()} />
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
