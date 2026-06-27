---
title: "Membangun Asisten AI dengan Langflow dan AstraDB: Dari Arsitektur hingga Integrasi dengan NocoBase"
description: "Artikel ini mendemonstrasikan cara mengintegrasikan NocoBase, LangFlow, dan AstraDB untuk membuat asisten AI, menghasilkan wawasan melalui vektorisasi data dan pencarian semantik, serta mengoptimalkan hasil menggunakan teknologi RAG untuk meningkatkan kemampuan manajemen data dan pengambilan cerdas."
---

📝 **Catatan:** Artikel ini terakhir diperbarui pada 23 Januari 2026. Kami secara berkala memperbarui informasi untuk memastikan Anda mendapatkan wawasan terbaru! 😊

Blog ini diproduksi oleh Leandro Martins dan pertama kali diterbitkan di [Membangun Asisten AI dengan Langflow dan AstraDB: Dari Arsitektur hingga Integrasi dengan NocoBase](https://leandromartins.hashnode.dev/building-an-ai-assistant-with-langflow-and-astradb-from-architecture-to-integration-with-nocobase).

## **Pendahuluan**

Tujuan artikel ini adalah untuk mendemonstrasikan pembuatan asisten AI yang mengintegrasikan alat **NocoBase, LangFlow, dan VectorDB**. Sebagai dasar, saya akan menggunakan sistem yang telah saya kembangkan di **NocoBase**, yang digunakan untuk mengelola data arsitektur, dengan menambahkan asisten AI untuk menghasilkan wawasan dari data yang terkandung dalam sistem ini, seperti **Aplikasi, Katalog API, Desain Solusi, dan Cerita**.

Untuk artikel ini, kita akan menggunakan teknologi berikut:

* **NocoBase, PostgreSQL, dan Docker**, yang telah dikonfigurasi sebelumnya (dalam artikel ini, saya akan menunjukkan cara menginstalnya).
* **LangFlow**, digunakan secara lokal, yang pemasangannya dapat ditemukan di sini melalui Docker.
* **Basis data vektor**, dengan membuka akun di **AstraDB**, yang akan menjadi basis data vektor yang digunakan dalam artikel ini.

---

💬 Hei, Anda sedang membaca blog NocoBase. NocoBase adalah platform pengembangan no-code/low-code bertenaga AI yang paling dapat diperluas untuk membangun aplikasi perusahaan, alat internal, dan semua jenis sistem. Platform ini sepenuhnya di-host sendiri, berbasis plugin, dan ramah pengembang. →[ Jelajahi NocoBase di GitHub](https://github.com/nocobase/nocobase)

---

## **Gambaran Arsitektur**

![Gambaran Arsitektur.png](https://static-docs.nocobase.com/c22d65bc1b29655b4384722d666d3a8a.png)

Diagram ini menunjukkan bagaimana data baru (atau data yang diperbarui) diubah menjadi **embedding** dan disimpan di **basis data vektor**.

1. **Pengguna → Platform NocoBase**
   Pengguna berinteraksi dengan platform NocoBase (misalnya, menambahkan atau memperbarui catatan dalam koleksi).
2. **Memicu CRUD**
   Tindakan CRUD (Buat, Baca, Perbarui, Hapus) di NocoBase memicu sebuah peristiwa atau alur kerja internal.
3. **Alur Kerja (NocoBase)**
   NocoBase memiliki alur kerja yang dikonfigurasi untuk merespons perubahan data. Ketika mendeteksi pembuatan atau modifikasi catatan, alur kerja memulai langkah selanjutnya.
4. **Alur API: Muat Data**
   Alur kerja NocoBase memanggil API atau layanan eksternal dari LangFlow untuk mengirim data yang akan diubah menjadi embedding.
5. **LangFlow — Data ke Embedding**
   LangFlow menerima data dan, menggunakan model bahasa, mengubah konten menjadi vektor (embedding). Embedding ini mewakili makna atau konteks teks secara numerik, memungkinkan pencarian semantik.
6. **Basis Data Vektor (AstraDB)**
   Embedding kemudian disimpan di basis data vektor (AstraDB), mengaitkan setiap embedding dengan konten asli (misalnya, dokumen, catatan, teks).

![diagram.png](https://static-docs.nocobase.com/1d2495aef2ffb7901260d028ab3e00fe.png)

Diagram ini juga mengilustrasikan bagaimana pengguna melakukan kueri semantik pada basis data vektor, menerima hasil yang relevan.

1. **Pengguna → Platform NocoBase**
   Pengguna kembali berinteraksi dengan platform NocoBase, tetapi kali ini menggunakan Widget Obrolan Tertanam (atau antarmuka pencarian lainnya).
2. **Widget Obrolan Tertanam**
   Pengguna mengetik pertanyaan atau perintah. Contoh: *"Tunjukkan informasi tentang aplikasi X."* Widget ini mengirimkan permintaan ke LangFlow, yang memproses kueri.
3. **LangFlow — Data ke Embedding**
   LangFlow mengubah perintah pengguna menjadi embedding, yang mewakili niat pencarian dalam format vektor.
4. **Basis Data Vektor (AstraDB) — Pencarian Kemiripan**
   Embedding dari perintah digunakan untuk mencari di AstraDB vektor yang paling mirip (yaitu, konten yang secara semantik paling dekat).
5. **Sempurnakan Hasil Pencarian di Model**
   Berdasarkan hasil yang dikembalikan oleh AstraDB, LangFlow menyempurnakan hasil pencarian menggunakan model OpenAI (atau LLM lainnya).
6. **Respons ke Pengguna**
   Hasil akhir (teks, dokumen, atau respons yang dihasilkan) dikembalikan ke widget obrolan NocoBase, menampilkan respons kepada pengguna.

## **Aplikasi Menggunakan NocoBase**

Untuk artikel ini, saya akan menggunakan aplikasi yang sama yang telah dibuat sebelumnya. Ini adalah aplikasi yang dikembangkan untuk mendemonstrasikan fitur-fitur NocoBase, di mana saya akan mengimplementasikan asisten AI. Di bawah ini adalah gambar yang mengilustrasikan bagaimana asisten akan bekerja.

Idenya adalah untuk mendapatkan wawasan tentang fungsionalitas melalui pertanyaan. Fungsionalitas yang tersedia adalah: Aplikasi, Katalog API, Desain Solusi, dan Cerita.

![Aplikasi Menggunakan NocoBase.webp](https://static-docs.nocobase.com/6e9829438c1354b2869e7fdf5628735a.webp)

## **Apa itu LangFlow dan AstraDB?**

LangFlow adalah alat sumber terbuka yang dikembangkan oleh kreator Brasil, menawarkan antarmuka grafis untuk membangun, memvisualisasikan, dan men-debug alur kerja yang melibatkan model bahasa. Berdasarkan ekosistem LangChain, LangFlow memfasilitasi pembuatan pipeline pemrosesan bahasa alami (NLP) dan aplikasi AI generatif secara interaktif, memungkinkan pengembang untuk menghubungkan berbagai komponen — seperti panggilan API, transformasi teks, dan logika bisnis — tanpa pengkodean yang intensif.

![LangFlow dan AstraDB.png](https://static-docs.nocobase.com/f96b8c2117c91fa90e83e7029edc905d.png)

Dalam artikel ini, kita akan menggunakan AstraDB, di mana kita akan menyimpan data vektorisasi kita. Untuk lebih memahami basis data vektor, berikut adalah [artikel](https://medium.com/@leandro.jm/uma-abordagem-agn%C3%B3stica-a-llm-db-vector-e-embedding-para-busca-sem%C3%A2ntica-ac1ed4c4b681) yang saya tulis. Juga, ingatlah bahwa LangFlow memungkinkan peralihan ke basis data vektor lainnya.

**AstraDB**, yang awalnya dikenal sebagai layanan basis data terdistribusi berdasarkan Apache Cassandra, telah memperluas kemampuannya untuk menangani penyimpanan data tidak terstruktur dan pencarian vektor. Fungsionalitas basis data vektor ini sangat berguna untuk aplikasi pembelajaran mesin, pencarian semantik, sistem rekomendasi, dan tugas data berdimensi tinggi.

![AstraDB.png](https://static-docs.nocobase.com/90e95b53095b9bf6a63244bb1b604275.png)

## **Menginstal LangFlow**

Untuk menginstal **LangFlow** melalui Docker, cukup jalankan perintah berikut dan kemudian akses sistem di **[localhost:7860](http://localhost:7860/)** :

```
docker run -it --rm -p 7860:7860 langflowai/langflow:latest
```

![Menginstal LangFlow.png](https://static-docs.nocobase.com/a89abb9aa32bbc7a577f974b97f4aca1.png)

## **Mengonfigurasi AstraDB**

Setelah membuat akun di AstraDB, Anda dapat mengatur basis data dan koleksi dengan data, seperti yang ditunjukkan di bawah ini.

Prosesnya cukup sederhana:

1. Pilih **penyedia**
2. Pilih **wilayah**
3. Buat **basis data**

![Mengonfigurasi AstraDB.png](https://static-docs.nocobase.com/a1e061ed6c29b261adb68fe8d8906bce.png)

Untuk koleksi, karena menyimpan data vektorisasi, sangat penting untuk mengonfigurasi fitur Embedding, yang sesuai dengan model LLM yang bertanggung jawab untuk memvektorisasi data.

Ada beberapa model untuk menghasilkan embedding, seperti dari OpenAI, Nvidia, dan Google. Dalam kasus ini, kita akan menggunakan model text-embedding-ada-002 untuk konversi data.

![Mengonfigurasi AstraDB.png](https://static-docs.nocobase.com/2f94c8c7ef4c4356aae987f3bdeb1e7a.png)

## **Memuat Data ke Basis Data Vektor**

Langkah ini mengisi basis data vektor kita dengan data yang akan dicari.

1. Alur kerja LangFlow menerima data melalui URL.
2. Memproses teks
3. Mengubahnya ke format vektor menggunakan text-embedding-ada-002
4. Menyimpannya di AstraDB dalam koleksi yang dikonfigurasi.

![Memuat Data ke Basis Data Vektor.png](https://static-docs.nocobase.com/b4477ee884a88ee7a3322e7650df3b4c.png)

## **Poin Penting**

* Token AstraDB perlu ditentukan dalam komponen yang bertanggung jawab untuk koneksi basis data. Untuk menghasilkan token, cukup akses koleksi di AstraDB dan klik Generate Token. Gambar di bawah menunjukkan layar dengan tombol yang sesuai.

![Poin Penting.png](https://static-docs.nocobase.com/763d524e462a8ac4454b43e1558cbe3b.png)

* **Ikhtisar Basis Data**: File sumber dapat ditemukan di [repositori saya](https://github.com/leandro-jm).
* Untuk model yang kita gunakan, perlu menambahkan kredit untuk mengakses API OpenAI. Dokumentasi berikut menjelaskan cara menyelesaikan proses ini. Setelah menambahkan kredit, Anda harus menghasilkan token dan menentukannya dalam komponen yang bertanggung jawab untuk menghasilkan embedding. Berikut adalah tautan dengan instruksi tentang proses ini. Ingatlah bahwa ada berbagai model yang tersedia untuk menghasilkan embedding.

Untuk menguji, cukup gunakan Postman, memanggil URL yang dapat diperoleh dari API > cURL di LangFlow. Di bawah ini adalah contoh permintaan menggunakan Postman.

![Poin Penting.png](https://static-docs.nocobase.com/16ae6e4697b7a8349955831370e39e47.png)

## Melakukan Penelitian Menggunakan Model

Langkah ini bertanggung jawab untuk mengambil data dari basis data vektor dan menyempurnakannya melalui **RAG (Retrieval-Augmented Generation).**

![Melakukan Penelitian Menggunakan Model.png](https://static-docs.nocobase.com/aec6663ed0a2f2d8a1a01afb89140dc5.png)

Pada tahap ini, juga perlu menentukan token OpenAI dan AstraDB di komponen masing-masing. File sumber dapat ditemukan di [repositori saya](https://github.com/leandro-jm).

Untuk mengujinya, cukup gunakan Chat, yang tersedia di dalam LangFlow di tab Playground.

## **Mengonfigurasi Alur Kerja di NocoBase**

Pada langkah ini, kita akan membuat pemicu di aplikasi kita untuk mengirim data yang perlu divektorisasi. Dengan kata lain, setiap kali data baru dimasukkan, data tersebut akan dikirim ke API LangFlow untuk diproses.

Untuk mencapai ini, kita akan menggunakan fitur Alur Kerja NocoBase. Untuk detail lebih lanjut tentang alur kerja, akses [tautan](https://docs.nocobase.com/handbook/workflow).

![Mengonfigurasi Alur Kerja di NocoBase.png](https://static-docs.nocobase.com/e035bb1b812c53d6a96e5bcbf900a02d.png)

Kita akan membuat alur kerja untuk mengirim data dari koleksi aplikasi kita ke koleksi yang divektorisasi.

**Langkah-langkah:**

Buat alur kerja baru seperti yang ditunjukkan di bawah ini, Collection Event.

![Mengonfigurasi Alur Kerja di NocoBase.png](https://static-docs.nocobase.com/4e97564ec88cb1f2721016dbff94023d.png)

Tentukan **Pemicu** sebagai penyisipan di koleksi **Aplikasi**, seperti yang ditunjukkan di bawah ini.

![Mengonfigurasi Alur Kerja di NocoBase.png](https://static-docs.nocobase.com/c7f5a312533558914de9053861bde66a.png)

Buat **node Permintaan** baru untuk mengirim data aplikasi untuk vektorisasi. Dalam artikel ini, kita akan menggunakan **Judul** dan **Deskripsi** sebagai contoh, tetapi informasi apa pun dapat dikirim sesuai dengan aturan bisnis.

![Mengonfigurasi Alur Kerja di NocoBase.png](https://static-docs.nocobase.com/2da29b9ebb3afe6306f785cb0dcbc7e7.png)

**Langkah Pemberitahuan** bersifat opsional dan tidak perlu dijalankan.

## **Menambahkan Widget Obrolan di NocoBase**

Pertama, akses LangFlow dan salin kode Widget Obrolan dari opsi API, seperti yang ditunjukkan pada gambar di bawah.

![Menambahkan Widget Obrolan di NocoBase.png](https://static-docs.nocobase.com/37bc9b9f48a4803639b54707e5b3fd25.png)

Pada langkah kedua, cukup buat halaman dan tambahkan komponen iframe. Untuk detail lebih lanjut tentang komponen ini, Anda dapat memeriksa [tautan](https://docs.nocobase.com/handbook/block-iframe).

**Di mana:**

* **Mode:** HTML
* **HTML:** Kode di bawah, mengganti **flow\_id** dan **host\_url** sesuai dengan nilai dari LangFlow.

![Menambahkan Widget Obrolan di NocoBase.png](https://static-docs.nocobase.com/d03e4e25fd4241263c332f9c00dcf1c3.png)

## **Menguji Obrolan**

Sekarang, mari kembali ke menu yang dibuat, uji Asisten kita, dan periksa responsnya, seperti yang ditunjukkan pada contoh di bawah.

![Menguji Obrolan.png](https://static-docs.nocobase.com/8c43434a510ec2b80a61aca44d939249.png)

## **Kesimpulan**

Dalam artikel ini, kami mendemonstrasikan pembuatan asisten AI yang terintegrasi dengan NocoBase, LangFlow, dan AstraDB, yang memungkinkan vektorisasi dan pengambilan data cerdas.

Dengan pendekatan ini, kami dapat mengimplementasikan asisten yang mampu menghasilkan wawasan berharga dari data yang terdaftar, menggunakan teknik RAG (Retrieval-Augmented Generation) untuk menyempurnakan hasil pencarian.

Ini hanyalah awal dari apa yang dapat ditawarkan oleh arsitektur ini. Dengan adaptasi kecil, dimungkinkan untuk memperluas fungsionalitas, mengintegrasikan model AI baru, dan meningkatkan pengalaman pengguna. 🚀

**Bacaan terkait:**

* [Mengembangkan Plugin untuk Mengirim Pesan WhatsApp di NocoBase](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [Tata Kelola Arsitektur yang Disederhanakan: Membangun Katalog Aplikasi dengan NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [Cadangkan dan Pulihkan NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [Cara membuat aplikasi dengan NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Cara mengunggah gambar Docker ke server intranet](https://www.nocobase.com/en/blog/load-docker-image)
