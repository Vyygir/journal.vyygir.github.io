import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Moment from 'react-moment';

import getPost from '../data/post';
import PostViewSkeleton from '../skeletons/PostView';
import TagList from '../components/TagList';
import CodeBlock from '../components/CodeBlock';

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
                <PostViewSkeleton />
            );
        }

        if (post === false) {
            return (
                <Redirect to="/not-found" />
            );
        }

        let featuredImage = '';

        if (post.featuredImage) {
            featuredImage = (
                <figure className={ 'post-view__image' }>
                    <img src={ post.featuredImage.url } alt={ post.title } title={ post.featuredImage.title } />
                </figure>
            );
        }

        return (
            <Fragment>
                <Helmet>
                    <title>Reading: "{ post.title }"</title>
                </Helmet>

                <div className={ 'post-view' }>
                    { featuredImage }

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
