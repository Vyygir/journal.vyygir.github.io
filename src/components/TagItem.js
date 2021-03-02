import React from 'react';
import PropTypes from 'prop-types';

export default class TagItem extends React.Component {
    render() {
        if (!this.props.tag) {
            return;
        }

        let element = this.props.element || 'span';
        let className = 'tag-list__item';
        let tag = this.props.tag;

        return React.createElement(
            element,
            { className },
            tag.title
        );
    };
}

TagItem.propTypes = {
    tag: PropTypes.object,
    element: PropTypes.string,
};
