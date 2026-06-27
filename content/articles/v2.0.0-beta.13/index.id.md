---
title: "NocoBase v2.0.0-beta.13: Mendukung konfigurasi daftar putih asal CORS"
description: "Catatan Rilis v2.0.0-beta.13"
---

### 🚀 Peningkatan

- **[server]** Mendukung konfigurasi daftar putih asal CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) oleh @2013xile

- **[Aksi: Ekspor rekaman]** Meningkatkan cakupan data aksi ekspor berdasarkan rekaman yang dipilih atau filter sumber daya ([#8442](https://github.com/nocobase/nocobase/pull/8442)) oleh @katherinehhh

- **[Aksi: Ekspor rekaman Pro]** Meningkatkan cakupan data aksi ekspor berdasarkan rekaman yang dipilih atau filter sumber daya oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana popup "Variabel Kustom" terhalang ([#8463](https://github.com/nocobase/nocobase/pull/8463)) oleh @zhangzhonghe

  - Memperbaiki masalah saat mengedit koleksi di antarmuka grafis ([#8451](https://github.com/nocobase/nocobase/pull/8451)) oleh @katherinehhh

  - Memperbaiki masalah di mana pengaturan pengelompokan bidang koleksi tidak berfungsi. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) oleh @katherinehhh

  - Memperbaiki masalah di mana tinggi modal pintasan melebihi tinggi viewport ([#8437](https://github.com/nocobase/nocobase/pull/8437)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana aturan tautan tombol baris tabel mempengaruhi status tombol di dalam formulir popup ([#8434](https://github.com/nocobase/nocobase/pull/8434)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana status kolom aksi tabel terkontaminasi saat berpindah halaman. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) oleh @gchust

  - Memperbaiki masalah di mana tombol "Pengaturan Kolom" tabel tidak berfungsi ([#8441](https://github.com/nocobase/nocobase/pull/8441)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana popup pemilih bidang asosiasi file memiliki z-index yang salah, dan konfigurasi popup tidak dapat disimpan dengan benar. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) oleh @gchust

- **[mesin-alur]**
  - Memperbaiki masalah di mana variabel dalam parameter kode runjs diselesaikan sebelum eksekusi. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) oleh @gchust

  - Memperbaiki masalah di mana variabel popup tidak dapat dipilih di popup pembuatan cepat pemilih data. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) oleh @gchust

  - Memperbaiki masalah di mana mengklik menu konfigurasi berulang kali dapat membuka beberapa popup konfigurasi. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) oleh @gchust

- **[Seluler (tidak digunakan lagi)]** Plugin seluler yang tidak digunakan lagi (digantikan oleh plugin ui-layout sejak versi 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) oleh @chenos

- **[Mesin alur]** Memperbaiki masalah di mana variabel yang mengandung tanda hubung tidak dapat diurai dengan benar. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) oleh @gchust

- **[Manajer email]** Memperbaiki masalah di mana popup konfigurasi email terhalang oleh @zhangzhonghe
