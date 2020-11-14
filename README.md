# Dacty Coach
![alt text](https://github.com/blhelias/DactyCoach/blob/master/documentation/rabbit-filled-logo.png)

## TODO

* [WIP] Text animation board component
  * TODO: Initialisation des mots de manière aléatoire
  * TODO: mise a jour du Board en fonction de l'input utilisateur
* Logo + graphic layout (color, font, ...)
* Ajout bouton dark mode
* Changer langue
* Changer niveau


## Fonctionnalités attendues

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

## Guide démarrage ++

In the project directory, you can run:

### `docker build -t dacty_coach:latest . && docker run -p 3000:3000 -it dacty_coach:latest`

