---
title: "NocoBase v2.1.0-beta.25: Menambahkan beberapa API untuk NocoBase cli"
description: "Catatan Rilis v2.1.0-beta.25"
---

### 🎉 Fitur Baru

- **[cli]** Menambahkan perintah rilis di API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) oleh @Andrew1989Y

- **[tidak ditentukan]** Menambahkan dokumentasi Bahasa Indonesia dan Vietnam. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) oleh @Molunerfinn

- **[Karyawan AI]** Penyedia LLM kini mendukung platform Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) oleh @cgyrock

- **[Manajer migrasi]** Menambahkan beberapa API untuk nocobase cli oleh @Andrew1989Y

- **[Manajer cadangan]** Menambahkan beberapa API untuk nocobase cli oleh @Andrew1989Y

### 🚀 Peningkatan

- **[tidak ditentukan]**
  - - ([#9349](https://github.com/nocobase/nocobase/pull/9349)) oleh @Molunerfinn

  - Menyelaraskan dokumentasi Spanyol, Portugis, Rusia, dan Jerman dengan sumber bahasa Inggris. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) oleh @Molunerfinn

  - Menyelaraskan dokumentasi Prancis dengan sumber bahasa Mandarin. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) oleh @Molunerfinn

- **[IdP: OAuth]** Sesi OAuth kini menggunakan pengaturan kedaluwarsa yang sama dengan kebijakan token sistem ([#9345](https://github.com/nocobase/nocobase/pull/9345)) oleh @2013xile

- **[Blok: Kanban]**
  - Mengurangi lebar kolom kanban default. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) oleh @jiannx

  - Meningkatkan pengaturan pembuatan blok Kalender dan Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) oleh @jiannx

- **[Karyawan AI]** Penyesuaian kategori karyawan AI ([#9274](https://github.com/nocobase/nocobase/pull/9274)) oleh @cgyrock

- **[Workflow: Persetujuan]** Menandai mode tampilan asosiasi yang dimuat dari DB sebagai lama oleh @mytharcher

### 🐛 Perbaikan Bug

- **[tidak ditentukan]**
  - Memperbaiki workflow dependensi-dan-build sehingga kegagalan checkout plugin pro mandiri memutus CI alih-alih melewatkan cakupan build secara diam-diam. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) oleh @Molunerfinn

  - Memperbaiki file terjemahan yang membengkak dan menyelaraskan struktur dokumentasi lintas bahasa. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) oleh @Molunerfinn

- **[cli]** Memperbaiki opsi boolean CLI sehingga dapat dinonaktifkan dengan flag yang dinegasikan ([#9337](https://github.com/nocobase/nocobase/pull/9337)) oleh @2013xile

- **[client-v2]**
  - Memperbaiki pemuatan plugin jarak jauh sehingga URL plugin yang sudah diakhiri dengan `.js` tidak diselesaikan menjadi jalur `.js.js` duplikat. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) oleh @Molunerfinn

  - Memperbaiki masalah di mana `RemoteSelect` tidak merender dalam konfigurasi workflow ikatan ([#9314](https://github.com/nocobase/nocobase/pull/9314)) oleh @mytharcher

- **[ai]** Memperbaiki pengaturan bidang kategori yang hilang selama pendaftaran karyawan AI ([#9300](https://github.com/nocobase/nocobase/pull/9300)) oleh @cgyrock

- **[flow-engine]** Memperbaiki masalah di mana bidang yang disembunyikan sistem dapat dipilih dalam variabel terkait formulir. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) oleh @gchust

- **[client]**
  - Memperbaiki masalah di mana sel bidang JS di blok tabel v2 dapat tampak kosong setelah memfilter atau menyegarkan data tabel. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) oleh @jiannx

  - Mempertahankan nilai null untuk dependensi variabel Cakupan data kosong di formulir v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) oleh @jiannx

  - Memperbaiki masalah di mana bidang formulir filter menghilang setelah membuka kembali pemilih rekaman popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) oleh @zhangzhonghe

  - menjalankan ulang rendering kolom JS ketika data baris berubah ([#9282](https://github.com/nocobase/nocobase/pull/9282)) oleh @jiannx

- **[database]** Memperbaiki masalah di mana filter datetime sumber data eksternal SQL Server bisa gagal ([#9272](https://github.com/nocobase/nocobase/pull/9272)) oleh @2013xile

- **[Karyawan AI]**
  - Memperbaiki masalah kesalahan sesekali ketika karyawan AI menggunakan model DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) oleh @cgyrock

  - Memperbaiki masalah di mana node karyawan AI workflow menghapus keterampilan setelah mengganti karyawan AI ([#9342](https://github.com/nocobase/nocobase/pull/9342)) oleh @cgyrock

  - Memperbaiki masalah di mana daftar karyawan AI tombol aksi menampilkan karyawan pengembang ([#9320](https://github.com/nocobase/nocobase/pull/9320)) oleh @cgyrock

- **[Sumber data: Utama]** Mencegah crash ketika bidang tidak terdefinisi selama pemuatan koleksi ([#9174](https://github.com/nocobase/nocobase/pull/9174)) oleh @saraTabbane

- **[Template UI]** Memperbaiki masalah di mana daftar template popup gagal memuat template yang tersedia dengan benar. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) oleh @gchust

- **[Manajer file]** Meningkatkan penanganan kesalahan unduhan file pratinjau ([#9103](https://github.com/nocobase/nocobase/pull/9103)) oleh @gaston98765

- **[Blok: Pohon]** Memperbaiki tampilan abnormal node blok filter ([#9260](https://github.com/nocobase/nocobase/pull/9260)) oleh @jiannx

- **[Blok: Gantt]** Menambahkan pengaturan blok Gantt untuk mengaktifkan seret guna menjadwalkan ulang. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) oleh @jiannx

- **[Blok: Kanban]** Memperbaiki tampilan berulang dari lapisan mengambang konfigurasi bidang ([#9271](https://github.com/nocobase/nocobase/pull/9271)) oleh @jiannx

- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana indeks baris yang gagal dalam mengimpor rekaman tidak benar ([#9277](https://github.com/nocobase/nocobase/pull/9277)) oleh @mytharcher

- **[Aksi: Ekspor rekaman Pro]** Memperbaiki masalah di mana mode otomatis tidak berfungsi oleh @mytharcher

- **[Manajer migrasi]** Memperbaiki `migration:create` yang mengembalikan `taskId` dari rekaman tugas asinkron. oleh @Andrew1989Y

- **[Workflow: Persetujuan]**
  - Memperbaiki masalah di mana filter dan parameter kueri lainnya kini berfungsi di API untuk mendaftar workflow persetujuan yang tersedia oleh @mytharcher

  - Memperbaiki masalah di mana file di aplikasi asli tidak dimuat ulang oleh @mytharcher

  - Memperbaiki kesalahan tipe oleh @mytharcher

  - Mendukung penguraian beberapa variabel klien dalam tindakan persetujuan oleh @mytharcher

  - Memperbaiki waktu eksekusi persetujuan sehingga `latestExecutionId` disinkronkan setelah komit persetujuan oleh @mytharcher
