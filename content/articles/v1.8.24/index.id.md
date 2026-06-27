---
title: "NocoBase v1.8.24: alur kerja mendukung kembali ke node mana pun dalam proses persetujuan"
description: "Catatan Rilis v1.8.24"
---

### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Dukungan untuk kembali ke node mana pun dalam proses persetujuan oleh @mytharcher

### 🚀 Peningkatan

- **[server]** Menggunakan logger sistem standar untuk antrean pesan ([#7480](https://github.com/nocobase/nocobase/pull/7480)) oleh @mytharcher

- **[client]** Menghapus popover elipsis dari daftar file ([#7479](https://github.com/nocobase/nocobase/pull/7479)) oleh @mytharcher

- **[Workflow]** Mengoptimalkan proses persiapan workflow untuk mendukung penggunaan data node yang telah dimuat sebelumnya ([#7476](https://github.com/nocobase/nocobase/pull/7476)) oleh @mytharcher

- **[Editor tema]** Menambahkan dukungan untuk kustomisasi warna menu samping ([#7483](https://github.com/nocobase/nocobase/pull/7483)) oleh @duannyuuu

- **[Adaptor antrean Redis]** Menggunakan logger sistem standar untuk adaptor antrean pesan Redis oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana komponen Popover saling tumpang tindih/tertutup ([#7491](https://github.com/nocobase/nocobase/pull/7491)) oleh @zhangzhonghe

  - Pemeriksaan 'tidak kosong' yang salah untuk bidang numerik dalam aturan tautan ([#7477](https://github.com/nocobase/nocobase/pull/7477)) oleh @katherinehhh

  - Select/multiselect/date/richtext readonly masih dapat diedit pada formulir publik ([#7484](https://github.com/nocobase/nocobase/pull/7484)) oleh @katherinehhh

- **[Workflow]** Memperbaiki potensi kesalahan terkait caching log workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) oleh @mytharcher

- **[Enkripsi permintaan HTTP]** Memperbaiki masalah di mana parameter permintaan tidak mendukung tipe URLSearchParams asli oleh @mytharcher

- **[Sumber data: REST API]** Memperbaiki aturan validasi URL REST API oleh @katherinehhh

- **[Workflow: Persetujuan]** Memperbaiki masalah di mana teks status dalam notifikasi penyelesaian persetujuan tidak diterjemahkan oleh @mytharcher
