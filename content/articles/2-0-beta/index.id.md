---
title: "Mengumumkan NocoBase 2.0-beta"
description: "Setelah 8 minggu penyempurnaan intensif, NocoBase 2.0 telah memasuki fase beta yang stabil. Rilis ini menghadirkan pengoptimalan mendalam pada AI Employee, Visualisasi 2.0, dan Approval 2.0, serta memperkenalkan UI Templates dan Multi-app Architecture yang baru."
---

Setelah 8 minggu kerja keras oleh tim NocoBase dan semua kontributor, NocoBase 2.0-beta telah dirilis sesuai jadwal. Versi ini mencakup penyempurnaan ekstensif dan pengujian fitur-fitur baru di NocoBase 2.0, membawa 2.0 ke fase yang lebih stabil. Kami menyambut pengguna awal untuk menggunakan versi ini untuk pengujian produksi dan memberikan umpan balik tepat waktu mengenai masalah atau saran apa pun.

2.0-rc akan dirilis sebelum 11 Februari 2026, dengan pengujian yang lebih komprehensif dan fitur-fitur baru tambahan. Nantikan.

## Fitur Baru

### AI Employees

Kami telah melakukan peningkatan signifikan pada AI Employees, termasuk:

- Kemampuan AI Employees bawaan yang dioptimalkan
- Dukungan untuk mengakses sumber data eksternal
- Dukungan untuk meminta data dalam jumlah besar
- Mempertahankan format asli dalam konten percakapan
- Pesan kesalahan yang lebih baik

Panduan Pengguna: [AI Employees](https://v2.docs.nocobase.com/ai-employees)

![](https://static-docs.nocobase.com/20251102121036-2025-11-02-12-10-38.png)

### UI Templates

Beta 2.0 memperkenalkan fitur UI Templates yang baru. Setiap jenis template mendukung penyalinan dan referensi, termasuk:

- Block Templates
- Field Templates
- Popup Templates

Yang perlu diperhatikan, Popup Templates memungkinkan Anda menyimpan seluruh konten popup (semua tab dan blok di sub-halaman) sebagai template, secara signifikan mengurangi pekerjaan berulang dari versi 1.x.

Panduan Pengguna: [UI Templates](https://v2.docs.nocobase.com/interface-builder/ui-templates)

![](https://static-docs.nocobase.com/edit-popup-select-20251228.png)

### Multi-App 2.0

Multi-App Management adalah solusi manajemen aplikasi terpadu NocoBase untuk membuat dan mengelola beberapa instance aplikasi NocoBase yang terisolasi secara fisik di satu atau lebih lingkungan runtime. Melalui App Supervisor, pengguna dapat membuat dan memelihara beberapa aplikasi dari satu titik masuk terpadu, memenuhi kebutuhan bisnis dan skala yang berbeda. NocoBase mendukung tiga arsitektur deployment:

- **Single App**: Men-deploy hanya satu instance NocoBase di mana semua fungsi bisnis, data, dan pengguna berjalan dalam aplikasi yang sama.
- **Shared Memory Multi-App**: Beberapa aplikasi dapat berjalan secara bersamaan dalam satu instance NocoBase. Setiap aplikasi bersifat independen, dapat terhubung ke databasenya sendiri, dan dapat dibuat, dimulai, dan dihentikan secara individual, tetapi mereka berbagi proses dan ruang memori yang sama. Pengguna masih hanya perlu memelihara satu instance NocoBase.
- **Multi-Environment Hybrid Deployment**: Men-deploy satu NocoBase sebagai pusat manajemen terpadu, sambil men-deploy beberapa instance NocoBase sebagai lingkungan runtime aplikasi untuk menjalankan aplikasi bisnis. Aplikasi yang berbeda dapat berjalan di node atau cluster yang berbeda.

Panduan Pengguna: [Multi-App](https://v2.docs.nocobase.com/multi-app/multi-app)

![](https://static-docs.nocobase.com/202512231215186.png)

### Multi-Space

Plugin Multi-Space memungkinkan isolasi logis untuk membuat beberapa ruang data independen dalam satu instance aplikasi, cocok untuk skenario seperti multi-pabrik atau multi-toko dengan proses bisnis dan konfigurasi sistem yang sangat konsisten.

Panduan Pengguna: [Multi-Space](https://v2.docs.nocobase.com/multi-app/multi-space)

### Data Visualization 2.0

Versi 1.x menyediakan plugin visualisasi data dasar berdasarkan Ant Design Charts dan ECharts untuk visualisasi data fundamental. Namun, kemampuannya kurang dalam menangani grafik kompleks, interaksi yang dipersonalisasi, dan skenario tautan data.

NocoBase 2.0 memperkenalkan plugin visualisasi data baru berdasarkan ECharts, mendukung mode konfigurasi visual serta mode SQL dan JSON. Mendukung events, sehingga memudahkan penanganan grafik kompleks, tautan multi-grafik, dan skenario penelusuran data.

Jangan khawatir jika SQL dan JSON terlalu rumit—AI Employee Nathan siap membantu.

Panduan Pengguna: [Data Visualization](https://v2.docs.nocobase.com/data-visualization)

![](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

### Workflow

#### Node "Multi-Condition Branch" Baru

Mirip dengan pernyataan `switch / case` atau `if / else if` dalam bahasa pemrograman. Sistem mengevaluasi beberapa kondisi yang dikonfigurasi secara berurutan dan hanya menjalankan cabang yang memenuhi suatu kondisi. Node ini akan menggantikan beberapa fungsi dari node "Parallel Branch". Kami merekomendasikan untuk mengganti workflow yang menggunakan node kondisi dan paralel dengan node "Multi-Condition Branch" yang baru.

![20251123224209](https://static-docs.nocobase.com/20251123224209.png)

Panduan Pengguna: [Multi-Condition Branch](https://v2.docs.nocobase.com/workflow/nodes/multi-conditions)

### Approval 2.0

Sebagian besar konfigurasi blok di plugin Approval telah direfaktor menggunakan FlowEngine, mendukung konfigurasi dan penggunaan yang lebih fleksibel. Beberapa fitur baru juga telah ditambahkan.

Panduan Pengguna: [Approval](https://v2.docs.nocobase.com/workflow/triggers/approval)

#### Opsi untuk Menampilkan Snapshot Data atau Status Terbaru di Antarmuka Pemrosesan Approval

* **Snapshot**
  Selama proses approval, pemohon dan penyetuju melihat status record seperti saat mereka masuk, dan setelah pengajuan, mereka hanya dapat melihat record yang mereka modifikasi—mereka tidak akan melihat pembaruan yang dilakukan orang lain setelahnya.
* **Terbaru**
  Selama proses approval, pemohon dan penyetuju selalu melihat versi terbaru dari record di seluruh proses, terlepas dari status record sebelum tindakan mereka. Setelah proses berakhir, mereka akan melihat versi final dari record.

#### Dukungan untuk Mengonfigurasi Cakupan Data Pemrakarsa

Anda dapat mengonfigurasi izin berbasis cakupan pengguna untuk menentukan pengguna mana yang dapat memulai approval.

![20251226114623](https://static-docs.nocobase.com/20251226114623.png)

#### Di Pusat Tugas, Dukungan untuk Mengonfigurasi Bidang Data Bisnis di Kartu Daftar "Yang Saya Mulai" dan "Persetujuan Saya"

Kartu "Yang Saya Mulai" memungkinkan konfigurasi fleksibel dari informasi approval dan bidang data bisnis.

![20251231222654](https://static-docs.nocobase.com/20251231222654.png)

Kartu "Persetujuan Saya" memungkinkan konfigurasi fleksibel dari bidang tugas approval dan data bisnis.

![20251231222815](https://static-docs.nocobase.com/20251231222815.png)

### Email Manager 2.0

Plugin Email Manager telah direfaktor menggunakan FlowEngine, memungkinkan AI Employees untuk berpartisipasi dengan mulus dalam perangkuman, analisis, dan komposisi email. Fitur baru seperti penyimpanan draf otomatis juga telah ditambahkan.

Panduan Pengguna: [Email Manager](https://v2.docs.nocobase.com/email-manager)

![](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

### Record History

Plugin Record History melacak perubahan data dengan secara otomatis menyimpan snapshot dan record perbedaan untuk operasi buat, perbarui, dan hapus, membantu pengguna dengan cepat melacak perubahan data dan mengaudit operasi.

Panduan Pengguna: [Record History](https://v2.docs.nocobase.com/record-history/)

![](https://static-docs.nocobase.com/202511011346400.png)

---

## Solusi

NocoBase 2.0 menyediakan template solusi siap pakai untuk membangun sistem bisnis dengan cepat.

### Intelligent Ticketing System

Platform manajemen tiket berbasis AI yang menampilkan:

- **Multi-Source Unified Access**: Formulir publik, portal pelanggan, parsing email, API/Webhook
- **AI Employee Team**: Sam (routing), Grace (balasan), Max (pengetahuan), Lexi (terjemahan)...
- **Full SLA Monitoring**: Prioritas empat tingkat P0-P3 dengan peringatan eskalasi otomatis
- **Knowledge Self-Circulation**: Tiket secara otomatis menjadi artikel pengetahuan setelah diselesaikan

Dokumentasi Solusi: https://v2.docs.nocobase.com/solution/ticket-system/

![ticketing-imgs-2026-01-01-00-46-12](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-46-12.jpg)

### CRM Customer Management (Pratinjau)

> **Catatan Versi**: Versi saat ini didasarkan pada 1.x dengan sebagian UI frontend yang diadaptasi untuk 2.0, **hanya untuk pembelajaran dan pratinjau**.

NocoBase CRM adalah platform manajemen hubungan pelanggan tanpa kode, fleksibel, dan kuat, yang mencakup:

- **Customer Management**: Informasi pelanggan, kontak, penilaian pelanggan
- **Sales Pipeline**: Manajemen prospek, pelacakan peluang, corong penjualan
- **Order Management**: Kutipan, pesanan, kontrak
- **Data Analysis**: Dasbor, laporan, visualisasi data

Dokumentasi Solusi: https://v2.docs.nocobase.com/solution/crm/

Demo Langsung: https://demo.nocobase.com/new

![ticketing-imgs-2026-01-01-00-47-06](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-47-06.jpg)

## 2.0-beta vs 1.x

### Legenda

- ✅ Didukung: Fitur 1.x yang diadaptasi di 2.0
- 🆕 Fitur baru: Fitur baru di 2.0
- ✨ Ditingkatkan: Fitur yang ditingkatkan dibandingkan 1.0
- 🔄 Sedang dikerjakan: Fitur yang sedang dikembangkan
- 🚀 Mengoptimalkan: Didukung tetapi perlu perbaikan
- ❌ Tidak didukung: Fitur yang tidak didukung di 2.0
- ⚠️ Tidak digunakan lagi: Fitur yang tidak digunakan lagi
- P0/P1/P2: Prioritas fitur
  - P0: Segera hadir
  - P1: Akan didukung sebelum rilis resmi 2.0
  - P2: Akan didukung setelah rilis resmi 2.0

### Interface Builder

#### Routes & Menus


| Kategori | Fitur | Status | Prioritas | Catatan |
| ------------- | ----------------- | -------------- | -------- | ----- |
| Tambah item menu | Grup | ✅ Didukung | - | - |
| Tambah item menu | Halaman klasik (v1) | ✅ Didukung | - | - |
| Tambah item menu | Halaman modern (v2) | 🆕 Fitur baru | - | - |
| Tambah item menu | Tautan | ✅ Didukung | - | - |

#### Halaman


| Kategori | Fitur | Status | Prioritas | Catatan |
| ------------- | ----------------- | ---------------- | -------- | ----- |
| Pengaturan halaman | Tampilkan judul halaman | ✅ Didukung | - | - |
| Pengaturan halaman | Edit judul halaman | ✅ Didukung | - | - |
| Pengaturan halaman | Aktifkan tab halaman | ✅ Didukung | - | - |
| Pengaturan halaman | Salin tautan sematan | ❌ Tidak didukung | - | - |
| Pengaturan halaman | Aktifkan header halaman | ⚠️ Tidak digunakan lagi | - | - |
| Tata letak seret | Tata letak seret blok | ✨ Ditingkatkan | - | - |

#### Tambah Blok

##### Blok data


| Fitur | Status | Prioritas | Catatan |
| --------------- | ---------------- | -------- | ----- |
| Tabel | ✅ Didukung | - | - |
| Formulir (Edit) | ✅ Didukung | - | - |
| Formulir (Tambah baru) | ✅ Didukung | - | - |
| Detail | ✅ Didukung | - | - |
| Daftar | ✅ Didukung | - | - |
| Kartu grid | ✅ Didukung | - | - |
| Komentar | ✅ Didukung | - | - |
| Peta | ✅ Didukung | - | - |
| Grafik | ✨ Ditingkatkan | - | - |
| Kalender | ❌ Tidak didukung | - | - |
| Gantt | ❌ Tidak didukung | - | - |
| Kanban | ❌ Tidak didukung | - | - |
| Formulir multi-langkah | ❌ Tidak didukung | - | - |

##### Blok filter


| Fitur | Status | Prioritas | Catatan |
| -------- | ---------------- | -------- | ----- |
| Formulir | ✨ Ditingkatkan | - | - |
| Ciutkan | ❌ Tidak didukung | - | - |
| Pohon | ❌ Tidak didukung | - | - |

##### Blok lainnya


| Fitur | Status | Prioritas | Catatan |
| --------------------- | ---------------- | -------- | ----- |
| Template blok | 🆕 Fitur baru | - | - |
| Blok JS | 🆕 Fitur baru | - | - |
| Iframe | ✅ Didukung | - | - |
| Panel aksi | ✅ Didukung | - | - |
| Markdown | ✨ Ditingkatkan | - | - |
| Riwayat record | 🆕 Fitur baru | - | - |
| Email | ✅ Didukung | - | - |
| Workflow > Tugas | ❌ Tidak didukung | - | - |
| Workflow > Approval | 🔄 Sedang dikerjakan | P0 | - |

#### Tab


| Kategori | Fitur | Status | Prioritas | Catatan |
| ------------ | -------------- | ---------------- | -------- | ----- |
| Pengaturan tab | Edit tab | ✅ Didukung | - | - |
| Pengaturan tab | Salin UID | 🆕 Fitur baru | - | - |
| Pengaturan tab | Hapus | ✅ Didukung | - | - |

#### Blok Tabel


| Kategori | Fitur | Status | Prioritas | Catatan |
| ------------------------------ | ---------------------------- | ---------------- | -------- | ----- |
| Pengaturan tabel | Judul & deskripsi | ✅ Didukung | - | - |
| Pengaturan tabel | Aturan tautan blok | ✨ Ditingkatkan | - | - |
| Pengaturan tabel | Tinggi blok | ❌ Tidak didukung | P1 | - |
| Pengaturan tabel | Aktifkan pengurutan seret dan lepas | ❌ Tidak didukung | P1 | - |
| Pengaturan tabel | Bidang pengurutan seret dan lepas | ❌ Tidak didukung | P1 | - |
| Pengaturan tabel | Mode pemuatan data | ❌ Tidak didukung | P1 | - |
| Pengaturan tabel | Aktifkan edit cepat | 🆕 Fitur baru | - | - |
| Pengaturan tabel | Tampilkan nomor baris | ✅ Didukung | - | - |
| Pengaturan tabel | Ukuran halaman | ✅ Didukung | - | - |
| Pengaturan tabel | Cakupan data | ✅ Didukung | - | - |
| Pengaturan tabel | Pengurutan default | ✅ Didukung | - | - |
| Pengaturan tabel | Aktifkan tabel pohon | ✅ Didukung | - | - |
| Pengaturan tabel | Perluas semua baris secara default | ✅ Didukung | - | - |
| Pengaturan tabel | Kepadatan tabel | ✅ Didukung | - | - |
| Pengaturan tabel | Simpan sebagai template | 🆕 Fitur baru | - | - |
| Pengaturan tabel | Salin UID | 🆕 Fitur baru | - | - |
| Pengaturan tabel | Hapus | ✅ Didukung | - | - |
| Aksi tabel > Aksi global | Tambah baru | ✅ Didukung | - | - |
| Aksi tabel > Aksi global | Hapus | ✅ Didukung | - | - |
| Aksi tabel > Aksi global | Filter | ✅ Didukung | - | - |
| Aksi tabel > Aksi global | Tautan | ✅ Didukung | - | - |
| Aksi tabel > Aksi global | Popup | ✅ Didukung | - | - |
| Aksi tabel > Aksi global | Segarkan | ✅ Didukung | - | - |
| Aksi tabel > Aksi global | Edit massal | ❌ Tidak didukung | P1 | - |
| Aksi tabel > Aksi global | Perbarui massal | ✅ Didukung | - | - |
| Aksi tabel > Aksi global | Ekspor | ✅ Didukung | - | - |
| Aksi tabel > Aksi global | Impor | ✅ Didukung | - | - |
| Aksi tabel > Aksi global | Permintaan kustom | ❌ Tidak didukung | P2 | - |
| Aksi tabel > Aksi global | Pengaturan kolom | ❌ Tidak didukung | - | - |
| Aksi tabel > Aksi global | AI employees | 🆕 Fitur baru | - | - |
| Aksi tabel > Aksi global | Aksi JS | 🆕 Fitur baru | - | - |
| Aksi tabel > Aksi baris | Lihat | ✅ Didukung | - | - |
| Aksi tabel > Aksi baris | Edit | ✅ Didukung | - | - |
| Aksi tabel > Aksi baris | Perbarui record | ✅ Didukung | - | - |
| Aksi tabel > Aksi baris | Hapus | ✅ Didukung | - | - |
| Aksi tabel > Aksi baris | Popup | ✅ Didukung | - | - |
| Aksi tabel > Aksi baris | Tautan | ✅ Didukung | - | - |
| Aksi tabel > Aksi baris | Duplikat | ❌ Tidak didukung | P2 | - |
| Aksi tabel > Aksi baris | Permintaan kustom | ❌ Tidak didukung | P2 | - |
| Aksi tabel > Aksi baris | AI employees | 🆕 Fitur baru | - | - |
| Aksi tabel > Aksi baris | Aksi JS | 🆕 Fitur baru | - | - |
| Kolom tabel | Tampilkan bidang koleksi | ✅ Didukung | - | - |
| Kolom tabel | Tampilkan bidang asosiasi | ✅ Didukung | - | - |
| Kolom tabel > Kolom lainnya | Bidang JS | 🆕 Fitur baru | - | - |
| Kolom tabel > Kolom lainnya | Kolom JS | 🆕 Fitur baru | - | - |
| Kolom tabel > Kolom lainnya | Aksi | ✨ Ditingkatkan | - | - |
| Pengaturan kolom tabel | Judul kolom | ✅ Didukung | - | - |
| Pengaturan kolom tabel | Tooltip | ✅ Didukung | - | - |
| Pengaturan kolom tabel | Lebar kolom | ✨ Ditingkatkan | - | - |
| Pengaturan kolom tabel | Aktifkan edit cepat | 🆕 Fitur baru | - | - |
| Pengaturan kolom tabel | Dapat diurutkan | ✅ Didukung | - | - |
| Pengaturan kolom tabel | Tetap | ✅ Didukung | - | - |
| Pengaturan kolom tabel | Gaya | ❌ Tidak didukung | P2 | - |
| Pengaturan kolom tabel | Mode tampilan | 🆕 Fitur baru | - | - |
| Pengaturan kolom tabel | Tampilkan tombol salin | ❌ Tidak didukung | - | - |
| Pengaturan kolom tabel | Elipsis pada teks yang meluap | ✨ Ditingkatkan | - | - |
| Pengaturan kolom tabel | Komponen bidang | ✨ Ditingkatkan | - | - |
| Pengaturan kolom tabel | Mode render | 🆕 Fitur baru | - | - |
| Pengaturan kolom tabel | Aktifkan klik-untuk-membuka | ✨ Ditingkatkan | - | - |
| Pengaturan kolom tabel | Edit popup | ✨ Ditingkatkan | - | - |
| Pengaturan kolom tabel | Salin UID | 🆕 Fitur baru | - | - |
| Pengaturan kolom tabel | Hapus | ✅ Didukung | - | - |
| Pengaturan kolom tabel | Sembunyikan kolom | ⚠️ Tidak digunakan lagi | - | - |
| Pengaturan kolom tabel | Hubungkan blok data | ⚠️ Tidak digunakan lagi | - | - |
| Pengaturan kolom tabel | Simpan sebagai template referensi | ⚠️ Tidak digunakan lagi | - | - |
| Pengaturan kolom tabel | Simpan sebagai template warisan | ⚠️ Tidak digunakan lagi | - | - |

#### Blok Formulir Tambah & Edit


| Kategori | Fitur | Status | Prioritas | Catatan |
| -------------------------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| Pengaturan formulir | Judul & deskripsi | ✅ Didukung | - | - |
| Pengaturan formulir | Tinggi blok | ❌ Tidak didukung | P1 | - |
| Pengaturan formulir | Template data formulir | ❌ Tidak didukung | - | - |
| Pengaturan formulir | Nilai awal formulir | 🔄 Sedang dikerjakan | P1 | - |
| Pengaturan formulir | Tata letak | ✅ Didukung | - | - |
| Pengaturan formulir | Aturan tautan blok | ✨ Ditingkatkan | - | - |
| Pengaturan formulir | Aturan tautan bidang | 🔄 Sedang dikerjakan | P2 | - |
| Pengaturan formulir | Cakupan data | ✅ Didukung | - | - |
| Pengaturan formulir | Aktifkan draf | 🆕 Fitur baru | - | - |
| Pengaturan formulir | Simpan sebagai template | 🆕 Fitur baru | - | - |
| Pengaturan formulir | Ubah referensi menjadi duplikat | 🆕 Fitur baru | - | - |
| Pengaturan formulir | Ubah bidang referensi menjadi duplikat | 🆕 Fitur baru | - | - |
| Pengaturan formulir | Salin UID | 🆕 Fitur baru | - | - |
| Pengaturan formulir | Hapus | ✅ Didukung | - | - |
| Pengaturan formulir | Simpan sebagai template referensi | ⚠️ Tidak digunakan lagi | - | - |
| Pengaturan formulir | Simpan sebagai template warisan | ⚠️ Tidak digunakan lagi | - | - |
| Item bidang formulir | Tampilkan bidang koleksi | ✅ Didukung | - | - |
| Item bidang formulir | Tampilkan bidang asosiasi | ❌ Tidak didukung | P2 | - |
| Item bidang formulir > Lainnya | Template bidang | 🆕 Fitur baru | - | - |
| Item bidang formulir > Lainnya | Item JS | 🆕 Fitur baru | - | - |
| Item bidang formulir > Lainnya | Pembagi | ✨ Ditingkatkan | - | - |
| Item bidang formulir > Lainnya | Markdown | ✨ Ditingkatkan | - | - |
| Pengaturan item bidang formulir | Tampilkan label | ✅ Didukung | - | - |
| Pengaturan item bidang formulir | Label | ✅ Didukung | - | - |
| Pengaturan item bidang formulir | Tooltip | ✅ Didukung | - | - |
| Pengaturan item bidang formulir | Deskripsi | ✅ Didukung | - | - |
| Pengaturan item bidang formulir | Nilai default | 🚀 Mengoptimalkan | P0 | - |
| Pengaturan item bidang formulir | Validasi | ✨ Ditingkatkan | - | - |
| Pengaturan item bidang formulir | Wajib diisi | ✅ Didukung | - | - |
| Pengaturan item bidang formulir | Mode tampilan | ✨ Ditingkatkan | - | - |
| Pengaturan item bidang formulir > SubForm | Banyak | ❌ Tidak didukung | P1 | - |
| Pengaturan item bidang formulir > SubForm | Aturan tautan bidang | 🔄 Sedang dikerjakan | P2 | - |
| Pengaturan item bidang formulir > SubTable | Aturan tautan bidang | ❌ Tidak didukung | P2 | - |
| Pengaturan item bidang formulir > SubForm (Popover) | - | ❌ Tidak didukung | - | - |
| Pengaturan item bidang formulir | Salin UID | 🆕 Fitur baru | - | - |
| Pengaturan item bidang formulir | Hapus | ✅ Didukung | - | - |
| Aksi formulir | Kirim | 🚀 Mengoptimalkan | P1 | - |
| Aksi formulir | Picu workflow | ✅ Didukung | - | - |
| Aksi formulir | Popup | ❌ Tidak didukung | P1 | - |
| Aksi formulir | Permintaan kustom | ❌ Tidak didukung | P2 | - |
| Aksi formulir | AI employees | 🆕 Fitur baru | - | - |
| Aksi formulir | Aksi JS | 🆕 Fitur baru | - | - |

#### Blok Detail


| Kategori | Fitur | Status | Prioritas | Catatan |
| ------------------------------------------------------- | -------------------------- | ---------------- | -------- | ----- |
| Pengaturan detail | Judul & deskripsi | ✅ Didukung | - | - |
| Pengaturan detail | Tinggi blok | ❌ Tidak didukung | P1 | - |
| Pengaturan detail | Aturan tautan blok | ✨ Ditingkatkan | - | - |
| Pengaturan detail | Mode pemuatan data | ❌ Tidak didukung | P1 | - |
| Pengaturan detail | Tata letak | ✅ Didukung | - | - |
| Pengaturan detail | Cakupan data | ✅ Didukung | - | - |
| Pengaturan detail | Pengurutan default | ✅ Didukung | - | - |
| Pengaturan detail | Aturan tautan bidang | 🚀 Mengoptimalkan | - | - |
| Pengaturan detail | Simpan sebagai template | 🆕 Fitur baru | - | - |
| Pengaturan detail | Salin UID | 🆕 Fitur baru | - | - |
| Pengaturan detail | Hapus | ✅ Didukung | - | - |
| Pengaturan detail | Simpan sebagai template referensi | ⚠️ Tidak digunakan lagi | - | - |
| Pengaturan detail | Simpan sebagai template warisan | ⚠️ Tidak digunakan lagi | - | - |
| Aksi detail | Lihat | 🆕 Fitur baru | - | - |
| Aksi detail | Edit | ✅ Didukung | - | - |
| Aksi detail | Buka popup | ✅ Didukung | - | - |
| Aksi detail | Perbarui record | ✅ Didukung | - | - |
| Aksi detail | Hapus | ✅ Didukung | - | - |
| Aksi detail | Tautan | 🆕 Fitur baru | - | - |
| Aksi detail | Cetak template | ✅ Didukung | - | - |
| Aksi detail | Cetak | ❌ Tidak didukung | - | - |
| Aksi detail | Permintaan kustom | ❌ Tidak didukung | P2 | - |
| Aksi detail | Picu workflow | 🆕 Fitur baru | - | - |
| Aksi detail | AI employees | 🆕 Fitur baru | - | - |
| Aksi detail | Aksi JS | 🆕 Fitur baru | - | - |
| Bidang detail | Tampilkan bidang koleksi | ✅ Didukung | - | - |
| Bidang detail | Tampilkan bidang asosiasi | ✅ Didukung | - | - |
| Bidang detail > Lainnya | Template bidang | 🆕 Fitur baru | - | - |
| Bidang detail > Lainnya | Bidang JS | 🆕 Fitur baru | - | - |
| Bidang detail > Lainnya | Item JS | 🆕 Fitur baru | - | - |
| Bidang detail > Lainnya | Pembagi | ✅ Didukung | - | - |
| Bidang detail > Lainnya | Markdown | ✨ Ditingkatkan | - | - |
| Pengaturan item detail | Tampilkan nama bidang | ✅ Didukung | - | - |
| Pengaturan item detail | Nama bidang | ✅ Didukung | - | - |
| Pengaturan item detail | Tooltip | ✅ Didukung | - | - |
| Pengaturan item detail | Deskripsi | ✅ Didukung | - | - |
| Pengaturan item detail | Gaya | ❌ Tidak didukung | P2 | - |
| Pengaturan item detail > Tampilan judul (bidang yang dapat diklik) | Bidang judul | ✨ Ditingkatkan | - | - |
| Pengaturan item detail > Tampilan judul (bidang yang dapat diklik) | Gaya | ❌ Tidak didukung | P2 | - |
| Pengaturan item detail > Tampilan judul (bidang yang dapat diklik) | Mode tampilan | 🆕 Fitur baru | - | - |
| Pengaturan item detail > Tampilan judul (bidang yang dapat diklik) | Elipsis pada teks yang meluap | ✅ Didukung | - | - |
| Pengaturan item detail > Tampilan judul (bidang yang dapat diklik) | Aktifkan klik-untuk-membuka | ✅ Didukung | - | - |
| Pengaturan item detail > Tampilan judul (bidang yang dapat diklik) | Pengaturan popup | ✨ Ditingkatkan | - | - |
| Pengaturan item detail > SubTable | Ukuran halaman | ✅ Didukung | - | - |
| Pengaturan item detail > SubTable | Tetapkan aturan pengurutan | ❌ Tidak didukung | - | - |
| Pengaturan item detail > SubTable | Aktifkan nomor baris | ❌ Tidak didukung | - | - |
| Pengaturan item detail > SubTable | Aturan tautan | ❌ Tidak didukung | - | - |
| Pengaturan item detail > SubDetails | Aturan tautan | ❌ Tidak didukung | - | - |
| Pengaturan item detail > SubDetails | Tata letak | ❌ Tidak didukung | - | - |
| Pengaturan item detail > Teks besar | Elipsis pada teks yang meluap | ✨ Ditingkatkan | - | - |
| Pengaturan item detail > Teks besar | Mode render | ✨ Ditingkatkan | - | - |
| Pengaturan item detail > Pratinjau | - | ✨ Ditingkatkan | - | - |
| Pengaturan item detail | Salin UID | 🆕 Fitur baru | - | - |
| Pengaturan item detail | Hapus | ✅ Didukung | - | - |

#### Blok Daftar


| Kategori | Fitur | Status | Prioritas | Catatan |
| ----------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| Pengaturan daftar | Judul & deskripsi | ✅ Didukung | - | - |
| Pengaturan daftar | Tinggi blok | ❌ Tidak didukung | P1 | - |
| Pengaturan daftar | Aturan tautan blok | ✨ Ditingkatkan | - | - |
| Pengaturan daftar | Ukuran halaman | ✅ Didukung | - | - |
| Pengaturan daftar | Cakupan data | ✅ Didukung | - | - |
| Pengaturan daftar | Pengurutan default | ✅ Didukung | - | - |
| Pengaturan daftar | Mode pemuatan data | ✅ Didukung | - | - |
| Pengaturan daftar | Tata letak | ✅ Didukung | - | - |
| Pengaturan daftar | Simpan sebagai template | 🆕 Fitur baru | - | - |
| Pengaturan daftar | Ubah referensi menjadi duplikat | 🆕 Fitur baru | - | - |
| Pengaturan daftar | Ubah bidang referensi menjadi duplikat | 🆕 Fitur baru | - | - |
| Pengaturan daftar | Salin UID | 🆕 Fitur baru | - | - |
| Pengaturan daftar | Hapus | ✅ Didukung | - | - |
| Pengaturan daftar | Simpan sebagai template referensi | ⚠️ Tidak digunakan lagi | - | - |
| Pengaturan daftar | Simpan sebagai template warisan | ⚠️ Tidak digunakan lagi | - | - |
| Aksi daftar > Aksi global | Tambah baru | ✅ Didukung | - | - |
| Aksi daftar > Aksi global | Hapus | ✅ Didukung | - | - |
| Aksi daftar > Aksi global | Filter | ✅ Didukung | - | - |
| Aksi daftar > Aksi global | Tautan | 🆕 Fitur baru | - | - |
| Aksi daftar > Aksi global | Popup | 🆕 Fitur baru | - | - |
| Aksi daftar > Aksi global | Segarkan | ✅ Didukung | - | - |
| Aksi daftar > Aksi global | Perbarui massal | 🚀 Mengoptimalkan | - | - |
| Aksi daftar > Aksi global | Ekspor | ✅ Didukung | - | - |
| Aksi daftar > Aksi global | Impor | ✅ Didukung | - | - |
| Aksi daftar > Aksi global | Ekspor lampiran | 🆕 Fitur baru | - | - |
| Aksi daftar > Aksi global | Kirim email | 🆕 Fitur baru | - | - |
| Aksi daftar > Aksi global | Cetak template | 🆕 Fitur baru | - | - |
| Aksi daftar > Aksi global | Picu workflow | ✅ Didukung | - | - |
| Aksi daftar > Aksi global | Permintaan kustom | ❌ Tidak didukung | P2 | - |
| Aksi daftar > Aksi global | AI employees | 🆕 Fitur baru | - | - |
| Aksi daftar > Aksi global | Aksi JS | 🆕 Fitur baru | - | - |
| Aksi daftar > Aksi baris | Lihat | ✅ Didukung | - | - |
| Aksi daftar > Aksi baris | Hapus | ✅ Didukung | - | - |
| Aksi daftar > Aksi baris | Edit | ✅ Didukung | - | - |
| Aksi daftar > Aksi baris | Tautan | ✅ Didukung | - | - |
| Aksi daftar > Aksi baris | Popup | ✅ Didukung | - | - |
| Aksi daftar > Aksi baris | Perbarui record | ✅ Didukung | - | - |
| Aksi daftar > Aksi baris | Cetak template | ✅ Didukung | - | - |
| Aksi daftar > Aksi baris | Picu workflow | ✅ Didukung | - | - |
| Aksi daftar > Aksi baris | Permintaan kustom | ❌ Tidak didukung | P2 | - |
| Aksi daftar > Aksi baris | AI employees | 🆕 Fitur baru | - | - |
| Aksi daftar > Aksi baris | Aksi JS | 🆕 Fitur baru | - | - |
| Bidang daftar | Tampilkan bidang koleksi | ✅ Didukung | - | - |
| Bidang daftar | Tampilkan bidang asosiasi | ✅ Didukung | - | - |
| Bidang daftar > Lainnya | Bidang JS | 🆕 Fitur baru | - | - |
| Bidang daftar > Lainnya | Item JS | 🆕 Fitur baru | - | - |
| Bidang daftar > Lainnya | Pembagi | ✅ Didukung | - | - |
| Bidang daftar > Lainnya | Markdown | 🆕 Fitur baru | - | - |

#### Blok Lainnya


| Fitur | Status | Prioritas | Catatan |
| --------------------- | ---------------- | -------- | ----- |
| Blok kartu grid | ✅ Didukung | - | - |
| Blok komentar | ✅ Didukung | - | - |
| Blok peta | ✅ Didukung | - | - |
| Blok grafik | ✨ Ditingkatkan | - | - |
| Blok kalender | ❌ Tidak didukung | - | - |
| Blok Gantt | ❌ Tidak didukung | - | - |
| Blok Kanban | ❌ Tidak didukung | - | - |
| Blok formulir multi-langkah | ❌ Tidak didukung | - | - |
| Formulir filter | ✨ Ditingkatkan | - | - |
| Ciutkan filter | ❌ Tidak didukung | - | - |
| Filter pohon | ❌ Tidak didukung | - | - |
| Template blok | 🆕 Fitur baru | - | - |
| Blok JS | 🆕 Fitur baru | - | - |
| Iframe | ✅ Didukung | - | - |
| Panel aksi | ✅ Didukung | - | - |
| Markdown | ✨ Ditingkatkan | - | - |
| Riwayat record | 🆕 Fitur baru | - | - |
| Email | ✅ Didukung | - | - |
| Workflow | 🔄 Sedang dikerjakan | P0 | - |

#### Panel Aksi


| Kategori | Fitur | Status | Prioritas | Catatan |
| --------------------- | ------------------------- | ---------------- | -------- | ----- |
| Pengaturan panel aksi | Judul & deskripsi | ✅ Didukung | - | - |
| Pengaturan panel aksi | Tinggi blok | ❌ Tidak didukung | P1 | - |
| Pengaturan panel aksi | Aturan tautan blok | ✨ Ditingkatkan | - | - |
| Pengaturan panel aksi | Tata letak | ✅ Didukung | - | - |
| Pengaturan panel aksi | Elipsis pada teks yang meluap | ✅ Didukung | - | - |
| Pengaturan panel aksi | Simpan sebagai template | 🆕 Fitur baru | - | - |
| Pengaturan panel aksi | Salin UID | 🆕 Fitur baru | - | - |
| Pengaturan panel aksi | Hapus | ✅ Didukung | - | - |
| Aksi | Popup | ✅ Didukung | - | - |
| Aksi | Tautan | ✅ Didukung | - | - |
| Aksi | Pindai kode QR | ✅ Didukung | - | - |
| Aksi | Perbarui record | ❌ Tidak didukung | P2 | - |
| Aksi | Permintaan kustom | ❌ Tidak didukung | P2 | - |
| Aksi | Picu workflow | ❌ Tidak didukung | P2 | - |
| Aksi | Aksi JS | 🆕 Fitur baru | - | - |

#### Bidang

##### Mode Hanya Baca


| Kategori | Fitur | Status | Prioritas | Catatan |
| ------------------ | ------------------- | ---------------- | -------- | ----- |
| Bidang yang dapat diklik | Tampilan teks | ✅ Didukung | - | - |
| Bidang yang dapat diklik | Tampilan angka | ✅ Didukung | - | - |
| Bidang yang dapat diklik | Tampilan tanggal | ✅ Didukung | - | - |
| Bidang yang dapat diklik | Tampilan waktu | ✅ Didukung | - | - |
| Bidang yang dapat diklik | Tampilan enum | ✅ Didukung | - | - |
| Bidang yang dapat diklik | Tampilan relasi | ✅ Didukung | - | - |
| Tampilan teks besar | Tampilan teks kaya | ✅ Didukung | - | - |
| Tampilan teks besar | Tampilan Markdown | ✅ Didukung | - | - |
| Tampilan teks besar | Tampilan blok kode | ❌ Tidak didukung | P1 | - |
| Tampilan teks besar | Bidang JSON | ✅ Didukung | - | - |
| Tampilan bidang | Bidang URL | ✅ Didukung | - | - |
| Tampilan bidang | Bidang pratinjau | ✅ Didukung | - | - |
| Tampilan bidang | Bidang kotak centang | ✅ Didukung | - | - |
| Tampilan bidang | Bidang ikon | ✅ Didukung | - | - |
| Tampilan bidang | Bidang warna | ✅ Didukung | - | - |
| Tampilan bidang | Perhitungan rumus | ✅ Didukung | - | - |
| Tampilan bidang | Kode otomatis | ✅ Didukung | - | - |
| Bidang relasi | SubDetails | 🔄 Sedang dikerjakan | P0 | - |
| Bidang relasi | SubTable | 🔄 Sedang dikerjakan | P0 | - |
| Tampilan bidang | Tampilan peta | ✅ Didukung | - | - |
| Tampilan bidang | Bidang JS | ✅ Didukung | - | - |
| Tampilan bidang | TableOID | ✅ Didukung | - | - |
| Tampilan bidang | Wilayah China | ❌ Tidak didukung | - | - |
| Tampilan bidang | Kode QR | ❌ Tidak didukung | - | - |

##### Mode Edit


| Fitur | Status | Prioritas | Catatan |
| ------------------------ | ---------------- | -------- | ----- |
| Input satu baris | ✅ Didukung | - | - |
| Input angka | ✅ Didukung | - | - |
| Input persentase | ✅ Didukung | - | - |
| Input kata sandi | ✅ Didukung | - | - |
| Input NanoID | ✅ Didukung | - | - |
| Input teks multi-baris | ✅ Didukung | - | - |
| Editor teks kaya | ✅ Didukung | - | - |
| Editor kode | ❌ Tidak didukung | - | - |
| Editor Markdown | ✅ Didukung | - | - |
| Input JSON | ✅ Didukung | - | - |
| Pemilih | ✅ Didukung | - | - |
| Radio | ✅ Didukung | - | - |
| Kotak centang | ✅ Didukung | - | - |
| Grup kotak centang | ✅ Didukung | - | - |
| Pemilih tanggal | ✅ Didukung | - | - |
| Pemilih warna | ✅ Didukung | - | - |
| Pemilih ikon | ✅ Didukung | - | - |
| Pemilih waktu | ✅ Didukung | - | - |
| Pemilih record (dropdown) | ✅ Didukung | - | - |
| Pemilih record (popup) | ✅ Didukung | - | - |
| Pemilih record (kaskade) | ✅ Didukung | - | - |
| Manajer file | ✅ Didukung | - | - |
| Pemilih koleksi | 🔄 Sedang dikerjakan | P2 | - |
| Wilayah China | ❌ Tidak didukung | - | - |
| Kode QR | ❌ Tidak didukung | - | - |
| Pindai untuk input | ❌ Tidak didukung | - | - |
| SubForm | 🚀 Mengoptimalkan | P0 | - |
| SubTable (sederhana) | 🚀 Mengoptimalkan | P0 | - |
| SubTable (lanjutan) | 🔄 Sedang dikerjakan | P1 | - |
| Pemilih peta | ✅ Didukung | - | - |
| Bidang JS | ✅ Didukung | - | - |

#### Aksi


| Fitur | Status | Prioritas | Catatan |
| ------------------ | ---------------- | -------- | ----- |
| Popup | ✅ Didukung | - | - |
| Lihat | ✅ Didukung | - | - |
| Filter | ✅ Didukung | - | - |
| Tambah | ✅ Didukung | - | - |
| Tambah sub-record | ✅ Didukung | - | - |
| Tautan | ✅ Didukung | - | - |
| Edit | ✅ Didukung | - | - |
| Hapus | ✅ Didukung | - | - |
| Segarkan | ✅ Didukung | - | - |
| Perbarui record | 🚀 Mengoptimalkan | P1 | - |
| Kirim | 🚀 Mengoptimalkan | P1 | - |
| Unggah | ✅ Didukung | - | - |
| Picu workflow | ✅ Didukung | - | - |
| Edit massal | ❌ Tidak didukung | P1 | - |
| Perbarui massal | ✅ Didukung | - | - |
| Permintaan kustom | ❌ Tidak didukung | - | - |
| Salin | ❌ Tidak didukung | - | - |
| Cetak | ❌ Tidak didukung | - | - |
| Cetak template | ✅ Didukung | - | - |
| Impor | ✅ Didukung | - | - |
| Ekspor | ✅ Didukung | - | - |
| Ekspor lampiran | ✅ Didukung | - | - |
| Pindai kode QR | ✅ Didukung | - | - |
| AI employees | 🆕 Fitur baru | - | - |
| Aksi JS | 🆕 Fitur baru | - | - |

#### Fitur Lanjutan


| Kategori | Fitur | Status | Prioritas | Catatan |
| -------------------- | -------------------------- | ----------------------------- | -------- | ----- |
| UI templates | Blok | 🆕 Fitur baru | - | - |
| UI templates | Popup | 🆕 Fitur baru | - | - |
| UI templates | Bidang | 🆕 Fitur baru | - | - |
| UI templates > Bidang | Bidang formulir | 🆕 Fitur baru | - | - |
| UI templates > Bidang | Bidang detail | 🆕 Fitur baru | - | - |
| UI templates > Bidang | Bidang approval | 🆕 Fitur baru | - | - |
| UI dan izin | UI dan izin | ✨ Ditingkatkan | - | - |
| Alur peristiwa | Peristiwa alur peristiwa | 🆕 Fitur baru, 🚀 Mengoptimalkan | P1 | - |
| Alur peristiwa | Aksi alur peristiwa | 🆕 Fitur baru, 🚀 Mengoptimalkan | P1 | - |
| Aturan tautan | Aturan tautan | 🚀 Mengoptimalkan | P1 | - |
| Variabel | Pengguna saat ini | 🚀 Mengoptimalkan | P1 | - |
| Variabel | Peran saat ini (pengenal) | ✅ Didukung | - | - |
| Variabel | Ruang saat ini (pengenal) | ❌ Tidak didukung | P1 | - |
| Variabel | Kunci API | ✅ Didukung | - | - |
| Variabel | Parameter kueri URL | ✅ Didukung | - | - |
| Variabel | Perangkat saat ini | 🆕 Fitur baru | - | - |
| Variabel | Record saat ini | ✅ Didukung | - | - |
| Variabel | Formulir saat ini | ✅ Didukung | - | - |
| Variabel | Objek saat ini | ❌ Tidak didukung | P1 | - |
| Variabel | Popup saat ini | 🚀 Mengoptimalkan | P1 | - |
| Variabel | Record yang dipilih saat ini | ❌ Tidak didukung | P2 | - |
| Variabel | Variabel tanggal | 🔄 Sedang dikerjakan | P1 | - |
| Variabel | Variabel dan kunci | 🔄 Sedang dikerjakan | P1 | - |
| JavaScript | Jalankan JavaScript | 🆕 Fitur baru | - | - |

### Status Plugin


| Nama Plugin | Status Plugin | Prioritas | Catatan |
| ------------------------------------------------ | -------------------------------- | -------- | ----------------------------------------------- |
| @nocobase/plugin-action-bulk-edit | ❌ Tidak didukung | P1 | - |
| @nocobase/plugin-action-custom-request | ❌ Tidak didukung | - | - |
| @nocobase/plugin-action-duplicate | ❌ Tidak didukung | - | - |
| @nocobase/plugin-action-print | ❌ Tidak didukung | - | - |
| @nocobase/plugin-block-multi-step-form | ❌ Tidak didukung | - | - |
| @nocobase/plugin-block-tree | ❌ Tidak didukung | - | - |
| @nocobase/plugin-calendar | ❌ Tidak didukung | - | - |
| @nocobase/plugin-custom-variables | ❌ Tidak didukung | - | - |
| @nocobase/plugin-embed | ❌ Tidak didukung | - | - |
| @nocobase/plugin-field-china-region | ❌ Tidak didukung | - | - |
| @nocobase/plugin-field-code | ❌ Tidak didukung | P1 | - |
| @nocobase/plugin-field-sort | ❌ Tidak didukung | - | Pengurutan seret dan lepas record tidak didukung |
| @nocobase/plugin-file-previewer-office | ❌ Tidak didukung | - | - |
| @nocobase/plugin-gantt | ❌ Tidak didukung | - | - |
| @nocobase/plugin-kanban | ❌ Tidak didukung | - | - |
| @nocobase/plugin-public-forms | ❌ Tidak didukung | - | - |
| @nocobase/plugin-text-copy | ❌ Tidak didukung | - | - |
| @nocobase/plugin-data-visualization-echarts | ⚠️ Tidak digunakan lagi | - | Gunakan @nocobase/plugin-data-visualization sebagai gantinya |
| @nocobase/plugin-field-component-mask | ⚠️ Tidak digunakan lagi | - | - |
| @nocobase/plugin-mobile | ⚠️ Tidak digunakan lagi | - | Gunakan @nocobase/plugin-ui-layout sebagai gantinya |
| @nocobase/plugin-multi-app-manager | ⚠️ Tidak digunakan lagi | - | Gunakan @nocobase/plugin-app-supervisor sebagai gantinya |
| @nocobase/plugin-app-supervisor | 🆕 Fitur baru | P0 | Segera hadir |
| @nocobase/plugin-ai | 🆕 Fitur baru | - | - |
| @nocobase/plugin-ai-gigachat | 🆕 Fitur baru | - | - |
| @nocobase/plugin-block-grid-card | 🆕 Fitur baru | - | - |
| @nocobase/plugin-block-list | 🆕 Fitur baru | - | - |
| @nocobase/plugin-block-markdown | 🆕 Fitur baru | - | - |
| @nocobase/plugin-flow-engine | 🆕 Fitur baru | - | - |
| @nocobase/plugin-form-drafts | 🆕 Fitur baru | - | - |
| @nocobase/plugin-multi-space | 🆕 Fitur baru | - | - |
| @nocobase/plugin-record-history | 🆕 Fitur baru | - | - |
| @nocobase/plugin-telemetry | 🆕 Fitur baru | - | - |
| @nocobase/plugin-ui-layout | 🆕 Fitur baru, ❌ Tidak didukung | P2 | Direncanakan |
| @nocobase/plugin-ui-templates | 🆕 Fitur baru | - | - |
| @nocobase/plugin-acl | ✅ Didukung | - | - |
| @nocobase/plugin-action-bulk-update | ✅ Didukung | - | - |
| @nocobase/plugin-action-export | ✅ Didukung | - | - |
| @nocobase/plugin-action-export-pro | ✅ Didukung | - | - |
| @nocobase/plugin-action-import | ✅ Didukung | - | - |
| @nocobase/plugin-action-import-pro | ✅ Didukung | - | - |
| @nocobase/plugin-action-template-print | ✅ Didukung | - | - |
| @nocobase/plugin-api-doc | ✅ Didukung | - | - |
| @nocobase/plugin-api-keys | ✅ Didukung | - | - |
| @nocobase/plugin-async-task-manager | ✅ Didukung | - | - |
| @nocobase/plugin-audit-logger | ✅ Didukung | - | - |
| @nocobase/plugin-audit-logs | ✅ Didukung | - | - |
| @nocobase/plugin-auth | ✅ Didukung | - | - |
| @nocobase/plugin-auth-cas | ✅ Didukung | - | - |
| @nocobase/plugin-auth-dingtalk | ✅ Didukung | - | - |
| @nocobase/plugin-auth-ldap | ✅ Didukung | - | - |
| @nocobase/plugin-auth-oidc | ✅ Didukung | - | - |
| @nocobase/plugin-auth-saml | ✅ Didukung | - | - |
| @nocobase/plugin-auth-sms | ✅ Didukung | - | - |
| @nocobase/plugin-auth-wecom | ✅ Didukung | - | - |
| @nocobase/plugin-backup-restore | ✅ Didukung | - | - |
| @nocobase/plugin-backups | ✅ Didukung | - | - |
| @nocobase/plugin-block-iframe | ✅ Didukung | - | - |
| @nocobase/plugin-block-template | ✅ Didukung | - | - |
| @nocobase/plugin-block-tree | ✅ Didukung | - | - |
| @nocobase/plugin-block-workbench | ✅ Didukung | - | - |
| @nocobase/plugin-client | ✅ Didukung | - | - |
| @nocobase/plugin-collection-fdw | ✅ Didukung | - | - |
| @nocobase/plugin-collection-sql | ✅ Didukung | - | - |
| @nocobase/plugin-collection-tree | ✅ Didukung | - | - |
| @nocobase/plugin-comments | ✅ Didukung | - | - |
| @nocobase/plugin-custom-brand | ✅ Didukung | - | - |
| @nocobase/plugin-data-source-external-mariadb | ✅ Didukung | - | - |
| @nocobase/plugin-data-source-external-mssql | ✅ Didukung | - | - |
| @nocobase/plugin-data-source-external-mysql | ✅ Didukung | - | - |
| @nocobase/plugin-data-source-external-oracle | ✅ Didukung | - | - |
| @nocobase/plugin-data-source-external-postgres | ✅ Didukung | - | - |
| @nocobase/plugin-data-source-kingbase | ✅ Didukung | - | - |
| @nocobase/plugin-data-source-main | ✅ Didukung | - | - |
| @nocobase/plugin-data-source-manager | ✅ Didukung | - | - |
| @nocobase/plugin-data-source-rest-api | ✅ Didukung | - | - |
| @nocobase/plugin-data-visualization | ✅ Didukung | - | - |
| @nocobase/plugin-departments | ✅ Didukung | - | - |
| @nocobase/plugin-email-manager | ✅ Didukung | - | - |
| @nocobase/plugin-environment-variables | ✅ Didukung | - | - |
| @nocobase/plugin-error-handler | ✅ Didukung | - | - |
| @nocobase/plugin-field-attachment-url | ✅ Didukung | - | - |
| @nocobase/plugin-field-encryption | ✅ Didukung | - | - |
| @nocobase/plugin-field-formula | ✅ Didukung | - | - |
| @nocobase/plugin-field-m2m-array | ✅ Didukung | - | - |
| @nocobase/plugin-field-markdown-vditor | ✅ Didukung | - | - |
| @nocobase/plugin-field-sequence | ✅ Didukung | - | - |
| @nocobase/plugin-file-manager | ✅ Didukung | - | - |
| @nocobase/plugin-file-storage-s3-pro | ✅ Didukung | - | - |
| @nocobase/plugin-graph-collection-manager | ✅ Didukung | - | - |
| @nocobase/plugin-ip-restriction | ✅ Didukung | - | - |
| @nocobase/plugin-license | ✅ Didukung | - | - |
| @nocobase/plugin-locale-tester | ✅ Didukung | - | - |
| @nocobase/plugin-localization | ✅ Didukung | - | - |
| @nocobase/plugin-lock-adapter-redis | ✅ Didukung | - | - |
| @nocobase/plugin-logger | ✅ Didukung | - | - |
| @nocobase/plugin-map | ✅ Didukung | - | - |
| @nocobase/plugin-migration-manager | ✅ Didukung | - | - |
| @nocobase/plugin-multi-keyword-filter | ✅ Didukung | - | - |
| @nocobase/plugin-notification-email | ✅ Didukung | - | - |
| @nocobase/plugin-notification-in-app-message | ✅ Didukung | - | - |
| @nocobase/plugin-notification-manager | ✅ Didukung | - | - |
| @nocobase/plugin-password-policy | ✅ Didukung | - | - |
| @nocobase/plugin-pubsub-adapter-redis | ✅ Didukung | - | - |
| @nocobase/plugin-queue-adapter-rabbitmq | ✅ Didukung | - | - |
| @nocobase/plugin-queue-adapter-redis | ✅ Didukung | - | - |
| @nocobase/plugin-request-encryption | ✅ Didukung | - | - |
| @nocobase/plugin-system-settings | ✅ Didukung | - | - |
| @nocobase/plugin-telemetry-prometheus | ✅ Didukung | - | - |
| @nocobase/plugin-theme-editor | ✅ Didukung | - | - |
| @nocobase/plugin-two-factor-authentication | ✅ Didukung | - | - |
| @nocobase/plugin-ui-schema-storage | ✅ Didukung | - | - |
| @nocobase/plugin-user-data-sync | ✅ Didukung | - | - |
| @nocobase/plugin-users | ✅ Didukung | - | - |
| @nocobase/plugin-verification | ✅ Didukung | - | - |
| @nocobase/plugin-verification-totp-authenticator | ✅ Didukung | - | - |
| @nocobase/plugin-workerid-allocator-redis | ✅ Didukung | - | - |
| @nocobase/plugin-workflow | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-action-trigger | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-aggregate | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-approval | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-cc | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-custom-action-trigger | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-date-calculation | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-delay | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-dynamic-calculation | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-javascript | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-json-query | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-json-variable-mapping | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-loop | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-mailer | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-manual | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-notification | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-parallel | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-request | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-request-interceptor | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-response-message | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-sql | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-subflow | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-variable | ✅ Didukung | - | - |
| @nocobase/plugin-workflow-webhook | ✅ Didukung | - | - |
