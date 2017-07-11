import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DocTitle } from './components/DocTitle';
import { About } from './components/About';
import { Board } from './components/Board';
import { Settings } from './components/Settings';

export const routes = <DocTitle title='Cistern'>
    <Layout>
        <Route exact path='/' component={ Board } />
        <Route path='/about' component={ About } />
        <Route path='/settings' component={ Settings } />
    </Layout>
</DocTitle>;
