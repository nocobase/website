---
title: "Pembaruan Mingguan NocoBase: Dukungan Variabel Agregasi Kustom"
description: "Pembaruan minggu ini meliputi: menambahkan antrian acara untuk memproses pesan dalam antrian dan mendukung pemuatan koleksi sesuai permintaan dari sumber data eksternal."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**Minggu ini kami merilis [NocoBase 1.8.0](https://www.nocobase.com/en/blog/nocobase-1-8-0), dengan peningkatan autentikasi, dukungan untuk variabel statistik kustom, manajemen email yang ditingkatkan, serta optimalisasi interaksi alur kerja dan seluler.**

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Cocok untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan fitur terdepan produk, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.1](https://www.nocobase.com/en/blog/v1.8.1)

*Tanggal rilis: 2025-07-09*

#### 🐛 Perbaikan Bug

- **[klien]**

  - Tampilan bidang kotak centang salah di koleksi bidang asosiasi dalam formulir ([#7176](https://github.com/nocobase/nocobase/pull/7176)) oleh @zhangzhonghe
  - Perbaiki masalah di mana mengklik tombol tidak dapat membuka popup ([#7180](https://github.com/nocobase/nocobase/pull/7180)) oleh @zhangzhonghe
- **[Alur Kerja: Node manual]** Perbaiki kesalahan yang muncul saat menggunakan variabel ([#7177](https://github.com/nocobase/nocobase/pull/7177)) oleh @mytharcher
- **[Cetak template]** tambahkan skrip migrasi ke bidang rootDataType oleh @jiannx
- **[Alur Kerja: Persetujuan]** Perbaiki cabang yang disetujui tidak berjalan saat tidak ada penerima tugas oleh @mytharcher

### [v1.7.20](https://www.nocobase.com/en/blog/v1.7.20)

*Tanggal rilis: 2025-07-07*

#### 🐛 Perbaikan Bug

- **[klien]**

  - Setelah perubahan bidang, lingkup data yang bergantung pada bidang ini harus secara otomatis menghapus nilai yang dipilih ([#7161](https://github.com/nocobase/nocobase/pull/7161)) oleh @zhangzhonghe
  - Perbaiki masalah di mana pengaturan lebar kolom tabel tidak efektif ([#7158](https://github.com/nocobase/nocobase/pull/7158)) oleh @zhangzhonghe
  - Perbaiki masalah kesalahan dengan formulir filter di popup tombol Duplikat ([#7154](https://github.com/nocobase/nocobase/pull/7154)) oleh @zhangzhonghe
  - Memperbaiki kesalahan yang terjadi saat menyimpan hubungan satu-ke-satu di bidang konfigurasi. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) oleh @aaaaaajie
- **[tidak terdefinisi]** Perbaiki e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) oleh @mytharcher
- **[Manajer file]**

  - Perbaiki deteksi mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) oleh @mytharcher
  - Perbaiki kesalahan build karena paket ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) oleh @mytharcher
- **[Formulir publik]** perbaiki masalah di mana bidang Hanya Tanggal gagal memilih tanggal di formulir publik. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) oleh @katherinehhh
- **[Alur Kerja]** Perbaiki masalah di mana beberapa gesekan ke kiri diperlukan untuk kembali ke halaman sebelumnya di perangkat seluler ([#7165](https://github.com/nocobase/nocobase/pull/7165)) oleh @zhangzhonghe
- **[Visualisasi data]** Masalah paginasi tabel ([#7151](https://github.com/nocobase/nocobase/pull/7151)) oleh @2013xile
- **[Alur Kerja: Persetujuan]**

  - Perbaiki asosiasi tidak dimuat setelah ditarik kembali oleh @mytharcher
  - Hapus transaksi patching skema karena waktu habis oleh @mytharcher
  - Perbaiki kesalahan yang muncul saat persetujuan dihapus oleh @mytharcher
  - Perbaiki pembaruan asosiasi saat mengirimkan oleh @mytharcher

### [v1.7.19](https://www.nocobase.com/en/blog/v1.7.19)

*Tanggal rilis: 2025-07-03*

#### 🚀 Peningkatan

- **[database]** Dukung penambahan opsi pool dari env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) oleh @mytharcher
- **[Alur Kerja]**

  - Tingkatkan kinerja pemuatan daftar eksekusi dengan mengecualikan bidang JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) oleh @mytharcher
  - Tambahkan API log untuk pengujian node ([#7129](https://github.com/nocobase/nocobase/pull/7129)) oleh @mytharcher
- **[Manajer multi-aplikasi]** tambahkan dukungan filter ke manajemen multi-aplikasi ([#7124](https://github.com/nocobase/nocobase/pull/7124)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]** Ubah waktu menjadi absolut di linimasa oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Pengaturan field displayName di tampilan yang terhubung tidak berpengaruh ([#7130](https://github.com/nocobase/nocobase/pull/7130)) oleh @aaaaaajie
  - masalah gaya warna latar belakang di sub-tabel pada blok detail ([#7144](https://github.com/nocobase/nocobase/pull/7144)) oleh @katherinehhh
  - Konfigurasi UI node manual Alur Kerja: aturan tautan tidak dapat memilih variabel Formulir Saat Ini ([#7125](https://github.com/nocobase/nocobase/pull/7125)) oleh @zhangzhonghe
  - nilai default bidang asosiasi menimpa data yang ada di sub-tabel ([#7120](https://github.com/nocobase/nocobase/pull/7120)) oleh @katherinehhh
  - markdown tidak mencerminkan perubahan secara real-time saat mereferensikan variabel $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) oleh @katherinehhh
  - Toleransi kesalahan untuk pengaturan berdasarkan 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) oleh @mytharcher
- **[utils]** masalah pemfilteran pada DateOnly atau Datetime (tanpa zona waktu) menggunakan variabel Exact day ([#7113](https://github.com/nocobase/nocobase/pull/7113)) oleh @katherinehhh
- **[Alur Kerja]** Perbaiki kesalahan yang muncul oleh impor siklik ([#7134](https://github.com/nocobase/nocobase/pull/7134)) oleh @mytharcher
- **[Kebijakan kata sandi]** Dukung penguncian akun pengguna secara permanen oleh @2013xile
- **[Alur Kerja: Subalur]** Perbaiki masalah dalam mode kluster oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Hapus bidang yang tidak dapat difilter dari filter oleh @mytharcher
  - Tambahkan pengaturan tata letak formulir oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.1](https://www.nocobase.com/en/blog/v1.9.0-beta.1)

*Tanggal rilis: 2025-07-07*

#### 🎉 Fitur Baru

- **[server]** Tambahkan antrian peristiwa untuk memproses pesan dalam antrian ([#6819](https://github.com/nocobase/nocobase/pull/6819)) oleh @mytharcher

#### 🚀 Peningkatan

- **[Alur Kerja]** Pindahkan komponen umum ke plugin dasar ([#7140](https://github.com/nocobase/nocobase/pull/7140)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Setelah perubahan bidang, lingkup data yang bergantung pada bidang ini harus secara otomatis menghapus nilai yang dipilih ([#7161](https://github.com/nocobase/nocobase/pull/7161)) oleh @zhangzhonghe
  - Perbaiki masalah di mana pengaturan lebar kolom tabel tidak efektif ([#7158](https://github.com/nocobase/nocobase/pull/7158)) oleh @zhangzhonghe
  - Perbaiki masalah kesalahan dengan formulir filter di popup tombol Duplikat ([#7154](https://github.com/nocobase/nocobase/pull/7154)) oleh @zhangzhonghe
  - Memperbaiki kesalahan yang terjadi saat menyimpan hubungan satu-ke-satu di bidang konfigurasi. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) oleh @aaaaaajie
- **[tidak terdefinisi]** Perbaiki e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) oleh @mytharcher
- **[Kalender]** atur hari awal minggu default ke 'senin' di blok kalender ([#7171](https://github.com/nocobase/nocobase/pull/7171)) oleh @katherinehhh
- **[Alur Kerja]** Perbaiki masalah di mana beberapa gesekan ke kiri diperlukan untuk kembali ke halaman sebelumnya di perangkat seluler ([#7165](https://github.com/nocobase/nocobase/pull/7165)) oleh @zhangzhonghe
- **[Manajer file]**

  - Perbaiki kesalahan build karena paket ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) oleh @mytharcher
  - Perbaiki deteksi mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) oleh @mytharcher
- **[Alur Kerja: Node manual]** Perbaiki pengimporan variabel yang salah ([#7156](https://github.com/nocobase/nocobase/pull/7156)) oleh @mytharcher
- **[Formulir publik]** perbaiki masalah di mana bidang Hanya Tanggal gagal memilih tanggal di formulir publik. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]**

  - Hapus transaksi patching skema karena waktu habis oleh @mytharcher
  - Perbaiki asosiasi tidak dimuat setelah ditarik kembali oleh @mytharcher
  - Perbaiki kesalahan yang muncul saat persetujuan dihapus oleh @mytharcher
  - Perbaiki pembaruan asosiasi saat mengirimkan oleh @mytharcher

### [v1.8.0-beta.13](https://www.nocobase.com/en/blog/v1.8.0-beta.13)

*Tanggal rilis: 2025-07-03*

#### 🎉 Fitur Baru

- **[klien]**

  - Dukung bidang BIT di SQL Server untuk sumber data eksternal. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) oleh @aaaaaajie
  - Dukung variabel agregasi kustom ([#6916](https://github.com/nocobase/nocobase/pull/6916)) oleh @zhangzhonghe
    Referensi: [Variabel kustom](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** dukung otorisasi komersial ([#6554](https://github.com/nocobase/nocobase/pull/6554)) oleh @jiannx
- **[Manajer sumber data]** ✨ Dukung pemuatan koleksi sesuai permintaan dari sumber data eksternal ([#6979](https://github.com/nocobase/nocobase/pull/6979)) oleh @aaaaaajie
- **[Pengaturan lisensi]** tambahkan pengaturan lisensi dan validasi lisensi sebelum mengunduh plugin ([#7026](https://github.com/nocobase/nocobase/pull/7026)) oleh @jiannx
- **[Autentikasi]** Dukung fungsi "Lupa Kata Sandi" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) oleh @zhangzhonghe
  Referensi: [Lupa kata sandi](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Aksi: Pembaruan batch]** Dukung penyegaran data di blok data lain setelah memperbarui data di blok ([#6591](https://github.com/nocobase/nocobase/pull/6591)) oleh @zhangzhonghe
- **[Sumber data: SQL Server Eksternal]**

  - Menambahkan dukungan untuk bidang BIT SQL Server di sumber data eksternal oleh @aaaaaajie
  - Dukung pemuatan koleksi sesuai permintaan dari sumber data eksternal oleh @aaaaaajie
- **[Variabel kustom]** Dukung variabel agregasi kustom oleh @zhangzhonghe
  Referensi: [Variabel kustom](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Manajer email]**

  - dukung hapus email oleh @jiannx
  - dukung pengaturan interval sinkronisasi email oleh @jiannx
  - dukung pengiriman massal oleh @jiannx

#### 🚀 Peningkatan

- **[klien]**

  - Dukung pengisian bidang input melalui pemindaian kode QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) oleh @katherinehhh
  - Tentukan apakah akan menampilkan komponen seluler berdasarkan jenis perangkat, bukan lebar halaman ([#6611](https://github.com/nocobase/nocobase/pull/6611)) oleh @zhangzhonghe
  - dukung lokalisasi untuk konten blok Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) oleh @katherinehhh
  - Tentukan apakah akan menampilkan tata letak seluler berdasarkan jenis perangkat, bukan lebar halaman ([#6600](https://github.com/nocobase/nocobase/pull/6600)) oleh @zhangzhonghe
- **[Manajer tugas asinkron]** Tingkatkan kinerja pembuatan tugas selama ekspor ([#7078](https://github.com/nocobase/nocobase/pull/7078)) oleh @aaaaaajie
- **[Seluler]** Sesuaikan gaya pop-up notifikasi untuk perangkat seluler ([#6557](https://github.com/nocobase/nocobase/pull/6557)) oleh @zhangzhonghe
- **[Manajer email]**

  - dukung balasan dan penerusan email terpisah dalam subjek yang sama oleh @jiannx
  - implementasi skema kemudian kirim email dan dukung ai oleh @jiannx
  - mendukung nilai pengiriman default di pop-up, mendukung pencarian fuzzy untuk penerima, dan memperbaiki masalah oleh @jiannx
  - lengkapi fungsi pengiriman massal oleh @jiannx
  - peningkatan fungsional dan perbaikan masalah oleh @jiannx

#### 🐛 Perbaikan Bug

- **[cli]**

  - Sesuaikan salinan lisensi saat menginstal plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) oleh @jiannx
  - kesalahan tidak terdefinisi di unduh plugin ([#7143](https://github.com/nocobase/nocobase/pull/7143)) oleh @jiannx
- **[klien]**

  - Setelah menghapus nilai badge, UI tidak diperbarui ([#7055](https://github.com/nocobase/nocobase/pull/7055)) oleh @zhangzhonghe
  - Kesalahan saat mengklik tombol filter ([#7100](https://github.com/nocobase/nocobase/pull/7100)) oleh @zhangzhonghe
  - Perbaiki masalah di mana data pengguna saat ini kosong ([#7016](https://github.com/nocobase/nocobase/pull/7016)) oleh @zhangzhonghe
  - Konten ditampilkan salah di halaman yang dibuka melalui tautan popup ([#6990](https://github.com/nocobase/nocobase/pull/6990)) oleh @zhangzhonghe
  - Berikan props lain ke komponen Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) oleh @sheldon66
  - Tindakan Simpan sebagai template akan gagal jika berisi bidang asosiasi ([#6543](https://github.com/nocobase/nocobase/pull/6543)) oleh @gchust
- **[database]** buat operator eq untuk bidang string kompatibel dengan tipe angka ([#7062](https://github.com/nocobase/nocobase/pull/7062)) oleh @chenos
- **[build]** perbaiki kesalahan runtime klien di plugin-workflow-javascript, proses kesalahan undefine ([#6859](https://github.com/nocobase/nocobase/pull/6859)) oleh @jiannx
- **[Visualisasi data]** Masalah paginasi tabel ([#7151](https://github.com/nocobase/nocobase/pull/7151)) oleh @2013xile
- **[Manajer sumber data]** Memperbaiki masalah di mana kombinasi pemuatan sumber data sesuai permintaan dan konfigurasi awalan tabel menyebabkan kesalahan "ConnectionManager.getConnection was called after the connection manager was closed". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) oleh @aaaaaajie
- **[plugin-service-platform]** sesuaikan teks lisensi oleh @jiannx
- **[Variabel kustom]** Setelah menghapus nilai badge, UI tidak diperbarui oleh @zhangzhonghe
- **[Manajer email]**

  - lampiran tidak ditampilkan oleh @jiannx
  - kesalahan penghapusan email oleh @jiannx
  - penghapusan email gagal oleh @jiannx
  - pop-up pengaturan tidak ditampilkan oleh @jiannx
  - laci balasan tidak terlihat oleh @jiannx
  - pencarian fuzzy penerima mendukung bidang terkait oleh @jiannx
  - tambahkan bidang "id" ke mailmessagelabelsMailmessages oleh @jiannx
  - pencarian fuzzy surat untuk membuat filter unik oleh @jiannx
  - beberapa kunci utama untuk tabel "mailmessagelabels_mailmessages" oleh @jiannx

### [v1.8.0-beta.12](https://www.nocobase.com/en/blog/v1.8.0-beta.12)

*Tanggal rilis: 2025-07-03*

#### 🚀 Peningkatan

- **[database]** Dukung penambahan opsi pool dari env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) oleh @mytharcher
- **[Alur Kerja]**

  - Tingkatkan kinerja pemuatan daftar eksekusi dengan mengecualikan bidang JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) oleh @mytharcher
  - Tambahkan API log untuk pengujian node ([#7129](https://github.com/nocobase/nocobase/pull/7129)) oleh @mytharcher
- **[Manajer multi-aplikasi]** tambahkan dukungan filter ke manajemen multi-aplikasi ([#7124](https://github.com/nocobase/nocobase/pull/7124)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]** Ubah waktu menjadi absolut di linimasa oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - markdown tidak mencerminkan perubahan secara real-time saat mereferensikan variabel $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) oleh @katherinehhh
  - masalah gaya warna latar belakang di sub-tabel pada blok detail ([#7144](https://github.com/nocobase/nocobase/pull/7144)) oleh @katherinehhh
  - Konfigurasi UI node manual Alur Kerja: aturan tautan tidak dapat memilih variabel Formulir Saat Ini ([#7125](https://github.com/nocobase/nocobase/pull/7125)) oleh @zhangzhonghe
  - Pengaturan field displayName di tampilan yang terhubung tidak berpengaruh ([#7130](https://github.com/nocobase/nocobase/pull/7130)) oleh @aaaaaajie
  - nilai default bidang asosiasi menimpa data yang ada di sub-tabel ([#7120](https://github.com/nocobase/nocobase/pull/7120)) oleh @katherinehhh
  - Toleransi kesalahan untuk pengaturan berdasarkan 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) oleh @mytharcher
- **[utils]** masalah pemfilteran pada DateOnly atau Datetime (tanpa zona waktu) menggunakan variabel Exact day ([#7113](https://github.com/nocobase/nocobase/pull/7113)) oleh @katherinehhh
- **[Alur Kerja]** Perbaiki kesalahan yang muncul oleh impor siklik ([#7134](https://github.com/nocobase/nocobase/pull/7134)) oleh @mytharcher
- **[Kebijakan kata sandi]** Dukung penguncian akun pengguna secara permanen oleh @2013xile
- **[Alur Kerja: Subalur]** Perbaiki masalah dalam mode kluster oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Hapus bidang yang tidak dapat difilter dari filter oleh @mytharcher
  - Tambahkan pengaturan tata letak formulir oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.1](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Tanggal rilis: 2025-07-07*

#### 🎉 Fitur Baru

- **[server]** Tambahkan antrian peristiwa untuk memproses pesan dalam antrian ([#6819](https://github.com/nocobase/nocobase/pull/6819)) oleh @mytharcher

#### 🚀 Peningkatan

- **[Alur Kerja]** Pindahkan komponen umum ke plugin dasar ([#7140](https://github.com/nocobase/nocobase/pull/7140)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Setelah perubahan bidang, lingkup data yang bergantung pada bidang ini harus secara otomatis menghapus nilai yang dipilih ([#7161](https://github.com/nocobase/nocobase/pull/7161)) oleh @zhangzhonghe
  - Perbaiki masalah di mana pengaturan lebar kolom tabel tidak efektif ([#7158](https://github.com/nocobase/nocobase/pull/7158)) oleh @zhangzhonghe
  - Memperbaiki kesalahan yang terjadi saat menyimpan hubungan satu-ke-satu di bidang konfigurasi. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) oleh @aaaaaajie
  - Perbaiki masalah kesalahan dengan formulir filter di popup tombol Duplikat ([#7154](https://github.com/nocobase/nocobase/pull/7154)) oleh @zhangzhonghe
- **[tidak terdefinisi]** Perbaiki e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) oleh @mytharcher
- **[Manajer file]**

  - Perbaiki kesalahan build karena paket ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) oleh @mytharcher
  - Perbaiki deteksi mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) oleh @mytharcher
- **[Formulir publik]** perbaiki masalah di mana bidang Hanya Tanggal gagal memilih tanggal di formulir publik. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) oleh @katherinehhh
- **[Kalender]** atur hari awal minggu default ke 'senin' di blok kalender ([#7171](https://github.com/nocobase/nocobase/pull/7171)) oleh @katherinehhh
- **[Alur Kerja: Node manual]** Perbaiki pengimporan variabel yang salah ([#7156](https://github.com/nocobase/nocobase/pull/7156)) oleh @mytharcher
- **[Alur Kerja]** Perbaiki masalah di mana beberapa gesekan ke kiri diperlukan untuk kembali ke halaman sebelumnya di perangkat seluler ([#7165](https://github.com/nocobase/nocobase/pull/7165)) oleh @zhangzhonghe
- **[Alur Kerja: Persetujuan]**

  - Perbaiki pembaruan asosiasi saat mengirimkan oleh @mytharcher
  - Perbaiki kesalahan yang muncul saat persetujuan dihapus oleh @mytharcher
  - Perbaiki asosiasi tidak dimuat setelah ditarik kembali oleh @mytharcher
- **[Manajer email]**

  - setelah memilih baris, atur "Dibaca" dan "Belum dibaca" oleh @jiannx
  - konten submail tidak dapat difilter oleh @jiannx

### [v1.8.0-alpha.14](https://www.nocobase.com/en/blog/v1.8.0-alpha.14)

*Tanggal rilis: 2025-07-04*

#### 🐛 Perbaikan Bug

- **[Alur Kerja: Persetujuan]** Hapus transaksi patching skema karena waktu habis oleh @mytharcher

### [v1.8.0-alpha.13](https://www.nocobase.com/en/blog/v1.8.0-alpha.13)

*Tanggal rilis: 2025-07-03*

#### 🚀 Peningkatan

- **[Manajer email]** dukung balasan dan penerusan email terpisah dalam subjek yang sama oleh @jiannx

#### 🐛 Perbaikan Bug

- **[klien]**

  - masalah gaya warna latar belakang di sub-tabel pada blok detail ([#7144](https://github.com/nocobase/nocobase/pull/7144)) oleh @katherinehhh
  - markdown tidak mencerminkan perubahan secara real-time saat mereferensikan variabel $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) oleh @katherinehhh
- **[Visualisasi data]** Masalah paginasi tabel ([#7151](https://github.com/nocobase/nocobase/pull/7151)) oleh @2013xile
- **[Manajer sumber data]** Memperbaiki masalah di mana kombinasi pemuatan sumber data sesuai permintaan dan konfigurasi awalan tabel menyebabkan kesalahan "ConnectionManager.getConnection was called after the connection manager was closed". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) oleh @aaaaaajie
