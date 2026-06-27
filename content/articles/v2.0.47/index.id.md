---
title: "NocoBase v2.0.47: Penyedia LLM kini mendukung platform Xiaomi MIMO"
description: "Catatan Rilis v2.0.47"
---

### 🎉 Fitur Baru

- **[AI employees]** Penyedia LLM kini mendukung platform Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) oleh @cgyrock

### 🚀 Peningkatan

- **[flow-engine]** Perbaiki perilaku tata letak seret blok pada halaman v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) oleh @zhangzhonghe

- **[AI employees]** Penyesuaian kategori AI employee ([#9274](https://github.com/nocobase/nocobase/pull/9274)) oleh @cgyrock

- **[Workflow: Approval]** Tandai mode tampilan asosiasi yang dimuat dari DB sebagai legacy oleh @mytharcher

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki masalah di mana filter datetime sumber data eksternal SQL Server bisa gagal ([#9272](https://github.com/nocobase/nocobase/pull/9272)) oleh @2013xile

- **[client]**
  - Pertahankan nilai null untuk dependensi variabel Data scope kosong di formulir v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) oleh @jiannx

  - Jalankan ulang rendering kolom JS saat data baris berubah ([#9282](https://github.com/nocobase/nocobase/pull/9282)) oleh @jiannx

  - Perbaiki masalah di mana bidang formulir filter menghilang setelah membuka kembali pemilih rekaman popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana sel bidang JS di blok tabel v2 bisa tampak kosong setelah memfilter atau menyegarkan data tabel. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) oleh @jiannx

- **[flow-engine]** Memperbaiki masalah di mana bidang yang disembunyikan sistem bisa dipilih dalam variabel terkait formulir. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) oleh @gchust

- **[Action: Import records]** Perbaiki masalah di mana indeks baris yang gagal dalam mengimpor rekaman tidak benar ([#9277](https://github.com/nocobase/nocobase/pull/9277)) oleh @mytharcher

- **[Block: Gantt]** Tambahkan pengaturan blok Gantt untuk mengaktifkan seret guna menjadwalkan ulang. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) oleh @jiannx

- **[AI employees]** Perbaiki kesalahan integrasi AI employee deepSeek V4 ([#9275](https://github.com/nocobase/nocobase/pull/9275)) oleh @cgyrock

- **[Action: Export records Pro]** Perbaiki masalah di mana mode otomatis tidak berfungsi oleh @mytharcher

- **[Workflow: Approval]**
  - Perbaiki kesalahan tipe oleh @mytharcher

  - Perbaiki waktu eksekusi persetujuan sehingga `latestExecutionId` disinkronkan setelah komit persetujuan oleh @mytharcher
