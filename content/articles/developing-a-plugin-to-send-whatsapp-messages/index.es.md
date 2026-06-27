---
title: "Desarrollo de un plugin para enviar mensajes de WhatsApp en NocoBase"
description: "El objetivo de este artículo es demostrar los pasos para crear un plugin en NocoBase que satisfaga necesidades específicas."
---

📝 Nota: Este artículo se actualizó por última vez el 23 de enero de 2026. Actualizamos la información periódicamente para garantizar que tengas las últimas novedades. 😊

Este blog fue producido por Leandro Martins y se publicó originalmente en [Desarrollando un plugin para enviar mensajes de WhatsApp en NocoBase](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase).

El objetivo de este artículo es demostrar los pasos para crear un plugin en NocoBase que cubra necesidades específicas. Abordaremos el diseño arquitectónico, crearemos la estructura básica, activaremos el plugin, definiremos y crearemos colecciones, crearemos un endpoint, construiremos una interfaz de configuración, integraremos con flujos de trabajo y exportaremos el plugin.

Para este artículo, utilizaremos las siguientes tecnologías: NocoBase, PostgreSQL y Docker. Estas herramientas ya deberían estar configuradas. Para las instrucciones de instalación, consulta una guía aparte que he escrito [aquí](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase).

---

💬 Oye, estás leyendo el blog de NocoBase. NocoBase es la plataforma de desarrollo low-code/sin código con inteligencia artificial más extensible para crear aplicaciones empresariales, herramientas internas y todo tipo de sistemas. Es completamente autogestionada, basada en plugins y amigable para desarrolladores. → [Explora NocoBase en GitHub](https://github.com/nocobase/nocobase)

---

## Arquitectura del Plugin

![Arquitectura del Plugin.png](https://static-docs.nocobase.com/dfcb0082a99b45aa4334c8460708a50b.png)

## Creando la Estructura del Plugin

Para crear el plugin, simplemente ejecuta el comando a continuación. Puedes encontrar más detalles sobre la estructura del plugin, el código inicial y los comandos en la [documentación](https://docs.nocobase.com/development/your-fisrt-plugin).

```
yarn pm create @my-project/plugin-whatsapp
```

Una vez creado, los archivos generados se ubicarán en la carpeta `packages` bajo el nombre definido del plugin, como se muestra en la imagen a continuación. Para comprender mejor la estructura de carpetas, puedes consultar el manual [aquí](https://docs.nocobase.com/development/app-ds).

![Nombre definido del plugin.png](https://static-docs.nocobase.com/c63fb5375b27a5c2520437df9bfbb253.png)

## Activando el Plugin

Para activar el plugin, puedes ir a la pantalla de plugins y habilitarlo usando el botón de alternancia, como se muestra en la imagen a continuación, o ejecutar el comando siguiente.

```
yarn pm enable @my-project/plugin-hello
```

![Activando el Plugin.png](https://static-docs.nocobase.com/12c6a36ffb3acdddd4e95a415d19460a.png)

## Creando Colecciones

Las colecciones son esenciales porque definen la estructura de los datos almacenados en tablas dentro de tu base de datos. Para este ejemplo, creé dos colecciones, como se describe a continuación.

1. **ProvideConfig**
   * **Clave API**: Clave API de Meta para acceder a la API de WhatsApp
   * **URL**: URL de la API
   * **Teléfono Origen**: Número de teléfono de WhatsApp Business
2. **MessageQueue**
   * **Contenido**: Contenido del mensaje
   * **Estado**: Pendiente o Completado

En NocoBase, las colecciones se encuentran en la carpeta `/src/server/collections/`. La estructura básica se muestra a continuación. Para más detalles, consulta la documentación [aquí](https://docs.nocobase.com/development/server/collections).

```
##Archivo: ProvideConfig
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

##Archivo: MessageQueue
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

## Creando Endpoints

Los endpoints permiten que sistemas externos interactúen con acciones dentro de tu aplicación, posibilitando la integración entre ellos. En este caso, crearemos un endpoint para programar una ejecución que llame asincrónicamente a la API de WhatsApp para enviar un mensaje.

Para crear el endpoint, puedes usar el archivo `/src/server/plugin.ts` y agregar el código dentro del método `load`, como se muestra en el ejemplo a continuación. En la ACL (Lista de Control de Acceso), defines los permisos para el endpoint. Usando el `resourceManager`, registras el endpoint con su método. Una vez configurado, el endpoint estará disponible en:[`http://localhost:13001/api/whatsapp:sendMessage`](http://localhost:13001/api/whatsapp:sendMessage)

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

          //Guardar mensaje en la cola con estado: pendiente

          //Recuperar parámetros de la API de WhatsApp en la base de datos;

          //Intentar enviar mensaje de WhatsApp usando la API

          // Si OK, actualizar estado: hecho. Si no, actualizar estado: error
        }
      }
    });

  }

...
```

## **Creando la Interfaz de Configuración**

NocoBase te permite crear interfaces usando React y Ant Design. En este caso, crearé una interfaz dentro del área de configuración del plugin. Esta interfaz permitirá definir la configuración de la API de WhatsApp y ver los mensajes que se han enviado junto con sus estados, como se muestra en las imágenes a continuación.

![Creando la Interfaz de Configuración.png](https://static-docs.nocobase.com/e52ce1228c1d80069b3a415f744eefb9.png)

En la carpeta `/src/client`, puedes crear tus interfaces usando React y Ant Design. El código a continuación da una idea de la estructura simple necesaria para crear las pantallas mostradas en las imágenes. Para más detalles, puedes consultar este enlace, donde encontrarás información sobre cómo crear menús, pantallas y rutas.

```

##Archivo: index.tsx
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

        //Recuperar los datos de la API y establecerlos en los inputs.
        const { data } = await this.app.apiClient.request({ url: 'ProvideConfig:get', params: { filterByTk: 1 } });
        setApiKey(data.data.api_key);
        setUrl(data.data.url);
        setCellPhoneFrom(data.data.celular_from);
      };

      const onClickSubmit = () => {

        //Acción para actualizar el input en la base de datos usando la API.
        console.log('Ok');
      }

      //Datos simulados con mensajes
      const dataSource = [
        {
          key: '1',
          content: 'Hola bienvenido',
          date: '24/12/2024',
          status: 'Pendiente',
        },
        {
          key: '2',
          content: 'Hola bienvenido',
          date: '23/12/2024',
          status: 'Enviado',
        }
      ];

      const columns = [
        {
          title: 'Contenido',
          dataIndex: 'content',
          key: 'content',
        },
        {
          title: 'Fecha',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Estado',
          dataIndex: 'status',
          key: 'status',
        },
      ];

      const instructions = (<><p>Instrucciones:</p>
        <ul>
          <li>Las configuraciones a continuación son del proveedor de mensajería de Meta y deben completarse con información correcta para enviar mensajes automáticamente. Para más detalles, visita: https://developers.facebook.com/docs/whatsapp/cloud-api</li>
          <li>Después de configurar los ajustes a continuación, para enviar mensajes, simplemente usa el endpoint /api/sendMessage:post</li>
        </ul>
      </>);

      const itemsTabs: TabsProps['items'] = [
        {
          key: '1',
          label: 'Mensajes',
          children: (<Table dataSource={dataSource} columns={columns} />),
        },
        {
          key: '2',
          label: 'Configuraciones',
          children: (<>
            <p><Alert message={instructions} type="error" /></p>
            <Form layout="vertical">
              <Form.Item label="* Clave API Meta:" style={{ fontWeight: 'bold' }}>
                <Input placeholder="xxxxxxxxxx" value={apiKey} />
              </Form.Item>
              <Form.Item label="* URL API Meta:" style={{ fontWeight: 'bold' }}>
                <Input placeholder="dominio.com..." value={url} />
              </Form.Item>
              <Form.Item label="* Teléfono origen:" style={{ fontWeight: 'bold' }}>
                <Input placeholder="5554899991234" value={cellPhoneFrom} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={onClickSubmit}>Enviar</Button>
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

El código anterior genera la pantalla a continuación para el plugin creado. Algunas partes están comentadas para mantener el código conciso.

![Creando la Interfaz de Configuración.png](https://static-docs.nocobase.com/d0e00558051e08b313e118b34a6c1352.png)

## **Integrando con el Flujo de Trabajo de NocoBase**

Hay varias formas de usar el endpoint creado en el plugin para enviar mensajes. Una de ellas es activándolo dentro del flujo de trabajo de NocoBase. Esencialmente, esto implica crear un flujo de trabajo del tipo "Solicitud HTTP" y pasar los datos como se muestra en la imagen a continuación.

![**Integrando con el Flujo de Trabajo de NocoBase.png](https://static-docs.nocobase.com/d02220eeba3f609f6d9f5174b954f42f.png)

## **Exportando el Plugin como Archivo**

Para exportar el plugin creado, simplemente ejecuta el comando a continuación. Esto generará un archivo `.tar` que se puede instalar en otras instancias de NocoBase. Para más detalles, puedes consultar la documentación [aquí](https://docs.nocobase.com/development/your-fisrt-plugin)[.](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase#)

```
yarn build @my-project/plugin-hello
yarn nocobase tar @my-project/plugin-hello
```

## Conclusión

El propósito de este artículo fue demostrar el proceso de creación y la estructura básica de un plugin en NocoBase. Algunas partes del código se pueden reescribir y mejorar. Pronto, planeo agregar el proyecto a un repositorio y compartir el plugin revisado con la comunidad.

**Lecturas relacionadas:**

* [Gobernanza de Arquitectura Simplificada: Creando un Catálogo de Aplicaciones con NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [Cómo Hacer Copias de Seguridad y Restaurar NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [¿Cómo crear aplicaciones con NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Cómo subir una imagen Docker a un servidor de intranet](https://www.nocobase.com/en/blog/load-docker-image)
* [Primer Proceso de Optimización para las APIs del Lado del Servidor de NocoBase](https://www.nocobase.com/en/blog/first-optimization-process-for-nocobase-server-side-apis)
