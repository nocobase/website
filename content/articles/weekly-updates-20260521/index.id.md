---
title: "Pembaruan Mingguan｜Menambahkan dukungan client-v2 untuk plugin Kanban"
description: "Ini adalah ringkasan pembaruan fitur dan peningkatan NocoBase dari 14 Mei hingga 21 Mei 2026."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.55](https://www.nocobase.com/en/blog/v2.0.55)

*Tanggal rilis: 18-05-2026*

### 🚀 Peningkatan

- **[Karyawan AI]** Prompt saat nama tabel duplikat ketika menyimpan ke basis data vektor ([#9497](https://github.com/nocobase/nocobase/pull/9497)) oleh @cgyrock
- **[AI: Basis Pengetahuan]** Prompt saat nama tabel duplikat ketika menyimpan ke basis data vektor oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana variabel rekaman popup saat ini tidak dapat diselesaikan dalam alur peristiwa tombol aksi. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) oleh @gchust
  - Memperbaiki masalah di mana nilai bidang JS dalam subform tidak diatur dengan benar selama pengiriman formulir. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) oleh @gchust
- **[Manajer Berkas]** Memperbaiki unggahan `tx-cos` manajer berkas yang kehilangan metadata ukuran berkas. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) oleh @mytharcher
- **[Sumber data: Utama]** Memperbaiki masalah di mana opsi bidang ditulis ke dalam skema setelah menyinkronkan bidang ([#9505](https://github.com/nocobase/nocobase/pull/9505)) oleh @2013xile
- **[Klien WEB]** Membersihkan data blok setelah menghapus menu. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) oleh @gchust
- **[Karyawan AI]** Memperbaiki kesalahan pembacaan berkas OSS karyawan AI ([#9493](https://github.com/nocobase/nocobase/pull/9493)) oleh @cgyrock
- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana rekaman yang diimpor pada bidang seperti tanggal menunjukkan tanggal yang salah ([#9463](https://github.com/nocobase/nocobase/pull/9463)) oleh @mytharcher
- **[Aksi: Ekspor rekaman Pro]** Memperbaiki masalah di mana kesalahan muncul saat mengekspor lampiran dari bidang url lampiran oleh @mytharcher
- **[Aksi: Impor rekaman Pro]** memperbaiki penanganan zona waktu untuk impor xlsx pro oleh @mytharcher

### [v2.0.53](https://www.nocobase.com/en/blog/v2.0.53)

*Tanggal rilis: 14-05-2026*

### 🚀 Peningkatan

- **[mesin-alur]** Menambahkan pesan konfirmasi perubahan yang belum disimpan saat menutup halaman konfigurasi alur peristiwa dengan data yang belum disimpan. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) oleh @gchust

### 🐛 Perbaikan Bug

- **[klien]**

  - memperbaiki pencegahan pembukaan edit cepat untuk bidang relasi di tabel ([#9469](https://github.com/nocobase/nocobase/pull/9469)) oleh @katherinehhh
  - Memperbaiki bidang relasi hanya-tampilan di sub-tabel yang tidak muncul atau tidak dapat diklik setelah penyegaran. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) oleh @jiannx
  - memperbaiki bidang pilihan ganda di blok data v2 harus menampilkan label opsi, bukan nilai ([#9472](https://github.com/nocobase/nocobase/pull/9472)) oleh @katherinehhh
- **[Blok: Formulir multi-langkah]** memperbaiki masalah scrollbar saat mengaktifkan tinggi penuh di blok formulir langkah v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) oleh @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.35](https://www.nocobase.com/en/blog/v2.1.0-beta.35)

*Tanggal rilis: 20-05-2026*

### 🚀 Peningkatan

- **[klien]** Berbagi evaluasi kondisi antara aplikasi v1 dan v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) oleh @zhangzhonghe
- **[Lokalisasi]** Peningkatan tugas terjemahan lokalisasi Lina dengan cakupan terjemahan, pengaturan bahasa referensi, dan pengeditan cepat ([#9521](https://github.com/nocobase/nocobase/pull/9521)) oleh @2013xile
- **[Alur Kerja: Persetujuan]** Meningkatkan persetujuan terkait dengan kartu linimasa oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[tidak terdefinisi]** menyelaraskan jalur konfigurasi nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) oleh @chenos
- **[cli-v1]** Memperbaiki startup pengembangan create-nocobase-app dengan menggunakan kembali shell aplikasi yang dikemas sambil mengaktifkan pengembangan plugin lokal. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) oleh @Molunerfinn
- **[klien]**

  - Memperbaiki masalah di mana lencana menu masih menampilkan titik ketika nilainya 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana formulir filter tidak dapat menggunakan variabel formulir saat ini ([#9474](https://github.com/nocobase/nocobase/pull/9474)) oleh @zhangzhonghe
- **[Otentikasi]** Mencegah server mogok ketika token auth WebSocket merujuk pada authenticator yang plugin tipe auth-nya dibongkar atau hilang. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) oleh @Molunerfinn
- **[Kalender]**

  - Memperbaiki masalah di mana lebih banyak item kalender tidak dapat ditampilkan sepenuhnya ([#9492](https://github.com/nocobase/nocobase/pull/9492)) oleh @zhangzhonghe
  - Memperbaiki gaya kursor untuk item acara di overlay lebih-banyak-acara kalender ([#9519](https://github.com/nocobase/nocobase/pull/9519)) oleh @jiannx
- **[Pengaturan lisensi]** menyelesaikan symlinked bundled deps ([#9518](https://github.com/nocobase/nocobase/pull/9518)) oleh @chenos

### [v2.1.0-beta.34](https://www.nocobase.com/en/blog/v2.1.0-beta.34)

*Tanggal rilis: 19-05-2026*

### 🎉 Fitur Baru

- **[Blok: Kanban]** Menambahkan dukungan client-v2 untuk plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) oleh @jiannx

### 🚀 Peningkatan

- **[cli]** Meningkatkan pengalaman prompt CLI NocoBase dengan memigrasikan alur kerja penyiapan dan manajemen ke Inquirer, dan memperbaiki masalah terkait instalasi, skill, dan runtime Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) oleh @chenos
- **[Karyawan AI]** Prompt saat nama tabel duplikat ketika menyimpan ke basis data vektor ([#9497](https://github.com/nocobase/nocobase/pull/9497)) oleh @cgyrock
- **[Manajer notifikasi]** Mengubah strategi antrian untuk mengoptimalkan kinerja pengiriman ([#9407](https://github.com/nocobase/nocobase/pull/9407)) oleh @mytharcher
- **[Alur Kerja: Peristiwa aksi kustom]** Memigrasikan plugin block-workbench dan workflow-custom-action-trigger ke klien v2, termasuk model aksi dan alur pemindai QR mereka. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) oleh @jiannx
- **[Otentikasi]** Menerapkan halaman pengaturan Authenticators di client-v2 dan mengirimkan tabel client-v2 yang dapat digunakan kembali, input variabel, dan primitif formulir. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) oleh @Molunerfinn
- **[AI: Basis Pengetahuan]** Prompt saat nama tabel duplikat ketika menyimpan ke basis data vektor oleh @cgyrock
- **[Auth: SAML 2.0]** Menambahkan entri client-v2 untuk plugin otentikasi CAS dan SAML sehingga berfungsi dengan halaman masuk v2 dan pengaturan Authenticators. oleh @Molunerfinn

### 🐛 Perbaikan Bug

- **[client-v2]**

  - Memperbaiki rute plugin Kanban v2 gagal dimuat karena dependensi dnd-kit tidak disediakan oleh klien. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) oleh @jiannx
  - Komponen Tabel v2 bersama sekarang menampilkan pemilih ukuran halaman secara default, sesuai dengan perilaku v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) oleh @Molunerfinn
- **[klien]**

  - Memperbaiki masalah di mana nilai bidang JS dalam subform tidak diatur dengan benar selama pengiriman formulir. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) oleh @gchust
  - Memperbaiki masalah di mana variabel rekaman popup saat ini tidak dapat diselesaikan dalam alur peristiwa tombol aksi. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) oleh @gchust
- **[mesin-alur]** Memperbaiki pesan kesalahan yang salah di konsol browser. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) oleh @gchust
- **[Karyawan AI]**

  - Memperbaiki masalah di mana izin peran operator tidak berpengaruh di simpul karyawan AI ([#9513](https://github.com/nocobase/nocobase/pull/9513)) oleh @cgyrock
  - Memperbaiki kesalahan pembacaan berkas OSS karyawan AI ([#9493](https://github.com/nocobase/nocobase/pull/9493)) oleh @cgyrock
- **[Dokumentasi API]** Memperbaiki dokumentasi API koleksi sehingga parameter kueri tidak lagi saling mengganggu ([#9442](https://github.com/nocobase/nocobase/pull/9442)) oleh @jiannx
- **[Sumber data: Utama]** Memperbaiki masalah di mana opsi bidang ditulis ke dalam skema setelah menyinkronkan bidang ([#9505](https://github.com/nocobase/nocobase/pull/9505)) oleh @2013xile
- **[Alur Kerja: JavaScript]** Memperbaiki pemuatan paket runtime QuickJS JavaScript alur kerja di build produksi. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) oleh @mytharcher
- **[Klien WEB]** Membersihkan data blok setelah menghapus menu. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) oleh @gchust
- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana rekaman yang diimpor pada bidang seperti tanggal menunjukkan tanggal yang salah ([#9463](https://github.com/nocobase/nocobase/pull/9463)) oleh @mytharcher
- **[Aksi: Impor rekaman Pro]** memperbaiki penanganan zona waktu untuk impor xlsx pro oleh @mytharcher
- **[Auth: SAML 2.0]** Memperbaiki interceptor pengalihan otomatis SAML yang membuat shell aplikasi berkedip dan membuka laci dua kali pada setiap navigasi. oleh @Molunerfinn
- **[Aksi: Ekspor rekaman Pro]** Memperbaiki masalah di mana kesalahan muncul saat mengekspor lampiran dari bidang url lampiran oleh @mytharcher

### [v2.1.0-beta.33](https://www.nocobase.com/en/blog/v2.1.0-beta.33)

*Tanggal rilis: 15-05-2026*

### 🎉 Fitur Baru

- **[Blok: Markdown]** Menambahkan dukungan klien v2 untuk blok Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) oleh @jiannx
- **[Blok: Daftar]** Blok daftar mendukung client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) oleh @jiannx
- **[Kalender]** Menambahkan dukungan klien v2 untuk plugin Kalender. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) oleh @jiannx
- **[Blok: Pohon]** Menambahkan dukungan client-v2 untuk blok filter pohon. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) oleh @jiannx

### 🚀 Peningkatan

- **[mesin-alur]** Menambahkan pesan konfirmasi perubahan yang belum disimpan saat menutup halaman konfigurasi alur peristiwa dengan data yang belum disimpan. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) oleh @gchust
- **[Manajer sumber data]** Mengoptimalkan API pemodelan data untuk mendukung pembuatan koleksi komentar dengan AI, mengonfigurasi bidang relasi untuk sumber data eksternal, dan mengatur aturan validasi bidang ([#9480](https://github.com/nocobase/nocobase/pull/9480)) oleh @2013xile
- **[Blok: GridCard]** Memperbarui plugin kartu grid untuk mendukung klien v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) oleh @jiannx
- **[Blok: iframe]** Menambahkan dukungan v2 untuk blok iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) oleh @jiannx
- **[Karyawan AI]** Optimasi interaksi dan kinerja percakapan paralel karyawan AI ([#9462](https://github.com/nocobase/nocobase/pull/9462)) oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**

  - Menambahkan pengaturan "Setelah pengiriman berhasil" untuk aksi kirim formulir. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) oleh @jiannx
  - memperbaiki pencegahan pembukaan edit cepat untuk bidang relasi di tabel ([#9469](https://github.com/nocobase/nocobase/pull/9469)) oleh @katherinehhh
  - Memperbaiki bidang relasi hanya-tampilan di sub-tabel yang tidak muncul atau tidak dapat diklik setelah penyegaran. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) oleh @jiannx
  - Memperbaiki masalah di mana pengaturan nilai default lama tidak dapat dihapus. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) oleh @gchust
  - memperbaiki bidang pilihan ganda di blok data v2 harus menampilkan label opsi, bukan nilai ([#9472](https://github.com/nocobase/nocobase/pull/9472)) oleh @katherinehhh
- **[client-v2]**

  - Memperbaiki masalah di mana daftar opsi bidang judul kosong untuk bidang relasi di blok tabel ([#9490](https://github.com/nocobase/nocobase/pull/9490)) oleh @katherinehhh
  - Menjaga grup kosong setelah memfilter menu v1 di tata letak v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) oleh @zhangzhonghe
- **[mesin-alur]** Memperbaiki submenu bidang relasi yang tidak stabil di menu submodel ([#9417](https://github.com/nocobase/nocobase/pull/9417)) oleh @jiannx
- **[Manajer Berkas]** Memperbaiki unggahan `tx-cos` manajer berkas yang kehilangan metadata ukuran berkas. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) oleh @mytharcher
- **[Karyawan AI]** Memperbaiki kesalahan muat plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) oleh @cgyrock
- **[Blok: Formulir multi-langkah]** memperbaiki masalah scrollbar saat mengaktifkan tinggi penuh di blok formulir langkah v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) oleh @katherinehhh
- **[Alur Kerja: Webhook]** Memperbaiki masalah di mana pembuatan simpul respons dicegat oleh validasi konfigurasi `statusCode` oleh @mytharcher
- **[Bidang koleksi: Tanda tangan]** Menyelesaikan masalah tampilan kotak tanda tangan di perangkat seluler oleh @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.39](https://www.nocobase.com/en/blog/v2.1.0-alpha.39)

*Tanggal rilis: 20-05-2026*

### 🎉 Fitur Baru

- **[Blok: Kanban]** Menambahkan dukungan client-v2 untuk plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) oleh @jiannx

### 🚀 Peningkatan

- **[klien]** Berbagi evaluasi kondisi antara aplikasi v1 dan v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) oleh @zhangzhonghe
- **[Lokalisasi]** Peningkatan tugas terjemahan lokalisasi Lina dengan cakupan terjemahan, pengaturan bahasa referensi, dan pengeditan cepat ([#9521](https://github.com/nocobase/nocobase/pull/9521)) oleh @2013xile
- **[Karyawan AI]** Prompt saat nama tabel duplikat ketika menyimpan ke basis data vektor ([#9497](https://github.com/nocobase/nocobase/pull/9497)) oleh @cgyrock
- **[Manajer notifikasi]** Mengubah strategi antrian untuk mengoptimalkan kinerja pengiriman ([#9407](https://github.com/nocobase/nocobase/pull/9407)) oleh @mytharcher
- **[Alur Kerja: Peristiwa aksi kustom]** Memigrasikan plugin block-workbench dan workflow-custom-action-trigger ke klien v2, termasuk model aksi dan alur pemindai QR mereka. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) oleh @jiannx
- **[Otentikasi]** Menerapkan halaman pengaturan Authenticators di client-v2 dan mengirimkan tabel client-v2 yang dapat digunakan kembali, input variabel, dan primitif formulir. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) oleh @Molunerfinn
- **[AI: Basis Pengetahuan]** Prompt saat nama tabel duplikat ketika menyimpan ke basis data vektor oleh @cgyrock
- **[Auth: SAML 2.0]** Menambahkan entri client-v2 untuk plugin otentikasi CAS dan SAML sehingga berfungsi dengan halaman masuk v2 dan pengaturan Authenticators. oleh @Molunerfinn
- **[Alur Kerja: Persetujuan]** Meningkatkan persetujuan terkait dengan kartu linimasa oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[tidak terdefinisi]** menyelaraskan jalur konfigurasi nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) oleh @chenos
- **[cli-v1]** Memperbaiki startup pengembangan create-nocobase-app dengan menggunakan kembali shell aplikasi yang dikemas sambil mengaktifkan pengembangan plugin lokal. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) oleh @Molunerfinn
- **[klien]**

  - Memperbaiki masalah di mana formulir filter tidak dapat menggunakan variabel formulir saat ini ([#9474](https://github.com/nocobase/nocobase/pull/9474)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana lencana menu masih menampilkan titik ketika nilainya 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) oleh @zhangzhonghe
- **[client-v2]**

  - Komponen Tabel v2 bersama sekarang menampilkan pemilih ukuran halaman secara default, sesuai dengan perilaku v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) oleh @Molunerfinn
  - Memperbaiki rute plugin Kanban v2 gagal dimuat karena dependensi dnd-kit tidak disediakan oleh klien. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) oleh @jiannx
- **[Kalender]**

  - Memperbaiki gaya kursor untuk item acara di overlay lebih-banyak-acara kalender ([#9519](https://github.com/nocobase/nocobase/pull/9519)) oleh @jiannx
  - Memperbaiki masalah di mana lebih banyak item kalender tidak dapat ditampilkan sepenuhnya ([#9492](https://github.com/nocobase/nocobase/pull/9492)) oleh @zhangzhonghe
- **[Pengaturan lisensi]** menyelesaikan symlinked bundled deps ([#9518](https://github.com/nocobase/nocobase/pull/9518)) oleh @chenos
- **[Karyawan AI]**

  - Memperbaiki masalah di mana izin peran operator tidak berpengaruh di simpul karyawan AI ([#9513](https://github.com/nocobase/nocobase/pull/9513)) oleh @cgyrock
  - Memperbaiki kesalahan pembacaan berkas OSS karyawan AI ([#9493](https://github.com/nocobase/nocobase/pull/9493)) oleh @cgyrock
- **[Otentikasi]** Mencegah server mogok ketika token auth WebSocket merujuk pada authenticator yang plugin tipe auth-nya dibongkar atau hilang. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) oleh @Molunerfinn
- **[Dokumentasi API]** Memperbaiki dokumentasi API koleksi sehingga parameter kueri tidak lagi saling mengganggu ([#9442](https://github.com/nocobase/nocobase/pull/9442)) oleh @jiannx
- **[Sumber data: Utama]** Memperbaiki masalah di mana opsi bidang ditulis ke dalam skema setelah menyinkronkan bidang ([#9505](https://github.com/nocobase/nocobase/pull/9505)) oleh @2013xile
- **[Auth: SAML 2.0]** Memperbaiki interceptor pengalihan otomatis SAML yang membuat shell aplikasi berkedip dan membuka laci dua kali pada setiap navigasi. oleh @Molunerfinn

### [v2.1.0-alpha.38](https://www.nocobase.com/en/blog/v2.1.0-alpha.38)

*Tanggal rilis: 18-05-2026*

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana variabel rekaman popup saat ini tidak dapat diselesaikan dalam alur peristiwa tombol aksi. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) oleh @gchust
  - Memperbaiki masalah di mana nilai bidang JS dalam subform tidak diatur dengan benar selama pengiriman formulir. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) oleh @gchust
- **[mesin-alur]** Memperbaiki pesan kesalahan yang salah di konsol browser. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) oleh @gchust
- **[Alur Kerja: JavaScript]** Memperbaiki pemuatan paket runtime QuickJS JavaScript alur kerja di build produksi. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) oleh @mytharcher
- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana rekaman yang diimpor pada bidang seperti tanggal menunjukkan tanggal yang salah ([#9463](https://github.com/nocobase/nocobase/pull/9463)) oleh @mytharcher
- **[Aksi: Impor rekaman Pro]** memperbaiki penanganan zona waktu untuk impor xlsx pro oleh @mytharcher
- **[Aksi: Ekspor rekaman Pro]** Memperbaiki masalah di mana kesalahan muncul saat mengekspor lampiran dari bidang url lampiran oleh @mytharcher

### [v2.1.0-alpha.37](https://www.nocobase.com/en/blog/v2.1.0-alpha.37)

*Tanggal rilis: 17-05-2026*

### 🐛 Perbaikan Bug

- **[Klien WEB]** Membersihkan data blok setelah menghapus menu. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) oleh @gchust

### [v2.1.0-alpha.36](https://www.nocobase.com/en/blog/v2.1.0-alpha.36)

*Tanggal rilis: 16-05-2026*

### 🎉 Fitur Baru

- **[Blok: Markdown]** Menambahkan dukungan klien v2 untuk blok Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) oleh @jiannx
- **[Blok: Daftar]** Blok daftar mendukung client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) oleh @jiannx

### 🚀 Peningkatan

- **[mesin-alur]** Menambahkan pesan konfirmasi perubahan yang belum disimpan saat menutup halaman konfigurasi alur peristiwa dengan data yang belum disimpan. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) oleh @gchust
- **[cli]** Meningkatkan pengalaman prompt CLI NocoBase dengan memigrasikan alur kerja penyiapan dan manajemen ke Inquirer, dan memperbaiki masalah terkait instalasi, skill, dan runtime Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) oleh @chenos
- **[Manajer sumber data]** Mengoptimalkan API pemodelan data untuk mendukung pembuatan koleksi komentar dengan AI, mengonfigurasi bidang relasi untuk sumber data eksternal, dan mengatur aturan validasi bidang ([#9480](https://github.com/nocobase/nocobase/pull/9480)) oleh @2013xile
- **[Blok: GridCard]** Memperbarui plugin kartu grid untuk mendukung klien v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) oleh @jiannx
- **[Blok: iframe]** Menambahkan dukungan v2 untuk blok iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) oleh @jiannx

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki bidang relasi hanya-tampilan di sub-tabel yang tidak muncul atau tidak dapat diklik setelah penyegaran. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) oleh @jiannx
  - Menambahkan pengaturan "Setelah pengiriman berhasil" untuk aksi kirim formulir. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) oleh @jiannx
- **[client-v2]** Memperbaiki masalah di mana daftar opsi bidang judul kosong untuk bidang relasi di blok tabel ([#9490](https://github.com/nocobase/nocobase/pull/9490)) oleh @katherinehhh
- **[mesin-alur]** Memperbaiki submenu bidang relasi yang tidak stabil di menu submodel ([#9417](https://github.com/nocobase/nocobase/pull/9417)) oleh @jiannx
- **[Manajer Berkas]** Memperbaiki unggahan `tx-cos` manajer berkas yang kehilangan metadata ukuran berkas. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) oleh @mytharcher
- **[Bidang koleksi: Tanda tangan]** Menyelesaikan masalah tampilan kotak tanda tangan di perangkat seluler oleh @chenzhizdt

### [v2.1.0-alpha.35](https://www.nocobase.com/en/blog/v2.1.0-alpha.35)

*Tanggal rilis: 14-05-2026*

### 🎉 Fitur Baru

- **[tidak terdefinisi]** Menambahkan karyawan AI baru, Insinyur Lokalisasi Lina, untuk membantu tugas terjemahan lokalisasi ([#9434](https://github.com/nocobase/nocobase/pull/9434)) oleh @2013xile
  Referensi: [Manajemen Lokalisasi](https://docs.nocobase.com/system-management/localization)<br>[Lina: Insinyur Lokalisasi](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Gunakan Lina dan HY-MT1.5-1.8B lokal untuk menerjemahkan entri lokalisasi](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Kalender]** Menambahkan dukungan klien v2 untuk plugin Kalender. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) oleh @jiannx
- **[Blok: Pohon]** Menambahkan dukungan client-v2 untuk blok filter pohon. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) oleh @jiannx
- **[Penyimpanan berkas: S3(Pro)]** Mendukung unggahan berkas melalui penyimpanan S3 Pro di manajer berkas v2. oleh @Molunerfinn

### 🚀 Peningkatan

- **[build]** Menambahkan cakupan regresi untuk menjaga `deleteServerFiles` agar tidak menghapus artefak build `client` dan `client-v2` di seluruh jalur Windows dan POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) oleh @Molunerfinn
- **[klien]** mengecualikan rekaman yang sudah diasosiasikan dalam dialog pemilihan asosiasi blok tabel satu-ke-banyak ([#9448](https://github.com/nocobase/nocobase/pull/9448)) oleh @katherinehhh
- **[Karyawan AI]** Optimasi interaksi dan kinerja percakapan paralel karyawan AI ([#9462](https://github.com/nocobase/nocobase/pull/9462)) oleh @cgyrock
- **[Manajer Berkas]** Plugin penyimpanan pihak ketiga sekarang dapat mendaftarkan formulir tipe penyimpanan mereka sendiri di halaman pengaturan manajer berkas v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) oleh @Molunerfinn
- **[AI: Basis Pengetahuan]** Pengidentifikasi unik untuk basis pengetahuan dapat dikonfigurasi pada saat pembuatan oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**

  - memperbaiki pencegahan pembukaan edit cepat untuk bidang relasi di tabel ([#9469](https://github.com/nocobase/nocobase/pull/9469)) oleh @katherinehhh
  - memperbaiki bidang pilihan ganda di blok data v2 harus menampilkan label opsi, bukan nilai ([#9472](https://github.com/nocobase/nocobase/pull/9472)) oleh @katherinehhh
  - Memperbaiki permintaan tabel duplikat ketika formulir filter memiliki nilai default ([#9423](https://github.com/nocobase/nocobase/pull/9423)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana pengaturan nilai default lama tidak dapat dihapus. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) oleh @gchust
  - Memperbaiki masalah di mana tidak dapat memilih opsi untuk bidang pilihan asosiasi. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) oleh @gchust
  - Memperbaiki masalah di mana pengaturan sistem tampak kosong setelah dikirim ([#9458](https://github.com/nocobase/nocobase/pull/9458)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana cakupan data blok target diatur secara tidak benar ketika membatalkan pilihan data baris dalam alur peristiwa blok tabel. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) oleh @gchust
  - memperbaiki kesalahan saat mengubah bidang judul bidang asosiasi di blok tabel v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) oleh @katherinehhh
  - Memperbaiki aturan tautan V2 untuk mendukung pengaturan opsi yang dapat dipilih untuk bidang ([#9399](https://github.com/nocobase/nocobase/pull/9399)) oleh @jiannx
- **[client-v2]**

  - Menjaga grup kosong setelah memfilter menu v1 di tata letak v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana halaman menjadi kosong di belakang dialog pengaktifan plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) oleh @zhangzhonghe
  - Memperbaiki halaman admin v1 yang mogok ketika merujuk modul plugin v2 di build produksi. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) oleh @Molunerfinn
- **[cli-v1]** Memperbaiki kegagalan startup pengembangan di aplikasi yang dibuat dengan create-nocobase-app yang disebabkan oleh resolusi jalur klien app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) oleh @Molunerfinn
- **[server]** fix(file-manager): memaksa unduh berkas konten aktif di penyimpanan lokal/publik ([#9437](https://github.com/nocobase/nocobase/pull/9437)) oleh @mytharcher
- **[Karyawan AI]**

  - Memperbaiki kesalahan muat plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) oleh @cgyrock
  - Memperbaiki penerbangan uji Ollama yang memerlukan input kunci ([#9450](https://github.com/nocobase/nocobase/pull/9450)) oleh @cgyrock
- **[Blok: Formulir multi-langkah]** memperbaiki masalah scrollbar saat mengaktifkan tinggi penuh di blok formulir langkah v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) oleh @katherinehhh
- **[Departemen]** memperbaiki konflik terjemahan antara tombol tambah pengguna dan tambah departemen di pengaturan Pengguna & Izin ([#9456](https://github.com/nocobase/nocobase/pull/9456)) oleh @katherinehhh
- **[Alur Kerja]** fix: mengembalikan teks bantuan di dialog pengikatan alur kerja FlowModel untuk peristiwa operasi dan aksi kustom ([#9447](https://github.com/nocobase/nocobase/pull/9447)) oleh @mytharcher
- **[Blok: Markdown]** Memperbaiki masalah blok Markdown v2 yang melaporkan kesalahan ([#9440](https://github.com/nocobase/nocobase/pull/9440)) oleh @zhangzhonghe
- **[Alur Kerja: Webhook]** Memperbaiki masalah di mana pembuatan simpul respons dicegat oleh validasi konfigurasi `statusCode` oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki tata letak formulir persetujuan di perangkat seluler oleh @zhangzhonghe
  - Memperbaiki indeks rekaman persetujuan duplikat ketika mendelegasikan tugas persetujuan. oleh @mytharcher
- **[Manajer cadangan]** Memperbaiki masalah di mana pencadangan akan gagal dengan kesalahan ketika berkas tidak dapat ditemukan. oleh @gchust
