import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { DocTitle } from './DocTitle';

export class About extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <DocTitle title='About'>
            <div>
                <h1>About This Software</h1>
                <p>It doesn't work yet.</p>
            </div>
        </DocTitle>;
    }
}
