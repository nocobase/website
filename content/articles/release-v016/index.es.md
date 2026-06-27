---
title: "NocoBase 0.16: Nuevo administrador de caché"
description: "NocoBase 0.16 introduce un nuevo administrador de caché que admite almacenes de memoria y Redis, requiere Node v18, y actualiza los métodos de creación de caché y las variables de entorno."
---

## Nuevas Funcionalidades

La versión anterior de la caché tenía poca usabilidad (solo soportaba caché en memoria). La v0.16 ha sido rediseñada, incluye almacenamiento en memoria y redis, y también admite almacenamiento personalizado. Consulta la [documentación de la API](https://docs.nocobase.com/api/cache/cache-manager) para obtener más detalles sobre cómo usarla.

## Cambios Importantes

### Versión mínima de Node cambiada a 18

Node v16 ya no recibe mantenimiento; la versión mínima se ha cambiado a v18.

```
{
  "engines": {
    "node": ">=18"
  }
}
```

### Actualización del método de creación de caché

Obsoleto: Usar `createCache` para la creación de caché.

```
import { createCache } from "@nocobase/cache";

const cache = createCache();
```

Ahora la caché es gestionada por `CacheManager` y se crea con `app.cacheManager`.

```
const cache = await app.cacheManager.createCache({
  name: "memory", // nombre único de la caché
  store: "memory", // nombre único del método de caché
  // otra configuración
  max: 2000,
  ttl: 60 * 1000,
});
```

### Actualización de variables de entorno

Las variables de entorno anteriores de la caché requerían una cadena JSON para su configuración.

```
CACHE_CONFIG={"storePackage":"cache-manager-fs-hash","ttl":86400,"max":1000}
```

Nuevas variables de entorno para configurar la caché:

```
# Nombre único del método de caché predeterminado, memory o redis
CACHE_DEFAULT_STORE=memory
# Número máximo de elementos en la caché de memoria
CACHE_MEMORY_MAX=2000
# Redis, opcional
CACHE_REDIS_URL=redis://localhost:6379
```

## Registro de cambios completo

* refactor(cache): mejorar la caché [`#3004`](https://github.com/nocobase/nocobase/pull/3004)
* fix: url base del almacenamiento local [`#3063`](https://github.com/nocobase/nocobase/pull/3063)
* feat: mostrar definición de tabla [`#3061`](https://github.com/nocobase/nocobase/pull/3061)
* feat: soporte para mariadb [`#3052`](https://github.com/nocobase/nocobase/pull/3052)
* fix(plugin-workflow): correcciones menores en el cliente [`#3062`](https://github.com/nocobase/nocobase/pull/3062)
* chore: inferencia de vistas [`#3060`](https://github.com/nocobase/nocobase/pull/3060)
* fix: ordenar por colección de asociación [`#3058`](https://github.com/nocobase/nocobase/pull/3058)
* feat: node >= 18 [`#3066`](https://github.com/nocobase/nocobase/pull/3066)
