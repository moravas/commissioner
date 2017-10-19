import React from 'react';
import ReactDOM from 'react-dom';

import Superagent from 'superagent'

import Chart from './chart.jsx'

class ChartGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            database: "",
            databases: []
        };

        getDatabases();
    }

    render() {
        if (this.state.databases.length == 0) {
            return (<h1>No databases are available</h1>);
        }

        var charts = createCharts();
        var options = createOptions();

        return (
            <div>
                <select onChange={(e) => this.setState({ database: e.target.value })}> {options}</select>
                {charts}
            </div>
        );
    }

    getDatabases() {
        Superagent
            .get(GetAPIPrefix() + '/databases')
            .end((error, response) => {
                if (error || !response.ok || response.text == "") {
                    return;
                }

                this.setState({ databases: JSON.stringify(response.text) });
            });
    }

    createCharts() {
        // put the valid requested values here
        var values = [
            { DisplayName: 'Gear', value: 'gear' },
            { DisplayName: 'Rpm', value: 'engineRpm' },
            { DisplayName: 'Average Fuel Consumption', value: 'fuelAverageConsumption' },
            { DisplayName: 'Throttle', value: 'gameThrottle' },
            { DisplayName: 'Brake', value: 'gameBrake' },
            { DisplayName: 'Clutch', value: 'gameClutch' }
        ];

        var charts = [];
        for (var index = 0; index < values.length; index++) {
            var path = GetAPIPrefix() + '/' + this.state.database + '/' + values[index].value;
            charts.push(<Chart path={path} title={values[index].DisplayName} />);
        }

        return charts;
    }

    createOptions() {
        var options = [];
        for (var index = 0; index < this.state.databases.length; index++) {
            var db = this.state.databases[index];
            options.push(<option key={db} value={db}>{db}</option>);
        }

        return options;
    }

    static GetAPIPrefix() {
        return "/chart";
    }
}

ReactDOM.render(<ChartGrid />, document.getElementById('chart'));
