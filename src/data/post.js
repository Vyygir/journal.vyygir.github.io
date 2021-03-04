import createQuery from './client';

const query = `{
    postCollection(where: {slug: "{slug}"}) {
        items {
            title
            slug
            excerpt
            content
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
