---
title: "NocoBase v1.4.8: Perbaikan Bug"
description: "Catatan Rilis v1.4.8"
---

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah template data pada filter form yang dikonfigurasi di pemilih record field asosiasi ([#5837](https://github.com/nocobase/nocobase/pull/5837)) oleh @katherinehhh

  - Memperbaiki masalah template string Markdown yang tidak memuat data asosiasi (External dataSource) ([#5791](https://github.com/nocobase/nocobase/pull/5791)) oleh @katherinehhh

- **[Sinkronisasi data pengguna]** Melewati tipe data yang tidak didukung selama sinkronisasi, bukan memunculkan error. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) oleh @chenzhizdt

- **[Manajer cadangan]**
  - Memperbaiki lambatnya munculnya jendela unduh untuk file cadangan berukuran besar oleh @gchust

  - Memperbaiki masalah di mana pemulihan sub-aplikasi cadangan menyebabkan semua aplikasi dimulai ulang oleh @gchust
