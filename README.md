# Task
Getting ready to Pokemon GO launch, it became obviously we need a source of info about pokemons. In order to do this, we need to create a client for https://pokeapi.co/

## Functional

On click of ‘Load More’ another chunk of the list is being loaded and displayed on the page. Pokemon details should be displayed after clicking on the single pokemon in list. Previously shown pokemon details should disappear.


### API

Regarding API:


https://pokeapi.co/api/v2/pokemon/?limit=12
https://pokeapi.co/api/v2/pokemon/{{id}}
https://pokeapi.co/api/v2/pokemon/{{id}}  look in sprites
https://pokeapi.co/api/v2/type?limit=999

You can find out more information from the docs

### Bonus

Bonus points for implementing:

Adaptive styling (able to view this on all screen widths)
Filter visible pokemons by type

For this task you can use any css/js library/framework.

#### Handing in task
Source code of the task should be available through the GitHub. There should be README.md (markdown file) file with clear instructions on how to run client app. It is preferable to have standalone running app using github-pages (just push your code to gh-pages branch of the repo).


##### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Pokemon API = "https://pokeapi.co/api/v2"

##### Available Scripts

In the project directory, you can run:

###### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

###### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

