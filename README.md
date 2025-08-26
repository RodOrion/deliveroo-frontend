# 🍔 Deliveroo Clone - Page Restaurant

Une réplique fidèle d'une page restaurant Deliveroo, développée avec React.js dans le cadre d'un projet d'apprentissage.

[![Netlify Status](https://api.netlify.com/api/v1/badges/80e71267-9b35-4636-972f-22f0ac237a45/deploy-status)](https://app.netlify.com/projects/deliveroofront/deploys)

## 🚀 Démo en ligne

👉 **[Voir le projet en ligne](https://deliveroofront.netlify.app/)**

## 📸 Aperçu

![Deliveroo Clone Preview](https://via.placeholder.com/800x400/00CCBC/FFFFFF?text=Deliveroo+Clone+Screenshot)

## ✨ Fonctionnalités

- 🎨 **Interface fidèle** : Reproduction pixel-perfect du design Deliveroo
- 📱 **Responsive Design** : Optimisé pour mobile, tablette et desktop
- 🛒 **Panier dynamique** : Ajout/suppression d'articles en temps réel
- 🔢 **Gestion des quantités** : Incrémentation et décrémentation des produits
- 💰 **Calcul automatique** : Total et sous-totaux mis à jour instantanément
- 🏪 **Données multiples** : Basculement entre différentes sources de données
- ⚡ **Performance optimisée** : Chargement rapide et interactions fluides

## 🛠️ Technologies utilisées

- **Frontend :** React.js (Hooks, useState, useEffect)
- **HTTP Client :** Axios
- **Styling :** CSS3 personnalisé
- **Déploiement :** Netlify
- **API :** Backend Node.js personnalisé

## 📦 Installation locale

```bash
# Cloner le projet
git clone https://github.com/RodOrion/deliveroo-clone.git

# Naviguer dans le dossier
cd deliveroo-clone

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
```

Le projet sera accessible sur `http://localhost:3000`

## 🏗️ Structure du projet

```
src/
├── components/
│   ├── Header.js          # En-tête du restaurant
│   ├── Section.js         # Sections de menu
│   ├── Meal.js            # Item produit
│   └── Aside-panier.js    # Panier latéral
│   └── ItemPanier.js      # Item panier
├── assets/
│   └── deliveroo-logo.svg
├── App.js                 # Composant principal
├── App.css               # Styles globaux
└── index.js              # Point d'entrée
```

## 🎯 Fonctionnalités détaillées

### Panier intelligent
- Ajout d'articles avec gestion automatique des doublons
- Modification des quantités avec boutons + / -
- Suppression d'articles du panier
- Calcul en temps réel du total

### Interface utilisateur
- Design responsive qui s'adapte à tous les écrans
- Animations fluides lors des interactions
- Feedback visuel immédiat pour toutes les actions

### Gestion des données
- Intégration avec une API backend personnalisée
- Gestion des états de chargement
- Gestion d'erreurs robuste

## 🎨 Captures d'écran

<details>
<summary>Voir plus d'images</summary>

### Page d'accueil
![Homepage](https://via.placeholder.com/600x300/00CCBC/FFFFFF?text=Homepage)

### Menu du restaurant
![Menu](https://via.placeholder.com/600x300/00CCBC/FFFFFF?text=Menu+Section)

### Panier
![Cart](https://via.placeholder.com/600x300/00CCBC/FFFFFF?text=Shopping+Cart)

</details>

## 🚧 Améliorations futures

- [ ] Authentification utilisateur
- [ ] Système de favoris
- [ ] Filtres par catégorie
- [ ] Recherche de plats
- [ ] Géolocalisation
- [ ] Paiement en ligne
- [ ] Historique des commandes

## 👨‍💻 Développeur

**Rodolphe** - Étudiant à [Le Reacteur](https://www.lereacteur.io/)

- 🐙 GitHub: [@RodOrion](https://github.com/RodOrion)
- 💼 LinkedIn: [Votre profil](https://www.linkedin.com/in/rodolpheturmel/)
- 📧 Email: rodolphe.of@gmail.com

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à :

1. 🍴 Fork le projet
2. 🌿 Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. 📝 Commit vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. 📤 Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. 🔃 Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

⭐ **N'hésitez pas à donner une étoile si ce projet vous a plu !**

---

<div align="center">
  <p>Fait avec ❤️ et beaucoup de ☕</p>
  <p>
    <a href="https://deliveroofront.netlify.app/">🌐 Demo</a> •
    <a href="#installation-locale">💻 Installation</a> •
    <a href="#fonctionnalités">✨ Features</a>
  </p>
</div>