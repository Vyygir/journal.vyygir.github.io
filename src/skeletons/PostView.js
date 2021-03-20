import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Skeleton from 'react-loading-skeleton';

export default class PostViewSkeleton extends React.Component {
    render() {
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
}
