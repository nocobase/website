---
title: "NocoBase v1.4.0-alpha.20241016035453: Tambahkan Bidang Lampiran (URL)"
description: "Catatan Rilis v1.4.0-alpha.20241016035453"
---

### 🎉 Fitur Baru

- **[sdk]** Memungkinkan penyimpanan informasi klien ke sessionStorage dengan mengatur variabel lingkungan `API_CLIENT_STORAGE_TYPE` ([#5424](https://github.com/nocobase/nocobase/pull/5424)) oleh @2013xile
- **[Field koleksi: Lampiran (URL)]** Menambahkan Field Lampiran (URL) oleh @katherinehhh

### 🚀 Peningkatan

- **[client]**

  - mengoptimalkan debugging jarak jauh ([#5394](https://github.com/nocobase/nocobase/pull/5394)) oleh @chenos
  - optimasi gaya untuk memusatkan ikon saat tombol aksi hanya menggunakan ikon ([#5413](https://github.com/nocobase/nocobase/pull/5413)) oleh @katherinehhh
  - memperbarui rekaman agar popup pesan otomatis tertutup ([#5408](https://github.com/nocobase/nocobase/pull/5408)) oleh @katherinehhh
- **[Workflow: Node permintaan HTTP]** Dukungan untuk SSE (Server-Sent Events) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) oleh @chenos

### 🐛 Perbaikan Bug

- **[Formulir publik]** Memperbaiki masalah saat mengklik pengaturan pada formulir publik ([#5392](https://github.com/nocobase/nocobase/pull/5392)) oleh @katherinehhh
- **[client]**

  - Memperbaiki masalah tidak menampilkan nilai di kotak input nilai default ([#5400](https://github.com/nocobase/nocobase/pull/5400)) oleh @zhangzhonghe
  - Memperbaiki kesalahan tidak menemukan field asosiasi saat aturan tautan diatur untuk sub-tabel ([#5402](https://github.com/nocobase/nocobase/pull/5402)) oleh @zhangzhonghe
  - memperbaiki pratinjau thumbnail yang salah saat tipe file tidak didukung secara default ([#5401](https://github.com/nocobase/nocobase/pull/5401)) oleh @mytharcher
- **[Lokalisasi]** Memperbaiki masalah di mana terjemahan dalam plugin lokalisasi tidak berlaku setelah dipublikasikan ([#5416](https://github.com/nocobase/nocobase/pull/5416)) oleh @2013xile
