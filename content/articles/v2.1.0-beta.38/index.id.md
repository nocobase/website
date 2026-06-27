---
title: "NocoBase v2.1.0-beta.38: Menambahkan pengaman kompatibilitas perintah API dinamis"
description: "Catatan Rilis v2.1.0-beta.38"
---

### 🎉 Fitur Baru

- **[cli]** Menambahkan kompatibilitas perintah API dinamis ([#9613](https://github.com/nocobase/nocobase/pull/9613)) oleh @chenos
- **[client-v2]**

  - Mendukung halaman v2 yang disematkan dan halaman formulir publik v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) oleh @zhangzhonghe
  - Menulis ulang halaman manajer Plugin client-v2 menjadi UI berbasis kartu responsif dengan filter kategori, pencarian, aktifkan/nonaktifkan/hapus, Aktifkan massal, dan modal detail plugin; juga membuat halaman manajer Plugin client-v1 responsif di layar sempit. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) oleh @Molunerfinn
- **[Workflow]**

  - Menambahkan kontrol batas waktu untuk workflow, mendukung penghentian otomatis eksekusi yang kehabisan waktu jika opsi batas waktu diatur ([#9363](https://github.com/nocobase/nocobase/pull/9363)) oleh @mytharcher
  - Menambahkan API administrator untuk menjalankan ulang eksekusi workflow yang telah dimulai dari awal atau dari node tertentu. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) oleh @mytharcher
- **[Blok: Gantt]** Menambahkan dukungan v2 untuk blok Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) oleh @jiannx
- **[Workflow: Webhook]** Menambahkan status respons 408 untuk workflow webhook yang kehabisan waktu (mode sinkron) oleh @mytharcher
- **[Workflow: Subflow]** Mendukung pengaturan batas waktu di workflow oleh @mytharcher
- **[Auth: OIDC]** Memigrasikan `plugin-auth-oidc` ke admin v2; tombol masuk, formulir pengaturan admin, dan pengalihan otomatis SSO kini berfungsi di bawah v2. oleh @Molunerfinn
- **[Workflow: Approval]** Mendukung pengaturan batas waktu di workflow oleh @mytharcher
- **[Auth: LDAP]** Menambahkan entri klien v2 sehingga autentikator LDAP merender formulir masuk dan pengaturan adminnya di aplikasi v2. oleh @Molunerfinn

### 🚀 Peningkatan

- **[client-v2]**

  - menambahkan pengaturan pemilihan baris tabel v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) oleh @katherinehhh
  - mendukung warna aksi panel aksi ([#9612](https://github.com/nocobase/nocobase/pull/9612)) oleh @katherinehhh
  - Hapus opsi Tersembunyi dari konfigurasi menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) oleh @zhangzhonghe
- **[client]** Hapus opsi Tersembunyi dari pengaturan item menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) oleh @zhangzhonghe
- **[cli]** merampingkan alur upgrade aplikasi ([#9587](https://github.com/nocobase/nocobase/pull/9587)) oleh @chenos
- **[AI employees]** Memperbaiki bidang URL Dasar LLM sehingga dapat menggunakan variabel lingkup global di formulir buat dan edit. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) oleh @cgyrock
- **[IP restriction]** Menambahkan klien v2 untuk plugin pembatasan IP. oleh @Molunerfinn

### 🐛 Perbaikan Bug

- **[flow-engine]**

  - Memperbaiki level log frontend yang salah. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) oleh @gchust
  - Memperbaiki menu bertingkat yang tidak stabil saat mengetik di kotak pencarian ([#9473](https://github.com/nocobase/nocobase/pull/9473)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana aturan tautan aksi tabel akan dieksekusi secara tidak benar setelah formulir berhasil dikirim di popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) oleh @gchust
- **[ai]** Mengunci dependensi LangChain ke versi stabil untuk mencegah kegagalan eksekusi alat Ollama dan menghindari rilis upstream yang terpengaruh ([#9604](https://github.com/nocobase/nocobase/pull/9604)) oleh @cgyrock
- **[client-v2]**

  - Memperbaiki tab masuk sub-aplikasi yang merender template terjemahan mentah, dan mencegah laci edit metode autentikasi v2 menjatuhkan nilai bidang saat dikirim. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) oleh @Molunerfinn
  - Meningkatkan kinerja halaman manajer plugin dengan menggunakan CSS line-clamp sebagai ganti elipsis antd Typography. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) oleh @Molunerfinn
- **[client]**

  - memperbaiki format waktu pertahankan untuk bidang waktu v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) oleh @katherinehhh
  - memperbaiki status tersembunyi sinkron untuk tautan subformulir ([#9594](https://github.com/nocobase/nocobase/pull/9594)) oleh @katherinehhh
  - meningkatkan batas unggah gambar input pindai ([#9580](https://github.com/nocobase/nocobase/pull/9580)) oleh @katherinehhh
  - memperbaiki nilai popup pemilih tanggal seluler sinkron ([#9582](https://github.com/nocobase/nocobase/pull/9582)) oleh @katherinehhh
  - Memperbaiki tab halaman yang menghilang setelah mengganti menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) oleh @zhangzhonghe
  - memperbaiki masalah di mana subtabel dalam subformulir tidak dapat menambahkan baris kedua ([#9586](https://github.com/nocobase/nocobase/pull/9586)) oleh @katherinehhh
  - meningkatkan batas unggah gambar input pindai ([#9580](https://github.com/nocobase/nocobase/pull/9580)) oleh @katherinehhh
  - memperbaiki nilai popup pemilih tanggal seluler sinkron ([#9582](https://github.com/nocobase/nocobase/pull/9582)) oleh @katherinehhh
  - memperbaiki masalah di mana subtabel dalam subformulir tidak dapat menambahkan baris kedua ([#9586](https://github.com/nocobase/nocobase/pull/9586)) oleh @katherinehhh
  - memperbaiki format waktu pertahankan untuk bidang waktu v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) oleh @katherinehhh
- **[Collection: Tree]** Memperbaiki kesalahan yang disebabkan oleh data induk-anak melingkar di koleksi pohon ([#9603](https://github.com/nocobase/nocobase/pull/9603)) oleh @zhangzhonghe
- **[Workflow: Custom action event]**

  - Memperbaiki tombol tabel aksi kustom dengan konteks banyak rekaman yang secara tidak benar memungkinkan konteks workflow kustom untuk dipilih. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) oleh @mytharcher
  - Memfilter opsi pengikatan workflow aksi kustom berdasarkan koleksi blok saat ini. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) oleh @mytharcher
- **[File manager]**

  - Meningkatkan pesan kegagalan pratinjau PDF dan mendokumentasikan persyaratan CORS untuk penyimpanan eksternal. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) oleh @mytharcher
    Referensi: [Pratinjau File](docs/docs/en/file-manager/file-preview/index.md)
  - Meningkatkan pesan kegagalan pratinjau PDF dan mendokumentasikan persyaratan CORS untuk penyimpanan eksternal. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) oleh @mytharcher
    Referensi: [Pratinjau File](docs/docs/en/file-manager/file-preview/index.md)
  - Memperbaiki normalisasi nama file Unicode selama unggahan file untuk menghindari pembuatan kunci objek dengan karakter kontrol. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) oleh @mytharcher
- **[AI: Knowledge base]** Mengunci dependensi LangChain ke versi stabil untuk mencegah kegagalan eksekusi alat Ollama dan menghindari rilis upstream yang terpengaruh oleh @cgyrock
- **[Template print]** Memperbaiki kesalahan konversi PDF cetak template yang tidak dikembalikan ke klien dengan benar oleh @jiannx
