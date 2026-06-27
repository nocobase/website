---
title: "NocoBase v2.0.57: Memperbaiki output obfuscation plugin server untuk menghindari global browser di bundle runtime Node.js"
description: "Catatan Rilis v2.0.57"
---

### 🐛 Perbaikan Bug

- **[build]** Memperbaiki output obfuscation plugin server untuk menghindari global browser di bundle runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) oleh @Molunerfinn

- **[Workflow: Node manual]** Memperbaiki penyimpanan sementara untuk tugas workflow manual yang tidak mempertahankan nilai formulir yang dikirimkan. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) oleh @mytharcher

- **[Karyawan AI]** Memperbaiki deskripsi yang salah dari nama alat dalam prompt konteks kerja ([#9567](https://github.com/nocobase/nocobase/pull/9567)) oleh @cgyrock

- **[Manajer file]** Merender pratinjau PDF dengan aman menggunakan PDF.js, bukan rendering PDF mentah berbasis iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) oleh @mytharcher

- **[Auth: OIDC]** Memperbaiki kebocoran token saat panggilan balik login SSO menerima URL redirect eksternal oleh @2013xile

- **[Workflow: Persetujuan]**
  - Memperbaiki masalah di mana API `jobs:resume` tidak didukung oleh node persetujuan oleh @mytharcher

  - Memperbaiki penarikan persetujuan untuk memperbarui data bisnis yang dikirimkan sambil menghormati izin pembaruan koleksi sumber. oleh @mytharcher

  - Memperbaiki todo persetujuan yang basi ketika workflow persetujuan dihentikan karena kegagalan node non-persetujuan. oleh @mytharcher
