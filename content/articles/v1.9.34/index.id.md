---
title: "NocoBase v1.9.34: Meningkatkan pemeriksaan izin saat memodifikasi bidang asosiasi bersarang"
description: "Catatan Rilis v1.9.34"
---

### 🚀 Peningkatan

- **[Kontrol akses]** Meningkatkan pemeriksaan izin saat memodifikasi bidang asosiasi bersarang ([#7856](https://github.com/nocobase/nocobase/pull/7856)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki bidang asosiasi dari sumber data eksternal yang tidak memuat data asosiasi di blok formulir ([#8356](https://github.com/nocobase/nocobase/pull/8356)) oleh @katherinehhh

  - Memperbaiki masalah di mana bidang asosiasi tidak benar di komponen `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) oleh @mytharcher

- **[logger]** Memperbaiki informasi kesalahan tambahan yang dibuang saat mencetak log sistem ([#8367](https://github.com/nocobase/nocobase/pull/8367)) oleh @cgyrock

- **[Workflow: Node perulangan]** Memperbaiki masalah di mana node yang gagal di cabang kondisi tidak dapat meneruskan status ke node cabang di atasnya ([#8360](https://github.com/nocobase/nocobase/pull/8360)) oleh @mytharcher

- **[Sumber data: Utama]** Metadata koleksi tampilan harus menyertakan opsi bidang sumber ([#8337](https://github.com/nocobase/nocobase/pull/8337)) oleh @2013xile

- **[Workflow]**
  - Memperbaiki masalah aturan tautan di blok detail node CC workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) oleh @zhangzhonghe

  - Menambahkan ID instance ke ID Snowflake dari pekerjaan, untuk menghindari masalah konflik ID di bawah mode kluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) oleh @mytharcher

  - Memperbaiki masalah di mana halaman eksekusi crash ketika workflow dihapus ([#8361](https://github.com/nocobase/nocobase/pull/8361)) oleh @mytharcher

- **[Aksi: Impor catatan]** Memperbaiki pesan kesalahan yang salah ketika kesalahan batasan unik dipicu selama impor XLSX asinkron ([#8342](https://github.com/nocobase/nocobase/pull/8342)) oleh @cgyrock

- **[Kontrol akses]**
  - Mengizinkan bidang asosiasi untuk menghubungkan menggunakan kunci target ([#8352](https://github.com/nocobase/nocobase/pull/8352)) oleh @2013xile

  - Memperbaiki masalah di mana sumber data diselesaikan secara tidak benar saat memproses izin untuk bidang asosiasi ([#8370](https://github.com/nocobase/nocobase/pull/8370)) oleh @2013xile

- **[Sumber data: REST API]** Menambahkan toleransi kesalahan untuk konteks permintaan, untuk menghindari kesalahan yang dilemparkan ketika metode tidak ada dalam konteks oleh @mytharcher

- **[Aksi: Ekspor catatan Pro]** Memperbaiki kesalahan ketika sub-aplikasi menjalankan tugas impor/ekspor asinkron sementara aplikasi utama tidak mengaktifkan plugin impor/ekspor pro oleh @cgyrock

- **[Workflow: Persetujuan]** Memperbaiki masalah di mana bidang filter tidak berfungsi dengan benar di pusat tugas oleh @mytharcher
