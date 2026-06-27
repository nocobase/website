---
title: "NocoBase v2.0.0-beta.7: menambahkan kontrol konkurensi tingkat proses untuk manajer tugas dasar"
description: "Catatan Rilis v2.0.0-beta.7"
---

### 🎉 Fitur Baru

- **[test]** Menambahkan kontrol konkurensi tingkat proses untuk pengelola tugas dasar ([#8343](https://github.com/nocobase/nocobase/pull/8343)) oleh @cgyrock

- **[Karyawan AI]** Mendukung model Gemini-3 dengan tanda tangan pemikiran pemanggilan fungsi ([#8377](https://github.com/nocobase/nocobase/pull/8377)) oleh @heziqiang

### 🚀 Peningkatan

- **[flow-engine]** Menambahkan `rowOrder` ke GridModel untuk memastikan pengurutan baris yang konsisten ([#8371](https://github.com/nocobase/nocobase/pull/8371)) oleh @zhangzhonghe

- **[Karyawan AI]**
  - Mendukung pengeditan kustom dan pembaruan otomatis prompt sistem ([#8378](https://github.com/nocobase/nocobase/pull/8378)) oleh @heziqiang

  - Meningkatkan penanganan kesalahan AI untuk layanan dan model LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) oleh @heziqiang

- **[Manajer Berkas]** Menambahkan opsi permintaan untuk mengambil berkas OSS di sisi server jika diperlukan parameter atau header tambahan ([#8372](https://github.com/nocobase/nocobase/pull/8372)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana bidang asosiasi masih dapat membuka popup setelah beralih dari komponen pemilih rekaman ke komponen pilih. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) oleh @gchust

  - Memperbaiki masalah di mana aturan tautan tidak dijalankan ulang setelah mengubah halaman untuk blok detail, blok formulir edit, dan blok daftar. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) oleh @gchust

  - Memperbaiki masalah di mana bidang sub-tabel/sub-formulir yang dikonfigurasi tidak ditampilkan selama peralihan bolak-balik komponen bidang. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) oleh @gchust

- **[logger]** Memperbaiki informasi kesalahan tambahan yang dibuang saat mencetak log sistem ([#8367](https://github.com/nocobase/nocobase/pull/8367)) oleh @cgyrock

- **[Blok: template (usang)]** Memperbaiki masalah di mana halaman edit untuk template warisan (v1) tidak dapat diakses. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) oleh @gchust

- **[Alur Kerja]**
  - Menambahkan ID instans ke ID Snowflake dari pekerjaan, untuk menghindari masalah konflik ID dalam mode kluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) oleh @mytharcher

  - Memperbaiki masalah aturan tautan di blok detail node CC alur kerja ([#8381](https://github.com/nocobase/nocobase/pull/8381)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana halaman eksekusi crash ketika alur kerja dihapus ([#8361](https://github.com/nocobase/nocobase/pull/8361)) oleh @mytharcher

- **[Kontrol akses]** Memperbaiki masalah di mana sumber data diselesaikan secara tidak benar saat memproses izin untuk bidang asosiasi ([#8370](https://github.com/nocobase/nocobase/pull/8370)) oleh @2013xile

- **[Sumber data: REST API]** Menambahkan toleransi kesalahan untuk konteks permintaan, untuk menghindari kesalahan yang muncul ketika metode tidak ada dalam konteks oleh @mytharcher
