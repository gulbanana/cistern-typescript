import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { DocTitle } from '../components/DocTitle';

interface CounterState {
    currentCount: number;
}

export class Settings extends React.Component<RouteComponentProps<{}>, CounterState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <DocTitle title='Settings'>
            <div>
                <h1>Settings, Arguably</h1>

                <p>
                    <button onClick={ () => { this.incrementCounter() } }>Increment</button>
                    &nbsp;
                    Current count: <strong>{ this.state.currentCount + 0 }</strong>
                </p>
            </div>
        </DocTitle>;
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
