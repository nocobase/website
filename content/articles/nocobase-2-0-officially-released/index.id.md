---
title: "NocoBase 2.0 Resmi Dirilis"
description: "Rilis ini membawa peningkatan sistematis pada kemampuan AI, arsitektur aplikasi, pengalaman pengeditan data, dan alur peristiwa frontend, serta adaptasi penuh halaman V2 dan fitur inti."
---

NocoBase 2.0 adalah peningkatan besar yang berfokus pada **membangun aplikasi kompleks dan melakukan penskalaan deployment**. Rilis ini menghadirkan peningkatan sistematis pada kemampuan AI, arsitektur aplikasi, pengalaman pengeditan data, dan alur event frontend, serta adaptasi penuh halaman V2 dan fitur inti.

## Fitur Baru

### Karyawan AI

Kemampuan AI kini terintegrasi ke dalam inti sebagai warga kelas satu, dengan kemampuan perluasan melalui sistem plugin:

- Terintegrasi ke dalam inti dengan kemampuan perluasan berbasis plugin
- Peningkatan dan optimalisasi dependensi LangChain untuk stabilitas dan skalabilitas yang lebih baik
- Penyederhanaan alur interaksi Karyawan AI, menurunkan hambatan konfigurasi dan penggunaan

![20260214075059](https://static-docs.nocobase.com/20260214075059.png)

**Referensi:**

- [Karyawan AI](https://v2.docs.nocobase.com/ai-employees)

### Supervisor Aplikasi

Plugin Supervisor Aplikasi menyediakan **penemuan, penjadwalan, dan pengelolaan terpadu untuk beberapa instance aplikasi NocoBase**, cocok untuk skenario deployment multi-aplikasi dan multi-lingkungan.

- Penemuan aplikasi otomatis dan manajemen terpusat
- Mekanisme memori bersama untuk meningkatkan kolaborasi antar-instance
- Deployment hybrid multi-lingkungan untuk kebutuhan pengiriman yang kompleks

**Memori Bersama**

![20260214075803](https://static-docs.nocobase.com/20260214075803.png)

**Deployment Hybrid Multi-Lingkungan**

![20260214075815](https://static-docs.nocobase.com/20260214075815.png)

**Referensi:**

- [Manajemen Multi-Aplikasi](https://v2.docs.nocobase.com/multi-app/multi-app)

### Peningkatan Kanvas Workflow

#### Pengurutan Ulang Node dengan Seret dan Lepas

![image-8ajlez.png](https://static-docs.nocobase.com/image-8ajlez.png)

#### Salin dan Tempel Node

![image-nskgho.png](https://static-docs.nocobase.com/image-nskgho.png)

### Sub-tabel (Edit Inline / Edit Popup)

Untuk memenuhi berbagai tingkat kompleksitas dalam pengeditan data terkait, NocoBase menawarkan dua mode edit sub-tabel:

- **Sub-tabel (Edit Inline)**: Edit data terkait langsung di tabel untuk operasi yang efisien, ideal untuk entri data cepat dan pembaruan batch
- **Sub-tabel (Edit Popup)**: Edit data melalui form popup dengan dukungan untuk tipe field dan logika validasi yang lebih kompleks, cocok untuk skenario dengan kompleksitas tinggi

**Sub-tabel (Edit Inline)**

![20260214080224](https://static-docs.nocobase.com/20260214080224.png)

**Sub-tabel (Edit Popup)**

![20260214080233](https://static-docs.nocobase.com/20260214080233.png)

**Referensi:**

- [Sub-tabel (Edit Inline)](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table)
- [Sub-tabel (Edit Popup)](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table-popup)

### Penugasan Field

Mekanisme penugasan field baru menyatukan dan meningkatkan **logika inisialisasi dan penulisan** untuk data form, meningkatkan kejelasan dan konsistensi:

- **Menyatukan** titik masuk konfigurasi penugasan field, mengurangi kompleksitas konfigurasi yang tersebar
- Logika penugasan field **tidak lagi bergantung pada tipe komponen field**, membuat perilaku data lebih stabil dan dapat diprediksi
- Mendukung **penugasan tingkat field pada field relasi**, memungkinkan pemodelan data relasional yang kompleks
- Mode penugasan **nilai default** dan **nilai konstan**, mencakup skenario inisialisasi dan penimpaan
- "Nilai default field" lama tidak digunakan lagi; harap migrasikan ke mekanisme penugasan field yang baru

![20260214080932](https://static-docs.nocobase.com/20260214080932.png)

**Referensi:** Penugasan Field (dokumentasi segera hadir)

### Urutan Eksekusi Alur Event

Alur event berjalan secara ketat dalam hierarki **Event → Flow → Step**, dengan hook terkait yang dipicu sebelum dan sesudah setiap level untuk kontrol dan perluasan yang terperinci.

```yml
event:
  before:
    - track_event_start
  flows:
    - name: flow1
      before:
        - track_flow_start
      steps:
        - name: step1
          before: [track_step_start]
          run: do_something
          after: [track_step_done]
      after:
        - track_flow_end
    - name: flow2
      ...
    - name: flow3
      ...
  after:
    - track_event_end
```

![20260214081527](https://static-docs.nocobase.com/20260214081527.png)

**Referensi:**

- [Alur Event](https://v2.docs.nocobase.com/interface-builder/event-flow)

## Fitur yang Diadaptasi ke 2.0

### Edit Massal

![20260214083041](https://static-docs.nocobase.com/20260214083041.png)

**Referensi:**

- [Edit Massal](https://v2.docs.nocobase.com/interface-builder/actions/types/bulk-edit)

### Duplikasi

![20260214083146](https://static-docs.nocobase.com/20260214083146.png)

**Referensi:**

- [Duplikasi](https://v2.docs.nocobase.com/interface-builder/actions/types/duplicate)

### Tinggi Blok

![20260214083319](https://static-docs.nocobase.com/20260214083319.png)

**Referensi:**

- [Tinggi Blok](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/block-height)

### Urutkan Baris Tabel dengan Seret dan Lepas

![20260214085152](https://static-docs.nocobase.com/20260214085152.png)

**Referensi:**

- [Urutkan Seret](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/drag-sort)

### Metode Pemuatan Data

![20260214083433](https://static-docs.nocobase.com/20260214083433.png)

**Referensi:**

- [Metode Pemuatan Data](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/data-loading-method)

### Menampilkan Field Relasi di Form

![20260214083517](https://static-docs.nocobase.com/20260214083517.png)

**Referensi:**

- [Form](https://v2.docs.nocobase.com/interface-builder/blocks/data-blocks/form)

### Dukungan Lokalisasi Halaman (V2)

Halaman V2 kini mendukung penuh lokalisasi di seluruh **halaman, blok, aksi, dan field**.

Setelah mengaktifkan plugin lokalisasi, sistem secara otomatis mengumpulkan entri terjemahan yang hilang dan menampilkannya di daftar manajemen lokalisasi untuk pemeliharaan terpusat.

Di blok JS, gunakan `ctx.t()` untuk mengambil teks yang dilokalkan dengan interpolasi variabel:

```js
const label = ctx.t('Nama Anda adalah {{name}}', {
  name: await ctx.getVar('ctx.user.nickname')
});
ctx.render(label);
```

### Persetujuan 2.0

Semua alur kerja persetujuan yang baru dibuat menggunakan tata letak berbasis blok 2.0. Konfigurasi 1.x yang ada tetap didukung. Untuk mengalihkan persetujuan 1.x ke tata letak 2.0, pilih versi v2 dan konfigurasi ulang antarmuka. Perhatikan bahwa setelah dialihkan, tidak dapat dikembalikan ke 1.x.

#### Konfigurasi Antarmuka Pemrakarsa

![image-ba3ann.png](https://static-docs.nocobase.com/image-ba3ann.png)

#### Konfigurasi Antarmuka Penyetuju

![image-dl448q.png](https://static-docs.nocobase.com/image-dl448q.png)

### Tembusan (CC) 2.0

Semua node Tembusan yang baru dibuat menggunakan tata letak berbasis blok 2.0 untuk tampilan penerima. Konfigurasi 1.x yang ada tetap didukung. Untuk mengalihkan Tembusan 1.x ke tata letak 2.0, pilih versi v2 dan konfigurasi ulang antarmuka. Perhatikan bahwa setelah dialihkan, tidak dapat dikembalikan ke 1.x.

![image-z26oib.png](https://static-docs.nocobase.com/image-z26oib.png)

## Belum Tersedia di 2.0

Fitur-fitur berikut belum tersedia di 2.0 dan akan ditingkatkan di rilis mendatang:

| Fitur                           | Alternatif Saat Ini   |
| ------------------------------- | --------------------- |
| Permintaan Kustom               | Node Permintaan Workflow |
| Cetak Browser                   | Aksi JS               |
| Form Multi-langkah              | Blok JS               |
| Blok Filter Pohon               | Blok JS               |
| Blok Kalender                   | Blok JS               |
| Variabel Kustom                 | Alur Event            |
| Blok Gantt                      | Blok JS               |
| Blok Kanban                     | Blok JS               |
| Salin Teks                      | Alur Event            |
| Pengaturan Kolom                | Aksi JS               |
| Aturan Tautan Gaya              | Alur Event            |
| Pintasan Salin Teks             | Alur Event            |
| Field Kode QR                   | Field JS              |
| Pindai untuk Input              | Alur Event            |
| Sematkan NocoBase               | —                     |
| Field Wilayah Administratif China | —                   |
| Field Kode                      | —                     |
| Form Publik                     | —                     |
| Todo Node Manual Workflow       | —                     |
| Setelah Pengiriman Berhasil     | Alur Event            |
| Templat Data                    | Alur Event            |
