---
title: "NocoBase v2.1.0-beta.37: dukungan autentikasi dasar"
description: "Catatan Rilis v2.1.0-beta.37"
---

### 🎉 Fitur Baru

- **[client-v2]** Menambahkan menu Keamanan dan halaman pengaturan Kebijakan Token ke admin v2; pusat pengguna sekarang mendukung Ubah kata sandi. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) oleh @Molunerfinn

- **[cli]** mendukung autentikasi dasar ([#9558](https://github.com/nocobase/nocobase/pull/9558)) oleh @chenos

- **[Kebijakan kata sandi]** Memigrasikan plugin-password-policy ke shell admin client-v2 dengan halaman pengaturan Kebijakan kata sandi / Pengguna terkunci dan penerapan aturan sisi klien pada formulir ubah kata sandi di pusat pengguna. oleh @Molunerfinn

### 🚀 Peningkatan

- **[Visualisasi data]** Menambahkan dukungan client v2 untuk blok grafik. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) oleh @jiannx

- **[Workflow]** Memfaktorkan ulang pemeriksaan ketersediaan node async pada workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[build]**
  - Aset teks dalam build server sekarang disalin sebagai file, bukan diubah menjadi modul JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) oleh @Molunerfinn

  - Memperbaiki output obfuscation plugin server untuk menghindari global browser di bundle runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) oleh @Molunerfinn

- **[client-v2]** Memperbaiki metadata bahasa browser sehingga halaman aplikasi mengikuti bahasa aplikasi yang dipilih, bukan ditandai sebagai bahasa Inggris. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) oleh @Molunerfinn

- **[Manajer file]** Merender pratinjau PDF dengan aman menggunakan PDF.js, bukan rendering PDF mentah berbasis iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) oleh @mytharcher

- **[Karyawan AI]** Memperbaiki deskripsi yang salah dari nama alat dalam prompt konteks kerja ([#9567](https://github.com/nocobase/nocobase/pull/9567)) oleh @cgyrock

- **[Workflow: Node manual]** Memperbaiki penyimpanan sementara untuk tugas workflow manual yang tidak mempertahankan nilai formulir yang dikirimkan. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) oleh @mytharcher

- **[Auth: OIDC]** Memperbaiki kebocoran token saat callback login SSO menerima URL redirect eksternal oleh @2013xile

- **[Workflow: Persetujuan]**
  - Memperbaiki penarikan persetujuan untuk memperbarui data bisnis yang dikirimkan sambil tetap menghormati izin pembaruan koleksi sumber. oleh @mytharcher

  - Memperbaiki masalah di mana API `jobs:resume` tidak didukung oleh node persetujuan oleh @mytharcher

  - Memperbaiki indeks catatan persetujuan duplikat ketika delegasi terjadi secara bersamaan pada pekerjaan persetujuan yang sama. oleh @mytharcher

  - Memperbaiki todo persetujuan yang basi ketika workflow persetujuan dihentikan oleh kegagalan node non-persetujuan. oleh @mytharcher
