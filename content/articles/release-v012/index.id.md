---
title: "NocoBase 0.12: Alat pembangun plugin baru"
description: "NocoBase 0.12 memperkenalkan alat pembangun plugin baru untuk penggunaan produksi yang mulus, memperbarui metode instalasi, dan menggabungkan @nocobase/app-client dan @nocobase/app-server menjadi @nocobase-app."
---

## Fitur Baru

* Alat pembangun plugin baru. Plugin yang telah dibangun akan dapat digunakan langsung di lingkungan produksi tanpa perlu pembangunan ulang.

## Peningkatan Aplikasi

### Peningkatan instalasi Docker

Tidak ada perubahan, lihat [Panduan Peningkatan Gambar Docker](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose) untuk peningkatan.

### Peningkatan instalasi kode sumber

Alat pembangun plugin telah ditingkatkan, dan cache perlu dibersihkan setelah menarik sumber baru.

```
git pull # Tarik kode sumber baru.
yarn clean # Bersihkan cache.
```

Untuk detail lebih lanjut, lihat [panduan peningkatan sumber Git](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone).

### Peningkatan instalasi create-nocobase-app

Unduh ulang versi baru melalui `yarn create` dan perbarui konfigurasi .env, lihat [panduan peningkatan versi utama](https://docs-cn.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app) untuk detail lebih lanjut.

## Perubahan yang Tidak Kompatibel

### @nocobase/app-client dan @nocobase/app-server digabung menjadi @nocobase-app

Aplikasi yang diinstal melalui create-nocobase-app tidak lagi memiliki direktori packages/app, dan kode khusus di packages/app perlu dipindahkan ke plugin khusus.

### Jalur dist/client aplikasi telah berubah.

Jika Anda mengonfigurasi nginx sendiri, Anda perlu melakukan penyesuaian serupa

```
server {
- root /app/nocobase/packages/app/client/dist;
+ root /app/nocobase/node_modules/@nocobase/app/dist/client;

  location / {
-       root /app/nocobase/packages/app/client/dist;
+       root /app/nocobase/node_modules/@nocobase/app/dist/client;
        try_files $uri $uri/ /index.html;
        add_header Last-Modified $date_gmt;
        add_header Cache-Control 'no-store, no-cache';
        if_modified_since off;
        expires off;
        etag off;
    }
}
```

### Plugin pihak ketiga perlu dibangun ulang

Lihat panduan peningkatan plugin pihak ketiga di bawah ini

## Panduan Peningkatan Plugin Pihak Ketiga

### Direktori plugin harus memiliki direktori `src/client` dan `src/server`.

```
// src/client/index.ts
import { Plugin } from '@nocobase/client';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

```
// src/server/index.ts
import { Plugin } from '@nocobase/server';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

Kode demo spesifik dapat dilihat di: [sample-hello](https://github.com/nocobase/nocobase/tree/main/packages/samples/hello)

### Penempatan multibahasa plugin di direktori `src/locale`

Baik frontend maupun backend, file terjemahan multibahasa ditempatkan di direktori `src/locale`, sehingga plugin tidak perlu memuat paket multibahasa sendiri.

### Penyesuaian dependensi plugin

Dependensi plugin dibagi menjadi dependensi sendiri dan dependensi global. Dependensi global digunakan secara langsung secara global dan tidak akan dikemas ke dalam produk plugin, sedangkan dependensi sendiri akan dikemas ke dalam produk. Setelah plugin dibangun, lingkungan produksi bersifat plug-and-play, dan tidak perlu menginstal dependensi atau membangun ulang. Penyesuaian dependensi plugin meliputi:

* Masukkan paket terkait `@nocobase/*` ke dalam `peerDependencies` dan tentukan nomor versi sebagai `0.x`;
* Tempatkan dependensi lain di `devDependencies`, bukan `dependencies`, karena plugin akan mengekstrak semua dependensi yang diperlukan oleh lingkungan produksi setelah pengemasan.

```
{
  "devDependencies": {
    "@formily/react": "2.x",
    "@formily/shared": "2.x",
    "ahooks": "3.x",
    "antd": "5.x",
    "dayjs": "1.x",
    "i18next": "22.x",
    "react": "18.x",
    "react-dom": "18.x",
    "react-i18next": "11.x"
  },
  "peerDependencies": {
    "@nocobase/actions": "0.x",
    "@nocobase/client": "0.x",
    "@nocobase/database": "0.x",
    "@nocobase/resourcer": "0.x",
    "@nocobase/server": "0.x",
    "@nocobase/test": "0.x",
    "@nocobase/utils": "0.x"
  }
}
```

### Jalur output plugin telah diubah dari `lib` menjadi `dist`

Struktur direktori dist

```
|- dist
  |- client       # Sisi klien, umd
    |- index.js
    |- index.d.ts
  |- server       # Sisi server, cjs
    |- index.js
    |- index.d.ts
    |- others
  |- locale       # Paket multibahasa
  |- node_modules # Dependensi server
```

Penyesuaian terkait lainnya meliputi:

Penyesuaian parameter utama package.json

```
{
  - "main": "./lib/server/index.js",
  + "main": "./dist/server/index.js",
}
```

client.d.ts

```
export * from './dist/client';
export { default } from './dist/client';
```

client.js

```
module.exports = require('./dist/client/index.js');
```

server.d.ts

```
export * from './dist/server';
export { default } from './dist/server';
```

server.js

```
module.exports = require('./dist/server/index.js');
```
