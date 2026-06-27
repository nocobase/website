---
title: "NocoBase v2.0.0-alpha.69: dukungan env.ESM_CDN_BASE_URL"
description: "Catatan Rilis v2.0.0-alpha.69"
---

### 🎉 Fitur Baru

- **[client]** Mendukung konfigurasi mode pemuatan data ([#8551](https://github.com/nocobase/nocobase/pull/8551)) oleh @zhangzhonghe

- **[flow-engine]** Mendukung env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) oleh @chenos

- **[Auth: DingTalk]** Memungkinkan pengikatan pengguna dengan `unionId` oleh @2013xile

### 🚀 Peningkatan

- **[flow-engine]** Meningkatkan pelengkapan otomatis dan petunjuk kode di editor kode model JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) oleh @gchust

- **[client]**
  - Menyesuaikan pengaturan lebar kolom menjadi pilihan dropdown di sub-tabel yang dapat diedit sebaris ([#8561](https://github.com/nocobase/nocobase/pull/8561)) oleh @katherinehhh

  - Mendukung penonaktifan parameter appends default yang redundan untuk `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) oleh @2013xile

- **[acl]** acl menambahkan metode generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) oleh @jiannx

- **[Bidang Koleksi: Markdown(Vditor)]** Menambahkan opsi konfigurasi untuk mengatur mode edit default di pengaturan komponen. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) oleh @Cyx649312038

- **[Workflow]** Mengubah jalur rute halaman sub-workflow, untuk membuat semua halaman workflow berada di bawah prefiks `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) oleh @mytharcher

- **[AI: Basis Pengetahuan]** Mengoptimalkan output build untuk mengurangi ukuran paket plugin-ai-knowledge-base. oleh @cgyrock

- **[Multi-ruang]** Kontrol akses izin multi-ruang ke acl oleh @jiannx

- **[Auth: DingTalk]** Menggunakan `userid` sebagai kunci default untuk asosiasi pengguna, sambil mempertahankan kompatibilitas dengan autentikator yang ada yang bergantung pada ponsel oleh @2013xile

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki penyegaran halaman yang diperlukan untuk menambahkan catatan anak setelah mengaktifkan tabel pohon ([#8574](https://github.com/nocobase/nocobase/pull/8574)) oleh @katherinehhh

  - Memperbaiki masalah ruang kosong di tata letak Grid ([#8535](https://github.com/nocobase/nocobase/pull/8535)) oleh @zhangzhonghe

  - Memperbaiki lebar kolom yang tidak diperbarui di sub-tabel (edit sebaris); input teks multi-baris tidak menyesuaikan ukuran dengan lebar kolom ([#8573](https://github.com/nocobase/nocobase/pull/8573)) oleh @katherinehhh

  - Memperbaiki masalah di mana menggunakan "Buat Cepat" pemilih catatan asosiasi di formulir edit menimpa data formulir yang ada. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) oleh @gchust

  - perbaikan: sembunyikan "Aktifkan tabel pohon" dan "Perluas semua baris secara default" untuk koleksi non-pohon ([#8566](https://github.com/nocobase/nocobase/pull/8566)) oleh @katherinehhh

  - Memperbaiki masalah di mana menu "Form (Tambah baru)" salah ditampilkan di popup aksi "Buat baru". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) oleh @gchust

  - Memperbaiki bidang nanoid yang tidak menghasilkan ulang nilai default setelah pengiriman pembuatan ([#8538](https://github.com/nocobase/nocobase/pull/8538)) oleh @katherinehhh

  - Memperbaiki masalah di mana alur peristiwa gagal diterapkan saat menyegarkan blok target di seluruh popup. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) oleh @gchust

  - Memperbaiki masalah yang diketahui terkait pemfilteran ([#8514](https://github.com/nocobase/nocobase/pull/8514)) oleh @zhangzhonghe

  - Memperbaiki masalah yang menyebabkan blok data disegarkan berulang kali setelah mengirimkan formulir. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) oleh @gchust

  - Memperbaiki masalah di mana data halaman disegarkan secara tidak benar setelah membuka dan menutup popup untuk pertama kalinya. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) oleh @gchust

  - Memperbaiki masalah yang mencegah penggunaan variabel formulir untuk menetapkan nilai dalam aturan tautan untuk bidang subform multi-level ke-banyak. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) oleh @gchust

  - Memperbaiki tampilan yang salah saat mengatur nilai default untuk model bidang cascader ([#8537](https://github.com/nocobase/nocobase/pull/8537)) oleh @katherinehhh

  - Memperbaiki masalah di mana data tidak disegarkan setelah perubahan di seluruh popup multi-level dan di seluruh blok. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) oleh @gchust

- **[flow-engine]**
  - Memperbaiki aksi hapus kolom yang tidak berfungsi di edit sub-tabel popup saat createModelOptions dikonfigurasi ([#8576](https://github.com/nocobase/nocobase/pull/8576)) oleh @katherinehhh

  - Memperbaiki masalah di mana mengirimkan formulir setelah mengganti halaman tidak menyegarkan halaman. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) oleh @gchust

  - Memperbaiki masalah di mana beberapa pustaka pihak ketiga tidak dapat diimpor dengan benar di blok JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) oleh @gchust

  - Memperbaiki pemuatan yang salah dari beberapa pustaka ESM di runjs karena salah klasifikasi sebagai modul AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) oleh @gchust

  - Memperbaiki masalah FilterByTK saat filterTargetKey adalah array elemen tunggal di sumber data eksternal ([#8522](https://github.com/nocobase/nocobase/pull/8522)) oleh @katherinehhh

  - Memperbaiki aksi hapus kolom yang tidak berfungsi di edit sub-tabel popup saat createModelOptions dikonfigurasi ([#8560](https://github.com/nocobase/nocobase/pull/8560)) oleh @katherinehhh

- **[Bidang Koleksi: Lampiran(URL)]** Memperbaiki konfigurasi tampilan nama file bidang URL lampiran yang tidak berfungsi di formulir edit ([#8571](https://github.com/nocobase/nocobase/pull/8571)) oleh @katherinehhh

- **[Karyawan AI]**
  - Memperbaiki masalah di mana node LLM gagal mengirim pesan ([#8569](https://github.com/nocobase/nocobase/pull/8569)) oleh @2013xile

  - Memperbaiki masalah di mana sistem tidak dapat dimulai setelah build ([#8523](https://github.com/nocobase/nocobase/pull/8523)) oleh @cgyrock

  - Memperbaiki pengecualian yang terjadi saat alat dipanggil secara otomatis selama pemodelan data AI ([#8532](https://github.com/nocobase/nocobase/pull/8532)) oleh @cgyrock

- **[Template UI]** Memperbaiki kesalahan saat membuka kembali dan mengirimkan template popup yang disimpan untuk formulir "Tambah baru" bidang asosiasi. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) oleh @gchust

- **[Aksi: Impor catatan]** Memperbaiki kerentanan aksi impor ([#8544](https://github.com/nocobase/nocobase/pull/8544)) oleh @mytharcher

- **[Manajer Berkas]** Mengamankan jalur file untuk penyimpanan lokal, untuk menghindari jalur akses di luar root dokumen ([#8539](https://github.com/nocobase/nocobase/pull/8539)) oleh @mytharcher

- **[Workflow]** Menambahkan toleransi kesalahan untuk komponen pilih catatan koleksi, untuk menghindari kesalahan yang muncul saat koleksi dihapus ([#8528](https://github.com/nocobase/nocobase/pull/8528)) oleh @mytharcher

- **[Workflow: Aksi peristiwa kustom]** Memperbaiki masalah di mana parameter dan payload salah saat memicu workflow kustom oleh @mytharcher

- **[Multi-ruang]**
  - menghapus atribut read-pretty untuk bidang ruang oleh @jiannx

  - menambahkan skrip migrasi untuk menghapus x-ready-pretty di bidang ruang oleh @jiannx

- **[AI: Basis Pengetahuan]** Memperbaiki masalah di mana sistem tidak dapat dimulai setelah build oleh @cgyrock

- **[Aksi: Impor catatan Pro]** Memperbaiki angka hitungan dalam hasil impor dan terjemahan pesan oleh @mytharcher

- **[Workflow: Subflow]** Memperbaiki jalur rute tautan workflow oleh @mytharcher

- **[Cetak template]** Memperbaiki masalah tampilan daftar bidang di konfigurasi aksi cetak template oleh @katherinehhh

- **[Workflow: Persetujuan]**
  - Memperbaiki masalah kinerja yang disebabkan oleh bidang JSON dalam pemuatan daftar (MySQL) oleh @mytharcher

  - Menambahkan toleransi kesalahan pada workflow yang dihapus, untuk menghindari kesalahan pemuatan di daftar tugas oleh @mytharcher

  - Memperbaiki kesalahan yang muncul saat menambahkan peran ke pengguna jika workflow audiens dinonaktifkan oleh @mytharcher

- **[Manajer Email]** body tidak menutup saat teks dipilih. Memperbaiki unduhan lampiran gagal oleh @jiannx

- **[WeCom]** Memperbaiki masalah di mana pengguna tidak dapat didaftarkan secara otomatis saat ponsel hilang oleh @2013xile
