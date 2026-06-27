---
title: "NocoBase v1.7.0 Lançado Oficialmente"
description: "Gerenciamento de permissões aprimorado, desempenho do sistema otimizado e plugins de código aberto para melhorar de forma abrangente a funcionalidade e a experiência do usuário"
---

## Novo Recurso

### União de Funções

A União de Funções é um modo de gerenciamento de permissões. De acordo com as configurações do sistema, os desenvolvedores podem optar por usar `Funções independentes`, `Permitir união de funções` ou `Permitir união de funções`, para atender a diferentes requisitos de permissão.

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

Referência: [União de Funções](https://docs.nocobase.com/handbook/acl/manual)

### Verificação e Autenticação de Dois Fatores (2FA)

O recurso original de código de verificação foi atualizado para um sistema abrangente de gerenciamento de verificação, suportando múltiplos métodos de autenticação (como TOTP). O sistema também suporta autenticação de dois fatores (2FA), que requer uma etapa de verificação adicional durante o login, além da senha, aumentando significativamente a segurança da conta.

![20250603133219_rec_-vg5hh3.gif](https://static-docs.nocobase.com/20250603133219_rec_-vg5hh3.gif)

Referência:

* [Verificação](https://docs.nocobase.com/handbook/verification)
* [Autenticação de Dois Fatores](https://docs.nocobase.com/handbook/two-factor-authentication)
* [Autenticador TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)

### Impressão de Modelo

A impressão de modelo agora suporta renderização dinâmica de imagens e códigos de barras.

![](https://static-docs.nocobase.com/20250414211130-2025-04-14-21-11-31.png)

Referência: [Impressão de Modelo](https://docs-cn.nocobase.com/handbook/action-template-print#%E5%9C%A8-docx-%E6%96%87%E4%BB%B6%E4%B8%AD%E6%8F%92%E5%85%A5%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87)

### Filtro de Múltiplas Palavras-chave

O plugin de filtro de múltiplas palavras-chave adiciona poderosas capacidades de filtragem de texto à plataforma NocoBase, permitindo filtrar dados usando múltiplas palavras-chave e aumentando grandemente a flexibilidade e eficiência das consultas de dados.

![20250603152726_rec_-ix3j8w.gif](https://static-docs.nocobase.com/20250603152726_rec_-ix3j8w.gif)

Referência: [Filtro de múltiplas palavras-chave](https://docs.nocobase.com/handbook/multi-keyword-filter)

### Filtro de Data Suporta Seleção de Intervalo de Data Relativo

Suporta filtragem por deslocamentos de tempo personalizados (dias/semanas/meses/trimestres/anos) e datas específicas, permitindo consultas de intervalo de tempo mais flexíveis.

![20250603130948_rec_-plwa6o.gif](https://static-docs.nocobase.com/20250603130948_rec_-plwa6o.gif)

### Variáveis do Lado Esquerdo

As variáveis do lado esquerdo em uma condição são usadas para definir o "objeto sendo julgado" na regra de vinculação, ou seja, a condição avaliará o valor desta variável para determinar se o comportamento de vinculação deve ser acionado.

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

Referência: [Variáveis do Lado Esquerdo](https://docs.nocobase.com/handbook/ui/linkage-rule#left-side-variables)

### Modelo Herdado

Modelos herdados são ideais quando você deseja que blocos sigam as atualizações básicas de um modelo, mas também permitam alterações específicas. Os blocos herdam as configurações do modelo e podem estendê-las ou substituí-las. As configurações não alteradas no bloco serão atualizadas automaticamente com o modelo.

![主界面](https://static-docs.nocobase.com/main-screen-block-templates.png)

Referência: [Modelo Herdado](https://docs.nocobase.com/handbook/block-template#inherited-template)

### Regras de Vinculação de Bloco

As regras de vinculação de bloco permitem que os usuários controlem dinamicamente a visibilidade dos blocos, possibilitando o gerenciamento da exibição de elementos no nível do bloco.

![image-ccerr7.png](https://static-docs.nocobase.com/image-ccerr7.png)

Referência: [Regras de Vinculação de Bloco](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-linkage-rule)

### Após Envio Bem-sucedido

Após o envio bem-sucedido, suporta a atualização de dados em outros blocos e a navegação para páginas de detalhes com parâmetros.

![image-v29vlv.png](https://static-docs.nocobase.com/image-v29vlv.png)

Referência: [Após Envio Bem-sucedido](https://docs.nocobase.com/handbook/ui/actions/action-settings/affter-successful)

### Gerenciamento de Categorias de Fluxo de Trabalho

![1-62ogb6.png](https://static-docs.nocobase.com/1-62ogb6.png)

### Plugins de Código Aberto para Departamento e URL de Anexo

![image-br8u55.png](https://static-docs.nocobase.com/image-br8u55.png)

## Melhorias

### Aprimoramentos nas Propriedades da Regra de Vinculação

* Campos selecionáveis agora suportam opções configuráveis
* Campos de data agora suportam a definição de um intervalo de datas

![20250603143237_rec_-k8hene.gif](https://static-docs.nocobase.com/20250603143237_rec_-k8hene.gif)

Referência: [Regras de Vinculação de Campo](https://docs.nocobase.com/handbook/ui/blocks/block-settings/field-linkage-rule)

### Import Pro

A configuração de importação agora suporta o uso de múltiplos campos para identificar registros de forma única, bem como opções para sobrescrever ou ignorar células em branco durante a importação.

![20250603153457_rec_-9zfsfx.gif](https://static-docs.nocobase.com/20250603153457_rec_-9zfsfx.gif)

Referência:[Import Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Otimização de Performance para Exportação de XLSX

* Estouro de memória e congelamento do aplicativo ao exportar grandes tabelas de dados
* Existe uma probabilidade de dados duplicados nos dados exportados
* Otimização de consulta para dados exportados com base em índices, restrições únicas e estratégias de índice
* Adicionar uma fila de exportação concorrente e definir o número de concorrência através de variáveis de ambiente.

![20250505171706](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250505171706.png)

Referência:

* [Exportações Concorrentes](https://docs.nocobase.com/handbook/action-export-pro#concurrent-exports)
* [Sobre Performance](https://docs.nocobase.com/handbook/action-export-pro#about-performance)

### Otimização de Performance para Importação de Arquivos XLSX

* Alterar a estratégia de importação de linha única original para inserção em lote
* Reconstruir o mecanismo de identificação de duplicatas. Mudar de processamento de linha única para processamento em lote, mantendo a lógica de atualização e o acionamento do fluxo de trabalho inalterados

Referência: [Sobre Performance](https://docs.nocobase.com/handbook/action-import-pro#about-performance)

### Eficiência de Execução do Fluxo de Trabalho Melhorada em 100%

![image-ligrnm.png](https://static-docs.nocobase.com/image-ligrnm.png)
