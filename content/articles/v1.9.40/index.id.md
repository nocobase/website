---
title: "NocoBase v1.9.40: Menambahkan lebih banyak jenis file untuk pratinjau di Microsoft"
description: "Catatan Rilis v1.9.40"
---

### 🚀 Peningkatan

- **[Penampil File Office]** Menambahkan lebih banyak jenis file untuk pratinjau di Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki bidang nanoid yang tidak dibuat ulang setelah pengiriman formulir ([#8491](https://github.com/nocobase/nocobase/pull/8491)) oleh @katherinehhh

  - Memperbaiki pesan validasi wajib yang duplikat saat membersihkan bidang bertingkat ([#8476](https://github.com/nocobase/nocobase/pull/8476)) oleh @katherinehhh

- **[basis data]**
  - Memperbaiki kesalahan saat memfilter dengan operator `empty` setelah memuat ulang koleksi ([#8496](https://github.com/nocobase/nocobase/pull/8496)) oleh @2013xile

  - perbaikan: pembaruan mendalam pada asosiasi bersarang ([#8492](https://github.com/nocobase/nocobase/pull/8492)) oleh @chenos

- **[Manajer File]** Memperbaiki masalah di mana nama file yang diperoleh dari body permintaan menjadi string yang didekode secara tidak terduga ([#8481](https://github.com/nocobase/nocobase/pull/8481)) oleh @mytharcher

- **[Sumber data: Utama]** Memperbaiki masalah di mana penghapusan rekaman dari blok tabel asosiasi banyak-ke-banyak tidak mematuhi batasan `onDelete: 'restrict'` pada bidang asosiasi ([#8493](https://github.com/nocobase/nocobase/pull/8493)) oleh @2013xile

- **[Blok: iframe]** Memperbaiki kesalahan saat menambahkan variabel agregat ke Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) oleh @zhangzhonghe

- **[Workflow: Webhook]** Memperbaiki masalah di mana data body hilang saat parsing body tidak dikonfigurasi oleh @mytharcher

- **[Cetak template]** Memperbaiki logika izin tombol cetak yang salah ketika peran digabungkan. oleh @jiannx

- **[Workflow: Persetujuan]**
  - Memperbaiki masalah di mana konkurensi menyebabkan eksekusi dilanjutkan berulang kali oleh @mytharcher

  - Memperbaiki masalah di mana mengembalikan persetujuan ke simpul sebelumnya tetapi kembali ke awal oleh @mytharcher

- **[Manajer migrasi]** Memperbaiki potensi pembekuan proses yang disebabkan oleh pencatatan pernyataan SQL yang sangat besar yang disertakan dalam pengecualian kesalahan migrasi oleh @cgyrock
