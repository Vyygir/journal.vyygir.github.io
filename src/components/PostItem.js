import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Skeleton from 'react-loading-skeleton';

import TagList from './TagList';

import '../scss/components/PostItem.scss';

export default class PostItem extends React.Component {
    render() {
        let data = this.props.data;

        if (!data) {
            return [...Array(3)].map((element, index) => {
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

        let featuredImage = '';

        if (data.featuredImage) {
            featuredImage = (
                <figure className={ 'post-item__image' }>
                    <Link to={ `/post/${ data.slug }` }>
                        <img src={ data.featuredImage.url } alt="{ data.title }" title={ data.featuredImage.title } />
                    </Link>
                </figure>
            );
        }

        return (
            <div className={ 'post-item' }>
                { featuredImage }

                <article className={ 'post-item__content' }>
                    <h3 className='post-item__title anaglyph-title'>
                        <Link to={ `/post/${ data.slug }` }>{ data.title }</Link>
                    </h3>

                    { data.excerpt ? <p>{ data.excerpt }</p> : '' }
                </article>

                <footer className="post-item__meta">
                    <span className="post-item__date">
                        Posted on <time dateTime={ data.publishedAt }>
                            <Moment format='Do MMMM, YYYY [at] h:mma'>{ data.publishedAt }</Moment>
                        </time>
                    </span>

                    <TagList tags={ data.tagCollection.items || [] } />
                </footer>
            </div>
        );
    };
}

PostItem.propTypes = {
    data: PropTypes.object,
};
