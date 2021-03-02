import React from 'react';

import getPosts from '../data/posts';
import PostItem from './PostItem';

import '../scss/components/PostList.scss';

export default class PostList extends React.Component {
    constructor() {
        super();
        
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        getPosts(({ data, errors }) => {
            if (errors) {
                console.log(errors);
            }

            this.setState({ posts: data.postCollection.items });
        });
    }

    render() {
        let postMarkup = <div className={ 'test' }>skeleton goes here</div>;

        if (this.state.posts) {
            postMarkup = this.state.posts.map((post, index) => <PostItem data={ post } key={ index } />);
        }

        return (
            <div className={ 'post-list' }>
                { postMarkup }
            </div>
        );
    };
}
