---
title: "NocoBase v1.5.0: Menambahkan rentang tanggal terbatas pada komponen bidang tanggal"
description: "Catatan Rilis v1.5.0"
---

### 🎉 Fitur Baru

- **[klien]**
  - Menambahkan rentang tanggal terbatas pada komponen bidang tanggal ([#5852](https://github.com/nocobase/nocobase/pull/5852)) oleh @Cyx649312038

  - Mendukung konfigurasi teks, ikon, dan tipe untuk tombol tambah dan pilih di sub-tabel ([#5778](https://github.com/nocobase/nocobase/pull/5778)) oleh @katherinehhh

  - Mendukung pengaktifan tautan yang membuka pop up pada bidang readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) oleh @katherinehhh

  - Mendukung tindakan kaitkan dan lepaskan kaitan di blok asosiasi ([#5695](https://github.com/nocobase/nocobase/pull/5695)) oleh @katherinehhh

- **[server]** Menambahkan manajer audit ([#5601](https://github.com/nocobase/nocobase/pull/5601)) oleh @chenzhizdt

- **[Workflow]**
  - menambahkan pola karakter acak ([#5959](https://github.com/nocobase/nocobase/pull/5959)) oleh @kennnnnnnnnn

  - Menambahkan konfigurasi batas tumpukan untuk workflow ([#6077](https://github.com/nocobase/nocobase/pull/6077)) oleh @citlalinda

  - mendukung pemicuan workflow secara manual ([#5664](https://github.com/nocobase/nocobase/pull/5664)) oleh @mytharcher

- **[Mobile]** menambahkan sakelar global untuk mengontrol semua tombol kembali di perangkat seluler (diaktifkan secara default) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) oleh @katherinehhh

- **[Kalender]** Plugin Kalender menambahkan mode pembukaan acara ([#5808](https://github.com/nocobase/nocobase/pull/5808)) oleh @Cyx649312038

- **[Koleksi: Pohon]** Memungkinkan untuk memfilter simpul anak di blok tabel pohon ([#4770](https://github.com/nocobase/nocobase/pull/4770)) oleh @jimmy201602

- **[Workflow: Acara pra-tindakan]** mendukung pemicuan workflow secara manual oleh @mytharcher

- **[Adaptor pub sub Redis]** Menambahkan plugin adaptor sinkronisasi Redis oleh @mytharcher

### 🚀 Peningkatan

- **[klien]**
  - menghapus aturan tautan dari tombol Kaitkan ([#6016](https://github.com/nocobase/nocobase/pull/6016)) oleh @katherinehhh

  - Menghapus komponen kerangka baris tabel ([#5751](https://github.com/nocobase/nocobase/pull/5751)) oleh @zhangzhonghe

  - Mengoptimalkan logika rekursif di useMenuSearch untuk performa yang lebih baik ([#5784](https://github.com/nocobase/nocobase/pull/5784)) oleh @katherinehhh

  - Menghapus komponen Formily dari tabel untuk meningkatkan performa saat mengganti paginasi tabel ([#5738](https://github.com/nocobase/nocobase/pull/5738)) oleh @zhangzhonghe

  - Meningkatkan performa rendering halaman dan mendukung fungsionalitas keep-alive halaman ([#5515](https://github.com/nocobase/nocobase/pull/5515)) oleh @zhangzhonghe

  - menerapkan pemuatan sesuai permintaan untuk komponen front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) oleh @gchust

- **[Notifikasi: Email]** Menambahkan tautan beranda ke plugin notifikasi di package.json. ([#6150](https://github.com/nocobase/nocobase/pull/6150)) oleh @sheldon66

- **[Workflow: Simpul perulangan]** Memperbaiki gaya ([#6095](https://github.com/nocobase/nocobase/pull/6095)) oleh @mytharcher

- **[Manajer file]** dukungan untuk plugin penyimpanan lainnya ([#6096](https://github.com/nocobase/nocobase/pull/6096)) oleh @jiannx
Referensi: [Penyimpanan File: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Workflow: test kit]** menyesuaikan gaya kanvas workflow, untuk membuat konten lebih padat ([#6088](https://github.com/nocobase/nocobase/pull/6088)) oleh @mytharcher

- **[Workflow]** Mengubah nama API menjadi yang lebih masuk akal ([#6082](https://github.com/nocobase/nocobase/pull/6082)) oleh @mytharcher

- **[Visualisasi data]** Menambahkan parameter offset ke charts-query ([#5911](https://github.com/nocobase/nocobase/pull/5911)) oleh @Albert-mah

- **[Mobile]** Mengadaptasi komponen pemilih rentang waktu & tanggal untuk perangkat seluler ([#5863](https://github.com/nocobase/nocobase/pull/5863)) oleh @katherinehhh

- **[Otentikasi]** Mengoptimalkan logika pengambilan metadata tindakan audit. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) oleh @chenzhizdt

- **[Formulir publik]** Mengoptimalkan panel tindakan dan komponen formulir publik untuk adaptasi seluler ([#5788](https://github.com/nocobase/nocobase/pull/5788)) oleh @katherinehhh

- **[Bidang koleksi: Urutkan]** menambahkan deskripsi plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) oleh @mytharcher

- **[Workflow: Acara tindakan kustom]** Mengubah API eksekusi manual oleh @mytharcher

- **[Workflow: Perhitungan JSON]**
  - Mengubah nama simpul dan grup JSON-query oleh @mytharcher

  - Menambahkan ikon ke simpul oleh @mytharcher

- **[Embed NocoBase]** Meningkatkan performa rendering halaman oleh @zhangzhonghe

- **[Manajer cadangan]** Pesan kesalahan yang lebih baik untuk kegagalan pemulihan oleh @gchust

### 🐛 Perbaikan Bug

- **[klien]**
  - Aturan tautan tombol tidak berfungsi dengan baik karena masalah urutan ([#6147](https://github.com/nocobase/nocobase/pull/6147)) oleh @zhangzhonghe

  - Anomali tata letak setelah menghapus blok atau bidang ([#6139](https://github.com/nocobase/nocobase/pull/6139)) oleh @zhangzhonghe

  - Memperbaiki pengaturan bidang yang tidak dapat difilter pada tombol filter yang memengaruhi tabel lain dengan koleksi yang sama ([#6121](https://github.com/nocobase/nocobase/pull/6121)) oleh @katherinehhh

  - data tidak ditampilkan untuk bidang asosiasi di sub-detail ([#6117](https://github.com/nocobase/nocobase/pull/6117)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana 'mode pemuatan data' menjadi tidak valid setelah berpindah halaman ([#6115](https://github.com/nocobase/nocobase/pull/6115)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana nilai default bidang asosiasi tidak disegarkan setelah berpindah halaman ([#6114](https://github.com/nocobase/nocobase/pull/6114)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana nilai default untuk bidang asosiasi tidak berlaku dalam mode Mudah dibaca ([#6066](https://github.com/nocobase/nocobase/pull/6066)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana penugasan bidang untuk tombol formulir di simpul manual workflow tidak valid ([#6054](https://github.com/nocobase/nocobase/pull/6054)) oleh @zhangzhonghe

  - Memperbaiki variabel popup saat ini yang hilang di modal tautan aktifkan bidang ([#6045](https://github.com/nocobase/nocobase/pull/6045)) oleh @katherinehhh

  - Melanjutkan rendering halaman setelah permintaan pemeriksaan otentikasi selesai ([#6020](https://github.com/nocobase/nocobase/pull/6020)) oleh @2013xile

  - Memperbaiki masalah di mana baris tabel tidak dapat diseret dan diurutkan ([#6013](https://github.com/nocobase/nocobase/pull/6013)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana sub-tabel kosong menampilkan satu baris data kosong di iOS ([#5990](https://github.com/nocobase/nocobase/pull/5990)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana mengklik bidang asosiasi tidak membuka dialog popup ([#5972](https://github.com/nocobase/nocobase/pull/5972)) oleh @zhangzhonghe

  - Memperbaiki pemilih rentang tanggal di formulir/aksi filter tidak menampilkan pemilih waktu saat showTime diatur ([#5956](https://github.com/nocobase/nocobase/pull/5956)) oleh @katherinehhh

  - Memperbaiki masalah tampilan sel tabel yang tidak terduga di plugin pihak ketiga ([#5934](https://github.com/nocobase/nocobase/pull/5934)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana tombol hapus dinonaktifkan di halaman manajemen template blok ([#5922](https://github.com/nocobase/nocobase/pull/5922)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana aturan tautan formulir gagal ketika bergantung pada nilai bidang dari sub-tabel ([#5876](https://github.com/nocobase/nocobase/pull/5876)) oleh @zhangzhonghe

  - Memperbaiki masalah data tidak berubah setelah paginasi di sub-tabel ([#5856](https://github.com/nocobase/nocobase/pull/5856)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana judul tab browser tidak diperbarui setelah berpindah halaman ([#5857](https://github.com/nocobase/nocobase/pull/5857)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana menyegarkan halaman di halaman manajemen sumber data mengarahkan ke beranda ([#5855](https://github.com/nocobase/nocobase/pull/5855)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana bidang asosiasi dalam template referensi terkadang tidak menampilkan data ([#5848](https://github.com/nocobase/nocobase/pull/5848)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana data peran tidak ditampilkan di tabel manajemen pengguna ([#5846](https://github.com/nocobase/nocobase/pull/5846)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana tombol 'Permintaan Kustom' tidak langsung terlihat setelah ditambahkan ([#5845](https://github.com/nocobase/nocobase/pull/5845)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana blok yang ditambahkan di jendela popup tidak ditampilkan saat membuka kembali popup ([#5838](https://github.com/nocobase/nocobase/pull/5838)) oleh @zhangzhonghe

  - Mencegah halaman tersembunyi memengaruhi interaksi dengan halaman lain ([#5836](https://github.com/nocobase/nocobase/pull/5836)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana mengubah nilai bidang asosiasi di blok detail tidak langsung disegarkan ([#5826](https://github.com/nocobase/nocobase/pull/5826)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana bidang tidak ditampilkan setelah menambahkannya di subformulir ([#5827](https://github.com/nocobase/nocobase/pull/5827)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana mengklik tautan tidak membuka popup saat 'Aktifkan tautan' diaktifkan untuk pertama kalinya ([#5812](https://github.com/nocobase/nocobase/pull/5812)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana login seluler mengarahkan ke halaman desktop ([#5805](https://github.com/nocobase/nocobase/pull/5805)) oleh @zhangzhonghe

  - Memperbaiki tombol konfigurasi aksi harus rata kiri ([#5798](https://github.com/nocobase/nocobase/pull/5798)) oleh @katherinehhh

  - Mencegah beberapa panggilan API saat menutup popup ([#5804](https://github.com/nocobase/nocobase/pull/5804)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana variabel tidak dapat digunakan dengan benar di blok sumber data pihak ketiga ([#5782](https://github.com/nocobase/nocobase/pull/5782)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana nilai bidang asosiasi kosong di template blok. Memperbaiki masalah di mana cakupan data blok yang menggunakan variabel tidak berfungsi dengan baik di sumber data pihak ketiga ([#5777](https://github.com/nocobase/nocobase/pull/5777)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana properti dinamis komponen tidak berfungsi dengan pemuatan lambat ([#5776](https://github.com/nocobase/nocobase/pull/5776)) oleh @gchust

  - memperbaiki pesan peringatan di React saat memuat hook secara dinamis di lingkungan pengembangan ([#5758](https://github.com/nocobase/nocobase/pull/5758)) oleh @gchust

- **[build]**
  - Memperbaiki masalah pemuatan setelah mengatur variabel lingkungan `APP_PUBLIC_PATH` ([#5924](https://github.com/nocobase/nocobase/pull/5924)) oleh @gchust

  - Memperbaiki caching file js frontend yang salah setelah build plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) oleh @gchust

  - Memperbaiki masalah eksekusi `yarn dev` setelah create-nocobase-app menghasilkan kesalahan ([#5708](https://github.com/nocobase/nocobase/pull/5708)) oleh @gchust

- **[server]** Mengatur tindakan default yang tersedia untuk ACL ([#5847](https://github.com/nocobase/nocobase/pull/5847)) oleh @chenos

- **[Formulir publik]** Tidak dapat menambahkan bidang di `Sub-form(Popover)` formulir publik ([#6157](https://github.com/nocobase/nocobase/pull/6157)) oleh @gchust

- **[Koleksi: SQL]** Memperbaiki masalah di mana memfilter Koleksi SQL memunculkan kesalahan saat `DB_TABLE_PREFIX` diatur ([#6156](https://github.com/nocobase/nocobase/pull/6156)) oleh @2013xile

- **[Workflow]**
  - Menambahkan kasus uji untuk tindakan "pindahkan" untuk memicu workflow ([#6145](https://github.com/nocobase/nocobase/pull/6145)) oleh @mytharcher

  - Memperbaiki kesalahan yang muncul saat melanjutkan simpul asinkron dalam mengeksekusi workflow secara manual ([#5877](https://github.com/nocobase/nocobase/pull/5877)) oleh @mytharcher

- **[Sinkronisasi data pengguna]**
  - Memperbaiki masalah di mana tombol "coba lagi" tidak ditampilkan di daftar tugas ([#6079](https://github.com/nocobase/nocobase/pull/6079)) oleh @2013xile

  - Memperbaiki masalah tampilan tombol sinkronisasi dan tugas. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) oleh @2013xile

- **[Verifikasi]** Memperbaiki bidang formulir kosong saat membuka laci edit di halaman pengaturan Verifikasi ([#5949](https://github.com/nocobase/nocobase/pull/5949)) oleh @chenos

- **[Sumber data: Utama]** Memperbaiki masalah di mana bidang sistem di blok formulir filter tidak dapat diedit ([#5885](https://github.com/nocobase/nocobase/pull/5885)) oleh @zhangzhonghe

- **[Visualisasi data]**
  - Memperbaiki tinggi awal blok grafik ([#5879](https://github.com/nocobase/nocobase/pull/5879)) oleh @2013xile

  - Memperbaiki masalah di mana komponen bidang filter blok grafik tidak dirender ([#5769](https://github.com/nocobase/nocobase/pull/5769)) oleh @2013xile

- **[Mobile]**
  - Memperbaiki adaptasi seluler komponen tanggal di sub-halaman ([#5859](https://github.com/nocobase/nocobase/pull/5859)) oleh @katherinehhh

  - Memperbaiki bidang input tanggal yang hilang dalam operasi filter di perangkat seluler ([#5779](https://github.com/nocobase/nocobase/pull/5779)) oleh @katherinehhh

- **[Workflow: Acara tindakan kustom]**
  - Memperbaiki kasus uji pemicu tindakan kustom oleh @mytharcher

  - Memperbaiki kasus uji yang gagal di SQLite oleh @mytharcher

- **[Workflow: Acara pra-tindakan]** Memperbaiki kasus uji pencegat permintaan oleh @mytharcher

- **[Workflow: Pesan respons]** Memperbaiki nama parameter yang salah digunakan oleh @mytharcher
