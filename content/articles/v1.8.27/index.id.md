---
title: "NocoBase v1.8.27: Dukungan untuk memutar gambar saat pratinjau"
description: "Catatan Rilis v1.8.27"
---

### 🚀 Peningkatan

- **[client]** Mendukung rotasi gambar saat pratinjau ([#7523](https://github.com/nocobase/nocobase/pull/7523)) oleh @mytharcher

- **[Workflow]** Memisahkan logika terkait pengiriman (dispatching) menjadi dispatcher mandiri ([#7535](https://github.com/nocobase/nocobase/pull/7535)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah submenu sidebar tidak dapat disorot dengan benar ([#7520](https://github.com/nocobase/nocobase/pull/7520)) oleh @duannyuuu

- **[Workflow: Node Loop]** Memperbaiki masalah di mana proses maju ke item berikutnya secara tidak benar meskipun kondisi node loop tidak terpenuhi ([#7521](https://github.com/nocobase/nocobase/pull/7521)) oleh @mytharcher

- **[Workflow]**
  - Memperbaiki masalah eksekusi duplikat akibat penanganan antrian yang tidak tepat ([#7533](https://github.com/nocobase/nocobase/pull/7533)) oleh @mytharcher

  - Memperbaiki masalah kondisi daftar workflow yang salah saat memuat konteks bidang terkait dalam konfigurasi workflow terikat ([#7516](https://github.com/nocobase/nocobase/pull/7516)) oleh @mytharcher

  - Memperbaiki masalah tugas terjadwal berdasarkan bidang tanggal tidak terpicu setelah dimulai ([#7524](https://github.com/nocobase/nocobase/pull/7524)) oleh @mytharcher
