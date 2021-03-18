# LeagueTheoryCrafter

https://vorpal56.github.io/fasting-journal/

Extended fast journal documenting information that I've found and my progress throughout the days

## Built with 
* [Gatsby](https://www.gatsbyjs.com/) - Frontend framework for user flow.

## Getting Started
You will need [Node.js](https://nodejs.org/en/) to run this project and [npm](https://www.npmjs.com/) (which comes with Node.js during installation).
1. `git clone https://github.com/vorpal56/fasting-journal.git`
2. `cd fasting-journal/`
3. `npm install`

## Development Server

```
gatsby develop
```

## Deploying
I've had some problems deploying on GitHub Pages previously and what I've noticed is that you have to first navigate to any new pages so that the `public` folder can be populated with the contents when using `gatsby develop`. For example, if I created a new page for `Day-300.mdx`, I would need to navigate to that page on the development server so that deployment works.

```
npm run deploy
```