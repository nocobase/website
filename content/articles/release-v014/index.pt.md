---
title: "NocoBase 0.14: Novo gerenciador de plugins, suporta adição de plugins através da interface"
description: "NocoBase 0.14 apresenta um novo gerenciador de plugins que permite adicionar plugins através da interface, suporta downloads do registro npm, uploads locais e downloads por URL, aumentando a flexibilidade no gerenciamento de plugins."
---

Esta versão permite a instalação de plugins "plug-and-play" em ambientes de produção. Agora você pode adicionar plugins diretamente pela interface do usuário, com suporte para download do registro npm (que pode ser privado), upload local e download por URL.

## Novas funcionalidades

### Nova interface do gerenciador de plugins

![Nova interface do gerenciador de plugins](https://static-docs.nocobase.com/7d750847f55504f346d2a85968f88102.webp)

### Plugins enviados estão localizados no diretório storage/plugins.

O diretório storage/plugins é usado para enviar plugins e é organizado como pacotes npm.

```
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /@foo/
      |- /bar/
    |- /my-nocobase-plugin-hello/
```

### Atualizações de plugins

Atualmente, apenas plugins em storage/plugins podem ser atualizados, conforme mostrado aqui:

![Atualizações de plugins](https://static-docs.nocobase.com/af75d05d6e2c04222dbfd2b7f9009daf.gif)

Nota: Para facilitar a manutenção e atualização, e evitar a indisponibilidade dos plugins de armazenamento devido a upgrades, você pode colocar o novo plugin diretamente em storage/plugins e então realizar a operação de upgrade.

## Mudanças incompatíveis

### Mudanças nos nomes dos plugins

* A variável de ambiente PLUGIN\_PACKAGE\_PREFIX não é mais fornecida.
* Nomes de plugins e nomes de pacotes são unificados; nomes antigos de plugins ainda podem existir como aliases.

### Melhorias no pm.add

```
# Use packageName em vez de pluginName, pesquisa localmente, erro se não encontrado
pm add packageName

# Baixa remotamente apenas se o registro for fornecido, também pode especificar a versão
pm add packageName --registry=xx --auth-token=yy --version=zz

# Você também pode fornecer um zip local, adicionar várias vezes e substituir pelo último
pm add /a/plugin.zip

# Zip remoto, substitui pelo mesmo nome
pm add http://url/plugin.zip
```

### Mudanças na configuração do Nginx

Adicione a localização `/static/plugins/`

```
server {
    location ^~ /static/plugins/ {
        proxy_pass http://127.0.0.1:13000/static/plugins/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 600;
        proxy_send_timeout 600;
        proxy_read_timeout 600;
        send_timeout 600;
    }
}
```

Veja mais na versão completa do [nocobase.conf](https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf)

## Guia de desenvolvimento de plugins

[Desenvolva o primeiro plugin](https://docs.nocobase.com/development/your-fisrt-plugin)

* [  release](https://blog.nocobase.com/tags/release)
