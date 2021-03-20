import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/components/Header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className={ 'page-header' }>
                <h1 className={ 'page-header__title' }>
                    <Link to="/">{ this.props.title }</Link>
                </h1>
            </div>
        );
    };
}
