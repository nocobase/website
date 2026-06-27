---
title: "NocoBase v1.6.0-alpha.2: Dukungan mengaktifkan pop up pembuka tautan pada bidang readPretty"
description: "Catatan Rilis v1.6.0-alpha.2"
---

### 🎉 Fitur Baru

- **[klien]**
  - Mendukung pengaktifan pop up tautan pada bidang readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) oleh @katherinehhh

  - Mendukung tindakan kaitkan dan lepaskan kaitan di blok asosiasi ([#5695](https://github.com/nocobase/nocobase/pull/5695)) oleh @katherinehhh

- **[server]** Menambahkan manajer audit ([#5601](https://github.com/nocobase/nocobase/pull/5601)) oleh @chenzhizdt

- **[Workflow]** mendukung pemicuan alur kerja secara manual ([#5664](https://github.com/nocobase/nocobase/pull/5664)) oleh @mytharcher

- **[Workflow: Acara pra-tindakan]** mendukung pemicuan alur kerja secara manual oleh @mytharcher

### 🚀 Peningkatan

- **[klien]**
  - menerapkan pemuatan sesuai permintaan untuk komponen front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) oleh @gchust

  - Meningkatkan kinerja rendering halaman dan mendukung fungsionalitas keep-alive halaman ([#5515](https://github.com/nocobase/nocobase/pull/5515)) oleh @zhangzhonghe

- **[Bidang koleksi: Urutkan]** menambahkan deskripsi plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) oleh @mytharcher

- **[Sematkan NocoBase]** Meningkatkan kinerja rendering halaman oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana variabel tidak dapat digunakan dengan benar di blok sumber data pihak ketiga ([#5782](https://github.com/nocobase/nocobase/pull/5782)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana nilai bidang asosiasi kosong di templat blok. Memperbaiki masalah di mana lingkup data blok yang menggunakan variabel tidak berfungsi dengan benar di sumber data pihak ketiga ([#5777](https://github.com/nocobase/nocobase/pull/5777)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana properti dinamis komponen tidak berfungsi dengan pemuatan lambat ([#5776](https://github.com/nocobase/nocobase/pull/5776)) oleh @gchust

  - Memperbaiki pesan peringatan di React saat memuat hook secara dinamis di lingkungan pengembangan ([#5758](https://github.com/nocobase/nocobase/pull/5758)) oleh @gchust

- **[Visualisasi data]** Memperbaiki masalah di mana komponen bidang filter blok bagan tidak dirender ([#5769](https://github.com/nocobase/nocobase/pull/5769)) oleh @2013xile
