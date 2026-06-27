---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: manajer email mendukung sinkronisasi batch, persetujuan alur kerja mendukung kembali ke node mana pun dalam proses persetujuan, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alpha, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.7](https://www.nocobase.com/en/blog/v1.9.0-beta.7)

*Tanggal rilis: 2025-09-11*

#### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Mendukung kembali ke node mana pun dalam proses persetujuan oleh @mytharcher

#### 🚀 Peningkatan

- **[client]** Hapus popover elipsis dari daftar file ([#7479](https://github.com/nocobase/nocobase/pull/7479)) oleh @mytharcher
- **[server]** Gunakan logger sistem standar untuk antrian pesan ([#7480](https://github.com/nocobase/nocobase/pull/7480)) oleh @mytharcher
- **[database]** Mengoptimalkan kueri hitungan API daftar untuk mengurangi konsumsi sumber daya. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) oleh @aaaaaajie
- **[Notifikasi: Pesan dalam aplikasi]** Mendukung konfigurasi penundaan penutupan otomatis untuk notifikasi pesan dalam aplikasi ([#7472](https://github.com/nocobase/nocobase/pull/7472)) oleh @mytharcher
- **[Workflow]**

  - Mengoptimalkan proses persiapan workflow untuk mendukung penggunaan data node yang telah dimuat sebelumnya ([#7476](https://github.com/nocobase/nocobase/pull/7476)) oleh @mytharcher
  - Mengoptimalkan kinerja kueri untuk mengambil eksekusi antrian dengan menggunakan bidang dan indeks terpisah ([#7448](https://github.com/nocobase/nocobase/pull/7448)) oleh @mytharcher
  - Menyesuaikan API variabel workflow untuk mendukung prasetel daftar variabel tambahan ([#7439](https://github.com/nocobase/nocobase/pull/7439)) oleh @mytharcher
- **[Workflow: node notifikasi]** Mendukung pengujian node notifikasi ([#7470](https://github.com/nocobase/nocobase/pull/7470)) oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Mendukung penggunaan variabel terkait persetujuan dalam notifikasi kustom oleh @mytharcher
  - Mendukung pembaruan status persetujuan setelah node akhir menghentikan eksekusi oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - Pemeriksaan 'tidak kosong' yang salah untuk bidang numerik dalam aturan tautan ([#7477](https://github.com/nocobase/nocobase/pull/7477)) oleh @katherinehhh
  - Kesalahan render bidang asosiasi saat beralih ke komponen tag di blok formulir edit ([#7468](https://github.com/nocobase/nocobase/pull/7468)) oleh @katherinehhh
  - Select/multiselect/date/richtext readonly masih dapat diedit pada formulir publik ([#7484](https://github.com/nocobase/nocobase/pull/7484)) oleh @katherinehhh
  - Masalah batas waktu ketika tanggal yang dipilih sama dengan minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) oleh @katherinehhh
  - Validasi wajib tidak berfungsi untuk bidang lampiran di subtable ([#7431](https://github.com/nocobase/nocobase/pull/7431)) oleh @katherinehhh
  - Memperbaiki masalah di mana, dalam skenario tertentu, mengedit rekaman di popup pemilih rekaman seluler menyebabkan kesalahan ([#7444](https://github.com/nocobase/nocobase/pull/7444)) oleh @zhangzhonghe
- **[undefined]** Memperbaiki masalah pemfilteran hanya berdasarkan bidang tanggal di sumber eksternal MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) oleh @aaaaaajie
- **[database]**

  - Memperbaiki kesalahan sintaks MySQL yang terjadi saat memuat lebih banyak pesan dalam aplikasi. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) oleh @aaaaaajie
  - Memperbaiki masalah presisi untuk bidang Angka yang diekspor ([#7421](https://github.com/nocobase/nocobase/pull/7421)) oleh @aaaaaajie
- **[Seluler]** Bidang tanggal seluler tanpa zona waktu tidak menampilkan tanggal waktu dengan benar ([#7473](https://github.com/nocobase/nocobase/pull/7473)) oleh @katherinehhh
- **[Formulir publik]** Nilai default bidang formulir publik tidak diterapkan saat menggunakan variabel ([#7467](https://github.com/nocobase/nocobase/pull/7467)) oleh @katherinehhh
- **[Koleksi: Pohon]** Hapus event database yang terkait dengan koleksi setelah menghapus koleksi pohon ([#7459](https://github.com/nocobase/nocobase/pull/7459)) oleh @2013xile
- **[Manajer file]** Memperbaiki kesalahan saat mengedit bidang `storage` di koleksi file. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) oleh @mytharcher
- **[Aksi: Impor rekaman]**

  - Memperbaiki nomor baris yang salah ditampilkan saat data duplikat diimpor ([#7440](https://github.com/nocobase/nocobase/pull/7440)) oleh @aaaaaajie
  - Memperbaiki masalah di mana impor gagal ketika kunci utama tabel adalah teks satu baris ([#7416](https://github.com/nocobase/nocobase/pull/7416)) oleh @aaaaaajie
- **[Workflow]**

  - Melengkapi opsi untuk menghapus status eksekusi workflow secara otomatis ([#7436](https://github.com/nocobase/nocobase/pull/7436)) oleh @mytharcher
  - Memperbaiki masalah di mana popup detail tidak ditampilkan karena konfigurasi rute yang salah di pusat tugas ([#7452](https://github.com/nocobase/nocobase/pull/7452)) oleh @mytharcher
  - Memperbaiki masalah terkait menu seluler di tugas workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) oleh @mytharcher
- **[Workflow: Node paralel]** Memperbaiki masalah di mana penentuan status yang salah di node cabang paralel di bawah mode "Jalankan semua cabang" menyebabkan penyelesaian prematur ([#7445](https://github.com/nocobase/nocobase/pull/7445)) oleh @mytharcher
- **[Aksi: Impor rekaman Pro]** Memperbaiki hasil pembaruan yang tidak terduga saat menggunakan kunci utama string dalam impor xlsx. oleh @aaaaaajie
- **[Workflow: Event aksi kustom]** Memperbaiki masalah di mana event aksi kustom tidak dapat dijalankan secara manual segera setelah inisialisasi oleh @mytharcher
- **[Workflow: Subflow]** Memperbaiki masalah subproses dilanjutkan dan dieksekusi beberapa kali oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Memperbaiki masalah di mana teks status dalam notifikasi penyelesaian persetujuan tidak diterjemahkan oleh @mytharcher
  - Untuk pengguna yang bukan penyetuju saat ini, tombol tampilan yang sesuai di tabel alur proses tidak akan ditampilkan oleh @mytharcher
  - Menambahkan variabel status untuk template kustom dalam notifikasi penyelesaian persetujuan oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.14](https://www.nocobase.com/en/blog/v1.9.0-alpha.14)

*Tanggal rilis: 2025-09-10*

#### 🚀 Peningkatan

- **[Manajer Email]** mendukung sinkronisasi batch oleh @jiannx

#### 🐛 Perbaikan Bug

- **[Workflow: Persetujuan]** Memperbaiki masalah di mana teks status dalam notifikasi penyelesaian persetujuan tidak diterjemahkan oleh @mytharcher

### [v1.9.0-alpha.13](https://www.nocobase.com/en/blog/v1.9.0-alpha.13)

*Tanggal rilis: 2025-09-09*

#### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Mendukung kembali ke node mana pun dalam proses persetujuan oleh @mytharcher

#### 🚀 Peningkatan

- **[client]** Hapus popover elipsis dari daftar file ([#7479](https://github.com/nocobase/nocobase/pull/7479)) oleh @mytharcher
- **[database]** Mengoptimalkan kueri hitungan API daftar untuk mengurangi konsumsi sumber daya. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) oleh @aaaaaajie
- **[Workflow]**

  - Mengoptimalkan proses persiapan workflow untuk mendukung penggunaan data node yang telah dimuat sebelumnya ([#7476](https://github.com/nocobase/nocobase/pull/7476)) oleh @mytharcher
  - Mengoptimalkan kinerja kueri untuk mengambil eksekusi antrian dengan menggunakan bidang dan indeks terpisah ([#7448](https://github.com/nocobase/nocobase/pull/7448)) oleh @mytharcher
  - Menyesuaikan API variabel workflow untuk mendukung prasetel daftar variabel tambahan ([#7439](https://github.com/nocobase/nocobase/pull/7439)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]** Mendukung konfigurasi penundaan penutupan otomatis untuk notifikasi pesan dalam aplikasi ([#7472](https://github.com/nocobase/nocobase/pull/7472)) oleh @mytharcher
- **[Workflow: node notifikasi]** Mendukung pengujian node notifikasi ([#7470](https://github.com/nocobase/nocobase/pull/7470)) oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Mendukung penggunaan variabel terkait persetujuan dalam notifikasi kustom oleh @mytharcher
  - Mendukung pembaruan status persetujuan setelah node akhir menghentikan eksekusi oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - Pemeriksaan 'tidak kosong' yang salah untuk bidang numerik dalam aturan tautan ([#7477](https://github.com/nocobase/nocobase/pull/7477)) oleh @katherinehhh
  - Kesalahan render bidang asosiasi saat beralih ke komponen tag di blok formulir edit ([#7468](https://github.com/nocobase/nocobase/pull/7468)) oleh @katherinehhh
  - Masalah batas waktu ketika tanggal yang dipilih sama dengan minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) oleh @katherinehhh
  - Memperbaiki masalah di mana, dalam skenario tertentu, mengedit rekaman di popup pemilih rekaman seluler menyebabkan kesalahan ([#7444](https://github.com/nocobase/nocobase/pull/7444)) oleh @zhangzhonghe
  - Validasi wajib tidak berfungsi untuk bidang lampiran di subtable ([#7431](https://github.com/nocobase/nocobase/pull/7431)) oleh @katherinehhh
  - Memperbaiki masalah di mana ikon ditampilkan salah ketika URL di bidang URL lampiran berisi parameter kueri ([#7432](https://github.com/nocobase/nocobase/pull/7432)) oleh @mytharcher
- **[database]**

  - Memperbaiki masalah presisi untuk bidang Angka yang diekspor ([#7421](https://github.com/nocobase/nocobase/pull/7421)) oleh @aaaaaajie
  - Memperbaiki kesalahan sintaks MySQL yang terjadi saat memuat lebih banyak pesan dalam aplikasi. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) oleh @aaaaaajie
- **[undefined]** Memperbaiki masalah pemfilteran hanya berdasarkan bidang tanggal di sumber eksternal MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) oleh @aaaaaajie
- **[Seluler]** Bidang tanggal seluler tanpa zona waktu tidak menampilkan tanggal waktu dengan benar ([#7473](https://github.com/nocobase/nocobase/pull/7473)) oleh @katherinehhh
- **[Koleksi: Pohon]** Hapus event database yang terkait dengan koleksi setelah menghapus koleksi pohon ([#7459](https://github.com/nocobase/nocobase/pull/7459)) oleh @2013xile
- **[Formulir publik]** Nilai default bidang formulir publik tidak diterapkan saat menggunakan variabel ([#7467](https://github.com/nocobase/nocobase/pull/7467)) oleh @katherinehhh
- **[Aksi: Impor rekaman]**

  - Memperbaiki nomor baris yang salah ditampilkan saat data duplikat diimpor ([#7440](https://github.com/nocobase/nocobase/pull/7440)) oleh @aaaaaajie
  - Memperbaiki masalah di mana impor gagal ketika kunci utama tabel adalah teks satu baris ([#7416](https://github.com/nocobase/nocobase/pull/7416)) oleh @aaaaaajie
- **[Workflow]**

  - Memperbaiki masalah di mana popup detail tidak ditampilkan karena konfigurasi rute yang salah di pusat tugas ([#7452](https://github.com/nocobase/nocobase/pull/7452)) oleh @mytharcher
  - Melengkapi opsi untuk menghapus status eksekusi workflow secara otomatis ([#7436](https://github.com/nocobase/nocobase/pull/7436)) oleh @mytharcher
  - Memperbaiki masalah terkait menu seluler di tugas workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) oleh @mytharcher
- **[Manajer file]** Memperbaiki kesalahan saat mengedit bidang `storage` di koleksi file. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) oleh @mytharcher
- **[Workflow: Node paralel]** Memperbaiki masalah di mana penentuan status yang salah di node cabang paralel di bawah mode "Jalankan semua cabang" menyebabkan penyelesaian prematur ([#7445](https://github.com/nocobase/nocobase/pull/7445)) oleh @mytharcher
- **[Workflow: Event aksi kustom]** Memperbaiki masalah di mana event aksi kustom tidak dapat dijalankan secara manual segera setelah inisialisasi oleh @mytharcher
- **[Aksi: Impor rekaman Pro]** Memperbaiki hasil pembaruan yang tidak terduga saat menggunakan kunci utama string dalam impor xlsx. oleh @aaaaaajie
- **[Workflow: Subflow]** Memperbaiki masalah subproses dilanjutkan dan dieksekusi beberapa kali oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Menambahkan variabel status untuk template kustom dalam notifikasi penyelesaian persetujuan oleh @mytharcher
  - Untuk pengguna yang bukan penyetuju saat ini, tombol tampilan yang sesuai di tabel alur proses tidak akan ditampilkan oleh @mytharcher
