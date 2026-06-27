---
title: "NocoBase v2.1.0-alpha.30: Memperbaiki masalah kesalahan sesekali saat karyawan AI menggunakan model DeepSeek v4"
description: "Catatan Rilis v2.1.0-alpha.30"
---

### 🚀 Peningkatan

- **[undefined]** menambahkan notifikasi kegagalan Feishu untuk alur kerja rilis manual ([#9349](https://github.com/nocobase/nocobase/pull/9349)) oleh @Molunerfinn
- **[IdP: OAuth]** Sesi OAuth sekarang menggunakan pengaturan kedaluwarsa yang sama dengan kebijakan token sistem ([#9345](https://github.com/nocobase/nocobase/pull/9345)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[client-v2]** Memperbaiki pemuatan plugin jarak jauh sehingga URL plugin yang sudah diakhiri dengan `.js` tidak di-resolve menjadi jalur `.js.js` duplikat. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) oleh @Molunerfinn
- **[cli]** Memperbaiki opsi boolean CLI sehingga dapat dinonaktifkan dengan flag negasi ([#9337](https://github.com/nocobase/nocobase/pull/9337)) oleh @2013xile
- **[AI employees]**

  - Memperbaiki masalah kesalahan sesekali saat AI employee menggunakan model DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) oleh @cgyrock
  - Memperbaiki masalah di mana node AI employee pada alur kerja menghapus skill setelah mengganti AI employee ([#9342](https://github.com/nocobase/nocobase/pull/9342)) oleh @cgyrock
- **[Data source: Main]** Mencegah crash ketika fields bernilai undefined selama pemuatan koleksi ([#9174](https://github.com/nocobase/nocobase/pull/9174)) oleh @saraTabbane
- **[UI templates]** Memperbaiki masalah di mana daftar template popup gagal memuat template yang tersedia dengan benar. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) oleh @gchust
- **[Block: Kanban]** Memperbaiki blok terkait kanban yang menggunakan parameter resource runtime yang belum di-resolve dalam konteks popup atau halaman sekunder. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) oleh @jiannx
- **[Workflow: Approval]** Memperbaiki masalah di mana filter dan parameter kueri lainnya kini berfungsi di API untuk mendaftar alur kerja persetujuan yang tersedia oleh @mytharcher
