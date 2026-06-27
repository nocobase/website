---
title: "NocoBase v1.9.0-beta.9: Blok tabel mendukung penambahan tombol 'Pengaturan kolom'"
description: "Catatan Rilis v1.9.0-beta.9"
---

### 🎉 Fitur Baru

- **[klien]**

  - Blok tabel mendukung penambahan tombol 'Pengaturan kolom' untuk mengatur urutan dan visibilitas kolom ([#7204](https://github.com/nocobase/nocobase/pull/7204)) oleh @kerwin612
  - Mendukung aturan validasi bidang ([#7297](https://github.com/nocobase/nocobase/pull/7297)) oleh @aaaaaajie
- **[Sumber data: Utama]**

  - Mendukung pembacaan tabel dari sumber data utama ([#7238](https://github.com/nocobase/nocobase/pull/7238)) oleh @aaaaaajie
  - Mendukung penampilan tabel yang ditentukan plugin di sumber data utama. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) oleh @aaaaaajie

### 🚀 Peningkatan

- **[klien]** Mendukung rotasi gambar saat pratinjau ([#7523](https://github.com/nocobase/nocobase/pull/7523)) oleh @mytharcher
- **[snowflake-id]** Mengubah ID tabel sistem dengan primary key auto-increment tetapi tanpa pengidentifikasi unik menjadi ID mirip Snowflake 53-bit ([#7465](https://github.com/nocobase/nocobase/pull/7465)) oleh @2013xile
- **[Workflow]** Memisahkan logika terkait pengiriman ke dalam dispatcher mandiri ([#7535](https://github.com/nocobase/nocobase/pull/7535)) oleh @mytharcher
- **[Adaptor antrian RabbitMQ]** meningkatkan penanganan koneksi RabbitMQ dan logika pemrosesan pesan oleh @sdp-ncd
- **[Manajer email]**

  - mendukung sinkronisasi batch oleh @jiannx
  - editor kaya mendukung pengubahan ukuran gambar oleh @jiannx

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana tombol "Pengaturan kolom" memuat kolom dari tabel di dalam dialog modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) oleh @kerwin612
  - Memperbaiki masalah di mana submenu sidebar tidak dapat disorot dengan benar ([#7520](https://github.com/nocobase/nocobase/pull/7520)) oleh @duannyuuu
- **[Workflow]**

  - Memperbaiki masalah eksekusi duplikat akibat penanganan antrian yang tidak tepat ([#7533](https://github.com/nocobase/nocobase/pull/7533)) oleh @mytharcher
  - Memperbaiki masalah di mana kondisi daftar workflow tidak benar saat memuat konteks bidang terkait dalam konfigurasi workflow terikat ([#7516](https://github.com/nocobase/nocobase/pull/7516)) oleh @mytharcher
  - Memperbaiki masalah di mana tugas terjadwal berdasarkan bidang tanggal tidak terpicu setelah dimulai ([#7524](https://github.com/nocobase/nocobase/pull/7524)) oleh @mytharcher
- **[Workflow: Node loop]** Memperbaiki masalah di mana proses salah melanjutkan ke item berikutnya meskipun kondisi node loop tidak terpenuhi ([#7521](https://github.com/nocobase/nocobase/pull/7521)) oleh @mytharcher
- **[Manajer email]**

  - Subjek email sampah oleh @jiannx
  - subjek sampah oleh @jiannx
  - editor kaya mendukung soft line breaks oleh @jiannx
  - Mendukung email yang sama untuk banyak orang oleh @jiannx
  - kinerja optimal daftar pesan email oleh @jiannx
  - setelah memilih baris, atur "Dibaca" dan "Belum dibaca" oleh @jiannx
  - tambahkan bidang rawId untuk optimalisasi kinerja oleh @jiannx
  - atribut ref dalam html menyebabkan pengecualian rendering oleh @jiannx
  - konten submail tidak dapat difilter oleh @jiannx
  - mendukung resync oleh @jiannx
  - Membedakan secara manual antara meneruskan dan membalas oleh @jiannx
