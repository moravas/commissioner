import React from "react"
import ReactDOM from "react-dom"

import PropTypes from 'prop-types'

export default class Add extends React.Component {
    render() {
        return (
            <div className="col-xs-6 col-md-3">
                <div className="thumbnail">
                    <div className="caption">
                        <div className="btn-group" role="group" style={{ width: "100%" }} >
                            <input ref="add" type="button" style={{ width: "100%" }} value="Add View" className="btn btn-default dropdown-toggle" data-toggle="dropdown" />
                            <ul className="dropdown-menu" style={{ width: "100%" }} >
                                <li><a href="#" onClick={() => this.props.onAdd(0)}>Text</a></li>
                                <li><a href="#" onClick={() => this.props.onAdd(1)}>Graphicon</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Add.propTypes = {
    onAdd: PropTypes.func,
};