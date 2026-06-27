---
title: "NocoBase 0.16: Manajer cache baru"
description: "NocoBase 0.16 memperkenalkan manajer cache baru yang mendukung penyimpanan memori dan Redis, memerlukan Node v18, serta memperbarui metode pembuatan cache dan variabel lingkungan."
---

## Fitur Baru

Versi sebelumnya dari cache memiliki kegunaan yang buruk (hanya mendukung cache memori), v0.16 telah direfaktor, dengan penyimpanan memori dan redis bawaan, serta mendukung penyimpanan kustom. Silakan merujuk ke [dokumentasi API](https://docs.nocobase.com/api/cache/cache-manager) untuk detail cara penggunaannya.

## Perubahan yang Memutuskan Kompatibilitas

### Versi minimum Node diubah menjadi 18

Node v16 tidak lagi dipelihara, versi minimum telah diubah menjadi v18.

```
{
  "engines": {
    "node": ">=18"
  }
}
```

### Pembaruan metode pembuatan cache

Tidak digunakan lagi: Gunakan `createCache` untuk pembuatan cache.

```
import { createCache } from "@nocobase/cache";

const cache = createCache();
```

Cache sekarang dikelola oleh `CacheManager` dan dibuat dengan `app.cacheManager`.

```
const cache = await app.cacheManager.createCache({
  name: "memory", // nama unik cache
  store: "memory", // nama unik metode cache
  // konfigurasi lainnya
  max: 2000,
  ttl: 60 * 1000,
});
```

### Pembaruan variabel lingkungan

Variabel lingkungan cache sebelumnya memerlukan string JSON untuk konfigurasi.

```
CACHE_CONFIG={"storePackage":"cache-manager-fs-hash","ttl":86400,"max":1000}
```

Variabel lingkungan baru untuk mengonfigurasi cache:

```
# Nama unik metode cache default, memory atau redis
CACHE_DEFAULT_STORE=memory
# Jumlah maksimum item dalam cache memori
CACHE_MEMORY_MAX=2000
# Redis, opsional
CACHE_REDIS_URL=redis://localhost:6379
```

## Log perubahan lengkap

* refactor(cache): meningkatkan cache [`#3004`](https://github.com/nocobase/nocobase/pull/3004)
* fix: url dasar penyimpanan lokal [`#3063`](https://github.com/nocobase/nocobase/pull/3063)
* feat: menampilkan definisi tabel [`#3061`](https://github.com/nocobase/nocobase/pull/3061)
* feat: dukungan mariadb [`#3052`](https://github.com/nocobase/nocobase/pull/3052)
* fix(plugin-workflow): perbaikan kecil pada klien [`#3062`](https://github.com/nocobase/nocobase/pull/3062)
* chore: inferensi tampilan [`#3060`](https://github.com/nocobase/nocobase/pull/3060)
* fix: mengurutkan berdasarkan koleksi asosiasi [`#3058`](https://github.com/nocobase/nocobase/pull/3058)
* feat: node >= 18 [`#3066`](https://github.com/nocobase/nocobase/pull/3066)
