---
title: "NocoBase v2.0.0-beta.4: Corrige mensagem de erro incorreta quando um erro de restrição única é acionado durante a importação assíncrona de XLSX"
description: "Nota de lançamento da v2.0.0-beta.4"
---

### 🐛 Correções de Bugs

- **[Ação: Importar registros]** Corrige mensagem de erro incorreta ao ocorrer uma violação de restrição de unicidade durante a importação assíncrona de XLSX ([#8342](https://github.com/nocobase/nocobase/pull/8342)) por @cgyrock

- **[Ação: Exportar registros Pro]** Corrige erro ao executar tarefas assíncronas de importação/exportação em subaplicações enquanto a aplicação principal não possui o plugin de importação/exportação Pro ativado por @cgyrock

- **[Gerenciador de e-mail]** Exibe botão "responder a todos" e o escopo de dados agora suporta filtragem de mensagens filhas por @jiannx
