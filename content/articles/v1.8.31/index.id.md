---
title: "NocoBase v1.8.31: Perbaikan Bug"
description: "Catatan Rilis v1.8.31"
---

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki error yang muncul ketika operator `$in` menemukan nilai `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki masalah batas waktu transaksi yang disebabkan oleh transaksi yang tidak dikembalikan dengan benar ketika terjadi error database setelah pengajuan persetujuan oleh @mytharcher

  - Memperbaiki masalah di mana variabel tidak diuraikan dalam formulir pengajuan persetujuan oleh @mytharcher
