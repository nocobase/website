---
title: "18 Proyek AI Agent Open Source Teratas dengan Bintang GitHub Terbanyak"
description: "Artikel ini mengulas 18 proyek AI Agent open source teratas di GitHub berdasarkan jumlah bintang, menganalisis fitur dan kasus penggunaannya untuk membantu Anda memilih dan mengimplementasikannya secara efektif."
---

📝 **Catatan:** Artikel ini terakhir diperbarui pada 21 Januari 2026. Kami secara rutin memperbarui informasi untuk memastikan Anda mendapatkan wawasan terbaru! 😊

✨ Lihat rangkuman terbaru kami tahun 2026 tentang proyek AI sumber terbuka di GitHub: [https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)

Sekitar sebulan yang lalu, saya menemukan sebuah postingan yang banyak dibahas di [Hacker News](https://news.ycombinator.com/item?id=44450160) — “[Stop Building AI Agents](https://decodingml.substack.com/p/stop-building-ai-agents)”

![Stop Building AI Agents](https://static-docs.nocobase.com/1-472k2u.png)

Dalam postingan tersebut, penulis berbagi pengalaman pribadi: dia membangun "tim peneliti" dengan CrewAI: tiga agen, lima alat, koordinasi sempurna di atas kertas. Namun dalam praktiknya, peneliti mengabaikan pengikis web, perangkum lupa menggunakan alat kutipan, dan koordinator menyerah sepenuhnya saat memproses dokumen yang lebih panjang. Itu adalah rencana indah yang berantakan dengan cara yang spektakuler.

Diagram alir di bawah ini dibuat oleh penulis setelah melalui proses debugging dan upaya yang gagal yang tak terhitung jumlahnya, merangkum panduan keputusannya untuk **Haruskah saya menggunakan Agen**.

![Haruskah saya menggunakan Agen](https://static-docs.nocobase.com/2-45bvv4.png)

Sumber gambar: https://decodingml.substack.com/p/stop-building-ai-agents

Artikel tersebut menyaring prinsip penting: **agen bekerja paling baik dalam proses yang tidak stabil di mana manusia tetap terlibat untuk pengawasan** — dalam skenario ini, kemampuan eksplorasi dan kreativitas agen seringkali mengungguli alur kerja yang kaku.

* **Skenario yang Direkomendasikan:** asisten sains data (menghasilkan SQL secara otomatis, membuat visualisasi, menjelajahi tren data); mitra penulisan kreatif (bertukar pikiran, menyempurnakan naskah); asisten refaktor kode (menyarankan pengoptimalan, mendeteksi potensi masalah). Dalam kasus ini, manusia dapat terus mengevaluasi hasil dan memperbaiki penyimpangan.
* **Tidak Direkomendasikan untuk:** otomatisasi perusahaan yang sangat penting (proses bisnis utama yang tidak dapat mengambil risiko ketidakstabilan dari keputusan yang digerakkan oleh LLM); pengambilan keputusan berisiko tinggi (keuangan, diagnosis medis, kepatuhan hukum — area yang membutuhkan logika deterministik).

![skenario](https://static-docs.nocobase.com/3-ba22w7.png)

Sumber gambar: https://decodingml.substack.com/p/stop-building-ai-agents

Jika Anda telah membaca di atas dan masih merasa skenario bisnis Anda cocok untuk membangun agen, artikel ini akan memandu Anda melalui **18 proyek [agen](https://github.com/topics/agent) sumber terbuka teratas di GitHub berdasarkan jumlah bintang**. Untuk masing-masing, kami akan menganalisis kekuatan dan keterbatasannya dari tiga perspektif — gambaran proyek, fitur inti, dan kasus penggunaan — membantu Anda memaksimalkan nilai agen dalam konteks yang tepat.

---

💬 Hei, Anda sedang membaca blog NocoBase. NocoBase adalah platform pengembangan tanpa kode/rendah kode bertenaga AI yang paling dapat diperluas untuk membangun aplikasi perusahaan, alat internal, dan semua jenis sistem. Sepenuhnya dihosting sendiri, berbasis plugin, dan ramah pengembang. →[ Jelajahi NocoBase di GitHub](https://github.com/nocobase/nocobase)

---

💡 Anda mungkin juga menikmati rangkuman proyek GitHub populer kami sebelumnya (beberapa proyek muncul di banyak tema):

* [20 Proyek AI Sumber Terbuka Teratas dengan Bintang GitHub Terbanyak](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [8 Proyek MCP Sumber Terbuka Teratas dengan Bintang GitHub Terbanyak](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [40 Alat Pengembang Sumber Terbuka Teratas dengan Bintang GitHub Terbanyak](https://www.nocobase.com/en/blog/github-open-source-developer-tools)

## No.1: Dify

![Dify](https://static-docs.nocobase.com/4-in2l5n.png)

* Bintang GitHub: 110k
* GitHub: [https://github.com/langgenius/dify](https://github.com/langgenius/dify)
* Situs Web: [https://dify.ai/](https://dify.ai/)

![Dify](https://static-docs.nocobase.com/5-psa2vb.png)

**Gambaran:**

**Dify** adalah platform pengembangan aplikasi LLM sumber terbuka yang menggabungkan antarmuka visual yang intuitif, alur kerja RAG, kemampuan agen, manajemen model, dan observabilitas tumpukan penuh. Ini memungkinkan pengembang untuk dengan cepat membangun, men-debug, dan menyebarkan aplikasi AI.

**Fitur Inti:**

* **Orkestrasi Alur Kerja Visual:** Pembuat seret dan lepas yang memungkinkan pengembang merancang dan menguji alur kerja AI yang kompleks langsung di kanvas, termasuk prompt, panggilan model, dan rantai tugas.
* **Dukungan Pipeline RAG:** Menyerap dokumen multi-format (mis., PDF, PPT), secara otomatis mengekstrak konten, dan membangun pipeline pengambilan untuk generasi yang diperkaya pengetahuan.
* **Ekosistem Model Komprehensif & Editor Prompt:** Kompatibel dengan GPT, Mistral, Llama3, dan semua model yang kompatibel dengan OpenAI API. Menawarkan manajemen model terpadu dan penyesuaian prompt, menyederhanakan peralihan model dan perbandingan kinerja.

**Kasus Penggunaan:**

* Membangun sistem layanan pelanggan dan QA yang cerdas
* Mengintegrasikan dengan basis pengetahuan perusahaan
* Penyebaran cepat alat pembuatan konten

## No.2: Lobe Chat

![Lobe Chat](https://static-docs.nocobase.com/6-8eachs.png)

* Bintang GitHub: 64.3k
* GitHub: [https://github.com/lobehub/lobe-chat](https://github.com/lobehub/lobe-chat)
* Situs Web: [https://lobechat.com/](https://lobechat.com/)

![Lobe Chat](https://static-docs.nocobase.com/7-t7pkjl.png)

**Gambaran:**

**Lobe Chat** adalah platform obrolan dan aplikasi multi-model sumber terbuka dengan fokus kuat pada UX. Ini mendukung suara, pengenalan visual, input multimodal, pasar plugin, optimalisasi seluler, dan manajemen multi-pengguna.

**Fitur Inti:**

* **Dukungan Multimodal & Plugin:** Menangani percakapan suara, pengenalan dan pembuatan gambar, dan dapat memperluas fungsionalitas melalui pasar plugin untuk mendukung kebutuhan interaksi yang beragam.
* **Platform Indeks Agen:** Indeks yang digerakkan oleh komunitas di mana pengguna dapat menjelajahi, menambahkan, atau mengirimkan asisten khusus untuk memudahkan perluasan dan penggunaan kembali.
* **Integrasi Model Terpadu:** Menyediakan antarmuka API terpadu dan arsitektur modular untuk terhubung dengan mudah ke penyedia model seperti OpenAI, Anthropic, Gemini, dan Ollama, membuat migrasi platform dan peningkatan menjadi mulus.

**Kasus Penggunaan:**

* Membangun aplikasi obrolan AI multimodal dengan interaksi tinggi dengan cepat
* Menyebarkan asisten domain tertentu

## No.3: RAGFlow

![RAGFlow](https://static-docs.nocobase.com/8-p4g4dr.png)

* Bintang GitHub: 62.1k
* GitHub: [https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)
* Situs Web: [https://ragflow.io/](https://ragflow.io/)

![RAGFlow](https://static-docs.nocobase.com/9-9lvp8h.png)

**Gambaran:**

**RAGFlow** adalah mesin RAG sumber terbuka yang berfokus pada pemahaman dokumen mendalam, dirancang untuk menyediakan layanan QA dan agen berkualitas tinggi yang dapat dijelaskan untuk perusahaan dan individu. Ini dapat memproses format dokumen yang kompleks dan memberikan jawaban berbasis kutipan dengan manajemen blok visual.

**Fitur Inti:**

* **Pemahaman Dokumen Mendalam:** Unggul dalam mengurai konten tidak terstruktur seperti PDF, Word, PPT, Excel, dan gambar, mengekstrak blok informasi yang dapat dicari untuk memastikan konten yang dihasilkan faktual dan dapat diverifikasi.
* **QA RAG dengan Pelacakan Kutipan:** Menggabungkan pengambilan vektor dengan LLM untuk menghasilkan jawaban yang dikutip, sambil memungkinkan penyesuaian manual pada blok pengambilan untuk meningkatkan akurasi.
* **Penyebaran & Integrasi Fleksibel:** Menawarkan penyebaran Docker Compose dan integrasi dengan berbagai LLM.

**Kasus Penggunaan:**

* Membangun sistem QA dan asisten pengetahuan berbasis dokumen
* Menerapkan audit konten dan pelacakan kutipan
* Menyebarkan aplikasi RAG yang menangani struktur file yang kompleks

## No.4: OpenHands

![OpenHands](https://static-docs.nocobase.com/10-b9ssqh.png)

* Bintang GitHub: 62k
* GitHub: https://github.com/All-Hands-AI/OpenHands
* Situs Web: https://all-hands.dev/

![OpenHands](https://static-docs.nocobase.com/11-a2rzhi.png)

**Gambaran:**

**OpenHands** dibangun di sekitar gagasan bahwa AI harus "menulis lebih sedikit kode, menyelesaikan lebih banyak" — menawarkan kemampuan seperti pengeditan kode, eksekusi perintah, penjelajahan web, dan panggilan API.

Sebagai proyek sumber terbuka berlisensi MIT, OpenHands dapat digunakan secara lokal melalui Docker atau diakses melalui OpenHands Cloud SaaS, yang mencakup kredit penggunaan awal untuk uji coba cepat. Dengan pembaruan berkelanjutan, OpenHands telah berevolusi menjadi platform AI komprehensif yang berfokus pada pengembang, kini menampilkan pengontrol agen universal, kolaborasi multi-agen, manajemen multi-sesi, dan eksekusi sandbox yang aman.

**Fitur Inti:**

* **Kemampuan Agen Pengembang Umum:** Agen dapat melakukan tugas-tugas seperti memodifikasi kode, menjalankan perintah, menjelajahi web, dan memanggil API, meniru alur kerja pengembang manusia.
* **Kolaborasi Multi-Agen & Manajemen Sesi:** Mendukung banyak agen yang bekerja sama, dengan komponen manajemen sesi bawaan (Session, EventStream, AgentController) untuk pembagian tugas atau pemecahan masalah kolaboratif.
* **Eksekusi Sandbox yang Aman:** Kode dan perintah berjalan di lingkungan terisolasi (mis., wadah Docker) untuk memastikan keamanan dan meminimalkan risiko pada sistem host.

**Kasus Penggunaan:**

* Membantu pengembang dengan tugas pengkodean rutin
* Mengotomatiskan pipeline pengujian dan penerapan
* Pembuatan prototipe cepat dan pengembangan alat

## No.5: MetaGPT

![MetaGPT](https://static-docs.nocobase.com/12-btl5l3.png)

* Bintang GitHub: 57.8k
* GitHub: https://github.com/FoundationAgents/MetaGPT
* Situs Web: https://mgx.dev/

![13-2pwtad.png](https://static-docs.nocobase.com/13-2pwtad.png)

**Gambaran:**

MetaGPT adalah kerangka kerja kolaborasi multi-agen yang terinspirasi oleh konsep simulasi "perusahaan perangkat lunak". Ini mengubah persyaratan bahasa alami menjadi alur kerja yang lengkap — dari cerita pengguna dan analisis kompetitif hingga desain API dan dokumentasi. Filosofi intinya adalah "Kode = SOP(Tim)", mengubah prosedur operasi standar (SOP) menjadi langkah-langkah yang dapat ditindaklanjuti di seluruh peran seperti manajer produk, arsitek, dan insinyur.

![MetaGPT](https://static-docs.nocobase.com/14-8jh7z3.png)

**Fitur Inti:**

* **Kolaborasi Agen Multi-Peran:** Termasuk agen bawaan untuk peran seperti manajer produk, arsitek, manajer proyek, dan insinyur, mensimulasikan tim dunia nyata yang menjalankan proyek yang digerakkan oleh SOP.
* **Proses yang Digerakkan oleh SOP:** Memandu setiap agen dengan prosedur operasi standar untuk penguraian tugas, eksekusi terstruktur, dan pengurangan penyimpangan atau halusinasi.
* **Pemrograman Bahasa Alami:** Pengguna dapat mendeskripsikan persyaratan mereka dalam bahasa biasa, dan MetaGPT akan menghasilkan cerita pengguna, struktur data, antarmuka API, dan desain arsitektur yang sesuai.

**Kasus Penggunaan:**

* Secara otomatis menghasilkan proposal proyek perangkat lunak
* Membuat prototipe cepat alur kerja tim kolaboratif
* Mengeksplorasi optimalisasi dan otomatisasi pengembangan perangkat lunak yang digerakkan oleh AI

## No.6: LLMs-from-scratch

![LLMs-from-scratch](https://static-docs.nocobase.com/15-w7easd.png)

* Bintang GitHub: 56k
* GitHub: [https://github.com/rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)

![LLMs-from-scratch](https://static-docs.nocobase.com/16-68zqun.png)

**Gambaran:**

**LLMs-from-scratch** adalah proyek edukasi yang membangun model bahasa besar dari awal, membantu pengembang memahami prinsip inti dan proses pelatihan LLM.

👉 [Lihat pengenalan lengkap dan kasus penggunaan untuk detail lebih lanjut.](https://www.nocobase.com/en/blog/github-open-source-ai-projects#no15-llms-from-scratch)

## No.7: Huginn

![Huginn](https://static-docs.nocobase.com/17-wzc3ll.png)

* Bintang GitHub: 47k
* GitHub: https://github.com/huginn/huginn

![Huginn](https://static-docs.nocobase.com/18-orl7h1.png)

**Gambaran:**

**Huginn** adalah alat otomatisasi sumber terbuka yang memungkinkan pengguna menjalankan agen di server mereka sendiri untuk mengumpulkan informasi dari web dan memicu tindakan berdasarkan kondisi — seperti mengirim notifikasi email atau memantau kata kunci. Dirancang dengan kontrol data sebagai prioritas, Huginn telah mempertahankan aktivitas komunitas jangka panjang berkat sistem agen yang dihosting sendiri, ramah privasi, dan dapat diperluas.

**Fitur Inti:**

* **Platform Agen Web yang Dihosting Sendiri:** Pengguna menyebarkan agen di server mereka sendiri, memproses data secara otonom, dan memastikan privasi serta kontrol penuh.
* **Mesin Aturan Peristiwa–Tindakan:** Mendukung pemicu bersyarat yang secara otomatis menjalankan tindakan seperti mengirim notifikasi, menjalankan skrip, atau melakukan panggilan HTTP ketika peristiwa web tertentu terjadi.
* **Mekanisme Agen yang Dapat Diperluas:** Dilengkapi dengan banyak agen bawaan dan mendukung penambahan agen khusus melalui gem Huginn Agent.

**Kasus Penggunaan:**

* Pemantauan informasi dan peringatan
* Pengikisan data dan alur kerja otomatis
* Membangun alat otomatisasi khusus

## No.8: Unsloth

![Unsloth](https://static-docs.nocobase.com/19-ihomc8.png)

* Bintang GitHub: 43.8k
* GitHub: https://github.com/unslothai/unsloth
* Situs Web: https://docs.unsloth.ai/

![Unsloth](https://static-docs.nocobase.com/20-eci5h1.png)

**Gambaran:**

**Unsloth** adalah toolkit sumber terbuka yang dirancang untuk menyempurnakan LLM (seperti OpenAI gpt-oss, Qwen3, Llama 4) dengan fokus pada efisiensi yang lebih tinggi dan optimalisasi memori. Dibangun di atas arsitektur Triton OpenAI, ini secara signifikan mempercepat kecepatan pelatihan sambil mengurangi penggunaan memori GPU.

**Fitur Inti:**

* **Penyempurnaan yang Dioptimalkan Memori:** Memberikan peningkatan kecepatan 1,5–2,2× untuk menyempurnakan LLM arus utama sambil mengurangi penggunaan memori GPU hingga 70–80%.
* **Alur Kerja Notebook yang Mudah:** Pengguna cukup menambahkan kumpulan data dan klik "Jalankan Semua" untuk menyelesaikan penyempurnaan model dengan cepat.
* **Kompatibilitas Model yang Luas:** Mendukung penyempurnaan LLM termasuk Llama, Gemma, Qwen, dan lainnya.

**Kasus Penggunaan:**

* Menyempurnakan LLM dengan cepat untuk penelitian atau pembuatan prototipe produk
* Pendidikan dan pelatihan
* Skenario yang membutuhkan efisiensi memori tinggi, seperti penerapan pada perangkat dengan sumber daya terbatas

## No.9: Mem0

![Mem0](https://static-docs.nocobase.com/21-uxkki5.png)

* Bintang GitHub: 38.1k
* GitHub: https://github.com/mem0ai/mem0
* Situs Web: https://mem0.ai/

![Mem0](https://static-docs.nocobase.com/22-bmb2sv.png)

**Gambaran:**

**Mem0** adalah sistem manajemen memori jangka panjang yang dibuat khusus untuk agen AI, mengatasi masalah umum "pelupa" pada AI. Dengan memperkenalkan lapisan memori terpadu, ini memungkinkan agen untuk mempertahankan preferensi pengguna dan konteks historis di seluruh sesi dan aplikasi, memungkinkan interaksi yang dipersonalisasi dan berkelanjutan.

Dalam pengujian tolok ukur LOCOMO, Mem0 mengungguli OpenAI Memory dengan akurasi sekitar 26% lebih tinggi, latensi respons 91% lebih rendah, dan penggunaan token 90% lebih rendah. Ini ideal untuk skenario seperti bot layanan pelanggan, asisten AI, dan sistem otonom di mana kontinuitas konteks sangat penting.

**Fitur Inti:**

* **Arsitektur Memori Multi-Level:** Mendukung lapisan memori tingkat pengguna, tingkat sesi, dan tingkat agen untuk penyimpanan informasi terstruktur.
* **Kinerja Tinggi & Efisiensi Biaya:** Meningkatkan akurasi sambil secara signifikan mengurangi latensi dan konsumsi token, memberikan dukungan memori jangka panjang dengan lebih sedikit sumber daya.
* **Pemrosesan Lokal yang Mengutamakan Privasi:** Semua data dapat diproses dan disimpan secara lokal, memberi pengguna kendali penuh atas informasi mereka.

**Kasus Penggunaan:**

* **Bot Layanan Pelanggan:** Menyimpan preferensi dan riwayat pengguna untuk meningkatkan relevansi respons
* **Asisten AI:** Mempertahankan memori tugas dan persona di seluruh sesi untuk interaksi yang lebih alami dan koheren
* **Sistem Medis & Konseling:** Menyimpan konteks untuk meningkatkan kualitas layanan dan umpan balik yang presisi

## No.10: ChatTTS

![ChatTTS](https://static-docs.nocobase.com/23-azdged.png)

* Bintang GitHub: 37.5k
* GitHub: https://github.com/2noise/ChatTTS
* Situs Web: https://2noise.com/

![ChatTTS](https://static-docs.nocobase.com/24-e17utt.png)

**Gambaran:**

**ChatTTS** adalah sistem text-to-speech sumber terbuka yang dioptimalkan khusus untuk tugas percakapan, mendukung skenario multi-pembicara dengan fokus pada ekspresi yang alami dan kaya emosi. Untuk mencegah penyalahgunaan, proyek ini memasukkan sejumlah kecil noise frekuensi tinggi ke dalam model terlatih dan mengurangi kualitas file, dengan rencana untuk menerapkan mekanisme deteksi untuk lebih memandu penggunaan etis.

**Fitur Utama:**

* **TTS yang Dioptimalkan untuk Percakapan:** Disetel khusus untuk skenario dialog, mendukung percakapan multi-peran dan kecepatan alami.
* **Kontrol Prosodi yang Terperinci:** Mengelola elemen prosodik seperti tawa, jeda, dan kata pengisi secara tepat, membuat ucapan yang disintesis lebih hidup dan realistis.

**Fitur Inti:**

* Membangun bot suara mirip manusia atau sistem dialog interaktif.
* Sulih suara karakter dan alat latihan bahasa dalam produk pendidikan.
* Bantuan audio untuk pembuatan konten suara dan pembuatan podcast otomatis.

## No.11: Arthas

![Arthas](https://static-docs.nocobase.com/25-1e8yxo.png)

* Bintang GitHub: 36.6k
* GitHub: https://github.com/alibaba/arthas
* Situs Web: https://arthas.aliyun.com/

![Arthas](https://static-docs.nocobase.com/26-rnqi0c.png)

**Gambaran:**

**Arthas** adalah alat diagnostik Java sumber terbuka dari Alibaba, dan sejak dirilis, alat ini telah menjadi solusi andalan bagi pengembang Java untuk memecahkan masalah lingkungan produksi. Dirancang untuk melampirkan secara dinamis ke aplikasi produksi tanpa memodifikasi kode atau memulai ulang server, ini memungkinkan pengembang untuk menjalankan perintah debugging, memeriksa jejak tumpukan, atau mengatur titik henti, sangat meningkatkan efisiensi dan keamanan dalam resolusi masalah produksi.

**Fitur Inti:**

* **Eksekusi Lampiran Dinamis:** Menyuntikkan Arthas ke dalam aplikasi JVM produksi yang berjalan tanpa memulai ulang atau perubahan kode untuk memulai debugging dan pemantauan secara instan.
* **Diagnostik Interaktif Berbasis CLI:** Menyediakan perintah seperti `stack`, `trace`, `watch`, dan `monitor` untuk langsung melihat tumpukan runtime, jumlah panggilan metode, metrik kinerja, dan lainnya.

**Kasus Penggunaan:**

* Resolusi insiden produksi yang cepat.
* Analisis hambatan kinerja.
* Investigasi masalah pengujian regresi.

## No.12: AgentGPT

![AgentGPT](https://static-docs.nocobase.com/27-yvq9f7.png)

* Bintang GitHub: 34.7k
* GitHub: https://github.com/reworkd/AgentGPT
* Situs Web: https://arthas.aliyun.com/

![AgentGPT](https://static-docs.nocobase.com/28-fwguw8.png)

**Gambaran:**

**AgentGPT** adalah proyek sumber terbuka yang memungkinkan pengguna mengonfigurasi dan menyebarkan agen AI langsung di browser tanpa pengaturan yang rumit. Dengan antarmuka yang ramah pengguna, cukup masukkan tujuan, dan agen akan "berpikir–bertindak–belajar" untuk mencapainya.

**Fitur Inti:**

* **Konfigurasi Agen Berbasis Browser:** Tetapkan tujuan dan nama langsung di antarmuka web untuk meluncurkan agen, menurunkan hambatan penerapan.
* **Eksekusi yang Digerakkan oleh Tujuan:** Agen secara otonom merencanakan sub-tugas, menjalankannya, memberikan umpan balik, dan mengoptimalkan pendekatan mereka.
* **Penyiapan Lingkungan Otomatis:** CLI bawaan mengonfigurasi variabel lingkungan, database (MySQL), backend (FastAPI), dan frontend (Next.js) untuk penerapan satu klik.

**Kasus Penggunaan:**

* Asisten cerdas yang berfokus pada tugas.
* Alat validasi prototipe.
* Platform pembelajaran dan demonstrasi.

## No.13: Cherry Studio

![Cherry Studio](https://static-docs.nocobase.com/29-z4pzy1.png)

* Bintang GitHub: 31.3k
* GitHub: https://github.com/CherryHQ/cherry-studio
* Situs Web: https://cherry-ai.com/

![Cherry Studio](https://static-docs.nocobase.com/30-qageqb.png)

**Gambaran:**

**Cherry Studio**, diluncurkan pada Desember 2024, adalah platform asisten pengkodean AI bersama oleh CSDN, GitCode, dan Huawei Cloud CodeArts IDE. Ini bertujuan untuk menyediakan matriks asisten AI satu atap bagi pengembang, mendukung interaksi bahasa alami, refaktor kode tingkat proyek, dan dukungan pengembangan tumpukan penuh.

**Fitur Inti:**

* **Matriks Asisten AI:** Termasuk 300+ template asisten AI khusus industri, dengan opsi untuk membuat yang khusus, mencakup area dari penulisan hingga pemrograman.
* **Agregasi Multi-Model:** Beralih secara bebas antara model cloud seperti OpenAI dan Gemini atau model lokal, dan membandingkan output dari beberapa model secara paralel.
* **Pengeditan Agen Visual:** Pilih dari asisten preset di "Pasar Agen" atau buat agen khusus, dengan optimalisasi prompt berbantuan AI.

**Kasus Penggunaan:**

* Bantuan kode tingkat proyek.
* Solusi khusus industri.
* Pembuatan kode yang digerakkan oleh pengetahuan.

## No.14: Khoj

![Khoj](https://static-docs.nocobase.com/31-l08bdf.png)

* Bintang GitHub: 31.3k
* GitHub: https://github.com/khoj-ai/khoj
* Situs Web: https://khoj.dev/

![Khoj](https://static-docs.nocobase.com/32-x8rb4x.png)

**Gambaran:**

**Khoj** adalah asisten "otak kedua" pribadi sumber terbuka yang mengintegrasikan dokumen dari berbagai sumber ke dalam basis pengetahuan, memungkinkan pencarian semantik untuk QA dan pengingat cerdas. Ini mendukung pembuatan agen khusus untuk tugas terjadwal, pengiriman konten, atau respons percakapan waktu nyata.

**Fitur Inti:**

* **Integrasi Pengetahuan Multi-Sumber:** Mengimpor konten dari PDF, Markdown, Notion, GitHub, dan lainnya ke dalam basis pengetahuan terpadu.
* **Pencarian Semantik dan Notifikasi:** Mengambil konten dokumen menggunakan kueri bahasa alami, dengan notifikasi push terjadwal dan pengingat email.
* **Dukungan Agen Lintas Platform:** Berfungsi di desktop, sebagai plugin Obsidian, web, Emacs, WhatsApp, dan lainnya.

**Kasus Penggunaan:**

* Asisten manajemen pengetahuan pribadi.
* Sistem pengingat otomatis.
* Pengalaman integrasi lintas alat.

## No.15: AIHawk

![AIHawk](https://static-docs.nocobase.com/33-dxlkjy.png)

* Bintang GitHub: 28.6k
* GitHub: https://github.com/feder-cr/Jobs\_Applier\_AI\_Agent\_AIHawk
* Situs Web: https://laboro.co/

![AIHawk](https://static-docs.nocobase.com/34-g4zibv.png)

**Gambaran:**

**AIHawk** adalah agen AI sumber terbuka berlisensi AGPL yang berfokus pada otomatisasi lamaran pekerjaan. Ini mengikis daftar pekerjaan dan menggunakan model bahasa untuk menghasilkan materi lamaran yang disesuaikan, membantu pengguna melamar secara efisien.

**Fitur Inti:**

* **Lamaran Pekerjaan Otomatis:** Merayapi situs web pekerjaan dan menghasilkan materi lamaran yang dioptimalkan.
* **Arsitektur Sumber Terbuka yang Dapat Diperluas:** Pengembang dapat menyesuaikan perilaku atau menambahkan plugin.
* **Perluasan Platform Komersial:** Berevolusi menjadi platform laboro.co, menawarkan layanan yang dihosting dan fitur otomatisasi rekrutmen yang diperluas.

**Kasus Penggunaan:**

* Asisten lamaran pekerjaan otomatis.
* Penelitian otomatisasi proses rekrutmen.
* Alat integrasi platform rekrutmen.

## No.16: FastGPT

![FastGPT](https://static-docs.nocobase.com/35-xvxjpm.png)

* Bintang GitHub: 25.5k
* GitHub: https://github.com/labring/FastGPT
* Situs Web: https://fastgpt.io/

![FastGPT](https://static-docs.nocobase.com/36-bu5ifv.png)

**Gambaran:**

**FastGPT** dirancang sebagai "platform pembangunan agen AI", memungkinkan pengembang untuk membangun aplikasi AI yang kompleks menggunakan alur kerja visual dan basis pengetahuan, tanpa konfigurasi yang membosankan.

**Fitur Inti:**

* **Orkestrasi Alur Kerja Visual:** Antarmuka seret dan lepas yang mendukung node dialog, panggilan HTTP, RPA, cabang bersyarat, dan lainnya.
* **Dukungan Basis Pengetahuan & RAG:** Mengimpor beberapa format file (txt, md, pdf, dll.), dengan pengambilan vektor dan hybrid untuk QA dan otomatisasi yang digerakkan oleh pengetahuan.
* **Multi-Model & Kompatibilitas API:** Terintegrasi dengan OpenAI, Claude, dan lainnya; menyediakan antarmuka yang kompatibel dengan OpenAPI untuk penyematan mudah ke dalam sistem yang ada.

**Kasus Penggunaan:**

* Membangun bot QA cerdas dengan cepat (mis., asisten layanan pelanggan).
* Analisis dokumen dan alur kerja perangkuman otomatis.
* Penanganan tugas otomatis dengan integrasi API eksternal.

## No.17: GPT Researcher

![GPT Researcher](https://static-docs.nocobase.com/37-dzrr44.png)

* Bintang GitHub: 22.9k
* GitHub: https://github.com/assafelovic/gpt-researcher
* Situs Web: https://gptr.dev/

![GPT Researcher](https://static-docs.nocobase.com/38-34tscx.png)

**Gambaran:**

**GPT Researcher** adalah kerangka kerja agen AI yang dikhususkan untuk tugas penelitian mendalam. Ini dapat secara otomatis merencanakan alur kerja penelitian, mengikis informasi, menghasilkan laporan penelitian, dan mengeluarkan konten dengan kutipan, menawarkan kualitas laporan yang tinggi dan kemampuan penyesuaian.

**Fitur Inti:**

* **Penelitian Agen Paralel:** Agen perencana membuat pertanyaan penelitian, sementara beberapa agen pelaksana mengumpulkan dan merangkum informasi secara paralel untuk efisiensi dan keandalan yang lebih besar.
* **Pembuatan Laporan Faktual:** Mengatur dan mengutip konten secara otomatis, menghasilkan laporan penelitian terstruktur dan objektif dengan sumber.

**Kasus Penggunaan:**

* Menulis laporan analisis kompetitif atau penelitian teknis dengan cepat.
* Pembuatan otomatis garis besar penelitian akademis atau ringkasan latar belakang.
* Membangun agen pengetahuan domain tertentu untuk agregasi pengetahuan perusahaan.

## No.18: CopilotKit

![CopilotKit](https://static-docs.nocobase.com/39-z4vv5d.png)

* Bintang GitHub: 22.4k
* GitHub: https://github.com/CopilotKit/CopilotKit
* Situs Web: https://docs.copilotkit.ai/

![CopilotKit](https://static-docs.nocobase.com/40-u5mh13.png)

**Gambaran:**

**CopilotKit** adalah kerangka kerja sumber terbuka untuk mengintegrasikan co-pilot AI ke dalam aplikasi dengan mulus — baik sebagai obrolan tertanam, area teks cerdas, atau antarmuka agen penuh. Ini menyediakan komponen UI React dan arsitektur tanpa kepala untuk penyematan yang fleksibel.

**Fitur Inti:**

* **Dukungan React & UI Tanpa Kepala:** Komponen UI plug-and-play atau penerapan hanya API tanpa kepala.
* **Integrasi Konteks Aplikasi:** Menghubungkan logika aplikasi, status, dan konteks pengguna ke agen AI untuk fungsionalitas yang lebih disesuaikan.
* **Dekopling Model-Arsitektur:** Bekerja secara independen dari model tertentu atau kerangka kerja agen, memungkinkan peningkatan tumpukan AI tanpa memengaruhi pengalaman pengguna.

**Kasus Penggunaan:**

* Asisten AI tertanam.
* Alat AI khusus.
* Pengalaman interaktif multi-modal.

## Catatan Akhir

Agen unggul dalam eksplorasi tetapi kesulitan dengan kepatuhan aturan yang ketat.

18 proyek agen sumber terbuka di atas adalah kotak alat dan juga pengingat: memilih skenario yang tepat dan merancang batasan yang wajar adalah kunci untuk memaksimalkan nilai agen.

Jika artikel ini menginspirasi Anda, jangan ragu untuk membagikannya dengan orang lain yang menjelajahi agen AI. 👍

**Bacaan terkait:**

* [20 Proyek AI Sumber Terbuka Teratas dengan Bintang GitHub Terbanyak](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [8 Proyek MCP Sumber Terbuka Teratas dengan Bintang GitHub Terbanyak](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [7 Aplikasi Web Sumber Terbuka Teratas dengan Bintang GitHub Terbanyak](https://www.nocobase.com/en/blog/github-open-source-web-applications)
* [40 Alat Pengembang Sumber Terbuka Teratas dengan Bintang GitHub Terbanyak](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [15 Proyek Low-Code Sumber Terbuka dengan Pertumbuhan Tercepat di GitHub pada tahun 2025](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [11 Proyek CRM Sumber Terbuka Teratas dengan Bintang GitHub Terbanyak](https://www.nocobase.com/en/blog/github-open-source-crm-projects)
