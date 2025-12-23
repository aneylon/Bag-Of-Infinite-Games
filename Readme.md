# Bag of Infinite Games :

A resource for Javascript based games.

## Setup

Add a .env file to the backend project with the following variables

This is what I use for local development.

```
port=4200
mongo_uri=mongodb://localhost:27017
```

### Recommended VS Code plugins for development

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Postman](https://www.postman.com/)
- [Cypress](https://www.cypress.io/)

## TODOs :

- [ ] - Use JSDoc to document

### Front :

- [x] - Add React Router
- [x] - Add login / logout / sign up components
- [x] - Add Auth Context
- [x] - Add Version Context
- [-] - Add Api utils file
  - [ ] - Add Tests for api uitls
- [] - Add Cypress for Front end / End to end testing

### TODO :

- [x] - News
- [] - TODOs
- [] - Notes
- [] - Tasks
- [] - Message board
- [ ] - Direct message
- [ ] - Random functions

### Back :

- [x] - Add dotenv for environment variables
- [x] - Add body parser
  - [ ] - Determine if body parser is necessary
- [x] - Add Auth Routes
- [ ] - Add Tests for Auth Route
- [ ] - Add Logging with Morgan
- [x] - Add mongo connection

## Technologies utilized

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
