---
title: "NocoBase v1.8.11: Dukungan untuk pratinjau file Office melalui pratinjau langsung Microsoft"
description: "Catatan Rilis v1.8.11"
---

### 🎉 Fitur Baru

- **[Office File Previewer]** Dukungan untuk melihat pratinjau file Office melalui pratinjau langsung Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) oleh @mytharcher

### 🚀 Peningkatan

- **[client]** Menu tidak lagi otomatis tertutup setelah pemilihan ([#7252](https://github.com/nocobase/nocobase/pull/7252)) oleh @kerwin612

- **[Notifikasi: Pesan dalam aplikasi]** Mengubah pesan dalam aplikasi dari SSE menjadi WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) oleh @mytharcher

- **[Workflow]** Mengurangi jumlah pekerjaan yang dimuat saat mempersiapkan eksekusi ([#7284](https://github.com/nocobase/nocobase/pull/7284)) oleh @mytharcher

- **[Auth: DingTalk]** Di klien DingTalk, atur judul bilah navigasi menjadi string kosong, bukan menampilkan "Memuat…" oleh @2013xile

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana tabel pohon tidak dapat diperluas ([#7309](https://github.com/nocobase/nocobase/pull/7309)) oleh @zhangzhonghe

  - Memperbaiki perilaku tak terduga dalam pengurutan seret dan lepas baris tabel ([#6959](https://github.com/nocobase/nocobase/pull/6959)) oleh @ChimingLiu

  - Memperbaiki masalah loop tak terbatas saat mengurai nilai default bidang ([#7301](https://github.com/nocobase/nocobase/pull/7301)) oleh @zhangzhonghe

  - Memperbaiki masalah tampilan bidang tanggal yang tidak normal di dalam jendela pop-up saat mengonfigurasi pemilih data untuk bidang relasi di formulir filter ([#7290](https://github.com/nocobase/nocobase/pull/7290)) oleh @katherinehhh

- **[Workflow: Node permintaan HTTP]** Memperbaiki bug kondisi balapan ([#7310](https://github.com/nocobase/nocobase/pull/7310)) oleh @mytharcher

- **[Workflow]** Memperbaiki masalah BigInt ID di MySQL saat menyimpan pekerjaan ([#7292](https://github.com/nocobase/nocobase/pull/7292)) oleh @mytharcher

- **[Aksi: Ekspor rekaman]** Memperbaiki format yang salah dari bidang relasi bersarang saat mengekspor ke Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) oleh @aaaaaajie

- **[Sumber data: SQL Server Eksternal]** Memperbaiki format penyimpanan yang tidak konsisten untuk bidang datetime MSSQL (tanpa zona waktu) dari sumber data eksternal oleh @aaaaaajie

- **[Workflow: Persetujuan]** Memperbaiki kesalahan yang muncul dari pemilih penerima tugas di dalam sumber data eksternal oleh @mytharcher
