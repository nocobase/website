---
title: "NocoBase v1.6.0-alpha.3: Hapus komponen Formily dari tabel"
description: "Catatan Rilis v1.6.0-alpha.3"
---

### 🚀 Perbaikan

- **[client]** Hapus komponen Formily dari tabel untuk meningkatkan performa saat mengganti paginasi tabel ([#5738](https://github.com/nocobase/nocobase/pull/5738)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana kolom tidak ditampilkan setelah ditambahkan dalam subform ([#5827](https://github.com/nocobase/nocobase/pull/5827)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana perubahan nilai kolom asosiasi di blok detail tidak langsung diperbarui ([#5826](https://github.com/nocobase/nocobase/pull/5826)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana mengklik tautan tidak membuka popup saat 'Aktifkan tautan' diaktifkan untuk pertama kali ([#5812](https://github.com/nocobase/nocobase/pull/5812)) oleh @zhangzhonghe

  - Mencegah beberapa panggilan API saat menutup popup ([#5804](https://github.com/nocobase/nocobase/pull/5804)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana login seluler mengarahkan ke halaman desktop ([#5805](https://github.com/nocobase/nocobase/pull/5805)) oleh @zhangzhonghe

  - Memperbaiki tombol aksi konfigurasi agar rata kiri ([#5798](https://github.com/nocobase/nocobase/pull/5798)) oleh @katherinehhh

- **[build]** Memperbaiki cache file js frontend yang salah setelah build plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) oleh @gchust
