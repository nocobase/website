---
title: "NocoBase v1.7.0-alpha.11: dukungan variabel di sisi kiri kondisi aturan keterkaitan"
description: "Catatan Rilis v1.7.0-alpha.11"
---

### 🎉 Fitur Baru

- **[client]** Mendukung variabel di sisi kiri kondisi aturan tautan ([#6609](https://github.com/nocobase/nocobase/pull/6609)) oleh @katherinehhh

- **[Departments]** Membuat plugin Departemen, URL Lampiran, dan pesan respons Workflow menjadi gratis ([#6663](https://github.com/nocobase/nocobase/pull/6663)) oleh @chenos

- **[Aksi: Pembaruan massal]**
  - Mendukung penyegaran data di blok data lain setelah memperbarui data di suatu blok ([#6591](https://github.com/nocobase/nocobase/pull/6591)) oleh @zhangzhonghe

  - Mendukung penyegaran data di blok data lain setelah memperbarui data di suatu blok ([#6591](https://github.com/nocobase/nocobase/pull/6591)) oleh @zhangzhonghe

- **[Penyimpanan skema UI]** Menambahkan modul lokalisasi untuk UISchema, memungkinkan terjemahan kustom untuk judul dan deskripsi skema ([#6574](https://github.com/nocobase/nocobase/pull/6574)) oleh @chenos

- **[Blok: Panel aksi]** menambahkan callback onScanSuccess untuk menangani pemindaian yang berhasil dan keluar dari UI kamera. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) oleh @sheldon66

- **[Bidang koleksi: Kode]** Menambahkan antarmuka kode oleh @mytharcher

- **[Workflow: node perhitungan tanggal]** Menambahkan fungsi `changeTimezone` untuk mengubah nilai zona waktu guna pemformatan oleh @mytharcher

- **[Cetak template]** Mendukung rendering gambar dinamis dan barcode dalam template dokumen. oleh @sheldon66

### 🚀 Peningkatan

- **[client]**
  - Menambahkan API penundaan untuk skenario yang terbuka tanpa penundaan ([#6681](https://github.com/nocobase/nocobase/pull/6681)) oleh @mytharcher

  - mendukung rekaman tabel yang dipilih dalam permintaan kustom ([#6647](https://github.com/nocobase/nocobase/pull/6647)) oleh @katherinehhh

  - Menambahkan API fallback tipe default untuk `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) oleh @mytharcher

  - Mengoptimalkan prompt untuk halaman yang belum dikonfigurasi ([#6641](https://github.com/nocobase/nocobase/pull/6641)) oleh @zhangzhonghe

  - Mendukung pencarian bidang di komponen Filter ([#6627](https://github.com/nocobase/nocobase/pull/6627)) oleh @mytharcher

  - Menambahkan API `trim` untuk `Input` dan `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) oleh @mytharcher

  - Menentukan apakah akan menampilkan komponen seluler berdasarkan jenis perangkat, bukan lebar halaman ([#6611](https://github.com/nocobase/nocobase/pull/6611)) oleh @zhangzhonghe

  - Menentukan apakah akan menampilkan tata letak seluler berdasarkan jenis perangkat, bukan lebar halaman ([#6600](https://github.com/nocobase/nocobase/pull/6600)) oleh @zhangzhonghe

  - mendukung konfigurasi visibilitas titik dua pada label bidang formulir berdasarkan tata letak ([#6561](https://github.com/nocobase/nocobase/pull/6561)) oleh @katherinehhh

- **[create-nocobase-app]** Memutakhirkan beberapa dependensi ke versi terbaru ([#6673](https://github.com/nocobase/nocobase/pull/6673)) oleh @chenos

- **[utils]** Menambahkan ekstensi durasi untuk dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) oleh @mytharcher

- **[database]**
  - Menambahkan opsi trim untuk bidang teks ([#6603](https://github.com/nocobase/nocobase/pull/6603)) oleh @mytharcher

  - Menambahkan opsi trim untuk bidang string ([#6565](https://github.com/nocobase/nocobase/pull/6565)) oleh @mytharcher

- **[Workflow]**
  - Mendukung URL popup tetap untuk tugas workflow ([#6640](https://github.com/nocobase/nocobase/pull/6640)) oleh @mytharcher

  - Mengoptimalkan logika penyimpanan pekerjaan ([#6613](https://github.com/nocobase/nocobase/pull/6613)) oleh @mytharcher

  - Memperbaiki kode ([#6589](https://github.com/nocobase/nocobase/pull/6589)) oleh @mytharcher

- **[Workflow: Node tunda]** Mendukung penggunaan variabel untuk durasi ([#6621](https://github.com/nocobase/nocobase/pull/6621)) oleh @mytharcher

- **[Penangan kesalahan]** Mendukung judul kustom di komponen AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) oleh @sheldon66

- **[Manajer file]** Menambahkan opsi trim untuk bidang teks dari koleksi penyimpanan ([#6604](https://github.com/nocobase/nocobase/pull/6604)) oleh @mytharcher

- **[Manajer tugas asinkron]** mengoptimalkan tombol impor/ekspor di Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) oleh @chenos

- **[Workflow: Acara aksi kustom]** Menambahkan pengaturan penyegaran untuk tombol pemicu workflow oleh @mytharcher

- **[Aksi: Ekspor rekaman Pro]** mengoptimalkan tombol impor/ekspor di Pro oleh @katherinehhh

- **[Pembatasan IP]** Memperbarui konten pesan pembatasan IP. oleh @sheldon66

- **[Penyimpanan file: S3(Pro)]** Mendukung variabel global dalam konfigurasi penyimpanan oleh @mytharcher

- **[Manajer cadangan]** mengizinkan pemulihan aplikasi utama dari cadangan sub aplikasi oleh @gchust

- **[Workflow: Persetujuan]** Mendukung penggunaan template blok untuk formulir proses persetujuan oleh @mytharcher

- **[Manajer migrasi]** mengizinkan melewati pencadangan dan pemulihan otomatis untuk migrasi oleh @gchust

### 🐛 Perbaikan Bug

- **[client]**
  - masalah peralihan pemilih di bidang tanggal tombol filter ([#6695](https://github.com/nocobase/nocobase/pull/6695)) oleh @katherinehhh

  - konversi variabel dalam kondisi aturan tautan sub-tabel/sub-formulir ([#6702](https://github.com/nocobase/nocobase/pull/6702)) oleh @katherinehhh

  - tombol ekspor muncul tanpa izin ekspor ([#6689](https://github.com/nocobase/nocobase/pull/6689)) oleh @katherinehhh

  - Setelah terhubung melalui kunci asing, mengklik untuk memicu pemfilteran menghasilkan kondisi filter kosong ([#6634](https://github.com/nocobase/nocobase/pull/6634)) oleh @zhangzhonghe

  - Memperbaiki kesalahan yang muncul di node buat/perbarui workflow ([#6696](https://github.com/nocobase/nocobase/pull/6696)) oleh @mytharcher

  - Memperbaiki kesalahan yang muncul saat kursor mouse melayang di atas blok template yang direferensikan dalam konfigurasi node persetujuan ([#6691](https://github.com/nocobase/nocobase/pull/6691)) oleh @mytharcher

  - bidang asosiasi kustom tidak menampilkan pengaturan komponen bidang ([#6692](https://github.com/nocobase/nocobase/pull/6692)) oleh @katherinehhh

  - kompatibilitas aturan tautan dengan data lama ([#6686](https://github.com/nocobase/nocobase/pull/6686)) oleh @katherinehhh

  - lazy load yang kehilangan komponen ui akan menyebabkan kesalahan render ([#6683](https://github.com/nocobase/nocobase/pull/6683)) oleh @gchust

  - Memperbaiki lokal untuk komponen unggah ([#6682](https://github.com/nocobase/nocobase/pull/6682)) oleh @mytharcher

  - Menambahkan komponen Password asli ke HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) oleh @mytharcher

  - masalah tampilan deskripsi bidang di workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) oleh @katherinehhh

  - bidang warisan ditampilkan dalam daftar penugasan bidang koleksi saat ini ([#6666](https://github.com/nocobase/nocobase/pull/6666)) oleh @katherinehhh

  - masalah gaya pada input variabel saat mengatur nilai default ([#6668](https://github.com/nocobase/nocobase/pull/6668)) oleh @katherinehhh

  - Beralih ke menu grup tidak boleh melompat ke halaman yang sudah disembunyikan di menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) oleh @zhangzhonghe

  - Formulir filter tidak boleh menampilkan prompt "Perubahan belum disimpan" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) oleh @zhangzhonghe

  - Di formulir filter, ketika tombol filter diklik, jika ada bidang yang belum lulus validasi, pemfilteran tetap dipicu ([#6659](https://github.com/nocobase/nocobase/pull/6659)) oleh @zhangzhonghe

  - Opsi "izinkan banyak" tidak berfungsi untuk bidang relasi ([#6661](https://github.com/nocobase/nocobase/pull/6661)) oleh @katherinehhh

  - Memperbaiki masalah gambar pratinjau yang terhalang ([#6651](https://github.com/nocobase/nocobase/pull/6651)) oleh @zhangzhonghe

  - Di blok formulir, nilai default dari konfigurasi bidang akan ditampilkan terlebih dahulu sebagai string variabel asli lalu menghilang ([#6649](https://github.com/nocobase/nocobase/pull/6649)) oleh @zhangzhonghe

  - gaya input variabel yang salah ([#6645](https://github.com/nocobase/nocobase/pull/6645)) oleh @gchust

  - judul drawer edit node workflow menampilkan [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) oleh @katherinehhh

  - deskripsi sub-tabel tumpang tindih dengan tombol tambah baru ([#6646](https://github.com/nocobase/nocobase/pull/6646)) oleh @katherinehhh

  - garis bawah putus-putus yang disebabkan oleh tata letak formulir horizontal di modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) oleh @katherinehhh

  - aturan dengan kondisi 'any' tidak berlaku ketika daftar kondisi kosong ([#6628](https://github.com/nocobase/nocobase/pull/6628)) oleh @katherinehhh

  - kegagalan penguraian variabel ketika parameter URL mengandung karakter Cina ([#6618](https://github.com/nocobase/nocobase/pull/6618)) oleh @katherinehhh

  - area kosong antara judul halaman konfigurasi template blok dan menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) oleh @gchust

  - Bidang relasi di formulir filter melaporkan kesalahan setelah halaman disegarkan karena x-data-source tidak dibawa ([#6619](https://github.com/nocobase/nocobase/pull/6619)) oleh @zhangzhonghe

  - masalah data dengan blok Gantt di koleksi pohon ([#6617](https://github.com/nocobase/nocobase/pull/6617)) oleh @katherinehhh

  - masalah tampilan label bidang untuk mencegah pemotongan oleh titik dua ([#6599](https://github.com/nocobase/nocobase/pull/6599)) oleh @katherinehhh

  - properti x-disabled tidak berpengaruh pada bidang formulir ([#6610](https://github.com/nocobase/nocobase/pull/6610)) oleh @katherinehhh

  - Memperbaiki properti `disabled` tidak berfungsi ketika `SchemaInitializerItem` memiliki `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) oleh @mytharcher

  - bidang asosiasi (pilih) menampilkan N/A saat mengekspos bidang koleksi terkait ([#6582](https://github.com/nocobase/nocobase/pull/6582)) oleh @katherinehhh

  - tombol kirim dan segarkan tidak menampilkan mode hanya-ikon dengan benar ([#6592](https://github.com/nocobase/nocobase/pull/6592)) oleh @katherinehhh

  - masalah kaskade: 'Nilai xxx tidak boleh dalam format array' saat menghapus dan memilih ulang ([#6585](https://github.com/nocobase/nocobase/pull/6585)) oleh @katherinehhh

  - konflik tautan antara bidang asosiasi bernama sama di sub-tabel berbeda dalam formulir yang sama ([#6577](https://github.com/nocobase/nocobase/pull/6577)) oleh @katherinehhh

- **[database]**
  - Memperbaiki kesalahan build ci ([#6687](https://github.com/nocobase/nocobase/pull/6687)) oleh @aaaaaajie

  - Saat menghapus rekaman satu-ke-banyak, baik `filter` dan `filterByTk` dilewatkan dan `filter` menyertakan bidang asosiasi, `filterByTk` diabaikan ([#6606](https://github.com/nocobase/nocobase/pull/6606)) oleh @2013xile

  - Menghindari perubahan bidang "datetimeNoTz" ketika nilai tidak berubah dalam memperbarui rekaman ([#6588](https://github.com/nocobase/nocobase/pull/6588)) oleh @mytharcher

- **[build]** output build salah ketika plugin bergantung pada beberapa pustaka AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) oleh @gchust

- **[Visualisasi data]** Opsi bidang Enum kosong di blok filter ([#6706](https://github.com/nocobase/nocobase/pull/6706)) oleh @2013xile

- **[Aksi: Permintaan kustom]** Pastikan data permintaan kustom harus JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) oleh @chenos

- **[Workflow: Node manual]**
  - Memperbaiki kesalahan ACL di pusat tugas ([#6693](https://github.com/nocobase/nocobase/pull/6693)) oleh @mytharcher

  - Memperbaiki konstanta status tugas manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) oleh @mytharcher

- **[Aksi: Impor rekaman]** memperbaiki kesalahan mengimpor bidang waktu xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) oleh @aaaaaajie

- **[Kontrol akses]**
  - Memperbaiki kesalahan yang muncul saat menyerialkan model peran ke cache ([#6674](https://github.com/nocobase/nocobase/pull/6674)) oleh @mytharcher

  - Memperbaiki logika kalkulasi gabungan peran ([#6605](https://github.com/nocobase/nocobase/pull/6605)) oleh @aaaaaajie

  - Penugasan peran saat ini yang salah selama login ([#6581](https://github.com/nocobase/nocobase/pull/6581)) oleh @aaaaaajie

- **[Blok: iframe]** scrollbar vertikal muncul ketika blok iframe diatur ke tinggi penuh ([#6675](https://github.com/nocobase/nocobase/pull/6675)) oleh @katherinehhh

- **[Workflow]**
  - Memperbaiki kesalahan migrasi yang muncul dari MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) oleh @mytharcher

  - Memperbaiki informasi statistik workflow yang tidak dimuat saat aplikasi dimulai ([#6642](https://github.com/nocobase/nocobase/pull/6642)) oleh @mytharcher

  - Memperbaiki OOM saat membuat pekerjaan dengan id integer tidak aman ([#6637](https://github.com/nocobase/nocobase/pull/6637)) oleh @mytharcher

  - Memperbaiki tampilan opsi sinkronisasi yang salah ([#6595](https://github.com/nocobase/nocobase/pull/6595)) oleh @mytharcher

- **[Bidang koleksi: Lampiran(URL)]** hanya mengizinkan koleksi file dengan akses URL publik ([#6664](https://github.com/nocobase/nocobase/pull/6664)) oleh @katherinehhh

- **[Blok: template]**
  - ketika template yang direferensikan yang digunakan oleh blok halaman telah dihapus, menyimpan sebagai template gagal ([#6638](https://github.com/nocobase/nocobase/pull/6638)) oleh @gchust

  - Memodifikasi dan menghapus bidang yang sama dari template dan blok, setelah membuat blok dari template, dapat menyebabkan kesalahan rendering ([#6626](https://github.com/nocobase/nocobase/pull/6626)) oleh @gchust

- **[Pengguna]** Masalah dengan penguraian skema formulir profil pengguna ([#6635](https://github.com/nocobase/nocobase/pull/6635)) oleh @2013xile

- **[Aksi: Ekspor rekaman]** parameter filter hilang saat mengekspor data setelah mengubah paginasi ([#6633](https://github.com/nocobase/nocobase/pull/6633)) oleh @katherinehhh

- **[Seluler]** bidang pilih-tunggal dengan filter 'contains' di seluler tidak mendukung pemilihan ganda ([#6629](https://github.com/nocobase/nocobase/pull/6629)) oleh @katherinehhh

- **[Bidang koleksi: Banyak ke banyak (array)]** Masalah pemfilteran berdasarkan bidang di koleksi asosiasi dengan bidang banyak ke banyak (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) oleh @2013xile

- **[Formulir publik]** Izin tampilan mencakup daftar dan dapatkan ([#6607](https://github.com/nocobase/nocobase/pull/6607)) oleh @chenos

- **[Otentikasi]** penugasan token di `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) oleh @2013xile

- **[Kalender]** data hilang pada tanggal batas di tampilan kalender mingguan ([#6587](https://github.com/nocobase/nocobase/pull/6587)) oleh @katherinehhh

- **[Blok: Peta]** validasi manajemen peta tidak boleh lulus dengan input spasi ([#6575](https://github.com/nocobase/nocobase/pull/6575)) oleh @katherinehhh

- **[Aksi: Edit massal]** Klik tombol edit massal, konfigurasikan jendela pop-up, lalu buka lagi, jendela pop-up kosong ([#6578](https://github.com/nocobase/nocobase/pull/6578)) oleh @zhangzhonghe

- **[Workflow: Acara aksi kustom]** Memperbaiki kasus uji oleh @mytharcher

- **[Manajer email]**
  - memperbaiki tidak bisa sinkron, tidak ada tampilan subjek dan bug kecil lainnya oleh @jiannx

  - memperbaiki izin manajemen email tidak dapat melihat daftar email oleh @jiannx

  - Memperbaiki await yang hilang untuk panggilan berikutnya. oleh @jiannx

- **[Penyimpanan file: S3(Pro)]**
  - Memperbaiki await yang hilang untuk panggilan berikutnya. oleh @jiannx

  - Pengaturan baseurl dan publik individual, meningkatkan UX konfigurasi penyimpanan S3 pro oleh @jiannx

  - Melempar kesalahan ke pengguna saat mengunggah logo ke penyimpanan S3 Pro (diatur ke default) oleh @mytharcher

  - Mengatur bahasa oleh @jiannx

- **[Auth: OIDC]** Pengalihan yang salah terjadi ketika jalur callback adalah string 'null' oleh @2013xile

- **[Blok: Formulir multi-langkah]**
  - tombol kirim memiliki warna yang sama dalam keadaan default dan disorot oleh @jiannx

  - memperbaiki bug bahwa reset formulir tidak valid ketika bidang dikaitkan dengan bidang lain oleh @jiannx

- **[Manajer cadangan]** kesalahan waktu tunggu terjadi saat mencoba memulihkan cadangan yang tidak terenkripsi dengan kata sandi oleh @gchust

- **[Workflow: Persetujuan]**
  - Memperbaiki kesalahan ACL di pusat tugas oleh @mytharcher

  - Mendukung URL tetap untuk item persetujuan di pusat tugas oleh @mytharcher

  - Memperbaiki mode cabang ketika `endOnReject` dikonfigurasi sebagai `true` oleh @mytharcher

  - Memperbaiki `updatedAt` berubah setelah migrasi oleh @mytharcher

  - Memperbaiki konfigurasi node persetujuan yang salah setelah skema berubah oleh @mytharcher

  - Memperbaiki variabel klien untuk digunakan dalam formulir persetujuan oleh @mytharcher

- **[Manajer migrasi]**
  - waktu pembuatan log migrasi ditampilkan salah di beberapa lingkungan oleh @gchust

  - opsi lewati cadangan otomatis menjadi tidak valid jika popup variabel lingkungan muncul selama migrasi oleh @gchust
