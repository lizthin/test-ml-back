This api was created with NodeJs using express

## Intallation
1. Download and install NodeJS if they don't have it [https://nodejs.org/es/download/](https://nodejs.org/es/download/)
2. Install all dependencies: `npm install`

3. run this project: `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3001/api/](http://localhost:3001/api/) to view it in the browser or postman.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## API
- [http://localhost:3001/api/](http://localhost:3000/api/)
    Returns an object to see that the api is started: `{message: 'Web api iniciada'}`

- [http://localhost:3001/api/items?q='your filter search'](http://localhost:3001/api/items?q=Iphone11)
    Returns an object with results of the filter applied: `{author:Object, categories:Array, items:Array}`

- [http://localhost:3001/api/items/:id](http://localhost:3000/api/items/MLA863083993)
 Returns an object with results of the id sent: `{author:Object, item:Object}`

## Deployment

`npm run build`