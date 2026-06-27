---
title: "NocoBase v1.3.40-beta: Tambahkan Opsi Lewati Verifikasi SSL"
description: "Catatan Rilis v1.3.40-beta"
---

### 🎉 Fitur Baru

- **[Auth: OIDC]** Menambahkan opsi untuk mengizinkan melewatkan verifikasi SSL oleh @2013xile

### 🚀 Peningkatan

- **[client]** Menampilkan kotak centang nonaktif yang tidak dicentang untuk kolom yang tidak dipilih ([#5503](https://github.com/nocobase/nocobase/pull/5503)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki masalah di mana operator string "mengandung" dan "tidak mengandung" tidak menangani nilai `null` dengan benar ([#5509](https://github.com/nocobase/nocobase/pull/5509)) oleh @2013xile

- **[client]** Memperbaiki aturan tautan untuk mengevaluasi variabel parameter URL dengan benar ([#5504](https://github.com/nocobase/nocobase/pull/5504)) oleh @katherinehhh

- **[Block: Map]** Memperbaiki masalah di mana beberapa peta ditampilkan secara tidak benar ketika terdapat banyak peta karena beberapa panggilan ke metode `load` dari AMap ([#5490](https://github.com/nocobase/nocobase/pull/5490)) oleh @Cyx649312038
