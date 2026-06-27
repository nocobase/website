---
title: "NocoBase v2.1.0-alpha.46: Memigrasikan halaman pengaturan Pengguna dan Peran & Izin ke v2"
description: "Catatan Rilis v2.1.0-alpha.46"
---

### 🎉 Fitur Baru

- **[client-v2]** Menambahkan `TypedVariableInput` sehingga kolom port SMTP dan mode aman di plugin email v2 dapat menerima konstanta bertipe atau variabel `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) oleh @Molunerfinn
- **[Kontrol akses]** Memigrasikan halaman pengaturan Pengguna serta Peran & Izin ke v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) oleh @jiannx

### 🚀 Peningkatan

- **[server]** Klien modern kini disajikan di bawah `/v/` alih-alih `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) oleh @Molunerfinn
- **[ai]** Memutakhirkan `xlsx` untuk menghindari masalah keamanan. ([#9675](https://github.com/nocobase/nocobase/pull/9675)) oleh @mytharcher
- **[client]** Meningkatkan dukungan pelengkapan otomatis untuk beberapa fungsi RunJS bawaan. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) oleh @gchust
- **[cli]** Meningkatkan panduan init dan pembaruan mandiri. ([#9633](https://github.com/nocobase/nocobase/pull/9633)) oleh @chenos
- **[undefined]** Memperbarui dokumentasi Embed NocoBase untuk plugin sumber terbuka. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) oleh @zhangzhonghe
  Referensi: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[Departemen]** Menambahkan halaman pengaturan v2 untuk mengelola departemen, anggota departemen, dan penugasan departemen pengguna. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) oleh @jiannx
- **[Auth: SAML 2.0]** Pengalihan masuk SAML/CAS kini mengikuti prefiks klien modern. oleh @Molunerfinn
- **[Aksi: Impor rekaman Pro]** Memutakhirkan `xlsx` untuk menghindari masalah keamanan. oleh @mytharcher
- **[Auth: OIDC]** Pengalihan masuk OIDC kini mengikuti prefiks klien modern. oleh @Molunerfinn
- **[Alur Kerja: Persetujuan]** Menyesuaikan aturan validasi untuk pemicu persetujuan dan konfigurasi node untuk memastikan kolom terkait UI ada. oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client-v2]**

  - Memperbaiki kolom tabel v2 yang menjadi tidak terlihat ketika lebar kolom kustom diatur ke 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) oleh @katherinehhh
  - Menyesuaikan semua pemilih kolom relasi untuk membatasi kolom asosiasi maksimal dua tingkat. ([#9454](https://github.com/nocobase/nocobase/pull/9454)) oleh @jiannx
  - Memperbaiki kesalahan penyimpanan aturan tautan menu. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) oleh @zhangzhonghe
  - Memperbaiki spasi berlebihan di atas blok pada halaman v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) oleh @zhangzhonghe
  - Mempertahankan nilai kolom yang ditetapkan. ([#9640](https://github.com/nocobase/nocobase/pull/9640)) oleh @katherinehhh
- **[client]**

  - Memperbaiki kesalahan saat menyimpan kolom relasi pohon dalam templat formulir yang direferensikan. ([#9643](https://github.com/nocobase/nocobase/pull/9643)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana data kolom relasi yang dipilih tidak ditampilkan di perangkat seluler. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana blok dapat muncul secara tidak benar sebagai terhapus setelah menyegarkan halaman. ([#9662](https://github.com/nocobase/nocobase/pull/9662)) oleh @zhangzhonghe
  - Memperbaiki perilaku aturan tautan aksi rekaman yang salah di blok tabel. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) oleh @gchust
  - Memperbaiki masalah di mana kolom menjadi hanya-baca saat ditampilkan kembali setelah disembunyikan oleh aturan tautan. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) oleh @katherinehhh
- **[flow-engine]**

  - Memperbaiki masalah di mana halaman macet saat mengatur nilai kolom untuk subformulir. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) oleh @gchust
  - Memperbaiki masalah di mana popup menampilkan data UI usang setelah mengganti sakelar mode konfigurasi UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) oleh @gchust
  - Memperbaiki masalah di mana pencarian kolom dibersihkan saat mengarahkan kursor ke kolom asosiasi. ([#9646](https://github.com/nocobase/nocobase/pull/9646)) oleh @zhangzhonghe
- **[cli]** Memperbaiki templat nginx untuk menyajikan aset `.mjs` dengan tipe MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) oleh @mytharcher
- **[database]** Memperbaiki masalah di mana mengimpor nilai kata sandi numerik dapat gagal. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) oleh @2013xile
- **[Koleksi: SQL]**

  - Memblokir akses Koleksi SQL ke metadata PostgreSQL sensitif. ([#9683](https://github.com/nocobase/nocobase/pull/9683)) oleh @2013xile
- **[Manajer sumber data]** Memperbaiki lokalisasi kolom multi-spasi di manajer sumber data v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) oleh @jiannx
- **[Karyawan AI]**

  - Menyembunyikan kesalahan mentah penyedia LLM dari pesan frontend. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) oleh @cgyrock
  - Node karyawan AI Alur Kerja kini dapat menggunakan model default. ([#9679](https://github.com/nocobase/nocobase/pull/9679)) oleh @cgyrock
  - Memperbaiki validasi URL dasar penyedia AI. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) oleh @cgyrock
  - Memperbaiki kesalahan `ctx.get` di node alur kerja karyawan AI. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) oleh @cgyrock
- **[Aksi: Duplikat rekaman]** Memperbaiki masalah di mana status tombol tidak diatur ulang saat pengiriman rekaman duplikat gagal. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) oleh @katherinehhh
- **[Alur Kerja: Aksi kustom]** Memperbaiki masalah di mana aksi pemicu alur kerja hilang dari daftar tombol panel aksi workbench. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) oleh @katherinehhh
- **[Kalender]** Memperbaiki masalah di mana warna acara kalender tidak dirender dari kolom warna yang dikonfigurasi di halaman v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) oleh @jiannx
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki risiko injeksi SQL di filter stempel waktu saluran notifikasi dalam aplikasi. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) oleh @mytharcher
- **[Mesin alur]**

  - Memperbaiki masalah di mana menyeret tab popup untuk mengurutkan ulang tidak berfungsi. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) oleh @gchust
  - Memperbaiki masalah di mana memodifikasi blok setelah menduplikasi templatnya dapat secara tidak sengaja memengaruhi konten blok asli. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) oleh @gchust
- **[Pengaturan lisensi]** Memperbaiki masalah di mana halaman pengaturan lisensi dapat menggantung untuk waktu yang lama ketika pemeriksaan login pkg lambat atau tidak dapat dijangkau. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) oleh @hongboji
- **[Kontrol akses]** Memperbaiki izin tidak lengkap pada login pertama ketika peran gabungan adalah peran default. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) oleh @2013xile
- **[Blok: Gantt]** Meningkatkan penempatan tooltip Gantt untuk menghindari menutupi bilah tugas dan menyelaraskan label tugas secara konsisten di dalam dan di luar bilah. ([#9638](https://github.com/nocobase/nocobase/pull/9638)) oleh @jiannx
- **[Alur Kerja: JavaScript]** Memperjelas bahwa mode dukungan modul JavaScript Alur Kerja tidak aman dan bukan batas izin. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) oleh @mytharcher
  Referensi: [Alur Kerja JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Manajer file]** Memperbaiki validasi jalur penyimpanan file lokal untuk mencegah jalur tidak aman keluar dari root penyimpanan yang dikonfigurasi. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) oleh @mytharcher
- **[Kebijakan kata sandi]**

  - Memperbaiki kegagalan masuk yang menutupi kesalahan sebenarnya dengan "argumen #1 tipe tidak didukung undefined" ketika kesalahan yang mendasarinya tidak memiliki kode status. oleh @Molunerfinn
  - Memperbaiki masalah di mana validasi kebijakan kata sandi dapat gagal untuk nilai kata sandi numerik. oleh @2013xile
- **[Sumber data: REST API]** Memperbaiki kegagalan build deklarasi plugin sumber data REST API yang disebabkan oleh deklarasi tipe client-v2 manajer sumber data yang tidak cocok. oleh @katherinehhh
