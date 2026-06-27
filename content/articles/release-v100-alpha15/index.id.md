---
title: "NocoBase 1.0.0-alpha.15: Plugin Baru dan Interaksi 'Konfigurasi Tindakan' yang Ditingkatkan"
description: "NocoBase v1.0.0-alpha.15 memperkenalkan autentikasi LDAP, pemicu tindakan kustom, dukungan Gantt dan Kanban, dan banyak lagi. Pembaruan ini juga meningkatkan interaksi 'Konfigurasi Tindakan' dan mengatasi berbagai perbaikan bug untuk meningkatkan kinerja platform."
---

## Fitur baru

### Plugin Auth: Autentikasi LDAP

Mendukung pengguna untuk masuk ke NocoBase menggunakan kredensial server LDAP mereka. Untuk informasi lebih lanjut, lihat dokumentasi [Autentikasi: LDAP](https://docs.nocobase.com/handbook/auth-ldap).

![](https://static-docs.nocobase.com/202405191513995.png)

### Plugin Workflow: pemicu aksi kustom

Ketika aksi CRUD tidak dapat memenuhi kebutuhan Anda, Anda dapat menggunakan pemicu aksi kustom dari workflow untuk mengatur logika pemrosesan data Anda sendiri. Untuk informasi lebih lanjut, lihat dokumentasi [Workflow / Pemicu aksi kustom](https://docs.nocobase.com/handbook/workflow-custom-action-trigger).

![](https://static-docs.nocobase.com/202405191515770.png)

### Blok tabel mendukung kolom tetap

![](https://static-docs.nocobase.com/202405191512587.png)

### Mendukung penambahan Gantt dan Kanban di jendela pop-up

![](https://static-docs.nocobase.com/202405191512280.png)

### Blok detail mendukung aturan tautan

Memungkinkan konfigurasi properti tampak dan tersembunyi dari bidang.

![](https://static-docs.nocobase.com/202405191513781.png)

### Node permintaan HTTP Workflow mendukung data format `application/www-x-form-urlencoded`

![](https://static-docs.nocobase.com/202405191514472.png)

### Kotak input node permintaan HTTP Workflow mendukung template string

![](https://static-docs.nocobase.com/202405191514748.png)

### Contoh plugin untuk pengembangan

Lihat dokumentasi untuk [contoh plugin](https://docs.nocobase.com/plugin-samples).

![20240521105056](https://static-docs.nocobase.com/20240521105056.png)

## Peningkatan

### Peningkatan interaksi "Konfigurasi aksi"

Semua aksi ditampilkan dalam satu daftar di menu dropdown, tidak lagi membedakan antara "Aktifkan aksi" dan "Sesuaikan".

* Aksi yang hanya dapat ditambahkan sekali: Aksi ini mempertahankan efek sakelar.
* Aksi yang dapat ditambahkan berulang kali: Aksi ini tidak lagi menggunakan interaksi sakelar dan dapat ditambahkan beberapa kali.
* Menggabungkan aksi serupa
  * "Tambah baru" dan "Tambah rekaman"
  * "Kirim" dan "Simpan rekaman"

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

### Format data terpadu untuk hasil node permintaan HTTP Workflow:

```
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

### Menata ulang buku panduan workflow

![20240521104934](https://static-docs.nocobase.com/20240521104934.png)

## Perbaikan

### Plugin log sekarang hanya menampilkan log dari aplikasi saat ini

Ketika ada beberapa aplikasi:

* Plugin log hanya menampilkan daftar file log untuk aplikasi saat ini.
* Folder workflow dan permintaan kustom ditempatkan di dalam folder aplikasi.

![20240520152448](https://static-docs.nocobase.com/20240520152448.png)

Perbaikan utama lainnya meliputi:

* Grafik tidak mengonversi bidang tanggal ke zona waktu klien saat melakukan kueri data agregat berdasarkan bidang tanggal. [fix(data-vi): harus menggunakan zona waktu lokal saat memformat tanggal #4366](https://github.com/nocobase/nocobase/pull/4366)
* Masalah penyegaran tampilan, di mana tampilan harus keluar dan masuk kembali setelah sinkronisasi dengan basis data. [fix: bidang koleksi harus disegarkan setelah mengedit sinkronisasi dari basis data #4224](https://github.com/nocobase/nocobase/pull/4224)
* Blok tabel pohon tidak menciutkan semua node saat menambahkan node anak. [fix: jangan menciutkan semua node saat menambahkan node anak di blok tabel pohon #4289](https://github.com/nocobase/nocobase/pull/4289)
* Pengaturan bidang judul tabel data tidak valid. [fix: pengaturan bidang judul koleksi tidak valid #4358](https://github.com/nocobase/nocobase/pull/4358)
* Bidang Bigint kehilangan presisi dalam mode hanya-baca. [fix: bidang bigint kehilangan presisi dalam mode baca cantik #4360](https://github.com/nocobase/nocobase/pull/4360)
* File log yang terbuka tidak ditutup setelah menghentikan sub-aplikasi. [fix(logger): harus menutup aliran log setelah menghancurkan aplikasi #4380](https://github.com/nocobase/nocobase/pull/4380)
* Bug pemilihan model data relasi node agregat workflow. [fix(plugin-workflow-aggregate): perbaiki pilih bidang asosiasi #4315](https://github.com/nocobase/nocobase/pull/4315)
* Opsi mengabaikan kesalahan tidak efektif dalam mode sinkron untuk node permintaan HTTP workflow. [fix(plugin-workflow-request): perbaiki ignoreFail dalam mode sinkron #4334](https://github.com/nocobase/nocobase/pull/4334)
* Kotak input nilai node permintaan HTTP workflow meluap. [fix(plugin-workflow-request): perbaiki bidang nilai meluap #4354](https://github.com/nocobase/nocobase/pull/4353)
* Karakter khusus menyebabkan node permintaan HTTP workflow menggantung. [fix(plugin-workflow-request): perbaiki permintaan menggantung saat nilai header tidak valid #4376](https://github.com/nocobase/nocobase/pull/4376)
* Memperbaiki masalah di mana pengaturan marginBlock di editor tema memengaruhi jarak bidang formulir. [fix(theme-editor): jarak bidang formulir tidak boleh terpengaruh oleh token.marginBlock #4374](https://github.com/nocobase/nocobase/pull/4374)
* Memperbaiki masalah di mana mengklik opsi "Lisensi" di sudut kanan atas halaman mengarahkan ulang secara salah. [PR #4415](https://github.com/nocobase/nocobase/pull/4415)
* Memperbaiki masalah di mana operator bidang tidak valid saat menyimpan formulir filter sebagai template blok. [PR #4390](https://github.com/nocobase/nocobase/pull/4390)
