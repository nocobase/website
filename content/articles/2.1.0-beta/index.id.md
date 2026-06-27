---
title: "Mengumumkan NocoBase 2.1-beta"
description: "Peningkatan AI besar: dari integrasi CLI dan pembangunan berbasis AI hingga NocoBase Skills, pengembangan plugin AI, dan AI Employees yang ditingkatkan—mencakup seluruh siklus hidup membangun, memperluas, dan mengoperasikan sistem bisnis. Bangun dan jalankan sistem bisnis nyata lebih cepat dengan AI."
---

Dokumen ini berlaku untuk NocoBase 2.1.0-beta.24 dan yang lebih baru.

Ini adalah peningkatan besar **yang berpusat pada kemampuan AI**. Rilis ini memungkinkan Anda membawa AI Agent ke dalam NocoBase — mencakup integrasi CLI, pembangunan berbantuan AI, AI Employees yang ditingkatkan, dan plugin pengembangan AI — menjangkau seluruh alur mulai dari orientasi lingkungan hingga pembangunan sistem dan kolaborasi bisnis. Kami juga terus melengkapi dukungan halaman V2 dan kemampuan inti.

## Apa yang Baru

### NocoBase CLI menjadi titik masuk resmi untuk AI Agent

Dalam rilis ini, NocoBase CLI (`nb`) adalah titik masuk inti bagi AI Agent untuk terhubung ke NocoBase.

CLI digunakan untuk menginisialisasi, menghubungkan, dan mengelola aplikasi NocoBase di ruang kerja lokal. Ini mencakup dua skenario:

- Terhubung ke aplikasi NocoBase yang sudah ada dan menyimpannya sebagai env CLI
- Menginstal aplikasi NocoBase baru melalui Docker, npm, atau Git, lalu menyimpannya sebagai env CLI

![Wizard visual NocoBase CLI](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

Apakah Anda ingin menyambungkan AI ke sistem yang sudah ada atau membuat aplikasi baru dari awal, Anda dapat menangani inisialisasi dan manajemen berkelanjutan melalui CLI.

Untuk tim, CLI menyediakan titik masuk standar yang dapat dipahami dan dioperasikan oleh AI Agent — inisialisasi lingkungan, konfigurasi koneksi, dan manajemen runtime semuanya berbagi alur yang sama.

Dokumentasi terkait:

- [Panduan integrasi AI Agent](https://docs.nocobase.com/ai/quick-start)
- [Referensi perintah NocoBase CLI](https://docs.nocobase.com/api/cli/)

### Pembangunan berbantuan AI: ganti konfigurasi manual dengan percakapan

Pembangunan berbantuan AI adalah salah satu pengalaman inti dalam rilis ini. Anda dapat mendeskripsikan kebutuhan bisnis Anda dalam bahasa alami, dan AI membantu menyelesaikan pemodelan data, konfigurasi halaman, pengaturan izin, dan orkestrasi alur kerja.

Dibandingkan dengan pembangunan low-code tradisional, pembangunan berbantuan AI memiliki beberapa keunggulan yang jelas:

- Hambatan masuk yang lebih rendah — Anda tidak perlu terbiasa dengan setiap konsep konfigurasi di awal
- Jalur yang lebih pendek dari deskripsi kebutuhan ke prototipe yang berfungsi
- Data, UI, dan konfigurasi alur kerja dapat diselesaikan oleh AI secara berkelanjutan

Contohnya: "rancang model data CRM untuk saya", "buat halaman manajemen pelanggan untuk saya", atau "orkestrasi alur kerja yang secara otomatis mengurangi stok setelah pesanan dibuat" — semua ini dapat ditangani oleh AI dalam lingkup kemampuan NocoBase.

Dokumentasi terkait:

- [Mulai cepat pembangunan berbantuan AI](https://docs.nocobase.com/ai-builder/)

### NocoBase Skills mencakup seluruh alur pembangunan

Untuk membantu AI benar-benar memahami sistem konfigurasi NocoBase, rilis ini menyertakan serangkaian paket pengetahuan domain yang dapat diinstal ke dalam AI Agent — NocoBase Skills.

Skills adalah pembungkus pengetahuan dan operasi standar yang diatur di sekitar domain kemampuan utama NocoBase, membantu AI lebih akurat memahami model objek, struktur konfigurasi, dan batasan eksekusi.

Kami saat ini menyediakan 8 Skills yang mencakup seluruh alur pembangunan:

- [Manajemen lingkungan](https://docs.nocobase.com/ai-builder/env-bootstrap) — pemeriksaan lingkungan, instalasi/deploy, upgrade, dan pemecahan masalah
- [Pemodelan data](https://docs.nocobase.com/ai-builder/data-modeling) — buat dan kelola tabel, bidang, dan relasi
- [Pembangunan UI](https://docs.nocobase.com/ai-builder/ui-builder) — buat dan edit halaman, blok, popup, dan reaksi interaksi
- [Manajemen alur kerja](https://docs.nocobase.com/ai-builder/workflow) — buat, edit, aktifkan, dan diagnosa alur kerja
- [Konfigurasi izin](https://docs.nocobase.com/ai-builder/acl) — kelola peran, kebijakan izin, pengikatan pengguna, dan penilaian risiko
- [Solusi](https://docs.nocobase.com/ai-builder/dsl-reconciler) — bangun massal seluruh sistem bisnis dari YAML (masih dalam beta, dengan stabilitas terbatas)
- [Manajemen plugin](https://docs.nocobase.com/ai-builder/plugin-manage) — lihat, aktifkan, dan nonaktifkan plugin
- [Manajemen publikasi](https://docs.nocobase.com/ai-builder/publish) — publikasi lintas lingkungan, backup/restore, dan migrasi

Dengan Skills, AI dapat lebih akurat memahami sistem konfigurasi NocoBase dan memberikan bantuan yang lebih cerdas saat membangun dan mengelola sistem.

**Catatan**: NocoBase Skills masih terus ditingkatkan secara aktif. NocoBase Skills juga diinstal secara otomatis saat Anda menginstal dan menginisialisasi NocoBase CLI, jadi dalam banyak kasus Anda tidak perlu menginstalnya secara terpisah.

Dokumentasi terkait:

- [NocoBase Skills](https://github.com/nocobase/skills)

### Plugin pengembangan AI

Rilis ini mengisi kemampuan dasar yang diperlukan untuk pengembangan plugin AI, sehingga AI dapat berpartisipasi tidak hanya dalam pembangunan aplikasi tetapi juga dalam pengembangan plugin kustom.

Ini muncul dalam tiga area utama:

- Pipeline build `rsbuild/rspack` yang terpadu, menggabungkan pengembangan plugin dan sistem build frontend
- Kemampuan `client-v2` dan sistem routing `/v2/` yang ditujukan untuk pengembangan AI, mempersiapkan pengembangan plugin klien generasi berikutnya
- Skills pengembangan plugin AI yang membantu AI lebih memahami struktur plugin, organisasi kode, dan pola implementasi

Persiapan seputar `client-v2` meliputi:

- `@nocobase/app` mengekspos entri `client-v2`
- Kernel mengirimkan paket `@nocobase/client-v2` dengan komponen dasar, utilitas, dan definisi tipe
- Setiap plugin mendapatkan direktori `/src/client-v2`
- Rute baru `/v2/` ditambahkan
- Kernel secara bertahap bermigrasi ke V2
- Plugin secara bertahap bermigrasi ke V2

Pipeline build yang terpadu menurunkan biaya pengembangan dan debugging plugin frontend. Peluncuran bertahap `client-v2` juga memberi AI struktur target yang lebih stabil untuk menghasilkan dan memelihara kode plugin.

Dalam praktiknya: Anda dapat mendeskripsikan kebutuhan plugin dalam bahasa alami, dan AI membantu menghasilkan kode frontend dan backend, tabel data, API, konfigurasi izin, dan konten i18n.

**Catatan**: Pengembangan plugin AI hanya untuk plugin baru bergaya `client-v2`. Kami akan menindaklanjuti dengan dokumentasi migrasi dan Skills untuk memindahkan plugin dari `client-v1` ke `client-v2`, untuk membantu Anda membawa plugin yang ada ke dalam sistem baru.

Dokumentasi terkait:

- [Mulai cepat plugin pengembangan AI](https://docs.nocobase.com/ai-dev/)
- [Pengembangan plugin](https://docs.nocobase.com/plugin-development/)

### Peningkatan AI Employees

Pembangunan berbantuan AI menjawab "bagaimana saya menggunakan AI untuk membangun sistem"; AI Employees menjawab "bagaimana saya membiarkan AI bekerja di dalam sistem untuk memecahkan masalah bisnis yang konkret".

AI Employees sudah ada di rilis sebelumnya, tetapi dalam rilis ini kemampuan terkait telah ditingkatkan dan kernel AI telah dilengkapi:

- [Dukungan MCP](https://docs.nocobase.com/ai-employees/features/mcp)
- [Atlas AI Employee baru](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas), berperan sebagai pemimpin tim dan mengirim AI Employee lain untuk menyelesaikan tugas berdasarkan niat pengguna
- [Node alur kerja AI Employee](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [Alat pencarian web berbasis LLM](https://docs.nocobase.com/ai-employees/features/web-search)
- [Alat kueri agregasi baru dan alat pembuatan laporan](https://docs.nocobase.com/ai-employees/scenarios/business-report) untuk menghasilkan laporan analisis bisnis

Peningkatan ini membawa kemampuan ekstensibilitas, orkestrasi, dan eksekusi AI Employee di dalam sistem bisnis ke tingkat berikutnya. AI Employee dapat memahami konteks bisnis saat ini, memanggil skill untuk menjalankan tugas tertentu, berpartisipasi dalam alur kerja otomatis, dan menggabungkan informasi eksternal untuk memberikan analisis dan keluaran.

Jika tim Anda perlu menghadirkan kolaborasi cerdas, analisis otomatis, dan eksekusi tugas ke dalam sistem bisnis Anda, ini juga merupakan salah satu arah yang paling menonjol dalam pembaruan ini.

Dokumentasi terkait:

- [AI Employees](https://docs.nocobase.com/ai-employees/)

### Adaptasi 2.0 dan fitur baru

Di luar AI, rilis ini terus memigrasikan modul fitur utama ke 2.0, sambil juga meluncurkan fitur baru untuk skenario bisnis nyata.

Fitur baru

- [Bidang tanda tangan tulisan tangan](https://docs.nocobase.com/data-sources/field-signature/)
- [Aksi Item JS](https://docs.nocobase.com/interface-builder/actions/types/js-item)

Adaptasi 2.0

- [Permintaan kustom](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [Blok filter pohon](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [Blok kalender](https://docs.nocobase.com/data-sources/calendar/)
- [Blok Kanban](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)
