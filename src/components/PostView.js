import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import Skeleton from 'react-loading-skeleton';
import { Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Moment from 'react-moment';

import getPost from '../data/post';
import TagList from './TagList';
import CodeBlock from './CodeBlock';

import '../scss/components/PostView.scss';

export default class PostView extends React.Component {
    constructor() {
        super();

        this.state = {
            post: null,
        }
    }

    componentDidMount() {
        getPost(this.props.match.params.slug, ({ data, errors }) => {
            if (errors) {
                console.log(errors);
            }

            this.setState({ post: data.postCollection.items[0] || false });
        });
    }

    render() {
        let post = this.state.post;

        if (post === null) {
            return (
                <Fragment>
                    <Helmet>
                        <title>Loading post</title>
                    </Helmet>

                    <div className={ 'post-view' }>
                        <h2 className='post-view__title'>
                            <Skeleton />
                        </h2>
                        
                        <div className="post-view__meta">
                            <Skeleton width={ 300 } height={ 15 } />
                        </div>

                        <article className="post-view__content">
                            <Skeleton count={ 20 } />
                        </article>
                    </div>
                </Fragment>
            );
        }

        if (post === false) {
            return (
                <Redirect to="/not-found" />
            );
        }

        return (
            <Fragment>
                <Helmet>
                    <title>Reading: "{ post.title }"</title>
                </Helmet>

                <div className={ 'post-view' }>
                    <h2 className='post-view__title anaglyph-title'>
                        <span>{ post.title }</span>
                    </h2>
                    
                    <div className="post-view__meta">
                        <span className="post-view__date">
                            Posted on <time dateTime={ post.publishedAt }>
                                <Moment format='Do MMMM, YYYY [at] h:mma'>{ post.publishedAt }</Moment>
                            </time>
                        </span>

                        <TagList tags={ post.tagCollection.items || [] } />
                    </div>

                    <article className="post-view__content">
                        <ReactMarkdown source={ post.content } renderers={{ code: CodeBlock }} plugins={ [ gfm ] } />
                    </article>
                </div>
            </Fragment>
        );
    };
}

PostView.propTypes = {
    post: PropTypes.object,
};
