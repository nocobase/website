---
title: "Développer un plugin pour envoyer des messages WhatsApp dans NocoBase"
description: "L'objectif de cet article est de montrer les étapes pour créer un plugin dans NocoBase afin de répondre à des besoins spécifiques."
---

📝 **Note : Cet article a été mis à jour pour la dernière fois le 23 janvier 2026. Nous mettons régulièrement à jour les informations pour vous garantir les dernières avancées ! 😊**

Ce blog a été produit par Leandro Martins et a été initialement publié sur [Développer un plugin pour envoyer des messages WhatsApp dans NocoBase](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase).

L'objectif de cet article est de démontrer les étapes de création d'un plugin dans NocoBase pour répondre à des besoins spécifiques. Nous aborderons la conception architecturale, la création de la structure de base, l'activation du plugin, la définition et la création de collections, la création d'un point de terminaison, la construction d'une interface de configuration, l'intégration avec les workflows et l'exportation du plugin.

Pour cet article, nous utiliserons les technologies suivantes : NocoBase, PostgreSQL et Docker. Ces outils doivent déjà être configurés. Pour les instructions d'installation, reportez-vous à un guide séparé que j'ai rédigé [ici](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase).

---

💬 Hé, vous lisez le blog NocoBase. NocoBase est la plateforme de développement no-code/low-code basée sur l'IA la plus extensible pour créer des applications d'entreprise, des outils internes et toutes sortes de systèmes. Elle est entièrement auto-hébergée, basée sur des plugins et conviviale pour les développeurs. → [Découvrez NocoBase sur GitHub](https://github.com/nocobase/nocobase)

---

## Architecture du plugin

![Architecture du plugin.png](https://static-docs.nocobase.com/dfcb0082a99b45aa4334c8460708a50b.png)

## Création de la structure du plugin

Pour créer le plugin, exécutez simplement la commande ci-dessous. Vous trouverez plus de détails sur la structure du plugin, le code initial et les commandes dans la [documentation](https://docs.nocobase.com/development/your-fisrt-plugin).

```
yarn pm create @my-project/plugin-whatsapp
```

Une fois créé, les fichiers générés se trouveront dans le dossier `packages` sous le nom défini du plugin, comme illustré dans l'image ci-dessous. Pour mieux comprendre la structure des dossiers, vous pouvez vous référer au manuel [ici](https://docs.nocobase.com/development/app-ds).

![nom défini du plugin.png](https://static-docs.nocobase.com/c63fb5375b27a5c2520437df9bfbb253.png)

## Activation du plugin

Pour activer le plugin, vous pouvez soit aller sur l'écran des plugins et l'activer à l'aide du bouton à bascule, comme illustré dans l'image ci-dessous, soit exécuter la commande ci-dessous.

```
yarn pm enable @my-project/plugin-hello
```

![Activation du plugin.png](https://static-docs.nocobase.com/12c6a36ffb3acdddd4e95a415d19460a.png)

## Création de collections

Les collections sont essentielles car elles définissent la structure des données stockées dans les tables de votre base de données. Pour cet exemple, j'ai créé deux collections, comme décrit ci-dessous.

1. **ProvideConfig**
   * **Clé API** : Clé API de Meta pour accéder à l'API WhatsApp
   * **URL** : URL de l'API
   * **Téléphone expéditeur** : Numéro de téléphone WhatsApp Business
2. **MessageQueue**
   * **Contenu** : Contenu du message
   * **Statut** : En attente ou Terminé

Dans NocoBase, les collections se trouvent dans le dossier `/src/server/collections/`. La structure de base est présentée ci-dessous. Pour plus de détails, reportez-vous à la documentation [ici](https://docs.nocobase.com/development/server/collections).

```
##Fichier : ProvideConfig
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'ProvideConfig',
  fields: [
    { type: 'string', name: 'api_key' },
    { type: 'string', name: 'url' },
    { type: 'string', name: 'cell_phone_from' },
  ],
},
);

##Fichier : MessageQueue
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'MessageQueue',
  fields: [
    { type: 'string', name: 'content' },
    { type: 'string', name: 'status' }
  ],
},
);
```

## Création de points de terminaison

Les points de terminaison permettent aux systèmes externes d'interagir avec les actions de votre application, facilitant ainsi l'intégration entre eux. Dans ce cas, nous allons créer un point de terminaison pour planifier une exécution qui appelle de manière asynchrone l'API WhatsApp pour envoyer un message.

Pour créer le point de terminaison, vous pouvez utiliser le fichier `/src/server/plugin.ts` et ajouter le code dans la méthode `load`, comme illustré dans l'exemple ci-dessous. Dans l'ACL (Access Control List), vous définissez les permissions pour le point de terminaison. En utilisant le `resourceManager`, vous enregistrez le point de terminaison avec sa méthode. Une fois configuré, le point de terminaison sera disponible à l'adresse : [`http://localhost:13001/api/whatsapp:sendMessage`](http://localhost:13001/api/whatsapp:sendMessage)

```
import { Plugin } from '@nocobase/server';

export class PluginHelloServer extends Plugin {

  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    this.app.acl.allow('whatsapp', '*', 'public');

    this.app.resourceManager.define({
      name: 'whatsapp',
      actions: {
        async sendMessage(ctx, next) {

          //Enregistrer le message dans la file d'attente avec le statut : en attente

          //Récupérer les paramètres de l'API WhatsApp dans la base de données ;

          //Essayer d'envoyer le message WhatsApp via l'API

          // Si OK, mettre à jour le statut : terminé Sinon : mettre à jour le statut : erreur
        }
      }
    });

  }

...
```

## **Création de l'interface de configuration**

NocoBase vous permet de créer des interfaces en utilisant React et Ant Design. Dans ce cas, je vais créer une interface dans la zone des paramètres du plugin. Cette interface permettra de définir les paramètres de l'API WhatsApp et de visualiser les messages qui ont été envoyés ainsi que leurs statuts, comme illustré dans les images ci-dessous.

![Création de l'interface de configuration.png](https://static-docs.nocobase.com/e52ce1228c1d80069b3a415f744eefb9.png)

Dans le dossier `/src/client`, vous pouvez créer vos interfaces en utilisant React et Ant Design. Le code ci-dessous donne une idée de la structure simple nécessaire pour créer les écrans montrés dans les images. Pour plus de détails, vous pouvez consulter ce lien, où vous trouverez des informations sur la création de menus, d'écrans et de routes.

```

##Fichier : index.tsx
import { Plugin } from '@nocobase/client';
import { Alert, Button, Form, Input, Table, Tabs, TabsProps } from 'antd';
import React, { useState } from 'react';

/**
 *
 */
export class PluginWhatsappClient extends Plugin {

  async afterAdd() {
    // await this.app.pm.add()
  }

  async beforeLoad() {
  }

  async load() {

    // this.app.addComponents({})
    // this.app.addScopes({})
    // this.app.addProvider()
    // this.app.addProviders()
    // this.app.router.add()

    const PluginWhatsAppTabs = () => {

      const [apiKey, setApiKey] = useState();
      const [url, setUrl] = useState();
      const [cellPhoneFrom, setCellPhoneFrom] = useState();

      const onChange = async (key: string) => {

        //Récupérer les données de l'API et les définir dans les champs de saisie.
        const { data } = await this.app.apiClient.request({ url: 'ProvideConfig:get', params: { filterByTk: 1 } });
        setApiKey(data.data.api_key);
        setUrl(data.data.url);
        setCellPhoneFrom(data.data.celular_from);
      };

      const onClickSubmit = () => {

        //Action pour mettre à jour les champs de saisie dans la base de données via l'API.
        console.log('Ok');
      }

      //Données simulées avec les messages
      const dataSource = [
        {
          key: '1',
          content: 'Olá bem vindo',
          date: '24/12/2024',
          status: 'Pendente',
        },
        {
          key: '2',
          content: 'Olá bem vindo',
          date: '23/12/2024',
          status: 'Enviado',
        }
      ];

      const columns = [
        {
          title: 'Contenu',
          dataIndex: 'content',
          key: 'content',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Statut',
          dataIndex: 'status',
          key: 'status',
        },
      ];

      const instructions = (<><p>Instructions :</p>
        <ul>
          <li>Les paramètres ci-dessous proviennent du fournisseur de messagerie Meta et doivent être remplis avec des informations correctes pour envoyer des messages automatiquement. Pour plus de détails, visitez : https://developers.facebook.com/docs/whatsapp/cloud-api</li>
          <li>Après avoir configuré les paramètres ci-dessous, pour envoyer des messages, utilisez simplement le point de terminaison /api/sendMessage:post</li>
        </ul>
      </>);

      const itemsTabs: TabsProps['items'] = [
        {
          key: '1',
          label: 'Messages',
          children: (<Table dataSource={dataSource} columns={columns} />),
        },
        {
          key: '2',
          label: 'Configurations',
          children: (<>
            <p><Alert message={instructions} type="error" /></p>
            <Form layout="vertical">
              <Form.Item label="* Clé API Meta :" style={{ fontWeight: 'bold' }}>
                <Input placeholder="xxxxxxxxxx" value={apiKey} />
              </Form.Item>
              <Form.Item label="* URL API Meta :" style={{ fontWeight: 'bold' }}>
                <Input placeholder="domain.com..." value={url} />
              </Form.Item>
              <Form.Item label="* Téléphone expéditeur :" style={{ fontWeight: 'bold' }}>
                <Input placeholder="5554899991234" value={cellPhoneFrom} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={onClickSubmit}>Soumettre</Button>
              </Form.Item>
            </Form></>
          ),
        }
      ];

      return (<Tabs defaultActiveKey="1" items={itemsTabs} onChange={onChange}/>)

    }

    this.app.pluginSettingsManager.add('whatsapp', {
      title: 'WhatsApp',
      icon: 'WhatsAppOutlined',
      Component: PluginWhatsAppTabs,
      sort: 100,
    });
  }
}

export default PluginWhatsappClient;
```

Le code ci-dessus génère l'écran ci-dessous pour le plugin créé. Certaines parties sont commentées pour garder le code concis.

![Création de l'interface de configuration.png](https://static-docs.nocobase.com/d0e00558051e08b313e118b34a6c1352.png)

## **Intégration avec le workflow NocoBase**

Il existe plusieurs façons d'utiliser le point de terminaison créé dans le plugin pour envoyer des messages. L'une d'elles consiste à le déclencher dans le workflow NocoBase. Essentiellement, cela implique de créer un workflow de type "Requête HTTP" et de transmettre les données comme illustré dans l'image ci-dessous.

![**Intégration avec le workflow NocoBase.png](https://static-docs.nocobase.com/d02220eeba3f609f6d9f5174b954f42f.png)

## **Exportation du plugin en tant que fichier**

Pour exporter le plugin créé, exécutez simplement la commande ci-dessous. Cela générera un fichier `.tar` qui pourra être installé dans d'autres instances de NocoBase. Pour plus de détails, vous pouvez vous référer à la documentation [ici](https://docs.nocobase.com/development/your-fisrt-plugin)[.](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase#)

```
yarn build @my-project/plugin-hello
yarn nocobase tar @my-project/plugin-hello
```

## Conclusion

Le but de cet article était de démontrer le processus de création et la structure de base d'un plugin dans NocoBase. Certaines parties du code peuvent être réécrites et améliorées. Bientôt, je prévois d'ajouter le projet à un dépôt et de partager le plugin révisé avec la communauté.

**Lectures connexes :**

* [Gouvernance d'architecture simplifiée : Créer un catalogue d'applications avec NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [Comment sauvegarder et restaurer NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [Comment créer des applications avec NocoBase ?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Comment télécharger une image Docker sur un serveur intranet](https://www.nocobase.com/en/blog/load-docker-image)
* [Premier processus d'optimisation pour les API côté serveur de NocoBase](https://www.nocobase.com/en/blog/first-optimization-process-for-nocobase-server-side-apis)
