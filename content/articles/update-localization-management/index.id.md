---
title: "Pembaruan（manajemen lokalisasi）：Atur namespace teks berdasarkan modul"
description: "Optimalkan manajemen lokalisasi Anda dengan namespace teks berbasis modul dari NocoBase. Panduan ini merinci pendekatan baru untuk mengatur teks terjemahan berdasarkan modul, menghilangkan masalah duplikasi, dan meningkatkan kustomisasi. Pelajari tentang perubahan, langkah migrasi, dan dampaknya pada proses pengembangan Anda."
---

## Latar Belakang

* Plugin manajemen lokalisasi menyinkronkan teks asli dengan menempatkannya dalam namespace (modul) yang sama. Saat menemukan teks identik di plugin yang berbeda, plugin ini menghapus duplikat dan mempertahankan terjemahan yang ditemukan di [`packages/core/client/src/locale`](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/locale) untuk penggunaan selanjutnya.
* Klien NocoBase membuat instance `i18n` dengan opsi `fallbackNS: "client"` ([referensi](https://github.com/nocobase/nocobase/blob/8983eed3308d018a309f1d39f5c6988bbc632878/packages/core/client/src/i18n/i18n.ts#L20)). Akibatnya, selama pengembangan plugin, teks tertentu yang sudah ada di `packages/core/client/src/locale` dapat dihilangkan dari file lokal plugin.

Kedua pengaturan ini, bagaimanapun, menimbulkan masalah. Teks asli yang sama hanya dapat dikaitkan dengan satu terjemahan dan tidak dapat berbeda antar namespace. Misalnya, jika pengguna membuat konten dengan teks yang sama dengan terjemahan yang sudah ada, seperti "Users" dengan terjemahan bahasa Indonesia "Pengguna", maka akan ditampilkan sebagai "Pengguna" di lingkungan "id-ID". Ini terjadi bahkan jika pengguna lebih suka menampilkan teks asli daripada terjemahan.

## Perubahan

Teks terjemahan dikategorikan berdasarkan modul yang sesuai (menu, koleksi & bidang, plugin yang berbeda), tanpa penghapusan duplikat. Pada halaman manajemen lokalisasi, teks dapat difilter menggunakan menu dropdown dengan memilih modul yang sesuai.

![halaman manajemen lokalisasi](https://static-docs.nocobase.com/148e5cf34a8a761f7d16429f1c0338f1.jpg)

## Cara migrasi

Ikuti [proses upgrade](https://docs.nocobase.com/welcome/getting-started/upgrading) normal untuk meningkatkan sistem. Kemudian beralih ke lingkungan bahasa yang sesuai, dan pada halaman manajemen lokalisasi, sinkronkan teks terjemahan dengan mengklik tombol **"Sync"**.

![Cara migrasi](https://static-docs.nocobase.com/bb1c1563770b5c7bfc4f683fc8efaad9.jpg)

## Perubahan yang memutuskan kompatibilitas

### Teks terjemahan tidak lagi dihapus duplikatnya

Teks duplikat antar modul memerlukan terjemahan terpisah.

![Teks terjemahan tidak lagi dihapus duplikatnya](https://static-docs.nocobase.com/c090ade730c7d71841cef340d865615b.jpg)

### Opsi `fallbackNS` dihapus dari instance `i18n`

Instance `i18n` klien tidak lagi menyertakan opsi `fallbackNS: "client"`.

Bagi pengembang plugin, jika file bahasa dalam plugin menghilangkan beberapa teks yang sudah ada di klien inti, maka perlu untuk melengkapinya. Jika Anda masih ingin menggunakan kembali konten dari `packages/core/client/src/locale`, berikan parameter yang sesuai saat menggunakannya, misalnya:

```
import { useTranslation } from 'react-i18next';

export const NAMESPACE = 'localization-management';

export const useLocalTranslation = () => {
  return useTranslation([NAMESPACE, 'client'], { nsMode: 'fallback' });
};
```
