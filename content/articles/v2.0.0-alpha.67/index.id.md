---
title: "NocoBase v2.0.0-alpha.67: menambahkan komponen bidang subtable (pengeditan popup)"
description: "Catatan Rilis v2.0.0-alpha.67"
---

### 🎉 Fitur Baru

- **[server]** Refaktor supervisor aplikasi untuk mendukung manajemen multi-aplikasi di berbagai skenario ([#8043](https://github.com/nocobase/nocobase/pull/8043)) oleh @2013xile

- **[client]** Menambahkan komponen field subtable (pengeditan popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) oleh @katherinehhh

- **[AI employees]** Mendukung tempel file di chat AI ([#8487](https://github.com/nocobase/nocobase/pull/8487)) oleh @heziqiang

### 🚀 Peningkatan

- **[client]**
  - Meningkatkan tombol unggah dan edit untuk field lampiran di sub-tabel untuk memandu pengguna mengklik unggah dengan lebih baik. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) oleh @katherinehhh

  - Meningkatkan subform to-many untuk diinisialisasi dengan item default dan menghindari pembuatan record saat dikosongkan ([#8473](https://github.com/nocobase/nocobase/pull/8473)) oleh @katherinehhh

  - Meningkatkan subform to-many untuk diinisialisasi dengan item default dan menghindari pembuatan record saat dikosongkan ([#8458](https://github.com/nocobase/nocobase/pull/8458)) oleh @katherinehhh

- **[flow-engine]** Meningkatkan ctx.libs di runjs untuk mendukung pemuatan sesuai permintaan, dan menambahkan pustaka yang telah ditentukan: lodash, math, dan formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) oleh @gchust

- **[server]** Mendukung konfigurasi daftar putih origin CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) oleh @2013xile

- **[File manager]** Menambahkan penampil yang dapat diperluas untuk file manager ([#8501](https://github.com/nocobase/nocobase/pull/8501)) oleh @mytharcher

- **[Office File Previewer]** Menambahkan lebih banyak jenis file untuk pratinjau di Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) oleh @mytharcher

- **[Error handler]** Membersihkan kesalahan referensi SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) oleh @2013xile

- **[Action: Export records]** Meningkatkan cakupan data aksi ekspor berdasarkan record yang dipilih atau filter sumber daya ([#8442](https://github.com/nocobase/nocobase/pull/8442)) oleh @katherinehhh

- **[Action: Export records Pro]** Meningkatkan cakupan data aksi ekspor berdasarkan record yang dipilih atau filter sumber daya oleh @katherinehhh

- **[Workflow: Approval]** Menerapkan kontrol akses untuk API guna mencegah operasi data yang tidak sah oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki waktu duplikat di nilai filter DateTime ([#8506](https://github.com/nocobase/nocobase/pull/8506)) oleh @zhangzhonghe

  - Memperbaiki waktu duplikat di nilai filter DateTime ([#8484](https://github.com/nocobase/nocobase/pull/8484)) oleh @zhangzhonghe

  - Memperbaiki field nanoid yang tidak dihasilkan ulang setelah submit form ([#8491](https://github.com/nocobase/nocobase/pull/8491)) oleh @katherinehhh

  - Memperbaiki masalah popover editor teks kaya yang terhalang ([#8443](https://github.com/nocobase/nocobase/pull/8443)) oleh @zhangzhonghe

  - Memfilter daftar untuk menghapus duplikat ([#8431](https://github.com/nocobase/nocobase/pull/8431)) oleh @jiannx

  - Memperbaiki pesan validasi wajib duplikat saat membersihkan field kaskade ([#8476](https://github.com/nocobase/nocobase/pull/8476)) oleh @katherinehhh

  - Memperbaiki masalah menu konfigurasi tidak ditampilkan di Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) oleh @zhangzhonghe

  - Memperbaiki masalah data sub-detail dalam mode hanya-baca tidak dapat ditampilkan dengan benar di form edit ([#8469](https://github.com/nocobase/nocobase/pull/8469)) oleh @katherinehhh

  - Memperbaiki masalah popup "Custom Variables" yang terhalang ([#8463](https://github.com/nocobase/nocobase/pull/8463)) oleh @zhangzhonghe

  - Memperbaiki masalah pengaturan pengurutan grup field koleksi tidak berfungsi. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) oleh @katherinehhh

  - Memperbaiki masalah tombol "Column Settings" tabel yang tidak berfungsi ([#8441](https://github.com/nocobase/nocobase/pull/8441)) oleh @zhangzhonghe

  - Memperbaiki masalah popup pemilih field asosiasi file memiliki z-index yang salah, dan konfigurasi popup tidak dapat disimpan dengan benar. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) oleh @gchust

  - Memperbaiki masalah saat mengedit koleksi di antarmuka grafis ([#8451](https://github.com/nocobase/nocobase/pull/8451)) oleh @katherinehhh

- **[database]**
  - Memperbaiki kesalahan saat memfilter dengan operator `empty` setelah memuat ulang koleksi ([#8496](https://github.com/nocobase/nocobase/pull/8496)) oleh @2013xile

  - Memperbaiki: pembaruan mendalam pada asosiasi bersarang ([#8492](https://github.com/nocobase/nocobase/pull/8492)) oleh @chenos

  - Memperbaiki: pembaruan mendalam pada asosiasi bersarang ([#8492](https://github.com/nocobase/nocobase/pull/8492)) oleh @chenos

- **[server]** Memperbaiki versi `mathjs` di dependensi umum ([#8475](https://github.com/nocobase/nocobase/pull/8475)) oleh @mytharcher

- **[flow-engine]**
  - Memperbaiki masalah penutupan popup tersemat menyebabkan kesalahan setelah membuka konfigurasi aturan tautan dan popup konfigurasi alur peristiwa secara berurutan. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) oleh @gchust

  - Memperbaiki masalah mengklik menu konfigurasi berulang kali dapat membuka beberapa popup konfigurasi. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) oleh @gchust

  - Memperbaiki masalah variabel di parameter kode runjs diselesaikan sebelum eksekusi. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) oleh @gchust

  - Memperbaiki masalah variabel popup tidak dapat dipilih di popup pembuatan cepat pemilih data. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) oleh @gchust

- **[AI employees]** Memperbaiki masalah konfigurasi field yang dapat dipilih tidak konsisten antara pemodelan AI dan manajemen sumber data ([#8488](https://github.com/nocobase/nocobase/pull/8488)) oleh @cgyrock

- **[Data source: Main]** Memperbaiki masalah penghapusan record dari blok tabel asosiasi many-to-many tidak menghormati batasan `onDelete: 'restrict'` pada field asosiasi ([#8493](https://github.com/nocobase/nocobase/pull/8493)) oleh @2013xile

- **[Block: iframe]** Memperbaiki kesalahan saat menambahkan variabel agregat ke Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) oleh @zhangzhonghe

- **[Async task manager]** Memperbaiki masalah alur kerja yang dipicu oleh impor asinkron tertunda untuk dieksekusi ([#8478](https://github.com/nocobase/nocobase/pull/8478)) oleh @mytharcher

- **[File manager]** Memperbaiki masalah nama file yang diperoleh dari body permintaan menjadi string yang didekode secara tidak terduga ([#8481](https://github.com/nocobase/nocobase/pull/8481)) oleh @mytharcher

- **[UI templates]** Memperbaiki masalah blok template referensi tidak dapat mengatur cakupan data melalui pengaturan alur peristiwa. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) oleh @gchust

- **[Mobile (deprecated)]]** Plugin seluler yang tidak digunakan lagi (digantikan oleh plugin ui-layout dari versi 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) oleh @chenos

- **[Action: Import records Pro]** Memperbaiki masalah alur kerja yang dipicu oleh impor asinkron tertunda untuk dieksekusi oleh @mytharcher

- **[Workflow: Webhook]** Memperbaiki masalah data body hilang saat parsing body tidak dikonfigurasi oleh @mytharcher

- **[Template print]**
  - Memperbaiki logika izin tombol cetak yang salah saat peran digabungkan. oleh @jiannx

  - Menghapus tombol footer dari konfigurasi template cetak oleh @katherinehhh

- **[Workflow: Approval]**
  - Memperbaiki masalah field tidak ditampilkan di kartu tugas persetujuan oleh @zhangzhonghe

  - Memperbaiki masalah mengembalikan persetujuan ke node sebelumnya tetapi kembali ke awal oleh @mytharcher

  - Memperbaiki masalah konkurensi menyebabkan eksekusi dilanjutkan berulang kali oleh @mytharcher

  - Memperbaiki masalah kesalahan yang muncul di popup record persetujuan 1.x oleh @mytharcher

- **[Email manager]**
  - Memperbaiki masalah popup konfigurasi email yang terhalang oleh @zhangzhonghe

  - Memperbaiki masalah email di kotak surat yang sama antara beberapa pengguna dan mengoptimalkan kinerja oleh @jiannx

- **[Migration manager]** Memperbaiki potensi pembekuan proses yang disebabkan oleh pencatatan pernyataan SQL yang sangat besar yang disertakan dalam pengecualian kesalahan migrasi oleh @cgyrock
