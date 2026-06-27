---
title: "NocoBase 0.18: Establecer un sistema de pruebas sólido"
description: "NocoBase 0.18 mejora la solidez con pruebas E2E exhaustivas, un plugin de autenticación optimizado y una descomposición modular en plugins, mejorando la flexibilidad y el rendimiento."
---

## Nuevas Funcionalidades

Para mejorar la robustez de NocoBase, hemos estado complementando las pruebas E2E (de extremo a extremo) durante el cuarto trimestre. Al mismo tiempo, también hemos estado refinando todo el sistema de pruebas.

### @nocobase/test

Kit de pruebas de NocoBase, incluye:

* `@nocobase/test/server` pruebas del lado del servidor
  * Integrado `supertest` para pruebas de interfaz.
  * `mockDatabase` y `mockServer` están integrados.
* `@nocobase/test/client` Pruebas del lado del cliente
  * `@testing-library/react` y `@testing-library/user-event` están integrados.
* `@nocobase/test/e2e` Pruebas E2E
  * Integración de `@playwright/test`.
  * Métodos mock comunes integrados

### Marco de pruebas

* Pruebas del lado del servidor, utilizando el framework Vitest
* Pruebas del lado del cliente, utilizando el framework Vitest
* Pruebas E2E, utilizando el framework Playwright

### Escribir pruebas

#### Pruebas del lado del servidor

```
import { mockDatabase } from '@nocobase/test/server';

describe('mi suite de db', () => {
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

  test('mi caso', async () => {
    const repository = db.getRepository('posts');
    const post = await repository.create({
      values: {
        title: 'hola',
      },
    });

    expect(post.get('title')).toEqual('hola');
  });
});
```

#### Pruebas del lado del cliente

```
import { render, screen, userEvent, waitFor } from '@nocobase/test/client';

it('debería mostrar el valor de la entrada del usuario', async () => {
  const { container } = render(<App1 />);
  const input = container.querySelector('input');
  await userEvent.type(input, 'Hola Mundo');
  await waitFor(() => {
    expect(screen.getByText('Hola Mundo')).toBeInTheDocument();
  });
});
```

#### Pruebas E2E

```
import { test } from '@nocobase/test/e2e';

test('iniciar sesión', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Usuario/Email').click();
  await page.getByPlaceholder('Usuario/Email').fill('admin@nocobase.com');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('admin123');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await expect(
      page.getByTestId('user-center-button').getByText('Super Admin')
    ).toBeVisible();
});
```

### Ejecutar la prueba Vitest

```
# Ejecutar todas las pruebas con dos procesos Vitest en paralelo para frontend y backend.
yarn test

# Ejecutar casos de prueba del cliente.
yarn test --client
# equivalente a
yarn cross-env TEST_ENV=client-side vitest

# Ejecutar casos de prueba del servidor.
yarn test --server
# equivalente a
yarn cross-env TEST_ENV=server-side vitest

# Especificar un directorio o archivo.
yarn test tu/ruta/src/__tests__/archivo-de-prueba.test.ts
# Los archivos del lado del cliente deben incluir /client/
yarn test tu/ruta/client/src/__tests__/archivo-de-prueba.test.ts
```

📢 Diferencia con ejecutar vitest directamente

* Cuando especificas la ruta, puedes reconocer automáticamente el frontend y el backend, el frontend debe incluir `/client/`.
* La prueba del backend es `-single-thread` por defecto, si quieres desactivarla, puedes añadir `-single-thread=false`.
* Por defecto es `--run`, si necesitas escuchar, añade `--watch`.

### Ejecutar la prueba Playwright

```
# Instalar dependencias
yarn e2e install-deps

# Ejecutar pruebas
yarn e2e test

# Modo UI
yarn e2e test --ui

# Especificar la URL de la aplicación
yarn e2e test --url=http://localhost:20000

# Iniciar una aplicación. Se reinstala cada vez.
yarn e2e start-app
```

## Otros cambios

### Optimización del plugin de autenticación

* Guía de desarrollo de extensiones de autenticación [https://docs.nocobase.com/handbook/auth/dev/guide](https://docs.nocobase.com/handbook/auth/dev/guide)
* Cambios importantes [https://docs-cn.nocobase.com/handbook/auth/dev/api](https://docs-cn.nocobase.com/handbook/auth/dev/api)

### Descomposición modular en plugins

Para refinar el núcleo y hacerlo más ágil, ciertas funcionalidades han sido sometidas a una separación modular. Recientemente, los plugins que han pasado por esta modularización incluyen:

| Nombre del plugin               | Nombre del paquete                              |
| ------------------------------- | ----------------------------------------------- |
| Acción - Edición masiva         | @nocobase/plugin-action-bulk-edit               |
| Acción - Actualización masiva   | @nocobase/plugin-action-bulk-update             |
| Acción - Duplicar               | @nocobase/plugin-action-duplicate               |
| Kanban                          | @nocobase/plugin-kanban                         |
| Gantt                           | @nocobase/plugin-gantt                          |
| Flujo de trabajo - Agregado     | @nocobase/plugin-workflow-aggregate             |
| Flujo de trabajo - Aprobación   | @nocobase/plugin-workflow-approval              |
| Flujo de trabajo - Retardo      | @nocobase/plugin-workflow-delay                 |
| Flujo de trabajo - Cálculo dinámico | @nocobase/plugin-workflow-dynamic-calculation |
| Flujo de trabajo - Disparador de formulario | @nocobase/plugin-workflow-form-trigger        |
| Flujo de trabajo - Consulta JSON | @nocobase/plugin-workflow-json-query            |
| Flujo de trabajo - Bucle        | @nocobase/plugin-workflow-loop                  |
| Flujo de trabajo - Manual       | @nocobase/plugin-workflow-manual                |
| Flujo de trabajo - Paralelo     | @nocobase/plugin-workflow-parallel              |
| Flujo de trabajo - Solicitud    | @nocobase/plugin-workflow-request               |
| Flujo de trabajo - SQL          | @nocobase/plugin-workflow-sql                   |

Consulta la [lista completa de plugins](https://www.nocobase.com/en/plugins) para más detalles. El documento está actualmente en construcción, con algún contenido posiblemente faltante o pendiente de traducción. Puedes seguir [nocobase/docs](https://github.com/nocobase/docs) para actualizaciones.
