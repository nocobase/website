---
title: "NocoBase 0.10 : Nouvelles fonctionnalités du deuxième trimestre"
description: "NocoBase 0.10 améliore le composant de champ relationnel en prenant en charge plusieurs commutateurs de composants et ajoute une fonctionnalité de création rapide de données relationnelles avec deux modes de création rapide et d'autres mises à jour."
---

## Nouveautés du deuxième trimestre

- Améliorations du composant de champ d'association, prise en charge du changement de plusieurs composants
  - Sélection
  - Sélecteur d'enregistrement
  - Sous-formulaire/Sous-détails
  - Sous-tableau
  - Gestionnaire de fichiers
  - Titre (lecture seule)
- Création rapide de données relationnelles, prend en charge deux modes de création rapide
  - Ajouter dans le menu déroulant pour créer rapidement un nouvel enregistrement basé sur le champ de titre
  - Ajouter dans une fenêtre contextuelle pour configurer des formulaires d'ajout complexes
- Action de duplication, prend en charge deux modes
  - Duplication directe
  - Copier dans le formulaire et continuer à remplir
- Modèles de données de formulaire
- Portée des données de filtre prenant en charge les variables
- Bloc de liste
- Bloc de carte en grille
- Plugin client mobile
- Plugin d'authentification utilisateur, prise en charge de différentes méthodes d'authentification
  - Email/Mot de passe
  - SMS
  - OIDC
  - SAML
- Nœuds de workflow
  - Mise à niveau du nœud manuel, prise en charge de l'ajout et de la modification à partir de collections existantes
  - Nœud de boucle
  - Nœud d'agrégation
- Gestionnaire de fichiers
  - Fournir un modèle de collection de fichiers
  - Fournir un composant de gestionnaire de fichiers

## Mise à niveau des applications

### Mise à niveau pour Docker compose

Aucun changement, mise à niveau de référence [Mise à niveau pour Docker compose](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose)

### Mise à niveau pour le code source Git

v0.10 a une mise à niveau majeure des dépendances, donc pour éviter les erreurs lors de la mise à niveau du code source, vous devez supprimer les répertoires suivants avant la mise à niveau

```bash
# Supprimer le cache .umi
yarn rimraf -rf "./**/{.umi,.umi-production}"
# Supprimer les fichiers compilés
yarn rimraf -rf "./packages/*/*/{lib,esm,es,dist,node_modules}"
# Supprimer les dépendances
yarn rimraf -rf node_modules
```

Voir [Mise à niveau pour le code source Git](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone) pour plus de détails

### Mise à niveau pour create-nocobase-app

Il est recommandé que `yarn create` retélécharge la nouvelle version et modifie la configuration `.env`, pour plus de détails, reportez-vous au [guide de mise à niveau de version majeure](https://docs.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app#major-upgrade)

## Changements à venir obsolètes et potentiellement incompatibles

### Composant de champ de sous-tableau

Non compatible avec la nouvelle version, les champs de bloc doivent être supprimés et réaffectés (réaffectation de l'interface utilisateur uniquement)

### Modifications de l'API de téléchargement de pièces jointes

En plus de la table de pièces jointes intégrée, les utilisateurs peuvent également personnaliser la collection de fichiers, l'API de téléchargement pour les pièces jointes a été modifiée de `/api/attachments:upload` à `/api/<file-collection>:create`, le téléchargement est obsolète, toujours compatible avec v0.10 mais sera supprimé.

### Modifications de l'API signin/signup

Le noyau nocobase fournit un [module d'authentification](https://github.com/nocobase/nocobase/tree/main/packages/plugins/auth) plus puissant avec les modifications suivantes des API de connexion, d'inscription, de vérification et de déconnexion des utilisateurs :

```bash
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

Remarque : L'interface utilisateurs ci-dessus, qui est obsolète, est toujours compatible avec v0.10, mais sera supprimée dans la prochaine version majeure.

### Ajustements du filtrage des champs de date

Si un filtrage lié à la date a été précédemment configuré dans la plage de données, il doit être supprimé et reconfiguré.

## Guide de mise à niveau des plugins tiers

### Mise à niveau des dépendances

Les dépendances incluent principalement

- `react` mise à niveau vers v18
- `react-dom` mise à niveau vers v18
- `react-router` mise à niveau vers v6.11
- `umi` mise à niveau vers v4
- `dumi` mise à niveau vers v2

Les dépendances `package.json` doivent être modifiées vers la dernière version, par exemple :

```diff
{
  "devDependencies": {
+   "react": "^18".
+   "react-dom": "^18".
+   "react-router-dom": "^6.11.2".
-   "react": "^17".
-   "react-dom": "^17".
-   "react-router-dom": "^5".
  }
}
```

### Modifications de code

Étant donné que react-router a été mis à niveau, le code associé doit également être modifié, les principales modifications incluent

### Composant de mise en page

Le composant de mise en page doit utiliser `<Outlet />` au lieu de `props.children`.

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
-      { props.children }
+      <Outlet />
    </div>
  );
}
```

si vous utilisez `React.cloneElement` pour rendre le composant de route, vous devez le modifier comme ceci :

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function RouteComponent(props) {
  return (
    <div>
-      { React.cloneElement(props.children, { someProp: 'p1' }) }
+      <Outlet context={{ someProp: 'p1' }} />
    </div>
  );
}
```

Modifiez le composant de route pour obtenir la valeur de `useOutletContext`

```diff
import React from 'react';
+ import { useOutletContext } from 'react-router-dom';

- export function Comp(props){
+ export function Comp() {
+   const props = useOutletContext();
  return props.someProp;
}
```

### Redirection

`<Redirect>` est changé en `<Navigate replace />`.

```diff
- <Redirect to="about" />
+ <Navigate to="about" replace />
```

### useHistory

`useNavigate` est changé en `useHistory`.

```diff
- import { useHistory } from 'react-router-dom';
+ import { useNavigate} from 'react-router-dom';

- const history = useHistory();
+ const navigate = useNavigate();

- history.push('/about')
+ navigate('/about')

- history.replace('/about')
+ navigate('/about', { replace: true })
```

### useLocation

`useLocation<type>()` est changé en `useLocation`.

```diff
- const location= useLocation<type>();
+ const location= useLocation();
```

`const { query } = useLocation()` est changé en `useSearchParams()`.

```diff
- const location = useLocation();
- const query = location.query;
- const name = query.name;
+ const [searchParams, setSearchParams] = useSearchParams();
+ searchParams.get('name');
```

### path

Tous les chemins de route suivants sont valides dans v6 :

```
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

Les chemins de route de style RegExp suivants ne sont pas valides dans v6 :

```
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

Pour plus de modifications d'API, veuillez vous référer à [react-router@6](https://reactrouter.com/en/main/upgrading/v5).
