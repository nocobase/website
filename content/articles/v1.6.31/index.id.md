---
title: "NocoBase v1.6.31: Menambahkan semua kunci lokal en-US yang terlewat"
description: "Catatan Rilis v1.6.31"
---

### 🚀 Peningkatan

- **[Workflow]** Menambahkan semua kunci lokal en-US yang terlewat ([#6885](https://github.com/nocobase/nocobase/pull/6885)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[database]** Menangani sel string kosong selama impor bidang untuk mencegah kesalahan ([#6880](https://github.com/nocobase/nocobase/pull/6880)) oleh @aaaaaajie

- **[client]**
  - Tabel pemilihan rekaman asosiasi tidak menyaring rekaman yang sudah diasosiasikan ([#6874](https://github.com/nocobase/nocobase/pull/6874)) oleh @katherinehhh

  - Data asosiasi tidak dikirimkan saat mengekspos bidang asosiasi di subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) oleh @katherinehhh

  - Bidang urut yang dapat diseret tidak menampilkan opsi yang tersedia dengan benar ([#6875](https://github.com/nocobase/nocobase/pull/6875)) oleh @katherinehhh

- **[Workflow]** Memperbaiki batas tumpukan yang tidak berfungsi dengan benar untuk event koleksi ([#6876](https://github.com/nocobase/nocobase/pull/6876)) oleh @mytharcher

- **[Blok: Panel aksi]** Membaca nama dasar rute dari pemindai untuk menyesuaikan dengan lingkungan desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) oleh @sheldon66

- **[Workflow: Node manual]** Memperbaiki kesalahan render saat menampilkan item yang belum diproses ([#6879](https://github.com/nocobase/nocobase/pull/6879)) oleh @mytharcher

- **[Workflow: Persetujuan]** Memperbaiki cakupan penerima delegasi dan menambahkan ke penerima lain oleh @mytharcher
