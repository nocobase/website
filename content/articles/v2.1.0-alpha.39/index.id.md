---
title: "NocoBase v2.1.0-alpha.39: Menambahkan dukungan client-v2 untuk plugin Kanban"
description: "Catatan Rilis v2.1.0-alpha.39"
---

### 🎉 Fitur Baru

- **[Blok: Kanban]** Menambahkan dukungan client-v2 untuk plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) oleh @jiannx

### 🚀 Peningkatan

- **[client]** Berbagi evaluasi kondisi antara aplikasi v1 dan v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) oleh @zhangzhonghe

- **[Lokalisasi]** Peningkatan tugas terjemahan lokalisasi Lina dengan cakupan terjemahan, pengaturan bahasa referensi, dan pengeditan cepat ([#9521](https://github.com/nocobase/nocobase/pull/9521)) oleh @2013xile

- **[Karyawan AI]** Peringatan saat nama tabel duplikat ketika menyimpan ke basis data vektor ([#9497](https://github.com/nocobase/nocobase/pull/9497)) oleh @cgyrock

- **[Manajer notifikasi]** Mengubah strategi antrean untuk mengoptimalkan kinerja pengiriman ([#9407](https://github.com/nocobase/nocobase/pull/9407)) oleh @mytharcher

- **[Alur Kerja: Acara tindakan kustom]** Memigrasikan plugin block-workbench dan workflow-custom-action-trigger ke client v2, termasuk model tindakan dan alur pemindai QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) oleh @jiannx

- **[Otentikasi]** Menerapkan halaman pengaturan Authenticators di client-v2 dan mengirimkan tabel client-v2 yang dapat digunakan kembali, input variabel, dan primitif formulir. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) oleh @Molunerfinn

- **[AI: Basis Pengetahuan]** Peringatan saat nama tabel duplikat ketika menyimpan ke basis data vektor oleh @cgyrock

- **[Auth: SAML 2.0]** Menambahkan entri client-v2 untuk plugin otentikasi CAS dan SAML sehingga berfungsi dengan halaman masuk v2 dan pengaturan Authenticators. oleh @Molunerfinn

- **[Alur Kerja: Persetujuan]** Meningkatkan persetujuan terkait dengan kartu linimasa oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[tidak terdefinisi]** menyelaraskan jalur konfigurasi nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) oleh @chenos

- **[cli-v1]** Memperbaiki startup pengembangan create-nocobase-app dengan menggunakan kembali shell aplikasi yang sudah dipaketkan sambil mengaktifkan pengembangan plugin lokal. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) oleh @Molunerfinn

- **[client]**
  - Memperbaiki masalah di mana formulir filter tidak dapat menggunakan variabel formulir saat ini ([#9474](https://github.com/nocobase/nocobase/pull/9474)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana lencana menu masih menampilkan titik ketika nilainya 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) oleh @zhangzhonghe

- **[client-v2]**
  - Komponen Tabel v2 bersama sekarang menampilkan pemilih ukuran halaman secara default, sesuai dengan perilaku v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) oleh @Molunerfinn

  - Memperbaiki rute v2 plugin Kanban yang gagal dimuat karena dependensi dnd-kit tidak disediakan oleh klien. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) oleh @jiannx

- **[Kalender]**
  - Memperbaiki gaya kursor untuk item acara di overlay lebih-banyak-acara kalender ([#9519](https://github.com/nocobase/nocobase/pull/9519)) oleh @jiannx

  - Memperbaiki masalah di mana item lebih banyak kalender tidak dapat ditampilkan sepenuhnya ([#9492](https://github.com/nocobase/nocobase/pull/9492)) oleh @zhangzhonghe

- **[Pengaturan lisensi]** menyelesaikan dependensi bundled yang ditautkan secara simbolis ([#9518](https://github.com/nocobase/nocobase/pull/9518)) oleh @chenos

- **[Karyawan AI]**
  - Memperbaiki masalah di mana izin peran operator tidak berpengaruh di simpul karyawan AI ([#9513](https://github.com/nocobase/nocobase/pull/9513)) oleh @cgyrock

  - Memperbaiki kesalahan pembacaan file OSS karyawan AI ([#9493](https://github.com/nocobase/nocobase/pull/9493)) oleh @cgyrock

- **[Otentikasi]** Mencegah server mogok ketika token auth WebSocket merujuk pada authenticator yang plugin tipe auth-nya dibongkar atau hilang. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) oleh @Molunerfinn

- **[Dokumentasi API]** Memperbaiki dokumentasi API koleksi sehingga parameter kueri tidak lagi saling mengganggu ([#9442](https://github.com/nocobase/nocobase/pull/9442)) oleh @jiannx

- **[Sumber data: Utama]** Memperbaiki masalah di mana opsi bidang ditulis ke dalam skema setelah menyinkronkan bidang ([#9505](https://github.com/nocobase/nocobase/pull/9505)) oleh @2013xile

- **[Auth: SAML 2.0]** Memperbaiki interceptor pengalihan otomatis SAML yang membuat shell aplikasi berkedip dan membuka laci dua kali pada setiap navigasi. oleh @Molunerfinn
