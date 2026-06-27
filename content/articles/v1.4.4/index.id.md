---
title: "NocoBase v1.4.4: Perbaikan Bug"
description: "Catatan Rilis v1.4.4"
---

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah bidang sumber data eksternal tidak ditampilkan di blok tabel ([#5825](https://github.com/nocobase/nocobase/pull/5825)) oleh @katherinehhh

  - Memperbaiki masalah tampilan untuk bidang warisan di konfigurasi formulir ([#5822](https://github.com/nocobase/nocobase/pull/5822)) oleh @katherinehhh

  - Memperbaiki bidang warisan tidak muncul di daftar bidang dan tidak dapat ditimpa ([#5800](https://github.com/nocobase/nocobase/pull/5800)) oleh @katherinehhh

- **[Visualisasi Data]** Memperbaiki masalah saat memformat bidang tanggal yang sadar zona waktu di MySQL ([#5829](https://github.com/nocobase/nocobase/pull/5829)) oleh @2013xile

- **[Alur Kerja]**
  - Memperbaiki transaksi lintas sumber data yang menyebabkan kesalahan event koleksi ([#5818](https://github.com/nocobase/nocobase/pull/5818)) oleh @mytharcher

  - Memperbaiki tipe tanggal yang terlewat dalam konfigurasi jadwal berbasis bidang tanggal ([#5816](https://github.com/nocobase/nocobase/pull/5816)) oleh @mytharcher

- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbaiki masalah di mana pembaruan bidang m2m array di koleksi relasi tunggal tidak berlaku ([#5820](https://github.com/nocobase/nocobase/pull/5820)) oleh @2013xile

- **[Kalender]**
  - Memperbaiki kesalahan saat mengklik tanggal kosong di kalender ([#5803](https://github.com/nocobase/nocobase/pull/5803)) oleh @katherinehhh

  - Memperbaiki masalah di mana menutup popup yang dibuka melalui 'Blok Kalender' menyebabkan semua popup tertutup ([#5793](https://github.com/nocobase/nocobase/pull/5793)) oleh @zhangzhonghe

- **[Formulir publik]** Memperbaiki jalur pemindaian kode QC yang salah di formulir publik sub-aplikasi ([#5799](https://github.com/nocobase/nocobase/pull/5799)) oleh @katherinehhh
