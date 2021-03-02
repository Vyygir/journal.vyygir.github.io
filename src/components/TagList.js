import React from 'react';
import PropTypes from 'prop-types';
import TagItem from './TagItem';

import '../scss/components/TagList.scss';

export default class TagList extends React.Component {
    render() {
        let tags = this.props.tags;

        if (!tags) {
            return;
        }

        return (
            <ul className='tag-list'>
                { tags.map((tag, index) => <TagItem tag={ tag } element='li' key={ index } />) }
            </ul>
        );
    };
}

TagList.propTypes = {
    tags: PropTypes.array,
};
