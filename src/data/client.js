export default function createQuery(query, callback) {
    window.fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      ).then(
        response => response.json()
      ).then(({ data, errors }) => {
        if (typeof callback === 'function') {
            callback({ data, errors });
        }
      });
}
