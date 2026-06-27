---
title: "NocoBase 0.19：优化应用流程"
description: "NocoBase 0.19 引入了遥测、应用备份与恢复、命令行优化以及多种内核改进，以增强安装、启动和升级流程。"
---

## Fitur baru

### Telemetri

* Dokumentasi pengembangan: [https://docs.nocobase.com/development/server/telemetry](https://docs.nocobase.com/development/server/telemetry)
* API Kernel: [https://docs.nocobase.com/api/telemetry/telemetry](https://docs.nocobase.com/api/telemetry/telemetry)
* Plugin Prometheus: [https://docs.nocobase.com/handbook/telemetry-prometheus](https://docs.nocobase.com/handbook/telemetry-prometheus)

### Pencadangan dan pemulihan aplikasi

* Dokumentasi plugin: [https://docs.nocobase.com/handbook/backup-restore](https://docs.nocobase.com/handbook/backup-restore)

## Optimasi kernel

### Optimasi baris perintah

Untuk NocoBase 0.19 dan seterusnya, perintah kustom plugin harus ditempatkan di direktori `src/server/commands/*.ts` plugin dengan konten sebagai berikut:

```
export default function(app) {
  app.command('custom1').action();
}
```

Alur eksekusi baris perintah:

![Alur eksekusi baris perintah](https://static-docs.nocobase.com/c5b5296293a4f445511c9f8778148480.jpg)

Konfigurasi khusus Command

* `ipc()` Saat aplikasi berjalan, baris perintah mengirimkan perintah melalui ipc untuk mengoperasikan instance aplikasi yang sedang berjalan. Jika `ipc()` tidak dikonfigurasi, instance aplikasi baru akan dibuat dan kemudian operasi akan dijalankan (tidak akan mengganggu instance aplikasi yang sedang berjalan).
* `auth()` melakukan verifikasi basis data, jika konfigurasi basis data salah, perintah ini tidak akan dijalankan.
* `preload()` apakah akan memuat konfigurasi aplikasi terlebih dahulu, yaitu menjalankan app.load()

Ini dapat dikonfigurasi sesuai dengan penggunaan perintah yang sebenarnya, contohnya sebagai berikut:

```
app.command('a').ipc().action()
app.command('a').auth().action()
app.command('a').preload().action()
```

### Optimasi proses instalasi

![Optimasi proses instalasi](https://static-docs.nocobase.com/8f257e6f5e0cd73de3a2e3dc2c61f39e.webp)

### Optimasi proses startup

![Optimasi proses startup](https://static-docs.nocobase.com/a73c3b50195c2899db30672ae8e86af3.webp)

### Optimasi proses upgrade

![Optimasi proses upgrade](https://static-docs.nocobase.com/ba16f9f55c2a8bc5f7694b84077bea7b.webp)

Migrasi upgrade dikategorikan menjadi beforeLoad, afterSync, dan afterLoad:

* beforeLoad: Dieksekusi sebelum pemuatan setiap modul, dibagi menjadi tiga tahap:
  * Sebelum memuat modul kernel
  * Sebelum memuat plugin preset
  * Sebelum memuat plugin lainnya
* afterSync: Dieksekusi setelah sinkronisasi konfigurasi tabel data dengan basis data, dibagi menjadi tiga tahap:
  * Setelah menyinkronkan tabel kernel dengan basis data
  * Setelah menyinkronkan tabel plugin preset dengan basis data
  * Setelah menyinkronkan tabel plugin lainnya dengan basis data
* afterLoad: Dieksekusi hanya setelah aplikasi selesai dimuat sepenuhnya.

```
export default class extends Migration {
  // Kapan migrasi dilakukan
  on = 'beforeLoad';
  // Hanya dijalankan ketika nomor versi aplikasi berikut terpenuhi.
  appVersion = '<=0.13.0-alpha.5';
  // Hanya dijalankan ketika nomor versi plugin berikut terpenuhi.
  pluginVersion = '<=0.13.0-alpha.5';
  // Skrip upgrade.
  async up() {}
}
```

### Menambahkan perintah create-migration

Membuat file migrasi

```
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  package name
  --on [on]    Options include beforeLoad, afterSync and afterLoad
  -h, --help   display help for command
```

Contoh

```
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] add app main into supervisor   
2024-01-07 17:33:13 [info ] migration file in /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
✨  Done in 5.02s.
```

Sebuah file migrasi akan dihasilkan di `src/server/migrations` dari paket plugin `@nocobase/plugin-client` sebagai `20240107173313-update-ui.ts` dengan konten awal sebagai berikut:

```
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.18.0-alpha.10';

  async up() {
    // coding
  }
}
```

### Direktori berbasis konvensi plugin

```
|- /plugin-sample-hello
  |- /dist             # Direktori untuk plugin yang telah dikompilasi
  |- /src              # Kode sumber untuk plugin
    |- /client
      |- plugin.ts
      |- index.ts      # Titik masuk sisi klien
    |- /locale         # Direktori konvensional untuk file multibahasa bersama antara frontend dan backend
    |- /swagger        # Direktori konvensional untuk dokumentasi Swagger
    |- /server
      |- collections   # Direktori konvensional untuk konfigurasi tabel data plugin
      |- commands      # Direktori konvensional untuk perintah kustom
      |- migrations    # Direktori konvensional untuk file migrasi
      |- plugin.ts     # Kelas plugin
      |- index.ts      # Titik masuk sisi server
    |- index.ts
  |- .npmignore
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

Optimasi proses pengujian

Menyediakan metode `createMockServer()` dan `startMockServer()` yang lebih ramah pengguna untuk menulis kasus uji:

* `createMockServer()` Membuat dan memulai aplikasi dengan cepat.
* `startMockServer()` Memulai aplikasi dengan cepat (tanpa menginstal ulang).

```
import { createMockServer } from '@nocobase/server';

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['nocobase'],
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('case1', async () => {
    // coding...
  });
});
```

## Perubahan yang memutuskan (Breaking changes)

### Perubahan konfigurasi Collections, commands, migrations ke direktori berbasis konvensi

Contoh 1: Collections dimuat oleh importCollections, kode dihapus langsung, dan file konfigurasi collections harus ditempatkan di direktori `src/server/collections`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

Contoh 2: Collections dimuat melalui this.db.import, kode langsung dihapus, file konfigurasi collections harus ditempatkan di direktori `src/server/collections`

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

Contoh 3: Collection yang didefinisikan oleh db.collection() disarankan untuk ditempatkan di direktori `src/server/collections`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

Tambahkan file `src/server/collections/examples.ts` baru dengan konten sebagai berikut:

```
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

Contoh 4: Hapus db.addMigrations() dan tempatkan file migrasi di direktori `src/server/migrations`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.addMigrations({
-     namespace: 'auth',
-     directory: resolve(__dirname, 'migrations'),
-     context: {
-       plugin: this,
-     },
-   });
  }
}
```

Contoh 5: Menyesuaikan baris perintah

```
export class MyPlugin extends Plugin {
  load() {
-   this.app
-      .command('echo')
-      .option('-v, --version');
-      .action(async ([options]) => {
-        console.log('Hello World!');
-        if (options.version) {
-          console.log('Current version:', app.getVersion());
-        }
-      });
-  }
}
```

Tambahkan file `src/server/collections/echo.ts` baru dengan konten sebagai berikut:

```
export default function(app) {
  app
    .command('echo')
    .option('-v, --version');
    .action(async ([options]) => {
      console.log('Hello World!');
      if (options.version) {
        console.log('Current version:', await app.version.get());
      }
    });
}
```
