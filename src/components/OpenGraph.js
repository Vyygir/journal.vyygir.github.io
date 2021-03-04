import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import defaultImage from '../assets/opengraph-banner.jpg';

export default class OpenGraph extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        type: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
        image: PropTypes.string,
    };

    static defaultProps = {
        type: 'website',
        description: 'My mostly sober online ramblings, writings, and (dis)respectful rants.',
        url: process.env.PUBLIC_URL,
        image: process.env.PUBLIC_URL + defaultImage,
    };

    render() {
        const {
            title,
            type,
            description,
            url,
            image
        } = this.props;

        return (
            <Helmet>
                <meta name="description" content={ description } />

                <meta property="og:title" content={ title } />
                <meta property="og:type" content={ type } />
                <meta property="og:description" content={ description } />
                <meta property="og:url" content={ url } />
                <meta property="og:image" content={ image } />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={ url } />
                <meta name="twitter:title" content={ title } />
                <meta name="twitter:description" content={ description } />
                <meta name="twitter:image" content={ image } />
                <meta name="twitter:creator" content='@Vyygir' />
            </Helmet>
        );
    }
}
