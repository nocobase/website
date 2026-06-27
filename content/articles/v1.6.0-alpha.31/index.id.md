---
title: "NocoBase v1.6.0-alpha.31: kompatibel dengan pengaturan kontrol akses tombol historis"
description: "Catatan Rilis v1.6.0-alpha.31"
---

### 🎉 Fitur Baru

- **[client]** Kompatibel dengan pengaturan kontrol akses tombol historis ([#6376](https://github.com/nocobase/nocobase/pull/6376)) oleh @katherinehhh

- **[Workflow: Pesan respons]** Mendukung penggunaan dalam pemicu tindakan oleh @mytharcher

### 🚀 Peningkatan

- **[Auth: Kunci API]** Menambahkan uji konfigurasi keamanan token untuk autentikasi kunci API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) oleh @sheldon66

- **[Workflow: Node manual]** Menyesuaikan UI pusat tugas workflow ([#6272](https://github.com/nocobase/nocobase/pull/6272)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[server]** Cache peramban yang salah setelah menjalankan perintah `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) oleh @gchust

- **[client]**
  - Masalah konteks tema FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) oleh @katherinehhh

  - Saat menggunakan operator '$anyOf', aturan tautan menjadi tidak valid ([#6400](https://github.com/nocobase/nocobase/pull/6400)) oleh @zhangzhonghe

- **[auth]** Menangani pengguna yang tidak ada dengan kesalahan 401 dan memperbarui pesan lokal ([#6381](https://github.com/nocobase/nocobase/pull/6381)) oleh @sheldon66

- **[Blok: template]** Opsi simpan sebagai template tidak ditampilkan di blok data halaman ([#6398](https://github.com/nocobase/nocobase/pull/6398)) oleh @gchust

- **[Workflow: Node manual]** Menghindari konflik pada kunci unik ([#6407](https://github.com/nocobase/nocobase/pull/6407)) oleh @mytharcher

- **[Manajer sumber data]** Kesalahan saat mengedit bidang di sumber data eksternal ([#6402](https://github.com/nocobase/nocobase/pull/6402)) oleh @katherinehhh

- **[Editor tema]** Pengalihan tema gagal setelah beberapa kali pengalihan berturut-turut ([#6387](https://github.com/nocobase/nocobase/pull/6387)) oleh @katherinehhh

- **[Klien WEB]** Halaman menjadi kosong setelah mengganti peran ([#6388](https://github.com/nocobase/nocobase/pull/6388)) oleh @aaaaaajie

- **[Workflow: Persetujuan]**
  - Menghindari kueri semua pengguna pada konfigurasi penugasan yang salah oleh @mytharcher

  - Memperbaiki parameter urutan saat menambahkan penugasan oleh @mytharcher

- **[WeCom]** Memperbaiki tautan petunjuk login dan kesalahan login dingtalk oleh @chenzhizdt
