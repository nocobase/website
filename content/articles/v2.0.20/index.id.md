---
title: "NocoBase v2.0.20: Perbaiki masalah di mana event siklus hidup yang dikirim oleh worker menyebabkan aplikasi serving berhenti"
description: "Catatan Rilis v2.0.20"
---

### 🐛 Perbaikan Bug

- **[server]** Memperbaiki masalah di mana event siklus hidup yang dikirim oleh worker menyebabkan aplikasi serving berhenti ([#8906](https://github.com/nocobase/nocobase/pull/8906)) oleh @mytharcher

- **[Manajer sumber data]** Memperbaiki masalah di mana koleksi yang dibuat oleh AI employee selalu kehilangan kolom `createBy` dan `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) oleh @cgyrock

- **[Aksi: Impor catatan Pro]** Memperbaiki lazy import yang menyebabkan error SES oleh @mytharcher

- **[Cetak template]** Memperbaiki error pencetakan koleksi SQL oleh @jiannx

- **[Manajer email]** Memperbaiki error halaman ketika email tidak ada oleh @jiannx
