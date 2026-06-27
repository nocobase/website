---
title: "NocoBase v2.0.0-alpha.38: Dukungan seret untuk tindakan kolom tabel"
description: "Catatan Rilis v2.0.0-alpha.38"
---

### 🎉 Fitur Baru

- **[client]** Dukungan drag-and-drop untuk aksi kolom tabel ([#7842](https://github.com/nocobase/nocobase/pull/7842)) oleh @zhangzhonghe

- **[Visualisasi Data]** menambahkan sumber data SQL untuk grafik ([#7830](https://github.com/nocobase/nocobase/pull/7830)) oleh @heziqiang

### 🚀 Peningkatan

- **[client]** Menambahkan dukungan untuk pustaka Day.js dalam konteks skrip RunJS, memudahkan manipulasi tanggal dan waktu. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) oleh @gchust

### 🐛 Perbaikan Bug

- **[utils]**
  - Memperbaiki error "Invalid filter item type" pada tombol filter ([#7838](https://github.com/nocobase/nocobase/pull/7838)) oleh @zhangzhonghe

  - Mengaktifkan penggabungan objek dalam strategi intersect ([#7840](https://github.com/nocobase/nocobase/pull/7840)) oleh @chenos

  - Memperbaiki error 'Unrecognized operation' dalam alur event ([#7835](https://github.com/nocobase/nocobase/pull/7835)) oleh @zhangzhonghe

- **[client]**
  - Memperbaiki masalah di mana aturan tautan untuk tombol aksi baris di blok tabel tidak dijalankan ulang setelah data baris diperbarui, memastikan aturan kini diterapkan kembali dengan benar saat terjadi perubahan. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) oleh @gchust

  - Memperbaiki error saat melihat pratinjau kode di editor kode jika kode mengandung sintaks jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) oleh @gchust

- **[undefined]** Memperbaiki masalah gaya yang salah pada halaman beranda dokumentasi plugin dalam mode gelap. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) oleh @gchust

- **[Manajer Berkas]** memperbaiki masalah konfigurasi bidang blok tabel ([#7843](https://github.com/nocobase/nocobase/pull/7843)) oleh @katherinehhh

- **[Karyawan AI]** Menyembunyikan tombol obrolan karyawan AI di halaman v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) oleh @cgyrock

- **[Visualisasi Data: ECharts]** memperbaiki masalah dengan labelType konfigurasi ECharts oleh @heziqiang

- **[Manajer Email]**
  - memperbaiki bug draf oleh @jiannx

  - menyinkronkan status baca email Microsoft tanpa stempel waktu oleh @jiannx
