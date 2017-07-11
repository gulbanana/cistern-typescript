import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { DocTitle } from '../components/DocTitle';

export function About(props: RouteComponentProps<void>) {
    return <DocTitle title='About'>
        <div>
            <h1>About This Software</h1>
            <p>It doesn't work yet.</p>
        </div>
    </DocTitle>;
}
