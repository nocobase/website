---
title: "NocoBase v1.6.33: Bangun citra docker lengkap"
description: "Catatan Rilis v1.6.33"
---

### 🚀 Peningkatan

- **[undefined]** Membangun image docker lengkap ([#6898](https://github.com/nocobase/nocobase/pull/6898)) oleh @chenos

- **[client]** Mengoptimalkan masalah halaman yang semakin lambat seiring penggunaan ([#6888](https://github.com/nocobase/nocobase/pull/6888)) oleh @zhangzhonghe

- **[Kalender]** Mendukung tombol refresh yang dapat dikonfigurasi di blok kalender ([#6920](https://github.com/nocobase/nocobase/pull/6920)) oleh @katherinehhh

- **[Workflow: Aksi kustom]** Memperbaiki lokal en-US berdasarkan kunci zh-CN oleh @mytharcher

- **[Workflow: Persetujuan]** Mendukung penyelesaian semua tugas di pusat tugas workflow oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Kesalahan rendering akibat format gaya yang tidak valid saat menambahkan field asosiasi ([#6903](https://github.com/nocobase/nocobase/pull/6903)) oleh @katherinehhh

  - Pemeriksaan nilai kosong yang salah untuk field asosiasi toMany dalam aturan tautan ([#6905](https://github.com/nocobase/nocobase/pull/6905)) oleh @katherinehhh

- **[Field koleksi: Markdown(Vditor)]** Field markdown (Vditor) tidak menyesuaikan dengan tema ([#6919](https://github.com/nocobase/nocobase/pull/6919)) oleh @katherinehhh

- **[Koleksi: Pohon]** Menghindari pembaruan yang salah pada prefiks jalur serupa selama pembaruan jalur ([#6913](https://github.com/nocobase/nocobase/pull/6913)) oleh @2013xile

- **[Manajer file]**
  - Memperbaiki aturan pencocokan pratinjau ([#6902](https://github.com/nocobase/nocobase/pull/6902)) oleh @mytharcher

  - Memperbaiki injeksi koleksi klien dan parameter unggah ([#6909](https://github.com/nocobase/nocobase/pull/6909)) oleh @mytharcher

  - Memperbaiki URL pratinjau pada file non-gambar ([#6889](https://github.com/nocobase/nocobase/pull/6889)) oleh @mytharcher

- **[Workflow: node mailer]** Menangani field 'to' yang tidak terdefinisi dan meningkatkan pemrosesan penerima email. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) oleh @sheldon66

- **[Workflow: Aksi kustom]**
  - Memperbaiki tombol yang berfungsi tidak benar setelah beberapa klik oleh @mytharcher

  - Memperbaiki penanganan error yang tidak dapat dicocokkan berdasarkan kelas oleh @mytharcher

- **[Workflow: Persetujuan]** Memperbaiki perhitungan lampiran asosiasi oleh @mytharcher
