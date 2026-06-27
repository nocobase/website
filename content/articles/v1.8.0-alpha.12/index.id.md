---
title: "NocoBase v1.8.0-alpha.12: Dukungan untuk menambahkan opsi pool dari env"
description: "Catatan Rilis v1.8.0-alpha.12"
---

### 🚀 Perbaikan

- **[database]** Dukungan untuk menambahkan opsi pool dari env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) oleh @mytharcher

- **[Workflow]**
  - Meningkatkan kinerja pemuatan daftar eksekusi dengan mengecualikan field JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) oleh @mytharcher

  - Menambahkan API log untuk pengujian node ([#7129](https://github.com/nocobase/nocobase/pull/7129)) oleh @mytharcher

- **[Workflow: Approval]** Mengubah waktu menjadi absolut di linimasa oleh @mytharcher

### 🐛 Perbaikan Bug

- **[utils]** Masalah penyaringan pada DateOnly atau Datetime (tanpa zona waktu) menggunakan variabel Exact day ([#7113](https://github.com/nocobase/nocobase/pull/7113)) oleh @katherinehhh

- **[cli]**
  - Kesalahan undefined saat mengunduh plugin ([#7143](https://github.com/nocobase/nocobase/pull/7143)) oleh @jiannx

  - Menyesuaikan salinan lisensi saat menginstal plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) oleh @jiannx

- **[client]**
  - Toleransi kesalahan untuk pengaturan berdasarkan 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) oleh @mytharcher

  - Pengaturan field displayName di tampilan terhubung tidak berpengaruh ([#7130](https://github.com/nocobase/nocobase/pull/7130)) oleh @aaaaaajie

  - Konfigurasi UI node manual Workflow: aturan tautan tidak dapat memilih variabel Form saat ini ([#7125](https://github.com/nocobase/nocobase/pull/7125)) oleh @zhangzhonghe

- **[Workflow]** Memperbaiki error yang disebabkan oleh impor siklik ([#7134](https://github.com/nocobase/nocobase/pull/7134)) oleh @mytharcher

- **[plugin-commercial]**
  - Mode develop tidak menampilkan popup lisensi oleh @jiannx

  - Menutup sementara pop-up verifikasi lisensi oleh @jiannx

  - Menyesuaikan logika verifikasi lisensi dan mendukung pencocokan nama domain pan oleh @jiannx

- **[Kebijakan kata sandi]** Mendukung penguncian permanen akun pengguna oleh @2013xile

- **[Workflow: Subflow]** Memperbaiki masalah dalam mode cluster oleh @mytharcher

- **[Workflow: Approval]**
  - Menambahkan pengaturan tata letak formulir oleh @mytharcher

  - Menghapus field yang tidak dapat difilter dari filter oleh @mytharcher
