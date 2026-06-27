---
title: "Simplifiez le processus d'ajout et de mise à jour des plugins"
description: "Découvrez comment la dernière mise à jour de NocoBase simplifie la gestion des plugins, facilitant l'installation et les mises à jour."
---

Pour améliorer l'expérience de gestion des plugins, nous avons récemment apporté des mises à jour importantes au module de gestionnaire de plugins. Les principales améliorations concernent le processus d'ajout et de mise à jour des plugins. Veuillez noter que ces fonctionnalités ne sont disponibles qu'à partir de la version 1.4.0-alpha et supérieures. La branche `main` actuelle est la v1.3. Pour découvrir ces nouvelles fonctionnalités, veuillez passer à la branche `next` (v1.4).

Les mises à jour spécifiques de cette version [v1.4.0-alpha.20240914235554](https://github.com/nocobase/nocobase/releases/tag/v1.4.0-alpha.20240914235554) sont les suivantes :

## La liste des plugins se lit désormais directement à partir des plugins locaux

![4f331f688f18c4c3458b2dff15a9f208.png](https://static-docs.nocobase.com/4f331f688f18c4c3458b2dff15a9f208.png)

La liste des plugins ne se lit plus dans la table des plugins de la base de données, mais directement à partir des variables d'environnement ou des répertoires suivants :

* Variables d'environnement
  * `APPEND_PRESET_BUILT_IN_PLUGINS`
  * `APPEND_PRESET_LOCAL_PLUGINS`
* Répertoires de plugins
  * `packages/plugins` : Plugins en cours de développement, doivent inclure le code source.
  * `storage/plugins` : Plugins indépendants, doivent inclure le plugin compilé.

Les plugins sont organisés en tant que packages npm avec la structure de répertoire suivante :

```bash
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello3/
      |- /plugin-hello4/
    |- /my-nocobase-plugin-hello3/
    |- /my-nocobase-plugin-hello4/
```

## Extraire le package du plugin

Extrayez directement le package du plugin dans le répertoire spécifié, et l'interface du gestionnaire de plugins le détectera automatiquement. Par exemple :

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.3.15-beta.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

Cette commande garantit que le plugin est extrait dans `/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas` sans inclure le répertoire `package`. La structure de répertoire correcte doit être :

```bash
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.js
./plugin-auth-cas/dist/server/auth.js
./plugin-auth-cas/client.js
./plugin-auth-cas/dist/constants.js
./plugin-auth-cas/dist/externalVersion.js
./plugin-auth-cas/dist/client/index.js
./plugin-auth-cas/dist/index.js
./plugin-auth-cas/dist/server/index.js
./plugin-auth-cas/dist/server/actions/login.js
./plugin-auth-cas/dist/server/plugin.js
./plugin-auth-cas/server.js
./plugin-auth-cas/dist/server/actions/service.js
./plugin-auth-cas/dist/locale/en-US.json
./plugin-auth-cas/dist/locale/ko_KR.json
./plugin-auth-cas/package.json
./plugin-auth-cas/dist/locale/zh-CN.json
./plugin-auth-cas/README.md
./plugin-auth-cas/README.zh-CN.md
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.d.ts
./plugin-auth-cas/dist/server/auth.d.ts
./plugin-auth-cas/client.d.ts
./plugin-auth-cas/dist/constants.d.ts
./plugin-auth-cas/dist/client/index.d.ts
./plugin-auth-cas/dist/client/locale/index.d.ts
./plugin-auth-cas/dist/index.d.ts
./plugin-auth-cas/dist/server/index.d.ts
./plugin-auth-cas/dist/server/actions/login.d.ts
./plugin-auth-cas/dist/client/Options.d.ts
./plugin-auth-cas/dist/server/plugin.d.ts
./plugin-auth-cas/server.d.ts
./plugin-auth-cas/dist/server/actions/service.d.ts
./plugin-auth-cas/dist/client/SigninPage.d.ts
./plugin-auth-cas/LICENSE.txt
```

## Fusionner le processus d'ajout et de mise à jour des plugins.

Dans l'interface, utilisez le bouton "Ajouter et mettre à jour" dans le coin supérieur droit pour ajouter ou mettre à jour.

![b5a4fd82955807dc18060772c6689f84.png](https://static-docs.nocobase.com/b5a4fd82955807dc18060772c6689f84.png)

Vous pouvez également utiliser la commande `pm add` pour ajouter ou mettre à jour des plugins. Le processus est le suivant :

![01f3658240cd23353f25833453687df3.png](https://static-docs.nocobase.com/01f3658240cd23353f25833453687df3.png)

## Processus d'installation des plugins commerciaux

Pas besoin de télécharger les plugins un par un ; configurez simplement les variables d'environnement suivantes :

```Bash
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=votre-nom-utilisateur   # nom d'utilisateur de la plateforme de service
NOCOBASE_PKG_PASSWORD=votre-mot-de-passe   # mot de passe de la plateforme de service
```

Lors de l'installation ou de la mise à niveau de l'application, les plugins seront automatiquement téléchargés et mis à jour (version détectée automatiquement).

```ts
yarn nocobase install
yarn nocobase upgrade
```

Par exemple, le journal de la commande de mise à niveau :

```Bash
nocobase git:(main) yarn nocobase upgrade
$ nocobase upgrade
WAIT: Compilation TypeScript...
$ nocobase pkg download-pro
Download success: @nocobase/plugin-custom-brand@1.3.22-beta
Download success: @nocobase/plugin-verdaccio@1.3.22-beta
Download success: @nocobase/plugin-workflow-response-message@1.3.22-beta
Download success: @nocobase/plugin-workflow-request-interceptor@1.3.22-beta
Download success: @nocobase/plugin-workflow-json-query@1.3.22-beta
Download success: @nocobase/plugin-workflow-approval@1.3.22-beta
Download success: @nocobase/plugin-telemetry-prometheus@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-postgres@1.3.22-beta
Download success: @nocobase/plugin-embed@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mysql@1.3.22-beta
Download success: @nocobase/plugin-workflow-variable@1.3.22-beta
Download success: @nocobase/plugin-collection-fdw@1.3.22-beta
Download success: @nocobase/plugin-demo-platform@1.3.22-beta
Download success: @nocobase/plugin-departments@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mariadb@1.3.22-beta
Download success: @nocobase/plugin-auth-cas@1.3.22-beta
Download success: @nocobase/plugin-auth-saml@1.3.22-beta
Download success: @nocobase/plugin-auth-oidc@1.3.22-beta
Download success: @nocobase/plugin-comments@1.3.22-beta
Download success: @nocobase/plugin-workflow-custom-action-trigger@1.3.22-beta
Download success: @nocobase/plugin-auth-ldap@1.3.22-beta
Download success: @nocobase/plugin-block-tree@1.3.22-beta
Download success: @nocobase/plugin-auth-dingtalk@1.3.22-beta
Download success: @nocobase/plugin-data-source-rest-api@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mssql@1.3.22-beta
```

Pour les serveurs intranet, vous pouvez télécharger le dossier `storage/plugins` local sur le serveur, puis exécuter la commande d'installation ou de mise à niveau de NocoBase.

```bash
scp -r /nocobase1/storage/plugins user2@ip2:/nocobase2/storage/plugins

yarn nocobase install
# ou
yarn nocobase upgrade
```

## Supprimer un plugin

Étant donné que la liste des plugins ne se lit plus dans la table des plugins de la base de données mais directement à partir des plugins locaux, supprimer un plugin revient simplement à supprimer le dossier du plugin. En d'autres termes, supprimer le dossier du plugin supprime effectivement le plugin.
