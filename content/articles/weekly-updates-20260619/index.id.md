---
title: "Pembaruan Mingguan｜Tambahkan Formulir Konfigurasi Penyimpanan Vektor Eksternal untuk Basis Pengetahuan AI"
description: "Ini adalah ringkasan pembaruan fitur dan peningkatan NocoBase dari 12 Juni hingga 21 Juni 2026."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.1.9](https://www.nocobase.com/en/blog/v2.1.9)

*Tanggal rilis: 20-06-2026*

### 🚀 Peningkatan

- **[client-v2]** Menambahkan opsi nilai timpa untuk pengaturan nilai bidang. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) oleh @gchust

### 🐛 Perbaikan Bug

- **[client-v2]**

  - Memperbaiki tombol pemicu alur kerja tindakan kustom yang mengirim JSON konteks kustom di bawah properti `values` tambahan atau sebagai string yang diserialisasi. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) oleh @mytharcher
  - Memperbaiki masalah di mana mengonfigurasi nilai bidang asosiasi sebagai nilai tetap atau nilai default tidak akan berpengaruh. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) oleh @gchust
- **[auth]** Data kata sandi terenkripsi tidak lagi disertakan dalam respons status masuk ([#9836](https://github.com/nocobase/nocobase/pull/9836)) oleh @2013xile
- **[app]** Abaikan currentScript yang tidak terkait saat menyimpulkan jalur publik plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) oleh @chenos
- **[Template UI]** Memperbaiki konteks default yang salah untuk ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) oleh @gchust

### [v2.1.8](https://www.nocobase.com/en/blog/v2.1.8)

*Tanggal rilis: 18-06-2026*

### 🐛 Perbaikan Bug

- **[ai]**

  - Mengunci `@langchain/openai` ke pembaruan level patch untuk paket AI. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) oleh @cgyrock
  - Memperbaiki resolusi dependensi LangChain yang tidak kompatibel untuk plugin AI. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) oleh @cgyrock
- **[AI: Basis Pengetahuan]**

  - Memperbaiki pesan kesalahan yang tidak jelas saat mengaktifkan plugin basis pengetahuan AI tanpa plugin AI tersedia. oleh @cgyrock
  - Memperbaiki resolusi dependensi LangChain yang tidak kompatibel untuk plugin basis pengetahuan AI. oleh @cgyrock

### [v2.1.7](https://www.nocobase.com/en/blog/v2.1.7)

*Tanggal rilis: 18-06-2026*

### 🎉 Fitur Baru

- **[Manajer Cadangan]** Mendukung pencadangan dan pemulihan untuk KingBase sebagai basis data utama ([#9791](https://github.com/nocobase/nocobase/pull/9791)) oleh @2013xile
- **[Manajer Migrasi]** Mendukung migrasi untuk KingBase sebagai basis data utama. oleh @2013xile

### 🚀 Peningkatan

- **[AI: Basis Pengetahuan]** Peningkatan pengambilan basis pengetahuan AI dan dokumentasi. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) oleh @cgyrock
- **[cli]** Menambahkan versi skema konfigurasi env ([#9782](https://github.com/nocobase/nocobase/pull/9782)) oleh @chenos
- **[Alur Kerja]** Menstabilkan tes opsi pembaruan ([#9773](https://github.com/nocobase/nocobase/pull/9773)) oleh @mytharcher
- **[Manajer Berkas]** Peningkatan pratinjau PDF: file PDF lintas-asal sekarang menggunakan penampil asli browser, sementara file PDF asal yang sama terus menggunakan PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) oleh @mytharcher
- **[Manajer Cadangan]** Tabel yang `dataCategory` koleksinya ditandai sebagai `'runtime'` sekarang secara otomatis dikecualikan dari cadangan. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) oleh @cgyrock
- **[AI: Basis Pengetahuan]** Peningkatan segmentasi dokumen basis pengetahuan AI, manajemen segmen, tes hit, dan dukungan simpul alur kerja dokumen. oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client-v2]**

  - Memperbaiki masalah di mana pengiriman formulir akan menampilkan pesan yang salah ketika subformulir berisi sub-tabel. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) oleh @gchust
  - Memperbaiki masalah di mana alur peristiwa pada kolom sub-tabel akan dieksekusi secara tidak benar. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) oleh @gchust
  - Menghapus `updateAssociationValues` yang tidak terduga dari bidang asosiasi ([#9812](https://github.com/nocobase/nocobase/pull/9812)) oleh @katherinehhh
  - Memperbaiki opsi Ya/Tidak yang tidak diterjemahkan di dropdown kotak centang formulir filter v2. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) oleh @katherinehhh
  - Memperbaiki masalah di mana pengaturan alur peristiwa tidak dapat diperbarui setelah menyimpan blok sebagai templat. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) oleh @gchust
  - Memperbaiki tampilan dan pengaturan format yang salah ketika bidang judul asosiasi tabel v2 menggunakan bidang waktu, hanya-tanggal, atau datetime. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) oleh @katherinehhh
- **[Alur Kerja]** Memperbaiki pemulihan dispatcher alur kerja setelah kesalahan pengiriman yang tidak terduga. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) oleh @mytharcher
- **[Manajer Berkas]** Memperbaiki kesalahan 404 saat mengunggah file ke bidang URL lampiran di sumber data eksternal ([#9809](https://github.com/nocobase/nocobase/pull/9809)) oleh @2013xile
- **[Aksi: Permintaan Kustom]** Memperbaiki aksi permintaan kustom V2 yang menampilkan kesalahan yang tidak perlu ketika pengaturan permintaan tidak dikonfigurasi. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) oleh @katherinehhh
- **[Karyawan AI]**

  - Memperbaiki masalah di mana karyawan AI tidak dapat mengisi data sub-tabel dengan benar. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) oleh @gchust
  - Memperbaiki pemicu tugas pintasan karyawan AI sehingga lampiran dari konteks kerja saat ini disertakan saat menjalankan tugas dari profil pintasan. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) oleh @cgyrock
- **[Alur Kerja: Peristiwa aksi kustom]** Memperbaiki tombol alur kerja pemicu panel aksi v2 yang menampilkan keberhasilan dan mengirim permintaan ketika tidak ada alur kerja yang terikat. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) oleh @mytharcher
- **[Mesin Aliran]** Memperbaiki masalah di mana formulir dan detail rekaman saat ini di popup dapat berisi data yang salah ketika dibangun oleh AI. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) oleh @gchust
- **[Manajer Tugas Async]** Memperbaiki kesalahan unduh file tugas async ketika id tugas hilang dari `filterByTk`. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) oleh @mytharcher
- **[Sumber Data: NocoBase Eksternal]** Proksi unggah file sumber data eksternal NocoBase dan tindakan penyimpanan berdasarkan sumber data unggahan oleh @2013xile
- **[Multi-ruang]** Memperbaiki kesalahan izin ketika manajer ruang menambahkan pengguna tanpa akses ke bidang email pengguna. oleh @jiannx
- **[Alur Kerja: Subaliran]** Memperbaiki subaliran asinkron sehingga alur kerja induk dapat dilanjutkan setelah restart pekerja atau kehilangan pemetaan peristiwa dalam memori. oleh @mytharcher
- **[Pengawas Aplikasi]** Memperbaiki crash ketika respons proksi WebSocket jarak jauh gagal oleh @2013xile

### [v2.1.5](https://www.nocobase.com/en/blog/v2.1.5)

*Tanggal rilis: 15-06-2026*

### 🎉 Fitur Baru

- **[Alur Kerja: Simpul Mailer]** Menambahkan dukungan untuk mengirim lampiran di simpul mailer alur kerja. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) oleh @mytharcher

### 🚀 Peningkatan

- **[client-v2]** Cakupan data kolom bidang relasi di sub-tabel formulir sekarang mendukung variabel item saat ini. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) oleh @gchust
- **[undefined]** Menyatukan nama dokumentasi Cina dari plugin kontrol versi sebagai “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) oleh @cgyrock
- **[Manajer Berkas]** Menambahkan dukungan teks yang dapat dipilih ke pratinjau PDF di manajer berkas untuk PDF dengan teks tertanam. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) oleh @mytharcher
- **[Aksi: Edit massal]** Mengoptimalkan metode pemuatan untuk plugin aksi v2 dan menjaga urutan tombol aksi yang dimigrasi tetap stabil. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) oleh @katherinehhh
- **[Kontrol Versi]** Mengubah nama tampilan Cina dari plugin kontrol versi menjadi “版本控制”. oleh @cgyrock

### 🐛 Perbaikan Bug

- **[cli-v1]** Memperbaiki kesalahan saat menjalankan `yarn dev` setelah meningkatkan proyek yang dibuat dengan create-nocobase-app dari 2.0 ke 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) oleh @Molunerfinn
- **[client-v2]** Memperbaiki masalah di mana progres migrasi tidak menampilkan tampilan progres khusus. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) oleh @2013xile
- **[mesin-aliran]** Memperbaiki masalah input IME Vietnam dan Cina di bidang teks satu baris dan multi baris v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) oleh @katherinehhh
- **[server]** Memperbaiki penanganan nama plugin yang tidak aman di `pm:enable` untuk mencegah risiko penyertaan file lokal selama resolusi plugin. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) oleh @mytharcher
- **[Manajer Berkas]** Memperbaiki kegagalan pratinjau PDF yang disebabkan oleh pemuatan modul pekerja pdf.js yang tidak normal. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) oleh @mytharcher
- **[Blok: Kanban]** Memperbaiki masalah di mana membuka blok Kalender, Gantt, dan Kanban di luar mode edit secara tidak terduga mempertahankan aksi popup tersembunyi dan berulang kali mengirim permintaan hapus. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) oleh @jiannx
- **[Aksi: Ekspor rekaman Pro]** Peningkatan pengaturan mode pemrosesan dan petunjuk penjelasan untuk Impor/Ekspor Pro v2. oleh @katherinehhh
- **[Manajer Migrasi]** Memperbaiki kemungkinan kegagalan saat mengimpor file data migrasi besar. oleh @2013xile
- **[Cetak templat]** Menolak jenis file templat yang tidak didukung sebelum pencetakan templat dimulai. oleh @2013xile

### [v2.1.4](https://www.nocobase.com/en/blog/v2.1.4)

*Tanggal rilis: 13-06-2026*

### 🚀 Peningkatan

- **[Alur Kerja]** Peningkatan pengalaman pengeditan metadata alur kerja dengan mendukung pengeditan deskripsi di popup detail dan secara otomatis mengisi metadata alur kerja sumber saat menduplikasi alur kerja. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Aksi: Impor rekaman]** Mengubah file impor yang diunggah menjadi penyimpanan disk untuk mengurangi tekanan memori selama impor data besar. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) oleh @mytharcher
- **[Manajer Cadangan]** Memperbaiki masalah keamanan di mana nama skema PostgreSQL yang tidak aman dapat diterima selama pemulihan cadangan. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) oleh @2013xile
- **[Alur Kerja]**

  - Memperbaiki penanganan waktu tunggu alur kerja sehingga eksekusi yang dibatalkan dan tugas tertundanya dapat diperbarui secara atomik. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) oleh @mytharcher
  - Memperbaiki masalah di mana bidang terakhir diperbarui oleh alur kerja tidak diperbarui setelah perubahan simpul alur kerja. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) oleh @mytharcher
- **[Aksi: Impor rekaman Pro]** Menghindari penguraian file besar di simpul permintaan sebelum impor Pro membuat tugas async. oleh @mytharcher
- **[Kontrol Versi]** Menyesuaikan posisi entri pintasan atas kontrol versi sehingga muncul di sebelah editor UI di tata letak admin lama dan v2. oleh @cgyrock

### [v2.1.3](https://www.nocobase.com/en/blog/v2.1.3)

*Tanggal rilis: 12-06-2026*

### 🚀 Peningkatan

- **[cli]**
  - menormalkan versi build kompatibilitas aplikasi ([#9763](https://github.com/nocobase/nocobase/pull/9763)) oleh @chenos
  - mendukung pembaruan keterampilan ke versi tertentu ([#9760](https://github.com/nocobase/nocobase/pull/9760)) oleh @chenos

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana bidang di subformulir horizontal terlalu sempit untuk menampilkan data ([#9755](https://github.com/nocobase/nocobase/pull/9755)) oleh @zhangzhonghe
- **[Manajer sumber data]**

  - Memperbaiki laci edit bidang kosong yang disebabkan oleh render ulang berulang pada halaman Konfigurasi bidang sumber data eksternal v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) oleh @katherinehhh
  - Memperbaiki masalah di mana menghapus kategori koleksi aktif di manajer sumber data v1 dapat membuat tab Semua koleksi kosong. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) oleh @katherinehhh
- **[Manajer Tugas Async]** Memperbaiki ID permintaan yang salah di log pekerja tugas async ([#9686](https://github.com/nocobase/nocobase/pull/9686)) oleh @2013xile
- **[Alur Kerja: Simpul SQL]** Memperbaiki migrasi variabel templat lama alur kerja SQL yang dilewati untuk beberapa pengguna versi beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) oleh @mytharcher
- **[Karyawan AI]**

  - Memperbaiki hilangnya konfigurasi pesan di simpul LLM alur kerja. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) oleh @cgyrock
  - Memperbaiki masalah di mana lampiran yang ditempelkan ke dialog karyawan AI tidak dapat dihapus. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) oleh @cgyrock
- **[Blok: Kanban]** Memperbaiki dukungan URL untuk kalender dan popup terkait. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) oleh @jiannx
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana data terkait tidak ditampilkan di formulir persetujuan v2 oleh @zhangzhonghe

### [v2.1.2](https://www.nocobase.com/en/blog/v2.1.2)

*Tanggal rilis: 12-06-2026*

### 🎉 Fitur Baru

- **[Karyawan AI]** Menambahkan formulir konfigurasi penyimpanan vektor eksternal untuk basis pengetahuan AI. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) oleh @cgyrock
- **[AI: Basis Pengetahuan]** Menambahkan formulir konfigurasi penyimpanan vektor eksternal untuk basis pengetahuan AI. oleh @cgyrock

### 🚀 Peningkatan

- **[undefined]**

  - Menambahkan skenario kontrol versi ke mulai cepat pembangun AI ([#9748](https://github.com/nocobase/nocobase/pull/9748)) oleh @Molunerfinn
    Referensi: [Mulai Cepat Pembangun AI](https://docs.nocobase.com/en/ai-builder)
  - Peningkatan dokumentasi kontrol versi dengan panduan revisi otomatis Pembangun AI. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) oleh @cgyrock
- **[cli]** memperjelas kata-kata pengaturan inisialisasi ([#9750](https://github.com/nocobase/nocobase/pull/9750)) oleh @chenos
- **[Aksi: Impor rekaman]** Peningkatan dialog kesalahan impor dan tugas async sehingga pesan kesalahan panjang dapat dibaca sepenuhnya tanpa merusak tata letak. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) oleh @katherinehhh
- **[Aksi: Impor rekaman Pro]** Peningkatan dialog impor sehingga pesan kesalahan panjang tetap dapat dibaca dan mode pemrosesan v2 dapat dipilih langsung dari menu pengaturan. oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[client-v2]** Memperbaiki masalah di mana halaman v2 dapat terus memuat setelah masuk ([#9738](https://github.com/nocobase/nocobase/pull/9738)) oleh @zhangzhonghe
- **[cli]** membutuhkan Node.js 22 untuk nb ([#9749](https://github.com/nocobase/nocobase/pull/9749)) oleh @chenos
- **[Manajer Berkas]** Memperbaiki pratinjau PDF yang kehilangan teks font CJK/CID setelah beralih ke pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.2.0-beta.5](https://www.nocobase.com/en/blog/v2.2.0-beta.5)

*Tanggal rilis: 16-06-2026*

### 🚀 Peningkatan

* **[cli]** Menambahkan catatan versi skema untuk konfigurasi env. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) oleh @chenos
* **[Manajer Berkas]** Peningkatan pratinjau PDF: file PDF lintas-asal sekarang menggunakan pratinjau asli browser, sementara file PDF asal yang sama terus dirender dengan PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) oleh @mytharcher

### 🐛 Perbaikan Bug

* **[client-v2]**
  * Memperbaiki masalah di mana pengaturan alur peristiwa tidak dapat lagi dimodifikasi setelah blok diubah menjadi templat. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) oleh @gchust
  * Memperbaiki masalah di mana opsi dropdown kotak centang di formulir filter v2 tidak menampilkan teks yang diterjemahkan. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) oleh @katherinehhh
  * Memperbaiki tampilan dan pengaturan format yang salah ketika bidang judul dari bidang relasi tabel v2 menggunakan bidang waktu, tanggal, atau datetime. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) oleh @katherinehhh
* **[Mesin Aliran]** Memperbaiki data yang salah dalam formulir rekaman saat ini dan data detail di dalam popup selama pembangunan AI. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) oleh @gchust
* **[Alur Kerja: Peristiwa aksi kustom]** Memperbaiki masalah di mana tombol alur kerja pemicu panel aksi v2 masih menampilkan keberhasilan dan mengirim permintaan ketika tidak ada alur kerja yang terikat. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) oleh @mytharcher
* **[Karyawan AI]** Memperbaiki masalah di mana karyawan AI tidak dapat mengisi data sub-tabel dengan benar. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) oleh @gchust

### [v2.2.0-beta.3](https://www.nocobase.com/en/blog/v2.2.0-beta.3)

*Tanggal rilis: 15-06-2026*

### 🎉 Fitur Baru

* **[Alur Kerja: Simpul Mailer]** Menambahkan dukungan untuk mengirim lampiran di simpul mailer alur kerja. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) oleh @mytharcher
* **[Alur Kerja]** Menambahkan dukungan untuk cakupan transaksi basis data di alur kerja. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) oleh @mytharcher
  Referensi: [Transaksi basis data](docs/docs/en/workflow/nodes/transaction.md)
* **[Alur Kerja: Simpul transaksi basis data]** Menambahkan plugin simpul alur kerja transaksi basis data. oleh @mytharcher

### 🚀 Peningkatan

* **[client-v2]** Kolom bidang relasi di sub-tabel formulir sekarang mendukung variabel item saat ini dalam cakupan data. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) oleh @gchust
* **[undefined]** Menyatukan nama dokumentasi Cina dari plugin Kontrol versi sebagai “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) oleh @cgyrock
* **[Manajer Berkas]** Menambahkan dukungan teks yang dapat dipilih ke pratinjau PDF di Manajer berkas untuk PDF dengan teks tertanam. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) oleh @mytharcher
* **[Pengguna]** Peningkatan tata letak halaman Pengguna dan Izin v2 dan mengoptimalkan perilaku pohon departemen. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) oleh @jiannx
* **[Aksi: Edit massal]** Mengoptimalkan cara plugin aksi v2 dimuat dan menjaga urutan tombol aksi yang dimigrasi tetap stabil. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) oleh @katherinehhh
* **[Kontrol Versi]** Mengubah nama tampilan Cina dari plugin Kontrol versi menjadi “版本控制”. oleh @cgyrock

### 🐛 Perbaikan Bug

* **[cli-v1]** Memperbaiki kesalahan saat menjalankan `<span>yarn dev</span>` setelah meningkatkan proyek yang dibuat dengan create-nocobase-app dari 2.0 ke 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) oleh @Molunerfinn
* **[mesin-aliran]** Memperbaiki masalah input IME Vietnam dan Cina di bidang teks satu baris dan multi baris v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) oleh @katherinehhh
* **[client-v2]** Memperbaiki masalah di mana progres migrasi tidak menampilkan tampilan progres khusus. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) oleh @2013xile
* **[server]** Memperbaiki penanganan nama plugin yang tidak aman di `<span>pm:enable</span>` untuk menghindari risiko penyertaan file lokal selama resolusi plugin. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) oleh @mytharcher
* **[Manajer Tugas Async]** Memperbaiki kesalahan kueri basis data yang disebabkan oleh `<span>filterByTk</span>` yang hilang saat mengunduh file tugas async. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) oleh @mytharcher
* **[Manajer Berkas]** Memperbaiki kegagalan pratinjau PDF yang disebabkan oleh pemuatan modul pekerja pdf.js yang tidak normal. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) oleh @mytharcher
* **[Blok: Kanban]** Memperbaiki masalah di mana membuka blok Kalender, Gantt, dan Kanban dalam mode non-edit secara tidak terduga mempertahankan aksi popup tersembunyi dan berulang kali mengirim permintaan hapus. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) oleh @jiannx
* **[Aksi: Ekspor rekaman Pro]** Peningkatan pengaturan mode pemrosesan dan teks bantuan untuk Impor/Ekspor Pro v2. oleh @katherinehhh
* **[Multi-ruang]** Memperbaiki masalah di mana administrator ruang tidak dapat menambahkan pengguna ruang ketika mereka tidak memiliki izin untuk bidang email pengguna. oleh @jiannx
* **[Manajer Migrasi]** Memperbaiki kemungkinan kegagalan saat mengimpor file data migrasi besar. oleh @2013xile
* **[Cetak templat]** Menolak jenis file templat yang tidak didukung sebelum pencetakan templat dimulai. oleh @2013xile

### [v2.2.0-beta.2](https://www.nocobase.com/en/blog/v2.2.0-beta.2)

*Tanggal rilis: 13-06-2026**

### 🎉 Fitur Baru

- **[Karyawan AI]** Menambahkan formulir konfigurasi penyimpanan vektor eksternal untuk basis pengetahuan AI. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) oleh @cgyrock
- **[AI: Basis Pengetahuan]** Menambahkan formulir konfigurasi penyimpanan vektor eksternal untuk basis pengetahuan AI. oleh @cgyrock
- **[Manajer Email]** Memigrasikan klien Manajer Email ke v2. oleh @jiannx

### 🚀 Peningkatan

- **[cli]**

  - Mengoptimalkan pemeriksaan kompatibilitas untuk format nomor versi yang berbeda. ([#9763](https://github.com/nocobase/nocobase/pull/9763)) oleh @chenos
  - Menambahkan dukungan untuk memperbarui keterampilan ke versi tertentu. ([#9760](https://github.com/nocobase/nocobase/pull/9760)) oleh @chenos
  - Peningkatan kata-kata prompt pengaturan inisialisasi. ([#9750](https://github.com/nocobase/nocobase/pull/9750)) oleh @chenos
- **[undefined]**

  - Menambahkan skenario percakapan kontrol versi ke halaman ikhtisar Pembangun AI. ([#9748](https://github.com/nocobase/nocobase/pull/9748)) oleh @Molunerfinn
    Referensi: [Mulai Cepat Pembangun AI](https://docs.nocobase.com/en/ai-builder)
  - Peningkatan dokumentasi kontrol versi dengan catatan tentang penyimpanan versi otomatis di Pembangun AI. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) oleh @cgyrock
    Referensi: [Kontrol versi](docs/docs/en/ops-management/version-control/index.md)
- **[Alur Kerja]** Peningkatan pengalaman pengeditan metadata alur kerja dengan mendukung pengeditan deskripsi di popup detail dan secara otomatis mengisi metadata alur kerja sumber saat menduplikasi alur kerja. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) oleh @mytharcher
- **[Aksi: Impor rekaman]** Peningkatan dialog detail kesalahan impor dan tugas async sehingga pesan kesalahan panjang dapat dilihat sepenuhnya tanpa merusak tata letak. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) oleh @katherinehhh
- **[Alat uji terjemahan]** Menambahkan halaman pengaturan client-v2 untuk alat uji terjemahan. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) oleh @jiannx
- **[Aksi: Impor rekaman Pro]** Peningkatan dialog impor sehingga pesan kesalahan panjang dapat dilihat sepenuhnya, dan mode pemrosesan dapat dipilih langsung dari menu pengaturan v2. oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana bidang di subformulir horizontal terlalu sempit untuk menampilkan data. ([#9755](https://github.com/nocobase/nocobase/pull/9755)) oleh @zhangzhonghe
- **[client-v2]** Memperbaiki masalah di mana halaman v2 dapat terus memuat setelah masuk. ([#9738](https://github.com/nocobase/nocobase/pull/9738)) oleh @zhangzhonghe
- **[cli]** Menambahkan deteksi versi Node.js untuk lingkungan runtime nb. ([#9749](https://github.com/nocobase/nocobase/pull/9749)) oleh @chenos
- **[Aksi: Impor rekaman]** Mengubah file impor yang diunggah menjadi penyimpanan disk untuk mengurangi tekanan memori selama impor data besar. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) oleh @mytharcher
- **[Manajer Tugas Async]** Memperbaiki ID permintaan yang salah di log pekerja tugas async. ([#9686](https://github.com/nocobase/nocobase/pull/9686)) oleh @2013xile
- **[Alur Kerja]**

  - Memperbaiki penanganan waktu tunggu alur kerja sehingga eksekusi yang dibatalkan dan tugas tertundanya dapat diperbarui secara atomik. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) oleh @mytharcher
  - Memperbaiki masalah di mana bidang terakhir diperbarui oleh alur kerja tidak diperbarui setelah perubahan simpul alur kerja. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) oleh @mytharcher
- **[Manajer sumber data]**

  - Memperbaiki laci edit bidang kosong yang disebabkan oleh render ulang berulang pada halaman Konfigurasi bidang sumber data eksternal v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) oleh @katherinehhh
  - Memperbaiki masalah di mana menghapus kategori koleksi saat ini di manajer sumber data v1 dapat membuat tab Semua koleksi kosong. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) oleh @katherinehhh
- **[Manajer Cadangan]** Memperbaiki masalah keamanan di mana nama skema PostgreSQL yang tidak aman dapat diterima selama pemulihan cadangan. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) oleh @2013xile
- **[Alur Kerja: Simpul SQL]** Memperbaiki masalah di mana migrasi variabel templat lama alur kerja SQL dilewati untuk beberapa pengguna versi beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) oleh @mytharcher
- **[Blok: Kanban]** Memperbaiki dukungan URL untuk Kalender dan popup lainnya. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) oleh @jiannx
- **[Karyawan AI]**

  - Memperbaiki masalah di mana lampiran yang ditempelkan ke dialog karyawan AI tidak dapat dihapus. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) oleh @cgyrock
  - Memperbaiki hilangnya konfigurasi pesan di simpul LLM alur kerja. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) oleh @cgyrock
- **[Manajer Berkas]** Memperbaiki teks font Cina/CID yang hilang di beberapa pratinjau PDF setelah beralih ke pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) oleh @mytharcher
- **[Dokumentasi API]** Memperbaiki kegagalan build file deklarasi plugin dokumentasi API. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) oleh @katherinehhh
- **[Aksi: Impor rekaman Pro]** Menghindari penguraian file besar di simpul permintaan sebelum impor Pro membuat tugas async. oleh @mytharcher
- **[Kontrol Versi]** Menyesuaikan posisi entri pintasan atas kontrol versi sehingga muncul di sebelah editor UI di tata letak admin lama dan v2. oleh @cgyrock
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana data terkait tidak ditampilkan di formulir persetujuan v2. oleh @zhangzhonghe
