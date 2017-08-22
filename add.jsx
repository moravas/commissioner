import React from "react"
import ReactDOM from "react-dom"

import PropTypes from 'prop-types'

export default class Add extends React.Component {
    render() {
        return (
            <div className="col-xs-6 col-md-3">
                <div className="thumbnail">
                    <div className="caption">
                        <span className="input-group-btn">
                            <input ref="add" type="button" style={{ width: "100%" }} value="Add" className="btn btn-default" onClick={() => this.props.onAdd()} />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

Add.propTypes = {
    onAdd: PropTypes.func,
};