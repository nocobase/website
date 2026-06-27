---
title: "NocoBase v2.0.0-alpha.44: mendukung pemilih kaskade untuk bidang asosiasi koleksi pohon"
description: "Catatan Rilis v2.0.0-alpha.44"
---

### 🎉 Fitur Baru

- **[klien]**
  - menambahkan dukungan pembuatan cepat pada pilih bidang asosiasi ([#7887](https://github.com/nocobase/nocobase/pull/7887)) oleh @katherinehhh

  - mendukung pemilih kaskade untuk bidang asosiasi koleksi pohon ([#7846](https://github.com/nocobase/nocobase/pull/7846)) oleh @katherinehhh

- **[Telemetri]** Menambahkan plugin baru: Telemetri, plugin telemetri berbasis OpenTelemetry yang menyediakan metrik CPU, memori, dan permintaan HTTP dengan dukungan ekspor HTTP oleh @2013xile

### 🚀 Peningkatan

- **[telemetri]** Mendukung pengontrolan metrik mana yang diekspor ([#7938](https://github.com/nocobase/nocobase/pull/7938)) oleh @2013xile

- **[Manajer tugas asinkron]** Tugas asinkron untuk sub-aplikasi seharusnya hanya memulai sub-aplikasi target di Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[klien]**
  - menghapus aksi tree-table dari blok non-tree-collection ([#7931](https://github.com/nocobase/nocobase/pull/7931)) oleh @katherinehhh

  - Memperbaiki antarmuka bidang yang menampilkan many-to-one alih-alih one-to-one untuk belongsTo dalam konfigurasi sumber data eksternal ([#7936](https://github.com/nocobase/nocobase/pull/7936)) oleh @cgyrock

- **[flow-engine]** Memperbaiki masalah tampilan ikon toolbar yang tidak sejajar pada tombol blok detail ([#7929](https://github.com/nocobase/nocobase/pull/7929)) oleh @zhangzhonghe

- **[Workflow]** Memperbaiki masalah di mana memperbarui jumlah tugas secara tidak sengaja mereset status formulir yang sedang diisi ([#7937](https://github.com/nocobase/nocobase/pull/7937)) oleh @mytharcher

- **[Bidang koleksi: Many to many (array)]** Memperbaiki masalah bidang M2M (array) saat membuat/memperbarui data terkait ([#7926](https://github.com/nocobase/nocobase/pull/7926)) oleh @cgyrock

- **[Aksi: Impor catatan Pro]** memperbaiki masalah di mana modifikasi opsi impor oleh pengunggah tidak berpengaruh oleh @katherinehhh
