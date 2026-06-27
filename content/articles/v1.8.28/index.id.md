---
title: "NocoBase v1.8.28: Menambahkan tombol cetak pada popup detail di blok persetujuan kustom"
description: "Catatan Rilis v1.8.28"
---

### 🚀 Peningkatan

- **[klien]** Untuk mendapatkan tipe MIME file yang lebih akurat, gunakan paket `mime` untuk mendeteksi tipe MIME file di klien ([#7551](https://github.com/nocobase/nocobase/pull/7551)) oleh @mytharcher

- **[Workflow]**
  - Mendukung pembatasan jumlah maksimum node dalam sebuah workflow melalui variabel lingkungan ([#7542](https://github.com/nocobase/nocobase/pull/7542)) oleh @mytharcher

  - Menambahkan opsi `keepBranch` saat menghapus node ([#7571](https://github.com/nocobase/nocobase/pull/7571)) oleh @mytharcher

- **[Workflow: Node Loop]** Mendukung pembatasan jumlah maksimum siklus untuk node loop melalui variabel lingkungan ([#7543](https://github.com/nocobase/nocobase/pull/7543)) oleh @mytharcher

- **[Workflow: Persetujuan]** Menambahkan tombol cetak ke popup detail di blok persetujuan kustom oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana gambar tidak ditampilkan dengan benar ketika diputar dan diskalakan selama pratinjau ([#7573](https://github.com/nocobase/nocobase/pull/7573)) oleh @mytharcher

  - Memperbaiki masalah di mana properti dinamis yang hilang di komponen `AssignedField` menyebabkan kesalahan unggah file di node "Buat rekaman" atau "Perbarui rekaman" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) oleh @mytharcher

- **[Formulir publik]** Memperbaiki masalah di mana aturan unggah untuk bidang file di formulir publik tidak benar ([#7553](https://github.com/nocobase/nocobase/pull/7553)) oleh @mytharcher

- **[Kalender]** Memperbaiki masalah kueri data yang disebabkan oleh pengidentifikasi unik di blok kalender ([#7562](https://github.com/nocobase/nocobase/pull/7562)) oleh @katherinehhh

- **[Auth: LDAP]** Memperbaiki kegagalan bind LDAP dengan DN non-ASCII (UTF-8) di Active Directory oleh @2013xile
