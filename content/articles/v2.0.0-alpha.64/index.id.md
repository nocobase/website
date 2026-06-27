---
title: "NocoBase v2.0.0-alpha.64: Dukungan model Gemini-3 dengan tanda tangan pemikiran pemanggilan fungsi"
description: "Catatan Rilis v2.0.0-alpha.64"
---

### 🎉 Fitur Baru

- **[Karyawan AI]** Mendukung model Gemini-3 dengan tanda tangan pemikiran pemanggilan fungsi ([#8377](https://github.com/nocobase/nocobase/pull/8377)) oleh @heziqiang

### 🚀 Peningkatan

- **[Karyawan AI]**
  - Meningkatkan penanganan kesalahan AI untuk layanan dan model LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) oleh @heziqiang

  - Mendukung pengeditan kustom dan pembaruan otomatis prompt sistem ([#8378](https://github.com/nocobase/nocobase/pull/8378)) oleh @heziqiang

- **[Manajer berkas]** Menambahkan opsi permintaan untuk mengambil berkas OSS di sisi server jika diperlukan parameter atau header tambahan ([#8372](https://github.com/nocobase/nocobase/pull/8372)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[logger]** Memperbaiki informasi kesalahan tambahan yang terbuang saat mencetak log sistem ([#8367](https://github.com/nocobase/nocobase/pull/8367)) oleh @cgyrock

- **[klien]**
  - Memperbaiki masalah di mana bidang asosiasi masih dapat membuka popup setelah beralih dari komponen pemilih rekaman ke komponen pilih. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) oleh @gchust

  - Memperbaiki masalah di mana aturan tautan belum dijalankan ulang setelah mengubah paginasi untuk blok detail, blok formulir edit, dan blok daftar. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) oleh @gchust

  - Memperbaiki masalah di mana bidang sub-tabel/sub-formulir yang dikonfigurasi tidak ditampilkan selama peralihan bolak-balik komponen bidang. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) oleh @gchust

- **[Alur kerja]**
  - Memperbaiki masalah aturan tautan di blok detail node CC alur kerja ([#8381](https://github.com/nocobase/nocobase/pull/8381)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana halaman eksekusi crash ketika alur kerja dihapus ([#8361](https://github.com/nocobase/nocobase/pull/8361)) oleh @mytharcher

- **[Kontrol akses]** Memperbaiki masalah di mana sumber data diselesaikan secara tidak benar saat memproses izin untuk bidang asosiasi ([#8370](https://github.com/nocobase/nocobase/pull/8370)) oleh @2013xile
