# Dacty Coach [Logo à venir...]

Roadmap:
1. récupérer template react creative Tim
2. animations du board
3. ...

Fonctionnalités attendues:
- Header et sidebar moderne (voir la maquette lol)
- Dans le contenu de la page web (voir la maquette):
    - En haut un composant text input et un bouton refresh permettant de recomancer une partie à zero.
    - Le reste de l'espace est occupé par un espace rectangulaire (le **board**), ou les caractères/mots défilent de gauche à droite à vitesse plus ou moins constante.
    - Si un utilisateur tappe correctement un caractère/mot alors il disparait du **board**.
    - Si un mot/caractère dépasse la limite (la ligne à droite du **board**), c'est une faute donc fin de partie ou il perd une vie.
- 3 niveaux différents: 
    - Caractère par caractère
    - Mot par mot
    - Syntaxe liée à un langage de programmation (au choix)
- Pour chaque niveau, je peux voir la vitesse d'écriture (mot par minute) (voir maquette)
- Ecran lié aux stats d'un utilisateur (meilleur score par niveau, score moyen, evolution depuis première utilisation, ...)

### Niveau 1 - caractère par caractère
![alt text](https://github.com/blhelias/DactyCoach/blob/master/documentation/niv1_dacty.png)
### Niveau 2 - Mot par mot
![alt text](https://github.com/blhelias/DactyCoach/blob/master/documentation/niv2_dacty.png)
### Niveau 3 - Syntaxe programmation
![alt text](https://github.com/blhelias/DactyCoach/blob/master/documentation/niv3_dacty.png)

## Guide démarrage

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

