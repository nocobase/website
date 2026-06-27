---
title: "Bagaimana cara membangun aplikasi dengan NocoBase?"
description: "Mari jelajahi cara membangun aplikasi pelacakan hewan peliharaan dengan NocoBase!"
---

📝 Catatan: Artikel ini terakhir diperbarui pada 23 Januari 2026. Kami secara rutin memperbarui informasi untuk memastikan Anda mendapatkan wawasan terbaru! 😊

Blog ini diproduksi oleh Don Freeman dari [Freeman Tech Consulting](https://freemantechconsulting.com/) dan pertama kali diterbitkan di [nocodefounders.com](https://www.aidutu.cn/info/link?url=http://nocodefounders.com). Freeman Tech Consulting adalah perusahaan rekayasa perangkat lunak layanan penuh yang dapat membantu dengan penerapan No Code, pengembangan aplikasi web, desain/bangun infrastruktur cloud, Manajemen GRC, analitik data, dan masih banyak lagi.

## 🌟Apa itu NocoBase?

**NocoBase** adalah platform AI tanpa kode (zero-code) / low-code yang dirancang untuk memudahkan pembuatan aplikasi berbasis data. Mereka menyediakan versi berbayar di mana logo NocoBase dihapus. Platform ini bersifat open source, jadi jika Anda ingin berkontribusi, Anda dapat melakukannya dengan mudah di GitHub. Mereka menyediakan sistem plugin untuk memperluas fungsionalitas platform sesuai kebutuhan.

## 🚀 Menerapkan NocoBase Secara Lokal

### **Apa yang diperlukan untuk menjalankan NocoBase secara lokal?**

* **Docker**
* **Docker compose**
* **DB PostgreSQL** Dalam blog ini kita akan menjalankannya dengan docker compose, tetapi di lingkungan produksi nyata Anda sebaiknya memiliki DB PostgreSQL khusus

### **Jalankan NocoBase Secara Lokal**

* Ada langkah-langkah untuk menjalankan NocoBase secara lokal di situs web mereka [di sini](https://docs.nocobase.com/welcome/getting-started/installation/docker-compose)

Pertama, buat direktori tempat Anda akan bekerja. Di terminal Anda, pindah ke direktori tersebut. Setelah itu, Anda perlu membuat file docker compose. Saya menggunakan file dari referensi di atas (memulai dari situs web NocoBase) dan sedikit memodifikasinya.

---

💬 Hei, Anda sedang membaca blog NocoBase. NocoBase adalah platform pengembangan AI tanpa kode/low-code paling ekstensibel untuk membangun aplikasi perusahaan, alat internal, dan semua jenis sistem. Platform ini sepenuhnya di-host sendiri, berbasis plugin, dan ramah pengembang. →[ Jelajahi NocoBase di GitHub](https://github.com/nocobase/nocobase)

---

***Docker compose di bawah ini menunjukkan menjalankan DB PostgreSQL secara lokal, tetapi disarankan untuk memiliki DB khusus di lingkungan produksi nyata.***

![docker compose.png](https://static-docs.nocobase.com/8c25f1c572a1330beb04376b5053dcd4.png)

Setelah membuat ini di direktori lokal, jalankan perintah berikut untuk menarik image yang diperlukan.

![tarik image yang diperlukan.png](https://static-docs.nocobase.com/222cba9fddfe376ee2d031bfb1aa1708.png)

Sekarang jalankan perintah berikut untuk memulai container di latar belakang.

![mulai container.png](https://static-docs.nocobase.com/7fc3c0958673e3264b2881c18a5e949d.png)

Sekarang Anda dapat mengakses NocoBase di http://localhost:13000

## 🐶 Membangun Aplikasi NocoBase: Aplikasi Pelacakan Hewan Peliharaan

![Aplikasi Pelacakan Hewan Peliharaan.png](https://static-docs.nocobase.com/0960fcf248fce60c67d186aaa5b1e8fe.png)

Dalam contoh ini, kita akan membangun aplikasi pelacakan hewan peliharaan 🐕 🐈! Aplikasi ini akan melacak pemilik hewan peliharaan dan informasi hewan peliharaan mereka. Pertama, kita perlu mendefinisikan model data untuk aplikasi kita. Ini sangat mudah di NocoBase.

### **Model Data NocoBase**

**🔍 Temukan Editor Model Data**

Di antarmuka NocoBase, Anda dapat mengklik ikon roda gigi kecil ⚙️ di pojok kanan atas, lalu klik `Data Sources`. Ini akan membuka editor model data. Setelah itu, Anda akan melihat sumber data default yang seharusnya bernama main. Klik `Configure` untuk sumber data utama.

**Buat Koleksi**

Sekarang kita dapat membuat koleksi dalam sumber data utama. Koleksi ini akan menyimpan data untuk aplikasi kita. Untuk contoh ini, kita akan membuat dua koleksi. Satu untuk pemilik hewan peliharaan dan satu untuk hewan peliharaan.

**Koleksi Pemilik Hewan Peliharaan**

Di layar Koleksi, klik tombol `New Collection`. Kemudian beri koleksi tersebut `Collection Display Name` dengan nama Pet Owner dan `Collection Name` dengan nama petowner.

Sekarang mari tambahkan bidang yang kita perlukan ke koleksi pemilik hewan peliharaan. Dari layar koleksi, klik `Configure Fields` di samping koleksi Pet Owner. Dengan tombol `Add Field`, Anda dapat menambahkan bidang yang kita perlukan ke koleksi. Koleksi pemilik hewan peliharaan akan memiliki bidang berikut.

* **First Name** *Antarmuka Bidang Teks Satu Baris*
* **Last Name** *Antarmuka Bidang Teks Satu Baris*
* **Email** *Antarmuka Bidang Email*

**Koleksi Hewan Peliharaan**

Sekarang kita dapat mengulangi langkah yang sama untuk koleksi hewan peliharaan. Koleksi hewan peliharaan akan memiliki bidang berikut.

* **Name** *Antarmuka Bidang Teks Satu Baris*
* **Pet Type** *Antarmuka Bidang Pilihan Ganda*
* **Birthdate** *Antarmuka Bidang Tanggal Waktu*

**🔗 Tautkan Koleksi Pemilik Hewan Peliharaan ke Koleksi Hewan Peliharaan**

Untuk menautkan koleksi Pet Owner ke koleksi Pet, kembali ke koleksi **Pet** dan klik tombol `Add Field` di bawah layar konfigurasi koleksi. Temukan Tipe Antarmuka One to Many. Beri hubungan tersebut nama tampilan, pilih pet sebagai `Target Collection`, lalu ID sebagai `Target Key`.

**🥳 Model data selesai!!!**

Itu saja untuk pengaturan model data. Berikut adalah contoh saya untuk model data hewan peliharaan.

![model data hewan peliharaan.png](https://static-docs.nocobase.com/5b683b9ddaeab7c644512fa7dbdbbeb6.png)

### **Membangun Antarmuka NocoBase**

**🏠 Buat Halaman Beranda**

Sekarang setelah model data kita selesai, kita dapat dengan cepat membangun antarmuka untuk berinteraksi dengan model data tersebut. Kembali ke halaman utama aplikasi dan Anda akan melihat item `Add New Menu` di bagian atas halaman. Klik item tersebut, lalu klik `page`. Beri halaman tersebut nama Home, lalu Anda akan melihat sesuatu seperti ini.

![Buat Halaman Beranda.png](https://static-docs.nocobase.com/06081448ef1a5b90c1703905e42bb727.png)

**📜 Buat Daftar Pemilik Hewan Peliharaan**

Sekarang kita akan menambahkan daftar kartu untuk memungkinkan kita berinteraksi dengan koleksi pemilik hewan peliharaan. Klik `Add Block` → `Grid Card` → `PetOwner`. Ini memungkinkan kita menampilkan pemilik hewan peliharaan dalam kisi kartu. Klik `Configure Fields` untuk menambahkan bidang First Name, Last Name, dan Email.

**➕ Tambah Pemilik Hewan Peliharaan**

Sekarang kita perlu dapat membuat pemilik hewan peliharaan. Klik `Configure Action` di pojok kanan atas blok (**bukan** `Configure Action` di Kartu). Kemudian klik `Add New`. Ini membuat tombol yang bertuliskan Add New. Klik tombol tersebut untuk mengonfigurasi apa yang dapat dilakukan saat menambahkan pemilik hewan peliharaan.

**🍿 Popup Tambah Pemilik Hewan Peliharaan Baru**

Di dalam popup, klik `Add Block` → `Form` → `Current Collection`. Klik `Configure Fields` dan tambahkan First Name, Last Name, dan Email. Ini memungkinkan Anda mengisi nilai-nilai ini saat membuat pemilik hewan peliharaan baru. Terakhir, klik `Configure Action` → `Submit`. Klik di luar popup untuk menutupnya.

**➕ Tambah Hewan Peliharaan Baru**

Sekarang setelah kita memiliki kemampuan untuk melihat dan membuat pemilik hewan peliharaan baru, kita perlu dapat menambahkan hewan peliharaan mereka. Kembali ke **Halaman Beranda**, klik `Configure Action`*di dalam kartu* dan klik popup. Ini akan membuat tautan di kartu bernama popup, klik tautan tersebut. Di dalam popup, klik `Add Block` → `Form (add new)` → `Associated Records` → `Pets`. Di dalam blok baru ini, klik `Configure Fields` dan tambahkan Name, Pet Type, Birthdate. Ini memungkinkan Anda mengisi nilai-nilai ini saat membuat hewan peliharaan baru. Terakhir, klik `Configure Action` → `Submit`.

**📜 Daftar Hewan Peliharaan yang Ada**

Sekarang tepat di bawah blok baru ini, klik `Add Block` → `List` → `Associated Records` → `Pets`. Di dalam blok baru ini, klik `Configure Fields` dan tambahkan Name, Pet Type, dan Birthdate. Popup akan terlihat seperti ini. Saya sudah memiliki satu hewan peliharaan di database saya, jadi mungkin terlihat sedikit berbeda.

![Daftar Hewan Peliharaan yang Ada.png](https://static-docs.nocobase.com/3cfc6fadf38b4f88dcee4478aa1b65cb.png)

Klik di luar popup untuk menutupnya. Sekarang kita memiliki kemampuan untuk membuat dan melihat hewan peliharaan. Antarmuka Anda sekarang akan terlihat seperti ini.

![Antarmuka.png](https://static-docs.nocobase.com/97149b76b62c72ccc9d484ceffd50208.png)

**🧪 Uji Coba**

Sekarang klik tombol UI Editor oranye untuk keluar dari UI Editor. Anda dapat bermain-main dengan antarmuka dan membuat Hewan Peliharaan serta Pemilik Hewan Peliharaan.

Blog ini melewatkan banyak bagian termasuk Otentikasi Pengguna, antarmuka yang lebih kompleks, penerapan lingkungan produksi, dll. Saya mungkin akan membahasnya di blog selanjutnya.

💡 Baca Lebih Lanjut:

* [Membangun Asisten AI dengan Langflow dan AstraDB: Dari Arsitektur hingga Integrasi dengan NocoBase](https://www.nocobase.com/en/blog/building-ai-assistant-langflow-astradb-nocobase)
* [Mengembangkan Plugin untuk Mengirim Pesan WhatsApp di NocoBase](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [Tata Kelola Arsitektur yang Disederhanakan: Membangun Katalog Aplikasi dengan NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
