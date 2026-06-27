---
title: "NocoBase v1.8.0-beta.12: Dukungan untuk menambahkan opsi pool dari env"
description: "Catatan Rilis v1.8.0-beta.12"
---

### 🚀 Peningkatan

- **[database]** Dukungan untuk menambahkan opsi pool dari env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) oleh @mytharcher

- **[Workflow]**
  - Meningkatkan performa pemuatan daftar eksekusi dengan mengecualikan field JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) oleh @mytharcher

  - Menambahkan API log untuk pengujian node ([#7129](https://github.com/nocobase/nocobase/pull/7129)) oleh @mytharcher

- **[Multi-app manager]** menambahkan dukungan filter pada manajemen multi-aplikasi ([#7124](https://github.com/nocobase/nocobase/pull/7124)) oleh @katherinehhh

- **[Workflow: Approval]** Mengubah waktu menjadi absolut di linimasa oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - markdown tidak merefleksikan perubahan secara real-time saat mereferensikan variabel $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) oleh @katherinehhh

  - masalah gaya warna latar belakang di sub-tabel pada blok detail ([#7144](https://github.com/nocobase/nocobase/pull/7144)) oleh @katherinehhh

  - Konfigurasi UI node manual Workflow: aturan tautan tidak dapat memilih variabel Formulir saat ini ([#7125](https://github.com/nocobase/nocobase/pull/7125)) oleh @zhangzhonghe

  - Pengaturan displayName field di tampilan terhubung tidak berpengaruh ([#7130](https://github.com/nocobase/nocobase/pull/7130)) oleh @aaaaaajie

  - nilai default field asosiasi menimpa data yang ada di sub-tabel ([#7120](https://github.com/nocobase/nocobase/pull/7120)) oleh @katherinehhh

  - Toleransi kesalahan untuk pengaturan berdasarkan 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) oleh @mytharcher

- **[utils]** masalah penyaringan pada DateOnly atau Datetime (tanpa zona waktu) menggunakan variabel Exact day ([#7113](https://github.com/nocobase/nocobase/pull/7113)) oleh @katherinehhh

- **[Workflow]** Memperbaiki error yang disebabkan oleh impor siklik ([#7134](https://github.com/nocobase/nocobase/pull/7134)) oleh @mytharcher

- **[Kebijakan kata sandi]** Dukungan untuk mengunci akun pengguna secara permanen oleh @2013xile

- **[Workflow: Subflow]** Memperbaiki masalah dalam mode kluster oleh @mytharcher

- **[Workflow: Approval]**
  - Menghapus field yang tidak dapat difilter dari filter oleh @mytharcher

  - Menambahkan pengaturan tata letak formulir oleh @mytharcher
