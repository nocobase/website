---
title: "NocoBase v2.0.11: Dukungan data konteks kustom untuk meneruskan variabel ke pemicu aksi kustom dalam sub-aliran"
description: "Catatan Rilis v2.0.11"
---

### 🎉 Fitur Baru

- **[Workflow: Event aksi kustom]** Mendukung data konteks kustom untuk meneruskan variabel ke pemicu aksi kustom dalam sub-alur ([#8758](https://github.com/nocobase/nocobase/pull/8758)) oleh @mytharcher

### 🚀 Peningkatan

- **[klien]** Menampilkan pesan peringatan ketika tidak ada data yang tersedia untuk blok Formulir Edit atau blok Detail. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) oleh @gchust

- **[flow-engine]** Memperbaiki masalah di mana kode runjs baru akan mengurai ekspresi variabel sebelum dieksekusi. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) oleh @gchust

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki navigasi tautan popup yang kembali ke posisi semula setelah tampilan ditutup ([#8752](https://github.com/nocobase/nocobase/pull/8752)) oleh @zhangzhonghe

  - Menonaktifkan penambahan blok untuk rekaman terkait many-to-many (array) untuk mencegah kesalahan. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) oleh @gchust

  - Memperbaiki masalah di mana blok data asli tidak diperbarui setelah mengedit data di popup bidang asosiasi. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) oleh @gchust

  - Memperbaiki pemotongan tab dan memastikan lebar tab minimum dalam mode desain ([#8771](https://github.com/nocobase/nocobase/pull/8771)) oleh @zhangzhonghe

  - Memperbaiki validasi untuk bidang wajib yang tersembunyi karena tautan dalam mode konfigurasi ([#8773](https://github.com/nocobase/nocobase/pull/8773)) oleh @zhangzhonghe

  - Memperbaiki pembaruan UI yang tertunda untuk tombol sembunyikan kolom sub-tabel dan penghapusan kolom berurutan ([#8755](https://github.com/nocobase/nocobase/pull/8755)) oleh @zhangzhonghe

  - Memperbaiki dua verifikasi wajib yang muncul di formulir pembaruan rekaman ([#8761](https://github.com/nocobase/nocobase/pull/8761)) oleh @jiannx

- **[database]**
  - Memperbaiki opsi 'Paginasi Sederhana' yang hilang di templat tampilan koleksi. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) oleh @cgyrock

  - Aturan validasi presisi untuk bidang numerik tidak berfungsi ([#8768](https://github.com/nocobase/nocobase/pull/8768)) oleh @2013xile

- **[tidak terdefinisi]** Memperbaiki masalah di mana, setelah upgrade, sistem memperingatkan bahwa plugin-block-reference tidak dapat ditemukan. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) oleh @gchust

- **[Aksi: Ekspor rekaman]** Memperbaiki masalah di mana bidang tipe numerik dalam file excel ditampilkan sebagai string ([#8774](https://github.com/nocobase/nocobase/pull/8774)) oleh @cgyrock

- **[Blok: Daftar]** Memperbaiki masalah di mana bidang blok daftar tidak dapat menggunakan variabel rekaman saat ini. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) oleh @gchust

- **[Workflow]** Memperbaiki masalah di mana placeholder seret node muncul secara tidak benar saat menyeret blok di node persetujuan ([#8763](https://github.com/nocobase/nocobase/pull/8763)) oleh @mytharcher

- **[Templat UI]**
  - Memperbaiki masalah di mana menggunakan kembali templat blok rekaman saat ini untuk blok detail dan blok formulir edit dapat menyebabkan data gagal dimuat dengan benar. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) oleh @gchust

  - Memperbaiki masalah di mana perubahan pada properti yang dibuat dalam alur peristiwa blok templat tidak berlaku. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) oleh @gchust

- **[Sumber data: Utama]**
  - Memperbarui nilai default bidang JSON tidak berlaku ([#8767](https://github.com/nocobase/nocobase/pull/8767)) oleh @2013xile

  - Kesalahan sinkronisasi bidang ([#8766](https://github.com/nocobase/nocobase/pull/8766)) oleh @2013xile

- **[Karyawan AI]**
  - Memperbaiki masalah di mana dashscope/deepseek/kimi tidak dapat membaca file dokumen yang diunggah. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) oleh @cgyrock

  - Memperbaiki kesalahan panggilan alat saat menggunakan model penalaran deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) oleh @cgyrock

- **[Multi-ruang]** Memperbaiki kesalahan izin ruang saat membuat data dengan kunci utama oleh @jiannx
