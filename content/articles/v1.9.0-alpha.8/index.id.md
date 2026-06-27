---
title: "NocoBase v1.9.0-alpha.8: Optimalkan kinerja saat mengganti tab popup"
description: "Catatan Rilis v1.9.0-alpha.8"
---

### 🚀 Peningkatan

- **[client]** Optimalkan kinerja saat mengganti tab popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) oleh @zhangzhonghe
- **[Penampil Berkas Office]** Tambahkan dukungan untuk pratinjau berkas `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana cakupan data yang disimpan sebelumnya tidak terpilih saat mengonfigurasi izin secara individual ([#7288](https://github.com/nocobase/nocobase/pull/7288)) oleh @aaaaaajie
  - Memperbaiki kesalahan penghapusan koleksi massal ([#7345](https://github.com/nocobase/nocobase/pull/7345)) oleh @aaaaaajie
- **[Alur Kerja]** Hindari kesalahan yang disebabkan oleh publikasi ke antrian peristiwa saat berhenti ([#7348](https://github.com/nocobase/nocobase/pull/7348)) oleh @mytharcher
- **[Alur Kerja: Node Paralel]** Memperbaiki penangguhan node paralel setelah dilanjutkan di MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki pembaruan asosiasi saat mengirim draf oleh @mytharcher
  - Memperbaiki aturan tautan yang tidak berfungsi di blok detail persetujuan asli oleh @mytharcher
