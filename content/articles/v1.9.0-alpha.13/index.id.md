---
title: "NocoBase v1.9.0-alpha.13: alur kerja mendukung kembali ke node mana pun dalam proses persetujuan"
description: "Catatan Rilis v1.9.0-alpha.13"
---

### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Mendukung kembali ke node mana pun dalam proses persetujuan oleh @mytharcher

### 🚀 Peningkatan

- **[client]** Hapus popover elipsis dari daftar file ([#7479](https://github.com/nocobase/nocobase/pull/7479)) oleh @mytharcher

- **[database]** Optimasi kueri hitungan API daftar untuk mengurangi konsumsi sumber daya. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) oleh @aaaaaajie

- **[Workflow]**
  - Optimalkan proses persiapan workflow untuk mendukung penggunaan data node yang telah dimuat sebelumnya ([#7476](https://github.com/nocobase/nocobase/pull/7476)) oleh @mytharcher

  - Optimalkan performa kueri untuk mengambil eksekusi antrean dengan menggunakan kolom dan indeks terpisah ([#7448](https://github.com/nocobase/nocobase/pull/7448)) oleh @mytharcher

  - Sesuaikan API variabel workflow untuk mendukung prasetel daftar variabel tambahan ([#7439](https://github.com/nocobase/nocobase/pull/7439)) oleh @mytharcher

- **[Notifikasi: Pesan dalam aplikasi]** Mendukung konfigurasi penundaan penutupan otomatis untuk notifikasi pesan dalam aplikasi ([#7472](https://github.com/nocobase/nocobase/pull/7472)) oleh @mytharcher

- **[Workflow: node notifikasi]** Mendukung pengujian node notifikasi ([#7470](https://github.com/nocobase/nocobase/pull/7470)) oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Mendukung penggunaan variabel terkait persetujuan dalam notifikasi kustom oleh @mytharcher

  - Mendukung pembaruan status persetujuan setelah node akhir menghentikan eksekusi oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Pemeriksaan 'tidak kosong' yang salah untuk bidang numerik dalam aturan tautan ([#7477](https://github.com/nocobase/nocobase/pull/7477)) oleh @katherinehhh

  - Kesalahan render bidang asosiasi saat beralih ke komponen tag di blok formulir edit ([#7468](https://github.com/nocobase/nocobase/pull/7468)) oleh @katherinehhh

  - Masalah batas waktu saat tanggal yang dipilih sama dengan minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) oleh @katherinehhh

  - Perbaiki masalah di mana, dalam skenario tertentu, mengedit rekaman di popup pemilih rekaman seluler menyebabkan kesalahan ([#7444](https://github.com/nocobase/nocobase/pull/7444)) oleh @zhangzhonghe

  - Validasi wajib tidak berfungsi untuk bidang lampiran di sub-tabel ([#7431](https://github.com/nocobase/nocobase/pull/7431)) oleh @katherinehhh

  - Perbaiki masalah di mana ikon ditampilkan salah saat URL di bidang URL lampiran berisi parameter kueri ([#7432](https://github.com/nocobase/nocobase/pull/7432)) oleh @mytharcher

- **[database]**
  - Perbaiki masalah presisi untuk bidang Angka yang diekspor ([#7421](https://github.com/nocobase/nocobase/pull/7421)) oleh @aaaaaajie

  - Perbaiki kesalahan sintaks MySQL yang terjadi saat memuat lebih banyak pesan dalam aplikasi. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) oleh @aaaaaajie

- **[undefined]** Perbaiki masalah pemfilteran berdasarkan bidang tanggal hanya di sumber eksternal MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) oleh @aaaaaajie

- **[Mobile]** Bidang tanggal seluler tanpa zona waktu tidak menampilkan tanggal waktu dengan benar ([#7473](https://github.com/nocobase/nocobase/pull/7473)) oleh @katherinehhh

- **[Koleksi: Pohon]** Hapus event database yang terkait dengan koleksi setelah menghapus koleksi pohon ([#7459](https://github.com/nocobase/nocobase/pull/7459)) oleh @2013xile

- **[Formulir publik]** Nilai default bidang formulir publik tidak diterapkan saat menggunakan variabel ([#7467](https://github.com/nocobase/nocobase/pull/7467)) oleh @katherinehhh

- **[Aksi: Impor rekaman]**
  - Perbaiki nomor baris yang salah ditampilkan saat data duplikat diimpor ([#7440](https://github.com/nocobase/nocobase/pull/7440)) oleh @aaaaaajie

  - Perbaiki masalah di mana impor gagal saat kunci utama tabel adalah teks satu baris ([#7416](https://github.com/nocobase/nocobase/pull/7416)) oleh @aaaaaajie

- **[Workflow]**
  - Perbaiki masalah di mana popup detail tidak ditampilkan karena konfigurasi rute yang salah di pusat tugas ([#7452](https://github.com/nocobase/nocobase/pull/7452)) oleh @mytharcher

  - Lengkapi opsi untuk menghapus status eksekusi workflow secara otomatis ([#7436](https://github.com/nocobase/nocobase/pull/7436)) oleh @mytharcher

  - Perbaiki masalah terkait menu seluler di tugas workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) oleh @mytharcher

- **[Manajer file]** Perbaiki kesalahan saat mengedit bidang `storage` di koleksi file. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) oleh @mytharcher

- **[Workflow: Node paralel]** Perbaiki masalah di mana penentuan status yang salah di node cabang paralel di bawah mode "Jalankan semua cabang" menyebabkan penyelesaian prematur ([#7445](https://github.com/nocobase/nocobase/pull/7445)) oleh @mytharcher

- **[Workflow: Event aksi kustom]** Perbaiki masalah di mana event aksi kustom tidak dapat dijalankan secara manual segera setelah inisialisasi oleh @mytharcher

- **[Aksi: Impor rekaman Pro]** Perbaiki hasil pembaruan yang tidak terduga saat menggunakan kunci utama string dalam impor xlsx. oleh @aaaaaajie

- **[Workflow: Subflow]** Perbaiki masalah subproses yang dilanjutkan dan dieksekusi beberapa kali oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Tambahkan variabel status untuk template kustom dalam notifikasi penyelesaian persetujuan oleh @mytharcher

  - Untuk pengguna yang bukan penyetuju saat ini, tombol tampilan terkait di tabel alur proses tidak akan ditampilkan oleh @mytharcher
