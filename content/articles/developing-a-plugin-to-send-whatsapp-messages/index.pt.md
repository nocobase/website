---
title: "Desenvolvendo um Plugin para Enviar Mensagens WhatsApp no NocoBase"
description: "O objetivo deste artigo é demonstrar as etapas para criar um plugin no NocoBase para atender a necessidades específicas."
---

📝 Nota: Este artigo foi atualizado pela última vez em 23 de janeiro de 2026. Atualizamos regularmente as informações para garantir que você tenha as últimas novidades! 😊

Este blog foi produzido por Leandro Martins e publicado originalmente em [Developing a Plugin to Send WhatsApp Messages in NocoBase](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase).

O objetivo deste artigo é demonstrar as etapas para criar um plugin no NocoBase para atender a necessidades específicas. Abordaremos o design da arquitetura, criaremos a estrutura básica, ativaremos o plugin, definiremos e criaremos coleções, criaremos um endpoint, construiremos uma interface de configuração, integraremos com fluxos de trabalho e exportaremos o plugin.

Para este artigo, usaremos as seguintes tecnologias: NocoBase, PostgreSQL e Docker. Essas ferramentas já devem estar configuradas. Para instruções de instalação, consulte um guia separado que escrevi [aqui](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase).

---

💬 Ei, você está lendo o blog do NocoBase. NocoBase é a plataforma de desenvolvimento no-code/low-code mais extensível, com inteligência artificial, para construir aplicações empresariais, ferramentas internas e todos os tipos de sistemas. É totalmente auto-hospedada, baseada em plugins e amigável para desenvolvedores. → [Explore o NocoBase no GitHub](https://github.com/nocobase/nocobase)

---

## Arquitetura do Plugin

![Arquitetura do Plugin.png](https://static-docs.nocobase.com/dfcb0082a99b45aa4334c8460708a50b.png)

## Criando a Estrutura do Plugin

Para criar o plugin, basta executar o comando abaixo. Você pode encontrar mais detalhes sobre a estrutura do plugin, código inicial e comandos na [documentação](https://docs.nocobase.com/development/your-fisrt-plugin).

```
yarn pm create @my-project/plugin-whatsapp
```

Uma vez criado, os arquivos gerados estarão localizados na pasta `packages` sob o nome definido do plugin, conforme mostrado na imagem abaixo. Para entender melhor a estrutura de pastas, você pode consultar o manual [aqui](https://docs.nocobase.com/development/app-ds).

![nome definido do plugin.png](https://static-docs.nocobase.com/c63fb5375b27a5c2520437df9bfbb253.png)

## Ativando o Plugin

Para ativar o plugin, você pode ir até a tela de plugins e habilitá-lo usando o botão de alternância, conforme mostrado na imagem abaixo, ou executar o comando abaixo.

```
yarn pm enable @my-project/plugin-hello
```

![Ativando o Plugin.png](https://static-docs.nocobase.com/12c6a36ffb3acdddd4e95a415d19460a.png)

## Criando Coleções

As coleções são essenciais porque definem a estrutura dos dados armazenados em tabelas dentro do seu banco de dados. Para este exemplo, criei duas coleções, conforme descrito abaixo.

1. **ProvideConfig**
   * **API Key**: Chave da API da Meta para acessar a API do WhatsApp
   * **URL**: URL da API
   * **Celular De**: Número de telefone do WhatsApp Business
2. **MessageQueue**
   * **Conteúdo**: Conteúdo da mensagem
   * **Status**: Pendente ou Concluído

No NocoBase, as coleções estão localizadas na pasta `/src/server/collections/`. A estrutura básica é mostrada abaixo. Para mais detalhes, consulte a documentação [aqui](https://docs.nocobase.com/development/server/collections).

```
##Arquivo: ProvideConfig
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

##Arquivo: MessageQueue
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

## Criando Endpoints

Os endpoints permitem que sistemas externos interajam com ações dentro da sua aplicação, possibilitando a integração entre eles. Neste caso, criaremos um endpoint para agendar uma execução que chama a API do WhatsApp de forma assíncrona para enviar uma mensagem.

Para criar o endpoint, você pode usar o arquivo `/src/server/plugin.ts` e adicionar o código dentro do método `load`, conforme mostrado no exemplo abaixo. No ACL (Access Control List), você define as permissões para o endpoint. Usando o `resourceManager`, você registra o endpoint com seu método. Uma vez configurado, o endpoint estará disponível em:[`http://localhost:13001/api/whatsapp:sendMessage`](http://localhost:13001/api/whatsapp:sendMessage)

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

          //Salvar mensagem na fila com status: pendente

          //Recuperar parâmetros da API do WhatsApp no banco de dados;

          //Tentar enviar mensagem via API do WhatsApp

          // Se OK, atualizar status: concluído Senão: atualizar status: erro
        }
      }
    });

  }

...
```

## **Criando a Interface de Configuração**

O NocoBase permite criar interfaces usando React e Ant Design. Neste caso, criarei uma interface dentro da área de configurações do plugin. Esta interface permitirá definir as configurações da API do WhatsApp e visualizar as mensagens que foram enviadas junto com seus status, conforme mostrado nas imagens abaixo.

![Criando a Interface de Configuração.png](https://static-docs.nocobase.com/e52ce1228c1d80069b3a415f744eefb9.png)

Na pasta `/src/client`, você pode criar suas interfaces usando React e Ant Design. O código abaixo dá uma ideia da estrutura simples necessária para criar as telas mostradas nas imagens. Para mais detalhes, você pode verificar este link, onde encontrará informações sobre como criar menus, telas e rotas.

```

##Arquivo: index.tsx
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

        //Recuperar os dados da api e definir nos inputs.
        const { data } = await this.app.apiClient.request({ url: 'ProvideConfig:get', params: { filterByTk: 1 } });
        setApiKey(data.data.api_key);
        setUrl(data.data.url);
        setCellPhoneFrom(data.data.celular_from);
      };

      const onClickSubmit = () => {

        //Ação para atualizar input no DB usando API.
        console.log('Ok');
      }

      //Dados mockados com mensagens
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
          title: 'Conteúdo',
          dataIndex: 'content',
          key: 'content',
        },
        {
          title: 'Data',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
      ];

      const instructions = (<><p>Instruções:</p>
        <ul>
          <li>As configurações abaixo são do provedor de mensagens da Meta e devem ser preenchidas com informações corretas para enviar mensagens automaticamente. Para mais detalhes, visite: https://developers.facebook.com/docs/whatsapp/cloud-api</li>
          <li>Após configurar as configurações abaixo, para enviar mensagens, basta usar o endpoint /api/sendMessage:post</li>
        </ul>
      </>);

      const itemsTabs: TabsProps['items'] = [
        {
          key: '1',
          label: 'Mensagens',
          children: (<Table dataSource={dataSource} columns={columns} />),
        },
        {
          key: '2',
          label: 'Configurações',
          children: (<>
            <p><Alert message={instructions} type="error" /></p>
            <Form layout="vertical">
              <Form.Item label="* API Key Meta:" style={{ fontWeight: 'bold' }}>
                <Input placeholder="xxxxxxxxxx" value={apiKey} />
              </Form.Item>
              <Form.Item label="* URL API Meta:" style={{ fontWeight: 'bold' }}>
                <Input placeholder="domain.com..." value={url} />
              </Form.Item>
              <Form.Item label="* Celular de:" style={{ fontWeight: 'bold' }}>
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

O código acima gera a tela abaixo para o plugin criado. Algumas partes estão comentadas para manter o código conciso.

![Criando a Interface de Configuração.png](https://static-docs.nocobase.com/d0e00558051e08b313e118b34a6c1352.png)

## **Integrando com o Fluxo de Trabalho do NocoBase**

Existem várias maneiras de usar o endpoint criado no plugin para enviar mensagens. Uma delas é acioná-lo dentro do fluxo de trabalho do NocoBase. Essencialmente, isso envolve criar um fluxo de trabalho do tipo "HTTP Request" e passar os dados conforme mostrado na imagem abaixo.

![**Integrando com o Fluxo de Trabalho do NocoBase.png](https://static-docs.nocobase.com/d02220eeba3f609f6d9f5174b954f42f.png)

## **Exportando o Plugin como um Arquivo**

Para exportar o plugin criado, basta executar o comando abaixo. Isso gerará um arquivo `.tar` que pode ser instalado em outras instâncias do NocoBase. Para mais detalhes, você pode consultar a documentação [aqui](https://docs.nocobase.com/development/your-fisrt-plugin)[.](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase#)

```
yarn build @my-project/plugin-hello
yarn nocobase tar @my-project/plugin-hello
```

## Conclusão

O objetivo deste artigo foi demonstrar o processo de criação e a estrutura básica de um plugin no NocoBase. Algumas partes do código podem ser reescritas e melhoradas. Em breve, pretendo adicionar o projeto a um repositório e compartilhar o plugin revisado com a comunidade.

**Leitura relacionada:**

* [Governança de Arquitetura Simplificada: Construindo um Catálogo de Aplicações com NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [Como Fazer Backup e Restaurar o NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [Como construir aplicativos com NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Como fazer upload de uma imagem Docker para um servidor de intranet](https://www.nocobase.com/en/blog/load-docker-image)
* [Primeiro Processo de Otimização para APIs do Lado do Servidor do NocoBase](https://www.nocobase.com/en/blog/first-optimization-process-for-nocobase-server-side-apis)
