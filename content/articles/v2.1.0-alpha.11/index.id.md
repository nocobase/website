---
title: "NocoBase v2.1.0-alpha.11: menambahkan aksi item JS"
description: "Catatan Rilis v2.1.0-alpha.11"
---

### 🎉 Fitur Baru

- **[client]** Menambahkan aksi item JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) oleh @jiannx

- **[AI employees]** Menambahkan kemampuan SKILLS pada AI employees. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) oleh @cgyrock

- **[Data source manager]** Mendukung pemuatan alat MCP sesuai permintaan ([#8936](https://github.com/nocobase/nocobase/pull/8936)) oleh @2013xile

### 🚀 Peningkatan

- **[flow-engine]** Meningkatkan validasi skema untuk api pembuatan ui. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) oleh @gchust

- **[client]** Mengoptimalkan tata letak horizontal aksi formulir ([#8869](https://github.com/nocobase/nocobase/pull/8869)) oleh @jiannx

- **[app]** Menambahkan alur kerja dev berbasis Rsbuild untuk client-v1 sambil mempertahankan pengembangan plugin lokal dan kompatibilitas topologi `/v2/` saat ini ([#8902](https://github.com/nocobase/nocobase/pull/8902)) oleh @Molunerfinn

- **[Collection field: administrative divisions of China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) oleh @jiannx

- **[Workflow]** Menambahkan validasi untuk semua pemicu dan node ([#8930](https://github.com/nocobase/nocobase/pull/8930)) oleh @mytharcher

- **[Workflow: Approval]** Memperbaiki masalah kinerja yang disebabkan oleh bidang JSON saat memuat daftar catatan persetujuan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[flow-engine]** Menyinkronkan status ke konfigurasi bidang saat bidang formulir dihapus ([#8857](https://github.com/nocobase/nocobase/pull/8857)) oleh @jiannx

- **[resourcer]** Memperbaiki masalah di mana sumber data eksternal gagal dimuat dengan benar. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) oleh @2013xile

- **[database]** Menggunakan peringatan alih-alih kesalahan ketika salah satu parameter appends tidak valid ([#8923](https://github.com/nocobase/nocobase/pull/8923)) oleh @mytharcher

- **[server]** Mengubah waktu penutupan Pub-Sub menjadi `beforeStop`, untuk menghindari pesan terkirim atau ditangani setelah database ditutup ([#8934](https://github.com/nocobase/nocobase/pull/8934)) oleh @mytharcher

- **[Custom variables]** melewati pemberitahuan auth ([#8942](https://github.com/nocobase/nocobase/pull/8942)) oleh @chenos

- **[AI employees]** Memperbaiki kasus uji yang gagal di modul ai dari paket inti. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) oleh @cgyrock

- **[Localization]** mencegah permintaan localizationTexts:missing saat izin ditolak ([#8903](https://github.com/nocobase/nocobase/pull/8903)) oleh @chenos

- **[Action: Import records Pro]** Memperbaiki masalah di mana opsi "Trigger workflow" tidak berfungsi saat tidak dicentang oleh @mytharcher

- **[Data source: External Oracle]** Memperbaiki kesalahan yang terjadi saat memuat sumber data Oracle eksternal oleh @2013xile

- **[Workflow: Approval]** Memperbaiki masalah terjemahan, pemilihan node, dan target pengembalian pada tombol pengembalian formulir persetujuan v2 oleh @zhangzhonghe
