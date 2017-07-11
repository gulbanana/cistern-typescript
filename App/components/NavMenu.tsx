import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Glyph } from './Glyph';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>Cistern</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <Glyph name="list"/> Message Board
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/about' } activeClassName='active'>
                                <Glyph name="home"/> About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/settings' } activeClassName='active'>
                                <Glyph name="cog"/> Settings
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
