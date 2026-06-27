---
title: "NocoBase v1.4.21: Dukungan aturan tautan di blok detail untuk menyembunyikan (nilai yang dipertahankan)"
description: "Catatan Rilis v1.4.21"
---

### 🚀 Peningkatan

- **[client]** Dukungan aturan tautan di blok detail untuk menyembunyikan (nilai yang dicadangkan) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki jalur publik yang hilang di jalur file ikon ([#6034](https://github.com/nocobase/nocobase/pull/6034)) oleh @chenos

  - Memperbaiki masalah di mana aturan tautan formulir gagal ketika bergantung pada nilai bidang dari sub-tabel ([#5876](https://github.com/nocobase/nocobase/pull/5876)) oleh @zhangzhonghe

  - Memperbaiki bidang yang salah dari variabel 'Catatan saat ini' di sub-detail ([#6030](https://github.com/nocobase/nocobase/pull/6030)) oleh @zhangzhonghe

- **[Manajer Cadangan]** Memperbaiki kegagalan unduhan cadangan ketika env API_BASE_PATH bukan /api oleh @gchust
