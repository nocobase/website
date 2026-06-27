---
title: "NocoBase 0.12: Nova ferramenta de construção de plugins"
description: "NocoBase 0.12 apresenta uma nova ferramenta de construção de plugins para uso contínuo em produção, atualiza métodos de instalação e mescla @nocobase/app-client e @nocobase/app-server em @nocobase-app."
---

## Novos Recursos

* Nova ferramenta de construção de plugins. Os plugins construídos poderão ser usados diretamente no ambiente de produção, sem a necessidade de uma segunda compilação.

## Atualizações da Aplicação

### Atualização da instalação Docker

Sem alterações, consulte o [Guia de Atualização de Imagem Docker](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose) para atualizar.

### Atualizando a instalação do código-fonte

A ferramenta de construção de plugins foi atualizada recentemente, e o cache precisa ser limpo após puxar os novos fontes.

```
git pull # Puxa o novo código-fonte.
yarn clean # Limpa o cache.
```

Para mais detalhes, veja o [Guia de atualização de fonte Git](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone).

### Atualizando uma instalação create-nocobase-app

Baixe novamente a nova versão via `yarn create` e atualize a configuração .env, veja o [guia de atualização de versão principal](https://docs-cn.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app) para mais detalhes.

## Mudanças Incompatíveis

### @nocobase/app-client e @nocobase/app-server mesclados em @nocobase-app

Aplicativos instalados via create-nocobase-app não possuem mais um diretório packages/app, e o código personalizado em packages/app precisa ser movido para o plugin personalizado.

### O caminho dist/client do aplicativo mudou.

Se você estiver configurando o nginx manualmente, precisará fazer um ajuste semelhante

```
server {
- root /app/nocobase/packages/app/client/dist;
+ root /app/nocobase/node_modules/@nocobase/app/dist/client;

  location / {
-       root /app/nocobase/packages/app/client/dist;
+       root /app/nocobase/node_modules/@nocobase/app/dist/client;
        try_files $uri $uri/ /index.html;
        add_header Last-Modified $date_gmt;
        add_header Cache-Control 'no-store, no-cache';
        if_modified_since off;
        expires off;
        etag off;
    }
}
```

### Plugins de terceiros precisam ser reconstruídos

Consulte o guia de atualização de plugins de terceiros abaixo

## Guia de atualização de plugins de terceiros

### O diretório do plugin deve ter ambos os diretórios `src/client` e `src/server`.

```
// src/client/index.ts
import { Plugin } from '@nocobase/client';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

```
// src/server/index.ts
import { Plugin } from '@nocobase/server';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

O código de demonstração específico pode ser consultado em: [sample-hello](https://github.com/nocobase/nocobase/tree/main/packages/samples/hello)

### Colocação multilíngue do plugin no diretório `src/locale`

Tanto frontend quanto backend, os arquivos de tradução multilíngue são colocados no diretório `src/locale`, então o plugin não precisa carregar pacotes multilíngues por conta própria.

### Ajuste das dependências do plugin

As dependências do plugin são divididas em suas próprias dependências e dependências globais. As dependências globais são usadas diretamente globalmente e não serão empacotadas no produto do plugin, enquanto suas próprias dependências serão empacotadas no produto. Após a construção do plugin, o ambiente de produção é plug-and-play, e não há necessidade de instalar dependências ou construir duas vezes. Os ajustes nas dependências do plugin incluem:

* Coloque os pacotes relacionados a `@nocobase/*` em `peerDependencies` e especifique o número da versão como `0.x`;
* Coloque outras dependências em `devDependencies`, não em `dependencies`, pois o plugin extrairá todas as dependências necessárias para o ambiente de produção após o empacotamento.

```
{
  "devDependencies": {
    "@formily/react": "2.x",
    "@formily/shared": "2.x",
    "ahooks": "3.x",
    "antd": "5.x",
    "dayjs": "1.x",
    "i18next": "22.x",
    "react": "18.x",
    "react-dom": "18.x",
    "react-i18next": "11.x"
  },
  "peerDependencies": {
    "@nocobase/actions": "0.x",
    "@nocobase/client": "0.x",
    "@nocobase/database": "0.x",
    "@nocobase/resourcer": "0.x",
    "@nocobase/server": "0.x",
    "@nocobase/test": "0.x",
    "@nocobase/utils": "0.x"
  }
}
```

### O caminho de saída do plugin foi alterado de `lib` para `dist`

Estrutura do diretório dist

```
|- dist
  |- client       # Lado do cliente, umd
    |- index.js
    |- index.d.ts
  |- server       # Lado do servidor, cjs
    |- index.js
    |- index.d.ts
    |- others
  |- locale       # pacote multilíngue
  |- node_modules # dependências do servidor
```

Outros ajustes relacionados incluem:

Ajuste do parâmetro main do package.json

```
{
  - "main": "./lib/server/index.js",
  + "main": "./dist/server/index.js",
}
```

client.d.ts

```
export * from './dist/client';
export { default } from './dist/client';
```

client.js

```
module.exports = require('./dist/client/index.js');
```

server.d.ts

```
export * from './dist/server';
export { default } from './dist/server';
```

server.js

```
module.exports = require('./dist/server/index.js');
```
