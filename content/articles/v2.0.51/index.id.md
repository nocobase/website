---
title: "NocoBase v2.0.51: Memperbaiki perilaku validasi wajib untuk formulir persetujuan"
description: "Catatan Rilis v2.0.51"
---

### 🚀 Peningkatan

- **[Workflow: Persetujuan]** Memperbaiki perilaku validasi wajib untuk formulir persetujuan oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana kode JS tidak dapat diedit lagi setelah bidang JS diatur menjadi hanya-baca. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) oleh @gchust

  - Memperbaiki masalah di mana penetapan bidang sub-tabel tidak akan berlaku dalam aturan tautan bidang. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) oleh @gchust

  - Memperbaiki masalah di mana tab halaman v2 tidak sinkron segera setelah menyimpan pengaturan ([#9396](https://github.com/nocobase/nocobase/pull/9396)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana popup nilai default untuk bidang asosiasi dalam formulir pembuatan akan ditampilkan secara tidak benar. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) oleh @gchust

- **[Kebijakan kata sandi]** Memperbaiki masalah di mana pengguna yang terkunci secara permanen dapat masuk setelah restart layanan oleh @2013xile

- **[Aksi: Impor catatan Pro]** Memperbaiki masalah di mana pemeriksaan duplikat pada bidang tanggal selalu gagal oleh @mytharcher

- **[Workflow: Persetujuan]** Memperbaiki masalah di mana laci pemilihan catatan terhalang dalam konfigurasi workflow persetujuan oleh @zhangzhonghe
