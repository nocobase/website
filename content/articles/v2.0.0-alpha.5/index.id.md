---
title: "NocoBase v2.0.0-alpha.5: Perbaikan Bug"
description: "Catatan Rilis v2.0.0-alpha.5"
---

### 🐛 Perbaikan Bug

- **[server]** Galat migrasi primary key ([#7563](https://github.com/nocobase/nocobase/pull/7563)) oleh @2013xile

- **[client]**
  - Memperbaiki masalah data tidak diperbarui setelah mengirimkan formulir ([#7560](https://github.com/nocobase/nocobase/pull/7560)) oleh @zhangzhonghe

  - Memperbaiki masalah properti dinamis yang hilang pada komponen `AssignedField` menyebabkan galat unggah berkas di simpul "Buat rekaman" atau "Perbarui rekaman" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) oleh @mytharcher

- **[Kalender]** Memperbaiki masalah kueri data yang disebabkan oleh pengidentifikasi unik di blok kalender ([#7562](https://github.com/nocobase/nocobase/pull/7562)) oleh @katherinehhh

- **[Blok: templat (usang)]** Memperbaiki masalah permintaan yang tidak perlu untuk templat blok saat membuka atau menutup modal ([#7561](https://github.com/nocobase/nocobase/pull/7561)) oleh @gchust

- **[Formulir publik]** Memperbaiki masalah aturan unggah untuk kolom berkas di formulir publik yang tidak tepat ([#7553](https://github.com/nocobase/nocobase/pull/7553)) oleh @mytharcher

- **[Pengelola multi-aplikasi (usang)]** Memperbaiki validasi port sebelum migrasi data multi-aplikasi ([#7540](https://github.com/nocobase/nocobase/pull/7540)) oleh @jiannx
