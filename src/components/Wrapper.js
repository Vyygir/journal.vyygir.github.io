import React from 'react';
import PropTypes from 'prop-types';

import '../scss/components/Wrapper.scss';

export default class Wrapper extends React.Component {
    render() {
        return (
            <div className={ this.props.class }>
                { this.props.children }
            </div>
        );
    };
}

Wrapper.propTypes = {
    class: PropTypes.string,
};
