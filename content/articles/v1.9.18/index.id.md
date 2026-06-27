---
title: "NocoBase v1.9.18: Perbaikan Bug"
description: "Catatan Rilis v1.9.18"
---

### 🐛 Perbaikan Bug

- **[Aksi: Impor rekaman]** Kolom yang diimpor tidak sesuai dengan kolom yang diatur di pengaturan ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) oleh @2013xile

- **[Alur Kerja]** Memperbaiki masalah halaman eksekusi yang menampilkan error ketika pekerjaan pada node tidak terdefinisi ([#8066](https://github.com/nocobase/nocobase/pull/8066)) oleh @mytharcher

- **[Kontrol akses]** Menambahkan middleware untuk pemeriksaan izin pada operasi asosiasi untuk sumber data eksternal ([#8062](https://github.com/nocobase/nocobase/pull/8062)) oleh @2013xile

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki masalah error izin yang muncul saat memuat rekaman terkait persetujuan di panel detail oleh @mytharcher

  - Memperbaiki masalah di mana rekaman persetujuan tidak disertakan dalam hasil pekerjaan di cabang pengembalian oleh @mytharcher

  - Memperbaiki masalah di mana proses menjadi tidak benar saat bercabang dengan urutan dan tanda tangan bersama oleh @mytharcher
