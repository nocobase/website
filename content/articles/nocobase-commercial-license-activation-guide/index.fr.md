---
title: "Guide d'activation de la licence commerciale NocoBase"
description: "Un guide pour activer votre licence commerciale NocoBase. Apprenez à activer rapidement et en toute sécurité vos fonctionnalités commerciales en utilisant la nouvelle méthode « ID d'instance » et « Clé de licence »."
---

## **Guide d'activation de la licence commerciale NocoBase**

Pour améliorer l'expérience utilisateur et renforcer la sécurité, nous avons entièrement mis à niveau notre processus de licence commerciale et d'activation. La nouvelle méthode d'autorisation remplace l'ancienne approche qui consistait à saisir un nom d'utilisateur et un mot de passe dans les fichiers de configuration, en introduisant un mécanisme basé sur un « ID d'instance » et une « clé de licence ».

Les principaux avantages de cette nouvelle solution sont les suivants :

* **Sécurité renforcée** : Il n'est plus nécessaire de stocker vos informations de compte en texte clair, ce qui réduit le risque de fuite d'informations sensibles.
* **Processus simplifié** : L'autorisation est directement liée à votre instance NocoBase, rendant la gestion et la mise à jour des licences plus intuitives et pratiques.
* **Flexibilité accrue** : Lorsque votre environnement de déploiement change, vous pouvez facilement régénérer l'autorisation pour vous adapter rapidement au nouvel environnement.
* **Protection de la licence** : Grâce à la gestion des licences en backend et à la surveillance de l'état, vous pouvez surveiller l'utilisation réelle de votre licence, détecter et traiter rapidement les applications non autorisées, et prévenir toute utilisation abusive de la licence commerciale.

Ce guide vous accompagnera tout au long du nouveau processus d'activation de la licence commerciale NocoBase.

<image src="https://static-docs.nocobase.com/undefined20250701160935956.png" >

---

## **Guide étape par étape pour l'activation de la licence**

Avant de commencer, assurez-vous d'avoir installé et exécuté avec succès l'édition communautaire de NocoBase.

### **Étape 1 : Accéder à la page de licence et copier l'ID d'instance**

1. Dans votre application NocoBase locale, accédez à la page `Paramètres système` -> `Paramètres de licence`.
2. Sur cette page, vous verrez une chaîne **ID d'instance**, qui est l'identifiant unique de votre environnement d'exécution actuel. Cliquez sur l'icône de copie à sa droite.

![img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g](https://static-docs.nocobase.com/img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g.jpg)

### **Étape 2 : Créer une application sur la plateforme de service et associer l'ID d'instance**

1. Connectez-vous à la plateforme de service NocoBase, cliquez sur le bouton « Ajouter » sur la page de gestion des « Applications ».
2. Dans le formulaire contextuel, remplissez les informations de votre application et collez l'`ID d'instance` copié à l'étape précédente dans le champ de saisie `ID d'instance`, puis soumettez.

![20250707233019](https://static-docs.nocobase.com/20250707233019.png)

### **Étape 3 : Obtenir la clé de licence**

1. Après la création réussie de l'application, revenez à la liste des licences, trouvez l'entrée correspondante et cliquez sur le bouton « Voir la licence » dans la colonne des actions.
2. Dans la fenêtre contextuelle des détails de la licence, cliquez sur le bouton « Copier » pour obtenir la **clé de licence** qui correspond à votre instance.
   ![img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g](https://static-docs.nocobase.com/img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g.jpg)

### **Étape 4 : Configurer la clé de licence dans NocoBase**

1. Revenez à la page `Paramètres de licence` de votre NocoBase local.
2. Collez la `clé de licence` que vous venez de copier dans le champ de saisie `Clé de licence` et cliquez sur le bouton « Soumettre ».
3. Après un enregistrement réussi, le système affichera « Clé de licence enregistrée avec succès, veuillez redémarrer le serveur », indiquant que la clé de licence a été configurée avec succès et qu'elle attend le redémarrage.

![img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g](https://static-docs.nocobase.com/img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g.jpg)

### **Étape 5 : Terminer l'activation et télécharger la version commerciale et les plugins commerciaux**

Redémarrez votre service NocoBase pour appliquer la licence et télécharger automatiquement la version commerciale et les plugins commerciaux.

* **Pour un déploiement Docker** : Exécutez la commande de redémarrage `docker compose restart app`.
* **Pour un déploiement par code source ou `create-nocobase-app`** : Exécutez la commande `yarn nocobase pkg download-pro` dans le répertoire racine du projet.

Une fois le service redémarré et les plugins téléchargés avec succès, votre licence commerciale est activée. Si vous devez changer de licence, vous pouvez revenir à la page des paramètres de licence, cliquer sur le bouton « Changer la clé » et répéter le processus ci-dessus.

---

## **Comment afficher les informations de licence**

Après l'activation de la licence, vous pouvez cliquer à tout moment sur l'icône d'informations de licence dans le coin supérieur droit de l'interface NocoBase pour voir l'état détaillé de la licence actuelle, y compris la version de la licence, la date d'expiration, l'état de correspondance du domaine et la liste des plugins autorisés.

![20250707234415](https://static-docs.nocobase.com/20250707234415.png)

---

## Liste de vérification rapide pour le déploiement et la licence

En cas de problème, vous pouvez consulter cette liste de vérification pour un dépannage rapide :

- [ ]  **Étape 1 : Obtenir l'ID d'instance**
  - [ ]  L'édition communautaire / l'édition sans licence de NocoBase fonctionne correctement.
  - [ ]  L'`ID d'instance` a été complètement copié depuis la page `Paramètres de licence`.
- [ ]  **Étape 2 : Générer la clé de licence**
  - [ ]  L'application a été créée sur la plateforme de service.
  - [ ]  L'`ID d'instance` collé lors de la création de l'application est le plus récent et correct.
  - [ ]  La `clé de licence` a été complètement copiée depuis « Voir la licence ».
- [ ]  **Étape 3 : Activation**
  - [ ]  La `clé de licence` a été recollée dans NocoBase et enregistrée avec succès.
  - [ ]  **Le conteneur a été redémarré ou la commande `download-pro` a été exécutée selon la méthode de déploiement.** (De nombreux utilisateurs oublient cette étape !)
- [ ]  **Vérification**
  - [ ]  La fenêtre contextuelle des informations de licence indique un état « Actif ».

## Foire aux questions (FAQ)

Lors de l'installation ou de l'utilisation, vous pouvez rencontrer les invites suivantes. Veuillez suivre les solutions correspondantes :

### 1. `License key mismatch` - La clé de licence ne correspond pas à l'environnement

<image src="https://static-docs.nocobase.com/undefined20250701193351673.png" />

[Q] Pourquoi est-ce que j'obtiens `License key mismatch` après la configuration ?

[R] Votre environnement d'exécution a peut-être changé, ce qui a entraîné la mise à jour de l'« ID d'instance », mais votre application contient toujours l'ancienne « clé de licence ».
**Solution** : Veuillez suivre strictement l'**étape 1** de ce guide pour obtenir le dernier `ID d'instance` de votre **environnement actuel**, puis terminez le processus suivant pour générer une nouvelle « clé ».

### 2. `Invalid license key` - La clé de licence a expiré

<image src="https://static-docs.nocobase.com/undefined20250701193558012.png" />

[Q] Que signifie `Invalid license key` ?

[R] Votre `clé de licence` a peut-être expiré ou a été marquée comme invalide par la plateforme pour d'autres raisons.
**Solution** : Veuillez nous contacter ou vérifier l'état de votre licence sur la plateforme de service. Si nécessaire, régénérez la `clé de licence` et configurez-la.

### 3. `Invalid license key format` - Erreur de format de la clé de licence

<image src="https://static-docs.nocobase.com/undefined20250701193148501.png" />

[Q] Que faire en cas d'erreur `Invalid license key format` ?

[R] La `clé de licence` que vous avez collée est incomplète ou a un format incorrect, ce qui empêche le système de l'analyser.
**Solution** : Veuillez retourner sur la plateforme de service, assurez-vous d'avoir complètement copié la `clé de licence`, puis recollez-la et enregistrez-la.

### 4. La boîte de dialogue d'informations de licence apparaît de force lors de l'accès au système

<image src="https://static-docs.nocobase.com/undefined20250625164238000.png" width="400" />

[Q] Pourquoi la boîte de dialogue d'informations de licence apparaît-elle toujours ?

[R] Cette fenêtre contextuelle indique généralement un échec de vérification de la licence. Les raisons possibles incluent :

- La `clé de licence` est corrompue ou ne correspond pas à l'environnement local
- La licence a expiré ou est invalide
- La `clé de licence` ne correspond pas à la version des plugins commerciaux que vous exécutez

**Solution** : La solution la plus directe est de **réexécuter complètement le processus de configuration de la licence** : obtenez le dernier `ID d'instance`, générez une nouvelle `clé de licence` et définissez-la dans le système local.

### 5. Problèmes liés à la migration de l'environnement

[Q] J'ai migré mon serveur/base de données, et les plugins commerciaux ont cessé de fonctionner. Que dois-je faire ?

[R] C'est le même problème que ci-dessus. Le serveur ou la base de données sont des informations clés qui constituent la « carte d'identité (`ID d'instance`) », et lorsqu'ils changent, l'`ID d'instance` change.

**Solution** : Comme ci-dessus, obtenez le nouvel `ID d'instance`, générez une nouvelle `clé de licence` et réactivez-la. L'ensemble du processus est comparable à la mise à jour de l'adresse sur votre carte d'identité après un déménagement.

### 6. Le plugin ne prend pas effet

[Q] J'ai redémarré, pourquoi les plugins commerciaux ne fonctionnent-ils toujours pas ?

[R] Si vous avez confirmé que la configuration de la `clé de licence` est correcte, essayez les étapes de dépannage suivantes :

1. **Vérifiez le réseau** : Assurez-vous que votre serveur peut accéder au dépôt npm de NocoBase.
2. **Vérifiez les journaux** : Consultez les journaux de démarrage de NocoBase pour détecter les échecs de téléchargement de plugins ou les erreurs de vérification de licence.
3. **Exécution manuelle** : Si vous utilisez un déploiement source, exécutez à nouveau manuellement la commande `yarn nocobase pkg download-pro` et observez la sortie de la ligne de commande.

### 7. Les plugins commerciaux n'apparaissent pas après activation sur un système en cours d'exécution ?

**[Q]** J'ai d'abord démarré le système NocoBase, puis j'ai saisi la clé de licence dans les paramètres. L'activation a réussi, alors pourquoi les plugins commerciaux n'apparaissent-ils pas ?

**[R]** C'est un comportement attendu et une question très courante. NocoBase est conçu pour vérifier la licence et charger les plugins correspondants **au démarrage du service**. Si vous avez terminé l'activation alors que le système était déjà en cours d'exécution, vous devez **redémarrer le service NocoBase** pour déclencher le téléchargement et l'activation des plugins commerciaux.

En termes simples, la licence est comme un « laissez-passer » pour NocoBase, mais il doit « repasser la porte » (redémarrer) pour vérifier et utiliser ce laissez-passer.

Veuillez effectuer l'opération de redémarrage selon votre méthode de déploiement :

* **Pour un déploiement Docker** : Exécutez la commande de redémarrage `docker compose restart app`.
* **Pour un déploiement par code source ou `create-nocobase-app`** : Tout d'abord, arrêtez le service en cours d'exécution dans votre terminal (généralement en appuyant sur `Ctrl+C`), puis exécutez à nouveau la commande de démarrage, par exemple `yarn start`.

### 8. Comparaison entre les anciennes et nouvelles méthodes d'autorisation

[Q] En quoi ce processus est-il différent de l'ancienne méthode nom d'utilisateur/mot de passe ?

[R] L'ancienne méthode exposait votre mot de passe de compte directement dans l'environnement, ce qui n'était pas assez sécurisé. Le nouveau système de `clé de licence` présente plusieurs avantages :

1. **Plus sécurisé** : Vous n'avez pas besoin d'exposer votre mot de passe de compte principal, vous utilisez uniquement des clés liées à des environnements spécifiques.
2. **Plus flexible** : Vous pouvez générer différentes `clés de licence` pour différents clients ou projets, ce qui facilite la gestion.
3. **Plus clair** : Les informations de licence sont claires en un coup d'œil, tous les détails étant enregistrés sur la plateforme de service.
