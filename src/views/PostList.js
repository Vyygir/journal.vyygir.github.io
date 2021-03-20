import React from 'react';

import getPosts from '../data/posts';
import PostListSkeleton from '../skeletons/PostList';
import PostItem from '../components/PostItem';

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
        let postMarkup = <PostListSkeleton />;

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
