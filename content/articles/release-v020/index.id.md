---
title: "NocoBase 0.20：Dukungan untuk Banyak Sumber Data"
description: "NocoBase 0.20 memperkenalkan dukungan untuk banyak sumber data, penyesuaian manajemen koleksi, kunci utama non-ID, antarmuka pengguna dan izin yang lebih baik, serta node alur kerja baru untuk fleksibilitas dan kinerja yang lebih baik."
---

## Fitur Baru

### Dukungan untuk Banyak Sumber Data

Menambahkan plugin ”[Data Source Manager](https://docs.nocobase.com/handbook/data-source-manager)”, yang digunakan untuk mengelola semua koleksi dan bidang untuk sumber data. Plugin Data Source Manager menyediakan antarmuka terpusat untuk mengelola sumber data dan tidak menyediakan kemampuan untuk mengakses sumber data. Plugin ini perlu digunakan bersama dengan berbagai plugin sumber data. Sumber data yang saat ini didukung meliputi:

* [Basis Data Utama](https://docs.nocobase.com/handbook/data-source-main): Basis data utama NocoBase, mendukung basis data relasional seperti MySQL, PostgreSQL, SQLite, dll.
* [Sumber Data MySQL Eksternal](https://docs.nocobase.com/handbook/data-source-external-mysql): Mengakses basis data MySQL yang sudah ada sebagai sumber data.
* [Sumber Data MariaDB Eksternal](https://docs.nocobase.com/handbook/data-source-external-mariadb): Mengakses basis data MariaDB yang sudah ada sebagai sumber data.
* [Sumber Data PostgreSQL Eksternal](https://docs.nocobase.com/handbook/data-source-external-postgres): Mengakses basis data PostgreSQL yang sudah ada sebagai sumber data.

Selain itu, lebih banyak sumber data dapat diperluas, yang dapat berupa jenis basis data umum atau platform yang menyediakan API (SDK).

![Data Source Manager](https://static-docs.nocobase.com/fe8ecdaf640097eeb310c94a997b9090.png)

### Penyesuaian pada Manajemen Koleksi

Memindahkan “Collection Manager” asli ke “Data Source > Main Database > Configuration”.

![Main Database Configuration](https://static-docs.nocobase.com/b5ad882a131e447f78b0c22a92ec9df6.gif)

### Dukungan untuk Bidang Non-ID sebagai Kunci Utama dan Kendala Relasi

Saat membuat koleksi, Anda dapat memilih untuk tidak membuat bidang ID.

![Predefined Fields](https://static-docs.nocobase.com/87dc4101a884f97cbfce00f1891f7cf6.png)

Bidang integer dapat digunakan sebagai kunci utama.

![Integer fields can be used as primary keys](https://static-docs.nocobase.com/cce37d7d8e9feaa66970da0c643a2d9d.png)

Bidang teks satu baris juga dapat digunakan sebagai kunci utama.

![Single-line text fields can also be used as primary keys](https://static-docs.nocobase.com/b2c797f52bedfcfa06936a244dd9be4b.png)

Kendala relasi mendukung pemilihan bidang lain dengan indeks Unik yang ditetapkan sebagai bidang non-kunci utama.

![](https://static-docs.nocobase.com/e5515e58426c5be08ba982b0bb311410.png)

### Penyesuaian pada Pengurutan Seret dan Lepas

Menambahkan bidang tipe “Sort”. Bidang pengurutan tidak lagi dibuat secara otomatis saat membuat koleksi dan perlu dibuat secara manual.

![](https://static-docs.nocobase.com/470891c7bb34c506328c1f3824a6cf20.png)

Saat memilih bidang sebagai grup, pengelompokan akan dilakukan sebelum pengurutan.

![](https://static-docs.nocobase.com/0794d0a9c0dc288a8fc924a3542bb86e.png)

Saat mengaktifkan pengurutan seret dan lepas di blok tabel, Anda perlu memilih bidang pengurutan.

![](https://static-docs.nocobase.com/20cf12fd7ca3d8c0aa1917a95c0a7e7c.png)

Saat membuat blok Kanban, Anda perlu memilih bidang pengurutan.

![](https://static-docs.nocobase.com/b810265790d6a1ec099e3d88d1361271.png)

### Penyesuaian pada Antarmuka Pengguna dan Izin

Menambahkan antarmuka manajemen pengguna dan menyatukan manajemen pengguna dan peran di bawah satu menu.

![](https://static-docs.nocobase.com/7be26746652098f07ce105dbae373522.png)

Menyesuaikan antarmuka manajemen peran untuk memudahkan pengelolaan peran, izin, departemen, dll. yang terkait dengan pengguna.

![](https://static-docs.nocobase.com/4ec942af764dfcec1ddc9a244816a6ee.png)

Memindahkan “Action Permissions” asli ke tab “Data Source”.

![](https://static-docs.nocobase.com/461ab881fe94a33f9a122e9734b85f4d.gif)

### Plugin Departemen

![](https://static-docs.nocobase.com/093473d9c23a789d41899df9bcaf3389.png)

Mengatur pengguna berdasarkan departemen, mengatur hubungan hierarkis, menautkan peran untuk mengontrol izin, dan menggunakan departemen sebagai variabel dalam alur kerja dan ekspresi.

### Alur Kerja: Persetujuan

Plugin persetujuan menyediakan jenis alur kerja (pemicu) khusus “Initiate Approval” dan node “Approval” untuk proses ini. Dikombinasikan dengan tabel data kustom dan blok kustom unik NocoBase, berbagai skenario persetujuan dapat dibuat dan dikelola dengan cepat dan fleksibel.

Konfigurasi persetujuan

![Approval Configuration](https://static-docs.nocobase.com/21acc5615ecc03aeeb44671ab945baea.png)

Proses persetujuan

![Approval Process](https://static-docs.nocobase.com/6a879641bd15de0648cd4602779ef9fa.png)

Detail lebih lanjut dapat ditemukan di dokumentasi: [Workflow Approval](https://docs.nocobase.com/handbook/workflow-approval)

### Alur Kerja: Node Akhiri Proses

Node ini segera mengakhiri eksekusi alur kerja saat ini saat dijalankan dan berakhir dengan status yang dikonfigurasi di node. Ini biasanya digunakan untuk kontrol aliran logika tertentu, untuk keluar dari alur kerja saat ini setelah memenuhi kondisi logis tertentu, tanpa melanjutkan pemrosesan selanjutnya. Ini dapat diibaratkan seperti perintah return dalam bahasa pemrograman, yang digunakan untuk keluar dari fungsi yang sedang dijalankan.

![](https://static-docs.nocobase.com/38d6352211d791fd4233f5cd4bdb34f2.png)

Detail lebih lanjut dapat ditemukan di dokumentasi: [End Process Node](https://docs.nocobase.com/handbook/workflow/nodes/end)

### Alur Kerja: Node Variabel Kustom

Variabel dapat dideklarasikan dalam alur kerja atau nilai dapat ditetapkan ke variabel yang dideklarasikan sebelumnya, biasanya digunakan untuk menyimpan data sementara dalam alur kerja. Ini cocok untuk skenario di mana hasil perhitungan perlu disimpan untuk digunakan nanti di luar cabang (seperti loop, paralelisme, dll.).

![](https://static-docs.nocobase.com/c19913f99968d987a52aaa53578a7318.png)

Detail lebih lanjut dapat ditemukan di dokumentasi: [Custom Variable Node](https://docs.nocobase.com/handbook/workflow-variable)

### Alur Kerja: Pencegat Permintaan

Plugin pencegat permintaan menyediakan mekanisme untuk mencegat operasi pada formulir, di mana peristiwa pencegat dipicu setelah operasi formulir yang sesuai dikirimkan dan sebelum diproses. Jika node “End Process” dijalankan dalam aliran proses selanjutnya setelah pemicuan, atau jika node lain gagal dijalankan (kesalahan atau eksekusi tidak lengkap lainnya), operasi formulir akan dicegat, jika tidak, operasi yang dijadwalkan akan dijalankan secara normal. Ini dapat digunakan untuk validasi bisnis atau pemeriksaan logika untuk menyetujui atau mencegat operasi buat, perbarui, dan hapus yang dikirimkan klien.

![](https://static-docs.nocobase.com/3f3991aaf9d73b8c2f7c179e7702d16b.png)

Detail lebih lanjut dapat ditemukan di dokumentasi: [Request Interceptor](https://docs.nocobase.com/handbook/workflow/triggers/pre-action)

### Alur Kerja: Node Pesan Respons

Node pesan respons digunakan untuk memberikan umpan balik kepada klien dengan pesan kustom dalam jenis alur kerja tertentu (seperti pencegat permintaan dan peristiwa formulir).

Konfigurasi node

![](https://static-docs.nocobase.com/4376843af541ef6a08696e074cb6cd07.png)

Pesan prompt

![](https://static-docs.nocobase.com/051f12855bd0ce74b22de191b8b87cf5.png)

Detail lebih lanjut dapat ditemukan di dokumentasi: [Response Message Node](https://docs.nocobase.com/handbook/workflow-response-message)

## Perubahan yang Tidak Kompatibel

### API dengan Nama yang Bertentangan

Dalam perubahan kernel ini, beberapa API versi baru bertentangan dengan nama versi lama. API versi lama yang bertentangan ini akan dipertahankan dalam versi ini tetapi akan diberi akhiran `_deprecated` secara seragam.


| API Asli                           | API Tidak Digunakan Lagi       | API Baru                                                                                                    |
| ---------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| CollectionProvider                 | CollectionProvider\_deprecated | [CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider)                 |
| useCollection                      | useCollection\_deprecated      | [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#hooks)                |
| useCollectionField                 | useCollectionField\_deprecated | [useCollectionField](https://client.docs.nocobase.com/core/data-source/collection-field#hooks)              |
| useCollectionManager               | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |
| useContext(CollectionManagerContext) | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |

Jika Anda menggunakan API terkait di atas, Anda memiliki dua cara untuk mengubah:

* Penggantian sederhana: Ganti API asli dengan yang diberi akhiran `_deprecated`, misalnya, ganti `useCollection()` dengan `useRecord_deprecated()`.
* Gunakan API baru sesuai dengan dokumentasi baru: Meskipun nama API baru sama dengan API lama, ada perbedaan dalam parameter dan nilai kembalian. Anda perlu merujuk ke dokumentasi baru

untuk menyesuaikan kode yang sesuai.

### API Lain yang Perlu Disesuaikan

* `registerTemplate()` diubah menjadi `app.dataSourceManager.addCollectionTemplates()`
* `registerField()` diubah menjadi `app.dataSourceManager.addFieldInterfaces()`
* `registerGroup()` diubah menjadi `app.dataSourceManager.addFieldInterfaceGroups()`
* `useContext(CollectionManagerContext)` diubah menjadi `useCollectionManager_deprecated()`
* Perluas koleksi menggunakan `ExtendCollectionsProvider`
* `RecordProvider` memerlukan penerusan parameter induk secara eksplisit saat diperlukan

## Contoh Perubahan

### Ekstensi Template Koleksi

#### Definisi

Sebelumnya didefinisikan sebagai objek, sekarang perlu diubah menjadi kelas. Contoh:

Sebelum:

```
import { ICollectionTemplate } from '@nocobase/client';

const calendar: ICollectionTemplate = {
  name: 'calendar',
  title: 'Calendar collection',
  order: 2,
  color: 'orange',
  // ...
}
```

Sekarang:

```
import { CollectionTemplate } from '@nocobase/client';

class CalendarCollectionTemplate extends CollectionTemplate {
  name = 'calendar';
  title = 'Calendar collection';
  order = 2;
  color = 'orange';
}
```

Properti objek asli menjadi anggota kelas.

#### Pendaftaran

Sebelumnya didaftarkan melalui `registerTemplate`, sekarang perlu didaftarkan melalui `dataSourceManager.addCollectionTemplates` plugin. Contoh:

Sebelum:

```
import { registerTemplate } from '@nocobase/client';
import { calendar } from './calendar'

registerTemplate('calendar', calendar);
```

Sekarang:

```
import { Plugin } from '@nocobase/client';
import { CalendarCollectionTemplate } from './calendar'

export class CalendarPluginClient extends Plugin {
  async load() {
    this.app.dataSourceManager.addCollectionTemplates([CalendarCollectionTemplate]);
  }
}
```

### Ekstensi Antarmuka Bidang

#### Definisi

Sebelumnya didefinisikan sebagai objek, sekarang perlu diubah menjadi kelas. Contoh:

Sebelum:

```
import { IField } from '@nocobase/client';

const attachment: IField = {
  name: 'attachment',
  type: 'object',
  group: 'media',
  title: 'Attachment',
  // ...
}
```

Sekarang:

```
import { CollectionFieldInterface } from '@nocobase/client';

class AttachmentFieldInterface extends CollectionFieldInterface {
  name = 'attachment';
  type = 'object';
  group = 'media';
  title = 'Attachment';
  // ...
}
```

Properti objek asli menjadi anggota kelas.

#### Pendaftaran

Sebelumnya didaftarkan melalui `registerField`, sekarang perlu didaftarkan melalui `dataSourceManager.addFieldInterfaces` plugin dan tidak perlu meneruskan `CollectionManagerProvider` lagi. Contoh:

Sebelum:

```
import { registerField } from '@nocobase/client';
import { attachment } from './attachment'

- registerField(attachment.group, 'attachment', attachment);

export const FileManagerProvider: FC = (props) => {
  return (
-   <CollectionManagerProvider interfaces={{ attachment }}>
      <SchemaComponentOptions scope={hooks} components={{ UploadActionInitializer }}>
        {props.children}
      </SchemaComponentOptions>
-   </CollectionManagerProvider>
  );
};
```

Sekarang:

```
import { Plugin } from '@nocobase/client';
import { AttachmentFieldInterface } from './attachment'

export class FilPlugin extends Plugin {
  async load() {
    this.app.dataSourceManager.addFieldInterfaces([AttachmentFieldInterface]);
  }
}
```

### Ekstensi Grup Antarmuka Bidang

Sebelumnya didaftarkan melalui `registerGroup`, sekarang perlu didaftarkan melalui `dataSourceManager.addFieldInterfaceGroups` plugin. Contoh:

```
- import { registerGroup, Plugin } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

- registerGroup('map', {
-        label: 'Map-based geometry',
-        order: 10
- })

export class MapPlugin extends Plugin {
  async load() {
+    this.app.dataSourceManager.addFieldInterfaceGroups({
+      map: {
+        label: generateNTemplate('Map-based geometry'),
+        order: 51,
+      },
+    });
  }
}
```

### `useContext(CollectionManagerContext)` Diubah Menjadi `useCollectionManager_deprecated()`

```
- const ctx = useContext(CollectionManagerContext);
+ const ctx = useCollectionManager_deprecated();
```

### Perluas Koleksi, Gunakan `ExtendCollectionsProvider` Sebagai Pengganti `CollectionManagerProvider`

```
const Demo = () => {
-  <CollectionManagerProvider collections={[apiKeysCollection]}>
+  <ExtendCollectionsProvider collections={[apiKeysCollection]}>
...
-  </CollectionManagerProvider>
+  </ExtendCollectionsProvider>
}
```

### Perubahan pada RecordProvider

Sebelumnya, ketika properti induk tidak diteruskan, nilai RecordProvider terakhir akan diambil secara otomatis sebagai induk. Sekarang, induk perlu diteruskan secara eksplisit, dan ketika induk tidak diteruskan, nilai induk akan menjadi undefined.

```
- <RecordProvider record={recordData}>
+ <RecordProvider record={recordData} parent={parentRecordData}>
...
</RecordProvider>
```

Jika tidak ada beban historis, Anda juga dapat langsung menggunakan CollectionRecordProvider sebagai pengganti.

```
- <RecordProvider record={recordData}>
+ <CollectionRecordProvider record={recordData} parent={parentRecordData}>
...
- </RecordProvider>
+ </CollectionRecordProvider>
```

> ⚠️Perbedaan Antara RecordProvider dan CollectionRecordProvider
>
> * RecordProvider tidak digunakan lagi dan akan dihapus di masa mendatang.
> * RecordProvider membawa RecordContext lama, sedangkan CollectionRecordProvider tidak.
