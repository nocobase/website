---
title: "NocoBase 0.16：全新的快取管理器"
description: "NocoBase 0.16 引入了全新的快取管理器，支援記憶體與 Redis 儲存，需要 Node v18，並更新了快取建立方法與環境變數。"
---

## 新功能

先前版本的快取可用性較差（僅支援記憶體快取），v0.16 已重新架構，內建記憶體與 Redis 儲存，同時也支援自訂儲存。詳細使用方式請參閱 [API 文件](https://docs.nocobase.com/api/cache/cache-manager)。

## 重大變更

### Node 最低版本改為 18

Node v16 已不再維護，最低版本已改為 v18。

```
{
  "engines": {
    "node": ">=18"
  }
}
```

### 快取建立方式更新

已棄用：使用 `createCache` 建立快取。

```
import { createCache } from "@nocobase/cache";

const cache = createCache();
```

快取現在由 `CacheManager` 管理，並透過 `app.cacheManager` 建立。

```
const cache = await app.cacheManager.createCache({
  name: "memory", // 快取的唯一名稱
  store: "memory", // 快取方法的唯一名稱
  // 其他設定
  max: 2000,
  ttl: 60 * 1000,
});
```

### 環境變數更新

先前的快取環境變數需要 JSON 字串來設定。

```
CACHE_CONFIG={"storePackage":"cache-manager-fs-hash","ttl":86400,"max":1000}
```

新的快取環境變數設定方式：

```
# 預設快取方法的唯一名稱，memory 或 redis
CACHE_DEFAULT_STORE=memory
# 記憶體快取的最大項目數量
CACHE_MEMORY_MAX=2000
# Redis，可選
CACHE_REDIS_URL=redis://localhost:6379
```

## 完整更新日誌

* refactor(cache): improve cache [`#3004`](https://github.com/nocobase/nocobase/pull/3004)
* fix: local storage base url [`#3063`](https://github.com/nocobase/nocobase/pull/3063)
* feat: show table definition [`#3061`](https://github.com/nocobase/nocobase/pull/3061)
* feat: mariadb support [`#3052`](https://github.com/nocobase/nocobase/pull/3052)
* fix(plugin-workflow): client minor fixes [`#3062`](https://github.com/nocobase/nocobase/pull/3062)
* chore: view inference [`#3060`](https://github.com/nocobase/nocobase/pull/3060)
* fix: sort by association collection [`#3058`](https://github.com/nocobase/nocobase/pull/3058)
* feat: node >= 18 [`#3066`](https://github.com/nocobase/nocobase/pull/3066)
