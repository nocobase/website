---
title: "NocoBase v1.9.0-alpha.16: Dukungan untuk memutar gambar saat pratinjau"
description: "Catatan Rilis v1.9.0-alpha.16"
---

### 🚀 Peningkatan

- **[klien]**
  - Mendukung rotasi gambar saat pratinjau ([#7523](https://github.com/nocobase/nocobase/pull/7523)) oleh @mytharcher

  - menambahkan dukungan lokalisasi untuk tooltip & judul item grup ([#7485](https://github.com/nocobase/nocobase/pull/7485)) oleh @katherinehhh

- **[Adaptor antrian RabbitMQ]** meningkatkan penanganan koneksi RabbitMQ dan logika pemrosesan pesan oleh @sdp-ncd

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah submenu sidebar tidak dapat disorot dengan benar ([#7520](https://github.com/nocobase/nocobase/pull/7520)) oleh @duannyuuu

  - Memperbaiki masalah popover konfigurasi ikon menu terhalang ([#7515](https://github.com/nocobase/nocobase/pull/7515)) oleh @zhangzhonghe

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah pesan terbaru tidak ditampilkan saat membuka popup notifikasi ([#7514](https://github.com/nocobase/nocobase/pull/7514)) oleh @mytharcher

- **[Alur Kerja]** Memperbaiki masalah kondisi daftar alur kerja tidak benar saat memuat konteks bidang terkait dalam konfigurasi alur kerja terikat ([#7516](https://github.com/nocobase/nocobase/pull/7516)) oleh @mytharcher

- **[Alur Kerja: Node perulangan]** Memperbaiki masalah proses yang salah melanjutkan ke item berikutnya meskipun kondisi node perulangan tidak terpenuhi ([#7521](https://github.com/nocobase/nocobase/pull/7521)) oleh @mytharcher

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki masalah terjadinya kesalahan saat menghapus data dari sumber data eksternal oleh @mytharcher

  - Memperbaiki masalah bidang rumus dalam formulir persetujuan tidak diperbarui secara otomatis oleh @mytharcher
