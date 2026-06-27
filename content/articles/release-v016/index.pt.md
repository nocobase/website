---
title: "NocoBase 0.16: Novo gerenciador de cache"
description: "NocoBase 0.16 apresenta um novo gerenciador de cache com suporte a armazenamento em memória e Redis, requer Node v18 e atualiza métodos de criação de cache e variáveis de ambiente."
---

## Novas Funcionalidades

A versão anterior do cache tinha baixa usabilidade (suportava apenas cache em memória). A v0.16 foi reformulada, com armazenamento em memória e Redis integrados, além de suporte a armazenamento personalizado. Consulte a [documentação da API](https://docs.nocobase.com/api/cache/cache-manager) para detalhes de uso.

## Mudanças Importantes

### Versão mínima do Node alterada para 18

O Node v16 não é mais mantido; a versão mínima foi alterada para v18.

```
{
  "engines": {
    "node": ">=18"
  }
}
```

### Atualização do método de criação de cache

Obsoleto: Uso de `createCache` para criação de cache.

```
import { createCache } from "@nocobase/cache";

const cache = createCache();
```

Agora o cache é gerenciado pelo `CacheManager` e criado com `app.cacheManager`.

```
const cache = await app.cacheManager.createCache({
  name: "memory", // nome único do cache
  store: "memory", // nome único do método de cache
  // outras configurações
  max: 2000,
  ttl: 60 * 1000,
});
```

### Atualização das variáveis de ambiente

As variáveis de ambiente anteriores do cache exigiam uma string JSON para configuração.

```
CACHE_CONFIG={"storePackage":"cache-manager-fs-hash","ttl":86400,"max":1000}
```

Novas variáveis de ambiente para configurar o cache:

```
# Nome único do método de cache padrão, memory ou redis
CACHE_DEFAULT_STORE=memory
# Número máximo de itens no cache em memória
CACHE_MEMORY_MAX=2000
# Redis, opcional
CACHE_REDIS_URL=redis://localhost:6379
```

## Registro completo de alterações

* refactor(cache): improve cache [`#3004`](https://github.com/nocobase/nocobase/pull/3004)
* fix: local storage base url [`#3063`](https://github.com/nocobase/nocobase/pull/3063)
* feat: show table definition [`#3061`](https://github.com/nocobase/nocobase/pull/3061)
* feat: mariadb support [`#3052`](https://github.com/nocobase/nocobase/pull/3052)
* fix(plugin-workflow): client minor fixes [`#3062`](https://github.com/nocobase/nocobase/pull/3062)
* chore: view inference [`#3060`](https://github.com/nocobase/nocobase/pull/3060)
* fix: sort by association collection [`#3058`](https://github.com/nocobase/nocobase/pull/3058)
* feat: node >= 18 [`#3066`](https://github.com/nocobase/nocobase/pull/3066)
