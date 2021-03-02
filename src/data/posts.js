import createQuery from './client';

const query = `{
    postCollection {
        items {
            title
            slug
            excerpt
            tagCollection {
                items {
                    title
                }
            }
            sys {
                publishedAt
                publishedVersion
            }
        }
    }
}`;

export default function getPosts(callback) {
    createQuery(query, callback);
};
