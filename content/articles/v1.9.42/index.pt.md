---
title: "NocoBase v1.9.42: Corrige um problema em que os usuários não podem ser registrados automaticamente quando o celular está ausente"
description: "Nota de lançamento da v1.9.42"
---

### 🚀 Melhorias

- **[Auth: DingTalk]** Usar `userid` como chave padrão para associação de usuários, mantendo compatibilidade com autenticadores existentes que dependem do celular por @2013xile

### 🐛 Correções de Bugs

- **[Workflow: Aprovação]** Corrigir problema de desempenho causado por campo JSON no carregamento de listas (MySQL) por @mytharcher

- **[WeCom]** Corrigir problema em que usuários não podiam ser registrados automaticamente quando o celular estava ausente por @2013xile
