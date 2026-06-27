---
title: "NocoBase v2.1.0-beta.34: Menambahkan dukungan client-v2 untuk plugin Kanban"
description: "Catatan Rilis v2.1.0-beta.34"
---

### 🎉 Fitur Baru

- **[Blok: Kanban]** Menambahkan dukungan client-v2 untuk plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) oleh @jiannx

### 🚀 Peningkatan

- **[cli]** Meningkatkan pengalaman prompt CLI NocoBase dengan memigrasikan alur kerja pengaturan dan manajemen ke Inquirer, serta memperbaiki masalah terkait instalasi, skills, dan runtime Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) oleh @chenos

- **[AI employees]** Memberikan peringatan saat nama tabel duplikat ketika menyimpan ke basis data vektor ([#9497](https://github.com/nocobase/nocobase/pull/9497)) oleh @cgyrock

- **[Manajer notifikasi]** Mengubah strategi antrean untuk mengoptimalkan kinerja pengiriman ([#9407](https://github.com/nocobase/nocobase/pull/9407)) oleh @mytharcher

- **[Workflow: Event aksi kustom]** Memigrasikan plugin block-workbench dan workflow-custom-action-trigger ke client v2, termasuk model aksi dan alur pemindai QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) oleh @jiannx

- **[Autentikasi]** Menerapkan halaman pengaturan Authenticators di client-v2 dan menyertakan tabel client-v2 yang dapat digunakan kembali, input variabel, dan primitif formulir. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) oleh @Molunerfinn

- **[AI: Basis pengetahuan]** Memberikan peringatan saat nama tabel duplikat ketika menyimpan ke basis data vektor oleh @cgyrock

- **[Auth: SAML 2.0]** Menambahkan entri client-v2 untuk plugin autentikasi CAS dan SAML agar berfungsi dengan halaman masuk v2 dan pengaturan Authenticators. oleh @Molunerfinn

### 🐛 Perbaikan Bug

- **[client-v2]**
  - Memperbaiki rute v2 plugin Kanban yang gagal dimuat karena dependensi dnd-kit tidak disediakan oleh client. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) oleh @jiannx

  - Komponen Tabel v2 bersama sekarang menampilkan pemilih ukuran halaman secara default, sesuai dengan perilaku v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) oleh @Molunerfinn

- **[client]**
  - Memperbaiki masalah di mana nilai field JS dalam subform tidak diatur dengan benar saat pengiriman formulir. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) oleh @gchust

  - Memperbaiki masalah di mana variabel rekaman popup saat ini tidak dapat diselesaikan dalam alur event tombol aksi. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) oleh @gchust

- **[flow-engine]** Memperbaiki pesan error yang salah di konsol browser. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) oleh @gchust

- **[AI employees]**
  - Memperbaiki masalah di mana izin peran operator tidak berfungsi di node AI employee ([#9513](https://github.com/nocobase/nocobase/pull/9513)) oleh @cgyrock

  - Memperbaiki kesalahan pembacaan file OSS AI employee ([#9493](https://github.com/nocobase/nocobase/pull/9493)) oleh @cgyrock

- **[Dokumentasi API]** Memperbaiki dokumentasi API koleksi sehingga parameter kueri tidak lagi saling mengganggu ([#9442](https://github.com/nocobase/nocobase/pull/9442)) oleh @jiannx

- **[Sumber data: Utama]** Memperbaiki masalah di mana opsi field ditulis ke dalam skema setelah sinkronisasi field ([#9505](https://github.com/nocobase/nocobase/pull/9505)) oleh @2013xile

- **[Workflow: JavaScript]** Memperbaiki pemuatan paket runtime QuickJS JavaScript workflow di build produksi. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) oleh @mytharcher

- **[Klien WEB]** Membersihkan data blok setelah menghapus menu. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) oleh @gchust

- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana rekaman yang diimpor pada field seperti tanggal menampilkan tanggal yang salah ([#9463](https://github.com/nocobase/nocobase/pull/9463)) oleh @mytharcher

- **[Aksi: Impor rekaman Pro]** Memperbaiki penanganan zona waktu untuk impor xlsx pro oleh @mytharcher

- **[Auth: SAML 2.0]** Memperbaiki interceptor pengalihan otomatis SAML yang menyebabkan shell aplikasi berkedip dan membuka drawer ganda pada setiap navigasi. oleh @Molunerfinn

- **[Aksi: Ekspor rekaman Pro]** Memperbaiki masalah di mana error muncul saat mengekspor lampiran dari field url lampiran oleh @mytharcher
