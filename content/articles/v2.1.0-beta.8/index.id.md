---
title: "NocoBase v2.1.0-beta.8: Dukung tombol alur kerja pemicu untuk mengonfigurasi alur setelah sukses"
description: "Catatan Rilis v2.1.0-beta.8"
---

### 🎉 Fitur Baru

- **[client]** Mendukung tombol pemicu alur kerja untuk mengonfigurasi alur setelah sukses ([#8726](https://github.com/nocobase/nocobase/pull/8726)) oleh @mytharcher

- **[Field koleksi: Kode]** field-kode mendukung 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) oleh @jiannx

- **[Alur kerja: Acara tindakan kustom]** Mendukung data konteks kustom untuk meneruskan variabel ke pemicu tindakan kustom dalam sub-alur ([#8758](https://github.com/nocobase/nocobase/pull/8758)) oleh @mytharcher

### 🚀 Peningkatan

- **[client]** Menampilkan pesan peringatan ketika tidak ada data yang tersedia untuk blok Formulir Edit atau blok Detail. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) oleh @gchust

- **[flow-engine]** Memperbaiki masalah di mana kode runjs baru akan mengurai ekspresi variabel sebelum dieksekusi. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) oleh @gchust

- **[Alur kerja]** Menampilkan semua jenis node di menu penambahan meskipun tidak tersedia ([#8828](https://github.com/nocobase/nocobase/pull/8828)) oleh @mytharcher

- **[Tindakan: Permintaan kustom]** Streaming acara mendukung permintaan kustom ([#8749](https://github.com/nocobase/nocobase/pull/8749)) oleh @jiannx

- **[AI: Basis pengetahuan]** Merefaktor logika pemuatan dokumen basis pengetahuan. oleh @cgyrock

- **[Adaptor kunci Redis]** Refaktor karena API LockManger berubah di repositori utama oleh @mytharcher

- **[Manajer cadangan]** Menambahkan kunci untuk pencadangan terjadwal di seluruh node cluster oleh @mytharcher

- **[Manajer migrasi]** Peningkatan pemeriksaan migrasi, dukungan unduhan SQL, pemformatan log, dan visibilitas proses eksekusi oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]**
  - data sub form & sub tabel tidak ditampilkan karena pemeriksaan izin ([#8846](https://github.com/nocobase/nocobase/pull/8846)) oleh @chenos

  - Memperbaiki masalah di mana tombol ciutkan formulir filter v2 berhenti berfungsi setelah mengurutkan bidang ([#8843](https://github.com/nocobase/nocobase/pull/8843)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana bidang kustom dalam nilai bidang Formulir filter tidak dapat merender tipe input nilai yang benar ([#8823](https://github.com/nocobase/nocobase/pull/8823)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana halaman manajemen templat referensi (v1) kehilangan tindakan filter dan segarkan. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) oleh @gchust

  - Memperbaiki masalah di mana blok detail dari koleksi SQL mengalami kesalahan saat memuat data. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) oleh @gchust

  - Memperbaiki masalah di mana aturan tautan bidang dalam blok detail tidak berlaku selama render awal. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) oleh @gchust

  - Memperbaiki masalah gaya tombol kembali di sub-halaman v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) oleh @zhangzhonghe

  - Blok V2 sekarang hanya menampilkan tindakan yang didukung oleh sumber data saat ini ([#8803](https://github.com/nocobase/nocobase/pull/8803)) oleh @zhangzhonghe

  - Memperbaiki validasi untuk bidang wajib yang tersembunyi oleh tautan dalam mode konfigurasi ([#8773](https://github.com/nocobase/nocobase/pull/8773)) oleh @zhangzhonghe

  - Memperbaiki pemotongan tab dan memastikan lebar tab minimum dalam mode desain ([#8771](https://github.com/nocobase/nocobase/pull/8771)) oleh @zhangzhonghe

  - Memperbaiki pembaruan UI yang tertunda untuk sakelar sembunyikan kolom sub-tabel dan penghapusan kolom berturut-turut ([#8755](https://github.com/nocobase/nocobase/pull/8755)) oleh @zhangzhonghe

  - Menonaktifkan penambahan blok untuk rekaman terkait many-to-many (array) untuk mencegah kesalahan. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) oleh @gchust

  - Memperbaiki navigasi tautan popup yang kembali setelah tampilan ditutup ([#8752](https://github.com/nocobase/nocobase/pull/8752)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana blok data asli tidak disegarkan setelah mengedit data di popup bidang asosiasi. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) oleh @gchust

  - memperbaiki dua verifikasi wajib muncul di formulir pembaruan rekaman ([#8761](https://github.com/nocobase/nocobase/pull/8761)) oleh @jiannx

- **[server]** Memperbaiki masalah kesalahan dalam kueri data dari sumber data non-database ([#8776](https://github.com/nocobase/nocobase/pull/8776)) oleh @cgyrock

- **[lock-manager]** Memperbaiki masalah kondisi balapan dari manajer kunci ([#8734](https://github.com/nocobase/nocobase/pull/8734)) oleh @mytharcher

- **[database]**
  - Memperbaiki opsi 'Paginasi Sederhana' yang hilang di templat tampilan koleksi. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) oleh @cgyrock

  - Aturan validasi presisi untuk bidang numerik tidak berlaku ([#8768](https://github.com/nocobase/nocobase/pull/8768)) oleh @2013xile

- **[undefined]** Memperbaiki masalah di mana, setelah upgrade, sistem memperingatkan bahwa plugin-block-reference tidak dapat ditemukan. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) oleh @gchust

- **[Kontrol akses]**
  - menggunakan collection.filterTargetKey alih-alih Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) oleh @chenos

  - Memperbaiki kesalahan modifikasi data sumber data API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) oleh @cgyrock

- **[Templat UI]**
  - Memperbaiki masalah di mana rekaman terkait tidak dapat dimuat dengan benar setelah menyimpan blok detail sebagai templat. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) oleh @gchust

  - Memperbaiki kesalahan render untuk blok referensi panel tindakan. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) oleh @gchust

  - Memperbaiki masalah di mana alur acara blok referensi dalam blok tabel tidak dapat dikonfigurasi dengan alur acara klik baris. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) oleh @gchust

  - Memperbaiki masalah di mana menggunakan kembali templat blok rekaman saat ini untuk blok detail dan blok formulir edit dapat menyebabkan data gagal dimuat dengan benar. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) oleh @gchust

  - Memperbaiki masalah di mana perubahan pada properti yang dibuat dalam alur acara blok templat tidak berlaku. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) oleh @gchust

- **[Pratinjau File Office]** Mengubah tinggi modal ke nilai yang tepat untuk menampilkan lebih banyak konten file ([#8835](https://github.com/nocobase/nocobase/pull/8835)) oleh @mytharcher

- **[Tindakan: Ekspor rekaman]**
  - memperbaiki masalah di mana bidang belongsToArray kosong di excel yang diekspor ([#8787](https://github.com/nocobase/nocobase/pull/8787)) oleh @cgyrock

  - Memperbaiki masalah di mana bidang tipe numerik dalam file excel ditampilkan sebagai string ([#8774](https://github.com/nocobase/nocobase/pull/8774)) oleh @cgyrock

- **[Blok: Daftar]** Memperbaiki masalah di mana bidang blok daftar tidak dapat menggunakan variabel rekaman saat ini. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) oleh @gchust

- **[Sumber data: Utama]**
  - Memperbarui nilai default bidang JSON tidak berlaku ([#8767](https://github.com/nocobase/nocobase/pull/8767)) oleh @2013xile

  - Kesalahan sinkronisasi bidang ([#8766](https://github.com/nocobase/nocobase/pull/8766)) oleh @2013xile

- **[Alur kerja]** Memperbaiki masalah di mana placeholder seret node muncul secara tidak benar saat menyeret blok di node persetujuan ([#8763](https://github.com/nocobase/nocobase/pull/8763)) oleh @mytharcher

- **[Karyawan AI]**
  - Memperbaiki kesalahan panggilan alat saat menggunakan model penalaran deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) oleh @cgyrock

  - Memperbaiki masalah di mana dashscope/deepseek/kimi tidak dapat membaca file dokumen yang diunggah. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) oleh @cgyrock

- **[Multi-ruang]** Memperbaiki kesalahan izin ruang saat membuat data dengan kunci utama oleh @jiannx

- **[Alur kerja: Persetujuan]**
  - Memperbaiki label yang tidak diterjemahkan dalam detail pemrosesan persetujuan oleh @zhangzhonghe

  - Memperbaiki masalah di mana penerima tidak mengikuti urutan yang dikonfigurasi di node oleh @mytharcher

- **[Manajer migrasi]**
  - Memperbaiki potensi pembekuan proses yang disebabkan oleh pencatatan pernyataan SQL yang sangat besar yang disertakan dalam pengecualian kesalahan migrasi oleh @cgyrock

  - Memperbaiki kesalahan build oleh @mytharcher

  - Memperbaiki deskripsi migrasi yang hilang dan menetapkan waktu saat ini sebagai default oleh @cgyrock

  - Menyesuaikan direktori sementara ke dalam penyimpanan, untuk mendukung penggunaan di bawah mode cluster oleh @mytharcher
