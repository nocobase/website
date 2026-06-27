---
title: "NocoBase v1.4.0-alpha.20241017164316: Peningkatan Node Alur Kerja"
description: "Catatan Rilis v1.4.0-alpha.20241017164316"
---

### 🎉 Fitur Baru

- **[Workflow: Node Perulangan]** menambahkan lebih banyak opsi kontrol pada konfigurasi node perulangan ([#5342](https://github.com/nocobase/nocobase/pull/5342)) oleh @mytharcher
  Referensi: [Node Perulangan](https://docs.nocobase.com/handbook/workflow-loop)
- **[Workflow]** Menambahkan tombol uji coba untuk node workflow, dan API untuk mengimplementasikan fungsi pengujian ([#5407](https://github.com/nocobase/nocobase/pull/5407)) oleh @mytharcher
- **[Komponen bidang: mask]** Menambahkan komponen bidang `mask`, mendukung tampilan data bidang sebagai string yang ditutupi oleh @gchust
  Referensi: [Mask](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 Peningkatan

- **[client]** mengizinkan judul kolom tabel untuk direset ke default ([#5439](https://github.com/nocobase/nocobase/pull/5439)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[client]** memperbaiki opsi komponen bidang yang tidak diterjemahkan dengan benar ([#5442](https://github.com/nocobase/nocobase/pull/5442)) oleh @gchust
- **[Workflow: Node permintaan HTTP]** memperbaiki pesan kesalahan lama di node permintaan ([#5443](https://github.com/nocobase/nocobase/pull/5443)) oleh @mytharcher
