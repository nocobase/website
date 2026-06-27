---
title: "NocoBase v1.3.34-beta: Peningkatan Konfigurasi Bidang Formulir Filter"
description: "Catatan Rilis v1.3.34-beta"
---

### 🎉 Fitur Baru

- **[test]** Kolom asosiasi pada formulir filter mendukung konfigurasi apakah pemilihan ganda diperbolehkan ([#5451](https://github.com/nocobase/nocobase/pull/5451)) oleh @zhangzhonghe

- **[client]** Menambahkan variabel bernama "Objek induk" ([#5449](https://github.com/nocobase/nocobase/pull/5449)) oleh @zhangzhonghe
Referensi: [Objek induk](https://docs.nocobase.com/handbook/ui/variables#parent-object)
### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki variabel parameter pencarian URL yang tidak terurai ([#5454](https://github.com/nocobase/nocobase/pull/5454)) oleh @zhangzhonghe

  - Memperbaiki bug penghapusan data saat memilih data asosiasi dengan lingkup data di sub-tabel bersarang ([#5441](https://github.com/nocobase/nocobase/pull/5441)) oleh @katherinehhh

  - Memperbaiki warna latar belakang baris tabel yang terpilih ([#5445](https://github.com/nocobase/nocobase/pull/5445)) oleh @mytharcher

- **[Blok: Peta]** menghapus konfigurasi level zoom untuk kolom peta di tabel ([#5457](https://github.com/nocobase/nocobase/pull/5457)) oleh @katherinehhh

- **[Manajer berkas]** memperbaiki pemanggilan hook aturan penyimpanan pada kolom read-pretty ([#5447](https://github.com/nocobase/nocobase/pull/5447)) oleh @mytharcher

- **[Sumber data: Utama]** memperbaiki kegagalan kasus e2e akibat perubahan komponen ([#5437](https://github.com/nocobase/nocobase/pull/5437)) oleh @mytharcher
