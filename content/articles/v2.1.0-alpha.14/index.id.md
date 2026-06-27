---
title: "NocoBase v2.1.0-alpha.14: Menambahkan kemampuan untuk memanggil sub agen untuk karyawan AI"
description: "Catatan Rilis v2.1.0-alpha.14"
---

### 🎉 Fitur Baru

- **[Karyawan AI]** Menambahkan kemampuan untuk memanggil sub-agen untuk karyawan AI ([#8935](https://github.com/nocobase/nocobase/pull/8935)) oleh @cgyrock

- **[AI: Server MCP]** Menyediakan API kueri koleksi data generik, yang dapat dipanggil melalui MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) oleh @2013xile

### 🚀 Peningkatan

- **[tidak terdefinisi]**
  - Menambahkan daftar isi ke README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) oleh @gaston98765

  - Mengurangi kebisingan log selama startup server dengan membungkam perintah unzip untuk LibreOffice dan Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) oleh @Rishabh1925

- **[Mesin alur]** Menambahkan api baru untuk pembuatan UI. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) oleh @gchust

- **[Alur Kerja]** Mengubah ukuran sakelar yang diaktifkan menjadi kecil ([#9010](https://github.com/nocobase/nocobase/pull/9010)) oleh @mytharcher

- **[Karyawan AI]** Mengoptimalkan prompt untuk deepseek saat menangani jenis file yang tidak didukung ([#9003](https://github.com/nocobase/nocobase/pull/9003)) oleh @cgyrock

- **[Aksi: Permintaan Kustom]** menambahkan model aksi untuk permintaan kustom ([#8890](https://github.com/nocobase/nocobase/pull/8890)) oleh @jiannx

- **[Alur Kerja: JavaScript]** Menambahkan `isolated-vm` sebagai mesin eksekusi JavaScript default untuk node JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) oleh @mytharcher
Referensi: [Node JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
### 🐛 Perbaikan Bug

- **[server]**
  - Menambahkan pemeriksaan serving untuk menghindari status aplikasi diperbarui oleh instance non-serving ([#8959](https://github.com/nocobase/nocobase/pull/8959)) oleh @mytharcher

  - Mendukung pengambilan aplikasi target berdasarkan hostname ([#8978](https://github.com/nocobase/nocobase/pull/8978)) oleh @2013xile

- **[klien]**
  - bidang relasi subform gagal disimpan ([#9004](https://github.com/nocobase/nocobase/pull/9004)) oleh @jiannx

  - subform dari bidang tidak menampilkan data ([#9008](https://github.com/nocobase/nocobase/pull/9008)) oleh @jiannx

  - Memperbaiki masalah di mana salinan bidang terkait dalam tabel tidak ditampilkan dengan benar pada rendering pertama. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) oleh @jiannx

  - Memperbaiki pesan konfirmasi sekunder yang salah saat menutup popup bertingkat setelah memodifikasi data formulir. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) oleh @gchust

  - Memperbaiki masalah di mana spasi dalam ekspresi variabel menyebabkan label tidak ditampilkan ([#8988](https://github.com/nocobase/nocobase/pull/8988)) oleh @mytharcher

- **[mesin-alur]**
  - Memperbaiki menu pengaturan yang terpotong di popup ([#9005](https://github.com/nocobase/nocobase/pull/9005)) oleh @gchust

  - Memperbaiki masalah di mana item menu tidak dapat dipilih ketika lebar komponen UI dalam status konfigurasi terlalu kecil. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) oleh @gchust

  - Menambahkan potongan js untuk mengatur item formulir dan item detail ([#8974](https://github.com/nocobase/nocobase/pull/8974)) oleh @jiannx

- **[Alur Kerja: node mailer]** Memperbaiki validasi untuk bidang variabel ([#9047](https://github.com/nocobase/nocobase/pull/9047)) oleh @mytharcher

- **[Bidang Koleksi: Urutkan]** fix(field-sort): mencegah crash ketika atribut scopeKey tidak terdefinisi ([#9019](https://github.com/nocobase/nocobase/pull/9019)) oleh @gaston98765

- **[Karyawan AI]**
  - Memperbaiki masalah di mana karyawan AI tidak dapat menggunakan keterampilan ([#9023](https://github.com/nocobase/nocobase/pull/9023)) oleh @cgyrock

  - Memperbaiki masalah di mana LLM masih mencoba memuat keterampilan setelah alat getSkill dinonaktifkan ([#9013](https://github.com/nocobase/nocobase/pull/9013)) oleh @cgyrock

  - Memperbaiki masalah perilaku pencarian web yang tidak normal saat menggunakan LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) oleh @cgyrock

  - Menambahkan verifikasi kepemilikan ke API percakapan AI ([#8993](https://github.com/nocobase/nocobase/pull/8993)) oleh @cgyrock

- **[Blok: GridCard]** Memperbaiki masalah bahwa tombol tidak disegarkan saat grid card disegarkan ([#9021](https://github.com/nocobase/nocobase/pull/9021)) oleh @jiannx

- **[Alur Kerja]**
  - Memperbaiki aturan validasi instruksi kondisi yang salah ([#9017](https://github.com/nocobase/nocobase/pull/9017)) oleh @mytharcher

  - Memperbaiki masalah di mana mode pemicu koleksi tidak dapat diatur ke "buat atau perbarui" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) oleh @mytharcher

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki daftar putih aksi untuk pembaruan pesan dalam aplikasi untuk mencegah pembaruan tidak sah oleh bukan pemilik. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) oleh @mytharcher

- **[Manajer sumber data]** Mengoptimalkan penamaan alat MCP dan mengurangi respons API yang berlebihan untuk menghindari konsumsi konteks percakapan AI yang berlebihan ([#9000](https://github.com/nocobase/nocobase/pull/9000)) oleh @2013xile

- **[Alur Kerja: node SQL]** Memperbaiki masalah keamanan di node SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) oleh @mytharcher

- **[Visualisasi data]** Saat menggunakan filter berbasis variabel, grafik gagal menyelesaikan nilai variabel dengan benar pada render awal ([#8964](https://github.com/nocobase/nocobase/pull/8964)) oleh @2013xile

- **[Alur Kerja: Persetujuan]**
  - Menambahkan toleransi kesalahan pada alur kerja yang dihapus, untuk menghindari kesalahan muat di daftar tugas oleh @mytharcher

  - Menambahkan toleransi kesalahan untuk tidak ada `latestRound` oleh @mytharcher

  - Memperbaiki batas versi migrasi lama untuk menghindari kesalahan yang muncul saat memulai di deployment versi terbaru oleh @mytharcher

- **[Manajer email]** tidak ada konfirmasi penutupan yang ditampilkan setelah email dikirim oleh @jiannx
