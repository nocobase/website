---
title: "NocoBase v1.6.0-beta.17: Tambahkan konfigurasi tooltip pada item menu dan header tabel"
description: "Catatan Rilis v1.6.0-beta.17"
---

### 🎉 Fitur Baru

- **[client]** Menambahkan konfigurasi tooltip pada item menu dan header tabel ([#6346](https://github.com/nocobase/nocobase/pull/6346)) oleh @Cyx649312038

- **[Visualisasi Data]** Mendukung pengurutan NULLS dalam kueri grafik ([#6383](https://github.com/nocobase/nocobase/pull/6383)) oleh @2013xile

- **[Integrasi AI]** Plugin baru: Integrasi AI ([#6283](https://github.com/nocobase/nocobase/pull/6283)) oleh @2013xile
Referensi: [Integrasi AI](https://docs.nocobase.com/handbook/ai/service)
- **[Integrasi AI (EE)]** Plugin baru: Integrasi AI (EE) oleh @2013xile
Referensi: [Integrasi AI](https://docs.nocobase.com/handbook/ai/service)
### 🚀 Peningkatan

- **[client]**
  - Menambahkan penanganan debounce pada tombol ([#6351](https://github.com/nocobase/nocobase/pull/6351)) oleh @Cyx649312038

  - Membuat menu responsif terhadap lebar layar ([#6331](https://github.com/nocobase/nocobase/pull/6331)) oleh @zhangzhonghe

- **[Workflow]** Mengizinkan untuk melewati pemicu alur kerja koleksi dalam event database ([#6379](https://github.com/nocobase/nocobase/pull/6379)) oleh @mytharcher

- **[Workflow: Node agregat]** Menambahkan proses pembulatan untuk angka agregat berdasarkan tipe double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) oleh @mytharcher

- **[Aksi: Impor catatan Pro]** mendukung opsi lanjutan pada tombol Impor Pro oleh @katherinehhh

- **[Workflow: JavaScript]** Mendukung require paket dari jalur absolut oleh @mytharcher

- **[Penyimpanan file: S3(Pro)]** mencoba memuat ulang penyimpanan jika tidak ditemukan oleh @jiannx

### 🐛 Perbaikan Bug

- **[client]**
  - Terjemahan kustom judul menu tidak valid ([#6377](https://github.com/nocobase/nocobase/pull/6377)) oleh @zhangzhonghe

  - Masalah terkait zona waktu yang menyebabkan pengurangan satu jam pada pemilih tanggal ([#6359](https://github.com/nocobase/nocobase/pull/6359)) oleh @katherinehhh

  - Pengaturan sortable yang hilang untuk field koleksi warisan ([#6372](https://github.com/nocobase/nocobase/pull/6372)) oleh @katherinehhh

  - Dropdown pengaturan penyimpanan field lampiran tidak menampilkan opsi ([#6365](https://github.com/nocobase/nocobase/pull/6365)) oleh @katherinehhh

  - Komponen subform tidak sejajar dengan form utama saat label disembunyikan ([#6357](https://github.com/nocobase/nocobase/pull/6357)) oleh @katherinehhh

  - Blok asosiasi tidak dirender di popup dalam pewarisan koleksi ([#6303](https://github.com/nocobase/nocobase/pull/6303)) oleh @katherinehhh

  - Memperbaiki masalah scrollbar saat membuka tab halaman dengan blok tinggi penuh ([#6347](https://github.com/nocobase/nocobase/pull/6347)) oleh @katherinehhh

  - Memperbaiki error yang muncul saat membuat koleksi file ([#6363](https://github.com/nocobase/nocobase/pull/6363)) oleh @mytharcher

- **[database]** Memperbaiki error saat mengambil catatan koleksi relasi jika kunci sumber di field relasi adalah string numerik ([#6360](https://github.com/nocobase/nocobase/pull/6360)) oleh @2013xile

- **[Klien WEB]**
  - Menambahkan tab halaman di tabel manajemen rute tidak berfungsi ([#6362](https://github.com/nocobase/nocobase/pull/6362)) oleh @zhangzhonghe

  - Setelah menambahkan halaman ke tabel rute, halaman muncul kosong ([#6366](https://github.com/nocobase/nocobase/pull/6366)) oleh @zhangzhonghe

- **[Pengguna]**
  - Error "Tidak ada izin" saat pengguna tanpa izin manajemen pengguna melihat profil mereka sendiri ([#6382](https://github.com/nocobase/nocobase/pull/6382)) oleh @2013xile

  - Error "Tidak ada izin" saat memperbarui pengaturan sistem di manajemen pengguna ([#6380](https://github.com/nocobase/nocobase/pull/6380)) oleh @2013xile

- **[Kontrol akses]** Di tabel manajemen izin, nama tab halaman kosong ([#6364](https://github.com/nocobase/nocobase/pull/6364)) oleh @zhangzhonghe

- **[Integrasi AI]** Masalah di mana `baseURL` default untuk penyedia LLM adalah `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) oleh @2013xile

- **[Workflow]** Memperbaiki acl untuk mendapatkan job ([#6352](https://github.com/nocobase/nocobase/pull/6352)) oleh @mytharcher

- **[Workflow: Event aksi kustom]** Memperbaiki locale dan koleksi yang dapat dimodifikasi setelah dieksekusi oleh @mytharcher

- **[Aksi: Impor catatan Pro]** Menggunakan opsi tambahan untuk menentukan apakah akan memicu alur kerja atau tidak oleh @mytharcher

- **[Aksi: Ekspor catatan Pro]** aksi ekspor Pro kehilangan parameter sortir oleh @katherinehhh
