---
title: "Mengembangkan Plugin untuk Mengirim Pesan WhatsApp di NocoBase"
description: "Tujuan artikel ini adalah untuk menunjukkan langkah-langkah membuat plugin di NocoBase untuk memenuhi kebutuhan spesifik."
---

📝 **Catatan:** Artikel ini terakhir diperbarui pada 23 Januari 2026. Kami secara rutin memperbarui informasi untuk memastikan Anda mendapatkan wawasan terbaru! 😊

Blog ini dibuat oleh Leandro Martins dan pertama kali diterbitkan di [Mengembangkan Plugin untuk Mengirim Pesan WhatsApp di NocoBase](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase).

Tujuan artikel ini adalah untuk mendemonstrasikan langkah-langkah pembuatan plugin di NocoBase untuk memenuhi kebutuhan spesifik. Kami akan membahas desain arsitektur, membuat struktur dasar, mengaktifkan plugin, mendefinisikan dan membuat koleksi, membuat *endpoint*, membangun antarmuka konfigurasi, mengintegrasikan dengan alur kerja, dan mengekspor plugin.

Untuk artikel ini, kami akan menggunakan teknologi berikut: NocoBase, PostgreSQL, dan Docker. Alat-alat ini seharusnya sudah dikonfigurasi. Untuk petunjuk instalasi, lihat panduan terpisah yang saya tulis [di sini](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase).

---

💬 Hei, Anda sedang membaca blog NocoBase. NocoBase adalah platform pengembangan *no-code/low-code* bertenaga AI yang paling dapat diperluas untuk membangun aplikasi perusahaan, alat internal, dan semua jenis sistem. Platform ini sepenuhnya *self-hosted*, berbasis plugin, dan ramah pengembang. →[ Jelajahi NocoBase di GitHub](https://github.com/nocobase/nocobase)

---

## Arsitektur Plugin

![Arsitektur Plugin.png](https://static-docs.nocobase.com/dfcb0082a99b45aa4334c8460708a50b.png)

## Membuat Struktur Plugin

Untuk membuat plugin, cukup jalankan perintah di bawah ini. Anda dapat menemukan lebih banyak detail tentang struktur plugin, kode awal, dan perintah di [dokumentasi](https://docs.nocobase.com/development/your-fisrt-plugin).

```
yarn pm create @my-project/plugin-whatsapp
```

Setelah dibuat, file yang dihasilkan akan ditempatkan di folder `packages` dengan nama plugin yang ditentukan, seperti yang ditunjukkan pada gambar di bawah. Untuk lebih memahami struktur folder, Anda dapat merujuk ke manual [di sini](https://docs.nocobase.com/development/app-ds).

![nama plugin yang ditentukan.png](https://static-docs.nocobase.com/c63fb5375b27a5c2520437df9bfbb253.png)

## Mengaktifkan Plugin

Untuk mengaktifkan plugin, Anda dapat pergi ke layar plugin dan mengaktifkannya menggunakan tombol *toggle*, seperti yang ditunjukkan pada gambar di bawah, atau jalankan perintah di bawah ini.

```
yarn pm enable @my-project/plugin-hello
```

![Mengaktifkan Plugin.png](https://static-docs.nocobase.com/12c6a36ffb3acdddd4e95a415d19460a.png)

## Membuat Koleksi

Koleksi sangat penting karena mereka mendefinisikan struktur data yang disimpan dalam tabel di basis data Anda. Untuk contoh ini, saya membuat dua koleksi, seperti yang dijelaskan di bawah.

1. **ProvideConfig**
   * **API Key**: Kunci API Meta untuk mengakses API WhatsApp
   * **URL**: URL API
   * **Cell Phone From**: Nomor telepon WhatsApp Business
2. **MessageQueue**
   * **Content**: Konten pesan
   * **Status**: Tertunda atau Selesai

Di NocoBase, koleksi terletak di folder `/src/server/collections/`. Struktur dasarnya ditunjukkan di bawah. Untuk detail lebih lanjut, lihat dokumentasi [di sini](https://docs.nocobase.com/development/server/collections).

```
##File: ProvideConfig
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'ProvideConfig',
  fields: [
    { type: 'string', name: 'api_key' },
    { type: 'string', name: 'url' },
    { type: 'string', name: 'cell_phone_from' },
  ],
},
);

##File: MessageQueue
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'MessageQueue',
  fields: [
    { type: 'string', name: 'content' },
    { type: 'string', name: 'status' }
  ],
},
);
```

## Membuat *Endpoint*

*Endpoint* memungkinkan sistem eksternal untuk berinteraksi dengan tindakan dalam aplikasi Anda, memungkinkan integrasi di antara mereka. Dalam kasus ini, kami akan membuat *endpoint* untuk menjadwalkan eksekusi yang secara asinkron memanggil API WhatsApp untuk mengirim pesan.

Untuk membuat *endpoint*, Anda dapat menggunakan file `/src/server/plugin.ts` dan menambahkan kode di dalam metode `load`, seperti yang ditunjukkan pada contoh di bawah. Di ACL (*Access Control List*), Anda mendefinisikan izin untuk *endpoint*. Menggunakan `resourceManager`, Anda mendaftarkan *endpoint* dengan metodenya. Setelah dikonfigurasi, *endpoint* akan tersedia di:[`http://localhost:13001/api/whatsapp:sendMessage`](http://localhost:13001/api/whatsapp:sendMessage)

```
import { Plugin } from '@nocobase/server';

export class PluginHelloServer extends Plugin {

  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    this.app.acl.allow('whatsapp', '*', 'public');

    this.app.resourceManager.define({
      name: 'whatsapp',
      actions: {
        async sendMessage(ctx, next) {

          //Simpan pesan dalam antrian status: pending

          //Ambil parameter API WhatsApp di database;

          //Coba kirim pesan whatsapp menggunakan API

          // Jika OK, perbarui status: done Jika tidak: perbarui status: error
        }
      }
    });

  }

...
```

## **Membuat Antarmuka Konfigurasi**

NocoBase memungkinkan Anda membuat antarmuka menggunakan React dan Ant Design. Dalam kasus ini, saya akan membuat antarmuka di area pengaturan plugin. Antarmuka ini akan memungkinkan pendefinisian pengaturan API WhatsApp dan melihat pesan yang telah dikirim beserta statusnya, seperti yang ditunjukkan pada gambar di bawah.

![Membuat Antarmuka Konfigurasi.png](https://static-docs.nocobase.com/e52ce1228c1d80069b3a415f744eefb9.png)

Di folder `/src/client`, Anda dapat membuat antarmuka menggunakan React dan Ant Design. Kode di bawah memberikan gambaran tentang struktur sederhana yang diperlukan untuk membuat layar yang ditunjukkan pada gambar. Untuk detail lebih lanjut, Anda dapat memeriksa tautan ini, di mana Anda akan menemukan informasi tentang membuat menu, layar, dan rute.

```

##File: index.tsx
import { Plugin } from '@nocobase/client';
import { Alert, Button, Form, Input, Table, Tabs, TabsProps } from 'antd';
import React, { useState } from 'react';

/**
 *
 */
export class PluginWhatsappClient extends Plugin {

  async afterAdd() {
    // await this.app.pm.add()
  }

  async beforeLoad() {
  }

  async load() {

    // this.app.addComponents({})
    // this.app.addScopes({})
    // this.app.addProvider()
    // this.app.addProviders()
    // this.app.router.add()

    const PluginWhatsAppTabs = () => {

      const [apiKey, setApiKey] = useState();
      const [url, setUrl] = useState();
      const [cellPhoneFrom, setCellPhoneFrom] = useState();

      const onChange = async (key: string) => {

        //Ambil data dari api dan atur di input.
        const { data } = await this.app.apiClient.request({ url: 'ProvideConfig:get', params: { filterByTk: 1 } });
        setApiKey(data.data.api_key);
        setUrl(data.data.url);
        setCellPhoneFrom(data.data.celular_from);
      };

      const onClickSubmit = () => {

        //Aksi untuk memperbarui input di DB menggunakan API.
        console.log('Ok');
      }

      //Data tiruan dengan pesan
      const dataSource = [
        {
          key: '1',
          content: 'Olá bem vindo',
          date: '24/12/2024',
          status: 'Pendente',
        },
        {
          key: '2',
          content: 'Olá bem vindo',
          date: '23/12/2024',
          status: 'Enviado',
        }
      ];

      const columns = [
        {
          title: 'Content',
          dataIndex: 'content',
          key: 'content',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
      ];

      const instructions = (<><p>Instruksi:</p>
        <ul>
          <li>Pengaturan di bawah ini berasal dari penyedia pesan Meta, dan harus diisi dengan informasi yang benar untuk mengirim pesan secara otomatis. Untuk detail lebih lanjut, kunjungi: https://developers.facebook.com/docs/whatsapp/cloud-api</li>
          <li>Setelah mengonfigurasi pengaturan di bawah, untuk mengirim pesan, cukup gunakan *endpoint* /api/sendMessage:post</li>
        </ul>
      </>);

      const itemsTabs: TabsProps['items'] = [
        {
          key: '1',
          label: 'Pesan',
          children: (<Table dataSource={dataSource} columns={columns} />),
        },
        {
          key: '2',
          label: 'Konfigurasi',
          children: (<>
            <p><Alert message={instructions} type="error" /></p>
            <Form layout="vertical">
              <Form.Item label="* API Key Meta:" style={{ fontWeight: 'bold' }}>
                <Input placeholder="xxxxxxxxxx" value={apiKey} />
              </Form.Item>
              <Form.Item label="* URL API Meta:" style={{ fontWeight: 'bold' }}>
                <Input placeholder="domain.com..." value={url} />
              </Form.Item>
              <Form.Item label="* Cell phone from:" style={{ fontWeight: 'bold' }}>
                <Input placeholder="5554899991234" value={cellPhoneFrom} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={onClickSubmit}>Submit</Button>
              </Form.Item>
            </Form></>
          ),
        }
      ];

      return (<Tabs defaultActiveKey="1" items={itemsTabs} onChange={onChange}/>)

    }

    this.app.pluginSettingsManager.add('whatsapp', {
      title: 'WhatsApp',
      icon: 'WhatsAppOutlined',
      Component: PluginWhatsAppTabs,
      sort: 100,
    });
  }
}

export default PluginWhatsappClient;
```

Kode di atas menghasilkan layar di bawah untuk plugin yang dibuat. Beberapa bagian dikomentari agar kode tetap ringkas.

![Membuat Antarmuka Konfigurasi.png](https://static-docs.nocobase.com/d0e00558051e08b313e118b34a6c1352.png)

## **Mengintegrasikan dengan Alur Kerja NocoBase**

Ada beberapa cara untuk menggunakan *endpoint* yang dibuat di plugin untuk mengirim pesan. Salah satunya adalah dengan memicunya di dalam alur kerja NocoBase. Pada dasarnya, ini melibatkan pembuatan alur kerja tipe "HTTP Request" dan meneruskan data seperti yang ditunjukkan pada gambar di bawah.

![**Mengintegrasikan dengan Alur Kerja NocoBase.png](https://static-docs.nocobase.com/d02220eeba3f609f6d9f5174b954f42f.png)

## **Mengekspor Plugin sebagai File**

Untuk mengekspor plugin yang telah dibuat, cukup jalankan perintah di bawah ini. Ini akan menghasilkan file `.tar` yang dapat diinstal di instance NocoBase lainnya. Untuk detail lebih lanjut, Anda dapat merujuk ke dokumentasi [di sini](https://docs.nocobase.com/development/your-fisrt-plugin)[.](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase#)

```
yarn build @my-project/plugin-hello
yarn nocobase tar @my-project/plugin-hello
```

## Kesimpulan

Tujuan artikel ini adalah untuk mendemonstrasikan proses pembuatan dan struktur dasar plugin di NocoBase. Beberapa bagian dari kode dapat ditulis ulang dan ditingkatkan. Segera, saya berencana untuk menambahkan proyek ini ke repositori dan membagikan plugin yang telah direvisi kepada komunitas.

**Bacaan terkait:**

* [Simplified Architecture Governance: Building an Application Catalog with NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [How to Backup and Restore NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [How to build apps with NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [How to upload a Docker image to an intranet server](https://www.nocobase.com/en/blog/load-docker-image)
* [First Optimization Process for NocoBase Server-Side APIs](https://www.nocobase.com/en/blog/first-optimization-process-for-nocobase-server-side-apis)
