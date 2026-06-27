---
title: "NocoBase v2.0.0-alpha.14: Optimasi pengkodean AI"
description: "Catatan Rilis v2.0.0-alpha.14"
---

### 🚀 Peningkatan

- **[Karyawan AI]** Optimalisasi pengkodean AI ([#7614](https://github.com/nocobase/nocobase/pull/7614)) oleh @cgyrock

- **[Sumber data: Utama]** Memperbarui logika lokalisasi untuk pesan kesalahan, dan menanganinya dalam plugin penanganan kesalahan ([#7582](https://github.com/nocobase/nocobase/pull/7582)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[database]**
  - Mengatur `search_path` sebelum menjalankan pernyataan SQL menggunakan metode `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) oleh @2013xile

  - Memperbaiki kesalahan yang muncul ketika operator `$in` menemukan nilai `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) oleh @mytharcher

- **[klien]** Memperbaiki masalah ikon tab yang muncul terhalang ([#7607](https://github.com/nocobase/nocobase/pull/7607)) oleh @zhangzhonghe

- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana variabel tidak diurai dalam formulir pengajuan persetujuan oleh @mytharcher
