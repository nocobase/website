---
title: "NocoBase v1.6.0 Resmi Dirilis"
description: "Mode klaster, optimalisasi kebijakan keamanan, dan Manajer Migrasi, menghasilkan peningkatan menyeluruh dalam kinerja, keamanan, dan pengalaman pengguna."
---

## Fitur Baru

### Mode Cluster

Edisi Enterprise mendukung deployment mode cluster melalui plugin terkait. Saat aplikasi berjalan dalam mode cluster, aplikasi dapat memanfaatkan banyak instance dan pemrosesan multi-core untuk meningkatkan kinerjanya dalam menangani akses bersamaan.

![Tangkapan Layar Mode Cluster](https://static-docs.nocobase.com/20241231010814.png)

Referensi: [Deployment - Mode Cluster](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode)

### Kebijakan Kata Sandi

Kebijakan kata sandi ditetapkan untuk semua pengguna, termasuk aturan untuk kompleksitas kata sandi, periode validitas, dan strategi keamanan login, beserta pengelolaan akun yang terkunci.

![Tangkapan Layar Kebijakan Kata Sandi](https://static-docs.nocobase.com/202412281329313.png)

Referensi: [Kebijakan Kata Sandi](https://docs.nocobase.com/handbook/password-policy)

### Kebijakan Token

Kebijakan Keamanan Token adalah konfigurasi fungsi yang dirancang untuk melindungi keamanan sistem dan meningkatkan pengalaman pengguna. Ini mencakup tiga item konfigurasi utama: "validitas sesi," "periode efektif token," dan "batas penyegaran token kedaluwarsa."

![Tangkapan Layar Kebijakan Token](https://static-docs.nocobase.com/20250105111821-2025-01-05-11-18-24.png)

Referensi: [Kebijakan Token](https://docs.nocobase.com/handbook/token-policy)

### Pembatasan IP

NocoBase memungkinkan administrator untuk mengatur daftar izin atau daftar blokir IP untuk akses pengguna guna membatasi koneksi jaringan eksternal yang tidak sah atau memblokir alamat IP berbahaya yang diketahui, sehingga mengurangi risiko keamanan. Ini juga mendukung kueri log penolakan akses untuk mengidentifikasi IP berisiko.

![Tangkapan Layar Pembatasan IP](https://static-docs.nocobase.com/2025-01-23-10-07-34-20250123100733.png)

Referensi: [Pembatasan IP](https://docs.nocobase.com/handbook/IP-restriction)

### Variabel dan Rahasia

Konfigurasi dan pengelolaan variabel lingkungan dan rahasia terpusat disediakan untuk penyimpanan data sensitif, penggunaan kembali konfigurasi, isolasi lingkungan, dan lainnya.

![Tangkapan Layar Variabel Lingkungan](https://static-docs.nocobase.com/1ee6c3fa09533b19f4d6038f53b06006.png)

Referensi: [Variabel dan Rahasia](https://docs.nocobase.com/handbook/environment-variables)

### Manajer Migrasi

Fitur ini memungkinkan Anda untuk memigrasikan konfigurasi aplikasi dari satu lingkungan ke lingkungan lainnya.

![Tangkapan Layar Manajer Migrasi](https://static-docs.nocobase.com/20250107105005.png)

Referensi:

- [Manajer Migrasi](https://docs.nocobase.com/handbook/migration-manager)
- [Manajemen Rilis](https://docs.nocobase.com/handbook/release-management)

### Manajemen Rute

- **Data Menu Dipisahkan dan Diganti Nama Menjadi Rute**: Data menu telah dipisahkan dari Skema UI dan diganti nama menjadi "rute." Ini dibagi menjadi dua tabel, desktopRoutes dan mobileRoutes, yang masing-masing sesuai dengan rute desktop dan seluler.
- **Optimasi Menu Frontend dengan Dukungan Ciutkan dan Responsif**: Menu frontend sekarang mendukung fungsi ciutkan dan desain responsif untuk pengalaman pengguna yang lebih baik.

![Tangkapan Layar Manajemen Rute](https://static-docs.nocobase.com/20250107115449.png)

Referensi: [Rute](https://docs.nocobase.com/handbook/routes)

### Peran dan Izin

- Mendukung konfigurasi izin tindakan.
  ![Tangkapan Layar Peran dan Izin 1](https://static-docs.nocobase.com/b0a7905d9fd4beaaf21592b1f56fe752.png)
- Mendukung konfigurasi izin tab.

![Tangkapan Layar Peran dan Izin 2](https://static-docs.nocobase.com/4fd3a5144a2301638b9f24b033d33add.png)

### Manajemen Pengguna

Mendukung kustomisasi formulir profil pengguna.

![Tangkapan Layar Manajemen Pengguna](https://static-docs.nocobase.com/171e5a4c61033afb237c9ae1a3d89000.png)

### Alur Kerja

Entri untuk pusat tugas alur kerja telah ditambahkan ke toolbar global, menyediakan notifikasi waktu nyata untuk node manual dan tugas persetujuan yang tertunda.

![Tangkapan Layar Alur Kerja](https://static-docs.nocobase.com/855c58536f9fd29ae353dd19b3aff73f.png)

### Alur Kerja: Peristiwa Tindakan Kustom

Mendukung pemicuan peristiwa tindakan kustom secara global dan dalam tindakan batch.

![Tangkapan Layar Peristiwa Tindakan Kustom](https://static-docs.nocobase.com/106ae1296d180718799eb6d7f423805c.png)

### Alur Kerja: Persetujuan

- Mendukung pengalihan tanggung jawab persetujuan dan penambahan penyetuju tambahan.
  ![Tangkapan Layar Formulir Persetujuan](https://static-docs.nocobase.com/20241226232013.png)
- Memungkinkan penyetuju untuk memodifikasi konten aplikasi saat mengirimkan persetujuan.
  ![Tangkapan Layar Modifikasi Persetujuan](https://static-docs.nocobase.com/20241226232124.png)
- Mendukung konfigurasi blok informasi dasar dalam antarmuka persetujuan.
- Mengoptimalkan gaya dan interaksi untuk memulai persetujuan dan melihat tugas yang tertunda, dengan peningkatan ini juga diintegrasikan ke dalam pusat tugas proses global.
  ![Tangkapan Layar Pusat Tugas Persetujuan](https://static-docs.nocobase.com/20250310161203.png)
- Tidak lagi membedakan lokasi di mana persetujuan dimulai; blok pusat persetujuan dapat memulai dan memproses semua persetujuan.

### Alur Kerja: Node Pemetaan Variabel JSON

Node khusus baru telah ditambahkan untuk memetakan data JSON dari hasil node hulu ke dalam variabel.

![Tangkapan Layar Node Pemetaan Variabel JSON](https://static-docs.nocobase.com/20250113173635.png)

Referensi: [Pemetaan Variabel JSON](https://docs.nocobase.com/handbook/workflow/nodes/json-variable-mapping)

### Peningkatan Kemampuan dan Contoh Plugin


| Ekstensi                         | Contoh Plugin                                                  |
| --------------------------------- | --------------------------------------------------------------- |
| Bidang Prasetel Kustom Sumber Data  | @nocobase-sample/plugin-data-source-main-custom-preset-fields   |
| Bidang Warna Daftar Kalender     | @nocobase-sample/plugin-calendar-register-color-field           |
| Bidang Judul Daftar Kalender     | @nocobase-sample/plugin-calendar-register-title-field           |
| Bidang Ekspresi Daftar Rumus | @nocobase-sample/plugin-field-formula-register-expression-field |
| Bidang Grup Daftar Kanban       | @nocobase-sample/plugin-kanban-register-group-field             |
| Operator Filter Daftar          | @nocobase-sample/plugin-register-filter-operator                |
| Ekstensi Penyimpanan File            | @nocobase-sample/plugin-file-storage-demo                       |

## Perubahan yang Merusak

### Pembaruan ke Kebijakan Token

Di versi 1.6, [Kebijakan Token](https://docs.nocobase.com/handbook/token-policy) baru diperkenalkan. Ketika autentikasi gagal, kesalahan 401 akan dikembalikan bersama dengan pengalihan ke halaman login. Perilaku ini berbeda dari versi sebelumnya. Untuk melewati pemeriksaan, lihat contoh berikut:

Permintaan Frontend:

```javascript
useRequest({
  url: '/test',
  skipAuth: true,
});

api.request({
  url: '/test',
  skipAuth: true,
});
```

Middleware Backend:

```javascript
class PluginMiddlewareExampleServer extends plugin {
  middlewareExample = (ctx, next) => {
    if (ctx.path === '/path/to') {
      ctx.skipAuthCheck = true;
    }
    await next();
  };
  async load() {
    this.app.dataSourceManager.afterAddDataSource((dataSource) => {
      dataSource.resourceManager.use(this.middlewareExample, {
        before: 'auth',
      });
    });
  }
}
```

### Fungsi agent.login pada Pengujian Unit Berubah dari Sinkron menjadi Asinkron

Karena beberapa operasi asinkron yang diperlukan dalam proses autentikasi, fungsi login pengujian sekarang bersifat asinkron. Contoh:

```TypeScript
import { createMockServer } from '@nocobase/test';

describe('my db suite', () => {
  let app;
  let agent;

  beforeEach(async () => {
    app = await createMockServer({
      registerActions: true,
      acl: true,
      plugins: ['users', 'auth', 'acl'],
    });
    agent = await app.agent().login(1);
  });

  test('case1', async () => {
    await agent.get('/examples');
    await agent.get('/examples');
    await agent.resource('examples').create();
  });
});
```

### API Ekstensi Baru untuk Item Pengaturan Pusat Pengguna

API:

```TypeScript
type UserCenterSettingsItemOptions = SchemaSettingsItemType & { aclSnippet?: string };

class Application {
  addUserCenterSettingsItem(options: UserCenterSettingsItemOptions);
}
```

Contoh:

```javascript
class PluginUserCenterSettingsExampleClient extends plugin {
  async load() {
    this.app.addUserCenterSettingsItem({
      name: 'nickName',
      Component: NickName,
      sort: 0,
    });
  }
}
```
