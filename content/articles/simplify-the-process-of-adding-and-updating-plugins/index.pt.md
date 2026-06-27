---
title: "Simplifique o processo de adicionar e atualizar plugins"
description: "Saiba como a atualização mais recente do NocoBase simplifica o gerenciamento de plugins, facilitando a instalação e as atualizações."
---

Para melhorar a experiência de gerenciamento de plugins, fizemos recentemente atualizações significativas no módulo de gerenciador de plugins. As principais melhorias focam no processo de adição e atualização de plugins. Observe que esses recursos estão disponíveis apenas na versão 1.4.0-alpha e superiores. O branch `main` atual é v1.3. Para experimentar esses novos recursos, mude para o branch `next` (v1.4).

As atualizações específicas nesta versão [v1.4.0-alpha.20240914235554](https://github.com/nocobase/nocobase/releases/tag/v1.4.0-alpha.20240914235554) são as seguintes:

## Lista de plugins agora lê diretamente dos plugins locais

![4f331f688f18c4c3458b2dff15a9f208.png](https://static-docs.nocobase.com/4f331f688f18c4c3458b2dff15a9f208.png)

A lista de plugins não lê mais da tabela de plugins do banco de dados, mas diretamente das seguintes variáveis de ambiente ou diretórios:

* Variáveis de ambiente
  * `APPEND_PRESET_BUILT_IN_PLUGINS`
  * `APPEND_PRESET_LOCAL_PLUGINS`
* Diretórios de plugins
  * `packages/plugins`: Plugins em desenvolvimento, devem incluir o código-fonte.
  * `storage/plugins`: Plugins independentes, devem incluir o plugin compilado.

Os plugins são organizados como pacotes npm com a seguinte estrutura de diretórios:

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

## Extrair pacote do plugin

Extraia diretamente o pacote do plugin no diretório especificado, e a interface do gerenciador de plugins o detectará automaticamente. Por exemplo:

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.3.15-beta.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

Este comando garante que o plugin seja extraído em `/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas` sem incluir o diretório `package`. A estrutura de diretórios correta deve ser:

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

## Mesclar o processo de adição e atualização de plugins.

Na interface, use o botão "Adicionar & Atualizar" no canto superior direito para adicionar ou atualizar.

![b5a4fd82955807dc18060772c6689f84.png](https://static-docs.nocobase.com/b5a4fd82955807dc18060772c6689f84.png)

Você também pode usar o comando `pm add` para adicionar ou atualizar plugins. O processo é o seguinte:

![01f3658240cd23353f25833453687df3.png](https://static-docs.nocobase.com/01f3658240cd23353f25833453687df3.png)

## Processo de instalação para plugins comerciais

Não é necessário baixar plugins um por um; basta configurar as seguintes variáveis de ambiente:

```Bash
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=seu-usuario   # nome de usuário da plataforma de serviço
NOCOBASE_PKG_PASSWORD=sua-senha   # senha da plataforma de serviço
```

Durante a instalação ou atualização da aplicação, os plugins serão baixados e atualizados automaticamente (versão detectada automaticamente).

```ts
yarn nocobase install
yarn nocobase upgrade
```

Por exemplo, o log do comando de atualização:

```Bash
nocobase git:(main) yarn nocobase upgrade
$ nocobase upgrade
WAIT: TypeScript compiling...
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

Para servidores de intranet, você pode enviar a pasta `storage/plugins` local para o servidor e, em seguida, executar o comando de instalação ou atualização do NocoBase.

```bash
scp -r /nocobase1/storage/plugins user2@ip2:/nocobase2/storage/plugins

yarn nocobase install
# ou
yarn nocobase upgrade
```

## Excluindo plugin

Como a lista de plugins não lê mais da tabela de plugins do banco de dados, mas diretamente dos plugins locais, excluir um plugin é tão simples quanto deletar a pasta do plugin. Em outras palavras, remover a pasta do plugin efetivamente remove o plugin.
