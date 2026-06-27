---
title: "NocoBase v1.9.0-beta.6: Dukungan untuk memisahkan layanan tugas asinkron berdasarkan env dan antrian acara"
description: "Catatan Rilis v1.9.0-beta.6"
---

### 🎉 Fitur Baru

- **[client]** Menambahkan opsi "Fokus Otomatis" untuk komponen Input, TextArea, URL, dan InputNumber yang secara otomatis memfokuskan bidang input saat rendering halaman awal jika diaktifkan ([#7320](https://github.com/nocobase/nocobase/pull/7320)) oleh @zhangzhonghe
- **[Manajer tugas asinkron]** Mendukung pemisahan layanan tugas asinkron berdasarkan env dan antrian peristiwa ([#7241](https://github.com/nocobase/nocobase/pull/7241)) oleh @mytharcher
- **[Penampil File Office]** Mendukung pratinjau file Office melalui pratinjau langsung Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) oleh @mytharcher
- **[Auth: SAML 2.0]** Menambahkan opsi konfigurasi terkait tanda tangan oleh @2013xile
- **[Workflow: Persetujuan]**

  - Menambahkan jenis template inline untuk konfigurasi notifikasi oleh @mytharcher
  - Mendukung penggunaan judul tugas yang konsisten untuk semua node persetujuan dalam workflow yang sama oleh @mytharcher

### 🚀 Peningkatan

- **[database]** Mengoptimalkan kinerja kueri ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) oleh @aaaaaajie
- **[client]**

  - Mendukung menampilkan ikon yang diidentifikasi oleh string di komponen Select saat dalam mode hanya-baca ([#7420](https://github.com/nocobase/nocobase/pull/7420)) oleh @mytharcher
  - Menambahkan dukungan variabel tanggal "kemarin lusa" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) oleh @katherinehhh
  - Mengoptimalkan kinerja saat mengganti tab popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) oleh @zhangzhonghe
  - Tidak menutup menu secara otomatis setelah pemilihan ([#7252](https://github.com/nocobase/nocobase/pull/7252)) oleh @kerwin612
- **[Mobile]** Mengoptimalkan komponen popup seluler ([#7414](https://github.com/nocobase/nocobase/pull/7414)) oleh @zhangzhonghe
- **[Workflow]**

  - Memperbarui menu pemilihan node untuk menampilkan opsi dalam tata letak dua kolom guna meningkatkan kepadatan informasi dan memungkinkan pengguna melihat lebih banyak opsi sekaligus ([#7396](https://github.com/nocobase/nocobase/pull/7396)) oleh @mytharcher
  - Memperbaiki kasus uji yang tidak stabil ([#7349](https://github.com/nocobase/nocobase/pull/7349)) oleh @mytharcher
  - Menampilkan judul normal saat dinonaktifkan ([#7339](https://github.com/nocobase/nocobase/pull/7339)) oleh @mytharcher
  - Mengurangi jumlah pekerjaan yang dimuat saat mempersiapkan eksekusi ([#7284](https://github.com/nocobase/nocobase/pull/7284)) oleh @mytharcher
- **[Pengaturan lisensi]** Di pengaturan lisensi, salin ID Instance terbaru setiap kali ([#7387](https://github.com/nocobase/nocobase/pull/7387)) oleh @jiannx
- **[Autentikasi]** Menghapus parameter token dari URL setelah berhasil masuk ([#7386](https://github.com/nocobase/nocobase/pull/7386)) oleh @2013xile
- **[Notifikasi: Pesan dalam aplikasi]**

  - Menghapus output log SQL melalui `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) oleh @2013xile
  - Mengubah pesan dalam aplikasi dari SSE menjadi WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) oleh @mytharcher
- **[Penampil File Office]** Menambahkan dukungan untuk pratinjau file `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) oleh @mytharcher
- **[Aksi: Impor catatan Pro]** Mendukung pemisahan layanan impor/ekspor berdasarkan env dan antrian peristiwa oleh @mytharcher
- **[Workflow: JavaScript]** Mengubah cache menjadi cache aplikasi untuk menghindari bug dalam mode kluster oleh @mytharcher
- **[Cetak template]** mendukung array bidang m2m oleh @jiannx
- **[Manajer cadangan]** meningkatkan kinerja untuk operasi pencadangan basis data mysql oleh @gchust
- **[Auth: DingTalk]** Di klien DingTalk, atur judul bilah navigasi menjadi string kosong, bukan menampilkan "Memuat…" oleh @2013xile
- **[Manajer migrasi]** Mendukung pemisahan layanan migrasi berdasarkan env dan antrian peristiwa oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana ikon ditampilkan salah saat URL di bidang URL lampiran berisi parameter kueri ([#7432](https://github.com/nocobase/nocobase/pull/7432)) oleh @mytharcher
  - memperlakukan angka 0 sebagai kosong selama validasi kosong aturan tautan ([#7404](https://github.com/nocobase/nocobase/pull/7404)) oleh @katherinehhh
  - Memperbaiki teks tombol tautan yang memutus baris ([#7406](https://github.com/nocobase/nocobase/pull/7406)) oleh @mytharcher
  - Memperbaiki masalah di mana tata letak formulir multi-kolom tidak berubah menjadi tata letak satu kolom di perangkat seluler ([#7355](https://github.com/nocobase/nocobase/pull/7355)) oleh @zhangzhonghe
  - Memperbaiki kesalahan penghapusan koleksi massal ([#7345](https://github.com/nocobase/nocobase/pull/7345)) oleh @aaaaaajie
  - Memperbaiki masalah di mana cakupan data yang disimpan sebelumnya tidak dipilih sebelumnya saat mengonfigurasi izin secara individual. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) oleh @aaaaaajie
  - Memperbaiki masalah di mana string mentah variabel dikirimkan dengan formulir ([#7337](https://github.com/nocobase/nocobase/pull/7337)) oleh @zhangzhonghe
  - Saat menggunakan variabel untuk menetapkan nilai default bidang di formulir filter, jika nilai variabel kosong, kotak input akan menampilkan string variabel asli ([#7335](https://github.com/nocobase/nocobase/pull/7335)) oleh @zhangzhonghe
  - Memperbaiki tooltip yang menampilkan [object Object] saat diarahkan di panel aksi ([#7322](https://github.com/nocobase/nocobase/pull/7322)) oleh @katherinehhh
  - Memperbaiki masalah loop tak terbatas saat mengurai nilai default bidang ([#7301](https://github.com/nocobase/nocobase/pull/7301)) oleh @zhangzhonghe
  - Memperbaiki item pratinjau file pada url null ([#7315](https://github.com/nocobase/nocobase/pull/7315)) oleh @mytharcher
  - Memperbaiki masalah di mana tabel pohon tidak dapat diperluas ([#7309](https://github.com/nocobase/nocobase/pull/7309)) oleh @zhangzhonghe
  - Menambahkan URL lengkap ke file lokal saat pratinjau ([#7314](https://github.com/nocobase/nocobase/pull/7314)) oleh @mytharcher
  - Memperbaiki perilaku tak terduga dalam pengurutan seret dan lepas baris tabel ([#6959](https://github.com/nocobase/nocobase/pull/6959)) oleh @ChimingLiu
  - masalah tampilan bidang tanggal di popup pemilih data bidang asosiasi formulir filter ([#7290](https://github.com/nocobase/nocobase/pull/7290)) oleh @katherinehhh
- **[database]** Memperbaiki masalah di mana pembacaan tabel eksternal Postgres menyertakan tampilan dari skema lain ([#7410](https://github.com/nocobase/nocobase/pull/7410)) oleh @aaaaaajie
- **[server]** Beberapa permintaan kekurangan `ctx.action`, menyebabkan kesalahan di middleware log audit ([#7369](https://github.com/nocobase/nocobase/pull/7369)) oleh @2013xile
- **[undefined]** Menambahkan plugin baru ke preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) oleh @mytharcher
- **[utils]** penanganan zona waktu yang salah untuk parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) oleh @katherinehhh
- **[Blok: template]** Menyelesaikan masalah di mana blok surat tidak terlihat saat ditempatkan di dalam blok template yang diwarisi ([#7430](https://github.com/nocobase/nocobase/pull/7430)) oleh @gchust
- **[Mobile]**

  - format tampilan bidang tanggal yang salah di perangkat seluler ([#7412](https://github.com/nocobase/nocobase/pull/7412)) oleh @katherinehhh
  - Memperbaiki masalah di mana data pengiriman formulir di dialog persetujuan seluler salah ([#7389](https://github.com/nocobase/nocobase/pull/7389)) oleh @zhangzhonghe
  - Menyelesaikan masalah di mana pemilih tanggal di perangkat seluler ditampilkan salah saat batas rentang tanggal diterapkan ([#7362](https://github.com/nocobase/nocobase/pull/7362)) oleh @katherinehhh
- **[Workflow]**

  - Memperbaiki kesalahan yang muncul dan data formulir menghilang saat mengedit kategori workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) oleh @mytharcher
  - Memperbaiki terjemahan judul halaman di pusat tugas workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) oleh @mytharcher
  - Memperbarui menu "Tambah Node" dan memperbaiki masalah kinerja rendering kanvas workflow yang disebabkannya ([#7363](https://github.com/nocobase/nocobase/pull/7363)) oleh @mytharcher
  - Memperbaiki masalah kondisi filter yang salah saat mengambil satu item tugas ([#7366](https://github.com/nocobase/nocobase/pull/7366)) oleh @mytharcher
  - Memperbaiki masalah pencocokan kata kunci di pemilih bidang ([#7356](https://github.com/nocobase/nocobase/pull/7356)) oleh @mytharcher
  - Menghindari kesalahan yang muncul karena mempublikasikan ke antrian peristiwa saat berhenti ([#7348](https://github.com/nocobase/nocobase/pull/7348)) oleh @mytharcher
  - Memperbaiki hasil `undefined` saat prosesor keluar ([#7317](https://github.com/nocobase/nocobase/pull/7317)) oleh @mytharcher
  - Memperbaiki masalah ID BigInt di MySQL saat menyimpan pekerjaan ([#7292](https://github.com/nocobase/nocobase/pull/7292)) oleh @mytharcher
- **[Workflow: node pengirim surat]** Memperbaiki masalah di mana node email mungkin tidak melanjutkan eksekusi dengan benar ([#7409](https://github.com/nocobase/nocobase/pull/7409)) oleh @mytharcher
- **[Penampil File Office]**

  - Memperbaiki kesalahan yang muncul saat mengunggah file ke bidang URL lampiran ([#7405](https://github.com/nocobase/nocobase/pull/7405)) oleh @mytharcher
  - Mendukung file `.docx`, `.xlsx` dan `.pptx` dengan hanya URL untuk dipratinjau ([#7336](https://github.com/nocobase/nocobase/pull/7336)) oleh @mytharcher
- **[Manajer file]**

  - Menghapus petunjuk untuk batas ukuran unggah file ([#7391](https://github.com/nocobase/nocobase/pull/7391)) oleh @mytharcher
  - Menambahkan bidang `storageId` ke koleksi file untuk mendukung konfigurasi izin ([#7351](https://github.com/nocobase/nocobase/pull/7351)) oleh @mytharcher
  - Memperbaiki izin bidang penyimpanan ([#7316](https://github.com/nocobase/nocobase/pull/7316)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]**

  - Memperbaiki terjemahan ([#7384](https://github.com/nocobase/nocobase/pull/7384)) oleh @mytharcher
  - Memperbaiki masalah di mana pesan dalam situs diterima tetapi tidak ditampilkan di popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) oleh @mytharcher
- **[Kalender]** tooltip item acara kalender menampilkan [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) oleh @katherinehhh
- **[Bidang koleksi: Rumus]** Memperbaiki masalah di mana input rumus tidak dapat melewati validasi karena tipe variabel ([#7373](https://github.com/nocobase/nocobase/pull/7373)) oleh @mytharcher
- **[Workflow: Node paralel]** Memperbaiki node paralel yang ditangguhkan setelah dilanjutkan di MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) oleh @mytharcher
- **[Workflow: CC]** Memperbaiki blok yang tidak dapat dihapus ([#7338](https://github.com/nocobase/nocobase/pull/7338)) oleh @mytharcher
- **[Visualisasi data]** masalah variabel tanggal di nilai default bidang tanggal di blok filter bagan ([#7291](https://github.com/nocobase/nocobase/pull/7291)) oleh @katherinehhh
- **[Koleksi: Pohon]** Memperbaiki logika sinkronisasi jalur koleksi pohon ([#7330](https://github.com/nocobase/nocobase/pull/7330)) oleh @ChimingLiu
- **[Workflow: Node permintaan HTTP]** Memperbaiki bug kondisi balapan ([#7310](https://github.com/nocobase/nocobase/pull/7310)) oleh @mytharcher
- **[Workflow: Node perhitungan dinamis]** Memperbaiki kesalahan yang disebabkan oleh API lama ([#7321](https://github.com/nocobase/nocobase/pull/7321)) oleh @mytharcher
- **[Aksi: Ekspor catatan]** Memperbaiki pemformatan bidang relasional bersarang yang salah saat mengekspor ke Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) oleh @aaaaaajie
- **[Aksi: Impor catatan Pro]** Melarang penugasan bidang relasi selama deteksi duplikat impor. oleh @aaaaaajie
- **[Sumber data: SQL Server Eksternal]** Memperbaiki format penyimpanan yang tidak konsisten untuk bidang datetime MSSQL (tanpa zona waktu) dari sumber data eksternal oleh @aaaaaajie
- **[Workflow: Peristiwa aksi kustom]** Membersihkan baris yang dipilih setelah berhasil memicu aksi pada beberapa catatan oleh @mytharcher
- **[Workflow: Subflow]** Memperbaiki aliran yang ditangguhkan oleh @mytharcher
- **[Cetak template]** Pencetakan bidang pilih radio di beberapa baris data oleh @jiannx
- **[Penyimpanan file: S3(Pro)]**

  - Memperbaiki masalah di mana metode autentikasi IAM tidak dapat digunakan untuk mengunggah file oleh @mytharcher
  - Menghentikan penggunaan parameter bermasalah `attachmentField` oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Memperbaiki masalah di mana memuat data sumber data eksternal di catatan persetujuan menghasilkan kesalahan 404 oleh @mytharcher
  - Menambahkan judul tugas untuk item yang ditambahkan dan didelegasikan oleh @mytharcher
  - Memperbaiki kesalahan yang muncul dari pemilih penerima tugas di dalam sumber data eksternal oleh @mytharcher
  - Memperbaiki masalah di mana daftar pengguna kosong selama penandatanganan bersama oleh @mytharcher
  - Memperbaiki pembaruan asosiasi saat mengirimkan draf oleh @mytharcher
  - Memperbaiki aturan tautan yang tidak berfungsi di blok detail asli persetujuan oleh @mytharcher
- **[Manajer cadangan]** pencadangan file besar dapat menampilkan "berhasil" sebelum benar-benar selesai oleh @gchust
- **[Manajer migrasi]** Melewati perintah `\restrict` dan `\unrestrict` yang dihasilkan oleh pg_dump terbaru saat membuat file migrasi untuk mengatasi kesalahan pemulihan. oleh @2013xile
