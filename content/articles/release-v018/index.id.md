---
title: "NocoBase 0.18: Membangun sistem pengujian yang kokoh"
description: "NocoBase 0.18 meningkatkan ketangguhan dengan pengujian E2E yang komprehensif, plugin auth yang dioptimalkan, dan dekomposisi modular menjadi plugin, meningkatkan fleksibilitas dan kinerja."
---

## Fitur Baru

Untuk meningkatkan ketangguhan NocoBase, kami telah melengkapi pengujian E2E (end-to-end) sepanjang kuartal keempat. Bersamaan dengan itu, kami juga terus menyempurnakan seluruh sistem pengujian.

### @nocobase/test

Paket pengujian NocoBase, meliputi:

* `@nocobase/test/server` pengujian sisi server
  * Terintegrasi `supertest` untuk pengujian antarmuka.
  * `mockDatabase` dan `mockServer` sudah tersedia.
* `@nocobase/test/client` Pengujian sisi klien
  * `@testing-library/react` dan `@testing-library/user-event` sudah terintegrasi.
* `@nocobase/test/e2e` Pengujian E2E
  * Integrasi `@playwright/test`.
  * Metode mock umum bawaan

### Kerangka kerja pengujian

* Pengujian sisi server, menggunakan kerangka kerja Vitest
* Pengujian sisi klien, menggunakan kerangka kerja Vitest
* Pengujian E2E, menggunakan kerangka kerja Playwright

### Menulis pengujian

#### Pengujian sisi server

```
import { mockDatabase } from '@nocobase/test/server';

describe('my db suite', () => {
  let db;

  beforeEach(async () => {
    db = mockDatabase();
    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });
    await db.sync();
  });

  afterEach(async () => {
    await db.close();
  });

  test('my case', async () => {
    const repository = db.getRepository('posts');
    const post = await repository.create({
      values: {
        title: 'hello',
      },
    });

    expect(post.get('title')).toEqual('hello');
  });
});
```

#### Pengujian sisi klien

```
import { render, screen, userEvent, waitFor } from '@nocobase/test/client';

it('should display the value of user input', async () => {
  const { container } = render(<App1 />);
  const input = container.querySelector('input');
  await userEvent.type(input, 'Hello World');
  await waitFor(() => {
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
```

#### Pengujian E2E

```
import { test } from '@nocobase/test/e2e';

test('sign in', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username/Email').click();
  await page.getByPlaceholder('Username/Email').fill('admin@nocobase.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(
      page.getByTestId('user-center-button').getByText('Super Admin')
    ).toBeVisible();
});
```

### Menjalankan pengujian Vitest

```
# Menjalankan semua pengujian dengan dua proses Vitest paralel untuk frontend dan backend.
yarn test

# Menjalankan kasus uji klien.
yarn test --client
# sama dengan
yarn cross-env TEST_ENV=client-side vitest

# Menjalankan kasus uji server.
yarn test --server
# sama dengan
yarn cross-env TEST_ENV=server-side vitest

# Menentukan direktori atau file.
yarn test your/path/src/__tests__/test-file.test.ts
# File sisi klien harus menyertakan /client/ 
yarn test your/path/client/src/__tests__/test-file.test.ts
```

📢 Perbedaan dengan menjalankan vitest secara langsung

* Saat Anda menentukan jalur, Anda dapat secara otomatis mengenali frontend dan backend, frontend harus menyertakan `/client/`.
* Pengujian backend secara default adalah `-single-thread`, jika ingin menonaktifkannya, Anda dapat menambahkan `-single-thread=false`.
* Defaultnya adalah `--run`, jika perlu mendengarkan, tambahkan `--watch`.

### Menjalankan pengujian Playwright

```
# Menginstal dependensi
yarn e2e install-deps

# Menjalankan pengujian
yarn e2e test

# Mode UI
yarn e2e test --ui

# Menentukan URL aplikasi
yarn e2e test --url=http://localhost:20000

# Memulai aplikasi. Ini akan menginstal ulang setiap kali.
yarn e2e start-app
```

## Perubahan Lainnya

### Optimasi plugin auth

* Panduan pengembangan ekstensi Auth [https://docs.nocobase.com/handbook/auth/dev/guide](https://docs.nocobase.com/handbook/auth/dev/guide)
* Perubahan besar [https://docs-cn.nocobase.com/handbook/auth/dev/api](https://docs-cn.nocobase.com/handbook/auth/dev/api)

### Dekomposisi modular menjadi plugin

Untuk menyempurnakan kernel dan membuatnya lebih ramping, fungsionalitas tertentu telah mengalami pemisahan modular. Baru-baru ini, plugin yang telah mengalami modularisasi ini meliputi:


| Nama Plugin                    | Nama Paket                                  |
| ------------------------------ | --------------------------------------------- |
| Aksi - Edit massal             | @nocobase/plugin-action-bulk-edit             |
| Aksi - Perbarui massal         | @nocobase/plugin-action-bulk-update           |
| Aksi - Duplikat                | @nocobase/plugin-action-duplicate             |
| Kanban                         | @nocobase/plugin-kanban                       |
| Gantt                          | @nocobase/plugin-gantt                        |
| Alur Kerja - Agregat           | @nocobase/plugin-workflow-aggregate           |
| Alur Kerja - Persetujuan       | @nocobase/plugin-workflow-approval            |
| Alur Kerja - Penundaan         | @nocobase/plugin-workflow-delay               |
| Alur Kerja - Perhitungan dinamis | @nocobase/plugin-workflow-dynamic-calculation |
| Alur Kerja - Pemicu formulir   | @nocobase/plugin-workflow-form-trigger        |
| Alur Kerja - Kueri JSON        | @nocobase/plugin-workflow-json-query          |
| Alur Kerja - Perulangan        | @nocobase/plugin-workflow-loop                |
| Alur Kerja - Manual            | @nocobase/plugin-workflow-manual              |
| Alur Kerja - Paralel           | @nocobase/plugin-workflow-parallel            |
| Alur Kerja - Permintaan        | @nocobase/plugin-workflow-request             |
| Alur Kerja - SQL               | @nocobase/plugin-workflow-sql                 |

Lihat [daftar lengkap plugin](https://www.nocobase.com/en/plugins) untuk detailnya. Dokumen saat ini sedang dalam pengembangan, beberapa konten mungkin hilang atau menunggu penerjemahan. Anda dapat mengikuti [nocobase/docs](https://github.com/nocobase/docs) untuk pembaruan.
