---
title: "NocoBase v2.1.0-beta.36: Editor tema kini tersedia di antarmuka v2"
description: "Catatan Rilis v2.1.0-beta.36"
---

### 🎉 Fitur Baru

- **[cli]** menambahkan perintah backup create dan restore ([#9541](https://github.com/nocobase/nocobase/pull/9541)) oleh @chenos
- **[Backup manager]** membuka plugin manajer cadangan sumber terbuka ([#9550](https://github.com/nocobase/nocobase/pull/9550)) oleh @chenos
- **[Theme editor]** Editor tema kini tersedia di antarmuka v2 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) oleh @zhangzhonghe
- **[Two-factor authentication (2FA)]** TOTP dan autentikasi dua faktor kini dapat diikat, diverifikasi, dan dikonfigurasi dari klien v2. oleh @Molunerfinn

### 🚀 Peningkatan

- **[client]** mengoptimalkan pengaturan tampilan tombol aksi ([#9510](https://github.com/nocobase/nocobase/pull/9510)) oleh @katherinehhh
- **[flow-engine]** Menu konfigurasi bidang V2 kini mendukung pencarian bidang ([#9489](https://github.com/nocobase/nocobase/pull/9489)) oleh @zhangzhonghe
- **[cli]** meningkatkan alur auth env ([#9546](https://github.com/nocobase/nocobase/pull/9546)) oleh @chenos
- **[undefined]**

  - Menambahkan tinjauan keamanan dependensi untuk pull request ([#9523](https://github.com/nocobase/nocobase/pull/9523)) oleh @zhangzhonghe
- **[Verification]** Menambahkan klien v2 ke plugin Verifikasi (halaman pengaturan admin, entri pusat pengguna, formulir OTP SMS). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) oleh @Molunerfinn
- **[Authentication]** Pengaturan merek kustom kini berfungsi dengan benar di klien v2 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) oleh @zhangzhonghe
- **[Block: Map]** Menambahkan dukungan klien v2 untuk plugin peta. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) oleh @jiannx
- **[Custom brand]** Pengaturan merek kustom kini tersedia di klien v2 oleh @zhangzhonghe
- **[AI: Knowledge base]** Mengaktifkan modifikasi penyimpanan vektor untuk basis pengetahuan AI oleh @cgyrock
- **[Workflow: Approval]** Menambahkan flag `async` untuk instruksi persetujuan, guna menyesuaikan API pembuatan node baru di kanvas workflow oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - memperbaiki penghapusan nilai terpilih saat bidang asosiasi dependen berubah dalam tautan lingkup data ([#9551](https://github.com/nocobase/nocobase/pull/9551)) oleh @katherinehhh
  - Memperbaiki pemuatan mode dev untuk plugin penyimpanan bawaan yang bergantung pada ekspor bernama dari plugin sumber lokal. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) oleh @Molunerfinn
  - Memperbaiki status menu Bidang JS yang salah di subform. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) oleh @gchust
  - Memperbaiki masalah di mana blok v2 yang dipersempit menjadi lebar penuh setelah keluar dari mode edit ([#9529](https://github.com/nocobase/nocobase/pull/9529)) oleh @zhangzhonghe
- **[client-v2]** Memperbaiki pendaftaran dependensi dnd-kit yang tidak konsisten. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) oleh @jiannx
- **[flow-engine]** memperbaiki masalah pemilihan ganda untuk bidang sumber data eksternal di formulir v2 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) oleh @katherinehhh
- **[Block: iframe]** memperbaiki konten iframe yang tidak mengisi tinggi blok yang dikonfigurasi ([#9540](https://github.com/nocobase/nocobase/pull/9540)) oleh @katherinehhh
- **[AI employees]**

  - Memperbaiki error saat karyawan AI mengakses basis pengetahuan hanya-baca ([#9539](https://github.com/nocobase/nocobase/pull/9539)) oleh @cgyrock
  - Memperbaiki kartu panggilan alat AI yang tidak muncul segera saat peristiwa alat yang dialirkan terpecah ([#9534](https://github.com/nocobase/nocobase/pull/9534)) oleh @2013xile
  - Memperbaiki error saat karyawan AI mengakses basis pengetahuan hanya-baca ([#9538](https://github.com/nocobase/nocobase/pull/9538)) oleh @cgyrock
- **[Action: Export records]** meningkatkan kinerja konfigurasi bidang dengan banyak bidang asosiasi ([#9524](https://github.com/nocobase/nocobase/pull/9524)) oleh @katherinehhh
- **[Action: Batch update]** memperbaiki aksi pembaruan massal yang mereset status pemuatan setelah kegagalan pembaruan ([#9509](https://github.com/nocobase/nocobase/pull/9509)) oleh @katherinehhh
- **[Workflow]** Menambahkan status pemuatan untuk eksekusi workflow manual. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) oleh @mytharcher
- **[Localization]** Memperbaiki terjemahan referensi lokalisasi bawaan untuk tugas terjemahan AI ([#9531](https://github.com/nocobase/nocobase/pull/9531)) oleh @2013xile
- **[Migration manager]** Memperbaiki kegagalan pembuatan file migrasi saat menggunakan OceanBase oleh @2013xile
- **[File storage: S3(Pro)]** Memperbaiki penanganan endpoint S3 Pro sehingga unggahan server dan pratinjau URL tidak menduplikasi host bucket. oleh @mytharcher
