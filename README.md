# BLAST APP
## Guide d'installation

### Cloner le repo sur sa machine locale à l'endroit souhaité
`git clone https://github.com/kiloumap/Frame-Blast-App`

### Installer les dépendances recquises dans le dossier du projet
``cd /Frame-Blast-App && npm install``

### Lancer et tester l'application depuis un ordinateur 
``ionic serve -c``
* Une page web va s'ouvrir
    * F12 et mettre la page en version mobile (responsive) pour simuler l'affichage d'un portable
    
### Tester depuis un smartphone
**Soit :** 
* Télécharger l'application **Ionic Devapp**
*https://ionicframework.com/docs/appflow/devapp#download-the-devapp* 

* Connecter le smartphone au même reseau que l'ordinateur (un partage de connection par cable suffit)
* Lancer l'application et relancer le server ionic si besoin

**OU :**m
* Transferer le fichier 'app-debug.apk' disponible à la racine sur un smartphone android. 
* Depuis le téléphone installer l'application.