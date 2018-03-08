# EXO_QUIZZ

## Introduction 

Quizz React/Node et une petite application de questionaire .

## Guide de Démarrage

Ces instructions vous permettront d'obtenir une copie du projet opérationnel sur votre machine locale à des fins de développement et de test.

### Prérequis

De quoi avez-vous besoin pour démarrer l'application et comment les installer :

* [yarn](https://yarnpkg.com/lang/en/docs/install/) - gestionnaire de paquets

### Installation des prérequis

Installer les paquets du répertoire back-end,se positionner dans ce dernier puis exécuter la commande suivante:

```
yarn
```

faire de méme pour le répertoire front-end.
### Démarrer le projet

Maintenant que les paquets sont installé on doit allumer les serveurs du back-end et front-end, les commandes a exécuter :

  - Se positionner dans le répertoire back-end :
    - Seveur NodeJs (PORT:3000)
    ```
    yarn start
    ```
    - Proxy APIServeur (PORT:3001)
    ```
    node apiServer.js 
    ```
	- Se positionner dans le répertoire front-end (PORT:3006) :
    ```
    yarn start
    ```

Remarque :Laisser les trois serveur allumer, le navigateur vas s'ouvrire aprés l'exécution de la dernier commande .

## Technologies utilisées

  - Frontend :
    - [ReactJS](https://reactjs.org/) 
    - [Axios](https://github.com/axios/axios)
    - [Lodash](https://lodash.com/)
    - [Styled-Components](https://www.styled-components.com/)
    - [SweetAlert](https://sweetalert.js.org/)
  - Backend : 
    - [ExpressJS](http://expressjs.com/)
    - [httpProxy](https://www.npmjs.com/package/httpp-proxy)


## Structure du projet

Le projet est composé de deux répertoires :
- Back-end avec deux fichier principale :
  - app : Setting up the proxy .
  - apiServer : Traitement des requêtes .
- Front-end avec le dossier src contenant deux fichier principale:
  - index : Liaison entre Composant App et le fichier html .
  - App : Composant qui sera afficher dans index.html .
 

