---
title: "NocoBase v1.8.16: Perbaikan Bug"
description: "Catatan Rilis v1.8.16"
---

### 🚀 Perbaikan

- **[Notifikasi: Pesan dalam aplikasi]** Hapus output log SQL melalui `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[server]** Beberapa permintaan tidak memiliki `ctx.action`, yang menyebabkan kesalahan pada middleware log audit ([#7369](https://github.com/nocobase/nocobase/pull/7369)) oleh @2013xile

- **[Bidang koleksi: Formula]** Perbaiki masalah di mana input formula tidak dapat lolos validasi karena tipe variabel ([#7373](https://github.com/nocobase/nocobase/pull/7373)) oleh @mytharcher

- **[Manajer cadangan]** cadangan file besar dapat menampilkan "berhasil" sebelum benar-benar selesai oleh @gchust
