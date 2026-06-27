---
title: "NocoBase v2.1.0-beta.32: Tambahkan karyawan AI baru, Localization Engineer Lina, untuk membantu tugas penerjemahan lokalisasi"
description: "Catatan Rilis v2.1.0-beta.32"
---

### 🎉 Fitur Baru

- **[undefined]** Menambahkan karyawan AI baru, Localization Engineer Lina, untuk membantu tugas terjemahan lokalisasi ([#9434](https://github.com/nocobase/nocobase/pull/9434)) oleh @2013xile
Referensi: [Manajemen Lokalisasi](https://docs.nocobase.com/system-management/localization)<br>[Lina: Localization Engineer](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Gunakan Lina dan HY-MT1.5-1.8B lokal untuk menerjemahkan entri lokalisasi](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Penyimpanan Berkas: S3(Pro)]** Mendukung unggah berkas melalui penyimpanan S3 Pro di pengelola berkas v2. oleh @Molunerfinn

### 🚀 Peningkatan

- **[build]** Menambahkan cakupan regresi untuk mencegah `deleteServerFiles` menghapus artefak build `client` dan `client-v2` di jalur Windows dan POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) oleh @Molunerfinn

- **[client]** Mengecualikan rekaman yang sudah terasosiasi dalam dialog pemilihan asosiasi blok tabel satu-ke-banyak ([#9448](https://github.com/nocobase/nocobase/pull/9448)) oleh @katherinehhh

- **[Pengelola Berkas]** Plugin penyimpanan pihak ketiga kini dapat mendaftarkan formulir tipe penyimpanan mereka sendiri di halaman pengaturan pengelola berkas v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) oleh @Molunerfinn

- **[AI: Basis Pengetahuan]** Pengidentifikasi unik untuk basis pengetahuan dapat dikonfigurasi saat pembuatan oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah tidak dapat memilih opsi untuk bidang pilihan asosiasi. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) oleh @gchust

  - Memperbaiki masalah pengaturan sistem tampak kosong setelah dikirim ([#9458](https://github.com/nocobase/nocobase/pull/9458)) oleh @zhangzhonghe

  - Memperbaiki permintaan tabel duplikat ketika formulir filter memiliki nilai default ([#9423](https://github.com/nocobase/nocobase/pull/9423)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana cakupan data blok target diatur secara tidak benar ketika membatalkan pilihan data baris dalam alur peristiwa blok tabel. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) oleh @gchust

  - Memperbaiki aturan tautan V2 untuk mendukung pengaturan opsi yang dapat dipilih untuk bidang ([#9399](https://github.com/nocobase/nocobase/pull/9399)) oleh @jiannx

  - Memperbaiki kesalahan saat mengubah bidang judul bidang asosiasi di blok tabel v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) oleh @katherinehhh

- **[client-v2]**
  - Memperbaiki masalah halaman menjadi kosong di balik dialog pengaktifan plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) oleh @zhangzhonghe

  - Memperbaiki halaman admin v1 yang crash ketika mereferensikan modul plugin v2 di build produksi. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) oleh @Molunerfinn

- **[cli-v1]** Memperbaiki kegagalan startup pengembangan di aplikasi yang dibuat dengan create-nocobase-app yang disebabkan oleh resolusi jalur klien app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) oleh @Molunerfinn

- **[server]** fix(file-manager): memaksa unduh file konten aktif di penyimpanan lokal/publik ([#9437](https://github.com/nocobase/nocobase/pull/9437)) oleh @mytharcher

- **[Departemen]** Memperbaiki konflik terjemahan antara tombol tambah pengguna dan tambah departemen di pengaturan Pengguna & Izin ([#9456](https://github.com/nocobase/nocobase/pull/9456)) oleh @katherinehhh

- **[Blok: Markdown]** Memperbaiki masalah blok Markdown v2 yang melaporkan kesalahan ([#9440](https://github.com/nocobase/nocobase/pull/9440)) oleh @zhangzhonghe

- **[Workflow]** fix: mengembalikan teks bantuan di dialog pengikatan workflow FlowModel untuk peristiwa operasi dan tindakan kustom ([#9447](https://github.com/nocobase/nocobase/pull/9447)) oleh @mytharcher

- **[Karyawan AI]** Memperbaiki uji coba Ollama yang memerlukan input kunci ([#9450](https://github.com/nocobase/nocobase/pull/9450)) oleh @cgyrock

- **[Workflow: Persetujuan]**
  - Memperbaiki indeks rekaman persetujuan duplikat saat mendelegasikan tugas persetujuan. oleh @mytharcher

  - Memperbaiki tata letak formulir persetujuan di perangkat seluler oleh @zhangzhonghe

- **[Pengelola Cadangan]** Memperbaiki masalah di mana pencadangan akan gagal dengan kesalahan ketika file tidak dapat ditemukan. oleh @gchust
