import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { DocTitle } from '../components/DocTitle';
import 'isomorphic-fetch';

interface FetchDataExampleState {
    forecasts: WeatherForecast[];
    loading: boolean;
}

export class Board extends React.Component<RouteComponentProps<void>, FetchDataExampleState> {
    constructor() {
        super();
        this.state = { forecasts: [], loading: true };

        fetch('/api/SampleData/WeatherForecasts')
            .then(response => response.json() as Promise<WeatherForecast[]>)
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Board.renderForecastsTable(this.state.forecasts);

        return <DocTitle title='Message Board'>
            <div>
                <h1>Message Board</h1>
                { contents }
            </div>
        </DocTitle>;
    }

    private static renderForecastsTable(forecasts: WeatherForecast[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
            {forecasts.map(forecast =>
                <tr key={ forecast.dateFormatted }>
                    <td>{ forecast.dateFormatted }</td>
                    <td>{ forecast.temperatureC }</td>
                    <td>{ forecast.temperatureF }</td>
                    <td>{ forecast.summary }</td>
                </tr>
            )}
            </tbody>
        </table>;
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
