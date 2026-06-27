---
title: "NocoBase v2.1.0-alpha.35: Tambahkan karyawan AI baru, Insinyur Lokalisasi Lina, untuk membantu tugas penerjemahan lokalisasi"
description: "Catatan Rilis v2.1.0-alpha.35"
---

### 🎉 Fitur Baru

- **[undefined]** Menambahkan karyawan AI baru, Localization Engineer Lina, untuk membantu tugas penerjemahan lokalisasi ([#9434](https://github.com/nocobase/nocobase/pull/9434)) oleh @2013xile
Referensi: [Manajemen Lokalisasi](https://docs.nocobase.com/system-management/localization)<br>[Lina: Localization Engineer](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Gunakan Lina dan HY-MT1.5-1.8B lokal untuk menerjemahkan entri lokalisasi](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Kalender]** Menambahkan dukungan client v2 untuk plugin Kalender. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) oleh @jiannx

- **[Blok: Pohon]** Menambahkan dukungan client-v2 untuk blok filter pohon. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) oleh @jiannx

- **[Penyimpanan file: S3(Pro)]** Mendukung unggah file melalui penyimpanan S3 Pro di pengelola file v2. oleh @Molunerfinn

### 🚀 Peningkatan

- **[build]** Menambahkan cakupan regresi untuk menjaga `deleteServerFiles` agar tidak menghapus artefak build `client` dan `client-v2` di seluruh jalur Windows dan POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) oleh @Molunerfinn

- **[client]** mengecualikan rekaman yang sudah diasosiasikan dalam dialog pemilihan asosiasi blok tabel satu-ke-banyak ([#9448](https://github.com/nocobase/nocobase/pull/9448)) oleh @katherinehhh

- **[Karyawan AI]** Optimasi interaksi dan kinerja percakapan paralel karyawan AI ([#9462](https://github.com/nocobase/nocobase/pull/9462)) oleh @cgyrock

- **[Pengelola file]** Plugin penyimpanan pihak ketiga kini dapat mendaftarkan formulir tipe penyimpanan mereka sendiri di halaman pengaturan pengelola file v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) oleh @Molunerfinn

- **[AI: Basis Pengetahuan]** Pengidentifikasi unik untuk basis pengetahuan dapat dikonfigurasi pada saat pembuatan oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]**
  - memperbaiki pencegahan pembukaan edit cepat untuk bidang asosiasi di tabel ([#9469](https://github.com/nocobase/nocobase/pull/9469)) oleh @katherinehhh

  - memperbaiki bidang pilihan ganda di blok data v2 harus menampilkan label opsi, bukan nilai ([#9472](https://github.com/nocobase/nocobase/pull/9472)) oleh @katherinehhh

  - Memperbaiki permintaan tabel duplikat ketika formulir filter memiliki nilai default ([#9423](https://github.com/nocobase/nocobase/pull/9423)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana pengaturan nilai default lama tidak dapat dihapus. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) oleh @gchust

  - Memperbaiki masalah di mana tidak dapat memilih opsi untuk bidang pilihan asosiasi. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) oleh @gchust

  - Memperbaiki masalah di mana pengaturan sistem tampak kosong setelah dikirim ([#9458](https://github.com/nocobase/nocobase/pull/9458)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana lingkup data blok target diatur secara tidak benar ketika membatalkan pilihan data baris dalam alur peristiwa blok tabel. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) oleh @gchust

  - memperbaiki kesalahan saat mengubah bidang judul bidang asosiasi di blok tabel v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) oleh @katherinehhh

  - Memperbaiki aturan tautan V2 untuk mendukung pengaturan opsi yang dapat dipilih untuk bidang ([#9399](https://github.com/nocobase/nocobase/pull/9399)) oleh @jiannx

- **[client-v2]**
  - Menjaga grup kosong setelah memfilter menu v1 di tata letak v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana halaman menjadi kosong di balik dialog pengaktifan plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) oleh @zhangzhonghe

  - Memperbaiki halaman admin v1 yang crash ketika merujuk modul plugin v2 di build produksi. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) oleh @Molunerfinn

- **[cli-v1]** Memperbaiki kegagalan startup pengembangan di aplikasi yang dibuat dengan create-nocobase-app yang disebabkan oleh resolusi jalur client app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) oleh @Molunerfinn

- **[server]** fix(file-manager): memaksa unduh file konten aktif di penyimpanan lokal/publik ([#9437](https://github.com/nocobase/nocobase/pull/9437)) oleh @mytharcher

- **[Karyawan AI]**
  - Memperbaiki kesalahan muat plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) oleh @cgyrock

  - Memperbaiki uji coba Ollama yang memerlukan input kunci ([#9450](https://github.com/nocobase/nocobase/pull/9450)) oleh @cgyrock

- **[Blok: Formulir multi-langkah]** memperbaiki masalah scrollbar saat mengaktifkan tinggi penuh di blok formulir langkah v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) oleh @katherinehhh

- **[Departemen]** memperbaiki konflik terjemahan antara tombol tambah pengguna dan tambah departemen di pengaturan Pengguna & Izin ([#9456](https://github.com/nocobase/nocobase/pull/9456)) oleh @katherinehhh

- **[Workflow]** fix: mengembalikan teks bantuan di dialog pengikatan workflow FlowModel untuk peristiwa aksi operasi dan kustom ([#9447](https://github.com/nocobase/nocobase/pull/9447)) oleh @mytharcher

- **[Blok: Markdown]** Memperbaiki masalah blok Markdown v2 yang melaporkan kesalahan ([#9440](https://github.com/nocobase/nocobase/pull/9440)) oleh @zhangzhonghe

- **[Workflow: Webhook]** Memperbaiki masalah di mana pembuatan node respons dicegat oleh validasi konfigurasi `statusCode` oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki tata letak formulir persetujuan di perangkat seluler oleh @zhangzhonghe

  - Memperbaiki indeks rekaman persetujuan duplikat saat mendelegasikan tugas persetujuan. oleh @mytharcher

- **[Pengelola cadangan]** Memperbaiki masalah di mana pencadangan akan gagal dengan kesalahan ketika file tidak dapat ditemukan. oleh @gchust
