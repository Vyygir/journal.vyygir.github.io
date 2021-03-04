import createQuery from './client';

const query = `{
    postCollection(where: {slug: "{slug}"}) {
        items {
            title
            content
            featuredImage {
                url
                title
            }
            tagCollection {
                items {
                    title
                }
            }
        }
    }
}`;

export default function getPost(slug, callback) {
    createQuery(query.replace('{slug}', slug), callback);
};
