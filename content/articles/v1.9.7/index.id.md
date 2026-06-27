---
title: "NocoBase v1.9.7: Perbaikan Bug"
description: "Catatan Rilis v1.9.7"
---

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana aturan tautan untuk formulir persetujuan tidak berfungsi ([#7858](https://github.com/nocobase/nocobase/pull/7858)) oleh @zhangzhonghe

- **[server]** Memperbaiki masalah dalam mode pemisahan layanan di mana pesan antrean yang tidak berlangganan tidak dapat dipublikasikan ([#7875](https://github.com/nocobase/nocobase/pull/7875)) oleh @mytharcher

- **[Workflow]**
  - Memperbaiki kesalahan yang disebabkan oleh mendengarkan peristiwa sumber data eksternal yang tidak ada ([#7855](https://github.com/nocobase/nocobase/pull/7855)) oleh @mytharcher

  - Menggunakan eventQueue sebagai pengganti backgroundJob bersama untuk mencegah antrean bersama dikonsumsi secara tidak benar dalam mode pemisahan layanan ([#7871](https://github.com/nocobase/nocobase/pull/7871)) oleh @mytharcher

- **[Workflow: Node manual]** Memperbaiki namespace bahasa lokal yang harus digunakan, untuk menampilkan konten terjemahan yang benar ([#7877](https://github.com/nocobase/nocobase/pull/7877)) oleh @mytharcher

- **[Kontrol akses]** Masalah di mana potongan operasi asosiasi tidak berpengaruh ([#7876](https://github.com/nocobase/nocobase/pull/7876)) oleh @2013xile

- **[Workflow: Persetujuan]**
  - Memperbaiki masalah di mana ukuran halaman pemuatan saluran notifikasi tidak cukup besar, sehingga daftar tidak dimuat sepenuhnya oleh @mytharcher

  - Memperbaiki masalah di mana aturan tautan untuk formulir persetujuan tidak berfungsi oleh @zhangzhonghe

  - Memperbaiki format tanggal pada kartu daftar persetujuan di pusat tugas untuk menampilkan tanggal dan waktu lengkap oleh @mytharcher

  - Memperbaiki masalah kinerja yang terjadi saat meminta daftar catatan persetujuan selama pengajuan persetujuan oleh @mytharcher
