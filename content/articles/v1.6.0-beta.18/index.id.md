---
title: "NocoBase v1.6.0-beta.18: Menambahkan uji konfigurasi keamanan token untuk autentikasi kunci API"
description: "Catatan Rilis v1.6.0-beta.18"
---

### 🚀 Peningkatan

- **[Auth: Kunci API]** Menambahkan uji konfigurasi keamanan token untuk autentikasi kunci API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) oleh @sheldon66

### 🐛 Perbaikan Bug

- **[server]** Cache peramban yang salah setelah menjalankan perintah `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) oleh @gchust

- **[auth]** Menangani pengguna yang tidak ada dengan error 401 dan memperbarui pesan lokal ([#6381](https://github.com/nocobase/nocobase/pull/6381)) oleh @sheldon66

- **[Klien WEB]** Halaman menjadi kosong setelah mengganti peran ([#6388](https://github.com/nocobase/nocobase/pull/6388)) oleh @aaaaaajie

- **[Editor tema]** Penggantian tema gagal setelah beberapa kali penggantian berturut-turut ([#6387](https://github.com/nocobase/nocobase/pull/6387)) oleh @katherinehhh

- **[Workflow: Persetujuan]**
  - Memperbaiki parameter urutan saat menambahkan penugasan oleh @mytharcher

  - Menghindari konfigurasi penugasan yang salah saat menanyakan semua pengguna oleh @mytharcher

- **[WeCom]** Memperbaiki tautan petunjuk login dan error login dingtalk oleh @chenzhizdt
