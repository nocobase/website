---
title: "NocoBase v1.7.0-beta.9: Dukungan gabungan peran pengguna"
description: "Catatan Rilis v1.7.0-beta.9"
---

### 🎉 Fitur Baru

- **[acl]** Mendukung penggabungan peran pengguna ([#6301](https://github.com/nocobase/nocobase/pull/6301)) oleh @aaaaaajie

- **[client]**
  - mendukung perluasan bidang preset dalam koleksi ([#6183](https://github.com/nocobase/nocobase/pull/6183)) oleh @katherinehhh

  - Mendukung perluasan operator filter frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) oleh @katherinehhh

- **[Verifikasi]** Mendukung pengikatan pengguna dari berbagai jenis verifikasi, seperti SMS dan autentikator TOTP, serta verifikasi identitas dalam skenario yang diperlukan. Memungkinkan pengembangan dan perluasan metode verifikasi. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) oleh @2013xile
Referensi: [Verifikasi](https://docs.nocobase.com/handbook/verification)
- **[Kalender]** Mendukung perluasan bidang opsional untuk plugin Kanban, Kalender, dan Bidang Formula ([#6076](https://github.com/nocobase/nocobase/pull/6076)) oleh @katherinehhh

- **[Blok: template]** Menambahkan plugin `Blok: template`, menyediakan dukungan template untuk blok berdasarkan mekanisme pewarisan. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) oleh @gchust

- **[plugin-demo-platform]** Mengatur skipAuthCheck dari rute "/new" menjadi true. oleh @sheldon66

- **[Autentikasi dua faktor (2FA)]** Plugin baru: Autentikasi dua faktor dan Verifikasi: Autentikator TOTP oleh @2013xile
Referensi: [Autentikasi dua faktor (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verifikasi: Autentikator TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 Peningkatan

- **[client]**
  - Menambahkan skipAuthCheck ke router.add untuk mencegah pengalihan ke halaman login pada halaman publik. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) oleh @sheldon66

  - Memutakhirkan dependensi terkait ant design ke 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) oleh @gchust

- **[utils]** Adaptasi halaman desktop untuk perangkat seluler ([#6393](https://github.com/nocobase/nocobase/pull/6393)) oleh @zhangzhonghe

- **[Formulir publik]** mengatur judul halaman formulir publik menjadi judul yang dikonfigurasi saat pembuatan ([#6538](https://github.com/nocobase/nocobase/pull/6538)) oleh @katherinehhh

- **[Manajer file]**
  - menambahkan kode backend untuk menghasilkan url pratinjau file ([#6223](https://github.com/nocobase/nocobase/pull/6223)) oleh @jiannx

  - Mengubah api tipe penyimpanan dan menambahkan api plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) oleh @mytharcher

- **[Blok: template]** Mendukung penyimpanan blok data sebagai template blok dari halaman ([#6348](https://github.com/nocobase/nocobase/pull/6348)) oleh @gchust

- **[Alur Kerja]** Memindahkan pengaturan ikatan alur kerja ke plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - masalah seret dan lepas tombol baris tabel ([#6544](https://github.com/nocobase/nocobase/pull/6544)) oleh @katherinehhh

  - Tidak dapat menggunakan variabel 'Pengguna Saat Ini' saat menambahkan halaman tautan ([#6536](https://github.com/nocobase/nocobase/pull/6536)) oleh @zhangzhonghe

  - Keterkaitan rentang data bidang relasional tidak efektif ([#6530](https://github.com/nocobase/nocobase/pull/6530)) oleh @zhangzhonghe

  - Hapus opsi 'Izinkan pemilihan ganda' dari bidang pilih tunggal dropdown di formulir filter ([#6515](https://github.com/nocobase/nocobase/pull/6515)) oleh @zhangzhonghe

  - Kesalahan perintah `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) oleh @gchust

  - bidang yang hilang dalam konfigurasi aturan keterkaitan ([#6488](https://github.com/nocobase/nocobase/pull/6488)) oleh @katherinehhh

  - Konten tidak ditampilkan sepenuhnya di browser seluler ([#6446](https://github.com/nocobase/nocobase/pull/6446)) oleh @zhangzhonghe

  - Saat menggunakan operator '$anyOf', aturan keterkaitan tidak valid ([#6400](https://github.com/nocobase/nocobase/pull/6400)) oleh @zhangzhonghe

  - pemformatan bidang waktu yang salah di formulir filter ([#6374](https://github.com/nocobase/nocobase/pull/6374)) oleh @katherinehhh

  - Gaya input tidak benar untuk pengaturan nilai default formulir ([#6490](https://github.com/nocobase/nocobase/pull/6490)) oleh @gchust

- **[utils]** Bug 'responsif desktop' yang diketahui ([#6476](https://github.com/nocobase/nocobase/pull/6476)) oleh @zhangzhonghe

- **[acl]** Memperbaiki masalah di mana bidang relasi tidak ditampilkan di bawah gabungan peran. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) oleh @aaaaaajie

- **[Koleksi: Pohon]** Masalah migrasi untuk plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) oleh @2013xile

- **[Aksi: Permintaan kustom]** Tidak dapat mengunduh file yang disandikan UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) oleh @2013xile

- **[Variabel dan rahasia]** Tombol tidak ditampilkan di laci buat variabel baru ([#6485](https://github.com/nocobase/nocobase/pull/6485)) oleh @gchust

- **[Klien WEB]** Ganti semua instance ctx.state.currentRole (peran tunggal) dengan ctx.state.currentRoles (mendukung banyak peran). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) oleh @aaaaaajie

- **[Kontrol akses]**
  - Kesalahan ketika cakupan data diatur ke data sendiri dan tabel tidak memiliki bidang pembuat. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) oleh @aaaaaajie

  - Memperbaiki peralihan peran tidak berpengaruh. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) oleh @aaaaaajie

- **[Blok: template]**
  - Opsi Simpan sebagai template tidak ditampilkan di blok data halaman ([#6398](https://github.com/nocobase/nocobase/pull/6398)) oleh @gchust

  - Perilaku Simpan sebagai template yang salah di klien seluler ([#6420](https://github.com/nocobase/nocobase/pull/6420)) oleh @gchust

  - Memerlukan login saat mengakses formulir publik ([#6258](https://github.com/nocobase/nocobase/pull/6258)) oleh @gchust

- **[Auth: Kunci API]** Penghapusan daftar peran plugin kunci API dari gabungan ([#6432](https://github.com/nocobase/nocobase/pull/6432)) oleh @aaaaaajie

- **[Blok: Formulir multi-langkah]** tombol kirim memiliki warna yang sama dalam keadaan default dan disorot oleh @jiannx

- **[Alur Kerja: Persetujuan]** Masalah gaya dengan dialog popup 'Terapkan baru' oleh @zhangzhonghe
