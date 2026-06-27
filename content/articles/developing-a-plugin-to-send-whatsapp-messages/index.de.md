---
title: "Entwicklung eines Plugins zum Senden von WhatsApp-Nachrichten in NocoBase"
description: "Das Ziel dieses Artikels ist es, die Schritte zur Erstellung eines Plugins in NocoBase zu demonstrieren, um spezifische Anforderungen zu erfüllen."
---

📝 **Hinweis:** Dieser Artikel wurde zuletzt am 23. Januar 2026 aktualisiert. Wir aktualisieren die Informationen regelmäßig, um sicherzustellen, dass Sie die neuesten Erkenntnisse haben! 😊

Dieser Blogbeitrag wurde von Leandro Martins verfasst und ursprünglich veröffentlicht unter [Developing a Plugin to Send WhatsApp Messages in NocoBase](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase).

Das Ziel dieses Artikels ist es, die Schritte zur Erstellung eines Plugins in NocoBase zu demonstrieren, um spezifische Anforderungen zu erfüllen. Wir werden den Architekturentwurf behandeln, die grundlegende Struktur erstellen, das Plugin aktivieren, Collections definieren und erstellen, einen Endpunkt erstellen, eine Konfigurationsoberfläche bauen, in Workflows integrieren und das Plugin exportieren.

Für diesen Artikel verwenden wir die folgenden Technologien: NocoBase, PostgreSQL und Docker. Diese Werkzeuge sollten bereits konfiguriert sein. Installationsanweisungen finden Sie in einer separaten Anleitung, die ich [hier](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase) geschrieben habe.

---

💬 Hey, du liest den NocoBase-Blog. NocoBase ist die erweiterbarste KI-gestützte No-Code/Low-Code-Entwicklungsplattform für den Bau von Unternehmensanwendungen, internen Tools und allen Arten von Systemen. Sie ist vollständig selbst gehostet, plugin-basiert und entwicklerfreundlich. →[ NocoBase auf GitHub erkunden](https://github.com/nocobase/nocobase)

---

## Plugin-Architektur

![Plugin-Architektur.png](https://static-docs.nocobase.com/dfcb0082a99b45aa4334c8460708a50b.png)

## Erstellen der Plugin-Struktur

Um das Plugin zu erstellen, führen Sie einfach den folgenden Befehl aus. Weitere Details zur Plugin-Struktur, zum Ausgangscode und zu den Befehlen finden Sie in der [Dokumentation](https://docs.nocobase.com/development/your-fisrt-plugin).

```
yarn pm create @my-project/plugin-whatsapp
```

Nach der Erstellung befinden sich die generierten Dateien im Ordner `packages` unter dem definierten Namen des Plugins, wie im Bild unten gezeigt. Um die Ordnerstruktur besser zu verstehen, können Sie im Handbuch [hier](https://docs.nocobase.com/development/app-ds) nachschlagen.

![Definierter Name des Plugins.png](https://static-docs.nocobase.com/c63fb5375b27a5c2520437df9bfbb253.png)

## Aktivieren des Plugins

Um das Plugin zu aktivieren, können Sie entweder zum Plugin-Bildschirm gehen und es mit dem Umschaltknopf aktivieren, wie im Bild unten gezeigt, oder den folgenden Befehl ausführen.

```
yarn pm enable @my-project/plugin-hello
```

![Plugin aktivieren.png](https://static-docs.nocobase.com/12c6a36ffb3acdddd4e95a415d19460a.png)

## Erstellen von Collections

Collections sind essentiell, da sie die Struktur der in Tabellen Ihrer Datenbank gespeicherten Daten definieren. Für dieses Beispiel habe ich zwei Collections erstellt, wie unten beschrieben.

1. **ProvideConfig**
   * **API-Schlüssel**: Meta's API-Schlüssel für den Zugriff auf die WhatsApp-API
   * **URL**: API-URL
   * **Telefonnummer (Absender)**: WhatsApp Business-Telefonnummer
2. **MessageQueue**
   * **Inhalt**: Nachrichteninhalt
   * **Status**: Ausstehend oder Abgeschlossen

In NocoBase befinden sich die Collections im Ordner `/src/server/collections/`. Die grundlegende Struktur ist unten gezeigt. Weitere Details finden Sie in der Dokumentation [hier](https://docs.nocobase.com/development/server/collections).

```
##Datei: ProvideConfig
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

##Datei: MessageQueue
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

## Erstellen von Endpunkten

Endpunkte ermöglichen es externen Systemen, mit Aktionen innerhalb Ihrer Anwendung zu interagieren und ermöglichen so die Integration zwischen ihnen. In diesem Fall erstellen wir einen Endpunkt, um eine Ausführung zu planen, die asynchron die WhatsApp-API aufruft, um eine Nachricht zu senden.

Um den Endpunkt zu erstellen, können Sie die Datei `/src/server/plugin.ts` verwenden und den Code innerhalb der `load`-Methode hinzufügen, wie im folgenden Beispiel gezeigt. In der ACL (Access Control List) definieren Sie die Berechtigungen für den Endpunkt. Mit dem `resourceManager` registrieren Sie den Endpunkt mit seiner Methode. Nach der Konfiguration ist der Endpunkt verfügbar unter:[`http://localhost:13001/api/whatsapp:sendMessage`](http://localhost:13001/api/whatsapp:sendMessage)

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

          //Nachricht in der Warteschlange speichern, Status: ausstehend

          //API-WhatsApp-Parameter aus der Datenbank abrufen;

          //Versuchen, die Nachricht über die API zu senden

          // Wenn OK, Status aktualisieren auf: erledigt, sonst: Status aktualisieren auf: fehlgeschlagen
        }
      }
    });

  }

...
```

## **Erstellen der Konfigurationsoberfläche**

NocoBase ermöglicht es Ihnen, Oberflächen mit React und Ant Design zu erstellen. In diesem Fall werde ich eine Oberfläche im Einstellungsbereich des Plugins erstellen. Diese Oberfläche ermöglicht es, die WhatsApp-API-Einstellungen zu definieren und die gesendeten Nachrichten sowie deren Status anzuzeigen, wie in den Bildern unten gezeigt.

![Erstellen der Konfigurationsoberfläche.png](https://static-docs.nocobase.com/e52ce1228c1d80069b3a415f744eefb9.png)

Im Ordner `/src/client` können Sie Ihre Oberflächen mit React und Ant Design erstellen. Der folgende Code gibt eine Vorstellung von der einfachen Struktur, die zum Erstellen der in den Bildern gezeigten Bildschirme benötigt wird. Weitere Details finden Sie unter diesem Link, wo Sie Informationen zum Erstellen von Menüs, Bildschirmen und Routen finden.

```

##Datei: index.tsx
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

        //Daten von der API abrufen und in die Eingabefelder setzen.
        const { data } = await this.app.apiClient.request({ url: 'ProvideConfig:get', params: { filterByTk: 1 } });
        setApiKey(data.data.api_key);
        setUrl(data.data.url);
        setCellPhoneFrom(data.data.celular_from);
      };

      const onClickSubmit = () => {

        //Aktion zum Aktualisieren der Eingabe in der DB über die API.
        console.log('Ok');
      }

      //Mock-Daten mit Nachrichten
      const dataSource = [
        {
          key: '1',
          content: 'Hallo, willkommen',
          date: '24.12.2024',
          status: 'Ausstehend',
        },
        {
          key: '2',
          content: 'Hallo, willkommen',
          date: '23.12.2024',
          status: 'Gesendet',
        }
      ];

      const columns = [
        {
          title: 'Inhalt',
          dataIndex: 'content',
          key: 'content',
        },
        {
          title: 'Datum',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
      ];

      const instructions = (<><p>Anleitung:</p>
        <ul>
          <li>Die folgenden Einstellungen stammen vom Messaging-Anbieter Meta und müssen mit korrekten Informationen ausgefüllt werden, um Nachrichten automatisch zu senden. Weitere Details finden Sie unter: https://developers.facebook.com/docs/whatsapp/cloud-api</li>
          <li>Nachdem Sie die folgenden Einstellungen konfiguriert haben, verwenden Sie zum Senden von Nachrichten einfach den Endpunkt /api/sendMessage:post</li>
        </ul>
      </>);

      const itemsTabs: TabsProps['items'] = [
        {
          key: '1',
          label: 'Nachrichten',
          children: (<Table dataSource={dataSource} columns={columns} />),
        },
        {
          key: '2',
          label: 'Konfigurationen',
          children: (<>
            <p><Alert message={instructions} type="error" /></p>
            <Form layout="vertical">
              <Form.Item label="* API-Schlüssel Meta:" style={{ fontWeight: 'bold' }}>
                <Input placeholder="xxxxxxxxxx" value={apiKey} />
              </Form.Item>
              <Form.Item label="* URL API Meta:" style={{ fontWeight: 'bold' }}>
                <Input placeholder="domain.com..." value={url} />
              </Form.Item>
              <Form.Item label="* Telefonnummer (Absender):" style={{ fontWeight: 'bold' }}>
                <Input placeholder="5554899991234" value={cellPhoneFrom} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={onClickSubmit}>Absenden</Button>
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

Der obige Code generiert den folgenden Bildschirm für das erstellte Plugin. Einige Teile sind auskommentiert, um den Code prägnant zu halten.

![Erstellen der Konfigurationsoberfläche.png](https://static-docs.nocobase.com/d0e00558051e08b313e118b34a6c1352.png)

## **Integration mit dem NocoBase-Workflow**

Es gibt mehrere Möglichkeiten, den im Plugin erstellten Endpunkt zum Senden von Nachrichten zu verwenden. Eine davon ist das Auslösen innerhalb des NocoBase-Workflows. Im Wesentlichen bedeutet dies, einen Workflow vom Typ "HTTP-Anfrage" zu erstellen und die Daten wie im Bild unten gezeigt zu übergeben.

![**Integration mit dem NocoBase-Workflow.png](https://static-docs.nocobase.com/d02220eeba3f609f6d9f5174b954f42f.png)

## **Exportieren des Plugins als Datei**

Um das erstellte Plugin zu exportieren, führen Sie einfach den folgenden Befehl aus. Dadurch wird eine `.tar`-Datei generiert, die in anderen NocoBase-Instanzen installiert werden kann. Weitere Details finden Sie in der Dokumentation [hier](https://docs.nocobase.com/development/your-fisrt-plugin)[.](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase#)

```
yarn build @my-project/plugin-hello
yarn nocobase tar @my-project/plugin-hello
```

## Fazit

Der Zweck dieses Artikels war es, den Prozess der Erstellung und die grundlegende Struktur eines Plugins in NocoBase zu demonstrieren. Einige Teile des Codes können umgeschrieben und verbessert werden. In Kürze plane ich, das Projekt in einem Repository zu veröffentlichen und das überarbeitete Plugin mit der Community zu teilen.

**Verwandte Lektüre:**

* [Vereinfachte Architektur-Governance: Erstellen eines Anwendungskatalogs mit NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [So sichern und stellen Sie NocoBase wieder her](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [Wie erstelle ich Apps mit NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [So laden Sie ein Docker-Image auf einen Intranet-Server hoch](https://www.nocobase.com/en/blog/load-docker-image)
* [Erster Optimierungsprozess für NocoBase-Server-seitige APIs](https://www.nocobase.com/en/blog/first-optimization-process-for-nocobase-server-side-apis)
