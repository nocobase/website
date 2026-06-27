---
title: "NocoBase v1.6.0-alpha.8: Menambahkan entri global tetap untuk semua jenis tugas alur kerja"
description: "Catatan Rilis v1.6.0-alpha.8"
---

### 🎉 Fitur Baru

- **[Workflow: Node manual]** Menambahkan entri global tetap untuk semua jenis tugas workflow ([#5858](https://github.com/nocobase/nocobase/pull/5858)) oleh @mytharcher

- **[Kebijakan kata sandi]** Menambahkan plugin baru: Kebijakan kata sandi, digunakan untuk mengatur aturan kata sandi dan kebijakan penguncian login untuk semua pengguna oleh @2013xile
Referensi: [Kebijakan kata sandi dan penguncian pengguna](https://docs.nocobase.com/handbook/password-policy)

### 🚀 Peningkatan

- **[Klien]** Menambahkan kata kunci filter "Keamanan" untuk manajer plugin ([#5977](https://github.com/nocobase/nocobase/pull/5977)) oleh @2013xile

- **[Workflow: Event aksi kustom]** Mengubah API untuk eksekusi manual oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Workflow]** Memperbaiki `onChange` yang tidak berfungsi di komponen `WorkflowVariableWrapper` ([#5964](https://github.com/nocobase/nocobase/pull/5964)) oleh @mytharcher
