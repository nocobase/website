---
title: "NocoBase v1.6.21: Menambahkan API penundaan untuk skenario yang dibuka tanpa penundaan"
description: "Catatan Rilis v1.6.21"
---

### 🚀 Peningkatan

- **[client]** Menambahkan API penundaan untuk skenario yang terbuka tanpa penundaan ([#6681](https://github.com/nocobase/nocobase/pull/6681)) oleh @mytharcher

- **[create-nocobase-app]** Memutakhirkan beberapa dependensi ke versi terbaru ([#6673](https://github.com/nocobase/nocobase/pull/6673)) oleh @chenos

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki error yang muncul saat kursor mouse diarahkan ke blok template yang direferensikan dalam konfigurasi node persetujuan ([#6691](https://github.com/nocobase/nocobase/pull/6691)) oleh @mytharcher

  - Kolom asosiasi kustom tidak menampilkan pengaturan komponen kolom ([#6692](https://github.com/nocobase/nocobase/pull/6692)) oleh @katherinehhh

  - Memperbaiki lokal untuk komponen unggah ([#6682](https://github.com/nocobase/nocobase/pull/6682)) oleh @mytharcher

  - Muat lambat komponen UI yang hilang akan menyebabkan error render ([#6683](https://github.com/nocobase/nocobase/pull/6683)) oleh @gchust

  - Menambahkan komponen Password asli ke HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) oleh @mytharcher

  - Kolom warisan ditampilkan dalam daftar penugasan kolom koleksi saat ini ([#6666](https://github.com/nocobase/nocobase/pull/6666)) oleh @katherinehhh

- **[database]** Memperbaiki error build CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) oleh @aaaaaajie

- **[build]** Output build tidak benar ketika plugin bergantung pada beberapa pustaka AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) oleh @gchust

- **[Aksi: Impor catatan]** Memperbaiki error saat mengimpor kolom waktu xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) oleh @aaaaaajie

- **[Workflow: Node manual]** Memperbaiki konstanta status tugas manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) oleh @mytharcher

- **[Blok: iframe]** Scrollbar vertikal muncul ketika blok iframe diatur ke tinggi penuh ([#6675](https://github.com/nocobase/nocobase/pull/6675)) oleh @katherinehhh

- **[Workflow: Event aksi kustom]** Memperbaiki kasus uji oleh @mytharcher

- **[Manajer cadangan]** Error waktu tunggu terjadi saat mencoba memulihkan cadangan yang tidak terenkripsi dengan kata sandi oleh @gchust
