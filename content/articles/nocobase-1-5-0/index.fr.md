---
title: "NocoBase v1.5.0 officiellement publiée"
description: "Optimisations du noyau, import/export de données à grande échelle, gestion des e-mails, impression de modèles et autres fonctionnalités améliorent globalement les performances du système et l'expérience utilisateur."
---

## Optimisations principales

### Activer les liens dans les champs de texte sur une seule ligne

Le mode d'ouverture prend en charge le tiroir, la boîte de dialogue et la page.

![20250207212903](https://static-docs.nocobase.com/20250207212903.png)

### Le bloc d'association prend en charge les actions Associer/Dissocier

Vous pouvez désormais effectuer des actions d'association et de dissociation directement dans le bloc d'association.

![20250207211837](https://static-docs.nocobase.com/20250207211837.png)

### Débogage des workflows

Vous pouvez désormais déclencher directement des workflows pendant la configuration pour les déboguer.

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/20250207213343_rec_.mp4" type="video/mp4">
</video>

### Interaction mobile améliorée pour les composants de date

Expérience d'interaction améliorée pour les composants liés aux dates sur les appareils mobiles.

![0084553986f6b3de21ca62f22d09a91a.png](https://static-docs.nocobase.com/0084553986f6b3de21ca62f22d09a91a.png)

### Optimisations des performances du frontend

* Vitesse de chargement initial de l'écran optimisée.
* L'outil de construction du frontend a été changé pour **rspack**.
* Taille du bundle des fichiers d'entrée pour divers packages de plugins réduite.
* Performances de rendu améliorées pour les grands tableaux de données.
* Réduction des saccades lors des transitions de menu.
* Introduction de méthodes de chargement à la demande avec les nouvelles bibliothèques `lazy` et `useLazy`.

Voici une brève introduction à l'utilisation de `lazy` et `useLazy` :

```ts
import { lazy, useLazy } from '@nocobase/client';

// Exporter un seul composant :
const { RolesManagement } = lazy(() => import('./RolesManagement'), 'RolesManagement');

// Exporter plusieurs composants :
const { AuthLayout, SignInPage, SignUpPage } = lazy(() => import('./pages'), 'AuthLayout', 'SignInPage', 'SignUpPage');

// Exporter un composant par défaut :
const ThemeList = lazy(() => import('./components/ThemeList'));

// Retourner un hook :
const useReactToPrint = useLazy<typeof import('react-to-print').useReactToPrint>(
  () => import('react-to-print'),
  'useReactToPrint',
);
  
// Retourner une bibliothèque :
const parseExpression = useLazy<typeof import('cron-parser').parseExpression>(
  () => import('cron-parser'),
  'parseExpression',
);
```

---

## Nouveaux plugins

### Import Pro

Prend en charge les opérations d'importation asynchrones qui s'exécutent sur un thread séparé. Cette fonctionnalité permet l'importation de grands volumes de données avec des performances améliorées.

![20250119221221](https://static-docs.nocobase.com/20250119221221.png)

Référence : [Import Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Export Pro

Permet des opérations d'exportation asynchrones qui s'exécutent sur un thread séparé, prenant en charge les exportations de données à grande échelle ainsi que les exportations de pièces jointes.

![20250119221237](https://static-docs.nocobase.com/20250119221237.png)

Référence : [Export Pro](https://docs.nocobase.com/handbook/action-export-pro)

### Impression de modèles

Le plugin d'impression de modèles vous permet de modifier des fichiers modèles à l'aide de Word, Excel ou PowerPoint (prenant en charge les formats `.docx`, `.xlsx` et `.pptx`). En définissant des espaces réservés et des structures logiques dans le modèle, vous pouvez générer dynamiquement des fichiers dans des formats prédéterminés tels que `.docx`, `.xlsx`, `.pptx` et même `.pdf`. Cette fonctionnalité est largement applicable pour la création de divers documents métier, y compris les devis, les factures, les contrats, etc.

**Principales fonctionnalités**

* **Prise en charge multi-formats** : Compatible avec les modèles Word, Excel et PowerPoint pour répondre à divers besoins de génération de documents.
* **Remplissage dynamique des données** : Remplit automatiquement le contenu du document en fonction des espaces réservés et de la logique définis.
* **Gestion flexible des modèles** : Ajoutez, modifiez, supprimez et catégorisez facilement les modèles pour une meilleure maintenance et utilisation.
* **Syntaxe de modèle riche** : Prend en charge le remplacement de base, l'accès aux tableaux, les boucles, la sortie conditionnelle et d'autres syntaxes de modèle pour une génération de documents complexes.
* **Prise en charge des formatteurs** : Fournit des sorties conditionnelles, le formatage des dates, le formatage des nombres, etc., pour améliorer la clarté et le professionnalisme des documents.
* **Options de sortie efficaces** : Prend en charge la génération directe de PDF pour un partage et une impression faciles.

![20250119221258](https://static-docs.nocobase.com/20250119221258.png)

Référence : [Impression de modèles](https://docs.nocobase.com/handbook/action-template-print)

### Journal d'audit

Ce plugin enregistre et suit les activités des utilisateurs ainsi que les historiques des opérations sur les ressources dans le système.

![20250119221319](https://static-docs.nocobase.com/20250119221319.png)

Référence : [Journal d'audit](https://docs.nocobase.com/handbook/audit-logger)

### Workflow : Sous-processus

Cette fonctionnalité permet à un workflow d'en appeler un autre. Vous pouvez utiliser les variables du workflow actuel comme entrée pour le sous-processus, puis utiliser la sortie du sous-processus comme variables dans les nœuds suivants.

![20250119221334](https://static-docs.nocobase.com/20250119221334.png)

Référence : [Workflow : Sous-processus](https://docs.nocobase.com/handbook/workflow-subflow)

### Gestionnaire d'e-mails

Intégrez vos comptes e-mail Google ou Microsoft dans NocoBase pour envoyer, recevoir, visualiser et gérer des e-mails. De plus, les e-mails peuvent être intégrés directement dans les pages.

![20250119221346](https://static-docs.nocobase.com/20250119221346.png)

Référence : [Gestionnaire d'e-mails](https://docs.nocobase.com/handbook/email-manager/usage-admin)

### Stockage de fichiers : S3 (Pro)

Prend en charge les types de stockage de fichiers compatibles avec le protocole S3, y compris Amazon S3, Alibaba Cloud OSS, Tencent Cloud COS, MinIO, etc. Ce plugin prend également en charge les téléchargements directs de fichiers et l'accès privé.

![20250119221404](https://static-docs.nocobase.com/20250119221404.png)

Référence : [Stockage de fichiers : S3(Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
