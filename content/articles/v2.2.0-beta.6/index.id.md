---
title: "NocoBase v2.2.0-beta.6: Menambahkan dukungan untuk tata letak seluler"
description: "Catatan Rilis v2.2.0-beta.6"
---

### 🎉 Fitur Baru

- **[cli]** Dukungan untuk skrip hook instalasi ([#9824](https://github.com/nocobase/nocobase/pull/9824)) oleh @chenos
- **[Tata letak UI]** Menambahkan dukungan untuk tata letak seluler ([#9641](https://github.com/nocobase/nocobase/pull/9641)) oleh @zhangzhonghe
- **[Manajer cadangan]** Dukungan pencadangan dan pemulihan untuk KingBase sebagai basis data utama ([#9791](https://github.com/nocobase/nocobase/pull/9791)) oleh @2013xile
- **[Multi-portal]** Menambahkan plugin Multi-Portal oleh @zhangzhonghe
- **[Manajer migrasi]** Dukungan migrasi untuk KingBase sebagai basis data utama. oleh @2013xile

### 🚀 Peningkatan

- **[client-v2]**

  - Menampilkan aturan validasi tingkat bidang sebagai aturan warisan hanya-baca di pengaturan validasi bidang UI. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) oleh @katherinehhh
  - Menambahkan opsi nilai timpa untuk pengaturan nilai bidang. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) oleh @gchust
- **[undefined]** Peningkatan pengambilan dan dokumentasi basis pengetahuan AI. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) oleh @cgyrock
- **[Mesin alur]**

  - Menambahkan blok saat ini ke konteks pengguna secara default saat membangun karyawan AI menggunakan API Flow Surface. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) oleh @gchust
  - Membuka global browser runjs. ([#9841](https://github.com/nocobase/nocobase/pull/9841)) oleh @gchust
- **[Workflow]** Menstabilkan pengujian opsi pembaruan ([#9773](https://github.com/nocobase/nocobase/pull/9773)) oleh @mytharcher
- **[Kontrol akses]** Menyelaraskan halaman pengaturan Pengguna & Izin v2 dengan perilaku v1, termasuk total paginasi, perilaku pohon departemen, gaya yang dipilih, dan pengguliran panel izin internal. ([#9810](https://github.com/nocobase/nocobase/pull/9810)) oleh @jiannx
- **[Manajer cadangan]** Tabel yang `dataCategory` koleksinya ditandai sebagai `'runtime'` sekarang secara otomatis dikecualikan dari cadangan. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) oleh @cgyrock
- **[AI: Basis pengetahuan]** Peningkatan segmentasi dokumen basis pengetahuan AI, manajemen segmen, pengujian kecocokan, dan dukungan node alur kerja dokumen. oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client-v2]**

  - Memperbaiki blok yang tidak disegarkan setelah pengaturan blok diperbarui. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) oleh @gchust
  - Memperbaiki tombol pemicu alur kerja tindakan kustom yang mengirim JSON konteks kustom di bawah properti `values` tambahan atau sebagai string yang diserialisasi. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) oleh @mytharcher
  - Memperbaiki masalah di mana mengonfigurasi nilai bidang asosiasi sebagai nilai tetap atau nilai default tidak akan berpengaruh. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) oleh @gchust
  - Memperbaiki masalah di mana alur peristiwa pada kolom sub-tabel akan dieksekusi secara tidak benar. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) oleh @gchust
  - menghapus updateAssociationValues yang tidak diharapkan dari bidang asosiasi ([#9812](https://github.com/nocobase/nocobase/pull/9812)) oleh @katherinehhh
  - Memperbaiki masalah di mana pengiriman formulir akan menampilkan pesan yang salah ketika subformulir berisi sub-tabel. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) oleh @gchust
- **[ai]**

  - Memperbaiki resolusi dependensi LangChain yang tidak kompatibel untuk plugin AI. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) oleh @cgyrock
  - Mengunci `@langchain/openai` ke pembaruan tingkat patch untuk paket AI. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) oleh @cgyrock
- **[app]** Mengabaikan currentScript yang tidak terkait saat menyimpulkan jalur publik plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) oleh @chenos
- **[auth]** Data kata sandi terenkripsi tidak lagi disertakan dalam respons status masuk ([#9836](https://github.com/nocobase/nocobase/pull/9836)) oleh @2013xile
- **[Blok: Gantt]** Memperbaiki pengaturan templat popup tugas Gantt yang tidak diterapkan atau dibersihkan dengan benar. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) oleh @jiannx
- **[Aksi: Cetak]** Memperbaiki pencetakan blok detail v2 sehingga blok detail kosong tidak lagi mencetak seluruh halaman. ([#9832](https://github.com/nocobase/nocobase/pull/9832)) oleh @katherinehhh
- **[Templat UI]** Memperbaiki konteks default yang salah untuk ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) oleh @gchust
- **[Manajer file]** Memperbaiki kesalahan 404 saat mengunggah file ke bidang URL lampiran di sumber data eksternal ([#9809](https://github.com/nocobase/nocobase/pull/9809)) oleh @2013xile
- **[Aksi: Permintaan kustom]** Memperbaiki aksi permintaan kustom V2 yang menampilkan kesalahan tambahan saat pengaturan permintaan tidak dikonfigurasi. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) oleh @katherinehhh
- **[Workflow]** Memperbaiki pemulihan dispatcher alur kerja setelah kesalahan pengiriman yang tidak terduga. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) oleh @mytharcher
- **[Karyawan AI]** Memperbaiki pemicu tugas pintasan karyawan AI sehingga lampiran dari konteks kerja saat ini disertakan saat menjalankan tugas dari profil pintasan. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) oleh @cgyrock
- **[Sumber data: NocoBase Eksternal]** Proksi unggahan dan penyimpanan file sumber data eksternal NocoBase oleh sumber data unggahan oleh @2013xile
- **[AI: Basis pengetahuan]**

  - Memperbaiki resolusi dependensi LangChain yang tidak kompatibel untuk plugin basis pengetahuan AI. oleh @cgyrock
  - Memperbaiki kegagalan yang tidak jelas saat mengaktifkan plugin basis pengetahuan AI tanpa plugin AI yang tersedia. oleh @cgyrock
- **[Multi-ruang]** Memperbaiki permintaan pemulihan autentikasi yang diblokir oleh header multi-ruang yang basi. oleh @jiannx
- **[Workflow: Subalur]** Memperbaiki subalur asinkron sehingga alur kerja induk dapat melanjutkan setelah restart pekerja atau kehilangan pemetaan peristiwa dalam memori. oleh @mytharcher
- **[Workflow: Persetujuan]** Memperbaiki masalah di mana persetujuan terkait tidak dimuat atau disegarkan dengan benar oleh @zhangzhonghe
- **[Pengawas aplikasi]** Memperbaiki crash saat respons proxy WebSocket jarak jauh gagal oleh @2013xile
