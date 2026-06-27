---
title: "Pembaruan Mingguan｜Perbarui prompt pengguna kotak obrolan AI"
description: "Ini adalah ringkasan pembaruan fitur dan peningkatan NocoBase dari 6 Maret hingga 12 Maret 2026."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk yang mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.15](https://www.nocobase.com/en/blog/v2.0.15)

*Tanggal rilis: 12-03-2026*

### 🐛 Perbaikan Bug

- **[Manajer Email]** penyesuaian penerima balas dan balas ke semua, memperbaiki kegagalan penambahan bidang tabel dan masalah lainnya oleh @jiannx
- **[Manajer Migrasi]** Memperbaiki masalah bahwa tabel sistem tidak dapat dipilih dalam aturan kustom oleh @cgyrock

### [v2.0.14](https://www.nocobase.com/en/blog/v2.0.14)

*Tanggal rilis: 12-03-2026*

### 🚀 Peningkatan

- **[Manajer Migrasi]** Peningkatan pemeriksaan migrasi, dukungan unduh SQL, pemformatan log, dan visibilitas proses eksekusi oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana bidang kustom di Nilai bidang Formulir Filter tidak dapat merender tipe input nilai yang benar ([#8823](https://github.com/nocobase/nocobase/pull/8823)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana tombol ciutkan formulir filter v2 berhenti berfungsi setelah mengurutkan bidang ([#8843](https://github.com/nocobase/nocobase/pull/8843)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana halaman manajemen templat referensi (v1) kehilangan tindakan filter dan segarkan. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) oleh @gchust
  - data sub form & sub tabel tidak ditampilkan karena pemeriksaan izin ([#8846](https://github.com/nocobase/nocobase/pull/8846)) oleh @chenos
- **[Kontrol akses]** menggunakan collection.filterTargetKey alih-alih Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) oleh @chenos
- **[Templat UI]**

  - Memperbaiki kesalahan render untuk blok referensi panel tindakan. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) oleh @gchust
  - Memperbaiki masalah di mana catatan asosiasi tidak dapat dimuat dengan benar setelah menyimpan blok detail sebagai templat. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) oleh @gchust
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana penerima tugas tidak mengikuti urutan yang dikonfigurasi di node oleh @mytharcher
  - Memperbaiki label yang belum diterjemahkan di detail pemrosesan persetujuan oleh @zhangzhonghe
- **[Manajer Migrasi]**

  - Memperbaiki kesalahan build oleh @mytharcher
  - Memperbaiki deskripsi migrasi yang hilang dan menetapkan waktu saat ini sebagai default oleh @cgyrock
  - Memperbaiki potensi pembekuan proses yang disebabkan oleh pencatatan pernyataan SQL yang sangat besar yang disertakan dalam pengecualian kesalahan migrasi oleh @cgyrock
  - Menyesuaikan direktori sementara ke dalam penyimpanan, untuk mendukung penggunaan di bawah mode kluster oleh @mytharcher

### [v2.0.13](https://www.nocobase.com/en/blog/v2.0.13)

*Tanggal rilis: 10-03-2026*

### 🎉 Fitur Baru

- **[klien]** Mendukung tombol alur kerja pemicu untuk mengonfigurasi alur setelah sukses ([#8726](https://github.com/nocobase/nocobase/pull/8726)) oleh @mytharcher

### 🚀 Peningkatan

- **[Alur Kerja]** Menampilkan semua jenis node di menu penambahan meskipun tidak tersedia ([#8828](https://github.com/nocobase/nocobase/pull/8828)) oleh @mytharcher
- **[AI: Basis Pengetahuan]** Logika pemuatan dokumen basis pengetahuan direfaktor ulang. oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana blok detail dari koleksi SQL mengalami kesalahan saat memuat data. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) oleh @gchust
  - Memperbaiki masalah di mana aturan tautan bidang di blok detail tidak berlaku selama render awal. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) oleh @gchust
- **[Pratinjau File Office]** Mengubah tinggi modal ke nilai yang tepat untuk menampilkan lebih banyak konten file ([#8835](https://github.com/nocobase/nocobase/pull/8835)) oleh @mytharcher
- **[Templat UI]** Memperbaiki masalah di mana alur peristiwa blok referensi di blok tabel tidak dapat dikonfigurasi dengan alur peristiwa klik baris. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) oleh @gchust

### [v2.0.12](https://www.nocobase.com/en/blog/v2.0.12)

*Tanggal rilis: 09-03-2026*

### 🚀 Peningkatan

- **[Adaptor kunci Redis]** Refaktor karena API LockManger berubah di repositori utama oleh @mytharcher
- **[Manajer Cadangan]** Menambahkan kunci untuk pencadangan terjadwal di seluruh node kluster oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - Blok V2 sekarang hanya menampilkan tindakan yang didukung oleh sumber data saat ini ([#8803](https://github.com/nocobase/nocobase/pull/8803)) oleh @zhangzhonghe
  - Memperbaiki masalah gaya tombol kembali di sub-halaman v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) oleh @zhangzhonghe
- **[manajer-kunci]** Memperbaiki masalah kondisi balapan dari manajer kunci ([#8734](https://github.com/nocobase/nocobase/pull/8734)) oleh @mytharcher
- **[server]** Memperbaiki masalah kesalahan dalam kueri data dari sumber data non-database ([#8776](https://github.com/nocobase/nocobase/pull/8776)) oleh @cgyrock
- **[Kontrol akses]** Memperbaiki kesalahan modifikasi data sumber data API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) oleh @cgyrock
- **[Tindakan: Ekspor catatan]** memperbaiki masalah bahwa bidang belongsToArray kosong di excel yang diekspor ([#8787](https://github.com/nocobase/nocobase/pull/8787)) oleh @cgyrock

### [v2.0.11](https://www.nocobase.com/en/blog/v2.0.11)

*Tanggal rilis: 06-03-2026*

### 🎉 Fitur Baru

- **[Alur Kerja: Peristiwa tindakan kustom]** Mendukung data konteks kustom untuk meneruskan variabel ke pemicu tindakan kustom di sub-alur ([#8758](https://github.com/nocobase/nocobase/pull/8758)) oleh @mytharcher

### 🚀 Peningkatan

- **[klien]** Menampilkan pesan prompt ketika tidak ada data yang tersedia untuk blok Formulir Edit atau blok Detail. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) oleh @gchust
- **[mesin-alur]** Memperbaiki masalah di mana kode runjs baru akan mengurai ekspresi variabel sebelum eksekusi. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) oleh @gchust

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki navigasi tautan popup yang dikembalikan setelah tampilan ditutup ([#8752](https://github.com/nocobase/nocobase/pull/8752)) oleh @zhangzhonghe
  - Menonaktifkan penambahan blok untuk catatan terkait banyak-ke-banyak (array) untuk mencegah kesalahan. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) oleh @gchust
  - Memperbaiki masalah di mana blok data asli tidak disegarkan setelah mengedit data di popup bidang asosiasi. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) oleh @gchust
  - Memperbaiki pemotongan tab dan memastikan lebar tab minimum dalam mode desain ([#8771](https://github.com/nocobase/nocobase/pull/8771)) oleh @zhangzhonghe
  - Memperbaiki validasi untuk bidang wajib yang tersembunyi tautan dalam mode konfigurasi ([#8773](https://github.com/nocobase/nocobase/pull/8773)) oleh @zhangzhonghe
  - Memperbaiki pembaruan UI yang tertunda untuk toggle sembunyikan kolom sub-tabel dan penghapusan kolom berurutan ([#8755](https://github.com/nocobase/nocobase/pull/8755)) oleh @zhangzhonghe
  - memperbaiki dua verifikasi wajib muncul di formulir pembaruan catatan ([#8761](https://github.com/nocobase/nocobase/pull/8761)) oleh @jiannx
- **[database]**

  - Memperbaiki opsi 'Paginasi Sederhana' yang hilang di templat tampilan koleksi. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) oleh @cgyrock
  - Aturan validasi presisi untuk bidang numerik tidak berlaku ([#8768](https://github.com/nocobase/nocobase/pull/8768)) oleh @2013xile
- **[tidak terdefinisi]** Memperbaiki masalah di mana, setelah upgrade, sistem meminta bahwa plugin-block-reference tidak dapat ditemukan. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) oleh @gchust
- **[Tindakan: Ekspor catatan]** Memperbaiki masalah di mana bidang tipe numerik di file excel ditampilkan sebagai string ([#8774](https://github.com/nocobase/nocobase/pull/8774)) oleh @cgyrock
- **[Blok: Daftar]** Memperbaiki masalah di mana bidang blok daftar tidak dapat menggunakan variabel catatan saat ini. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) oleh @gchust
- **[Alur Kerja]** Memperbaiki masalah di mana placeholder seret node salah ditampilkan saat menyeret blok di node persetujuan ([#8763](https://github.com/nocobase/nocobase/pull/8763)) oleh @mytharcher
- **[Templat UI]**

  - Memperbaiki masalah di mana menggunakan kembali templat blok catatan saat ini untuk blok detail dan blok formulir edit dapat menyebabkan data gagal dimuat dengan benar. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) oleh @gchust
  - Memperbaiki masalah di mana perubahan pada props yang dibuat di alur peristiwa blok templat tidak berlaku. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) oleh @gchust
- **[Sumber data: Utama]**

  - Memperbarui nilai default bidang JSON tidak berlaku ([#8767](https://github.com/nocobase/nocobase/pull/8767)) oleh @2013xile
  - Kesalahan sinkronisasi bidang ([#8766](https://github.com/nocobase/nocobase/pull/8766)) oleh @2013xile
- **[Karyawan AI]**

  - Memperbaiki masalah bahwa dashscope/deepseek/kimi tidak dapat membaca file dokumen yang diunggah. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) oleh @cgyrock
  - Memperbaiki kesalahan panggilan alat saat menggunakan model penalaran deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) oleh @cgyrock
- **[Multi-ruang]** Memperbaiki kesalahan izin ruang saat membuat data dengan kunci utama oleh @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.8](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*Tanggal rilis: 12-03-2026*

### 🎉 Fitur Baru

- **[klien]** Mendukung tombol alur kerja pemicu untuk mengonfigurasi alur setelah sukses ([#8726](https://github.com/nocobase/nocobase/pull/8726)) oleh @mytharcher
- **[Bidang koleksi: Kode]** bidang-kode mendukung 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) oleh @jiannx
- **[Alur Kerja: Peristiwa tindakan kustom]** Mendukung data konteks kustom untuk meneruskan variabel ke pemicu tindakan kustom di sub-alur ([#8758](https://github.com/nocobase/nocobase/pull/8758)) oleh @mytharcher

### 🚀 Peningkatan

- **[klien]** Menampilkan pesan prompt ketika tidak ada data yang tersedia untuk blok Formulir Edit atau blok Detail. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) oleh @gchust
- **[mesin-alur]** Memperbaiki masalah di mana kode runjs baru akan mengurai ekspresi variabel sebelum eksekusi. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) oleh @gchust
- **[Alur Kerja]** Menampilkan semua jenis node di menu penambahan meskipun tidak tersedia ([#8828](https://github.com/nocobase/nocobase/pull/8828)) oleh @mytharcher
- **[Tindakan: Permintaan kustom]** Streaming peristiwa mendukung permintaan kustom ([#8749](https://github.com/nocobase/nocobase/pull/8749)) oleh @jiannx
- **[AI: Basis Pengetahuan]** Logika pemuatan dokumen basis pengetahuan direfaktor ulang. oleh @cgyrock
- **[Adaptor kunci Redis]** Refaktor karena API LockManger berubah di repositori utama oleh @mytharcher
- **[Manajer Cadangan]** Menambahkan kunci untuk pencadangan terjadwal di seluruh node kluster oleh @mytharcher
- **[Manajer Migrasi]** Peningkatan pemeriksaan migrasi, dukungan unduh SQL, pemformatan log, dan visibilitas proses eksekusi oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**

  - data sub form & sub tabel tidak ditampilkan karena pemeriksaan izin ([#8846](https://github.com/nocobase/nocobase/pull/8846)) oleh @chenos
  - Memperbaiki masalah di mana tombol ciutkan formulir filter v2 berhenti berfungsi setelah mengurutkan bidang ([#8843](https://github.com/nocobase/nocobase/pull/8843)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana bidang kustom di Nilai bidang Formulir Filter tidak dapat merender tipe input nilai yang benar ([#8823](https://github.com/nocobase/nocobase/pull/8823)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana halaman manajemen templat referensi (v1) kehilangan tindakan filter dan segarkan. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) oleh @gchust
  - Memperbaiki masalah di mana blok detail dari koleksi SQL mengalami kesalahan saat memuat data. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) oleh @gchust
  - Memperbaiki masalah di mana aturan tautan bidang di blok detail tidak berlaku selama render awal. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) oleh @gchust
  - Memperbaiki masalah gaya tombol kembali di sub-halaman v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) oleh @zhangzhonghe
  - Blok V2 sekarang hanya menampilkan tindakan yang didukung oleh sumber data saat ini ([#8803](https://github.com/nocobase/nocobase/pull/8803)) oleh @zhangzhonghe
  - Memperbaiki validasi untuk bidang wajib yang tersembunyi tautan dalam mode konfigurasi ([#8773](https://github.com/nocobase/nocobase/pull/8773)) oleh @zhangzhonghe
  - Memperbaiki pemotongan tab dan memastikan lebar tab minimum dalam mode desain ([#8771](https://github.com/nocobase/nocobase/pull/8771)) oleh @zhangzhonghe
  - Memperbaiki pembaruan UI yang tertunda untuk toggle sembunyikan kolom sub-tabel dan penghapusan kolom berurutan ([#8755](https://github.com/nocobase/nocobase/pull/8755)) oleh @zhangzhonghe
  - Menonaktifkan penambahan blok untuk catatan terkait banyak-ke-banyak (array) untuk mencegah kesalahan. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) oleh @gchust
  - Memperbaiki navigasi tautan popup yang dikembalikan setelah tampilan ditutup ([#8752](https://github.com/nocobase/nocobase/pull/8752)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana blok data asli tidak disegarkan setelah mengedit data di popup bidang asosiasi. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) oleh @gchust
  - memperbaiki dua verifikasi wajib muncul di formulir pembaruan catatan ([#8761](https://github.com/nocobase/nocobase/pull/8761)) oleh @jiannx
- **[server]** Memperbaiki masalah kesalahan dalam kueri data dari sumber data non-database ([#8776](https://github.com/nocobase/nocobase/pull/8776)) oleh @cgyrock
- **[manajer-kunci]** Memperbaiki masalah kondisi balapan dari manajer kunci ([#8734](https://github.com/nocobase/nocobase/pull/8734)) oleh @mytharcher
- **[database]**

  - Memperbaiki opsi 'Paginasi Sederhana' yang hilang di templat tampilan koleksi. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) oleh @cgyrock
  - Aturan validasi presisi untuk bidang numerik tidak berlaku ([#8768](https://github.com/nocobase/nocobase/pull/8768)) oleh @2013xile
- **[tidak terdefinisi]** Memperbaiki masalah di mana, setelah upgrade, sistem meminta bahwa plugin-block-reference tidak dapat ditemukan. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) oleh @gchust
- **[Kontrol akses]**

  - menggunakan collection.filterTargetKey alih-alih Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) oleh @chenos
  - Memperbaiki kesalahan modifikasi data sumber data API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) oleh @cgyrock
- **[Templat UI]**

  - Memperbaiki masalah di mana catatan asosiasi tidak dapat dimuat dengan benar setelah menyimpan blok detail sebagai templat. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) oleh @gchust
  - Memperbaiki kesalahan render untuk blok referensi panel tindakan. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) oleh @gchust
  - Memperbaiki masalah di mana alur peristiwa blok referensi di blok tabel tidak dapat dikonfigurasi dengan alur peristiwa klik baris. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) oleh @gchust
  - Memperbaiki masalah di mana menggunakan kembali templat blok catatan saat ini untuk blok detail dan blok formulir edit dapat menyebabkan data gagal dimuat dengan benar. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) oleh @gchust
  - Memperbaiki masalah di mana perubahan pada props yang dibuat di alur peristiwa blok templat tidak berlaku. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) oleh @gchust
- **[Pratinjau File Office]** Mengubah tinggi modal ke nilai yang tepat untuk menampilkan lebih banyak konten file ([#8835](https://github.com/nocobase/nocobase/pull/8835)) oleh @mytharcher
- **[Tindakan: Ekspor catatan]**

  - memperbaiki masalah bahwa bidang belongsToArray kosong di excel yang diekspor ([#8787](https://github.com/nocobase/nocobase/pull/8787)) oleh @cgyrock
  - Memperbaiki masalah di mana bidang tipe numerik di file excel ditampilkan sebagai string ([#8774](https://github.com/nocobase/nocobase/pull/8774)) oleh @cgyrock
- **[Blok: Daftar]** Memperbaiki masalah di mana bidang blok daftar tidak dapat menggunakan variabel catatan saat ini. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) oleh @gchust
- **[Sumber data: Utama]**

  - Memperbarui nilai default bidang JSON tidak berlaku ([#8767](https://github.com/nocobase/nocobase/pull/8767)) oleh @2013xile
  - Kesalahan sinkronisasi bidang ([#8766](https://github.com/nocobase/nocobase/pull/8766)) oleh @2013xile
- **[Alur Kerja]** Memperbaiki masalah di mana placeholder seret node salah ditampilkan saat menyeret blok di node persetujuan ([#8763](https://github.com/nocobase/nocobase/pull/8763)) oleh @mytharcher
- **[Karyawan AI]**

  - Memperbaiki kesalahan panggilan alat saat menggunakan model penalaran deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) oleh @cgyrock
  - Memperbaiki masalah bahwa dashscope/deepseek/kimi tidak dapat membaca file dokumen yang diunggah. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) oleh @cgyrock
- **[Multi-ruang]** Memperbaiki kesalahan izin ruang saat membuat data dengan kunci utama oleh @jiannx
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki label yang belum diterjemahkan di detail pemrosesan persetujuan oleh @zhangzhonghe
  - Memperbaiki masalah di mana penerima tugas tidak mengikuti urutan yang dikonfigurasi di node oleh @mytharcher
- **[Manajer Migrasi]**

  - Memperbaiki potensi pembekuan proses yang disebabkan oleh pencatatan pernyataan SQL yang sangat besar yang disertakan dalam pengecualian kesalahan migrasi oleh @cgyrock
  - Memperbaiki kesalahan build oleh @mytharcher
  - Memperbaiki deskripsi migrasi yang hilang dan menetapkan waktu saat ini sebagai default oleh @cgyrock
  - Menyesuaikan direktori sementara ke dalam penyimpanan, untuk mendukung penggunaan di bawah mode kluster oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.8](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*Tanggal rilis: 12-03-2026*

### 🎉 Fitur Baru

- **[klien]** Mendukung tombol alur kerja pemicu untuk mengonfigurasi alur setelah sukses ([#8726](https://github.com/nocobase/nocobase/pull/8726)) oleh @mytharcher
- **[Bidang koleksi: Kode]** bidang-kode mendukung 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) oleh @jiannx
- **[Alur Kerja: Peristiwa tindakan kustom]** Mendukung data konteks kustom untuk meneruskan variabel ke pemicu tindakan kustom di sub-alur ([#8758](https://github.com/nocobase/nocobase/pull/8758)) oleh @mytharcher
- **[Karyawan AI]** Memperbarui prompt pengguna kotak obrolan AI ([#8725](https://github.com/nocobase/nocobase/pull/8725)) oleh @heziqiang

### 🚀 Peningkatan

- **[klien]**

  - Menampilkan pesan prompt ketika tidak ada data yang tersedia untuk blok Formulir Edit atau blok Detail. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) oleh @gchust
  - Refaktor pengaturan tata letak admin dan aplikasi ke arsitektur host model dengan perlindungan kompatibilitas v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) oleh @zhangzhonghe
  - mendukung konfigurasi ringkasan untuk tabel ([#8721](https://github.com/nocobase/nocobase/pull/8721)) oleh @chenos
- **[mesin-alur]** Memperbaiki masalah di mana kode runjs baru akan mengurai ekspresi variabel sebelum eksekusi. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) oleh @gchust
- **[Alur Kerja]** Menampilkan semua jenis node di menu penambahan meskipun tidak tersedia ([#8828](https://github.com/nocobase/nocobase/pull/8828)) oleh @mytharcher
- **[Tindakan: Permintaan kustom]** Streaming peristiwa mendukung permintaan kustom ([#8749](https://github.com/nocobase/nocobase/pull/8749)) oleh @jiannx
- **[Karyawan AI]** Memperbarui prompt pengguna kotak obrolan AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) oleh @heziqiang
- **[Sematkan NocoBase]** Menyediakan API sanitasi untuk memfilter nilai asosiasi dalam tindakan ([#8688](https://github.com/nocobase/nocobase/pull/8688)) oleh @mytharcher
- **[AI: Basis Pengetahuan]** Logika pemuatan dokumen basis pengetahuan direfaktor ulang. oleh @cgyrock
- **[Adaptor kunci Redis]** Refaktor karena API LockManger berubah di repositori utama oleh @mytharcher
- **[Manajer Cadangan]** Menambahkan kunci untuk pencadangan terjadwal di seluruh node kluster oleh @mytharcher
- **[Manajer Migrasi]** Peningkatan pemeriksaan migrasi, dukungan unduh SQL, pemformatan log, dan visibilitas proses eksekusi oleh @cgyrock

### 🐛 Perbaikan Bug

- **[tidak terdefinisi]** Memperbaiki masalah di mana, setelah upgrade, sistem meminta bahwa plugin-block-reference tidak dapat ditemukan. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) oleh @gchust
- **[klien]**

  - data sub form & sub tabel tidak ditampilkan karena pemeriksaan izin ([#8846](https://github.com/nocobase/nocobase/pull/8846)) oleh @chenos
  - Memperbaiki masalah di mana tombol ciutkan formulir filter v2 berhenti berfungsi setelah mengurutkan bidang ([#8843](https://github.com/nocobase/nocobase/pull/8843)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana bidang kustom di Nilai bidang Formulir Filter tidak dapat merender tipe input nilai yang benar ([#8823](https://github.com/nocobase/nocobase/pull/8823)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana halaman manajemen templat referensi (v1) kehilangan tindakan filter dan segarkan. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) oleh @gchust
  - Memperbaiki masalah di mana blok detail dari koleksi SQL mengalami kesalahan saat memuat data. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) oleh @gchust
  - Memperbaiki masalah di mana aturan tautan bidang di blok detail tidak berlaku selama render awal. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) oleh @gchust
  - Blok V2 sekarang hanya menampilkan tindakan yang didukung oleh sumber data saat ini ([#8803](https://github.com/nocobase/nocobase/pull/8803)) oleh @zhangzhonghe
  - Memperbaiki masalah gaya tombol kembali di sub-halaman v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) oleh @zhangzhonghe
  - Memperbaiki navigasi tautan popup yang dikembalikan setelah tampilan ditutup ([#8752](https://github.com/nocobase/nocobase/pull/8752)) oleh @zhangzhonghe
  - Memperbaiki validasi untuk bidang wajib yang tersembunyi tautan dalam mode konfigurasi ([#8773](https://github.com/nocobase/nocobase/pull/8773)) oleh @zhangzhonghe
  - Memperbaiki pemotongan tab dan memastikan lebar tab minimum dalam mode desain ([#8771](https://github.com/nocobase/nocobase/pull/8771)) oleh @zhangzhonghe
  - Memperbaiki pembaruan UI yang tertunda untuk toggle sembunyikan kolom sub-tabel dan penghapusan kolom berurutan ([#8755](https://github.com/nocobase/nocobase/pull/8755)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana blok data asli tidak disegarkan setelah mengedit data di popup bidang asosiasi. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) oleh @gchust
  - Menonaktifkan penambahan blok untuk catatan terkait banyak-ke-banyak (array) untuk mencegah kesalahan. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) oleh @gchust
  - Memperbaiki masalah di mana blok data tidak disegarkan saat mengganti menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) oleh @gchust
  - Memperbaiki masalah di mana komponen CollectionField tidak dirender di komponen DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) oleh @mytharcher
  - memperbaiki dua verifikasi wajib muncul di formulir pembaruan catatan ([#8761](https://github.com/nocobase/nocobase/pull/8761)) oleh @jiannx
- **[server]**

  - Memperbaiki masalah kesalahan dalam kueri data dari sumber data non-database ([#8776](https://github.com/nocobase/nocobase/pull/8776)) oleh @cgyrock
  - Menyelesaikan masalah cache dengan menambahkan hash ke aset ([#8730](https://github.com/nocobase/nocobase/pull/8730)) oleh @chenos
- **[manajer-kunci]** Memperbaiki masalah kondisi balapan dari manajer kunci ([#8734](https://github.com/nocobase/nocobase/pull/8734)) oleh @mytharcher
- **[database]**

  - Memperbaiki opsi 'Paginasi Sederhana' yang hilang di templat tampilan koleksi. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) oleh @cgyrock
  - Aturan validasi presisi untuk bidang numerik tidak berlaku ([#8768](https://github.com/nocobase/nocobase/pull/8768)) oleh @2013xile
  - Memperbaiki kegagalan pemeriksaan reguler kustom bidang di v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) oleh @jiannx
- **[mesin-alur]** Memperbaiki masalah di mana ctx.exit tidak dapat menghentikan eksekusi alur peristiwa yang ditentukan pengguna. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) oleh @gchust
- **[Kontrol akses]**

  - menggunakan collection.filterTargetKey alih-alih Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) oleh @chenos
  - Memperbaiki kesalahan modifikasi data sumber data API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) oleh @cgyrock
  - Instance database yang digunakan saat mengatur metadata ACL salah ([#8747](https://github.com/nocobase/nocobase/pull/8747)) oleh @2013xile
- **[Templat UI]**

  - Memperbaiki masalah di mana catatan asosiasi tidak dapat dimuat dengan benar setelah menyimpan blok detail sebagai templat. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) oleh @gchust
  - Memperbaiki kesalahan render untuk blok referensi panel tindakan. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) oleh @gchust
  - Memperbaiki masalah di mana alur peristiwa blok referensi di blok tabel tidak dapat dikonfigurasi dengan alur peristiwa klik baris. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) oleh @gchust
  - Memperbaiki masalah di mana menggunakan kembali templat blok catatan saat ini untuk blok detail dan blok formulir edit dapat menyebabkan data gagal dimuat dengan benar. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) oleh @gchust
  - Memperbaiki masalah di mana perubahan pada props yang dibuat di alur peristiwa blok templat tidak berlaku. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) oleh @gchust
- **[Pratinjau File Office]** Mengubah tinggi modal ke nilai yang tepat untuk menampilkan lebih banyak konten file ([#8835](https://github.com/nocobase/nocobase/pull/8835)) oleh @mytharcher
- **[Tindakan: Ekspor catatan]**

  - memperbaiki masalah bahwa bidang belongsToArray kosong di excel yang diekspor ([#8787](https://github.com/nocobase/nocobase/pull/8787)) oleh @cgyrock
  - Memperbaiki masalah di mana bidang tipe numerik di file excel ditampilkan sebagai string ([#8774](https://github.com/nocobase/nocobase/pull/8774)) oleh @cgyrock
- **[Alur Kerja]** Memperbaiki masalah di mana placeholder seret node salah ditampilkan saat menyeret blok di node persetujuan ([#8763](https://github.com/nocobase/nocobase/pull/8763)) oleh @mytharcher
- **[Blok: Daftar]** Memperbaiki masalah di mana bidang blok daftar tidak dapat menggunakan variabel catatan saat ini. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) oleh @gchust
- **[Sumber data: Utama]**

  - Memperbarui nilai default bidang JSON tidak berlaku ([#8767](https://github.com/nocobase/nocobase/pull/8767)) oleh @2013xile
  - Kesalahan sinkronisasi bidang ([#8766](https://github.com/nocobase/nocobase/pull/8766)) oleh @2013xile
- **[Karyawan AI]**

  - Memperbaiki masalah bahwa dashscope/deepseek/kimi tidak dapat membaca file dokumen yang diunggah. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) oleh @cgyrock
  - Memperbaiki kesalahan panggilan alat saat menggunakan model penalaran deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) oleh @cgyrock
  - Memperbaiki kesalahan obrolan karyawan AI saat basis pengetahuan diaktifkan ([#8746](https://github.com/nocobase/nocobase/pull/8746)) oleh @cgyrock
  - Memperbaiki masalah rendering konfigurasi sumber data AI. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) oleh @cgyrock
  - Menyelesaikan masalah di mana pesan AI dirender dengan panjang 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) oleh @heziqiang
- **[Mesin Alur]** memperbaiki kesalahan destroy sql ([#8745](https://github.com/nocobase/nocobase/pull/8745)) oleh @chenos
- **[Alur Kerja: Peristiwa tindakan kustom]** Memperbaiki masalah di mana alur kerja tindakan kustom menggantung saat dijalankan sebagai sub-alur ([#8738](https://github.com/nocobase/nocobase/pull/8738)) oleh @mytharcher
- **[Alur Kerja: JavaScript]** Memperbaiki kasus uji tidak dapat lulus di windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) oleh @mytharcher
- **[Visualisasi data]** memperbaiki i18n untuk teks entri bagan plugin ([#8716](https://github.com/nocobase/nocobase/pull/8716)) oleh @heziqiang
- **[Multi-ruang]** Memperbaiki kesalahan izin ruang saat membuat data dengan kunci utama oleh @jiannx
- **[Cetak templat]** Memperbaiki masalah di mana API ACL berubah tetapi tidak diadaptasi ke plugin oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana penerima tugas tidak mengikuti urutan yang dikonfigurasi di node oleh @mytharcher
  - Memperbaiki masalah di mana hasil kueri tidak ditampilkan yang disebabkan oleh node yang difilter berdasarkan jenis oleh @mytharcher
  - Memperbaiki masalah di mana parameter appends difilter oleh ACL oleh @mytharcher
  - Memperbaiki masalah ACL di mana nilai asosiasi tidak boleh dibuat atau diperbarui ketika pengguna tidak memiliki izin oleh @mytharcher
  - Menambahkan parameter yang terlewat untuk menghindari asosiasi tidak diperbarui saat mengirimkan persetujuan baru oleh @mytharcher
  - Memperbaiki label yang belum diterjemahkan di detail pemrosesan persetujuan oleh @zhangzhonghe
  - Memperbaiki kesalahan yang dilemparkan yang disebabkan oleh nilai `dataAfter` yang hilang saat ditambahkan atau didelegasikan oleh @mytharcher
  - Membersihkan nilai asosiasi dalam tindakan persetujuan, untuk menghindari manipulasi data di luar izin oleh @mytharcher
  - Memperbaiki masalah di mana kesalahan terjadi saat menjalankan alur kerja persetujuan secara manual oleh @mytharcher
  - Membersihkan nilai asosiasi dalam tindakan persetujuan, untuk menghindari manipulasi data di luar izin oleh @mytharcher
- **[Manajer Email]** Memperbaiki penguraian format ID konten gambar oleh @jiannx
- **[Manajer Migrasi]**

  - Memperbaiki deskripsi migrasi yang hilang dan menetapkan waktu saat ini sebagai default oleh @cgyrock
  - Memperbaiki kesalahan build oleh @mytharcher
  - Menyesuaikan direktori sementara ke dalam penyimpanan, untuk mendukung penggunaan di bawah mode kluster oleh @mytharcher
  - Memperbaiki potensi pembekuan proses yang disebabkan oleh pencatatan pernyataan SQL yang sangat besar yang disertakan dalam pengecualian kesalahan migrasi oleh @cgyrock
