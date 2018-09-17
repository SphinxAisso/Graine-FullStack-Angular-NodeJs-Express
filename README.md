# Fullstack seed

Application complète réalisée à partir d'une partie cliente angular 4.0 associée à un serveur Node.js/Express et à une base NeDB.

Contenu :
* Angular2 pour la partie cliente. Code en Typescript/ES6
* Express.js pour la partie serveur. Code en ES6
* NeDB pour la base de données.
* JWT pour l'authentification.
* Construction avec [Webpack](https://webpack.github.io/docs/).
* TU du code Angular 2 avec [Jasmine](http://jasmine.github.io/) et [Karma](http://karma-runner.github.io/).
* Couverture de tests par [Istanbul](https://github.com/gotwarlost/istanbul)
* Tests end-to-end du code Angular avec [Protractor](https://angular.github.io/protractor/).
* Feuilles de style avec [SASS](http://sass-lang.com/) (supporte aussi les css classiques).
* Contrôle du code avec [TSLint](http://palantir.github.io/tslint/) et [Codelyzer](https://github.com/mgechev/codelyzer).
* Documentation avec [TypeDoc](http://typedoc.org/).

>Attention: S'assurer d'utiliser Node.js (`v5.x.x`+) et NPM (`3.x.x`+)

### Démarrage

> Extraire puis déposer le projet dans un réprtoire

```bash
# se placer sur le répertoire racine du projet
$ cd lbp-schemapp

# installer les dépendances avec NPM
$ npm install
```

# Développement

```bash
# démarrer le serveur Node Express
$ npm run backend:dev

# démarrer le serveur de la partie cliente angular 
$ npm start
```
Se connecter à [http://localhost:8080](http://localhost:8001) pour angular.

L'application est buildée en mémoire avec Webpack et rafraichie à chaque modification de code.
* Lancement avec `npm run start:hmr`

Ce mode d'exécution (Hot Module Replacement) permet de recharger les modules à la volée sans rafraichir la page.


Se connecter à [http://localhost:3333](http://localhost:3333) pour utiliser les APIs exposées par le serveur

# Tests

### 1. Tests unitaires

* single run: `npm test`
* live mode (mode TDD): `npm run test-watch`

### 2. Tests End-to-End (e2e, intégration)

* single run:
  * dans un terminal, *si l'application ne tourne pas déjà !*: `npm start`
  * dans un nouveau terminal: `npm run webdriver-start`
  * dans un autre terminal: `npm run e2e`
* mode interactif:
  * en remplacement de la commande précédente: `npm run e2e-live`
  * when debugging or first writing test suites, you may find it helpful to try out Protractor commands without starting up the entire test suite. You can do this with the element explorer.
  * Plus d'infos sur [Protractor Interactive Mode ici](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

# Production

```bash
# construire le package
$ npm run build
```
Le package généré se trouve dans /dist et prêt à être déployé sur un serveur.

Le répertoire db contenant les datastores n'est pas inclus dans le build. 
Il doit être situé dans le même répertoire que celui d'où la commande de lancement est exécutée.

```bash
# démarrer le serveur
$ npm run dist
```

Se connecter à [http://localhost:3333](http://localhost:3333) pour démarrer l'application

Le serveur expose à la fois l'application angular et les APIs.

# Documentation

Génération de la documentation (avec [TypeDoc](http://typedoc.org/)) du code:

* `npm run docs`


# Licence

[MIT](/LICENSE)
