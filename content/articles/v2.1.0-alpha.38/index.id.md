---
title: "NocoBase v2.1.0-alpha.38: Memperbaiki masalah di mana variabel rekaman popup saat ini tidak dapat diselesaikan dalam alur peristiwa tombol aksi"
description: "Catatan Rilis v2.1.0-alpha.38"
---

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana variabel rekaman popup saat ini tidak dapat diselesaikan dalam alur peristiwa tombol aksi. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) oleh @gchust

  - Memperbaiki masalah di mana nilai bidang JS dalam subform tidak diatur dengan benar saat pengiriman formulir. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) oleh @gchust

- **[mesin-alur]** Memperbaiki pesan kesalahan yang salah di konsol peramban. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) oleh @gchust

- **[Alur Kerja: JavaScript]** Memperbaiki pemuatan paket runtime QuickJS JavaScript alur kerja dalam build produksi. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) oleh @mytharcher

- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana rekaman yang diimpor pada bidang seperti tanggal menampilkan tanggal yang salah ([#9463](https://github.com/nocobase/nocobase/pull/9463)) oleh @mytharcher

- **[Aksi: Impor rekaman Pro]** memperbaiki penanganan zona waktu untuk impor xlsx pro oleh @mytharcher

- **[Aksi: Ekspor rekaman Pro]** Memperbaiki masalah di mana kesalahan muncul saat mengekspor lampiran dari bidang url lampiran oleh @mytharcher
