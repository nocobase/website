---
title: "NocoBase v2.0.0-beta.22: Mendukung konfigurasi judul tab browser untuk halaman, tab halaman, popup, dan tab popup"
description: "Catatan Rilis v2.0.0-beta.22"
---

### 🎉 Fitur Baru

- **[client]** Mendukung konfigurasi judul tab browser untuk halaman, tab halaman, popup, dan tab popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) oleh @zhangzhonghe

- **[Workflow: Approval]** Menambahkan kontrol ACL untuk API persetujuan oleh @mytharcher

### 🚀 Peningkatan

- **[client]** Menggunakan model bidang independen untuk bidang asosiasi di formulir filter ([#8511](https://github.com/nocobase/nocobase/pull/8511)) oleh @zhangzhonghe

- **[Workflow: CC]** Memperbarui plugin CC alur kerja untuk mendukung arsitektur FlowModel dengan kompatibilitas v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[flow-engine]**
  - Memperbaiki masalah di mana objek Blob tidak dapat dibuat di blok JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) oleh @gchust

  - Memperbaiki konteks eksekusi yang salah untuk "ctx.sql" di Model JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) oleh @gchust

- **[Komponen bidang: mask]** Memperbaiki masalah di mana popup pengaturan bidang mask tidak dapat memuat semua peran pengguna dengan benar. oleh @gchust

- **[Workflow: Approval]** Memperbaiki id yang salah untuk memuat catatan detail oleh @mytharcher
