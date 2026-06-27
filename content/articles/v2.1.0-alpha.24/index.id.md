---
title: "NocoBase v2.1.0-alpha.24: Menyesuaikan interaksi konfigurasi keterampilan/alat untuk instruksi karyawan AI"
description: "Catatan Rilis v2.1.0-alpha.24"
---

### 🚀 Peningkatan

- **[tidak ditentukan]** Memperbaiki panduan instalasi AI Agent untuk mencegah Agent melewati wizard `--ui` dan mendeteksi manajer versi Node secara otomatis. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) oleh @Molunerfinn

- **[Karyawan AI]**
  - Menyesuaikan interaksi konfigurasi keterampilan/alat untuk instruksi karyawan AI ([#9232](https://github.com/nocobase/nocobase/pull/9232)) oleh @cgyrock

  - Menghapus model yang direkomendasikan dalam konfigurasi layanan LLM ([#9228](https://github.com/nocobase/nocobase/pull/9228)) oleh @cgyrock

- **[Workflow: JavaScript]** Memutakhirkan image Docker, workflow CI, dan dependensi sandbox JavaScript workflow untuk kompatibilitas Node.js 22. ([#9245](https://github.com/nocobase/nocobase/pull/9245)) oleh @Molunerfinn

### 🐛 Perbaikan Bug

- **[tidak ditentukan]** Memperbaiki pemilih bahasa yang menghasilkan URL tidak benar (misalnya, `/cn/es/` bukan `/es/`) di situs dokumentasi. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) oleh @Molunerfinn

- **[Karyawan AI]**
  - Memperbaiki kesalahan pada API untuk mengambil daftar karyawan AI ([#9241](https://github.com/nocobase/nocobase/pull/9241)) oleh @cgyrock

  - Menyempurnakan perilaku delegasi tugas Atlas dan memperbarui Viz untuk menggunakan workflow laporan bisnis untuk permintaan laporan ([#9229](https://github.com/nocobase/nocobase/pull/9229)) oleh @2013xile
