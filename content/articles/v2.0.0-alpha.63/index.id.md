---
title: "NocoBase v2.0.0-alpha.63: Ubah ukuran textarea secara otomatis di formulir tugas edit AI"
description: "Catatan Rilis v2.0.0-alpha.63"
---

### 🚀 Peningkatan

- **[klien]**
  - mencegah render ulang tabel secara penuh saat memperbarui sel ([#8349](https://github.com/nocobase/nocobase/pull/8349)) oleh @katherinehhh

  - Ubah ukuran textarea secara otomatis pada formulir edit tugas AI. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) oleh @heziqiang

- **[Workflow: Persetujuan]**
  - Menambahkan logika perbaikan untuk menyinkronkan audiens setelah migrasi oleh @mytharcher

  - Menyederhanakan parameter dalam kueri, dan meningkatkan performa oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana izin bidang dan tindakan tidak dihitung ulang setelah paginasi di blok detail, daftar, dan formulir. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) oleh @gchust

  - memperbaiki bidang asosiasi dari sumber data eksternal yang tidak memuat data asosiasi di blok formulir ([#8356](https://github.com/nocobase/nocobase/pull/8356)) oleh @katherinehhh

- **[sdk]** Meningkatkan implementasi berbagi token ([#8357](https://github.com/nocobase/nocobase/pull/8357)) oleh @chenos

- **[Kontrol akses]** Mengizinkan bidang asosiasi untuk berasosiasi menggunakan kunci target ([#8352](https://github.com/nocobase/nocobase/pull/8352)) oleh @2013xile

- **[Workflow: Node perulangan]** Memperbaiki masalah di mana node yang gagal di cabang kondisi tidak dapat meneruskan status ke node cabang yang lebih atas ([#8360](https://github.com/nocobase/nocobase/pull/8360)) oleh @mytharcher

- **[Workflow: Webhook]** Memperbaiki masalah di mana error 404 muncul saat melakukan posting ke URL webhook di sub-aplikasi oleh @mytharcher

- **[Workflow: Persetujuan]** Memperbaiki error build yang disebabkan oleh dependensi yang terlewat oleh @mytharcher

- **[Manajer email]** Memperbaiki tautan balasan Outlook yang terkadang terputus oleh @jiannx
