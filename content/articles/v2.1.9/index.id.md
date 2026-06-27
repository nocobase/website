---
title: "NocoBase v2.1.9: Tambahkan opsi nilai override untuk pengaturan nilai bidang"
description: "Catatan Rilis v2.1.9"
---

### 🚀 Peningkatan

- **[client-v2]** Menambahkan opsi nilai timpa untuk pengaturan nilai kolom. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) oleh @gchust

### 🐛 Perbaikan Bug

- **[client-v2]**
  - Memperbaiki tombol pemicu alur kerja tindakan kustom yang mengirim JSON konteks kustom di bawah properti `values` tambahan atau sebagai string yang diserialisasi. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) oleh @mytharcher

  - Memperbaiki masalah di mana mengonfigurasi nilai kolom asosiasi sebagai nilai tetap atau nilai default tidak akan berlaku. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) oleh @gchust

- **[auth]** Data kata sandi terenkripsi tidak lagi disertakan dalam respons status masuk ([#9836](https://github.com/nocobase/nocobase/pull/9836)) oleh @2013xile

- **[app]** Abaikan currentScript yang tidak terkait saat menyimpulkan jalur publik plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) oleh @chenos

- **[Template UI]** Memperbaiki konteks default yang salah untuk ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) oleh @gchust
