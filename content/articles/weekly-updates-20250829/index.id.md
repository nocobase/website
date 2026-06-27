---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: menambahkan tipe template inline untuk konfigurasi notifikasi dan mendukung judul tugas yang konsisten di semua node persetujuan dalam alur kerja yang sama."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.22](https://www.nocobase.com/en/blog/v1.8.22)

*Tanggal rilis: 27-08-2025*

#### 🐛 Perbaikan Bug

- **[Alur Kerja]** Memperbaiki masalah di mana popup detail tidak ditampilkan karena konfigurasi rute yang salah di pusat tugas ([#7452](https://github.com/nocobase/nocobase/pull/7452)) oleh @mytharcher

### [v1.8.21](https://www.nocobase.com/en/blog/v1.8.21)

*Tanggal rilis: 26-08-2025*

#### 🐛 Perbaikan Bug

- **[Manajer file]** Memperbaiki kesalahan saat mengedit bidang `storage` di koleksi file. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) oleh @mytharcher
- **[Alur Kerja: Node paralel]** Memperbaiki masalah di mana penentuan status yang salah di node cabang paralel di bawah mode "Jalankan semua cabang" menyebabkan penyelesaian prematur ([#7445](https://github.com/nocobase/nocobase/pull/7445)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Menambahkan variabel status untuk template kustom dalam notifikasi penyelesaian persetujuan oleh @mytharcher

### [v1.8.20](https://www.nocobase.com/en/blog/v1.8.20)

*Tanggal rilis: 25-08-2025*

#### 🚀 Peningkatan

- **[Alur Kerja]** Menyesuaikan API variabel alur kerja untuk mendukung prasetel daftar variabel tambahan ([#7439](https://github.com/nocobase/nocobase/pull/7439)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Mendukung penggunaan variabel terkait persetujuan dalam notifikasi kustom oleh @mytharcher
  - Mendukung pembaruan status persetujuan setelah node akhir menghentikan eksekusi oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana, dalam skenario tertentu, mengedit rekaman di popup pemilih rekaman seluler menyebabkan kesalahan ([#7444](https://github.com/nocobase/nocobase/pull/7444)) oleh @zhangzhonghe
  - validasi wajib tidak berfungsi untuk bidang lampiran di sub-tabel ([#7431](https://github.com/nocobase/nocobase/pull/7431)) oleh @katherinehhh
  - Memperbaiki masalah di mana ikon ditampilkan secara tidak benar ketika URL di bidang URL lampiran berisi parameter kueri ([#7432](https://github.com/nocobase/nocobase/pull/7432)) oleh @mytharcher
- **[basis data]**

  - Memperbaiki kesalahan sintaks MySQL yang terjadi saat memuat lebih banyak pesan dalam aplikasi. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) oleh @aaaaaajie
  - Memperbaiki masalah presisi untuk bidang Angka yang diekspor ([#7421](https://github.com/nocobase/nocobase/pull/7421)) oleh @aaaaaajie
- **[tidak terdefinisi]** Memperbaiki masalah pemfilteran hanya berdasarkan bidang tanggal di sumber eksternal MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) oleh @aaaaaajie
- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana impor gagal ketika kunci utama tabel adalah teks satu baris ([#7416](https://github.com/nocobase/nocobase/pull/7416)) oleh @aaaaaajie
- **[Alur Kerja]**

  - Melengkapi opsi untuk secara otomatis menghapus status eksekusi alur kerja ([#7436](https://github.com/nocobase/nocobase/pull/7436)) oleh @mytharcher
  - Memperbaiki masalah terkait menu seluler di tugas alur kerja ([#7419](https://github.com/nocobase/nocobase/pull/7419)) oleh @mytharcher
- **[Aksi: Impor rekaman Pro]** Memperbaiki hasil pembaruan yang tidak terduga saat menggunakan kunci utama string dalam impor xlsx. oleh @aaaaaajie

### [v1.8.19](https://www.nocobase.com/en/blog/v1.8.19)

*Tanggal rilis: 22-08-2025*

#### 🎉 Fitur Baru

- **[Alur Kerja: Persetujuan]** Menambahkan jenis template inline untuk konfigurasi notifikasi oleh @mytharcher

#### 🚀 Peningkatan

- **[klien]** Mendukung menampilkan ikon yang diidentifikasi oleh string di komponen Select saat dalam mode hanya-baca ([#7420](https://github.com/nocobase/nocobase/pull/7420)) oleh @mytharcher
- **[basis data]** Mengoptimalkan kinerja kueri ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) oleh @aaaaaajie
- **[Seluler]** Mengoptimalkan komponen popup seluler ([#7414](https://github.com/nocobase/nocobase/pull/7414)) oleh @zhangzhonghe

#### 🐛 Perbaikan Bug

- **[basis data]** Memperbaiki masalah di mana pembacaan tabel eksternal Postgres menyertakan tampilan dari skema lain ([#7410](https://github.com/nocobase/nocobase/pull/7410)) oleh @aaaaaajie
- **[Blok: template]** Menyelesaikan masalah di mana blok surat tidak terlihat ketika ditempatkan di dalam blok template yang diwarisi ([#7430](https://github.com/nocobase/nocobase/pull/7430)) oleh @gchust
- **[Aksi: Impor rekaman Pro]** Melarang penugasan bidang relasi selama deteksi duplikat impor. oleh @aaaaaajie
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana daftar pengguna kosong selama penandatanganan bersama oleh @mytharcher
- **[Manajer migrasi]** Melewati perintah `\restrict` dan `\unrestrict` yang dihasilkan oleh pg_dump terbaru saat membuat file migrasi untuk mengatasi kesalahan pemulihan. oleh @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.6](https://www.nocobase.com/en/blog/v1.9.0-beta.6)

*Tanggal rilis: 22-08-2025*

#### 🎉 Fitur Baru

- **[klien]** Menambahkan opsi "Fokus otomatis" untuk komponen Input, TextArea, URL, dan InputNumber yang secara otomatis memfokuskan bidang input selama rendering halaman awal ketika diaktifkan ([#7320](https://github.com/nocobase/nocobase/pull/7320)) oleh @zhangzhonghe
- **[Manajer tugas asinkron]** Mendukung pemisahan layanan tugas asinkron berdasarkan env dan antrian peristiwa ([#7241](https://github.com/nocobase/nocobase/pull/7241)) oleh @mytharcher
- **[Pratinjau File Office]** Mendukung pratinjau file Office melalui pratinjau langsung Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) oleh @mytharcher
- **[Auth: SAML 2.0]** Menambahkan opsi konfigurasi terkait tanda tangan oleh @2013xile
- **[Alur Kerja: Persetujuan]**

  - Menambahkan jenis template inline untuk konfigurasi notifikasi oleh @mytharcher
  - Mendukung penggunaan judul tugas yang konsisten untuk semua node persetujuan dalam alur kerja yang sama oleh @mytharcher

#### 🚀 Peningkatan

- **[basis data]** Mengoptimalkan kinerja kueri ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) oleh @aaaaaajie
- **[klien]**

  - Mendukung menampilkan ikon yang diidentifikasi oleh string di komponen Select saat dalam mode hanya-baca ([#7420](https://github.com/nocobase/nocobase/pull/7420)) oleh @mytharcher
  - menambahkan dukungan variabel tanggal "kemarin lusa" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) oleh @katherinehhh
  - Mengoptimalkan kinerja saat mengganti tab popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) oleh @zhangzhonghe
  - Tidak menutup menu secara otomatis setelah pemilihan ([#7252](https://github.com/nocobase/nocobase/pull/7252)) oleh @kerwin612
- **[Seluler]** Mengoptimalkan komponen popup seluler ([#7414](https://github.com/nocobase/nocobase/pull/7414)) oleh @zhangzhonghe
- **[Alur Kerja]**

  - Memperbarui menu pemilihan node untuk menampilkan opsi dalam tata letak dua kolom untuk meningkatkan kepadatan informasi dan memungkinkan pengguna melihat lebih banyak opsi sekaligus ([#7396](https://github.com/nocobase/nocobase/pull/7396)) oleh @mytharcher
  - Memperbaiki kasus uji yang tidak stabil ([#7349](https://github.com/nocobase/nocobase/pull/7349)) oleh @mytharcher
  - Menampilkan judul normal ketika dinonaktifkan ([#7339](https://github.com/nocobase/nocobase/pull/7339)) oleh @mytharcher
  - Mengurangi jumlah pekerjaan yang dimuat saat mempersiapkan eksekusi ([#7284](https://github.com/nocobase/nocobase/pull/7284)) oleh @mytharcher
- **[Pengaturan lisensi]** Dalam pengaturan lisensi, salin ID Instance terbaru setiap kali ([#7387](https://github.com/nocobase/nocobase/pull/7387)) oleh @jiannx
- **[Otentikasi]** Menghapus parameter token dari URL setelah masuk berhasil ([#7386](https://github.com/nocobase/nocobase/pull/7386)) oleh @2013xile
- **[Notifikasi: Pesan dalam aplikasi]**

  - Hapus log SQL yang dikeluarkan melalui `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) oleh @2013xile
  - Mengubah pesan dalam aplikasi dari SSE menjadi WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) oleh @mytharcher
- **[Pratinjau File Office]** Menambahkan dukungan untuk pratinjau file `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) oleh @mytharcher
- **[Aksi: Impor rekaman Pro]** Mendukung pemisahan layanan impor/ekspor berdasarkan env dan antrian peristiwa oleh @mytharcher
- **[Alur Kerja: JavaScript]** Mengubah cache menjadi cache aplikasi untuk menghindari bug dalam mode kluster oleh @mytharcher
- **[Cetak template]** mendukung array bidang m2m oleh @jiannx
- **[Manajer cadangan]** meningkatkan kinerja untuk operasi pencadangan basis data mysql oleh @gchust
- **[Auth: DingTalk]** Di klien DingTalk, atur judul bilah navigasi menjadi string kosong alih-alih menampilkan "Memuat…" oleh @2013xile
- **[Manajer migrasi]** Mendukung pemisahan layanan migrasi berdasarkan env dan antrian peristiwa oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana ikon ditampilkan secara tidak benar ketika URL di bidang URL lampiran berisi parameter kueri ([#7432](https://github.com/nocobase/nocobase/pull/7432)) oleh @mytharcher
  - memperlakukan angka 0 sebagai kosong selama validasi kosong aturan tautan ([#7404](https://github.com/nocobase/nocobase/pull/7404)) oleh @katherinehhh
  - Memperbaiki teks tombol tautan yang memutus baris ([#7406](https://github.com/nocobase/nocobase/pull/7406)) oleh @mytharcher
  - Memperbaiki masalah di mana tata letak formulir multi-kolom tidak berubah menjadi tata letak satu kolom pada perangkat seluler ([#7355](https://github.com/nocobase/nocobase/pull/7355)) oleh @zhangzhonghe
  - Memperbaiki kesalahan hapus koleksi massal ([#7345](https://github.com/nocobase/nocobase/pull/7345)) oleh @aaaaaajie
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
- **[basis data]** Memperbaiki masalah di mana pembacaan tabel eksternal Postgres menyertakan tampilan dari skema lain ([#7410](https://github.com/nocobase/nocobase/pull/7410)) oleh @aaaaaajie
- **[server]** Beberapa permintaan tidak memiliki `ctx.action`, menyebabkan kesalahan di middleware log audit ([#7369](https://github.com/nocobase/nocobase/pull/7369)) oleh @2013xile
- **[tidak terdefinisi]** Menambahkan plugin baru ke prasetel ([#7319](https://github.com/nocobase/nocobase/pull/7319)) oleh @mytharcher
- **[utils]** penanganan zona waktu yang salah untuk parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) oleh @katherinehhh
- **[Blok: template]** Menyelesaikan masalah di mana blok surat tidak terlihat ketika ditempatkan di dalam blok template yang diwarisi ([#7430](https://github.com/nocobase/nocobase/pull/7430)) oleh @gchust
- **[Seluler]**

  - format tampilan bidang tanggal yang salah di seluler ([#7412](https://github.com/nocobase/nocobase/pull/7412)) oleh @katherinehhh
  - Memperbaiki masalah di mana data pengiriman formulir di dialog persetujuan seluler salah ([#7389](https://github.com/nocobase/nocobase/pull/7389)) oleh @zhangzhonghe
  - Menyelesaikan masalah di mana pemilih tanggal pada perangkat seluler ditampilkan secara tidak benar ketika batas rentang tanggal diterapkan ([#7362](https://github.com/nocobase/nocobase/pull/7362)) oleh @katherinehhh
- **[Alur Kerja]**

  - Memperbaiki kesalahan yang muncul dan data formulir menghilang saat mengedit kategori alur kerja ([#7408](https://github.com/nocobase/nocobase/pull/7408)) oleh @mytharcher
  - Memperbaiki terjemahan judul halaman di pusat tugas alur kerja ([#7392](https://github.com/nocobase/nocobase/pull/7392)) oleh @mytharcher
  - Memfaktorkan ulang menu "Tambah Node" dan memperbaiki masalah kinerja rendering kanvas alur kerja yang disebabkannya ([#7363](https://github.com/nocobase/nocobase/pull/7363)) oleh @mytharcher
  - Memperbaiki masalah kondisi filter yang salah saat mengambil satu item tugas ([#7366](https://github.com/nocobase/nocobase/pull/7366)) oleh @mytharcher
  - Memperbaiki masalah pencocokan kata kunci di pilih bidang ([#7356](https://github.com/nocobase/nocobase/pull/7356)) oleh @mytharcher
  - Menghindari kesalahan yang muncul karena mempublikasikan ke antrian peristiwa saat berhenti ([#7348](https://github.com/nocobase/nocobase/pull/7348)) oleh @mytharcher
  - Memperbaiki hasil `undefined` ketika prosesor keluar ([#7317](https://github.com/nocobase/nocobase/pull/7317)) oleh @mytharcher
  - Memperbaiki masalah BigInt ID di MySQL saat menyimpan pekerjaan ([#7292](https://github.com/nocobase/nocobase/pull/7292)) oleh @mytharcher
- **[Alur Kerja: node mailer]** Memperbaiki masalah di mana node email mungkin tidak melanjutkan eksekusi dengan benar ([#7409](https://github.com/nocobase/nocobase/pull/7409)) oleh @mytharcher
- **[Pratinjau File Office]**

  - Memperbaiki kesalahan yang muncul saat mengunggah file ke bidang URL lampiran ([#7405](https://github.com/nocobase/nocobase/pull/7405)) oleh @mytharcher
  - Mendukung file `.docx`, `.xlsx`, dan `.pptx` dengan hanya URL untuk dipratinjau ([#7336](https://github.com/nocobase/nocobase/pull/7336)) oleh @mytharcher
- **[Manajer file]**

  - Hapus petunjuk untuk batas ukuran unggah file ([#7391](https://github.com/nocobase/nocobase/pull/7391)) oleh @mytharcher
  - Menambahkan bidang `storageId` ke koleksi file untuk mendukung konfigurasi izin ([#7351](https://github.com/nocobase/nocobase/pull/7351)) oleh @mytharcher
  - Memperbaiki izin bidang penyimpanan ([#7316](https://github.com/nocobase/nocobase/pull/7316)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]**

  - Memperbaiki terjemahan ([#7384](https://github.com/nocobase/nocobase/pull/7384)) oleh @mytharcher
  - Memperbaiki masalah di mana pesan dalam situs diterima tetapi tidak ditampilkan di popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) oleh @mytharcher
- **[Kalender]** tooltip item acara kalender menampilkan [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) oleh @katherinehhh
- **[Bidang koleksi: Rumus]** Memperbaiki masalah di mana input rumus tidak dapat melewati validasi karena tipe variabel ([#7373](https://github.com/nocobase/nocobase/pull/7373)) oleh @mytharcher
- **[Alur Kerja: Node paralel]** Memperbaiki penangguhan node paralel setelah dilanjutkan di bawah MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) oleh @mytharcher
- **[Alur Kerja: CC]** Memperbaiki blok yang tidak dapat dihapus ([#7338](https://github.com/nocobase/nocobase/pull/7338)) oleh @mytharcher
- **[Visualisasi data]** masalah variabel tanggal di nilai default bidang tanggal di blok filter bagan ([#7291](https://github.com/nocobase/nocobase/pull/7291)) oleh @katherinehhh
- **[Koleksi: Pohon]** Memperbaiki logika sinkronisasi jalur koleksi pohon ([#7330](https://github.com/nocobase/nocobase/pull/7330)) oleh @ChimingLiu
- **[Alur Kerja: Node permintaan HTTP]** Memperbaiki bug kondisi balapan ([#7310](https://github.com/nocobase/nocobase/pull/7310)) oleh @mytharcher
- **[Alur Kerja: Node perhitungan dinamis]** Memperbaiki API lama yang menyebabkan kesalahan ([#7321](https://github.com/nocobase/nocobase/pull/7321)) oleh @mytharcher
- **[Aksi: Ekspor rekaman]** Memperbaiki pemformatan bidang relasi bersarang yang salah saat mengekspor ke Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) oleh @aaaaaajie
- **[Aksi: Impor rekaman Pro]** Melarang penugasan bidang relasi selama deteksi duplikat impor. oleh @aaaaaajie
- **[Sumber data: SQL Server Eksternal]** Memperbaiki format penyimpanan yang tidak konsisten untuk bidang datetime MSSQL (tanpa zona waktu) dari sumber data eksternal oleh @aaaaaajie
- **[Alur Kerja: Peristiwa aksi kustom]** Menghapus baris yang dipilih setelah berhasil memicu aksi pada beberapa rekaman oleh @mytharcher
- **[Alur Kerja: Subalur]** Memperbaiki alur yang ditangguhkan oleh @mytharcher
- **[Cetak template]** Pencetakan bidang pilih-radio dalam beberapa baris data oleh @jiannx
- **[Penyimpanan file: S3(Pro)]**

  - Memperbaiki masalah di mana metode otentikasi IAM tidak dapat digunakan untuk mengunggah file oleh @mytharcher
  - Menghentikan penggunaan parameter bermasalah `attachmentField` oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana memuat data sumber data eksternal dalam rekaman persetujuan menghasilkan kesalahan 404 oleh @mytharcher
  - Menambahkan judul tugas untuk item yang ditambahkan dan didelegasikan oleh @mytharcher
  - Memperbaiki kesalahan yang muncul dari pemilih penerima tugas di dalam sumber data eksternal oleh @mytharcher
  - Memperbaiki masalah di mana daftar pengguna kosong selama penandatanganan bersama oleh @mytharcher
  - Memperbaiki pembaruan asosiasi saat mengirimkan draf oleh @mytharcher
  - Memperbaiki aturan tautan yang tidak berfungsi di blok detail asli persetujuan oleh @mytharcher
- **[Manajer cadangan]** pencadangan file besar dapat menampilkan "berhasil" sebelum benar-benar selesai oleh @gchust
- **[Manajer migrasi]** Melewati perintah `\restrict` dan `\unrestrict` yang dihasilkan oleh pg_dump terbaru saat membuat file migrasi untuk mengatasi kesalahan pemulihan. oleh @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.12](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Tanggal rilis: 22-08-2025*

#### 🎉 Fitur Baru

- **[klien]** Mendukung aturan validasi bidang ([#7297](https://github.com/nocobase/nocobase/pull/7297)) oleh @aaaaaajie
- **[Alur Kerja: Persetujuan]**

  - Menambahkan jenis template inline untuk konfigurasi notifikasi oleh @mytharcher
  - Mendukung penggunaan judul tugas yang konsisten untuk semua node persetujuan dalam alur kerja yang sama oleh @mytharcher

#### 🚀 Peningkatan

- **[basis data]** Mengoptimalkan kinerja kueri ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) oleh @aaaaaajie
- **[klien]** Mendukung menampilkan ikon yang diidentifikasi oleh string di komponen Select saat dalam mode hanya-baca ([#7420](https://github.com/nocobase/nocobase/pull/7420)) oleh @mytharcher
- **[Seluler]** Mengoptimalkan komponen popup seluler ([#7414](https://github.com/nocobase/nocobase/pull/7414)) oleh @zhangzhonghe
- **[Alur Kerja]** Memperbarui menu pemilihan node untuk menampilkan opsi dalam tata letak dua kolom untuk meningkatkan kepadatan informasi dan memungkinkan pengguna melihat lebih banyak opsi sekaligus ([#7396](https://github.com/nocobase/nocobase/pull/7396)) oleh @mytharcher
- **[Pengaturan lisensi]** Dalam pengaturan lisensi, salin ID Instance terbaru setiap kali ([#7387](https://github.com/nocobase/nocobase/pull/7387)) oleh @jiannx
- **[Notifikasi: Pesan dalam aplikasi]** Hapus log SQL yang dikeluarkan melalui `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) oleh @2013xile
- **[Otentikasi]** Menghapus parameter token dari URL setelah masuk berhasil ([#7386](https://github.com/nocobase/nocobase/pull/7386)) oleh @2013xile
- **[Cetak template]** mendukung array bidang m2m oleh @jiannx

#### 🐛 Perbaikan Bug

- **[basis data]** Memperbaiki masalah di mana pembacaan tabel eksternal Postgres menyertakan tampilan dari skema lain ([#7410](https://github.com/nocobase/nocobase/pull/7410)) oleh @aaaaaajie
- **[klien]**

  - memperlakukan angka 0 sebagai kosong selama validasi kosong aturan tautan ([#7404](https://github.com/nocobase/nocobase/pull/7404)) oleh @katherinehhh
  - Memperbaiki masalah di mana tombol "Pengaturan kolom" memuat kolom dari tabel di dalam dialog modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) oleh @kerwin612
  - Memperbaiki teks tombol tautan yang memutus baris ([#7406](https://github.com/nocobase/nocobase/pull/7406)) oleh @mytharcher
- **[server]** Beberapa permintaan tidak memiliki `ctx.action`, menyebabkan kesalahan di middleware log audit ([#7369](https://github.com/nocobase/nocobase/pull/7369)) oleh @2013xile
- **[Blok: template]** Menyelesaikan masalah di mana blok surat tidak terlihat ketika ditempatkan di dalam blok template yang diwarisi ([#7430](https://github.com/nocobase/nocobase/pull/7430)) oleh @gchust
- **[Alur Kerja: node mailer]** Memperbaiki masalah di mana node email mungkin tidak melanjutkan eksekusi dengan benar ([#7409](https://github.com/nocobase/nocobase/pull/7409)) oleh @mytharcher
- **[Seluler]**

  - format tampilan bidang tanggal yang salah di seluler ([#7412](https://github.com/nocobase/nocobase/pull/7412)) oleh @katherinehhh
  - Memperbaiki masalah di mana data pengiriman formulir di dialog persetujuan seluler salah ([#7389](https://github.com/nocobase/nocobase/pull/7389)) oleh @zhangzhonghe
- **[Alur Kerja]**

  - Memperbaiki kesalahan yang muncul dan data formulir menghilang saat mengedit kategori alur kerja ([#7408](https://github.com/nocobase/nocobase/pull/7408)) oleh @mytharcher
  - Memperbaiki terjemahan judul halaman di pusat tugas alur kerja ([#7392](https://github.com/nocobase/nocobase/pull/7392)) oleh @mytharcher
- **[Pratinjau File Office]** Memperbaiki kesalahan yang muncul saat mengunggah file ke bidang URL lampiran ([#7405](https://github.com/nocobase/nocobase/pull/7405)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki terjemahan ([#7384](https://github.com/nocobase/nocobase/pull/7384)) oleh @mytharcher
- **[Bidang koleksi: Rumus]** Memperbaiki masalah di mana input rumus tidak dapat melewati validasi karena tipe variabel ([#7373](https://github.com/nocobase/nocobase/pull/7373)) oleh @mytharcher
- **[Manajer file]** Hapus petunjuk untuk batas ukuran unggah file ([#7391](https://github.com/nocobase/nocobase/pull/7391)) oleh @mytharcher
- **[Kalender]** tooltip item acara kalender menampilkan [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) oleh @katherinehhh
- **[Aksi: Impor rekaman Pro]** Melarang penugasan bidang relasi selama deteksi duplikat impor. oleh @aaaaaajie
- **[Alur Kerja: Peristiwa aksi kustom]** Menghapus baris yang dipilih setelah berhasil memicu aksi pada beberapa rekaman oleh @mytharcher
- **[Cetak template]** Pencetakan bidang pilih-radio dalam beberapa baris data oleh @jiannx
- **[Penyimpanan file: S3(Pro)]**

  - Menghentikan penggunaan parameter bermasalah `attachmentField` oleh @mytharcher
  - Memperbaiki masalah di mana metode otentikasi IAM tidak dapat digunakan untuk mengunggah file oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana memuat data sumber data eksternal dalam rekaman persetujuan menghasilkan kesalahan 404 oleh @mytharcher
  - Memperbaiki masalah di mana daftar pengguna kosong selama penandatanganan bersama oleh @mytharcher
- **[Manajer cadangan]** pencadangan file besar dapat menampilkan "berhasil" sebelum benar-benar selesai oleh @gchust
- **[Manajer migrasi]** Melewati perintah `\restrict` dan `\unrestrict` yang dihasilkan oleh pg_dump terbaru saat membuat file migrasi untuk mengatasi kesalahan pemulihan. oleh @2013xile
