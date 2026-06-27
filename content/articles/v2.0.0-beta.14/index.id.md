---
title: "NocoBase v2.0.0-beta.14: Dukungan tempel file di obrolan AI"
description: "Catatan Rilis v2.0.0-beta.14"
---

### 🎉 Fitur Baru

- **[AI employees]** Mendukung tempel file di chat AI ([#8487](https://github.com/nocobase/nocobase/pull/8487)) oleh @heziqiang

### 🚀 Peningkatan

- **[client]**
  - Meningkatkan subform to-many untuk menginisialisasi dengan item default dan menghindari pembuatan catatan saat dibiarkan kosong ([#8473](https://github.com/nocobase/nocobase/pull/8473)) oleh @katherinehhh

  - Meningkatkan tombol unggah dan edit untuk bidang lampiran di sub-tabel untuk memandu pengguna mengklik unggah dengan lebih baik. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) oleh @katherinehhh

- **[flow-engine]** Meningkatkan ctx.libs di runjs untuk mendukung pemuatan sesuai permintaan, dan menambahkan pustaka yang telah ditentukan: lodash, math, dan formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) oleh @gchust

- **[Error handler]** Membersihkan kesalahan referensi SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) oleh @2013xile

- **[Workflow: Approval]** Menerapkan kontrol akses untuk API guna mencegah operasi data yang tidak sah oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana popover editor teks kaya terhalang ([#8443](https://github.com/nocobase/nocobase/pull/8443)) oleh @zhangzhonghe

  - Memperbaiki waktu duplikat di nilai DateTime filter ([#8484](https://github.com/nocobase/nocobase/pull/8484)) oleh @zhangzhonghe

  - Memperbaiki bidang nanoid yang tidak dibuat ulang setelah pengiriman formulir ([#8491](https://github.com/nocobase/nocobase/pull/8491)) oleh @katherinehhh

  - Memperbaiki pesan validasi wajib duplikat saat membersihkan bidang kaskade ([#8476](https://github.com/nocobase/nocobase/pull/8476)) oleh @katherinehhh

  - Memfilter daftar untuk menghapus duplikat ([#8431](https://github.com/nocobase/nocobase/pull/8431)) oleh @jiannx

  - Memperbaiki masalah di mana menu konfigurasi tidak ditampilkan di Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) oleh @zhangzhonghe

- **[database]**
  - perbaikan: pembaruan mendalam pada asosiasi bersarang ([#8492](https://github.com/nocobase/nocobase/pull/8492)) oleh @chenos

  - perbaikan: pembaruan mendalam pada asosiasi bersarang ([#8492](https://github.com/nocobase/nocobase/pull/8492)) oleh @chenos

- **[server]** Memperbaiki versi `mathjs` di dependensi umum ([#8475](https://github.com/nocobase/nocobase/pull/8475)) oleh @mytharcher

- **[flow-engine]** Memperbaiki masalah di mana menutup popup tersemat menyebabkan kesalahan setelah membuka konfigurasi aturan tautan dan popup konfigurasi alur peristiwa secara berurutan. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) oleh @gchust

- **[Data source: Main]** Memperbaiki masalah di mana menghapus catatan dari blok tabel asosiasi many-to-many tidak menghormati batasan bidang asosiasi `onDelete: 'restrict'` ([#8493](https://github.com/nocobase/nocobase/pull/8493)) oleh @2013xile

- **[Async task manager]** Memperbaiki masalah di mana alur kerja yang dipicu oleh impor asinkron tertunda untuk dieksekusi ([#8478](https://github.com/nocobase/nocobase/pull/8478)) oleh @mytharcher

- **[Block: iframe]** Memperbaiki kesalahan saat menambahkan variabel agregat ke Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) oleh @zhangzhonghe

- **[UI templates]** Memperbaiki masalah di mana blok template referensi tidak dapat mengatur lingkup data melalui pengaturan alur peristiwa. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) oleh @gchust

- **[File manager]** Memperbaiki masalah di mana nama file yang diperoleh dari body permintaan menjadi string yang didekode secara tidak terduga ([#8481](https://github.com/nocobase/nocobase/pull/8481)) oleh @mytharcher

- **[Action: Import records Pro]** Memperbaiki masalah di mana alur kerja yang dipicu oleh impor asinkron tertunda untuk dieksekusi oleh @mytharcher

- **[Workflow: Webhook]** Memperbaiki masalah di mana data body hilang saat parsing body tidak dikonfigurasi oleh @mytharcher

- **[Template print]** Menghapus tombol footer dari konfigurasi template cetak oleh @katherinehhh

- **[Workflow: Approval]**
  - Memperbaiki masalah di mana mengembalikan persetujuan ke node sebelumnya tetapi kembali ke awal oleh @mytharcher

  - Memperbaiki masalah di mana konkurensi menyebabkan eksekusi dilanjutkan berulang kali oleh @mytharcher

  - Memperbaiki masalah di mana bidang tidak ditampilkan di kartu tugas persetujuan oleh @zhangzhonghe
