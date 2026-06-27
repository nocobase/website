---
title: "NocoBase v2.1.3: Normalisasi versi build kompatibilitas aplikasi"
description: "Catatan Rilis v2.1.3"
---

### 🚀 Peningkatan

- **[cli]**
  - Normalisasi versi build kompatibilitas aplikasi ([#9763](https://github.com/nocobase/nocobase/pull/9763)) oleh @chenos
  - Mendukung pembaruan skill ke versi tertentu ([#9760](https://github.com/nocobase/nocobase/pull/9760)) oleh @chenos

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana bidang pada subform horizontal terlalu sempit untuk menampilkan data ([#9755](https://github.com/nocobase/nocobase/pull/9755)) oleh @zhangzhonghe
- **[Manajer sumber data]**

  - Memperbaiki laci edit bidang kosong yang disebabkan oleh render ulang berulang pada halaman Konfigurasi bidang sumber data eksternal v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) oleh @katherinehhh
  - Memperbaiki masalah di mana menghapus kategori koleksi aktif di manajer sumber data v1 dapat menyebabkan tab Semua koleksi menjadi kosong. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) oleh @katherinehhh
- **[Manajer tugas asinkron]** Memperbaiki ID permintaan yang salah di log pekerja tugas asinkron ([#9686](https://github.com/nocobase/nocobase/pull/9686)) oleh @2013xile
- **[Workflow: Node SQL]** Memperbaiki migrasi template-variabel lama workflow SQL yang terlewatkan untuk beberapa pengguna versi beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) oleh @mytharcher
- **[Karyawan AI]**

  - Memperbaiki hilangnya konfigurasi pesan di node LLM workflow. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) oleh @cgyrock
  - Memperbaiki masalah di mana lampiran yang ditempelkan ke dialog karyawan AI tidak dapat dihapus. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) oleh @cgyrock
- **[Blok: Kanban]** Memperbaiki dukungan URL untuk kalender dan popup terkait. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) oleh @jiannx
- **[Workflow: Persetujuan]** Memperbaiki masalah di mana data terkait tidak ditampilkan di formulir persetujuan v2 oleh @zhangzhonghe
