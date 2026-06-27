---
title: "NocoBase v2.2.0-alpha.1: Dukungan input pemindaian untuk bidang teks"
description: "Catatan Rilis v2.2.0-alpha.1"
---

### 🎉 Fitur Baru

- **[client-v2]** Dukungan input scan untuk bidang teks ([#9599](https://github.com/nocobase/nocobase/pull/9599)) oleh @katherinehhh
- **[undefined]** Menambahkan perintah proxy tingkat atas untuk nginx dan caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) oleh @chenos
- **[Manajer tugas asinkron]** Menambahkan dukungan klien v2 untuk aksi bilah atas manajer tugas asinkron. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) oleh @jiannx
- **[Manajer cadangan]**

  - Menambahkan dukungan runtime klien v2 untuk plugin manajer cadangan. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) oleh @katherinehhh
  - Diadaptasi ke plugin kontrol versi baru ([#9563](https://github.com/nocobase/nocobase/pull/9563)) oleh @cgyrock
- **[Sumber data: NocoBase Eksternal]** Menambahkan plugin sumber data: NocoBase eksternal oleh @2013xile
- **[Kontrol versi]** Menambahkan plugin kontrol versi oleh @cgyrock

### 🚀 Peningkatan

- **[client-v2]**

  - Menambahkan dukungan untuk menonaktifkan pemilihan ganda di bidang asosiasi pilih popup v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) oleh @katherinehhh
  - Meningkatkan rendering blok v2 ketika sumber data eksternal yang dikonfigurasi dinonaktifkan, mencegah kesalahan render dan menampilkan placeholder Editor UI yang lebih jelas. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) oleh @katherinehhh
- **[Variabel dan rahasia]** Variabel lingkungan (`$env`) sekarang dapat dipilih oleh pemilih variabel berbasis flow-engine di runtime v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) oleh @Molunerfinn
- **[Manajer file]** Menambahkan dukungan `subPath` unggahan internal untuk manajer file. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) oleh @mytharcher
- **[Manajer sumber data]** Menambahkan manajemen izin sumber data client-v2 dan menyelaraskan laci pemilih izin terkait. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) oleh @jiannx
- **[Koleksi: Hubungkan ke data asing (FDW)]** Meningkatkan paritas template koleksi V2 untuk koleksi SQL dan koleksi data asing, termasuk konfirmasi SQL, manajemen server basis data asing, dan pengurutan template. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) oleh @katherinehhh
- **[Cetak template]** Memperbarui metadata koleksi cetak template untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Riwayat rekaman]** Memperbarui metadata koleksi riwayat rekaman untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Workflow: Persetujuan]** Memperbarui metadata koleksi persetujuan workflow untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Log audit]** Memperbarui metadata koleksi log audit untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Manajer email]** Memperbarui metadata koleksi manajer email untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Pengawas aplikasi]** Memperbarui metadata koleksi pengawas aplikasi untuk klasifikasi cadangan kontrol versi. oleh @cgyrock

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki bidang kata sandi tidak di-hash selama pembaruan massal. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) oleh @mytharcher
- **[client]** Memperbaiki aksi baris sub-tabel popup yang menyembunyikan seluruh bidang sub-tabel ketika aksi disembunyikan oleh aturan tautan ([#9717](https://github.com/nocobase/nocobase/pull/9717)) oleh @katherinehhh
- **[client-v2]**

  - Memperbaiki bidang JSON di tampilan tampilan klien v2 yang merender sel kosong untuk nilai objek. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) oleh @katherinehhh
  - Memperbaiki bidang opsi V2 yang salah menerjemahkan label opsi biasa di lingkungan yang dilokalkan. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) oleh @katherinehhh
- **[Blok: Peta]**

  - Memperbaiki masalah DrawingManager yang tidak tersedia di blok Google Maps v1 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) oleh @katherinehhh
  - Memperbaiki bidang geometri peta yang hilang dari menu tambah-bidang manajer sumber data v2 setelah mengaktifkan plugin peta. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) oleh @katherinehhh
- **[Kalender]** Memperbaiki masalah di mana blok Detail dan Edit tidak dapat ditambahkan di laci detail blok kalender v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) oleh @jiannx
- **[Manajer sumber data]**

  - Memperbaiki tampilan bidang judul yang basi saat membuka kembali laci konfigurasi bidang sumber data v2 setelah mengubah bidang judul. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) oleh @katherinehhh
  - Meningkatkan pesan kesalahan manajer sumber data V2 ketika operasi koleksi, bidang, sinkronisasi, dan pemuatan-tabel gagal. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) oleh @katherinehhh
- **[Karyawan AI]**

  - Meningkatkan prompt data-query karyawan AI untuk memuat keterampilan yang diperlukan sebelum menggunakan alat kueri. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) oleh @cgyrock
  - Memperbaiki tombol asisten Dara yang hilang di pengaturan bagan client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) oleh @cgyrock
- **[Blok: Daftar]** Memperbaiki status tautan aksi baris yang basi di blok daftar ketika aksi bergantung pada rekaman saat ini. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) oleh @katherinehhh
- **[Penangan kesalahan]** Mengurangi log kesalahan yang berisik untuk permintaan tidak terautentikasi normal tanpa token ([#9718](https://github.com/nocobase/nocobase/pull/9718)) oleh @2013xile
- **[Aksi: Impor Rekaman Pro]** Memperbaiki teks kacau saat mengimpor file XLSX dengan string bersama UTF-8 yang terpecah di seluruh potongan streaming. oleh @mytharcher
- **[AI: Basis pengetahuan]** Memperbaiki jalur yang hilang di URL file basis pengetahuan S3. oleh @cgyrock
- **[Riwayat rekaman]** Memperbaiki riwayat rekaman yang hilang untuk perubahan sumber data eksternal oleh @2013xile
