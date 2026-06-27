---
title: "NocoBase v2.1.0-alpha.45: Dukungan penugasan nilai bidang dalam aksi kirim formulir"
description: "Catatan Rilis v2.1.0-alpha.45"
---

### 🎉 Fitur Baru

- **[client-v2]**

  - Mendukung penetapan nilai field pada aksi submit form ([#9570](https://github.com/nocobase/nocobase/pull/9570)) oleh @katherinehhh
  - Mendukung halaman v2 yang disematkan dan halaman form publik v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) oleh @zhangzhonghe
  - Menambahkan menu Keamanan dan halaman pengaturan kebijakan Token ke admin v2; pusat pengguna sekarang mendukung Ubah kata sandi. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) oleh @Molunerfinn
  - Menulis ulang halaman manajer Plugin client-v2 menjadi UI berbasis kartu responsif dengan filter kategori, pencarian, aktifkan/nonaktifkan/hapus, Aktifkan massal, dan modal detail plugin; juga membuat halaman manajer Plugin client-v1 responsif di layar sempit. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) oleh @Molunerfinn
- **[cli]**

  - Menambahkan pengaman kompatibilitas perintah API dinamis ([#9613](https://github.com/nocobase/nocobase/pull/9613)) oleh @chenos
  - Mendukung autentikasi dasar ([#9558](https://github.com/nocobase/nocobase/pull/9558)) oleh @chenos
- **[Office File Previewer]** Memigrasikan plugin pratinjau file Office ke klien v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) oleh @Molunerfinn
- **[Workflow]**

  - Menambahkan kontrol waktu tunggu untuk workflow, mendukung pembatalan otomatis eksekusi yang kehabisan waktu jika opsi waktu tunggu diatur ([#9363](https://github.com/nocobase/nocobase/pull/9363)) oleh @mytharcher
  - Menambahkan API administrator untuk menjalankan ulang eksekusi workflow yang telah dimulai dari awal atau dari node tertentu. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) oleh @mytharcher
- **[IdP: OAuth]** Menambahkan dukungan dasar untuk single sign-on aplikasi dalam deployment multi-aplikasi ([#9547](https://github.com/nocobase/nocobase/pull/9547)) oleh @2013xile
- **[Block: Gantt]** Menambahkan dukungan v2 untuk blok Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) oleh @jiannx
- **[App SSO]** Menambahkan plugin App SSO untuk masuk otomatis antar aplikasi oleh @2013xile
- **[Password policy]** Memigrasikan plugin-password-policy ke shell admin client-v2 dengan halaman pengaturan Kebijakan kata sandi / Pengguna terkunci dan penegakan aturan sisi klien pada form ubah kata sandi di pusat pengguna. oleh @Molunerfinn
- **[Workflow: Webhook]** Menambahkan status respons 408 untuk workflow webhook yang kehabisan waktu (mode sinkron) oleh @mytharcher
- **[Workflow: Subflow]** Mendukung pengaturan waktu tunggu di workflow oleh @mytharcher
- **[Auth: OIDC]** Memigrasikan `plugin-auth-oidc` ke admin v2; tombol masuk, form pengaturan admin, dan pengalihan otomatis SSO sekarang berfungsi di bawah v2. oleh @Molunerfinn
- **[Workflow: Approval]** Mendukung pengaturan waktu tunggu di workflow oleh @mytharcher
- **[App supervisor]** Menambahkan pengaturan App SSO untuk sub-aplikasi oleh @2013xile
- **[Auth: LDAP]** Menambahkan entri klien v2 sehingga autentikator LDAP merender form masuk dan pengaturan adminnya di aplikasi v2. oleh @Molunerfinn

### 🚀 Peningkatan

- **[client-v2]**

  - menambahkan pengaturan pemilihan baris tabel v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) oleh @katherinehhh
  - mendukung warna aksi panel aksi ([#9612](https://github.com/nocobase/nocobase/pull/9612)) oleh @katherinehhh
  - Menghapus opsi Tersembunyi dari konfigurasi menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) oleh @zhangzhonghe
- **[client]** Menghapus opsi Tersembunyi dari pengaturan item menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) oleh @zhangzhonghe
- **[cli]** merampingkan alur upgrade aplikasi ([#9587](https://github.com/nocobase/nocobase/pull/9587)) oleh @chenos
- **[Notification manager]** Memigrasikan plugin terkait notifikasi ke v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) oleh @Molunerfinn
- **[AI employees]** Memperbaiki field URL Dasar LLM sehingga dapat menggunakan variabel lingkup global dalam form buat dan edit. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) oleh @cgyrock
- **[Workflow]** Memfaktorkan ulang pemeriksaan ketersediaan node async workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) oleh @mytharcher
- **[Data visualization]** Menambahkan dukungan klien v2 untuk blok grafik. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) oleh @jiannx
- **[IP restriction]** Menambahkan klien v2 untuk plugin pembatasan IP. oleh @Molunerfinn

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki lebar badge di bilah navigasi atas ([#9607](https://github.com/nocobase/nocobase/pull/9607)) oleh @zhangzhonghe
  - meningkatkan batas unggah gambar input pindai ([#9580](https://github.com/nocobase/nocobase/pull/9580)) oleh @katherinehhh
  - Memperbaiki tab halaman yang menghilang setelah mengganti menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) oleh @zhangzhonghe
  - memperbaiki masalah di mana sub-tabel dalam sub-form tidak dapat menambahkan baris kedua ([#9586](https://github.com/nocobase/nocobase/pull/9586)) oleh @katherinehhh
  - memperbaiki format waktu yang dipertahankan untuk field waktu v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) oleh @katherinehhh
  - memperbaiki sinkronisasi nilai popup pemilih tanggal seluler ([#9582](https://github.com/nocobase/nocobase/pull/9582)) oleh @katherinehhh
  - memperbaiki sinkronisasi status tersembunyi untuk tautan sub-form ([#9594](https://github.com/nocobase/nocobase/pull/9594)) oleh @katherinehhh
  - memperbaiki format waktu yang dipertahankan untuk field waktu v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) oleh @katherinehhh
  - memperbaiki masalah di mana sub-tabel dalam sub-form tidak dapat menambahkan baris kedua ([#9586](https://github.com/nocobase/nocobase/pull/9586)) oleh @katherinehhh
  - memperbaiki sinkronisasi nilai popup pemilih tanggal seluler ([#9582](https://github.com/nocobase/nocobase/pull/9582)) oleh @katherinehhh
  - meningkatkan batas unggah gambar input pindai ([#9580](https://github.com/nocobase/nocobase/pull/9580)) oleh @katherinehhh
- **[flow-engine]**

  - Memperbaiki level log frontend yang salah. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) oleh @gchust
  - Memperbaiki menu bertingkat yang tidak stabil saat mengetik di kotak pencarian ([#9473](https://github.com/nocobase/nocobase/pull/9473)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana aturan tautan aksi tabel akan dieksekusi secara tidak benar setelah form berhasil dikirimkan di popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) oleh @gchust
- **[ai]** Mengunci dependensi LangChain ke versi stabil untuk mencegah kegagalan eksekusi alat Ollama dan menghindari rilis upstream yang terpengaruh ([#9604](https://github.com/nocobase/nocobase/pull/9604)) oleh @cgyrock
- **[client-v2]**

  - Memperbaiki tab masuk sub-aplikasi yang merender template terjemahan mentah, dan mencegah laci edit metode autentikasi v2 menjatuhkan nilai field saat dikirim. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) oleh @Molunerfinn
  - Meningkatkan kinerja halaman manajer plugin dengan menggunakan CSS line-clamp sebagai pengganti antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) oleh @Molunerfinn
  - Memperbaiki metadata bahasa browser sehingga halaman aplikasi mengikuti bahasa aplikasi yang dipilih alih-alih ditandai sebagai Bahasa Inggris. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) oleh @Molunerfinn
- **[build]**

  - Aset teks dalam build server sekarang disalin sebagai file alih-alih diubah menjadi modul JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) oleh @Molunerfinn
  - Memperbaiki output pengaburan server plugin untuk menghindari global browser di bundle runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) oleh @Molunerfinn
- **[Block: Gantt]** Memperbaiki jalur folder bersama gantt v2 dan menambahkan zebra striping. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) oleh @jiannx
- **[License settings]** Menambahkan dukungan client-v2 untuk pengaturan lisensi dan injeksi lisensi komersial. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) oleh @jiannx
- **[Workflow: Custom action event]**

  - Memperbaiki opsi Trigger workflow duplikat di menu aksi blok v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) oleh @zhangzhonghe
  - Memfilter opsi pengikatan workflow aksi kustom berdasarkan koleksi blok saat ini. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) oleh @mytharcher
  - Memperbaiki tombol tabel aksi kustom dengan konteks multi-rekaman yang secara tidak benar memungkinkan workflow konteks kustom untuk dipilih. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) oleh @mytharcher
- **[Collection: Tree]** Memperbaiki kesalahan yang disebabkan oleh data induk-anak melingkar di koleksi pohon ([#9603](https://github.com/nocobase/nocobase/pull/9603)) oleh @zhangzhonghe
- **[File manager]**

  - Meningkatkan pesan kegagalan pratinjau PDF dan mendokumentasikan persyaratan CORS untuk penyimpanan eksternal. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) oleh @mytharcher
    Referensi: [Pratinjau File](docs/docs/en/file-manager/file-preview/index.md)
  - Meningkatkan pesan kegagalan pratinjau PDF dan mendokumentasikan persyaratan CORS untuk penyimpanan eksternal. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) oleh @mytharcher
    Referensi: [Pratinjau File](docs/docs/en/file-manager/file-preview/index.md)
  - Merender pratinjau PDF dengan aman menggunakan PDF.js alih-alih rendering PDF mentah berbasis iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) oleh @mytharcher
  - Memperbaiki normalisasi nama file Unicode selama unggahan file untuk menghindari pembuatan kunci objek dengan karakter kontrol. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) oleh @mytharcher
- **[AI employees]**

  - Memperbaiki tombol pintasan AI yang mendapatkan konteks blok kosong setelah blok tabel yang direferensikan dihapus. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) oleh @cgyrock
  - memperbaiki deskripsi yang salah dari nama alat dalam prompt konteks kerja ([#9567](https://github.com/nocobase/nocobase/pull/9567)) oleh @cgyrock
- **[Workflow: Manual node]** Memperbaiki penyimpanan sementara untuk tugas workflow manual yang tidak mempertahankan nilai form yang dikirimkan. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) oleh @mytharcher
- **[plugin-commercial]** Menambahkan komponen lisensi komersial client-v2 dan entri status lisensi di bilah atas. oleh @jiannx
- **[AI: Knowledge base]** Mengunci dependensi LangChain ke versi stabil untuk mencegah kegagalan eksekusi alat Ollama dan menghindari rilis upstream yang terpengaruh oleh @cgyrock
- **[Migration manager]** Memperbaiki diff migrasi PostgreSQL sehingga kolom warisan anak tidak dihapus ketika kolom lokal menjadi warisan. oleh @hongboji
- **[Template print]** Memperbaiki kesalahan konversi PDF cetak template yang tidak dikembalikan ke klien dengan benar oleh @jiannx
- **[Auth: OIDC]** Memperbaiki kebocoran token ketika panggilan balik login SSO menerima URL pengalihan eksternal oleh @2013xile
- **[Workflow: Approval]**

  - Memperbaiki masalah di mana API `jobs:resume` tidak didukung oleh node persetujuan oleh @mytharcher
  - Memperbaiki penarikan persetujuan untuk memperbarui data bisnis yang dikirimkan sambil menghormati izin pembaruan koleksi sumber. oleh @mytharcher
  - Memperbaiki todo persetujuan basi ketika workflow persetujuan dihentikan oleh kegagalan node non-persetujuan. oleh @mytharcher
