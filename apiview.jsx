import React from "react"
import ReactDOM from "react-dom"

export default class APIView extends React.Component {
    constructor() {
        super();
        this.timer = undefined;

        // bind it in order the "this" to be usable within callback
        this.onResponse = this.onResponse.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.checkEnabled = this.checkEnabled.bind(this);
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
        if (error || !response.ok) {
            return;
        }

        if (response.header['content-length'] == 0) {
            return;
        }

        var para = document.createElement("p");
        para.appendChild(document.createTextNode(response.body));
        this.refs.response.appendChild(para);
    }

    sendRequest() {
        superagent
            .get(this.refs.request)
            .set('Control-Allow-Credentials', 'true')
            .set('Access-Control-Allow-Origin', 'true')
            .end(this.onResponse);
    }

    render() {
        return (
            <div class="thumbnail">
                <div class="caption">
                    <input ref="request" type="url" />
                    <input ref="enable" type="checkbox" onClick={this.checkEnabled} />
                    <div ref="response">
                    </div>
                </div>
            </div>
        );
    }
}
