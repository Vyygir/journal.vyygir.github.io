import React from 'react';
import { PropTypes } from 'prop-types';
import Skeleton from 'react-loading-skeleton';

export default class PostListSkeleton extends React.Component {
    static propTypes = {
        total: PropTypes.number,
    };

    static defaultProps = {
        total: 3,
    };

    render() {
        return [...Array(this.props.total)].map((element, index) => {
            return (
                <div className={ 'post-item' } key={ index }>
                    <article className={ 'post-item__content' }>
                        <h3 className='post-item__title'>
                            <Skeleton />
                        </h3>

                        <p><Skeleton count={ 3 } /></p>
                    </article>

                    <footer className="post-item__meta">
                        <span className="post-item__date">
                            <Skeleton width={ 300 } height={ 15 } />
                        </span>
                    </footer>
                </div>
            );
        });
    }
}


