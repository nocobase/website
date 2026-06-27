---
title: "Pembaruan Mingguan NocoBase: Autentikasi Dua Faktor (2FA)"
description: "Pembaruan minggu ini meliputi: kompatibel dengan pengaturan kontrol akses tombol historis, plugin integrasi AI, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**Minggu ini kami merilis [NocoBase versi 1.6.0](https://www.nocobase.com/en/blog/nocobase-1-6-0), yang menghadirkan deployment mode kluster, optimalisasi kebijakan keamanan, optimalisasi inti Migration Manager, dan masih banyak fitur baru lainnya.**

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Cocok untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk yang mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.21](https://www.nocobase.com/en/blog/v1.5.21)

*Tanggal rilis: 2025-03-05*

#### 🚀 Peningkatan

- **[Workflow]** Muat lambat hasil pekerjaan untuk kinerja yang lebih baik ([#6344](https://github.com/nocobase/nocobase/pull/6344)) oleh @mytharcher
- **[Workflow: Node agregat]** Tambahkan proses pembulatan untuk angka agregat berdasarkan tipe ganda ([#6358](https://github.com/nocobase/nocobase/pull/6358)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - komponen subform tidak sejajar dengan form utama saat label disembunyikan ([#6357](https://github.com/nocobase/nocobase/pull/6357)) oleh @katherinehhh
  - blok asosiasi tidak dirender di popup dalam pewarisan koleksi ([#6303](https://github.com/nocobase/nocobase/pull/6303)) oleh @katherinehhh
  - Perbaiki kesalahan yang muncul saat membuat koleksi file ([#6363](https://github.com/nocobase/nocobase/pull/6363)) oleh @mytharcher
- **[Workflow]** Perbaiki acl untuk mendapatkan pekerjaan ([#6352](https://github.com/nocobase/nocobase/pull/6352)) oleh @mytharcher

### [v1.5.22](https://www.nocobase.com/en/blog/v1.5.22)

*Tanggal rilis: 2025-03-06*

#### 🚀 Peningkatan

- **[klien]** Tambahkan penanganan debounce ke tombol ([#6351](https://github.com/nocobase/nocobase/pull/6351)) oleh @Cyx649312038

#### 🐛 Perbaikan Bug

- **[database]** Perbaiki kesalahan saat mengambil catatan koleksi relasi jika kunci sumber di bidang relasi adalah string numerik ([#6360](https://github.com/nocobase/nocobase/pull/6360)) oleh @2013xile

### [v1.5.23](https://www.nocobase.com/en/blog/v1.5.23)

*Tanggal rilis: 2025-03-06*

#### 🐛 Perbaikan Bug

- **[klien]**
  - masalah terkait zona waktu yang menyebabkan pemilih tanggal berkurang satu jam ([#6359](https://github.com/nocobase/nocobase/pull/6359)) oleh @katherinehhh
  - pengaturan yang dapat diurutkan hilang untuk bidang koleksi warisan ([#6372](https://github.com/nocobase/nocobase/pull/6372)) oleh @katherinehhh

### [v1.5.24](https://www.nocobase.com/en/blog/v1.5.24)

*Tanggal rilis: 2025-03-07*

#### 🎉 Fitur Baru

- **[Visualisasi data]** Dukung pengurutan NULLS dalam kueri bagan ([#6383](https://github.com/nocobase/nocobase/pull/6383)) oleh @2013xile

#### 🚀 Peningkatan

- **[Workflow]** Izinkan lewati untuk memicu alur kerja koleksi dalam acara basis data ([#6379](https://github.com/nocobase/nocobase/pull/6379)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[Aksi: Impor catatan Pro]** Gunakan opsi tambahan untuk menentukan apakah akan memicu alur kerja atau tidak oleh @mytharcher
- **[Aksi: Ekspor catatan Pro]** aksi ekspor pro kehilangan parameter pengurutan oleh @katherinehhh

### [v1.5.25](https://www.nocobase.com/en/blog/v1.5.25)

*Tanggal rilis: 2025-03-09*

#### 🐛 Perbaikan Bug

- **[server]** Cache browser yang salah setelah menjalankan perintah `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) oleh @gchust
- **[Workflow: Persetujuan]** Hindari konfigurasi penerima tugas yang salah yang menanyakan semua pengguna oleh @mytharcher
- **[WeCom]** perbaiki tautan prompt login dan kesalahan login dingtalk oleh @chenzhizdt

### [v1.6.1](https://www.nocobase.com/en/blog/v1.6.1)

*Tanggal rilis: 2025-03-11*

#### 🐛 Perbaikan Bug

- **[klien]**

  - Saat menggunakan operator '$anyOf', aturan tautan tidak valid ([#6415](https://github.com/nocobase/nocobase/pull/6415)) oleh @zhangzhonghe
  - Data tidak diperbarui di jendela popup yang dibuka melalui tombol Tautan ([#6411](https://github.com/nocobase/nocobase/pull/6411)) oleh @zhangzhonghe
  - perubahan nilai bidang multi-pilih dan kehilangan opsi saat menghapus catatan sub-tabel ([#6405](https://github.com/nocobase/nocobase/pull/6405)) oleh @katherinehhh
- **[Notifikasi: Pesan dalam aplikasi]** Bedakan warna latar belakang daftar pesan dalam aplikasi dari kartu pesan untuk meningkatkan hierarki visual dan keterbacaan. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) oleh @sheldon66

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.17](https://www.nocobase.com/en/blog/v1.6.0-beta.17)

*Tanggal rilis: 2025-03-07*

#### 🎉 Fitur Baru

- **[klien]** Tambahkan konfigurasi tooltip ke item menu dan header tabel ([#6346](https://github.com/nocobase/nocobase/pull/6346)) oleh @Cyx649312038
- **[Visualisasi data]** Dukung pengurutan NULLS dalam kueri bagan ([#6383](https://github.com/nocobase/nocobase/pull/6383)) oleh @2013xile
- **[Integrasi AI]** Plugin baru: Integrasi AI ([#6283](https://github.com/nocobase/nocobase/pull/6283)) oleh @2013xile
  Referensi: [Integrasi AI](https://docs.nocobase.com/handbook/ai/service)
- **[Integrasi AI (EE)]** Plugin baru: Integrasi AI (EE) oleh @2013xile
  Referensi: [Integrasi AI](https://docs.nocobase.com/handbook/ai/service)

#### 🚀 Peningkatan

- **[klien]**

  - Tambahkan penanganan debounce ke tombol ([#6351](https://github.com/nocobase/nocobase/pull/6351)) oleh @Cyx649312038
  - Buat menu responsif terhadap lebar layar ([#6331](https://github.com/nocobase/nocobase/pull/6331)) oleh @zhangzhonghe
- **[Workflow]** Izinkan lewati untuk memicu alur kerja koleksi dalam acara basis data ([#6379](https://github.com/nocobase/nocobase/pull/6379)) oleh @mytharcher
- **[Workflow: Node agregat]** Tambahkan proses pembulatan untuk angka agregat berdasarkan tipe ganda ([#6358](https://github.com/nocobase/nocobase/pull/6358)) oleh @mytharcher
- **[Aksi: Impor catatan Pro]** dukung opsi lanjutan di tombol impor Pro oleh @katherinehhh
- **[Workflow: JavaScript]** Dukung untuk membutuhkan paket dari jalur absolut oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]** coba muat ulang penyimpanan jika tidak menemukan penyimpanan oleh @jiannx

#### 🐛 Perbaikan Bug

- **[klien]**

  - Terjemahan kustom judul menu tidak valid ([#6377](https://github.com/nocobase/nocobase/pull/6377)) oleh @zhangzhonghe
  - masalah terkait zona waktu yang menyebabkan pemilih tanggal berkurang satu jam ([#6359](https://github.com/nocobase/nocobase/pull/6359)) oleh @katherinehhh
  - pengaturan yang dapat diurutkan hilang untuk bidang koleksi warisan ([#6372](https://github.com/nocobase/nocobase/pull/6372)) oleh @katherinehhh
  - dropdown pengaturan penyimpanan bidang lampiran tidak menampilkan opsi ([#6365](https://github.com/nocobase/nocobase/pull/6365)) oleh @katherinehhh
  - komponen subform tidak sejajar dengan form utama saat label disembunyikan ([#6357](https://github.com/nocobase/nocobase/pull/6357)) oleh @katherinehhh
  - blok asosiasi tidak dirender di popup dalam pewarisan koleksi ([#6303](https://github.com/nocobase/nocobase/pull/6303)) oleh @katherinehhh
  - selesaikan masalah scrollbar saat membuka tab halaman dengan blok tinggi penuh ([#6347](https://github.com/nocobase/nocobase/pull/6347)) oleh @katherinehhh
  - Perbaiki kesalahan yang muncul saat membuat koleksi file ([#6363](https://github.com/nocobase/nocobase/pull/6363)) oleh @mytharcher
- **[database]** Perbaiki kesalahan saat mengambil catatan koleksi relasi jika kunci sumber di bidang relasi adalah string numerik ([#6360](https://github.com/nocobase/nocobase/pull/6360)) oleh @2013xile
- **[klien WEB]**

  - Menambahkan halaman tab di tabel manajemen rute tidak berpengaruh ([#6362](https://github.com/nocobase/nocobase/pull/6362)) oleh @zhangzhonghe
  - Setelah menambahkan halaman ke tabel rute, halaman muncul kosong ([#6366](https://github.com/nocobase/nocobase/pull/6366)) oleh @zhangzhonghe
- **[Pengguna]**

  - Kesalahan "Tidak ada izin" saat pengguna tanpa izin manajemen pengguna melihat profil mereka sendiri ([#6382](https://github.com/nocobase/nocobase/pull/6382)) oleh @2013xile
  - Kesalahan "Tidak ada izin" saat memperbarui pengaturan sistem dalam manajemen pengguna ([#6380](https://github.com/nocobase/nocobase/pull/6380)) oleh @2013xile
- **[Kontrol akses]** Di tabel manajemen izin, nama halaman tab kosong ([#6364](https://github.com/nocobase/nocobase/pull/6364)) oleh @zhangzhonghe
- **[Integrasi AI]** Masalah di mana `baseURL` default untuk penyedia LLM adalah `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) oleh @2013xile
- **[Workflow]** Perbaiki acl untuk mendapatkan pekerjaan ([#6352](https://github.com/nocobase/nocobase/pull/6352)) oleh @mytharcher
- **[Workflow: Acara aksi kustom]** Perbaiki lokal dan koleksi yang dapat dimodifikasi setelah dieksekusi oleh @mytharcher
- **[Aksi: Impor catatan Pro]** Gunakan opsi tambahan untuk menentukan apakah akan memicu alur kerja atau tidak oleh @mytharcher
- **[Aksi: Ekspor catatan Pro]** aksi ekspor pro kehilangan parameter pengurutan oleh @katherinehhh

### [v1.6.0-beta.18](https://www.nocobase.com/en/blog/v1.6.0-beta.18)

*Tanggal rilis: 2025-03-10*

#### 🚀 Peningkatan

- **[Auth: Kunci API]** Tambahkan uji konfigurasi keamanan token untuk autentikasi kunci API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) oleh @sheldon66

#### 🐛 Perbaikan Bug

- **[server]** Cache browser yang salah setelah menjalankan perintah `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) oleh @gchust
- **[auth]** Tangani pengguna yang tidak ada dengan kesalahan 401 dan perbarui pesan lokal ([#6381](https://github.com/nocobase/nocobase/pull/6381)) oleh @sheldon66
- **[klien WEB]** Halaman menjadi kosong setelah mengganti peran ([#6388](https://github.com/nocobase/nocobase/pull/6388)) oleh @aaaaaajie
- **[Editor tema]** peralihan tema gagal setelah beberapa kali peralihan berturut-turut ([#6387](https://github.com/nocobase/nocobase/pull/6387)) oleh @katherinehhh
- **[Workflow: Persetujuan]**

  - Perbaiki parameter urutan saat menambahkan penerima tugas oleh @mytharcher
  - Hindari konfigurasi penerima tugas yang salah yang menanyakan semua pengguna oleh @mytharcher
- **[WeCom]** perbaiki tautan prompt login dan kesalahan login dingtalk oleh @chenzhizdt

### [v1.7.0-beta.1](https://www.nocobase.com/en/blog/v1.7.0-beta.1)

*Tanggal rilis: 2025-03-11*

#### 🎉 Fitur Baru

- **[klien]** kompatibel dengan pengaturan kontrol akses tombol historis ([#6376](https://github.com/nocobase/nocobase/pull/6376)) oleh @katherinehhh
- **[Workflow: Acara pasca-aksi]** Dukung penggunaan node akhir untuk menentukan status ([#6399](https://github.com/nocobase/nocobase/pull/6399)) oleh @mytharcher
- **[Workflow: Pesan respons]** Dukung untuk digunakan dalam pemicu aksi oleh @mytharcher

#### 🚀 Peningkatan

- **[Workflow]** Perbaiki API 401 saat tidak masuk ([#6412](https://github.com/nocobase/nocobase/pull/6412)) oleh @mytharcher
- **[Workflow: Node manual]** Sesuaikan UI pusat tugas alur kerja ([#6272](https://github.com/nocobase/nocobase/pull/6272)) oleh @mytharcher
- **[Manajer email]** Gunakan struktur dan gaya elemen yang sama secara global untuk tombol toolbar oleh @mytharcher
- **[Workflow: Persetujuan]** Sesuaikan UI pusat tugas oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Tidak dapat memindahkan halaman ke dalam grup ([#6413](https://github.com/nocobase/nocobase/pull/6413)) oleh @zhangzhonghe
  - Menu tingkat dalam tidak menampilkan ikon ([#6410](https://github.com/nocobase/nocobase/pull/6410)) oleh @zhangzhonghe
  - Masalah konteks tema FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) oleh @katherinehhh
- **[Workflow: Node manual]** Hindari konflik pada kunci unik ([#6407](https://github.com/nocobase/nocobase/pull/6407)) oleh @mytharcher
- **[Manajer sumber data]** kesalahan saat mengedit bidang di sumber data eksternal ([#6402](https://github.com/nocobase/nocobase/pull/6402)) oleh @katherinehhh
- **[Autentikasi]** Pengguna tanpa peran harus dialihkan ke halaman pesan kesalahan. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) oleh @sheldon66
- **[Workflow: Acara aksi kustom]** konfigurasi aturan tautan yang hilang untuk tombol 'Picu Alur Kerja' oleh @katherinehhh
- **[Manajer cadangan]** Data kunci enkripsi hilang selama pemulihan cadangan oleh @gchust
- **[Workflow: Persetujuan]** Hindari konflik pada kunci unik oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.30](https://www.nocobase.com/en/blog/v1.6.0-alpha.30)

*Tanggal rilis: 2025-03-07*

#### 🎉 Fitur Baru

- **[klien]**

  - Tambahkan konfigurasi tooltip ke item menu dan header tabel ([#6346](https://github.com/nocobase/nocobase/pull/6346)) oleh @Cyx649312038
  - bidang waktu mendukung format waktu ([#6329](https://github.com/nocobase/nocobase/pull/6329)) oleh @katherinehhh
- **[Visualisasi data]** Dukung pengurutan NULLS dalam kueri bagan ([#6383](https://github.com/nocobase/nocobase/pull/6383)) oleh @2013xile
- **[Integrasi AI]** Plugin baru: Integrasi AI ([#6283](https://github.com/nocobase/nocobase/pull/6283)) oleh @2013xile
  Referensi: [Integrasi AI](https://docs.nocobase.com/handbook/ai/service)
- **[Verifikasi]** Dukung pengikatan pengguna dari berbagai jenis verifikasi, seperti SMS dan autentikator TOTP, dan verifikasi identitas dalam skenario yang diperlukan. Aktifkan pengembangan dan perluasan metode verifikasi. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) oleh @2013xile
  Referensi: [Verifikasi](https://docs.nocobase.com/handbook/verification)
- **[Integrasi AI (EE)]** Plugin baru: Integrasi AI (EE) oleh @2013xile
  Referensi: [Integrasi AI](https://docs.nocobase.com/handbook/ai/service)
- **[Autentikasi dua faktor (2FA)]** Plugin baru: Autentikasi dua faktor dan Verifikasi: Autentikator TOTP oleh @2013xile
  Referensi: [Autentikasi dua faktor (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verifikasi: Autentikator TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 Peningkatan

- **[klien]**

  - Tambahkan penanganan debounce ke tombol ([#6351](https://github.com/nocobase/nocobase/pull/6351)) oleh @Cyx649312038
  - Buat menu responsif terhadap lebar layar ([#6331](https://github.com/nocobase/nocobase/pull/6331)) oleh @zhangzhonghe
- **[server]** Tingkatkan koa ke 2.15.4; tingkatkan @koa/cors ke 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) oleh @2013xile
- **[Workflow]**

  - Izinkan lewati untuk memicu alur kerja koleksi dalam acara basis data ([#6379](https://github.com/nocobase/nocobase/pull/6379)) oleh @mytharcher
  - Muat lambat hasil pekerjaan untuk kinerja yang lebih baik ([#6344](https://github.com/nocobase/nocobase/pull/6344)) oleh @mytharcher
- **[Blok: template]** Dukung simpan blok data sebagai template blok dari halaman ([#6348](https://github.com/nocobase/nocobase/pull/6348)) oleh @gchust
- **[Workflow: Node agregat]** Tambahkan proses pembulatan untuk angka agregat berdasarkan tipe ganda ([#6358](https://github.com/nocobase/nocobase/pull/6358)) oleh @mytharcher
- **[Aksi: Impor catatan Pro]** dukung opsi lanjutan di tombol impor Pro oleh @katherinehhh
- **[Workflow: JavaScript]** Dukung untuk membutuhkan paket dari jalur absolut oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]** coba muat ulang penyimpanan jika tidak menemukan penyimpanan oleh @jiannx

#### 🐛 Perbaikan Bug

- **[klien]**

  - Terjemahan kustom judul menu tidak valid ([#6377](https://github.com/nocobase/nocobase/pull/6377)) oleh @zhangzhonghe
  - pengaturan yang dapat diurutkan hilang untuk bidang koleksi warisan ([#6372](https://github.com/nocobase/nocobase/pull/6372)) oleh @katherinehhh
  - pemformatan bidang waktu yang salah di form filter ([#6374](https://github.com/nocobase/nocobase/pull/6374)) oleh @katherinehhh
  - masalah terkait zona waktu yang menyebabkan pemilih tanggal berkurang satu jam ([#6359](https://github.com/nocobase/nocobase/pull/6359)) oleh @katherinehhh
  - dropdown pengaturan penyimpanan bidang lampiran tidak menampilkan opsi ([#6365](https://github.com/nocobase/nocobase/pull/6365)) oleh @katherinehhh
  - komponen subform tidak sejajar dengan form utama saat label disembunyikan ([#6357](https://github.com/nocobase/nocobase/pull/6357)) oleh @katherinehhh
  - Perbaiki kesalahan yang muncul saat membuat koleksi file ([#6363](https://github.com/nocobase/nocobase/pull/6363)) oleh @mytharcher
  - selesaikan masalah scrollbar saat membuka tab halaman dengan blok tinggi penuh ([#6347](https://github.com/nocobase/nocobase/pull/6347)) oleh @katherinehhh
  - Halaman dengan favicon kustom sempat menampilkan favicon NocoBase selama pemuatan ([#6337](https://github.com/nocobase/nocobase/pull/6337)) oleh @zhangzhonghe
  - blok asosiasi tidak dirender di popup dalam pewarisan koleksi ([#6303](https://github.com/nocobase/nocobase/pull/6303)) oleh @katherinehhh
  - tombol tambah baru muncul saat dihover dalam mode baca-saja bidang asosiasi ([#6322](https://github.com/nocobase/nocobase/pull/6322)) oleh @katherinehhh
- **[auth]** Hindari memperbarui token selama otorisasi WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) oleh @sheldon66
- **[database]** Perbaiki kesalahan saat mengambil catatan koleksi relasi jika kunci sumber di bidang relasi adalah string numerik ([#6360](https://github.com/nocobase/nocobase/pull/6360)) oleh @2013xile
- **[klien WEB]**

  - Setelah menambahkan halaman ke tabel rute, halaman muncul kosong ([#6366](https://github.com/nocobase/nocobase/pull/6366)) oleh @zhangzhonghe
  - Menambahkan halaman tab di tabel manajemen rute tidak berpengaruh ([#6362](https://github.com/nocobase/nocobase/pull/6362)) oleh @zhangzhonghe
- **[Kontrol akses]** Di tabel manajemen izin, nama halaman tab kosong ([#6364](https://github.com/nocobase/nocobase/pull/6364)) oleh @zhangzhonghe
- **[Pengguna]**

  - Kesalahan "Tidak ada izin" saat pengguna tanpa izin manajemen pengguna melihat profil mereka sendiri ([#6382](https://github.com/nocobase/nocobase/pull/6382)) oleh @2013xile
  - Kesalahan "Tidak ada izin" saat memperbarui pengaturan sistem dalam manajemen pengguna ([#6380](https://github.com/nocobase/nocobase/pull/6380)) oleh @2013xile
  - UI kesalahan muncul sekilas saat tabel manajemen izin pengguna dimuat untuk pertama kalinya ([#6324](https://github.com/nocobase/nocobase/pull/6324)) oleh @zhangzhonghe
- **[Integrasi AI]** Masalah di mana `baseURL` default untuk penyedia LLM adalah `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) oleh @2013xile
- **[Workflow]** Perbaiki acl untuk mendapatkan pekerjaan ([#6352](https://github.com/nocobase/nocobase/pull/6352)) oleh @mytharcher
- **[Blok: Peta]** Pengaturan konfigurasi untuk bidang peta hilang/tidak terlihat ([#6336](https://github.com/nocobase/nocobase/pull/6336)) oleh @zhangzhonghe
- **[Seluler]** Kesalahan halaman: Tidak dapat membaca properti dari null (membaca 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) oleh @zhangzhonghe
- **[Blok: Panel aksi]** Mengatur ketinggian panel aksi tidak valid ([#6321](https://github.com/nocobase/nocobase/pull/6321)) oleh @zhangzhonghe
- **[Workflow: Acara aksi kustom]**

  - Perbaiki lokal dan koleksi yang dapat dimodifikasi setelah dieksekusi oleh @mytharcher
  - Perbaiki migrasi untuk tombol lama yang terikat dengan alur kerja aksi kustom oleh @mytharcher
- **[Merek kustom]** Halaman dengan favicon kustom sempat menampilkan favicon NocoBase selama pemuatan oleh @zhangzhonghe
- **[Aksi: Impor catatan Pro]**

  - Gunakan opsi tambahan untuk menentukan apakah akan memicu alur kerja atau tidak oleh @mytharcher
  - Deteksi duplikat catatan tombol impor blok asosiasi tidak menampilkan data di dropdown bidang oleh @katherinehhh
- **[Aksi: Ekspor catatan Pro]**

  - aksi ekspor pro kehilangan parameter pengurutan oleh @katherinehhh
  - hapus opsi 'tambah blok' di pengaturan tombol lampiran ekspor oleh @katherinehhh
- **[Cetak template]** Pulihkan dari lokal gagal saat plugin cetak template aksi dan manajer cadangan keduanya diaktifkan oleh @gchust
- **[Workflow: Persetujuan]**

  - Perbaiki migrasi untuk blok lama oleh @mytharcher
  - Perbaiki `.toJSON()` yang menyebabkan kesalahan oleh @mytharcher

### [v1.6.0-alpha.31](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Tanggal rilis: 2025-03-11*

#### 🎉 Fitur Baru

- **[klien]** kompatibel dengan pengaturan kontrol akses tombol historis ([#6376](https://github.com/nocobase/nocobase/pull/6376)) oleh @katherinehhh
- **[Workflow: Pesan respons]** Dukung untuk digunakan dalam pemicu aksi oleh @mytharcher

#### 🚀 Peningkatan

- **[Auth: Kunci API]** Tambahkan uji konfigurasi keamanan token untuk autentikasi kunci API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) oleh @sheldon66
- **[Workflow: Node manual]** Sesuaikan UI pusat tugas alur kerja ([#6272](https://github.com/nocobase/nocobase/pull/6272)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[server]** Cache browser yang salah setelah menjalankan perintah `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) oleh @gchust
- **[klien]**

  - Masalah konteks tema FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) oleh @katherinehhh
  - Saat menggunakan operator '$anyOf', aturan tautan tidak valid ([#6400](https://github.com/nocobase/nocobase/pull/6400)) oleh @zhangzhonghe
- **[auth]** Tangani pengguna yang tidak ada dengan kesalahan 401 dan perbarui pesan lokal ([#6381](https://github.com/nocobase/nocobase/pull/6381)) oleh @sheldon66
- **[Blok: template]** Opsi simpan sebagai template belum ditampilkan di blok data halaman ([#6398](https://github.com/nocobase/nocobase/pull/6398)) oleh @gchust
- **[Workflow: Node manual]** Hindari konflik pada kunci unik ([#6407](https://github.com/nocobase/nocobase/pull/6407)) oleh @mytharcher
- **[Manajer sumber data]** kesalahan saat mengedit bidang di sumber data eksternal ([#6402](https://github.com/nocobase/nocobase/pull/6402)) oleh @katherinehhh
- **[Editor tema]** peralihan tema gagal setelah beberapa kali peralihan berturut-turut ([#6387](https://github.com/nocobase/nocobase/pull/6387)) oleh @katherinehhh
- **[klien WEB]** Halaman menjadi kosong setelah mengganti peran ([#6388](https://github.com/nocobase/nocobase/pull/6388)) oleh @aaaaaajie
- **[Workflow: Persetujuan]**

  - Hindari konfigurasi penerima tugas yang salah yang menanyakan semua pengguna oleh @mytharcher
  - Perbaiki parameter urutan saat menambahkan penerima tugas oleh @mytharcher
- **[WeCom]** perbaiki tautan prompt login dan kesalahan login dingtalk oleh @chenzhizdt

### [v1.7.0-alpha.1](https://www.nocobase.com/en/blog/v1.7.0-alpha.1)

*Tanggal rilis: 2025-03-11*

#### 🎉 Fitur Baru

- **[Workflow: Acara pasca-aksi]** Dukung penggunaan node akhir untuk menentukan status ([#6399](https://github.com/nocobase/nocobase/pull/6399)) oleh @mytharcher

#### 🚀 Peningkatan

- **[Workflow]** Perbaiki API 401 saat tidak masuk ([#6412](https://github.com/nocobase/nocobase/pull/6412)) oleh @mytharcher
- **[Manajer email]** Gunakan struktur dan gaya elemen yang sama secara global untuk tombol toolbar oleh @mytharcher
- **[Workflow: Persetujuan]** Sesuaikan UI pusat tugas oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Tidak dapat memindahkan halaman ke dalam grup ([#6413](https://github.com/nocobase/nocobase/pull/6413)) oleh @zhangzhonghe
  - Menu tingkat dalam tidak menampilkan ikon ([#6410](https://github.com/nocobase/nocobase/pull/6410)) oleh @zhangzhonghe
- **[Autentikasi]** Pengguna tanpa peran harus dialihkan ke halaman pesan kesalahan. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) oleh @sheldon66
- **[Workflow: Acara aksi kustom]** konfigurasi aturan tautan yang hilang untuk tombol 'Picu Alur Kerja' oleh @katherinehhh
- **[Manajer cadangan]** Data kunci enkripsi hilang selama pemulihan cadangan oleh @gchust
- **[Workflow: Persetujuan]** Hindari konflik pada kunci unik oleh @mytharcher

## Tentang NocoBase

NocoBase adalah platform tanpa kode sumber terbuka dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
