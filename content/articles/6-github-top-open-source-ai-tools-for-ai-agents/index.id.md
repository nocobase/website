---
title: "6 Alat AI Open Source Teratas Berdasarkan Bintang GitHub untuk Agen AI yang Lebih Kuat"
description: "Artikel ini mengulas enam alat AI open source dengan bintang terbanyak dari GitHub ai-tools dan menjelaskan bagaimana mereka memperkuat Agen AI di berbagai bidang seperti otomatisasi browser, pengkodean, prompt, dan sistem bisnis."
---

## Pendahuluan

Selama setahun terakhir, jumlah alat AI sumber terbuka telah berkembang pesat. Di GitHub, topik [ai-tools](https://github.com/topics/ai-tools) telah mengumpulkan sejumlah besar proyek.

![Alat AI.png](https://static-docs.nocobase.com/AI%20tools-xtlp52.png)

Kami menemukan bahwa banyak alat AI sumber terbuka populer dirancang untuk meningkatkan kemampuan sistem AI yang sudah ada dan AI Agent.

Mereka bekerja seperti penguat kemampuan untuk AI Agent: beberapa membantu Agent mengoperasikan halaman web, beberapa membuat Agent lebih baik dalam menulis kode, beberapa memungkinkan Agent memanggil alat eksternal, beberapa membuat keluaran AI lebih stabil, dan beberapa membantu AI bekerja di dalam sistem bisnis nyata.

Jadi, dalam artikel ini, kita mulai dari proyek sumber terbuka paling populer di bawah topik `ai-tools` GitHub. Berdasarkan GitHub Stars, kita akan melihat 6 alat AI sumber terbuka paling populer saat ini dan menjelaskan kemampuan AI mana yang mereka tingkatkan.

---

💬 Hei, Anda sedang membaca blog NocoBase. NocoBase adalah platform pengembangan tanpa kode/rendah kode bertenaga AI paling ekstensibel untuk membangun aplikasi perusahaan, alat internal, dan semua jenis sistem. Sepenuhnya dihosting sendiri, berbasis plugin, dan ramah pengembang. → [Jelajahi NocoBase di GitHub](https://github.com/nocobase/nocobase)

---

## Bagaimana kami memilih alat-alat ini?

Untuk menjaga artikel ini tetap objektif, kami memilih alat berdasarkan data GitHub yang tersedia untuk umum.

Pemilihan ini terutama mengikuti aturan berikut:

1. **Sumber data:** GitHub Topics `ai-tools`
2. **Metode pengurutan:** Berdasarkan GitHub Stars, ditampilkan dari peringkat 6 hingga peringkat 1


| Peringkat | Alat             | GitHub Stars | Arah utama                            | Paling cocok untuk                                                                              |
| --------- | ---------------- | ------------ | ------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 6         | NocoBase         | 22,6k        | Sistem bisnis tanpa kode bertenaga AI | Membangun sistem internal perusahaan seperti CRM, persetujuan, tiket, dan backend operasional   |
| 5         | OpenCLI          | 23,4k        | Antarmuka alat AI / CLI               | Mengemas situs web, alat lokal, atau sesi browser menjadi perintah yang dapat dipanggil AI Agent |
| 4         | OpenClaude       | 28,3k        | AI Coding Agent                       | Menggunakan AI Coding Agent multi-model di terminal                                             |
| 3         | prompt-optimizer | 30,3k        | Optimasi prompt                       | Mengoptimalkan, menguji, dan menggunakan kembali prompt                                         |
| 2         | cc-switch        | 90k          | Manajemen alat Coding AI              | Mengelola konfigurasi untuk alat Coding AI seperti Claude Code, Codex, dan OpenCode             |
| 1         | browser-use      | 96,8k        | Otomatisasi browser / AI Agent        | Membiarkan AI mengoperasikan halaman web dan menyelesaikan tugas browser                        |

Data dikumpulkan pada 3 Juni 2026. Karena GitHub Stars berubah seiring waktu, angka sebenarnya mungkin sedikit berbeda saat Anda membaca artikel ini.

## NocoBase

**Situs Web**: [https://www.nocobase.com/](https://www.nocobase.com/)

**Demo Online**: [demo.nocobase.com/new](https://demo.nocobase.com/new)

**Dokumentasi**: [docs.nocobase.com](https://docs.nocobase.com)

**GitHub**: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Stars**: 22,6k

**Pertama kali dirilis sebagai sumber terbuka**: 2021

**Lisensi**: Apache-2.0

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-ovnjsn.png)

### Pengenalan proyek

NocoBase adalah platform tanpa kode bertenaga AI sumber terbuka untuk membangun sistem bisnis internal perusahaan dengan cepat.

Di NocoBase, AI dapat berpartisipasi langsung dalam pembangunan aplikasi. Anda dapat mendeskripsikan kebutuhan bisnis Anda dalam bahasa alami dan membiarkan AI membantu membuat model data, mengonfigurasi halaman, mengatur alur kerja, dan bahkan membantu pengembangan plugin.

Ini berarti AI tidak sekadar menghasilkan tumpukan kode dari awal. Sebaliknya, ia membangun sistem di dalam platform yang sudah memiliki model data, halaman, izin, alur kerja, dan sistem plugin. Setelah dibuat, pengguna dapat terus memeriksa, menyesuaikan, dan memelihara sistem melalui antarmuka tanpa kode NocoBase.

### Masalah apa yang dipecahkannya?

"Bagaimana AI dapat membangun sistem bisnis di dalam platform terstruktur, alih-alih menghasilkan kode sementara di proyek kosong?"

Di NocoBase, AI dapat bekerja dengan kemampuan sistem bisnis platform yang ada, termasuk model data, pembuatan halaman, kontrol izin, alur kerja, ekstensi plugin, dan AI Employees. Ini memungkinkan AI mempercepat pembangunan sistem, sementara manusia mengonfirmasi logika bisnis, menyesuaikan detail, dan mengontrol batasan.

Untuk sistem internal perusahaan, pendekatan ini lebih andal. Ini mempertahankan efisiensi AI sambil menghindari masalah pemeliharaan yang sering muncul saat menghasilkan kode sepenuhnya dari awal.

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-4fun82.png)

### Cara terbaik menggunakannya

NocoBase paling cocok untuk membangun sistem internal perusahaan dengan struktur yang jelas dan kebutuhan iterasi jangka panjang.

Cara yang lebih baik untuk menggunakannya adalah:

1. **Mulai dengan skenario bisnis tertentu**

Jangan mulai dengan meminta AI untuk "membangunkan saya ERP yang lengkap." Pendekatan yang lebih baik adalah memulai dengan skenario tertentu, seperti manajemen pelanggan, permintaan pembelian, buku besar peralatan, tiket purna jual, persetujuan kontrak, atau dasbor proyek.

2. **Gunakan bahasa alami untuk membiarkan AI membangun fondasi sistem**

Anda dapat terlebih dahulu mendeskripsikan objek bisnis, hubungan bidang, persyaratan halaman, dan aturan alur kerja, lalu biarkan AI membuat model data, mengonfigurasi halaman, dan mengatur alur kerja di NocoBase. Misalnya:

> Bantu saya membangun sistem manajemen pelanggan, termasuk pelanggan, kontak, peluang, dan catatan tindak lanjut. Seorang pelanggan dapat ditautkan ke beberapa kontak dan peluang. Setiap peluang harus mencakup tahap, jumlah, perkiraan tanggal penutupan, dan pemilik.

3. **Periksa dan sesuaikan di antarmuka tanpa kode**

Setelah AI menghasilkan sistem, jangan langsung menganggapnya sebagai versi final. Masuk ke antarmuka visual NocoBase dan periksa apakah tabel data, bidang, hubungan, tata letak halaman, tombol tindakan, dan konfigurasi izin sesuai dengan kebutuhan bisnis nyata.

4. **Konfigurasikan izin dan batasan alur kerja**

Untuk sistem internal, izin dan alur kerja tidak opsional. Peran yang berbeda harus melihat data yang berbeda dan melakukan tindakan yang berbeda. Alur kerja yang melibatkan persetujuan, notifikasi, perubahan status, dan validasi data juga harus memiliki aturan yang jelas.

5. **Biarkan AI berpartisipasi dalam operasi sistem**

Setelah sistem dibangun, AI dapat terus berpartisipasi dalam operasi bisnis. Misalnya, AI Employees dapat membantu analisis data, pembuatan laporan, penerjemahan, dukungan keputusan, pengisian formulir, pemrosesan node alur kerja, dan banyak lagi.

6. **Terus lakukan iterasi, jangan hanya menghasilkan sekali**

Kekuatan NocoBase bukanlah "menghasilkan semuanya sekaligus." Setelah AI membangun sistem, tim masih dapat menyesuaikan bidang, halaman, alur kerja, dan izin dengan cara tanpa kode. Ini membuatnya lebih cocok untuk perubahan jangka panjang dari sistem bisnis nyata.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-uxqqph.png)

### Skenario yang cocok

NocoBase cocok untuk skenario berikut:

* Sistem manajemen pelanggan CRM
* Sistem persetujuan
* Sistem tiket
* Sistem manajemen proyek
* Modul ERP ringan seperti pengadaan, inventaris, dan pesanan
* Backend operasional dan backend admin
* Manajemen peralatan, manajemen aset, dan manajemen arsip
* Tindak lanjut pelanggan dan manajemen layanan
* Sistem internal perusahaan yang memerlukan penyebaran pribadi
* Aplikasi bisnis yang memerlukan izin, alur kerja, model data, dan iterasi berkelanjutan
* Tim yang ingin membangun sistem dengan AI dan tanpa kode bersama-sama

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-ex094c.png)

### Batasan penggunaan

Kekuatan inti NocoBase adalah pembangunan sistem bisnis, tetapi tidak cocok untuk setiap skenario alat AI.

Batasan penting meliputi:

* **Tidak ideal untuk halaman web satu kali:** Jika Anda hanya ingin membuat halaman tampilan sederhana, halaman kampanye, atau demo satu kali dengan cepat, NocoBase bukanlah pilihan yang paling langsung. Ini lebih cocok untuk sistem bisnis dengan model data, izin, alur kerja, dan kebutuhan pemeliharaan jangka panjang.
* **Bukan pengganti penuh untuk kerangka kerja pengembangan profesional:** Jika Anda memerlukan interaksi frontend yang sangat khusus, produk berorientasi konsumen yang kompleks, atau aplikasi internet untuk basis pengguna massal, kerangka kerja pengembangan tradisional masih lebih cocok.
* **Pemodelan bisnis masih diperlukan di awal:** NocoBase dapat mempercepat pembangunan sistem, tetapi pengguna masih perlu memahami objek bisnis, hubungan data, dan batasan alur kerja mereka. Jika model data dirancang dengan buruk, sistem akan menjadi lebih kompleks di kemudian hari.
* **Kustomisasi kompleks masih memerlukan keterampilan pengembangan:** Meskipun banyak fungsi dapat dikonfigurasi tanpa kode, pengembangan plugin yang dalam, integrasi kompleks, dan logika bisnis khusus masih memerlukan pengembang.

Lebih tepatnya, NocoBase cocok untuk membangun sistem bisnis yang dapat dipelihara, diperluas, dan dikelola. Ini tidak dimaksudkan untuk menggantikan semua alat AI. Sebaliknya, ini menyediakan fondasi sistem yang stabil bagi AI untuk memasuki alur kerja bisnis nyata.

### Prompt Instalasi

Anda dapat menyalin Prompt berikut ke Claude Code, Cursor, Codex, OpenCode, atau AI Coding Agent lainnya:

```text
Tolong bantu saya menginstal dan menginisialisasi NocoBase secara lokal.

Persyaratan:
1. Buka repositori GitHub resmi:
   https://github.com/nocobase/nocobase

2. Baca README resmi dan ikuti panduan memulai cepat AI Agent Access.

3. Periksa apakah Node.js dan npm sudah terinstal.

4. Instal CLI NocoBase versi beta:
   npm install -g @nocobase/cli@beta

5. Buat direktori proyek baru:
   mkdir my-nocobase && cd my-nocobase

6. Inisialisasi NocoBase dengan UI:
   nb init --ui

7. Setelah inisialisasi, jelaskan file dan direktori apa yang dibuat.

8. Mulai atau mulai ulang sesi agen AI di dalam direktori ini.
   Contoh:
   cd my-nocobase && codex
```

## OpenCLI

**Situs Web**: [https://opencli.info/](https://opencli.info/)

**GitHub**: [https://github.com/jackwener/OpenCLI](https://github.com/jackwener/OpenCLI)

**GitHub Stars**: 23,4k

**Pertama kali dirilis sebagai sumber terbuka**: Maret 2026

**Lisensi**: Apache-2.0

![OpenCLI.png](https://static-docs.nocobase.com/OpenCLI-nkru1y.png)

### Pengenalan proyek

OpenCLI adalah proyek sumber terbuka yang mengonversi situs web, sesi browser, aplikasi Electron, dan alat lokal menjadi antarmuka CLI. Ini dapat mengubah alat berbasis GUI menjadi antarmuka baris perintah yang lebih dapat diprediksi, sehingga manusia dan AI Agent dapat menyelesaikan tindakan melalui perintah.

Misalnya, ini dapat mengemas kemampuan situs web ke dalam perintah:

```text
opencli hackernews top --limit 5
opencli bilibili hot --limit 5
```

Ini juga dapat membiarkan AI Agent menggunakan `opencli browser` untuk mengoperasikan halaman Chrome tempat pengguna sudah masuk, menyelesaikan tindakan seperti membuka halaman web, membaca halaman, mengklik tombol, mengisi formulir, dan mengekstrak data.

### Skenario yang cocok

OpenCLI cocok untuk skenario berikut:

* Mengubah kemampuan situs web umum menjadi perintah CLI
* Membiarkan AI Agent mengoperasikan halaman Chrome yang sudah masuk
* Menyediakan antarmuka alat eksternal yang lebih stabil untuk Agent
* Mengemas operasi untuk platform konten, platform komunitas, situs pekerjaan, dan platform sosial
* Mengekstrak data terstruktur dari halaman web
* Mendaftarkan alat CLI lokal untuk digunakan Agent
* Membuat adaptor untuk tugas web berulang
* Membiarkan alat seperti Claude Code dan Cursor memanggil kemampuan situs web eksternal

### Prompt Instalasi

Anda dapat menyalin Prompt berikut ke Claude Code, Cursor, Codex, atau AI Coding Agent lainnya:

```text
Tolong bantu saya menginstal dan mengonfigurasi OpenCLI secara lokal.

Persyaratan:
1. Periksa apakah Node.js >= 20 sudah terinstal.
2. Instal OpenCLI menggunakan perintah resmi:
   npm install -g @jackwener/opencli

3. Verifikasi instalasi:
   opencli --version

4. Instal ekstensi OpenCLI Browser Bridge untuk Chrome.
   Utamakan instalasi Chrome Web Store jika tersedia.
   Jika tidak, pandu saya untuk menginstalnya secara manual dari GitHub Releases.

5. Jalankan pemeriksaan lingkungan:
   opencli doctor

6. Jika saya memiliki beberapa profil Chrome, bantu saya mendaftar dan mengganti namanya:
   opencli profile list
   opencli profile rename  work
   opencli profile use work

7. Jalankan perintah tes sederhana:
   opencli list
   opencli hackernews top --limit 5

8. Jelaskan apa yang dilakukan setiap langkah.

9. Jangan mengakses halaman pribadi, mengirim pesan, memublikasikan konten, menghapus data, atau mengirimkan formulir selama pengujian awal.

10. Setelah pengaturan, jelaskan:
   - Bagaimana OpenCLI terhubung ke Chrome
   - Di mana OpenCLI menyimpan konfigurasi lokal
   - Cara menggunakannya dengan aman dengan agen AI
   - Tindakan apa yang harus memerlukan konfirmasi manual
```

## OpenClaude

**Situs Web**: [https://openclaude.gitlawb.com/](https://openclaude.gitlawb.com/)

**GitHub**: [https://github.com/Gitlawb/openclaude](https://github.com/Gitlawb/openclaude)

**GitHub Stars**: 28,3k

**Pertama kali dirilis sebagai sumber terbuka**: Maret 2026

**Lisensi**: Lisensi khusus

### Pengenalan proyek

OpenClaude adalah CLI AI Coding Agent sumber terbuka. Ini memungkinkan pengembang menggunakan model dan penyedia layanan yang berbeda di terminal untuk menyelesaikan tugas terkait kode, alih-alih terkunci dalam satu model atau alat tertutup.

OpenClaude mendukung beberapa backend model, termasuk API yang kompatibel dengan OpenAI, Gemini, GitHub Models, Codex, Ollama, Atomic Chat, dan banyak lagi. Ini juga mendukung kemampuan agen pengkodean umum, seperti membaca file, memodifikasi file, menjalankan perintah Bash, mencari kode, memanggil alat, menggunakan MCP, menjalankan perintah garis miring, dan keluaran streaming.

![OpenClaude.png](https://static-docs.nocobase.com/OpenClaude-6f81ig.png)

### Cara terbaik menggunakannya

OpenClaude paling cocok untuk pengembang yang sudah terbiasa dengan pengembangan berbasis terminal dan menginginkan lebih banyak fleksibilitas saat menggunakan model yang berbeda.

**Skenario yang cocok**

* Menggunakan AI Coding Agent di terminal
* Menggunakan model yang berbeda untuk menangani tugas pengkodean
* Membiarkan AI memahami dan memodifikasi basis kode lokal
* Menggunakan AI untuk menghasilkan pengujian, dokumentasi, dan saran refactoring
* Menguji backend yang berbeda seperti API yang kompatibel dengan OpenAI, Gemini, Codex, dan Ollama
* Menggabungkan MCP, Bash, alat file, dan pencarian kode
* Membangun alur kerja pengkodean AI yang lebih terbuka
* Membandingkan kinerja berbagai model pada tugas pengkodean

Lebih tepatnya, OpenClaude cocok sebagai ruang kerja pengkodean AI untuk pengembang. Ini membantu Anda menggunakan model yang berbeda secara lebih fleksibel untuk tugas pengkodean, tetapi masih memerlukan pengembang untuk memberikan tujuan yang jelas, meninjau hasil, dan mengontrol risiko eksekusi.

### Prompt Instalasi

Anda dapat menyalin Prompt berikut ke Claude Code, Cursor, Codex, atau AI Coding Agent lainnya:

```text
Tolong bantu saya menginstal dan mengonfigurasi OpenClaude secara lokal.

Persyaratan:
1. Periksa apakah Node.js dan npm sudah terinstal.
2. Instal OpenClaude secara global menggunakan perintah resmi:
   npm install -g @gitlawb/openclaude@latest

3. Verifikasi instalasi:
   openclaude --version

4. Mulai OpenClaude:
   openclaude

5. Bantu saya mengonfigurasi satu penyedia model.
   Utamakan pengaturan yang kompatibel dengan OpenAI terlebih dahulu.

6. Gunakan variabel lingkungan untuk kunci API.
   Jangan hardcode atau cetak kunci API apa pun.

7. Jika saya ingin menggunakan model lokal, bantu saya periksa apakah Ollama sudah terinstal.
   Jika Ollama tersedia, konfigurasikan OpenClaude dengan:
   OPENAI_BASE_URL=http://localhost:11434/v1
   OPENAI_MODEL=qwen2.5-coder:7b

8. Buat tugas tes kecil:
   - Buka proyek lokal sederhana
   - Minta OpenClaude untuk menjelaskan struktur proyek
   - Minta untuk menyarankan satu peningkatan kecil
   - Jangan izinkan untuk memodifikasi file sampai saya konfirmasi

9. Setelah pengujian, jelaskan:
   - Penyedia mana yang saat ini aktif
   - Di mana konfigurasi disimpan
   - Cara mengganti penyedia nanti
   - Cara meninjau perubahan file dengan aman
```

## Prompt Optimizer

**Situs Web**: [always200.com](https://always200.com)

**GitHub**: [https://github.com/linshenkx/prompt-optimizer](https://github.com/linshenkx/prompt-optimizer)

**GitHub Stars**: 30,3k

**Pertama kali dirilis sebagai sumber terbuka**: Februari 2025

**Lisensi**: Lisensi khusus

![Prompt Optimizer.png](https://static-docs.nocobase.com/Prompt%20Optimizer-zpgvc1.png)

### Pengenalan proyek

Prompt Optimizer adalah alat optimasi prompt sumber terbuka yang membantu pengguna menulis prompt yang lebih jelas, lebih stabil, dan lebih mudah digunakan kembali.

### Cara terbaik menggunakannya

Prompt Optimizer paling cocok untuk kasus penggunaan AI yang frekuensi tinggi, dapat digunakan kembali, dan memiliki persyaratan kualitas keluaran. Ini sangat berguna untuk pembuatan konten, pengembangan aplikasi AI, balasan layanan pelanggan, bantuan pengkodean, pembuatan gambar, penjelasan analisis data, Tanya Jawab basis pengetahuan, dan skenario serupa.

### Prompt Instalasi

Jika Anda hanya ingin mencobanya dengan cepat, Anda dapat langsung menggunakan versi online.

Jika Anda ingin menyebarkannya secara lokal atau menggunakannya secara pribadi, Anda dapat menyalin Prompt berikut ke Claude Code, Cursor, Codex, atau AI Coding Agent lainnya:

```text
Tolong bantu saya menyebarkan Prompt Optimizer secara lokal.

Persyaratan:
1. Buka repositori GitHub resmi:
   https://github.com/linshenkx/prompt-optimizer

2. Baca README resmi dan pilih metode penyebaran lokal yang paling sederhana.

3. Utamakan penyebaran Docker jika Docker sudah terinstal:
   docker run -d -p 8081:80 --restart unless-stopped --name prompt-optimizer linshen/prompt-optimizer

4. Jika Docker tidak terinstal, bantu saya periksa apakah Node.js dan pnpm tersedia, lalu pandu saya melalui pengaturan pengembangan lokal.

5. Setelah penyebaran, buka antarmuka web di:
   http://localhost:8081

6. Bantu saya mengonfigurasi setidaknya satu penyedia model AI, seperti OpenAI, Gemini, DeepSeek, atau API khusus yang kompatibel dengan OpenAI.

7. Jangan mencetak atau melakukan hardcode kunci API apa pun di terminal atau kode sumber.

8. Jelaskan di mana konfigurasi disimpan dan cara memperbarui atau menghapus kunci API nanti.

9. Buat tes sederhana:
   - Masukkan prompt pendek: "Bantu saya menulis email pembaruan produk"
   - Optimalkan
   - Bandingkan prompt asli dan yang dioptimalkan
   - Jelaskan mengapa versi yang dioptimalkan lebih baik atau lebih buruk

10. Pastikan pengaturan akhir dapat digunakan kembali nanti.
```

## CC Switch

**Situs Web**: [https://ccswitch.io](https://ccswitch.io)

**GitHub**: [https://github.com/farion1231/cc-switch](https://github.com/farion1231/cc-switch)

**GitHub Stars**: 90k

**Pertama kali dirilis sebagai sumber terbuka**: Agustus 2025

**Lisensi**: MIT

![CC Switch.png](https://static-docs.nocobase.com/CC%20Switch-1fge76.png)

### Pengenalan proyek

CC Switch adalah alat desktop lintas platform untuk mengelola penyedia model, Kunci API, MCP, prompt, dan konfigurasi Skills secara terpusat di beberapa alat AI Coding / AI CLI.

Ini mendukung alat termasuk Claude Code, Claude Desktop, Codex, Gemini CLI, OpenCode, OpenClaw, dan Hermes.

CC Switch memusatkan konfigurasi yang tersebar ke dalam satu aplikasi desktop, memungkinkan pengembang untuk mengelola dan menggantinya melalui antarmuka grafis alih-alih mengedit file JSON, TOML, atau `.env` secara manual berulang kali.

### Cara terbaik menggunakannya

CC Switch paling cocok untuk pengguna berat alat AI Coding, terutama pengembang yang sudah menggunakan beberapa alat CLI, beberapa penyedia model, atau beberapa Kunci API secara bersamaan.

CC Switch cocok untuk skenario berikut:

* Menggunakan beberapa alat AI Coding secara bersamaan
* Sering beralih antar alat seperti Claude Code, Codex, Gemini CLI, dan OpenCode
* Mengelola beberapa penyedia model dan Kunci API
* Mengurangi risiko mengedit file konfigurasi secara manual
* Mengelola MCP, prompt, dan Skills secara terpusat
* Menyinkronkan konfigurasi alat AI di beberapa perangkat
* Mengelola alur kerja AI Coding melalui antarmuka desktop

### Prompt Instalasi

Anda dapat menyalin Prompt berikut langsung ke Claude Code, Cursor, Codex, atau AI Coding Agent lainnya:

```text
Tolong bantu saya menginstal dan mengonfigurasi CC Switch di mesin lokal saya.

Persyaratan:
1. Deteksi sistem operasi saya: macOS, Windows, atau Linux.
2. Ikuti metode instalasi resmi dari repositori GitHub CC Switch.
3. Jika saya menggunakan macOS, utamakan instalasi melalui Homebrew:
   brew install --cask cc-switch
4. Jika saya menggunakan Windows atau Linux, pandu saya untuk mengunduh penginstal yang benar dari GitHub Releases.
5. Setelah instalasi, bantu saya meluncurkan CC Switch.
6. Periksa apakah alat CLI AI saya yang sudah ada sudah terinstal, seperti Claude Code, Codex, Gemini CLI, OpenCode, atau OpenClaw.
7. Bantu saya mengimpor konfigurasi yang ada jika tersedia.
8. Buat satu konfigurasi Provider pengujian.
9. Jelaskan di mana CC Switch menyimpan data lokal dan cadangannya.
10. Jangan mengekspos atau mencetak kunci API apa pun di keluaran terminal.

Repositori GitHub resmi:
farion1231/cc-switch

Situs web resmi:
ccswitch.io
```

## browser-use

* **Situs web resmi**: [https://browser-use.com/](https://browser-use.com/)
* **GitHub**: [https://github.com/browser-use/browser-use](https://github.com/browser-use/browser-use)
* **GitHub Stars**: 96,8k
* **Pertama kali dirilis sebagai sumber terbuka**: November 2024
* **Lisensi**: MIT

![browser-use1.png](https://static-docs.nocobase.com/browser-use1-b7i8fw.png)

### Pengenalan proyek

browser-use adalah alat sumber terbuka yang memungkinkan AI Agent mengoperasikan browser.

Sebagian besar situs web awalnya dirancang untuk manusia, bukan untuk AI Agent. Jika AI ingin menyelesaikan tugas web, biasanya perlu memahami konten halaman, mengidentifikasi tombol dan bidang input, mengklik elemen, mengisi formulir, menavigasi antar halaman, dan bahkan menangani alur kerja multi-langkah.

browser-use dapat mengubah browser menjadi lingkungan eksekusi untuk AI Agent, memungkinkan AI menyelesaikan tugas di halaman web seperti manusia.

![browser-use2.gif](https://static-docs.nocobase.com/browser-use2-2uuy81.gif)

### Cara terbaik menggunakannya

browser-use **bekerja paling baik sebagai bagian dari perangkat alat AI Agent**, bukan sebagai produk mandiri yang lengkap.

Cara yang lebih baik untuk menggunakannya adalah:

1. **Tentukan tugas web yang sangat spesifik terlebih dahulu**

Misalnya: masuk ke sistem backend, temukan pesanan dari 7 hari terakhir, dan ekspor hasilnya.

2. **Biarkan AI Agent menggunakan browser-use untuk mengoperasikan web**

browser-use menangani pembukaan halaman, mengidentifikasi elemen, mengklik tombol, mengisi konten, dan membaca status halaman web.

3. **Tambahkan batasan dan pemeriksaan untuk alur kerja utama**

Misalnya, jangan biarkan AI mengirimkan pembayaran, menghapus data, atau memodifikasi konfigurasi lingkungan produksi tanpa kontrol. Untuk tindakan berisiko tinggi, sebaiknya tambahkan konfirmasi manusia.

4. **Ubah skenario stabil menjadi alur kerja otomatis**

Untuk tugas web yang sangat berulang, alur kerja yang berhasil dapat disimpan dan kemudian dioptimalkan secara bertahap.

5. **Utamakan stabilitas browser di lingkungan produksi**

Jika suatu tugas melibatkan konkurensi tinggi, proxy, CAPTCHA, sidik jari browser, atau manajemen status masuk, Anda harus mempertimbangkan tidak hanya eksekusi lokal tetapi juga browser cloud atau lingkungan yang dihosting.

**browser-use cocok untuk skenario berikut:**

* Otomatisasi browser AI Agent
* Pengisian formulir web
* Operasi otomatis sistem backend
* Pengumpulan data dan kueri informasi
* Simulasi operasi web manusia
* Menguji kemampuan AI Agent untuk melakukan tugas di web
* Menambahkan kemampuan tindakan browser ke Agent yang ada

### Prompt Instalasi

Anda dapat menyalin Prompt berikut langsung ke Claude Code, Cursor, Codex, atau AI Coding Agent lainnya:

```text
Tolong bantu saya menginstal dan menjalankan browser-use secara lokal.

Persyaratan:
1. Periksa apakah Python 3.11 atau lebih tinggi sudah terinstal.
2. Gunakan uv untuk membuat lingkungan Python yang bersih.
3. Instal browser-use.
4. Instal Chromium jika belum tersedia.
5. Buat skrip contoh sederhana yang menggunakan browser-use untuk membuka halaman web dan menyelesaikan tugas dasar.
6. Gunakan variabel lingkungan untuk kunci API LLM. Jangan melakukan hardcode kunci API di dalam skrip.
7. Tambahkan komentar yang jelas sehingga saya dapat memahami setiap langkah.
8. Setelah instalasi, jalankan contoh dan bantu saya memverifikasi apakah browser-use berfungsi dengan benar.

Repositori GitHub resmi:
browser-use/browser-use

Harap ikuti panduan memulai cepat resmi sebanyak mungkin.
```

Jika Anda ingin menguji tugas sederhana secara langsung, Anda dapat mengubah tugas menjadi:

```text
Buat contoh browser-use yang membuka repositori GitHub browser-use, temukan jumlah bintang GitHub saat ini, dan cetak hasilnya.
```

## Tanya Jawab

1. **Apakah alat AI sumber terbuka ini cocok untuk penggunaan perusahaan?**

Itu tergantung pada alat spesifik dan kasus penggunaan.

Alat seperti browser-use dan OpenCLI lebih cocok untuk otomatisasi Agent dan pemanggilan alat eksternal. NocoBase lebih cocok untuk membangun sistem bisnis internal perusahaan.

2. **Apa perbedaan antara browser-use dan OpenCLI?**

Keduanya dapat meningkatkan kemampuan AI Agent untuk mengoperasikan halaman web dan alat eksternal, tetapi mereka melakukannya dengan cara yang berbeda.

browser-use lebih seperti membiarkan AI langsung mengoperasikan browser. AI membuka halaman web, membaca halaman, mengklik tombol, mengisi formulir, dan memutuskan langkah selanjutnya berdasarkan status halaman.

OpenCLI lebih fokus pada pengemasan situs web, alat lokal, atau sesi browser menjadi perintah CLI. Ini memungkinkan AI Agent memanggil alat melalui perintah alih-alih memulai dari antarmuka halaman web setiap saat.

3. **Jika saya ingin membangun sistem internal perusahaan, jenis alat AI apa yang harus saya pilih?**

Jika tujuan Anda adalah membangun sistem internal perusahaan seperti CRM, sistem persetujuan, sistem tiket, manajemen proyek, dan backend operasional, alat AI Coding saja biasanya tidak cukup.

Sistem ini seringkali memerlukan model data, kontrol izin, konfigurasi halaman, alur kerja, penyebaran pribadi, dan pemeliharaan berkelanjutan. AI dapat membantu mempercepat pembangunan sistem, tetapi sistem itu sendiri masih membutuhkan fondasi aplikasi bisnis yang stabil.

Di sinilah platform seperti NocoBase cocok. Ini tidak hanya membiarkan AI menghasilkan kode. Sebaliknya, ini memungkinkan AI membangun sistem bisnis yang dapat dipelihara berdasarkan model data, halaman, izin, dan alur kerja.

## Ringkasan

Di masa lalu, kami lebih memperhatikan "apa yang dapat dihasilkan AI." Tetapi dalam alur kerja nyata, pertanyaan yang lebih penting adalah: Dapatkah AI mengoperasikan alat nyata? Dapatkah ia memanggil sistem eksternal? Dapatkah ia memasuki alur kerja bisnis? Dapatkah hasil yang dihasilkan terus dipelihara?

Inilah tepatnya nilai dari alat AI sumber terbuka ini.

**Bacaan terkait**

* [5 Alat Internal Sumber Terbuka untuk Digunakan dengan Hermes Agent](https://www.nocobase.com/en/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)
* [OpenClaw dan 5 Alat Sumber Terbuka untuk Memantau Alur Kerja Bisnis](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [Alat Sumber Terbuka Apa yang Bekerja Baik dengan OpenCode? 5 Proyek untuk Dicoba](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [Membangun Alat Internal dengan Codex: 6 Proyek Sumber Terbuka untuk Pengembang](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Setelah Claude Code: 6 Alat Sumber Terbuka yang Harus Anda Ketahui](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [10 Alat AI dan Tanpa Kode Sumber Terbuka Teratas untuk Pengembangan Perangkat Lunak Perusahaan](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 Platform AI Agent Sumber Terbuka untuk Membangun Alat Internal](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [CRM Hosting Mandiri Kelas Perusahaan Terbaik dengan Dukungan RBAC, AI, dan Open API](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 Alat Sumber Terbuka Terbaik untuk Mengganti Middleware Integrasi Kustom](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Ganti Excel dengan NocoBase atau Airtable? Perbandingan Biaya per Biaya](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Cara Membangun Aplikasi Web dengan Cepat dari Data Excel](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [Bukan Hanya PostgreSQL: Membandingkan 5 Platform Tanpa Kode/Rendah Kode dengan Dukungan Basis Data Eksternal](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
