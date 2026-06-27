---
title: "NocoBase v2.0.0-beta.23: dukungan tinggi blok yang dapat dikonfigurasi"
description: "Catatan Rilis v2.0.0-beta.23"
---

### 🎉 Fitur Baru

- **[Blok: GridCard]** mendukung ketinggian blok yang dapat dikonfigurasi ([#8583](https://github.com/nocobase/nocobase/pull/8583)) oleh @katherinehhh

- **[Aksi: Edit massal]** edit massal 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) oleh @jiannx

### 🚀 Peningkatan

- **[klien]**
  - Tabel 2.0 mendukung pengurutan seret dan lepas ([#8540](https://github.com/nocobase/nocobase/pull/8540)) oleh @jiannx

  - Memindahkan pengaturan penugasan bidang dan nilai default ke konfigurasi tingkat formulir. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) oleh @chenos

- **[Lokalisasi]** secara otomatis membuat kunci i18n yang hilang ([#8588](https://github.com/nocobase/nocobase/pull/8588)) oleh @jiannx

### 🐛 Perbaikan Bug

- **[klien]**
  - memperbaiki data yang difilter tidak tepat di dropdown asosiasi ketika bidang judul adalah kunci asing ([#8619](https://github.com/nocobase/nocobase/pull/8619)) oleh @katherinehhh

  - Memperbaiki masalah di mana bidang lampiran asosiasi yang dibersihkan tidak disimpan setelah dikirimkan dalam formulir edit ([#8616](https://github.com/nocobase/nocobase/pull/8616)) oleh @katherinehhh

  - Memperbaiki opsi komponen bidang tidak diperbarui secara real-time ketika bidang asosiasi mengganti pola ([#8611](https://github.com/nocobase/nocobase/pull/8611)) oleh @katherinehhh

  - Memperbaiki masalah di mana kolom tabel tidak merender ulang setelah mengklik Jalankan di editor kolom JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) oleh @gchust

  - memperbaiki tidak dapat mengembalikan data yang dipilih di komponen bidang pemilih rekaman setelah diedit ([#8610](https://github.com/nocobase/nocobase/pull/8610)) oleh @katherinehhh

- **[Manajer file]** memperbaiki masalah di mana komponen bidang file masih dapat membuka dialog pemilih ketika dinonaktifkan ([#8617](https://github.com/nocobase/nocobase/pull/8617)) oleh @katherinehhh

- **[Visualisasi data: ECharts]** Memperbaiki kesalahan ejaan ECharts oleh @heziqiang

- **[Alur kerja: Persetujuan]**
  - Memperbaiki masalah di mana nilai hilang dari popup detail "Aplikasi saya" oleh @mytharcher

  - Memperbaiki kesalahan yang muncul saat mengeksekusi pada mode sebelum simpan oleh @mytharcher
