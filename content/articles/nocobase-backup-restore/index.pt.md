---
title: "Como Fazer Backup e Restaurar o NocoBase"
description: "Como o backup e a restauração devem ser tratados na nova versão? Este artigo fornecerá uma introdução detalhada à nova solução de backup."
---

## Contexto

A partir do NocoBase v0.19, introduzimos o plugin `@nocobase/plugin-backup-restore` para backup e restauração de aplicações. No entanto, a experiência real do usuário não tem sido ideal, com os seguintes problemas principais:

1. O plugin não suporta backup e restauração de metadados em nível de banco de dados, como valores padrão, índices únicos, etc.
2. Views de banco de dados, stored procedures, funções, triggers e outros componentes não podem ser copiados ou restaurados.
3. Cada formulário de plugin requer configuração separada de `dumpRules`, e os desenvolvedores de plugins podem precisar implementar lógica personalizada. Sem isso, o backup e a restauração podem falhar facilmente.
4. O design de agrupamento de backup é complexo e tem uma alta curva de aprendizado. Uma seleção inadequada pode levar à falha do backup ou à perda de dados.
5. O processo de backup e restauração ocorre na camada de aplicação. Se a aplicação falhar ao iniciar, o backup ou a restauração também falharão.

Após uma análise cuidadosa, a partir da versão v1.4, decidimos descontinuar este plugin. Então, como o backup e a restauração devem ser tratados na nova versão? Este artigo fornecerá uma introdução detalhada à nova solução de backup.

## Quais Dados Devem Ser Copiados?

No processo de backup e restauração do NocoBase, os seguintes tipos de dados estão principalmente envolvidos:

* **Dados do Banco de Dados Principal**: Os tipos de banco de dados principal suportados incluem PostgreSQL, MySQL, MariaDB e KingbaseES.
* **Dados do Banco de Dados Externo**: Os tipos de banco de dados externo suportados incluem PostgreSQL, MySQL, MariaDB, MSSQL, Oracle e KingbaseES.
* **Dados do Banco de Dados da Sub-aplicação**: Cada sub-aplicação é um banco de dados independente. Se estiver usando PostgreSQL, diferentes sub-aplicações também podem ser diferenciadas por schemas.
* **Dados do Diretório de Armazenamento**: Você pode fazer backup de toda a pasta ou apenas de dados importantes específicos, como:
  * **Dados de Anexos**: Arquivos no diretório `./storage/uploads`, que é o armazenamento local para o gerenciador de arquivos.
  * **Código do Plugin**: Plugins no diretório `./storage/plugins`, incluindo plugins comerciais e plugins de terceiros.

## Processo de Backup e Restauração

### 1. Fazendo Backup dos Dados do Banco de Dados

Os comandos de backup para diferentes bancos de dados são os seguintes:

#### PostgreSQL

```bash
pg_dump -U [nome-de-usuário] -h [host] -p [porta] -F c -b --quote-all-identifiers -f [caminho-do-arquivo-de-backup] [nome-do-banco-de-dados]
```

#### MySQL/MariaDB

```bash
mysqldump -u [nome-de-usuário] -p -h [host] -P [porta] --databases [nome-do-banco-de-dados] --replace --single-transaction --column-statistics=0 --skip-lock-tables --routines --triggers > [caminho-do-arquivo-de-backup].sql
```

### 2. Restaurando o Backup no Banco de Dados da Aplicação de Destino

Os comandos de restauração para diferentes bancos de dados são os seguintes:

#### PostgreSQL

```bash
pg_restore -U [nome-de-usuário] -h [host] -p [porta] -d [nome-do-banco-de-dados] --clean --if-exists --no-owner [caminho-do-arquivo-de-backup]
```

#### MySQL/MariaDB

```bash
mysql -u [nome-de-usuário] -p -h [host] -P [porta] [nome-do-banco-de-dados] < [caminho-do-arquivo-de-backup].sql
```

### 3. Sobrescrevendo o Armazenamento da Aplicação de Destino com o Armazenamento do Backup

```bash
# 1. Faça backup do diretório /app2/storage/ para /app2/storage-bak/
mv /app2/storage /app2/storage-bak

# 2. Copie todo o conteúdo de /app1/storage/ para /app2/storage/
cp -r /app1/storage/. /app2/storage/
```

### 4. Execute o Comando de Atualização e Inicie a Aplicação

```bash
# Atualize a aplicação
yarn nocobase upgrade

# Inicie a aplicação em ambiente de produção
yarn start

# Inicie a aplicação em ambiente de desenvolvimento local
yarn dev
```

Nota:

* Se você estiver usando Docker, basta reiniciar o contêiner.

## Plugin Gerenciador de Backups

A partir do NocoBase v1.4, os usuários das edições Professional ou Enterprise podem usar diretamente o novo plugin [Gerenciador de Backups](https://docs.nocobase.com/handbook/backups) para gerenciar facilmente o backup e a restauração de dados da aplicação.
