---
title: "NocoBase v2.0.0-beta.16: Menambahkan API untuk memindahkan node"
description: "Catatan Rilis v2.0.0-beta.16"
---

### 🎉 Fitur Baru

- **[client]** menambahkan komponen subtable (pengeditan popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) oleh @katherinehhh

- **[Workflow]** Menambahkan API untuk memindahkan node ([#8507](https://github.com/nocobase/nocobase/pull/8507)) oleh @mytharcher

### 🚀 Peningkatan

- **[client]**
  - mencegah render ulang seluruh tabel saat memperbarui sel ([#8349](https://github.com/nocobase/nocobase/pull/8349)) oleh @katherinehhh

  - Meningkatkan subform to-many untuk diinisialisasi dengan item default dan menghindari pembuatan record saat dikosongkan ([#8458](https://github.com/nocobase/nocobase/pull/8458)) oleh @katherinehhh

- **[File manager]** Menambahkan pratinjau yang dapat diperluas untuk file manager ([#8501](https://github.com/nocobase/nocobase/pull/8501)) oleh @mytharcher

- **[Workflow]** Mengubah jalur rute subhalaman workflow, agar semua halaman workflow berada di bawah prefiks `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki duplikasi waktu pada nilai filter DateTime ([#8506](https://github.com/nocobase/nocobase/pull/8506)) oleh @zhangzhonghe

  - Memperbaiki masalah yang mencegah penggunaan variabel formulir untuk menetapkan nilai dalam aturan tautan untuk bidang subform to-many bertingkat. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) oleh @gchust

  - Memperbaiki masalah di mana data tidak diperbarui setelah perubahan di beberapa popup bertingkat dan di beberapa blok. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) oleh @gchust

  - memperbaiki masalah di mana data sub-detail dalam mode hanya-baca tidak dapat ditampilkan dengan benar di formulir edit ([#8469](https://github.com/nocobase/nocobase/pull/8469)) oleh @katherinehhh

  - memperbaiki logika refine untuk targetKey opsional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) oleh @katherinehhh

  - memperbaiki parameter filter yang salah untuk Select bidang relasi di subtable yang dapat diedit ([#8335](https://github.com/nocobase/nocobase/pull/8335)) oleh @katherinehhh

- **[flow-engine]** memperbaiki masalah FilterByTK ketika filterTargetKey adalah array elemen tunggal di sumber data eksternal ([#8522](https://github.com/nocobase/nocobase/pull/8522)) oleh @katherinehhh

- **[AI employees]** memperbaiki masalah konfigurasi bidang yang dapat dipilih yang tidak konsisten antara pemodelan AI dan manajemen sumber data ([#8488](https://github.com/nocobase/nocobase/pull/8488)) oleh @cgyrock

- **[Email manager]** body tidak menutup saat teks dipilih. memperbaiki kegagalan unduh lampiran oleh @jiannx
