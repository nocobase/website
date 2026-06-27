---
title: "NocoBase v2.0.0-alpha.29: Memperbaiki urutan middleware dari `resourceManager`"
description: "Catatan Rilis v2.0.0-alpha.29"
---

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana variabel bidang asosiasi dalam formulir saat ini tidak dapat diidentifikasi dengan benar, memastikan pemrosesan data yang akurat dalam formulir. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) oleh @gchust

  - Memperbaiki masalah di mana menetapkan array sebagai nilai atau nilai default ke bidang "toOne" menyebabkan kesalahan. Ini memastikan penanganan hasil resolusi variabel yang tepat, meningkatkan stabilitas dan akurasi sistem. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) oleh @gchust

- **[Kontrol akses]** Memperbaiki urutan middleware dari `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) oleh @2013xile
