---
title: "Pembaruan Mingguan NocoBase: Dukungan untuk gabungan peran pengguna"
description: "Pembaruan minggu ini meliputi: dukungan untuk variabel lingkungan di URL tombol tautan, mengaktifkan bidang teks panjang sebagai bidang judul untuk bidang asosiasi, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.7](https://www.nocobase.com/en/blog/v1.6.7)

*Tanggal rilis: 20-03-2025*

#### 🚀 Peningkatan

- **[Workflow: simpul mailer]** Tambahkan deskripsi konfigurasi bidang aman. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) oleh @sheldon66
- **[Notifikasi: Email]** Tambahkan deskripsi konfigurasi bidang aman. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) oleh @sheldon66
- **[Kalender]** Plugin Kalender dengan pengaturan opsional untuk mengaktifkan atau menonaktifkan pembuatan acara cepat ([#6391](https://github.com/nocobase/nocobase/pull/6391)) oleh @Cyx649312038

#### 🐛 Perbaikan Bug

- **[klien]** kesalahan pengiriman bidang waktu di lokal Indonesia (sintaks input tidak valid untuk tipe waktu) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) oleh @katherinehhh
- **[Manajer file]** Tidak dapat mengakses file yang disimpan di COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) oleh @chenos
- **[Blok: Peta]** bidang kunci rahasia tidak memicu validasi di manajemen peta ([#6509](https://github.com/nocobase/nocobase/pull/6509)) oleh @katherinehhh
- **[Klien WEB]** Jalur di tabel manajemen rute berbeda dari jalur sebenarnya ([#6483](https://github.com/nocobase/nocobase/pull/6483)) oleh @zhangzhonghe
- **[Aksi: Ekspor catatan Pro]** Tidak dapat mengekspor lampiran oleh @chenos
- **[Workflow: Persetujuan]**

  - Perbaiki crash yang disebabkan oleh pengguna null oleh @mytharcher
  - Perbaiki kesalahan yang muncul saat menambahkan hasil simpul kueri oleh @mytharcher

### [v1.6.8](https://www.nocobase.com/en/blog/v1.6.8)

*Tanggal rilis: 22-03-2025*

#### 🐛 Perbaikan Bug

- **[server]** Perintah upgrade dapat menyebabkan kesalahan workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) oleh @gchust
- **[klien]** tinggi sub-tabel dalam formulir diatur seiring dengan tinggi formulir ([#6518](https://github.com/nocobase/nocobase/pull/6518)) oleh @katherinehhh
- **[Otentikasi]**

  - X-Authenticator hilang ([#6526](https://github.com/nocobase/nocobase/pull/6526)) oleh @chenos
  - Rapikan opsi authenticator ([#6527](https://github.com/nocobase/nocobase/pull/6527)) oleh @2013xile
- **[Blok: Peta]** masalah manajemen kunci blok peta yang menyebabkan kegagalan permintaan karena karakter yang tidak terlihat ([#6521](https://github.com/nocobase/nocobase/pull/6521)) oleh @katherinehhh
- **[Manajer cadangan]** Pemulihan dapat menyebabkan kesalahan eksekusi workflow oleh @gchust
- **[WeCom]** Selesaikan variabel lingkungan dan rahasia saat mengambil konfigurasi notifikasi. oleh @2013xile

### [v1.6.9](https://www.nocobase.com/en/blog/v1.6.9)

*Tanggal rilis: 23-03-2025*

#### 🐛 Perbaikan Bug

- **[klien]** transparansi tombol aksi menyebabkan masalah tampilan pengaturan saat dihover ([#6529](https://github.com/nocobase/nocobase/pull/6529)) oleh @katherinehhh

### [v1.6.10](https://www.nocobase.com/en/blog/v1.6.10)

*Tanggal rilis: 25-03-2025*

#### 🐛 Perbaikan Bug

- **[klien]**

  - Tidak dapat menggunakan variabel 'Pengguna Saat Ini' saat menambahkan halaman tautan ([#6536](https://github.com/nocobase/nocobase/pull/6536)) oleh @zhangzhonghe
  - 字段赋值对字段进行“空值”赋值无效 ([#6549](https://github.com/nocobase/nocobase/pull/6549)) oleh @katherinehhh
  - Perintah `yarn doc` error ([#6540](https://github.com/nocobase/nocobase/pull/6540)) oleh @gchust
  - Hapus opsi 'Izinkan beberapa pilihan' dari bidang pilih tunggal dropdown di formulir filter ([#6515](https://github.com/nocobase/nocobase/pull/6515)) oleh @zhangzhonghe
  - Rentang data bidang relasional tidak efektif ([#6530](https://github.com/nocobase/nocobase/pull/6530)) oleh @zhangzhonghe
- **[Koleksi: Pohon]** Masalah migrasi untuk plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) oleh @2013xile
- **[Aksi: Permintaan kustom]** Tidak dapat mengunduh file yang dikodekan UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) oleh @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.7](https://www.nocobase.com/en/blog/v1.7.0-beta.7)

*Tanggal rilis: 19-03-2025*

#### 🚀 Peningkatan

- **[Kalender]** Plugin Kalender dengan pengaturan opsional untuk mengaktifkan atau menonaktifkan pembuatan acara cepat ([#6391](https://github.com/nocobase/nocobase/pull/6391)) oleh @Cyx649312038

#### 🐛 Perbaikan Bug

- **[klien]**

  - tombol add chi ld tidak menampilkan mode hanya ikon ([#6504](https://github.com/nocobase/nocobase/pull/6504)) oleh @katherinehhh
  - bidang aturan tautan default tersembunyi dengan nilai yang dipertahankan tidak berfungsi ([#6503](https://github.com/nocobase/nocobase/pull/6503)) oleh @katherinehhh
- **[Blok: Panel aksi]** masalah tata letak di panel aksi seluler setelah menyembunyikan tombol karena kontrol izin ([#6502](https://github.com/nocobase/nocobase/pull/6502)) oleh @katherinehhh
- **[Klien WEB]** Jalur di tabel manajemen rute berbeda dari jalur sebenarnya ([#6483](https://github.com/nocobase/nocobase/pull/6483)) oleh @zhangzhonghe

### [v1.7.0-beta.8](https://www.nocobase.com/en/blog/v1.7.0-beta.8)

*Tanggal rilis: 23-03-2025*

#### 🎉 Fitur Baru

- **[klien]** Dukung pengaturan Gaya bidang untuk ukuran font, ketebalan font, dan gaya font ([#6489](https://github.com/nocobase/nocobase/pull/6489)) oleh @katherinehhh
- **[Variabel dan rahasia]** dukung variabel lingkungan di URL tombol tautan ([#6494](https://github.com/nocobase/nocobase/pull/6494)) oleh @katherinehhh

#### 🚀 Peningkatan

- **[klien]** dukung pencocokan fuzzy untuk bidang yang dipilih di tombol filter ([#6496](https://github.com/nocobase/nocobase/pull/6496)) oleh @katherinehhh
- **[Workflow: simpul mailer]** Tambahkan deskripsi konfigurasi bidang aman. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) oleh @sheldon66
- **[Klien WEB]** tambahkan prompt konfirmasi sekunder untuk Hapus Cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) oleh @katherinehhh
- **[Notifikasi: Email]** Tambahkan deskripsi konfigurasi bidang aman. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) oleh @sheldon66
- **[Manajer email]** dukung otorisasi ulang & pilih akun secara otomatis saat mengirim email oleh @jiannx

#### 🐛 Perbaikan Bug

- **[server]** Perintah upgrade dapat menyebabkan kesalahan workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) oleh @gchust
- **[klien]**

  - tinggi sub-tabel dalam formulir diatur seiring dengan tinggi formulir ([#6518](https://github.com/nocobase/nocobase/pull/6518)) oleh @katherinehhh
  - kesalahan pengiriman bidang waktu di lokal Indonesia (sintaks input tidak valid untuk tipe waktu) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) oleh @katherinehhh
  - transparansi tombol aksi menyebabkan masalah tampilan pengaturan saat dihover ([#6529](https://github.com/nocobase/nocobase/pull/6529)) oleh @katherinehhh
- **[Otentikasi]**

  - Rapikan opsi authenticator ([#6527](https://github.com/nocobase/nocobase/pull/6527)) oleh @2013xile
  - X-Authenticator hilang ([#6526](https://github.com/nocobase/nocobase/pull/6526)) oleh @chenos
- **[Blok: Peta]**

  - masalah manajemen kunci blok peta yang menyebabkan kegagalan permintaan karena karakter yang tidak terlihat ([#6521](https://github.com/nocobase/nocobase/pull/6521)) oleh @katherinehhh
  - bidang kunci rahasia tidak memicu validasi di manajemen peta ([#6509](https://github.com/nocobase/nocobase/pull/6509)) oleh @katherinehhh
- **[Manajer file]** Tidak dapat mengakses file yang disimpan di COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) oleh @chenos
- **[Aksi: Ekspor catatan Pro]** Tidak dapat mengekspor lampiran oleh @chenos
- **[Manajer cadangan]** Pemulihan dapat menyebabkan kesalahan eksekusi workflow oleh @gchust
- **[WeCom]** Selesaikan variabel lingkungan dan rahasia saat mengambil konfigurasi notifikasi. oleh @2013xile
- **[Workflow: Persetujuan]**

  - Perbaiki kesalahan tabel proses saat pekerjaan dihapus oleh @mytharcher
  - Perbaiki kesalahan yang muncul saat menambahkan hasil simpul kueri oleh @mytharcher
  - Perbaiki crash yang disebabkan oleh pengguna null oleh @mytharcher

### [v1.7.0-beta.9](https://www.nocobase.com/en/blog/v1.7.0-beta.9)

*Tanggal rilis: 25-03-2025*

#### 🎉 Fitur Baru

- **[acl]** Dukung gabungan peran pengguna ([#6301](https://github.com/nocobase/nocobase/pull/6301)) oleh @aaaaaajie
- **[klien]**

  - dukung perluasan bidang preset dalam koleksi ([#6183](https://github.com/nocobase/nocobase/pull/6183)) oleh @katherinehhh
  - Dukung perluasan operator filter frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) oleh @katherinehhh
- **[Verifikasi]** Dukung pengikatan pengguna dari berbagai jenis verifikasi, seperti SMS dan authenticator TOTP, serta verifikasi identitas dalam skenario yang diperlukan. Aktifkan pengembangan dan perluasan metode verifikasi. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) oleh @2013xile
  Referensi: [Verifikasi](https://docs.nocobase.com/handbook/verification)
- **[Kalender]** Dukung perluasan bidang opsional untuk plugin Kanban, Kalender, dan Bidang Formula ([#6076](https://github.com/nocobase/nocobase/pull/6076)) oleh @katherinehhh
- **[Blok: template]** Tambahkan plugin `Blok: template`, menyediakan dukungan template untuk blok berdasarkan mekanisme pewarisan. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) oleh @gchust
- **[plugin-demo-platform]** Setel skipAuthCheck dari rute "/new" ke true. oleh @sheldon66
- **[Otentikasi dua faktor (2FA)]** Plugin baru: Otentikasi dua faktor dan Verifikasi: Authenticator TOTP oleh @2013xile
  Referensi: [Otentikasi dua faktor (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verifikasi: Authenticator TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 Peningkatan

- **[klien]**

  - Tambahkan skipAuthCheck ke router.add untuk mencegah pengalihan ke login di halaman publik. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) oleh @sheldon66
  - Tingkatkan dependensi terkait ant design ke 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) oleh @gchust
- **[utils]** Adaptasi halaman desktop untuk perangkat seluler ([#6393](https://github.com/nocobase/nocobase/pull/6393)) oleh @zhangzhonghe
- **[Formulir publik]** setel judul halaman formulir publik ke judul yang dikonfigurasi saat pembuatan ([#6538](https://github.com/nocobase/nocobase/pull/6538)) oleh @katherinehhh
- **[Manajer file]**

  - tambahkan kode backend untuk menghasilkan url pratinjau file ([#6223](https://github.com/nocobase/nocobase/pull/6223)) oleh @jiannx
  - Ubah api tipe penyimpanan dan tambahkan api plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) oleh @mytharcher
- **[Blok: template]** Dukung menyimpan blok data sebagai template blok dari halaman ([#6348](https://github.com/nocobase/nocobase/pull/6348)) oleh @gchust
- **[Workflow]** Pindahkan pengaturan ikat workflow ke plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - masalah seret dan lepas tombol baris tabel ([#6544](https://github.com/nocobase/nocobase/pull/6544)) oleh @katherinehhh
  - Tidak dapat menggunakan variabel 'Pengguna Saat Ini' saat menambahkan halaman tautan ([#6536](https://github.com/nocobase/nocobase/pull/6536)) oleh @zhangzhonghe
  - Rentang data bidang relasional tidak efektif ([#6530](https://github.com/nocobase/nocobase/pull/6530)) oleh @zhangzhonghe
  - Hapus opsi 'Izinkan beberapa pilihan' dari bidang pilih tunggal dropdown di formulir filter ([#6515](https://github.com/nocobase/nocobase/pull/6515)) oleh @zhangzhonghe
  - Perintah `yarn doc` error ([#6540](https://github.com/nocobase/nocobase/pull/6540)) oleh @gchust
  - bidang yang hilang dalam konfigurasi aturan tautan ([#6488](https://github.com/nocobase/nocobase/pull/6488)) oleh @katherinehhh
  - Konten tidak ditampilkan sepenuhnya di browser seluler ([#6446](https://github.com/nocobase/nocobase/pull/6446)) oleh @zhangzhonghe
  - Saat menggunakan operator '$anyOf', aturan tautan tidak valid ([#6400](https://github.com/nocobase/nocobase/pull/6400)) oleh @zhangzhonghe
  - pemformatan bidang waktu yang salah di formulir filter ([#6374](https://github.com/nocobase/nocobase/pull/6374)) oleh @katherinehhh
  - Gaya input tidak benar untuk pengaturan nilai default formulir ([#6490](https://github.com/nocobase/nocobase/pull/6490)) oleh @gchust
- **[utils]** Bug 'responsif desktop' yang diketahui ([#6476](https://github.com/nocobase/nocobase/pull/6476)) oleh @zhangzhonghe
- **[acl]** Memperbaiki masalah di mana bidang relasional tidak ditampilkan di bawah gabungan peran. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) oleh @aaaaaajie
- **[Koleksi: Pohon]** Masalah migrasi untuk plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) oleh @2013xile
- **[Aksi: Permintaan kustom]** Tidak dapat mengunduh file yang dikodekan UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) oleh @2013xile
- **[Variabel dan rahasia]** Tombol tidak ditampilkan di drawer buat variabel baru ([#6485](https://github.com/nocobase/nocobase/pull/6485)) oleh @gchust
- **[Klien WEB]** Ganti semua instance ctx.state.currentRole (peran tunggal) dengan ctx.state.currentRoles (mendukung banyak peran). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) oleh @aaaaaajie
- **[Kontrol akses]**

  - Kesalahan saat lingkup data diatur ke data sendiri dan tabel tidak memiliki bidang pembuat. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) oleh @aaaaaajie
  - Memperbaiki peralihan peran tidak berlaku. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) oleh @aaaaaajie
- **[Blok: template]**

  - Opsi Simpan sebagai template tidak ditampilkan di blok data halaman ([#6398](https://github.com/nocobase/nocobase/pull/6398)) oleh @gchust
  - Perilaku Simpan sebagai template yang salah di klien seluler ([#6420](https://github.com/nocobase/nocobase/pull/6420)) oleh @gchust
  - Memerlukan login saat mengakses formulir publik ([#6258](https://github.com/nocobase/nocobase/pull/6258)) oleh @gchust
- **[Auth: Kunci API]** Penghapusan gabungan daftar peran plugin kunci API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) oleh @aaaaaajie
- **[Blok: Formulir multi-langkah]** tombol kirim memiliki warna yang sama dalam keadaan default dan disorot oleh @jiannx
- **[Workflow: Persetujuan]** Masalah gaya dengan dialog popup 'Ajukan baru' oleh @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.4](https://www.nocobase.com/en/blog/v1.7.0-alpha.4)

*Tanggal rilis: 23-03-2025*

#### 🎉 Fitur Baru

- **[klien]**

  - dukung bidang teks panjang sebagai bidang judul untuk bidang asosiasi ([#6495](https://github.com/nocobase/nocobase/pull/6495)) oleh @katherinehhh
  - Dukung pengaturan Gaya bidang untuk ukuran font, ketebalan font, dan gaya font ([#6489](https://github.com/nocobase/nocobase/pull/6489)) oleh @katherinehhh
- **[Variabel dan rahasia]** dukung variabel lingkungan di URL tombol tautan ([#6494](https://github.com/nocobase/nocobase/pull/6494)) oleh @katherinehhh
- **[Workflow: Simpul agregat]** Dukung konfigurasi presisi untuk hasil agregasi ([#6491](https://github.com/nocobase/nocobase/pull/6491)) oleh @mytharcher

#### 🚀 Peningkatan

- **[klien]** dukung pencocokan fuzzy untuk bidang yang dipilih di tombol filter ([#6496](https://github.com/nocobase/nocobase/pull/6496)) oleh @katherinehhh
- **[Notifikasi: Email]** Tambahkan deskripsi konfigurasi bidang aman. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) oleh @sheldon66
- **[Workflow: simpul mailer]** Tambahkan deskripsi konfigurasi bidang aman. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) oleh @sheldon66
- **[Kalender]** Plugin Kalender dengan pengaturan opsional untuk mengaktifkan atau menonaktifkan pembuatan acara cepat ([#6391](https://github.com/nocobase/nocobase/pull/6391)) oleh @Cyx649312038
- **[Klien WEB]** tambahkan prompt konfirmasi sekunder untuk Hapus Cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) oleh @katherinehhh
- **[Manajer email]** dukung otorisasi ulang & pilih akun secara otomatis saat mengirim email oleh @jiannx

#### 🐛 Perbaikan Bug

- **[klien]**

  - transparansi tombol aksi menyebabkan masalah tampilan pengaturan saat dihover ([#6529](https://github.com/nocobase/nocobase/pull/6529)) oleh @katherinehhh
  - kesalahan pengiriman bidang waktu di lokal Indonesia (sintaks input tidak valid untuk tipe waktu) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) oleh @katherinehhh
  - tinggi sub-tabel dalam formulir diatur seiring dengan tinggi formulir ([#6518](https://github.com/nocobase/nocobase/pull/6518)) oleh @katherinehhh
  - bidang aturan tautan default tersembunyi dengan nilai yang dipertahankan tidak berfungsi ([#6503](https://github.com/nocobase/nocobase/pull/6503)) oleh @katherinehhh
  - tombol add chi ld tidak menampilkan mode hanya ikon ([#6504](https://github.com/nocobase/nocobase/pull/6504)) oleh @katherinehhh
- **[server]** Perintah upgrade dapat menyebabkan kesalahan workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) oleh @gchust
- **[utils]** Bug 'responsif desktop' yang diketahui ([#6476](https://github.com/nocobase/nocobase/pull/6476)) oleh @zhangzhonghe
- **[evaluators]** Kembalikan tempat desimal pembulatan ke 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) oleh @mytharcher
- **[Otentikasi]**

  - Rapikan opsi authenticator ([#6527](https://github.com/nocobase/nocobase/pull/6527)) oleh @2013xile
  - X-Authenticator hilang ([#6526](https://github.com/nocobase/nocobase/pull/6526)) oleh @chenos
- **[Blok: Peta]**

  - masalah manajemen kunci blok peta yang menyebabkan kegagalan permintaan karena karakter yang tidak terlihat ([#6521](https://github.com/nocobase/nocobase/pull/6521)) oleh @katherinehhh
  - bidang kunci rahasia tidak memicu validasi di manajemen peta ([#6509](https://github.com/nocobase/nocobase/pull/6509)) oleh @katherinehhh
- **[Manajer file]**

  - Tidak dapat mengakses file yang disimpan di COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) oleh @chenos
  - encode url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) oleh @chenos
- **[Klien WEB]** Jalur di tabel manajemen rute berbeda dari jalur sebenarnya ([#6483](https://github.com/nocobase/nocobase/pull/6483)) oleh @zhangzhonghe
- **[Blok: Panel aksi]** masalah tata letak di panel aksi seluler setelah menyembunyikan tombol karena kontrol izin ([#6502](https://github.com/nocobase/nocobase/pull/6502)) oleh @katherinehhh
- **[Sumber data: Utama]** Tidak dapat membuat tampilan MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) oleh @aaaaaajie
- **[Workflow]** Perbaiki jumlah tugas lama setelah workflow dihapus ([#6493](https://github.com/nocobase/nocobase/pull/6493)) oleh @mytharcher
- **[Aksi: Ekspor catatan Pro]** Tidak dapat mengekspor lampiran oleh @chenos
- **[Manajer cadangan]**

  - File yang diunggah belum dipulihkan saat membuat sub-aplikasi dari template cadangan oleh @gchust
  - Pemulihan dapat menyebabkan kesalahan eksekusi workflow oleh @gchust
  - Kegagalan pemulihan database MySQL yang disebabkan oleh tumpang tindih set GTID oleh @gchust
- **[WeCom]** Selesaikan variabel lingkungan dan rahasia saat mengambil konfigurasi notifikasi. oleh @2013xile
- **[Workflow: Persetujuan]**

  - Perbaiki kesalahan tabel proses saat pekerjaan dihapus oleh @mytharcher
  - Ubah pengembalian persetujuan sebagai todo oleh @mytharcher
  - Perbaiki kesalahan yang muncul saat menambahkan hasil simpul kueri oleh @mytharcher
  - Perbaiki tombol aksi yang terlewat di tabel proses oleh @mytharcher
  - Masalah gaya dengan dialog popup 'Ajukan baru' oleh @zhangzhonghe

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
