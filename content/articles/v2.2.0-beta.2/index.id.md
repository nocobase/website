---
title: "NocoBase v2.2.0-beta.2: Menambahkan formulir konfigurasi penyimpanan vektor eksternal untuk basis pengetahuan AI"
description: "Catatan Rilis v2.2.0-beta.2"
---

### 🎉 Fitur Baru

- **[AI employees]** Menambahkan formulir konfigurasi penyimpanan vektor eksternal untuk basis pengetahuan AI. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) oleh @cgyrock
- **[AI: Basis pengetahuan]** Menambahkan formulir konfigurasi penyimpanan vektor eksternal untuk basis pengetahuan AI. oleh @cgyrock
- **[Manajer Email]** Memigrasikan klien Manajer Email ke v2. oleh @jiannx

### 🚀 Peningkatan

- **[cli]**

  - Mengoptimalkan pemeriksaan kompatibilitas untuk berbagai format nomor versi. ([#9763](https://github.com/nocobase/nocobase/pull/9763)) oleh @chenos
  - Menambahkan dukungan untuk memperbarui skill ke versi tertentu. ([#9760](https://github.com/nocobase/nocobase/pull/9760)) oleh @chenos
  - Memperbaiki susunan kata pada petunjuk pengaturan inisialisasi. ([#9750](https://github.com/nocobase/nocobase/pull/9750)) oleh @chenos
- **[undefined]**

  - Menambahkan skenario percakapan kontrol versi ke halaman ringkasan AI Builder. ([#9748](https://github.com/nocobase/nocobase/pull/9748)) oleh @Molunerfinn
    Referensi: [Panduan Memulai Cepat AI Builder](https://docs.nocobase.com/en/ai-builder)
  - Meningkatkan dokumentasi kontrol versi dengan catatan tentang penyimpanan versi otomatis di AI Builder. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) oleh @cgyrock
    Referensi: [Kontrol versi](docs/docs/en/ops-management/version-control/index.md)
- **[Workflow]** Meningkatkan pengalaman pengeditan metadata workflow dengan mendukung pengeditan deskripsi di popup detail dan secara otomatis mengisi metadata workflow sumber saat menduplikasi workflow. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) oleh @mytharcher
- **[Aksi: Impor catatan]** Meningkatkan dialog detail kesalahan impor dan tugas asinkron sehingga pesan kesalahan yang panjang dapat dilihat sepenuhnya tanpa merusak tata letak. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) oleh @katherinehhh
- **[Alat uji terjemahan]** Menambahkan halaman pengaturan klien-v2 untuk alat uji terjemahan. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) oleh @jiannx
- **[Aksi: Impor catatan Pro]** Meningkatkan dialog impor sehingga pesan kesalahan yang panjang dapat dilihat sepenuhnya, dan mode pemrosesan dapat dipilih langsung dari menu pengaturan v2. oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana bidang dalam subform horizontal terlalu sempit untuk menampilkan data. ([#9755](https://github.com/nocobase/nocobase/pull/9755)) oleh @zhangzhonghe
- **[klien-v2]** Memperbaiki masalah di mana halaman v2 dapat terus memuat setelah masuk. ([#9738](https://github.com/nocobase/nocobase/pull/9738)) oleh @zhangzhonghe
- **[cli]** Menambahkan deteksi versi Node.js untuk lingkungan runtime nb. ([#9749](https://github.com/nocobase/nocobase/pull/9749)) oleh @chenos
- **[Aksi: Impor catatan]** Mengubah file impor yang diunggah menjadi penyimpanan disk untuk mengurangi tekanan memori selama impor data besar. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) oleh @mytharcher
- **[Manajer tugas asinkron]** Memperbaiki ID permintaan yang salah di log pekerja tugas asinkron. ([#9686](https://github.com/nocobase/nocobase/pull/9686)) oleh @2013xile
- **[Workflow]**

  - Memperbaiki penanganan waktu habis workflow sehingga eksekusi yang dibatalkan dan tugas tertundanya dapat diperbarui secara atomik. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) oleh @mytharcher
  - Memperbaiki masalah di mana bidang terakhir diperbarui oleh workflow tidak diperbarui setelah perubahan node workflow. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) oleh @mytharcher
- **[Manajer sumber data]**

  - Memperbaiki drawer edit bidang kosong yang disebabkan oleh render ulang berulang pada halaman Konfigurasi bidang sumber data eksternal v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) oleh @katherinehhh
  - Memperbaiki masalah di mana menghapus kategori koleksi saat ini di manajer sumber data v1 dapat menyebabkan tab Semua koleksi menjadi kosong. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) oleh @katherinehhh
- **[Manajer cadangan]** Memperbaiki masalah keamanan di mana nama skema PostgreSQL yang tidak aman dapat diterima selama pemulihan cadangan. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) oleh @2013xile
- **[Workflow: Node SQL]** Memperbaiki masalah di mana migrasi variabel template lama workflow SQL dilewati untuk beberapa pengguna versi beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) oleh @mytharcher
- **[Blok: Kanban]** Memperbaiki dukungan URL untuk Kalender dan popup lainnya. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) oleh @jiannx
- **[AI employees]**

  - Memperbaiki masalah di mana lampiran yang ditempelkan ke dialog AI employee tidak dapat dihapus. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) oleh @cgyrock
  - Memperbaiki hilangnya konfigurasi pesan di node LLM workflow. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) oleh @cgyrock
- **[Manajer file]** Memperbaiki teks font China/CID yang hilang di beberapa pratinjau PDF setelah beralih ke pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) oleh @mytharcher
- **[Dokumentasi API]** Memperbaiki kegagalan build file deklarasi plugin dokumentasi API. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) oleh @katherinehhh
- **[Aksi: Impor catatan Pro]** Menghindari penguraian file besar di node permintaan sebelum impor Pro membuat tugas asinkron. oleh @mytharcher
- **[Kontrol versi]** Menyesuaikan posisi entri pintasan atas kontrol versi sehingga muncul di samping editor UI di tata letak admin lama dan v2. oleh @cgyrock
- **[Workflow: Persetujuan]** Memperbaiki masalah di mana data terkait tidak ditampilkan di formulir persetujuan v2. oleh @zhangzhonghe
