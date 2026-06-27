---
title: "NocoBase v2.1.0-beta.12: Tambahkan alat pencarian web berbasis LLM untuk karyawan AI"
description: "Catatan Rilis v2.1.0-beta.12"
---

### 🎉 Fitur Baru

- **[klien]**
  - menambahkan variabel js ke alur peristiwa ([#8938](https://github.com/nocobase/nocobase/pull/8938)) oleh @jiannx

  - menambahkan aksi item JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) oleh @jiannx

- **[Karyawan AI]** Menambahkan alat pencarian web berbasis LLIM untuk karyawan AI ([#9032](https://github.com/nocobase/nocobase/pull/9032)) oleh @cgyrock

### 🚀 Peningkatan

- **[tidak terdefinisi]**
  - Menambahkan daftar isi ke README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) oleh @gaston98765

  - Mengurangi kebisingan log saat startup server dengan membungkam perintah unzip untuk LibreOffice dan Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) oleh @Rishabh1925

- **[klien]**
  - mendukung pengaturan gaya bidang melalui runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) oleh @jiannx

  - Mengoptimalkan tata letak horizontal aksi formulir ([#8869](https://github.com/nocobase/nocobase/pull/8869)) oleh @jiannx

- **[Workflow: JavaScript]** Menambahkan `isolated-vm` sebagai mesin eksekusi JavaScript default untuk node JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) oleh @mytharcher
Referensi: [Node JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[Workflow]**
  - Mengubah ukuran sakelar aktif menjadi kecil ([#9010](https://github.com/nocobase/nocobase/pull/9010)) oleh @mytharcher

  - Menambahkan variabel untuk parameter ukuran halaman ([#8951](https://github.com/nocobase/nocobase/pull/8951)) oleh @mytharcher

- **[Karyawan AI]** Mengoptimalkan prompt untuk deepseek saat menangani jenis file yang tidak didukung ([#9003](https://github.com/nocobase/nocobase/pull/9003)) oleh @cgyrock

- **[Aksi: Permintaan kustom]** menambahkan model aksi untuk permintaan kustom ([#8890](https://github.com/nocobase/nocobase/pull/8890)) oleh @jiannx

- **[Bidang koleksi: divisi administratif China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) oleh @jiannx

- **[Workflow: Subflow]** Menambahkan logika defensif untuk menghindari workflow menggantung saat terjadi pengecualian oleh @mytharcher

- **[Workflow: Persetujuan]** Memperbaiki masalah kinerja yang disebabkan oleh bidang JSON saat memuat daftar catatan persetujuan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana pesan konfirmasi perubahan yang belum disimpan yang salah muncul untuk aksi edit massal ([#9054](https://github.com/nocobase/nocobase/pull/9054)) oleh @gchust

  - Memperbaiki masalah di mana popup konfirmasi sekunder yang salah muncul saat mengirimkan formulir setelah membuat catatan melalui subtable popup. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) oleh @gchust

  - Memperbaiki masalah di mana ctx.request tidak dapat menimpa header Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) oleh @gchust

  - bidang relasi subform gagal disimpan ([#9004](https://github.com/nocobase/nocobase/pull/9004)) oleh @jiannx

  - subform dari bidang tidak menampilkan data ([#9008](https://github.com/nocobase/nocobase/pull/9008)) oleh @jiannx

  - Memperbaiki masalah di mana salinan bidang terkait dalam tabel tidak ditampilkan dengan benar pada rendering pertama. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) oleh @jiannx

  - Memperbaiki pesan konfirmasi sekunder yang salah saat menutup popup bertingkat setelah memodifikasi data formulir. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) oleh @gchust

  - Memperbaiki masalah di mana spasi dalam ekspresi variabel menyebabkan label tidak ditampilkan ([#8988](https://github.com/nocobase/nocobase/pull/8988)) oleh @mytharcher

  - Memperbaiki pengecualian saat menambahkan node anak ke tabel pohon di jendela pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) oleh @jiannx

- **[manajer-sumber-data]** Memperbaiki masalah di mana beberapa jenis bidang tidak diperbarui dengan benar setelah menyinkronkan bidang dari database ([#9046](https://github.com/nocobase/nocobase/pull/9046)) oleh @2013xile

- **[server]**
  - Menambahkan pemeriksaan serving untuk menghindari status aplikasi diperbarui oleh instance non-serving ([#8959](https://github.com/nocobase/nocobase/pull/8959)) oleh @mytharcher

  - Menghindari penanganan sync-message setelah aplikasi berhenti ([#8940](https://github.com/nocobase/nocobase/pull/8940)) oleh @mytharcher

  - Mengubah waktu penutupan Pub-Sub menjadi `beforeStop`, untuk menghindari pesan terkirim atau ditangani setelah database ditutup ([#8934](https://github.com/nocobase/nocobase/pull/8934)) oleh @mytharcher

- **[mesin-alur]**
  - Memperbaiki menu pengaturan yang terpotong di popup ([#9005](https://github.com/nocobase/nocobase/pull/9005)) oleh @gchust

  - Memperbaiki masalah di mana item menu tidak dapat dipilih ketika lebar komponen UI dalam status konfigurasi terlalu kecil. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) oleh @gchust

  - Menambahkan potongan js untuk mengatur item formulir dan item detail ([#8974](https://github.com/nocobase/nocobase/pull/8974)) oleh @jiannx

  - Menyinkronkan status ke konfigurasi bidang ketika bidang formulir dihapus ([#8857](https://github.com/nocobase/nocobase/pull/8857)) oleh @jiannx

- **[database]** Menggunakan peringatan alih-alih kesalahan ketika salah satu parameter appends tidak valid ([#8923](https://github.com/nocobase/nocobase/pull/8923)) oleh @mytharcher

- **[resourcer]** Memperbaiki masalah di mana sumber data eksternal gagal dimuat dengan benar. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) oleh @2013xile

- **[Karyawan AI]**
  - Memperbaiki kegagalan unggah dokumen karyawan AI di bawah akses subpath dengan APP_PUBLIC_PATH dikonfigurasi. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) oleh @cgyrock

  - Memperbaiki masalah saat menggunakan model deepseek atau minmax di dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) oleh @cgyrock

  - Memperbaiki masalah di mana membatalkan penalaran karyawan AI akan menyebabkan layanan crash ([#9031](https://github.com/nocobase/nocobase/pull/9031)) oleh @cgyrock

  - Memperbaiki masalah perilaku pencarian web yang tidak normal saat menggunakan Qwen LLM ([#9012](https://github.com/nocobase/nocobase/pull/9012)) oleh @cgyrock

  - Menambahkan verifikasi kepemilikan ke API percakapan AI ([#8993](https://github.com/nocobase/nocobase/pull/8993)) oleh @cgyrock

  - Menyesuaikan jarak antara komponen kartu alat dalam Percakapan AI ([#8965](https://github.com/nocobase/nocobase/pull/8965)) oleh @cgyrock

- **[Workflow: Node permintaan HTTP]** Membersihkan hasil node permintaan workflow untuk menghindari mengekspos konfigurasi permintaan, menetapkan default node baru untuk hanya mengembalikan data respons, dan menambahkan logging debug untuk permintaan yang gagal. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) oleh @mytharcher

- **[Bidang koleksi: Urutkan]** fix(field-sort): mencegah crash ketika atribut scopeKey tidak terdefinisi ([#9019](https://github.com/nocobase/nocobase/pull/9019)) oleh @gaston98765

- **[Blok: GridCard]** Memperbaiki masalah bahwa tombol tidak disegarkan ketika grid card disegarkan ([#9021](https://github.com/nocobase/nocobase/pull/9021)) oleh @jiannx

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki daftar putih aksi untuk pembaruan pesan dalam aplikasi untuk mencegah pembaruan tidak sah oleh non-pemilik. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) oleh @mytharcher

- **[Workflow: Node SQL]** Memperbaiki masalah keamanan di node SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) oleh @mytharcher

- **[Visualisasi data]**
  - Saat menggunakan filter berbasis variabel, grafik gagal menyelesaikan nilai variabel dengan benar pada render awal ([#8964](https://github.com/nocobase/nocobase/pull/8964)) oleh @2013xile

  - memperbaiki statistik data yang tidak normal dari grafik peran root setelah mengaktifkan plugin ruang ([#8969](https://github.com/nocobase/nocobase/pull/8969)) oleh @jiannx

- **[Aksi: Impor catatan]** memperbaiki masalah kegagalan impor setelah membuka plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) oleh @jiannx

- **[Workflow: JavaScript]** Memperbaiki masalah keamanan ([#8967](https://github.com/nocobase/nocobase/pull/8967)) oleh @mytharcher

- **[Aksi: Ekspor catatan]** Membatasi konfigurasi impor dan ekspor bidang terkait multi-layer ([#8893](https://github.com/nocobase/nocobase/pull/8893)) oleh @jiannx

- **[Variabel kustom]** lewati auth notify ([#8942](https://github.com/nocobase/nocobase/pull/8942)) oleh @chenos

- **[Lokalisasi]** mencegah permintaan localizationTexts:missing saat izin ditolak ([#8903](https://github.com/nocobase/nocobase/pull/8903)) oleh @chenos

- **[Otentikasi]** memperbaiki acl untuk mendukung parameter pemfilteran status kustom ([#8918](https://github.com/nocobase/nocobase/pull/8918)) oleh @jiannx

- **[Mesin alur]** Menghapus peristiwa lama yang disalin dari repositori uiSchema untuk menghindari kesalahan yang muncul saat dipicu ([#8957](https://github.com/nocobase/nocobase/pull/8957)) oleh @mytharcher

- **[Aksi: Impor catatan Pro]**
  - batasi konfigurasi impor dan ekspor bidang terkait multi-layer oleh @jiannx

  - Memperbaiki masalah di mana opsi "Trigger workflow" tidak berfungsi saat tidak dicentang oleh @mytharcher

- **[Sumber data: Oracle Eksternal]** Memperbaiki kesalahan yang terjadi saat memuat sumber data Oracle eksternal oleh @2013xile

- **[Workflow: Persetujuan]**
  - Memperbaiki batas versi migrasi lama untuk menghindari kesalahan yang muncul saat memulai di deployment versi terbaru oleh @mytharcher

  - Menambahkan toleransi kesalahan pada workflow yang dihapus, untuk menghindari kesalahan muat di daftar tugas oleh @mytharcher

  - Memperbaiki terjemahan, pemilihan node, dan masalah target kembali pada tombol kembali formulir persetujuan v2 oleh @zhangzhonghe

  - Menambahkan toleransi kesalahan untuk `latestRound` yang tidak ada oleh @mytharcher

- **[Manajer email]**
  - Memperbaiki tanda tangan yang ditimpa saat menggunakan template oleh @jiannx

  - tidak ada konfirmasi penutupan yang ditampilkan setelah email dikirim oleh @jiannx
