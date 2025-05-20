# Visit Counter App - Azure Containerized Deployment

Ce projet implémente l'exemple de déploiement sur Azure Cloud avec une application conteneurisée, comme demandé dans le TP.

## Structure du Projet

- `server.js` - Application Node.js avec compteur de visites
- `package.json` - Configuration de l'application Node.js
- `counter.json` - Fichier pour stocker le nombre de visites
- `Dockerfile` - Instructions pour conteneuriser l'application
- `.github/workflows/deploy-container.yml` - Workflow GitHub Actions pour le déploiement automatique

## Instructions d'Installation et Déploiement

### 1. Préparer le Dépôt GitHub

1. Créez un nouveau dépôt sur GitHub
2. Clonez le dépôt en local:
   ```
   git clone https://github.com/VOTRE-UTILISATEUR/VOTRE-REPO.git
   cd VOTRE-REPO
   ```
3. Copiez tous les fichiers du projet dans ce dossier

### 2. Configurer les Ressources Azure

Suivez les instructions dans le document "Azure Resources Setup Guide" pour:
- Créer un Azure Container Registry (ACR)
- Créer une Azure Web App pour conteneurs
- Configurer les accès et autorisations nécessaires

### 3. Configurer les Secrets GitHub

Dans les paramètres de votre dépôt GitHub, ajoutez ces secrets:
- `AZURE_CREDENTIALS`: Informations d'authentification Azure (JSON)
- `AZURE_WEBAPP_PUBLISH_PROFILE`: Profil de publication de l'App Service
- `ACR_LOGIN_SERVER`: URL du serveur de connexion à votre ACR
- `ACR_USERNAME`: Nom d'utilisateur de votre ACR
- `ACR_PASSWORD`: Mot de passe de votre ACR

### 4. Déployer l'Application

Poussez le code sur la branche main:
```
git add .
git commit -m "Initial commit for containerized Azure deployment"
git push -u origin main
```

Le workflow GitHub Actions se déclenchera automatiquement et déploiera l'application sur Azure.

### 5. Vérifier le Déploiement

1. Allez sur votre App Service dans le portail Azure
2. Cliquez sur l'URL pour accéder à votre application
3. Vérifiez que le compteur de visites fonctionne correctement

## Différences avec la Version Non-Conteneurisée

Cette version conteneurisée diffère de l'exemple du cours par:

1. **Utilisation de Docker**: L'application est emballée dans un conteneur Docker
2. **Stockage d'Images**: Utilisation d'Azure Container Registry pour stocker les images Docker
3. **Workflow GitHub Actions**: Configuration spécifique pour construire et déployer des conteneurs
4. **Configuration App Service**: Configuration en tant que "Web App for Containers" au lieu d'une App Service standard Node.js

## Ressources Utiles

- [Documentation Azure Container Registry](https://docs.microsoft.com/fr-fr/azure/container-registry/)
- [Documentation Azure App Service pour conteneurs](https://docs.microsoft.com/fr-fr/azure/app-service/configure-custom-container)
- [Documentation GitHub Actions](https://docs.github.com/fr/actions)