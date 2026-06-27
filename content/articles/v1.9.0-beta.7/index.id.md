---
title: "NocoBase v1.9.0-beta.7: alur kerja mendukung kembali ke node mana pun dalam proses persetujuan"
description: "Catatan Rilis v1.9.0-beta.7"
---

### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Mendukung kembali ke node mana pun dalam proses persetujuan oleh @mytharcher

### 🚀 Peningkatan

- **[client]** Hapus popover elipsis dari daftar file ([#7479](https://github.com/nocobase/nocobase/pull/7479)) oleh @mytharcher

- **[server]** Gunakan logger sistem standar untuk antrean pesan ([#7480](https://github.com/nocobase/nocobase/pull/7480)) oleh @mytharcher

- **[database]** Optimasi kueri hitung daftar API untuk mengurangi konsumsi sumber daya. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) oleh @aaaaaajie

- **[Notifikasi: Pesan dalam aplikasi]** Mendukung konfigurasi penundaan penutupan otomatis untuk notifikasi pesan dalam aplikasi ([#7472](https://github.com/nocobase/nocobase/pull/7472)) oleh @mytharcher

- **[Workflow]**
  - Optimalkan proses persiapan workflow untuk mendukung penggunaan data node yang telah dimuat sebelumnya ([#7476](https://github.com/nocobase/nocobase/pull/7476)) oleh @mytharcher

  - Optimalkan performa kueri untuk mengambil eksekusi antrean dengan menggunakan field dan indeks terpisah ([#7448](https://github.com/nocobase/nocobase/pull/7448)) oleh @mytharcher

  - Sesuaikan API variabel workflow untuk mendukung prasetel daftar variabel tambahan ([#7439](https://github.com/nocobase/nocobase/pull/7439)) oleh @mytharcher

- **[Workflow: node notifikasi]** Mendukung pengujian node notifikasi ([#7470](https://github.com/nocobase/nocobase/pull/7470)) oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Mendukung penggunaan variabel terkait persetujuan dalam notifikasi kustom oleh @mytharcher

  - Mendukung pembaruan status persetujuan setelah node akhir menghentikan eksekusi oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Pemeriksaan 'tidak kosong' yang salah untuk field numerik dalam aturan tautan ([#7477](https://github.com/nocobase/nocobase/pull/7477)) oleh @katherinehhh

  - Kesalahan render field asosiasi saat beralih ke komponen tag di blok form edit ([#7468](https://github.com/nocobase/nocobase/pull/7468)) oleh @katherinehhh

  - Select/multiselect/date/richtext readonly masih dapat diedit pada form publik ([#7484](https://github.com/nocobase/nocobase/pull/7484)) oleh @katherinehhh

  - Masalah batas waktu saat tanggal yang dipilih sama dengan minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) oleh @katherinehhh

  - Validasi wajib tidak berfungsi untuk field lampiran di subtable ([#7431](https://github.com/nocobase/nocobase/pull/7431)) oleh @katherinehhh

  - Perbaiki masalah di mana, dalam skenario tertentu, mengedit rekaman di popup pemilih rekaman seluler menyebabkan kesalahan ([#7444](https://github.com/nocobase/nocobase/pull/7444)) oleh @zhangzhonghe

- **[undefined]** Perbaiki masalah pemfilteran hanya berdasarkan field tanggal di sumber eksternal MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) oleh @aaaaaajie

- **[database]**
  - Perbaiki kesalahan sintaks MySQL yang terjadi saat memuat lebih banyak pesan dalam aplikasi. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) oleh @aaaaaajie

  - Perbaiki masalah presisi untuk field Angka yang diekspor ([#7421](https://github.com/nocobase/nocobase/pull/7421)) oleh @aaaaaajie

- **[Seluler]** Field tanggal seluler tanpa zona waktu tidak menampilkan tanggal waktu dengan benar ([#7473](https://github.com/nocobase/nocobase/pull/7473)) oleh @katherinehhh

- **[Form publik]** Nilai default field form publik tidak diterapkan saat menggunakan variabel ([#7467](https://github.com/nocobase/nocobase/pull/7467)) oleh @katherinehhh

- **[Koleksi: Pohon]** Hapus event database yang terkait dengan koleksi setelah menghapus koleksi pohon ([#7459](https://github.com/nocobase/nocobase/pull/7459)) oleh @2013xile

- **[Manajer file]** Perbaiki kesalahan saat mengedit field `storage` di koleksi file. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) oleh @mytharcher

- **[Aksi: Impor rekaman]**
  - Perbaiki nomor baris yang salah ditampilkan saat data duplikat diimpor ([#7440](https://github.com/nocobase/nocobase/pull/7440)) oleh @aaaaaajie

  - Perbaiki masalah di mana impor gagal ketika kunci utama tabel adalah teks satu baris ([#7416](https://github.com/nocobase/nocobase/pull/7416)) oleh @aaaaaajie

- **[Workflow]**
  - Lengkapi opsi untuk menghapus status eksekusi workflow secara otomatis ([#7436](https://github.com/nocobase/nocobase/pull/7436)) oleh @mytharcher

  - Perbaiki masalah di mana popup detail tidak ditampilkan karena konfigurasi rute yang salah di pusat tugas ([#7452](https://github.com/nocobase/nocobase/pull/7452)) oleh @mytharcher

  - Perbaiki masalah terkait menu seluler di tugas workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) oleh @mytharcher

- **[Workflow: Node paralel]** Perbaiki masalah di mana penentuan status yang salah di node cabang paralel di bawah mode "Jalankan semua cabang" menyebabkan penyelesaian prematur ([#7445](https://github.com/nocobase/nocobase/pull/7445)) oleh @mytharcher

- **[Aksi: Impor rekaman Pro]** Perbaiki hasil pembaruan yang tidak terduga saat menggunakan kunci utama string dalam impor xlsx. oleh @aaaaaajie

- **[Workflow: Event aksi kustom]** Perbaiki masalah di mana event aksi kustom tidak dapat dijalankan secara manual segera setelah inisialisasi oleh @mytharcher

- **[Workflow: Subflow]** Perbaiki masalah subproses yang dilanjutkan dan dieksekusi beberapa kali oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Perbaiki masalah di mana teks status dalam notifikasi penyelesaian persetujuan tidak diterjemahkan oleh @mytharcher

  - Untuk pengguna yang bukan penyetuju saat ini, tombol tampilan terkait di tabel alur proses tidak akan ditampilkan oleh @mytharcher

  - Tambahkan variabel status untuk template kustom dalam notifikasi penyelesaian persetujuan oleh @mytharcher
