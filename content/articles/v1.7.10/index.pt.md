---
title: "NocoBase v1.7.10: Correções de Bugs"
description: "Nota de Lançamento da v1.7.10"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido o problema em que regras de vinculação causavam loop infinito ([#7050](https://github.com/nocobase/nocobase/pull/7050)) por @zhangzhonghe

  - Correção: uso de encadeamento opcional para rejeitar solicitações com segurança no APIClient quando o manipulador pode ser indefinido ([#7054](https://github.com/nocobase/nocobase/pull/7054)) por @sheldon66

  - Fechamento automático de problema ao configurar campos no formulário pop-up secundário ([#7052](https://github.com/nocobase/nocobase/pull/7052)) por @katherinehhh

- **[Visualização de dados]** Exibição incorreta do campo de data "entre" no filtro de gráfico ([#7051](https://github.com/nocobase/nocobase/pull/7051)) por @katherinehhh

- **[Documentação da API]** Plugins não oficiais do NocoBase falham ao exibir a documentação da API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) por @chenzhizdt

- **[Ação: Importar registros]** Corrigida a importação xlsx para restringir campos de área de texto de aceitar dados em formato não string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) por @aaaaaajie
