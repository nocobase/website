---
title: "NocoBase v2.0.41: atribut pemetaan mendukung bidang kustom"
description: "Catatan Rilis v2.0.41"
---

### 🎉 Fitur Baru

- **[Auth: OIDC]** Atribut pemetaan mendukung bidang kustom oleh @chenzhizdt

- **[DingTalk]** DingTalk: notifikasi, login otomatis di dalam DingTalk, dan sinkronisasi pengguna. oleh @chenzhizdt

### 🚀 Peningkatan

- **[ai]** Karyawan AI dan basis pengetahuan kini mendukung jenis file tambahan untuk diunggah (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) oleh @cgyrock

- **[undefined]** Menambahkan terjemahan bahasa Arab untuk bagian panduan dan navigasi ([#9141](https://github.com/nocobase/nocobase/pull/9141)) oleh @saraTabbane

### 🐛 Perbaikan Bug

- **[data-source-manager]** Perbaikan untuk bidang persentase yang diatur ulang ke numerik saat menyinkronkan ulang sumber data eksternal ([#9178](https://github.com/nocobase/nocobase/pull/9178)) oleh @jiannx

- **[client]**
  - Memperbaiki masalah di mana nilai default tidak akan berlaku setelah membuat rekaman. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) oleh @gchust

  - Memperbaiki masalah di mana tombol Tambah tab terlalu dekat dengan tepi kanan ([#9177](https://github.com/nocobase/nocobase/pull/9177)) oleh @zhangzhonghe

- **[Departemen]** Memperbaiki masalah di mana sinkronisasi departemen berulang tidak dapat memperbarui urutan pengurutan departemen ([#9173](https://github.com/nocobase/nocobase/pull/9173)) oleh @2013xile

- **[Sumber data: Utama]** Memperbaiki sinkronisasi bidang dari basis data untuk tampilan terhubung ketika nama koleksi berbeda dari nama tampilan basis data ([#9155](https://github.com/nocobase/nocobase/pull/9155)) oleh @2013xile

- **[Workflow: JavaScript]** Memperbaiki masalah keamanan eksekusi skrip dalam mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) oleh @mytharcher

- **[AI: Basis pengetahuan]** Memperbaiki masalah di mana basis data vektor tidak disinkronkan saat menghapus dokumen basis pengetahuan. oleh @cgyrock

- **[WeCom]** Memperbaiki urutan departemen yang hilang saat menyinkronkan departemen dari WeCom oleh @2013xile
