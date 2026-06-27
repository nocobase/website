---
title: "NocoBase v1.7.13: Lebar kontainer logo menyesuaikan dengan tipe konten"
description: "Catatan Rilis v1.7.13"
---

### 🚀 Peningkatan

- **[client]** Lebar kontainer logo menyesuaikan dengan tipe konten (168px tetap untuk gambar, lebar otomatis untuk teks) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) oleh @Cyx649312038

- **[Workflow: Persetujuan]** Menambahkan opsi bidang tambahan untuk daftar penerima tugas ulang oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Pesan validasi wajib di subtable tetap muncul saat berpindah halaman ([#7080](https://github.com/nocobase/nocobase/pull/7080)) oleh @katherinehhh

  - Titik desimal hilang setelah mengganti komponen jumlah dari mask ke inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) oleh @katherinehhh

  - Rendering Markdown (Vditor) yang salah di subtable ([#7074](https://github.com/nocobase/nocobase/pull/7074)) oleh @katherinehhh

- **[Bidang koleksi: Urutan]** Memperbaiki perhitungan urutan bigint berbasis string ([#7079](https://github.com/nocobase/nocobase/pull/7079)) oleh @mytharcher

- **[Manajer cadangan]** Kesalahan perintah tidak dikenal saat memulihkan cadangan MySQL di platform windows oleh @gchust
