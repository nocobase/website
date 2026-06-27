---
title: "NocoBase v1.6.0-alpha.30: bidang waktu mendukung format waktu"
description: "Catatan Rilis v1.6.0-alpha.30"
---

### 🎉 Fitur Baru

- **[klien]**
  - Menambahkan konfigurasi tooltip pada item menu dan header tabel ([#6346](https://github.com/nocobase/nocobase/pull/6346)) oleh @Cyx649312038

  - bidang waktu mendukung format waktu ([#6329](https://github.com/nocobase/nocobase/pull/6329)) oleh @katherinehhh

- **[Visualisasi Data]** Mendukung pengurutan NULLS dalam kueri bagan ([#6383](https://github.com/nocobase/nocobase/pull/6383)) oleh @2013xile

- **[Integrasi AI]** Plugin baru: Integrasi AI ([#6283](https://github.com/nocobase/nocobase/pull/6283)) oleh @2013xile
Referensi: [Integrasi AI](https://docs.nocobase.com/handbook/ai/service)
- **[Verifikasi]** Mendukung pengikatan pengguna ke berbagai jenis verifikasi, seperti SMS dan autentikator TOTP, serta verifikasi identitas dalam skenario yang diperlukan. Memungkinkan pengembangan dan perluasan metode verifikasi. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) oleh @2013xile
Referensi: [Verifikasi](https://docs.nocobase.com/handbook/verification)
- **[Integrasi AI (EE)]** Plugin baru: Integrasi AI (EE) oleh @2013xile
Referensi: [Integrasi AI](https://docs.nocobase.com/handbook/ai/service)
- **[Autentikasi dua faktor (2FA)]** Plugin baru: Autentikasi dua faktor dan Verifikasi: Autentikator TOTP oleh @2013xile
Referensi: [Autentikasi dua faktor (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verifikasi: Autentikator TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 Peningkatan

- **[klien]**
  - Menambahkan penanganan debounce pada tombol ([#6351](https://github.com/nocobase/nocobase/pull/6351)) oleh @Cyx649312038

  - Membuat menu responsif terhadap lebar layar ([#6331](https://github.com/nocobase/nocobase/pull/6331)) oleh @zhangzhonghe

- **[server]** Memutakhirkan koa ke 2.15.4; memutakhirkan @koa/cors ke 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) oleh @2013xile

- **[Workflow]**
  - Mengizinkan untuk melewati pemicu alur kerja koleksi dalam event basis data ([#6379](https://github.com/nocobase/nocobase/pull/6379)) oleh @mytharcher

  - Memuat hasil job secara lambat untuk performa yang lebih baik ([#6344](https://github.com/nocobase/nocobase/pull/6344)) oleh @mytharcher

- **[Blok: template]** Mendukung penyimpanan blok data sebagai template blok dari halaman ([#6348](https://github.com/nocobase/nocobase/pull/6348)) oleh @gchust

- **[Workflow: Node Agregat]** Menambahkan proses pembulatan untuk angka agregat berdasarkan tipe double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) oleh @mytharcher

- **[Aksi: Impor catatan Pro]** mendukung opsi lanjutan pada tombol Impor Pro oleh @katherinehhh

- **[Workflow: JavaScript]** Mendukung require paket dari jalur absolut oleh @mytharcher

- **[Penyimpanan file: S3(Pro)]** mencoba memuat ulang penyimpanan jika tidak menemukan penyimpanan oleh @jiannx

### 🐛 Perbaikan Bug

- **[klien]**
  - Terjemahan kustom judul menu tidak valid ([#6377](https://github.com/nocobase/nocobase/pull/6377)) oleh @zhangzhonghe

  - pengaturan pengurutan yang hilang untuk bidang koleksi warisan ([#6372](https://github.com/nocobase/nocobase/pull/6372)) oleh @katherinehhh

  - pemformatan bidang waktu yang salah di formulir filter ([#6374](https://github.com/nocobase/nocobase/pull/6374)) oleh @katherinehhh

  - masalah terkait zona waktu yang menyebabkan pemilih tanggal berkurang satu jam ([#6359](https://github.com/nocobase/nocobase/pull/6359)) oleh @katherinehhh

  - dropdown pengaturan penyimpanan bidang lampiran tidak menampilkan opsi ([#6365](https://github.com/nocobase/nocobase/pull/6365)) oleh @katherinehhh

  - komponen subform tidak sejajar dengan form utama saat label disembunyikan ([#6357](https://github.com/nocobase/nocobase/pull/6357)) oleh @katherinehhh

  - Memperbaiki error yang muncul saat membuat koleksi file ([#6363](https://github.com/nocobase/nocobase/pull/6363)) oleh @mytharcher

  - menyelesaikan masalah scrollbar saat membuka tab halaman dengan blok tinggi penuh ([#6347](https://github.com/nocobase/nocobase/pull/6347)) oleh @katherinehhh

  - Halaman dengan favicon kustom menampilkan favicon NocoBase secara singkat saat memuat ([#6337](https://github.com/nocobase/nocobase/pull/6337)) oleh @zhangzhonghe

  - blok asosiasi tidak dirender di popup dalam warisan koleksi ([#6303](https://github.com/nocobase/nocobase/pull/6303)) oleh @katherinehhh

  - tombol tambah baru muncul saat hover dalam mode baca-saja bidang asosiasi ([#6322](https://github.com/nocobase/nocobase/pull/6322)) oleh @katherinehhh

- **[auth]** Menghindari pembaruan token selama otorisasi WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) oleh @sheldon66

- **[database]** Memperbaiki error saat mengambil catatan koleksi relasi jika kunci sumber di bidang relasi adalah string numerik ([#6360](https://github.com/nocobase/nocobase/pull/6360)) oleh @2013xile

- **[Klien WEB]**
  - Setelah menambahkan halaman ke tabel rute, halaman muncul kosong ([#6366](https://github.com/nocobase/nocobase/pull/6366)) oleh @zhangzhonghe

  - Menambahkan halaman tab di tabel manajemen rute tidak berpengaruh ([#6362](https://github.com/nocobase/nocobase/pull/6362)) oleh @zhangzhonghe

- **[Kontrol akses]** Di tabel manajemen izin, nama halaman tab kosong ([#6364](https://github.com/nocobase/nocobase/pull/6364)) oleh @zhangzhonghe

- **[Pengguna]**
  - Error "Tidak ada izin" saat pengguna tanpa izin manajemen pengguna melihat profil mereka sendiri ([#6382](https://github.com/nocobase/nocobase/pull/6382)) oleh @2013xile

  - Error "Tidak ada izin" saat memperbarui pengaturan sistem di manajemen pengguna ([#6380](https://github.com/nocobase/nocobase/pull/6380)) oleh @2013xile

  - UI error muncul sebentar saat tabel manajemen izin pengguna dimuat untuk pertama kali ([#6324](https://github.com/nocobase/nocobase/pull/6324)) oleh @zhangzhonghe

- **[Integrasi AI]** Masalah di mana `baseURL` default untuk penyedia LLM adalah `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) oleh @2013xile

- **[Workflow]** Memperbaiki acl untuk mendapatkan job ([#6352](https://github.com/nocobase/nocobase/pull/6352)) oleh @mytharcher

- **[Blok: Peta]** Pengaturan konfigurasi untuk bidang peta hilang/tidak terlihat ([#6336](https://github.com/nocobase/nocobase/pull/6336)) oleh @zhangzhonghe

- **[Seluler]** Error halaman: Tidak dapat membaca properti dari null (membaca 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) oleh @zhangzhonghe

- **[Blok: Panel aksi]** Mengatur tinggi panel aksi tidak valid ([#6321](https://github.com/nocobase/nocobase/pull/6321)) oleh @zhangzhonghe

- **[Workflow: Event aksi kustom]**
  - Memperbaiki locale dan koleksi yang dapat dimodifikasi setelah dieksekusi oleh @mytharcher

  - Memperbaiki migrasi untuk tombol lama yang terikat dengan alur kerja aksi kustom oleh @mytharcher

- **[Merek kustom]** Halaman dengan favicon kustom menampilkan favicon NocoBase secara singkat saat memuat oleh @zhangzhonghe

- **[Aksi: Impor catatan Pro]**
  - Menggunakan opsi tambahan untuk menentukan apakah akan memicu alur kerja atau tidak oleh @mytharcher

  - tombol impor blok asosiasi deteksi catatan duplikat tidak menampilkan data di dropdown bidang oleh @katherinehhh

- **[Aksi: Ekspor catatan Pro]**
  - aksi ekspor pro kehilangan parameter sortir oleh @katherinehhh

  - menghapus opsi 'tambah blok' di pengaturan tombol ekspor lampiran oleh @katherinehhh

- **[Cetak template]** Pemulihan dari lokal gagal saat plugin cetak template aksi dan manajer cadangan keduanya diaktifkan oleh @gchust

- **[Workflow: Persetujuan]**
  - Memperbaiki migrasi untuk blok lama oleh @mytharcher

  - Memperbaiki error yang disebabkan oleh `.toJSON()` oleh @mytharcher
