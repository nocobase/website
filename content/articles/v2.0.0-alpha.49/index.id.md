---
title: "NocoBase v2.0.0-alpha.49: Izinkan memilih untuk menampilkan snapshot atau rekaman terbaru di UI proses persetujuan"
description: "Catatan Rilis v2.0.0-alpha.49"
---

### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Memungkinkan untuk memilih apakah akan menampilkan snapshot atau record terbaru di antarmuka proses persetujuan oleh @mytharcher

### 🚀 Peningkatan

- **[client]** mengoptimalkan pesan validasi untuk subtable ([#8001](https://github.com/nocobase/nocobase/pull/8001)) oleh @katherinehhh

- **[Telemetri: Prometheus]** Memutakhirkan `@opentelemetry/exporter-prometheus` oleh @2013xile

- **[Aksi: Impor record Pro]** Pesan kesalahan yang ditingkatkan untuk tugas asinkron guna memberikan alasan spesifik kepada pengguna atas kegagalan tugas oleh @mytharcher

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki masalah di mana variabel record saat ini tidak dapat dipicu dengan benar untuk diselesaikan di blok detail. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) oleh @gchust

- **[client]** Memperbaiki masalah pemilihan dan penghapusan blok tabel untuk kunci komposit ([#7978](https://github.com/nocobase/nocobase/pull/7978)) oleh @katherinehhh

- **[Aksi: Ekspor record]** memperbaiki field sistem yang hilang dalam daftar field yang dapat diekspor ([#8002](https://github.com/nocobase/nocobase/pull/8002)) oleh @katherinehhh

- **[Koleksi: Pohon]** Memperbaiki kegagalan pembaruan tabel jalur yang disebabkan oleh pencarian field induk pohon yang salah ([#8000](https://github.com/nocobase/nocobase/pull/8000)) oleh @2013xile

- **[Field koleksi: Banyak ke banyak (array)]** Memperbaiki masalah di mana field array m2m di subtable tidak dapat diperbarui ([#7998](https://github.com/nocobase/nocobase/pull/7998)) oleh @cgyrock

- **[Departemen]** Memperbaiki masalah di mana field terkait departemen tidak dapat diedit ([#7462](https://github.com/nocobase/nocobase/pull/7462)) oleh @heziqiang

- **[Workflow: Persetujuan]** Memperbaiki masalah izin saat mendapatkan `approvalRecords.reassignee` karena perubahan `RemoteSelect` oleh @mytharcher
