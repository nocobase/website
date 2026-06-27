---
title: "NocoBase 0.21：Dukungan Multi-Sumber Data untuk Grafik dan Alur Kerja"
description: "NocoBase 0.21 memperkenalkan dukungan Multi-Sumber Data untuk grafik dan alur kerja, peristiwa pemicu alur kerja yang dioptimalkan, dan beberapa jenis bidang baru, meningkatkan fleksibilitas dan kinerja."
---

## Pengumuman

![v1.0](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/img_v3_029o_3dd91ba0-bb96-4315-a273-208f06d432fg.png)

## Fitur baru

### Dukungan Multi-Sumber Data untuk Grafik

![20240407222304](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222304.png)

[Untuk informasi lebih lanjut, lihat dokumentasi [Visualisasi Data]](https://docs.nocobase.com/handbook/data-visualization)

### Dukungan Multi-Sumber Data untuk alur kerja

![20240407222523](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222523.png)

[Untuk informasi lebih lanjut, lihat dokumentasi [Alur Kerja]](https://docs.nocobase.com/handbook/workflow)

### Optimalisasi Acara Pemicu Alur Kerja

Perubahan pada nama pemicu:

| Nama Asli                     | Diubah Menjadi           |
| ----------------------------- | ------------------------ |
| Acara Formulir, Acara Operasi | Acara Pasca-operasi      |
| Tugas Terjadwal               | Acara Terjadwal          |
| Pencegat Permintaan           | Acara Pra-operasi        |
| Persetujuan                   | Acara Persetujuan        |

Peningkatan konfigurasi mode pemicu untuk acara berikut:

#### Acara Pasca-operasi

![20240407222652](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222652.png)

[Untuk informasi lebih lanjut, lihat dokumentasi [Alur Kerja - Acara Pasca-operasi]](https://docs.nocobase.com/handbook/workflow-custom-action-trigger)

#### Acara Pra-operasi

![20240407222834](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222834.png)

[Untuk informasi lebih lanjut, lihat dokumentasi [Alur Kerja - Acara Pra-operasi]](https://docs.nocobase.com/handbook/workflow-request-interceptor)

### Plugin Merek Kustom

![20240407222949](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222949.png)

[Untuk informasi lebih lanjut, lihat dokumentasi [Merek Kustom]](https://docs.nocobase.com/handbook/custom-brand)

### Dukungan untuk bidang nanoid

![20240407223221](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223221.png)

[Untuk informasi lebih lanjut, lihat dokumentasi [bidang nanoid]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/nano-id)

### Dukungan untuk bidang uuid

![20240407223431](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223431.png)

[Untuk informasi lebih lanjut, lihat dokumentasi [bidang uuid]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/uuid)

### Dukungan untuk bidang unix timestamp

![20240407223512](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223512.png)

[Untuk informasi lebih lanjut, lihat dokumentasi [Bidang Unix timestamp]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/datetime/unix-timestamp)

### Bidang tipe Angka mendukung konfigurasi format

![20240407223736_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223736_rec_.gif)

[Untuk informasi lebih lanjut, lihat dokumentasi [Konfigurasi bidang / Pengaturan properti spesifik / Komponen Angka]](https://docs.nocobase.com/handbook/ui/fields/field-settings/number-format)

### Dukungan untuk deployment subpath

Menambahkan variabel lingkungan `APP_PUBLIC_PATH` untuk mendukung deployment subpath. Contoh:

```
APP_PUBLIC_PATH=/nocobase/
```

Akses secara lokal melalui URL [http://localhost:13000/nocobase/](http://localhost:13000/nocobase/)

Contoh proxy nginx:

```
server {
    listen 80;
    server_name your_domain.com;  # Ganti your_domain.com dengan domain Anda

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

Sekarang, Anda dapat mengakses melalui http://your\_domain.com/nocobase/.

### Optimalisasi kinerja Blok

#### Dukungan untuk efek layar kerangka

Kartu Blok

![20240407224956](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224956.png)

Kartu Kanban

![20240407224811](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224811.png)

Sel Tabel

![20240407230028](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407230028.png)

#### Pemrosesan terdistribusi dari konfigurasi blok

Sebelumnya, perubahan pada Schema mana pun di seluruh halaman akan menyebabkan seluruh halaman di-render ulang. Sekarang, Schema setiap blok bersifat independen.

```
<SchemaComponent distributed schema={} />
```

Komponen Grid juga mendukung pemrosesan terdistribusi.

```
{
  'x-component': 'Grid',
  'x-component-props': {
    distributed: true,
  },
}
```

## Perubahan yang tidak kompatibel

### Berbagai useProps dari UI Schema diganti dengan x-use-decorator-props dan x-use-component-props

x-use-decorator-props dan x-use-component-props bersifat non-intrusif dan didukung oleh semua komponen.
