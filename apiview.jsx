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
                        <input ref="request" type="url" onChange={(e) => this.onURLUpdate(e)} required pattern="http://.+"/>
                        <input ref="enable" type="checkbox" onClick={() => this.checkEnabled()} />
                        <div ref="response">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
