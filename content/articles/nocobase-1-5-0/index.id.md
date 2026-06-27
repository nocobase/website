---
title: "NocoBase v1.5.0 Resmi Dirilis"
description: "Optimasi inti, impor/ekspor data skala besar, manajemen email, pencetakan template, dan fitur lainnya secara komprehensif meningkatkan kinerja sistem dan pengalaman pengguna."
---

## Optimasi Inti

### Mengaktifkan Tautan di Kolom Teks Satu Baris

Mode terbuka mendukung drawer, dialog, dan halaman.

![20250207212903](https://static-docs.nocobase.com/20250207212903.png)

### Blok Asosiasi Mendukung Tindakan Asosiasi/Disasosiasi

Anda sekarang dapat melakukan tindakan asosiasi dan disasosiasi langsung di blok asosiasi.

![20250207211837](https://static-docs.nocobase.com/20250207211837.png)

### Men-debug Alur Kerja

Anda sekarang dapat langsung memicu alur kerja selama konfigurasi untuk men-debug-nya.

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/20250207213343_rec_.mp4" type="video/mp4">
</video>

### Interaksi Mobile yang Lebih Baik untuk Komponen Tanggal

Pengalaman interaksi yang ditingkatkan untuk komponen terkait tanggal di perangkat mobile.

![0084553986f6b3de21ca62f22d09a91a.png](https://static-docs.nocobase.com/0084553986f6b3de21ca62f22d09a91a.png)

### Optimasi Performa Frontend

*   Kecepatan muat layar awal yang dioptimalkan.
*   Alat build frontend diubah menjadi **rspack**.
*   Ukuran bundel file entri untuk berbagai paket plugin dikurangi.
*   Performa rendering untuk tabel data besar ditingkatkan.
*   Tersendat-sendat selama transisi menu dikurangi.
*   Memperkenalkan metode pemuatan sesuai permintaan dengan pustaka `lazy` dan `useLazy` yang baru.

Di bawah ini adalah pengenalan singkat tentang penggunaan `lazy` dan `useLazy`:

```ts
import { lazy, useLazy } from '@nocobase/client';

// Ekspor satu komponen:
const { RolesManagement } = lazy(() => import('./RolesManagement'), 'RolesManagement');

// Ekspor beberapa komponen:
const { AuthLayout, SignInPage, SignUpPage } = lazy(() => import('./pages'), 'AuthLayout', 'SignInPage', 'SignUpPage');

// Ekspor komponen default:
const ThemeList = lazy(() => import('./components/ThemeList'));

// Mengembalikan hook:
const useReactToPrint = useLazy<typeof import('react-to-print').useReactToPrint>(
  () => import('react-to-print'),
  'useReactToPrint',
);
  
// Mengembalikan pustaka:
const parseExpression = useLazy<typeof import('cron-parser').parseExpression>(
  () => import('cron-parser'),
  'parseExpression',
);
```

---

## Plugin Baru

### Impor Pro

Mendukung operasi impor asinkron yang berjalan di thread terpisah. Fitur ini memungkinkan impor data dalam jumlah besar dengan performa yang ditingkatkan.

![20250119221221](https://static-docs.nocobase.com/20250119221221.png)

Referensi: [Impor Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Ekspor Pro

Mengaktifkan operasi ekspor asinkron yang berjalan di thread terpisah, mendukung ekspor data skala besar serta ekspor lampiran.

![20250119221237](https://static-docs.nocobase.com/20250119221237.png)

Referensi: [Ekspor Pro](https://docs.nocobase.com/handbook/action-export-pro)

### Cetak Template

Plugin Cetak Template memungkinkan Anda mengedit file template menggunakan Word, Excel, atau PowerPoint (mendukung format `.docx`, `.xlsx`, dan `.pptx`). Dengan menyetel placeholder dan struktur logis di dalam template, Anda dapat secara dinamis menghasilkan file dalam format yang telah ditentukan seperti `.docx`, `.xlsx`, `.pptx`, dan bahkan `.pdf`. Fungsionalitas ini dapat diterapkan secara luas untuk membuat berbagai dokumen bisnis, termasuk kutipan, faktur, kontrak, dan banyak lagi.

**Fitur Utama**

*   **Dukungan Multi-format**: Kompatibel dengan template Word, Excel, dan PowerPoint untuk memenuhi kebutuhan pembuatan dokumen yang beragam.
*   **Pengisian Data Dinamis**: Secara otomatis mengisi konten dokumen berdasarkan placeholder dan logika yang ditentukan.
*   **Manajemen Template yang Fleksibel**: Dengan mudah menambah, mengedit, menghapus, dan mengkategorikan template untuk pemeliharaan dan penggunaan yang lebih baik.
*   **Sintaks Template yang Kaya**: Mendukung penggantian dasar, akses array, perulangan, keluaran bersyarat, dan sintaks template lainnya untuk pembuatan dokumen yang kompleks.
*   **Dukungan Pemformat**: Menyediakan keluaran bersyarat, pemformatan tanggal, pemformatan angka, dan banyak lagi untuk meningkatkan kejelasan dan profesionalisme dokumen.
*   **Opsi Keluaran yang Efisien**: Mendukung pembuatan PDF langsung untuk kemudahan berbagi dan pencetakan.

![20250119221258](https://static-docs.nocobase.com/20250119221258.png)

Referensi: [Cetak Template](https://docs.nocobase.com/handbook/action-template-print)

### Logger Audit

Plugin ini mencatat dan melacak aktivitas pengguna serta riwayat operasi sumber daya dalam sistem.

![20250119221319](https://static-docs.nocobase.com/20250119221319.png)

Referensi: [Logger Audit](https://docs.nocobase.com/handbook/audit-logger)

### Alur Kerja: Subalur

Fitur ini memungkinkan satu alur kerja untuk memanggil proses lain. Anda dapat menggunakan variabel dari alur kerja saat ini sebagai masukan untuk subalur, dan kemudian menggunakan keluaran subalur sebagai variabel di node berikutnya.

![20250119221334](https://static-docs.nocobase.com/20250119221334.png)

Referensi: [Alur Kerja: Subalur](https://docs.nocobase.com/handbook/workflow-subflow)

### Manajer Email

Integrasikan akun email Google atau Microsoft Anda ke NocoBase untuk mengirim, menerima, melihat, dan mengelola email. Selain itu, email dapat disematkan langsung ke halaman.

![20250119221346](https://static-docs.nocobase.com/20250119221346.png)

Referensi: [Manajer Email](https://docs.nocobase.com/handbook/email-manager/usage-admin)

### Penyimpanan File: S3 (Pro)

Mendukung jenis penyimpanan file yang kompatibel dengan protokol S3, termasuk Amazon S3, Alibaba Cloud OSS, Tencent Cloud COS, MinIO, dan lainnya. Plugin ini juga mendukung unggahan file langsung dan akses privat.

![20250119221404](https://static-docs.nocobase.com/20250119221404.png)

Referensi: [Penyimpanan File: S3(Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
