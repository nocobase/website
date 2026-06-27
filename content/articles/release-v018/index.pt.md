---
title: "NocoBase 0.18: Estabeleça um sistema de testes sólido"
description: "NocoBase 0.18 melhora a robustez com testes E2E abrangentes, um plugin de autenticação otimizado e decomposição modular em plugins, melhorando a flexibilidade e o desempenho."
---

## Novas Funcionalidades

Para aumentar a robustez do NocoBase, temos complementado os testes E2E (ponta a ponta) ao longo do quarto trimestre. Simultaneamente, também estamos refinando todo o sistema de testes.

### @nocobase/test

Kit de teste do NocoBase, inclui:

* `@nocobase/test/server` Testes no lado do servidor
  * Integrado com `supertest` para testes de interface.
  * `mockDatabase` e `mockServer` incorporados.
* `@nocobase/test/client` Testes no lado do cliente
  * `@testing-library/react` e `@testing-library/user-event` integrados.
* `@nocobase/test/e2e` Testes E2E
  * Integração com `@playwright/test`.
  * Métodos mock comuns incorporados.

### Framework de teste

* Testes no lado do servidor, usando o framework Vitest
* Testes no lado do cliente, usando o framework Vitest
* Testes E2E, usando o framework Playwright

### Escrevendo testes

#### Testes no lado do servidor

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

#### Testes no lado do cliente

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

#### Testes E2E

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

### Executar o teste Vitest

```
# Executa todos os testes com dois processos Vitest paralelos para frontend e backend.
yarn test

# Executa casos de teste do cliente.
yarn test --client
# equivalente a
yarn cross-env TEST_ENV=client-side vitest

# Executa casos de teste do servidor.
yarn test --server
# equivalente a
yarn cross-env TEST_ENV=server-side vitest

# Especifica um diretório ou arquivo.
yarn test your/path/src/__tests__/test-file.test.ts
# Arquivos do lado do cliente devem incluir /client/
yarn test your/path/client/src/__tests__/test-file.test.ts
```

📢 Diferença ao executar vitest diretamente

* Ao especificar o caminho, você pode reconhecer automaticamente o frontend e o backend; o frontend deve incluir `/client/`.
* O teste do backend é `-single-thread` por padrão; se quiser desativá-lo, adicione `-single-thread=false`.
* O padrão é `--run`; se precisar ouvir, adicione `--watch`.

### Executar o teste Playwright

```
# Instalar dependências
yarn e2e install-deps

# Executar testes
yarn e2e test

# Modo UI
yarn e2e test --ui

# Especificar a URL da aplicação
yarn e2e test --url=http://localhost:20000

# Iniciar uma aplicação. Ela reinstala a cada execução.
yarn e2e start-app
```

## Outras mudanças

### Otimização do plugin de autenticação

* Guia de desenvolvimento de extensão de autenticação [https://docs.nocobase.com/handbook/auth/dev/guide](https://docs.nocobase.com/handbook/auth/dev/guide)
* Mudanças de última hora [https://docs-cn.nocobase.com/handbook/auth/dev/api](https://docs-cn.nocobase.com/handbook/auth/dev/api)

### Decomposição modular em plugins

Para refinar o kernel e torná-lo mais enxuto, certas funcionalidades passaram por uma separação modularizada. Recentemente, os plugins que passaram por essa modularização incluem:

| Nome do plugin                    | Nome do pacote                                  |
| ------------------------------ | --------------------------------------------- |
| Ação - Edição em massa             | @nocobase/plugin-action-bulk-edit             |
| Ação - Atualização em massa           | @nocobase/plugin-action-bulk-update           |
| Ação - Duplicar             | @nocobase/plugin-action-duplicate             |
| Kanban                         | @nocobase/plugin-kanban                       |
| Gantt                          | @nocobase/plugin-gantt                        |
| Fluxo de trabalho - Agregado           | @nocobase/plugin-workflow-aggregate           |
| Fluxo de trabalho - Aprovação            | @nocobase/plugin-workflow-approval            |
| Fluxo de trabalho - Atraso               | @nocobase/plugin-workflow-delay               |
| Fluxo de trabalho - Cálculo dinâmico | @nocobase/plugin-workflow-dynamic-calculation |
| Fluxo de trabalho - Gatilho de formulário        | @nocobase/plugin-workflow-form-trigger        |
| Fluxo de trabalho - Consulta JSON          | @nocobase/plugin-workflow-json-query          |
| Fluxo de trabalho - Loop                | @nocobase/plugin-workflow-loop                |
| Fluxo de trabalho - Manual              | @nocobase/plugin-workflow-manual              |
| Fluxo de trabalho - Paralelo            | @nocobase/plugin-workflow-parallel            |
| Fluxo de trabalho - Requisição             | @nocobase/plugin-workflow-request             |
| Fluxo de trabalho - SQL                 | @nocobase/plugin-workflow-sql                 |

Veja a [lista completa de plugins](https://www.nocobase.com/en/plugins) para detalhes. O documento está atualmente em construção, com algum conteúdo possivelmente ausente ou aguardando tradução. Você pode acompanhar [nocobase/docs](https://github.com/nocobase/docs) para atualizações.
