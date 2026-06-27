---
title: "Como fazer upload de uma imagem Docker para um servidor de intranet"
description: "O artigo orienta os usuários sobre como carregar imagens Docker no NocoBase para facilitar a migração de instâncias e a implantação offline."
---

## 1. Baixar a imagem Docker

Execute o seguinte comando no seu terminal local:

```bash
docker pull registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 2. Salvar a imagem Docker como um arquivo tar

Após a conclusão do download, execute o seguinte comando para salvar a imagem como um arquivo tar:

```bash
docker save -o nocobase-latest.tar registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 3. Fazer upload do arquivo tar para o servidor

Execute o seguinte comando no seu terminal local para fazer upload do `nocobase-latest.tar` para o servidor:

```bash
scp nocobase-latest.tar usuario@ip:/home/usuario/
```

## 4. Carregar a imagem Docker no servidor

Conecte-se ao servidor via SSH e carregue a imagem Docker:

```bash
ssh usuario@ip
docker load -i /home/usuario/nocobase-latest.tar
```

Após concluir essas etapas, a imagem Docker será importada com sucesso para o servidor interno.
