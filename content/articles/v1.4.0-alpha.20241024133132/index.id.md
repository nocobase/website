---
title: "NocoBase v1.4.0-alpha.20241024133132: Dukungan menambahkan grup pada formulir dan blok detail"
description: "Catatan Rilis v1.4.0-alpha.20241024133132"
---

### 🎉 Fitur Baru

- **[client]** Dukungan untuk menambahkan grup pada blok formulir dan detail ([#5498](https://github.com/nocobase/nocobase/pull/5498)) oleh @katherinehhh

- **[Kalender]** plugin-kalender menambahkan pengaturan tampilan default dan konfigurasi internasionalisasi ([#5487](https://github.com/nocobase/nocobase/pull/5487)) oleh @Cyx649312038

- **[Sumber data: KingbaseES]** Dukungan untuk menggunakan database Kingbase sebagai sumber data utama atau eksternal (mode pg) oleh @chareice
Referensi: [Sumber data - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)
### 🚀 Peningkatan

- **[database]** Dukungan untuk logika pemuatan statis plugin ([#5466](https://github.com/nocobase/nocobase/pull/5466)) oleh @chareice

- **[client]** Meningkatkan performa rendering blok tabel (waktu rendering pertama berkurang sekitar 50%) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) oleh @zhangzhonghe

- **[Mobile]** klien seluler mendukung blok formulir filter ([#5482](https://github.com/nocobase/nocobase/pull/5482)) oleh @katherinehhh

- **[Manajer cadangan]**
  - Mengubah pengaturan default `Cadangkan file penyimpanan lokal` menjadi true oleh @gchust

  - Mengembalikan data database jika tindakan pemulihan gagal oleh @gchust

### 🐛 Perbaikan Bug

- **[server]** Acara afterLoad aplikasi tidak terpicu setelah instalasi ([#5506](https://github.com/nocobase/nocobase/pull/5506)) oleh @chenos

- **[Formulir publik]** pendaftaran cuplikan ACL untuk formulir publik ([#5505](https://github.com/nocobase/nocobase/pull/5505)) oleh @katherinehhh

- **[Manajer cadangan]** diperbaiki setelah memulihkan sub aplikasi, aplikasi utama akan crash jika sub aplikasi menggunakan skema yang berbeda oleh @gchust
