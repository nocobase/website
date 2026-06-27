---
title: "NocoBase v2.0.0-alpha.37: adaptasi dengan bidang tableoid di 2.0"
description: "Catatan Rilis v2.0.0-alpha.37"
---

### 🚀 Peningkatan

- **[klien]**
  - menambahkan info versi halaman ke konteks mesin alur ([#7826](https://github.com/nocobase/nocobase/pull/7826)) oleh @gchust

  - meningkatkan Editor Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) oleh @katherinehhh

  - beradaptasi dengan bidang tableoid di 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) oleh @katherinehhh

- **[Visualisasi data]** memperbarui petunjuk peringatan dan anotasi template kode acara ([#7814](https://github.com/nocobase/nocobase/pull/7814)) oleh @heziqiang

- **[Kontrol akses]** Mengoptimalkan logika kontrol izin untuk operasi bidang asosiasi ([#7800](https://github.com/nocobase/nocobase/pull/7800)) oleh @2013xile

- **[Auth: OIDC]** Menambah batas waktu permintaan oleh @2013xile

### 🐛 Perbaikan Bug

- **[server]** Memperbaiki masalah di mana, setelah mengaktifkan mode pemisahan layanan, proses pekerja yang mengirim pesan melalui antrian pesan menyebabkan kesalahan ([#7797](https://github.com/nocobase/nocobase/pull/7797)) oleh @mytharcher

- **[klien]**
  - variabel koleksi saat ini tidak boleh dipilih dari pemilih variabel komponen filter ([#7818](https://github.com/nocobase/nocobase/pull/7818)) oleh @gchust

  - Memperbaiki kesalahan 'value.replace is not a function' di bidang relasi formulir filter ([#7824](https://github.com/nocobase/nocobase/pull/7824)) oleh @zhangzhonghe

  - Memperbaiki parameter yang salah di callback onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) oleh @zhangzhonghe

- **[mesin-alur]** Memperbaiki masalah di mana perubahan pada alur acara hanya akan berlaku setelah menyegarkan halaman. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) oleh @gchust

- **[Alur Kerja]** Memperbaiki masalah di mana plugin alur kerja masih mengonsumsi acara antrian ketika tidak dalam mode pekerja di bawah mode pemisahan layanan ([#7820](https://github.com/nocobase/nocobase/pull/7820)) oleh @mytharcher

- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana bidang koleksi utama tidak dikecualikan saat memuat ulang data asosiasi oleh @mytharcher

- **[Manajer email]** Memperbaiki masalah gambar yang dicadangkan dan sinkronisasi di outlook oleh @jiannx
