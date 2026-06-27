---
title: "NocoBase v1.6.16: Perbaikan Bug"
description: "Catatan Rilis v1.6.16"
---

### 🐛 Perbaikan Bug

- **[klien]**
  - Properti x-disabled tidak berfungsi pada kolom formulir ([#6610](https://github.com/nocobase/nocobase/pull/6610)) oleh @katherinehhh

  - Masalah tampilan label kolom untuk mencegah pemotongan oleh titik dua ([#6599](https://github.com/nocobase/nocobase/pull/6599)) oleh @katherinehhh

- **[database]** Saat menghapus rekaman satu-ke-banyak, baik `filter` dan `filterByTk` diteruskan dan `filter` menyertakan kolom asosiasi, maka `filterByTk` diabaikan ([#6606](https://github.com/nocobase/nocobase/pull/6606)) oleh @2013xile
