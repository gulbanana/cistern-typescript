import * as React from 'react';

interface CounterState {
    currentCount: number;
}

export class Settings extends React.Component<{}, CounterState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <h1>Settings, Arguably</h1>

            <p>
                <button onClick={ () => { this.incrementCounter() } }>Increment</button>
                &nbsp;
                Current count: <strong>{ this.state.currentCount + 0 }</strong>
            </p>
        </div>;
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
