---
title: "NocoBase v2.1.0-alpha.8: Perbarui prompt pengguna kotak obrolan AI"
description: "Catatan Rilis v2.1.0-alpha.8"
---

### 🎉 Fitur Baru

- **[client]** Mendukung konfigurasi tombol pemicu alur kerja setelah alur berhasil ([#8726](https://github.com/nocobase/nocobase/pull/8726)) oleh @mytharcher

- **[Bidang Koleksi: Kode]** bidang-kode mendukung 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) oleh @jiannx

- **[Alur Kerja: Acara tindakan kustom]** Mendukung data konteks kustom untuk meneruskan variabel ke pemicu tindakan kustom dalam sub-alur ([#8758](https://github.com/nocobase/nocobase/pull/8758)) oleh @mytharcher

- **[Karyawan AI]** Memperbarui prompt pengguna kotak obrolan AI ([#8725](https://github.com/nocobase/nocobase/pull/8725)) oleh @heziqiang

### 🚀 Peningkatan

- **[client]**
  - Menampilkan pesan peringatan ketika tidak ada data yang tersedia untuk blok Formulir Edit atau blok Detail. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) oleh @gchust

  - Memfaktorkan ulang pengaturan tata letak admin dan aplikasi ke arsitektur model host dengan perlindungan kompatibilitas v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) oleh @zhangzhonghe

  - mendukung konfigurasi ringkasan untuk tabel ([#8721](https://github.com/nocobase/nocobase/pull/8721)) oleh @chenos

- **[flow-engine]** Memperbaiki masalah di mana kode runjs baru akan mengurai ekspresi variabel sebelum dieksekusi. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) oleh @gchust

- **[Alur Kerja]** Menampilkan semua jenis node di menu penambahan meskipun tidak tersedia ([#8828](https://github.com/nocobase/nocobase/pull/8828)) oleh @mytharcher

- **[Tindakan: Permintaan kustom]** Streaming acara mendukung permintaan kustom ([#8749](https://github.com/nocobase/nocobase/pull/8749)) oleh @jiannx

- **[Karyawan AI]** Memperbarui prompt pengguna kotak obrolan AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) oleh @heziqiang

- **[Sematkan NocoBase]** Menyediakan API sanitasi untuk memfilter nilai asosiasi dalam tindakan ([#8688](https://github.com/nocobase/nocobase/pull/8688)) oleh @mytharcher

- **[AI: Basis Pengetahuan]** Memfaktorkan ulang logika pemuatan dokumen basis pengetahuan. oleh @cgyrock

- **[Adaptor kunci Redis]** Memfaktorkan ulang karena API LockManger berubah di repositori utama oleh @mytharcher

- **[Manajer Cadangan]** Menambahkan kunci untuk pencadangan terjadwal di seluruh node cluster oleh @mytharcher

- **[Manajer Migrasi]** Peningkatan pemeriksaan migrasi, dukungan unduhan SQL, pemformatan log, dan visibilitas proses eksekusi oleh @cgyrock

### 🐛 Perbaikan Bug

- **[undefined]** Memperbaiki masalah di mana, setelah upgrade, sistem meminta bahwa plugin-block-reference tidak dapat ditemukan. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) oleh @gchust

- **[client]**
  - data sub form & sub tabel tidak ditampilkan karena pemeriksaan izin ([#8846](https://github.com/nocobase/nocobase/pull/8846)) oleh @chenos

  - Memperbaiki masalah di mana tombol ciutkan formulir filter v2 berhenti berfungsi setelah mengurutkan bidang ([#8843](https://github.com/nocobase/nocobase/pull/8843)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana bidang kustom dalam nilai Bidang formulir Filter tidak dapat merender tipe input nilai yang benar ([#8823](https://github.com/nocobase/nocobase/pull/8823)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana halaman manajemen template referensi (v1) kehilangan tindakan filter dan refresh. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) oleh @gchust

  - Memperbaiki masalah di mana blok detail dari koleksi SQL mengalami kesalahan saat memuat data. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) oleh @gchust

  - Memperbaiki masalah di mana aturan tautan bidang dalam blok detail tidak berlaku selama render awal. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) oleh @gchust

  - Blok V2 sekarang hanya menampilkan tindakan yang didukung oleh sumber data saat ini ([#8803](https://github.com/nocobase/nocobase/pull/8803)) oleh @zhangzhonghe

  - Memperbaiki masalah gaya tombol kembali di sub-halaman v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) oleh @zhangzhonghe

  - Memperbaiki navigasi tautan popup yang dikembalikan setelah tampilan ditutup ([#8752](https://github.com/nocobase/nocobase/pull/8752)) oleh @zhangzhonghe

  - Memperbaiki validasi untuk bidang wajib yang tersembunyi tautan dalam mode konfigurasi ([#8773](https://github.com/nocobase/nocobase/pull/8773)) oleh @zhangzhonghe

  - Memperbaiki pemotongan tab dan memastikan lebar tab minimum dalam mode desain ([#8771](https://github.com/nocobase/nocobase/pull/8771)) oleh @zhangzhonghe

  - Memperbaiki pembaruan UI yang tertunda untuk toggle sembunyikan kolom sub-tabel dan penghapusan kolom berurutan ([#8755](https://github.com/nocobase/nocobase/pull/8755)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana blok data asli tidak disegarkan setelah mengedit data di popup bidang asosiasi. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) oleh @gchust

  - Menonaktifkan penambahan blok untuk rekaman terkait many-to-many (array) untuk mencegah kesalahan. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) oleh @gchust

  - Memperbaiki masalah di mana blok data tidak disegarkan saat mengganti menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) oleh @gchust

  - Memperbaiki masalah di mana komponen CollectionField tidak dirender dalam komponen DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) oleh @mytharcher

  - memperbaiki dua verifikasi wajib muncul di formulir pembaruan rekaman ([#8761](https://github.com/nocobase/nocobase/pull/8761)) oleh @jiannx

- **[server]**
  - Memperbaiki masalah kesalahan dalam kueri data dari sumber data non-database ([#8776](https://github.com/nocobase/nocobase/pull/8776)) oleh @cgyrock

  - Menyelesaikan masalah cache dengan menambahkan hash ke aset ([#8730](https://github.com/nocobase/nocobase/pull/8730)) oleh @chenos

- **[lock-manager]** Memperbaiki masalah kondisi balapan dari manajer kunci ([#8734](https://github.com/nocobase/nocobase/pull/8734)) oleh @mytharcher

- **[database]**
  - Memperbaiki opsi 'Paginasi Sederhana' yang hilang di template tampilan koleksi. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) oleh @cgyrock

  - Aturan validasi presisi untuk bidang numerik tidak berlaku ([#8768](https://github.com/nocobase/nocobase/pull/8768)) oleh @2013xile

  - Memperbaiki kegagalan pemeriksaan kustom reguler bidang di v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) oleh @jiannx

- **[flow-engine]** Memperbaiki masalah di mana ctx.exit tidak dapat menghentikan eksekusi alur acara yang ditentukan pengguna. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) oleh @gchust

- **[Kontrol akses]**
  - menggunakan collection.filterTargetKey alih-alih Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) oleh @chenos

  - Memperbaiki kesalahan modifikasi data sumber data API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) oleh @cgyrock

  - Instance database yang digunakan saat mengatur metadata ACL salah ([#8747](https://github.com/nocobase/nocobase/pull/8747)) oleh @2013xile

- **[Template UI]**
  - Memperbaiki masalah di mana rekaman asosiasi tidak dapat dimuat dengan benar setelah menyimpan blok detail sebagai template. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) oleh @gchust

  - Memperbaiki kesalahan render untuk blok referensi panel tindakan. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) oleh @gchust

  - Memperbaiki masalah di mana alur acara blok referensi dalam blok tabel tidak dapat dikonfigurasi dengan alur acara klik baris. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) oleh @gchust

  - Memperbaiki masalah di mana menggunakan kembali template blok rekaman saat ini untuk blok detail dan blok formulir edit dapat menyebabkan data gagal dimuat dengan benar. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) oleh @gchust

  - Memperbaiki masalah di mana perubahan pada props yang dibuat dalam alur acara blok template tidak berlaku. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) oleh @gchust

- **[Penampil File Office]** Mengubah tinggi modal ke nilai yang tepat untuk menampilkan lebih banyak konten file ([#8835](https://github.com/nocobase/nocobase/pull/8835)) oleh @mytharcher

- **[Tindakan: Ekspor rekaman]**
  - memperbaiki masalah bahwa bidang belongsToArray kosong di excel yang diekspor ([#8787](https://github.com/nocobase/nocobase/pull/8787)) oleh @cgyrock

  - Memperbaiki masalah di mana bidang tipe numerik dalam file excel ditampilkan sebagai string ([#8774](https://github.com/nocobase/nocobase/pull/8774)) oleh @cgyrock

- **[Alur Kerja]** Memperbaiki masalah di mana placeholder seret node salah ditampilkan saat menyeret blok di node persetujuan ([#8763](https://github.com/nocobase/nocobase/pull/8763)) oleh @mytharcher

- **[Blok: Daftar]** Memperbaiki masalah di mana bidang blok daftar tidak dapat menggunakan variabel rekaman saat ini. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) oleh @gchust

- **[Sumber data: Utama]**
  - Memperbarui nilai default bidang JSON tidak berlaku ([#8767](https://github.com/nocobase/nocobase/pull/8767)) oleh @2013xile

  - Kesalahan sinkronisasi bidang ([#8766](https://github.com/nocobase/nocobase/pull/8766)) oleh @2013xile

- **[Karyawan AI]**
  - Memperbaiki masalah di mana dashscope/deepseek/kimi tidak dapat membaca file dokumen yang diunggah. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) oleh @cgyrock

  - Memperbaiki kesalahan panggilan alat saat menggunakan model penalaran deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) oleh @cgyrock

  - Memperbaiki kesalahan obrolan karyawan AI saat basis pengetahuan diaktifkan ([#8746](https://github.com/nocobase/nocobase/pull/8746)) oleh @cgyrock

  - Memperbaiki masalah rendering konfigurasi sumber data AI. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) oleh @cgyrock

  - Menyelesaikan masalah di mana pesan AI dirender dengan panjang 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) oleh @heziqiang

- **[Flow engine]** memperbaiki kesalahan sql destroy ([#8745](https://github.com/nocobase/nocobase/pull/8745)) oleh @chenos

- **[Alur Kerja: Acara tindakan kustom]** Memperbaiki masalah di mana alur kerja tindakan kustom menggantung saat dijalankan sebagai sub-alur ([#8738](https://github.com/nocobase/nocobase/pull/8738)) oleh @mytharcher

- **[Alur Kerja: JavaScript]** Memperbaiki kasus uji tidak dapat lulus di windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) oleh @mytharcher

- **[Visualisasi data]** memperbaiki i18n untuk teks entri plugin bagan ([#8716](https://github.com/nocobase/nocobase/pull/8716)) oleh @heziqiang

- **[Multi-ruang]** Memperbaiki kesalahan izin ruang saat membuat data dengan kunci utama oleh @jiannx

- **[Cetak template]** Memperbaiki masalah di mana ACL API berubah tetapi tidak diadaptasi ke plugin oleh @mytharcher

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki masalah di mana penerima tugas tidak mengikuti urutan yang dikonfigurasi di node oleh @mytharcher

  - Memperbaiki masalah di mana hasil kueri tidak ditampilkan karena node difilter berdasarkan jenis oleh @mytharcher

  - Memperbaiki masalah di mana parameter appends difilter oleh ACL oleh @mytharcher

  - Memperbaiki masalah ACL di mana nilai asosiasi tidak boleh dibuat atau diperbarui ketika pengguna tidak memiliki izin oleh @mytharcher

  - Menambahkan parameter yang terlewat untuk menghindari asosiasi tidak diperbarui saat mengirimkan persetujuan baru oleh @mytharcher

  - Memperbaiki label yang tidak diterjemahkan dalam detail pemrosesan persetujuan oleh @zhangzhonghe

  - Memperbaiki kesalahan yang disebabkan oleh nilai `dataAfter` yang hilang saat ditambahkan atau didelegasikan oleh @mytharcher

  - Membersihkan nilai asosiasi dalam tindakan persetujuan, untuk menghindari manipulasi data di luar izin oleh @mytharcher

  - Memperbaiki masalah di mana kesalahan terjadi saat menjalankan alur kerja persetujuan secara manual oleh @mytharcher

  - Membersihkan nilai asosiasi dalam tindakan persetujuan, untuk menghindari manipulasi data di luar izin oleh @mytharcher

- **[Manajer Email]** Memperbaiki penguraian format ID konten gambar oleh @jiannx

- **[Manajer Migrasi]**
  - Memperbaiki deskripsi migrasi yang hilang dan menetapkan waktu saat ini sebagai default oleh @cgyrock

  - Memperbaiki kesalahan build oleh @mytharcher

  - Menyesuaikan direktori sementara ke penyimpanan, untuk mendukung penggunaan di bawah mode cluster oleh @mytharcher

  - Memperbaiki potensi pembekuan proses yang disebabkan oleh pencatatan pernyataan SQL yang sangat besar yang disertakan dalam pengecualian kesalahan migrasi oleh @cgyrock
