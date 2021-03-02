import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { getRandomQuote } from '../scripts/QuoteRandomiser';

import '../scss/components/PostView.scss';

export default class EmptyView extends React.Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>There's nothing here</title>
                </Helmet>

                <div className={ 'post-view' }>
                    <h2 className='post-view__title anaglyph-title'>
                        <span>You've found nothing. Well done.</span>
                    </h2>

                    <article className="post-view__content">
                        <p>There's nothing here yet. If you intended to find something, then you're going about it the wrong way.</p>
                        <p>Your prize? A demotivational quote to remind you how awful you are.</p>

                        <blockquote>
                            <p>{ getRandomQuote() }</p>
                        </blockquote>
                    </article>
                </div>
            </Fragment>
        );
    };
}
