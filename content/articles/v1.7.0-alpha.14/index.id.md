---
title: "NocoBase v1.7.0-alpha.14: mendukung otorisasi komersial"
description: "Catatan Rilis v1.7.0-alpha.14"
---

### 🎉 Fitur Baru

- **[client]**

  - Bidang teks satu baris mendukung memasukkan beberapa kata kunci untuk pemfilteran ([#6685](https://github.com/nocobase/nocobase/pull/6685)) oleh @zhangzhonghe
    Referensi: [Filter multi-kata kunci](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - aturan tautan tindakan mendukung variabel 'formulir saat ini' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) oleh @katherinehhh
- **[build]** mendukung otorisasi komersial ([#6554](https://github.com/nocobase/nocobase/pull/6554)) oleh @jiannx
- **[undefined]** Menambahkan log plugin impor oleh @aaaaaajie
- **[Tindakan: Impor catatan]** Menambahkan log plugin impor ([#6841](https://github.com/nocobase/nocobase/pull/6841)) oleh @aaaaaajie
- **[plugin-commercial]** mendukung komersial oleh @jiannx
- **[Filter multi-kata kunci]** Bidang teks satu baris mendukung memasukkan beberapa kata kunci untuk pemfilteran oleh @zhangzhonghe
  Referensi: [Filter multi-kata kunci](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Cetak template]**

  - Menambahkan dukungan untuk pencetakan massal dalam pencetakan template. oleh @sheldon66
  - Menambahkan dukungan untuk pencetakan massal dalam pencetakan template. oleh @sheldon66

### 🚀 Peningkatan

- **[undefined]** Membangun image docker lengkap ([#6898](https://github.com/nocobase/nocobase/pull/6898)) oleh @chenos
- **[client]**

  - Mengoptimalkan masalah halaman yang semakin lambat seiring penggunaan ([#6888](https://github.com/nocobase/nocobase/pull/6888)) oleh @zhangzhonghe
  - menambahkan lebih banyak pengaturan ukuran bawaan untuk gambar status baca ([#6868](https://github.com/nocobase/nocobase/pull/6868)) oleh @katherinehhh
- **[Workflow]**

  - Menambahkan semua kunci lokal en-US yang terlewat ([#6885](https://github.com/nocobase/nocobase/pull/6885)) oleh @mytharcher
  - Mengizinkan revisi lebih dari satu draf ([#6851](https://github.com/nocobase/nocobase/pull/6851)) oleh @mytharcher
- **[Bidang koleksi: Lampiran(URL)]** menambahkan lebih banyak ukuran bawaan ke bidang URL lampiran untuk status baca ([#6871](https://github.com/nocobase/nocobase/pull/6871)) oleh @katherinehhh
- **[Manajer Email]**

  - memperbaiki kesalahan sinkronisasi dan masalah penggunaan tidak mudah lainnya oleh @jiannx
  - menambahkan manajemen draf, mendukung tampilan email bawahan oleh @jiannx

### 🐛 Perbaikan Bug

- **[client]**

  - aturan tautan nonaktif tidak berfungsi untuk tombol tindakan ([#6896](https://github.com/nocobase/nocobase/pull/6896)) oleh @katherinehhh
  - halaman tidak dialihkan dengan benar setelah menghapus item terakhir ([#6892](https://github.com/nocobase/nocobase/pull/6892)) oleh @katherinehhh
  - komponen kaskade dalam modal tidak memuat data asosiasi pada awalnya ([#6886](https://github.com/nocobase/nocobase/pull/6886)) oleh @katherinehhh
  - tabel catatan pilih asosiasi tidak memfilter catatan yang sudah diasosiasikan ([#6874](https://github.com/nocobase/nocobase/pull/6874)) oleh @katherinehhh
  - data asosiasi tidak dikirimkan saat mengekspos bidang asosiasi di subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) oleh @katherinehhh
  - variabel formulir saat ini hilang dalam lingkup data tabel pemilih data ([#6882](https://github.com/nocobase/nocobase/pull/6882)) oleh @katherinehhh
  - bidang urut yang dapat diseret tidak menampilkan opsi yang tersedia dengan benar ([#6875](https://github.com/nocobase/nocobase/pull/6875)) oleh @katherinehhh
  - menghapus nilai sisi kanan saat operator berubah dalam aturan tautan ([#6862](https://github.com/nocobase/nocobase/pull/6862)) oleh @katherinehhh
  - operator hilang saat beralih dalam aturan tautan ([#6857](https://github.com/nocobase/nocobase/pull/6857)) oleh @katherinehhh
  - masalah tautan tombol di blok detail ([#6867](https://github.com/nocobase/nocobase/pull/6867)) oleh @katherinehhh
  - evaluasi operator yang salah untuk variabel tanggal dalam kondisi tautan ([#6825](https://github.com/nocobase/nocobase/pull/6825)) oleh @katherinehhh
  - Bidang yang disembunyikan masih ditampilkan ([#6844](https://github.com/nocobase/nocobase/pull/6844)) oleh @zhangzhonghe
  - ketidakcocokan penguraian variabel dengan data {{title}} dalam konfirmasi sekunder ([#6838](https://github.com/nocobase/nocobase/pull/6838)) oleh @katherinehhh
  - ketidakcocokan penguraian variabel dengan data {{title}} dalam konfirmasi sekunder ([#6838](https://github.com/nocobase/nocobase/pull/6838)) oleh @katherinehhh
  - peningkatan gaya komponen nilai aturan tautan ([#6836](https://github.com/nocobase/nocobase/pull/6836)) oleh @katherinehhh
- **[database]** menangani sel string kosong selama impor bidang untuk mencegah kesalahan ([#6880](https://github.com/nocobase/nocobase/pull/6880)) oleh @aaaaaajie
- **[build]** memperbaiki kesalahan runtime klien di plugin-workflow-javascript, proses kesalahan undefine ([#6859](https://github.com/nocobase/nocobase/pull/6859)) oleh @jiannx
- **[Manajer File]**

  - Memperbaiki URL pratinjau pada file non-gambar ([#6889](https://github.com/nocobase/nocobase/pull/6889)) oleh @mytharcher
  - Memperbaiki tipe ([#6873](https://github.com/nocobase/nocobase/pull/6873)) oleh @mytharcher
  - Memperbaiki pembuatan catatan file tanpa izin kunci asing ([#6863](https://github.com/nocobase/nocobase/pull/6863)) oleh @mytharcher
- **[Blok: Panel tindakan]**

  - Membaca nama dasar rute dari pemindai untuk beradaptasi dengan lingkungan desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) oleh @sheldon66
  - Warna panel Tindakan salah dalam mode gelap ([#6842](https://github.com/nocobase/nocobase/pull/6842)) oleh @zhangzhonghe
- **[Integrasi AI]** Konten tidak ditampilkan saat beralih antara halaman konfigurasi layanan LLM dan konfigurasi validasi ([#6887](https://github.com/nocobase/nocobase/pull/6887)) oleh @2013xile
- **[Workflow: Node manual]**

  - Memperbaiki kasus uji karena plugin dihapus dari daftar bawaan ([#6895](https://github.com/nocobase/nocobase/pull/6895)) oleh @mytharcher
  - Memperbaiki kesalahan render saat menampilkan item yang belum diproses ([#6879](https://github.com/nocobase/nocobase/pull/6879)) oleh @mytharcher
  - Memperbaiki jumlah statistik yang salah pada tugas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) oleh @mytharcher
- **[Workflow]**

  - Memperbaiki batas tumpukan yang bekerja salah untuk acara koleksi ([#6876](https://github.com/nocobase/nocobase/pull/6876)) oleh @mytharcher
  - Memperbaiki navigasi kembali yang tidak berfungsi saat membuka tautan popup langsung di pusat tugas ([#6853](https://github.com/nocobase/nocobase/pull/6853)) oleh @mytharcher
- **[Visualisasi data]**

  - Blok bagan tidak ditampilkan saat ditambahkan ke popup yang dipicu dari tindakan tingkat blok ([#6864](https://github.com/nocobase/nocobase/pull/6864)) oleh @2013xile
  - Memperbaiki kesalahan saat memfilter bidang m2m bersarang ([#6855](https://github.com/nocobase/nocobase/pull/6855)) oleh @2013xile
- **[Tindakan: Ekspor catatan]**

  - meningkatkan kinerja saat menghapus bidang dalam pengaturan bidang impor/ekspor ([#6861](https://github.com/nocobase/nocobase/pull/6861)) oleh @katherinehhh
  - Memperbaiki ekspor nilai kosong dalam asosiasi bersarang dan url lampiran ([#6845](https://github.com/nocobase/nocobase/pull/6845)) oleh @aaaaaajie
- **[Blok: template]** Setelah menyimpan sebagai template warisan, kesalahan saat membuka popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) oleh @gchust
- **[Tindakan: Duplikat catatan]** modal menutup pada klik input pertama saat mengedit data duplikat ([#6848](https://github.com/nocobase/nocobase/pull/6848)) oleh @katherinehhh
- **[Workflow: test kit]** Memperbaiki kasus uji yang gagal karena plugin preset yang diperlukan ([#6839](https://github.com/nocobase/nocobase/pull/6839)) oleh @mytharcher
- **[Workflow: Acara pasca-tindakan]** Memperbaiki variabel yang diaktifkan pengguna tidak dapat diakses di template Hanldebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) oleh @mytharcher
- **[plugin-commercial]**

  - memperbaiki log komersial yang dikirim ke crm dan terjemahan teks oleh @jiannx
  - menggunakan rantai prototipe untuk mengimplementasikan fungsi withCommercial oleh @jiannx
- **[Tindakan: Ekspor catatan Pro]**

  - meningkatkan kinerja saat menghapus bidang dalam pengaturan bidang impor/ekspor pro oleh @katherinehhh
  - Memperbaiki kesalahan ekspor teks panjang. oleh @aaaaaajie
- **[Workflow: Subflow]** Memperbaiki pemicu tidak terdefinisi yang menyebabkan crash halaman oleh @mytharcher
- **[Cetak template]**

  - Memperbaiki masalah pemformat tidak ditemukan. oleh @sheldon66
  - Memperbaiki pemformat tidak ditemukan oleh @sheldon66
- **[Penyimpanan file: S3(Pro)]**

  - url akses kedaluwarsa tidak valid oleh @jiannx
  - Mengubah untuk menggunakan bidang koleksi untuk menemukan penyimpanan oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Memperbaiki jumlah statistik yang salah pada tugas oleh @mytharcher
  - Memperbaiki lingkup penerima delegasi dan menambahkan ke penerima lain oleh @mytharcher
- **[Manajer Email]**

  - memperbaiki kesalahan ts oleh @jiannx
  - api daftar mendukung penggabungan subjek oleh @jiannx
- **[Manajer Cadangan]** Memperbaiki kesalahan tipe dalam build oleh @mytharcher
