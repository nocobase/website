---
title: "Sederhanakan proses menambah dan memperbarui plugin"
description: "Pelajari bagaimana pembaruan terbaru NocoBase menyederhanakan manajemen plugin, memungkinkan instalasi dan pembaruan yang lebih mudah."
---

Untuk meningkatkan pengalaman manajemen plugin, kami baru saja melakukan pembaruan signifikan pada modul manajer plugin. Peningkatan utama berfokus pada proses penambahan dan peningkatan plugin. Harap diperhatikan bahwa fitur-fitur ini hanya tersedia di versi 1.4.0-alpha dan yang lebih baru. Cabang `main` saat ini adalah v1.3. Untuk merasakan fitur-fitur baru ini, silakan beralih ke cabang `next` (v1.4).

Pembaruan spesifik dalam rilis [v1.4.0-alpha.20240914235554](https://github.com/nocobase/nocobase/releases/tag/v1.4.0-alpha.20240914235554) ini adalah sebagai berikut:

## Daftar plugin sekarang dibaca langsung dari plugin lokal

![4f331f688f18c4c3458b2dff15a9f208.png](https://static-docs.nocobase.com/4f331f688f18c4c3458b2dff15a9f208.png)

Daftar plugin tidak lagi dibaca dari tabel plugin database, tetapi langsung dari variabel lingkungan atau direktori berikut:

* Variabel lingkungan
  * `APPEND_PRESET_BUILT_IN_PLUGINS`
  * `APPEND_PRESET_LOCAL_PLUGINS`
* Direktori plugin
  * `packages/plugins`: Plugin dalam pengembangan, harus menyertakan kode sumber.
  * `storage/plugins`: Plugin independen, harus menyertakan plugin yang sudah dikompilasi.

Plugin diatur sebagai paket npm dengan struktur direktori berikut:

```bash
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello3/
      |- /plugin-hello4/
    |- /my-nocobase-plugin-hello3/
    |- /my-nocobase-plugin-hello4/
```

## Ekstrak paket plugin

Ekstrak langsung paket plugin ke direktori yang ditentukan, dan antarmuka manajer plugin akan mendeteksinya secara otomatis. Contoh:

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.3.15-beta.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

Perintah ini memastikan bahwa plugin diekstrak ke `/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas` tanpa menyertakan direktori `package`. Struktur direktori yang benar harus:

```bash
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.js
./plugin-auth-cas/dist/server/auth.js
./plugin-auth-cas/client.js
./plugin-auth-cas/dist/constants.js
./plugin-auth-cas/dist/externalVersion.js
./plugin-auth-cas/dist/client/index.js
./plugin-auth-cas/dist/index.js
./plugin-auth-cas/dist/server/index.js
./plugin-auth-cas/dist/server/actions/login.js
./plugin-auth-cas/dist/server/plugin.js
./plugin-auth-cas/server.js
./plugin-auth-cas/dist/server/actions/service.js
./plugin-auth-cas/dist/locale/en-US.json
./plugin-auth-cas/dist/locale/ko_KR.json
./plugin-auth-cas/package.json
./plugin-auth-cas/dist/locale/zh-CN.json
./plugin-auth-cas/README.md
./plugin-auth-cas/README.zh-CN.md
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.d.ts
./plugin-auth-cas/dist/server/auth.d.ts
./plugin-auth-cas/client.d.ts
./plugin-auth-cas/dist/constants.d.ts
./plugin-auth-cas/dist/client/index.d.ts
./plugin-auth-cas/dist/client/locale/index.d.ts
./plugin-auth-cas/dist/index.d.ts
./plugin-auth-cas/dist/server/index.d.ts
./plugin-auth-cas/dist/server/actions/login.d.ts
./plugin-auth-cas/dist/client/Options.d.ts
./plugin-auth-cas/dist/server/plugin.d.ts
./plugin-auth-cas/server.d.ts
./plugin-auth-cas/dist/server/actions/service.d.ts
./plugin-auth-cas/dist/client/SigninPage.d.ts
./plugin-auth-cas/LICENSE.txt
```

## Menggabungkan proses penambahan dan pembaruan plugin.

Di antarmuka, gunakan tombol "Tambah & Perbarui" di pojok kanan atas untuk menambah atau memperbarui.

![b5a4fd82955807dc18060772c6689f84.png](https://static-docs.nocobase.com/b5a4fd82955807dc18060772c6689f84.png)

Anda juga dapat menggunakan perintah `pm add` untuk menambah atau memperbarui plugin. Prosesnya sebagai berikut:

![01f3658240cd23353f25833453687df3.png](https://static-docs.nocobase.com/01f3658240cd23353f25833453687df3.png)

## Proses instalasi untuk plugin komersial

Tidak perlu mengunduh plugin satu per satu; cukup konfigurasikan variabel lingkungan berikut:

```Bash
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=your-username   # nama pengguna platform layanan
NOCOBASE_PKG_PASSWORD=your-password   # kata sandi platform layanan
```

Selama instalasi atau peningkatan aplikasi, plugin akan diunduh dan diperbarui secara otomatis (versi terdeteksi otomatis).

```ts
yarn nocobase install
yarn nocobase upgrade
```

Misalnya, log perintah peningkatan:

```Bash
nocobase git:(main) yarn nocobase upgrade
$ nocobase upgrade
WAIT: TypeScript compiling...
$ nocobase pkg download-pro
Download success: @nocobase/plugin-custom-brand@1.3.22-beta
Download success: @nocobase/plugin-verdaccio@1.3.22-beta
Download success: @nocobase/plugin-workflow-response-message@1.3.22-beta
Download success: @nocobase/plugin-workflow-request-interceptor@1.3.22-beta
Download success: @nocobase/plugin-workflow-json-query@1.3.22-beta
Download success: @nocobase/plugin-workflow-approval@1.3.22-beta
Download success: @nocobase/plugin-telemetry-prometheus@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-postgres@1.3.22-beta
Download success: @nocobase/plugin-embed@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mysql@1.3.22-beta
Download success: @nocobase/plugin-workflow-variable@1.3.22-beta
Download success: @nocobase/plugin-collection-fdw@1.3.22-beta
Download success: @nocobase/plugin-demo-platform@1.3.22-beta
Download success: @nocobase/plugin-departments@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mariadb@1.3.22-beta
Download success: @nocobase/plugin-auth-cas@1.3.22-beta
Download success: @nocobase/plugin-auth-saml@1.3.22-beta
Download success: @nocobase/plugin-auth-oidc@1.3.22-beta
Download success: @nocobase/plugin-comments@1.3.22-beta
Download success: @nocobase/plugin-workflow-custom-action-trigger@1.3.22-beta
Download success: @nocobase/plugin-auth-ldap@1.3.22-beta
Download success: @nocobase/plugin-block-tree@1.3.22-beta
Download success: @nocobase/plugin-auth-dingtalk@1.3.22-beta
Download success: @nocobase/plugin-data-source-rest-api@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mssql@1.3.22-beta
```

Untuk server intranet, Anda dapat mengunggah folder `storage/plugins` lokal ke server lalu menjalankan perintah instalasi atau peningkatan NocoBase.

```bash
scp -r /nocobase1/storage/plugins user2@ip2:/nocobase2/storage/plugins

yarn nocobase install
# atau
yarn nocobase upgrade
```

## Menghapus plugin

Karena daftar plugin tidak lagi dibaca dari tabel plugin database tetapi langsung dari plugin lokal, menghapus plugin semudah menghapus folder plugin. Dengan kata lain, menghapus folder plugin secara efektif akan menghapus plugin tersebut.
