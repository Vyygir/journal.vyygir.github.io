# 📕 journal.vyygir.me

This project is just the React front-end for my online journal. The whole purpose is to keep is simplistic, with some boring and generic styles, and focus on primarily serving content that's been written.

It's honestly nothing special. But if you're viewing the code, I assume you've been on the site.

If not, then you should probably check it out [here](https://journal.vyygir.me).

## Stack

The entire setup is pretty straightforward. The front-end is written, as you can see above, in React. The content comes from Contentful because that's what I felt like trying out at the time.

## Local setup

So you want to set the build up locally for some reason? Fair enough. It's pretty straightforward, so just follow the notes below.

### Prerequisites

- A Contentful account with a public space
- A Contentful access token
- `yarn`/`npm` installed on your machine
- Some sort of experience with JavaScript and React

### Configuration

Copy the `.env.example` in the root of the project to `.env` and add your Contentful space ID and access token.

In a production environment (or even public-facing environment), you should really be using the server to add these to the environment, rather than the configuration files. I'm using Github Pages to serve mine, so I can add any environment variables in the repository settings.

For anything else, you're on your own. I'm not offering support for setting up your environment.

### Build

To work on the project, it's as simple as using `create-react-app`'s commands:

```
> yarn
> yarn start
```

Or if, for some reason, you prefer `npm` then run the following commands:

```
> npm install
> npm run start
```

This watches the project, builds the assets, and serves it locally for you to work. Once you're ready to build the app, just run:

```
yarn build
```

Or again, alternatively:

```
npm run build
```

### Deploying to Github Pages

`gh-pages` is setup on the project, as it's what I'm using to host the site. So you can deploy to your own environment by updating the `homepage` line in `package.json` to your page domain:

```
{
    ..
    "homepage": "YOUR_PAGE_DOMAIN_HERE",
    ..
}
```

You'll also need to make sure that the repository you're using is *your own, and not this one*.

Other than that, as long you've set everything up correctly, you can run the deploy command:

```
yarn deploy
```

And voila, you're now running my journal project for some reason.

## Maintenance

### The future

I do plan to keep this updated for the forseeable future whilst I add more features and generally expand it. The purpose of the project, as well as being my own journal, is to create my own learning experience around React. So whilst I may not be pushing changes every day, whenever I've built something new on it that I actually want to be part of the build, it'll get added.

### Issues

I've setup a two issue templates for reporting issues (which also includes for myself) to keep things organised:

- **Bug:** Report a bug in the build, browser or functional
- **Feature:** Request or suggest a new feature

If you submit an issue, please follow this, or I'm just going to close whatever you've submitted.

### Pull requests

Similarly to issues, I'm totally open to pull requests. Again, just follow the template and try and follow the overall "style" of the code, and it'll likely get in.

## License

Licensing information can be viewed [here](LICENSE.MD).
