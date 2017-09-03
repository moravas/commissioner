import React from "react"
import ReactDOM from "react-dom"

import Superagent from "superagent"

export default class APIView extends React.Component {
    constructor() {
        super();
        this.timer = undefined;
        this.state = {
            URLList: [""],
            response: '',
            render: true,
            playVisibility: true,
            collapseVisibility: true
        };
    }

    start() {
        this.timer = setInterval(() => { this.sendRequest() }, 500);
        this.setState({ playVisibility: false });
    }

    stop() {
        clearInterval(this.timer);
        this.setState({ playVisibility: true });
    }

    onResponse(res) {
        this.setState({ response: this.state.response + res.text });
    }

    responseContainer() {
        return (<p>{this.state.response}</p>);
    }

    sendRequest() {
        if (this.state.URLList.length == 0) {
            return;
        }

        Superagent
            .get(this.state.URLList[0])
            .end((error, response) => {
                if (error || !response.ok || response.text == "") {
                    return;
                }

                this.onResponse(response);
            });

        if (this.state.URLList.length > 1) {
            // Rotate the items
            this.setState({ URLList: this.state.URLList.slice(1).concat([this.state.URLList[0]]) });
        }
    }

    render() {
        if (this.state.render == false) {
            return null;
        }

        const urls = [];
        for (var index = 0; index < this.state.URLList.length; index += 1) {
            urls.push(<p key={index} >{this.state.URLList[index]}</p>);
        };

        return (
            <div className="col-md-6">
                <div className="thumbnail">
                    <div className="caption">
                        <div className="input-group" >
                            {/*String label to tell the user what we expect*/}
                            <span ref="request-desc" className="input-group-addon">URL</span>
                            {/*String input field expecting a valid URL*/}
                            <input ref="request" className="form-control" type="url" aria-describedby="request-desc" onChange={(e) => this.setState({ URLList: this.state.URLList.slice(0, this.state.URLList.length - 1).concat([e.target.value]) })} required pattern="http://.+" />
                            {/*Add button that appends URLs into a list*/}
                            <span className="input-group-addon">
                                <button type="button" className="btn btn-default" onClick={() => this.setState({ URLList: this.state.URLList.concat([""]) })}>
                                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                </button>
                            </span>
                            {/*Start / Stop of timer*/}
                            <span className={this.state.playVisibility ? "visible input-group-addon" : "hidden input-group-addon"}>
                                <button type="button" className="btn btn-default" onClick={() => this.start()} >
                                    <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
                                </button>
                            </span>
                            <span className={this.state.playVisibility ? "hidden input-group-addon" : "visible input-group-addon"}>
                                <button type="button" className="btn btn-default" onClick={() => this.stop()} >
                                    <span className="glyphicon glyphicon-pause" aria-hidden="true"></span>
                                </button>sdvadv
                            </span>

                            {/*Collapse / Expand  URLs*/}
                            <span className={this.state.collapseVisibility ? "visible input-group-addon" : "hidden input-group-addon"}>
                                <button type="button" className="btn btn-default" data-toggle="collapse" data-target="#urllist" onClick={() => this.setState({ collapseVisibility: false })} >
                                    <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                                </button>
                            </span>
                            <span className={this.state.collapseVisibility ? "hidden input-group-addon" : "visible input-group-addon"}>
                                <button type="button" className="btn btn-default" data-toggle="collapse" data-target="#urllist" onClick={() => this.setState({ collapseVisibility: true })} >
                                    <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
                                </button>
                            </span>

                            {/*Remove the entire view*/}
                            <span className="input-group-addon">
                                <button type="button" className="btn btn-default" onClick={() => this.setState({ render: false })} >
                                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                </button>
                            </span>
                        </div>

                        <div style={{ height: "40%", overflowY: "auto" }}>
                            <div id="urllist" className="collapse in">
                                {urls}
                            </div>
                            <hr />
                            {this.responseContainer()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
