---
title: "NocoBase v2.0.46: Perbaikan Bug"
description: "Catatan Rilis v2.0.46"
---

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana nilai default tidak akan diterapkan saat menambahkan kembali catatan setelah catatan tersebut dihapus dari sub-tabel. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) oleh @gchust

  - mengatur popover max-height dan perlindungan scroll agar area submit tetap dapat dijangkau ([#9226](https://github.com/nocobase/nocobase/pull/9226)) oleh @jiannx

- **[Autentikasi]** Memperbaiki sesi lama yang tetap aktif setelah perubahan kata sandi ([#9261](https://github.com/nocobase/nocobase/pull/9261)) oleh @2013xile

- **[Sumber data: MariaDB Eksternal]** Memperbaiki kasus uji yang gagal karena impor modul tidak benar oleh @mytharcher
