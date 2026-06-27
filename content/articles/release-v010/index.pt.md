---
title: "NocoBase 0.10: Novos recursos no segundo trimestre"
description: "NocoBase 0.10 melhora o componente de campo relacional, suportando múltiplas alternâncias de componentes, e adiciona funcionalidade de criação rápida de dados relacionais com dois modos de criação rápida e outras atualizações."
---

## Novas funcionalidades do segundo trimestre

- Melhorias no componente de campo de associação, suporte para alternância de múltiplos componentes
  - Selecionar
  - Seletor de registro
  - Sub-formulário/Sub-detalhes
  - Sub-tabela
  - Gerenciador de arquivos
  - Título (somente leitura)
- Criação rápida de dados relacionais, suporta dois modos de criação rápida
  - Adicionar no menu suspenso para criar rapidamente um novo registro com base no campo de título
  - Adicionar em janela pop-up para configurar formulários de adição complexos
- Ação de duplicação, suporta dois modos
  - Duplicação direta
  - Copiar para o formulário e continuar preenchendo
- Modelos de dados de formulário
- Escopo de dados de filtro com suporte a variáveis
- Bloco de lista
- Bloco de cartão em grade
- Plugin de cliente móvel
- Plugin de autenticação de usuário, suporte para diferentes métodos de autenticação
  - E-mail/Senha
  - SMS
  - OIDC
  - SAML
- Nós de fluxo de trabalho
  - Atualização do nó manual, suporte para adicionar e editar a partir de coleções existentes
  - Nó de loop
  - Nó de agregação
- Gerenciador de arquivos
  - Fornecer modelo de coleção de arquivos
  - Fornecer componente de gerenciador de arquivos

## Atualizando aplicações

### Atualizando para Docker compose

Sem alterações, consulte a referência [Atualizando para Docker compose](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose)

### Atualizando para código-fonte Git

A v0.10 tem uma grande atualização de dependências, portanto, para evitar erros ao atualizar o código-fonte, você precisa excluir os seguintes diretórios antes de atualizar

```bash
# Remover cache .umi
yarn rimraf -rf "./**/{.umi,.umi-production}"
# Excluir arquivos compilados
yarn rimraf -rf "./packages/*/*/{lib,esm,es,dist,node_modules}"
# Remover dependências
yarn rimraf -rf node_modules
```

Consulte [Atualizando para código-fonte Git](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone) para mais detalhes

### Atualizando para create-nocobase-app

Recomenda-se que `yarn create` baixe novamente a nova versão e modifique a configuração `.env`. Para mais detalhes, consulte o [guia de atualização de versão principal](https://docs.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app#major-upgrade)

## Mudanças futuras obsoletas e potencialmente incompatíveis

### Componente de campo de sub-tabela

Não compatível com a nova versão, os campos do bloco precisam ser removidos e reatribuídos (somente reatribuição de UI)

### Mudanças na API de upload de anexos

Além da tabela de anexos integrada, os usuários também podem personalizar a coleção de arquivos. A API de upload para anexos foi alterada de `/api/attachments:upload` para `/api/<file-collection>:create`. O upload está obsoleto, ainda compatível com a v0.10, mas será removido.

### Mudanças na API signin/signup

O kernel do NocoBase fornece um [módulo de autenticação](https://github.com/nocobase/nocobase/tree/main/packages/plugins/auth) mais poderoso, com as seguintes alterações nas APIs de login, registro, verificação e logout do usuário:

```bash
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

Nota: A interface de usuários acima, que está obsoleta, ainda é compatível com a v0.10, mas será removida na próxima versão principal.

### Ajustes na filtragem de campo de data

Se a filtragem relacionada a data foi configurada anteriormente no intervalo de dados, ela precisa ser excluída e reconfigurada.

## Guia de atualização de plugins de terceiros

### Atualização de dependências

As dependências incluem principalmente

- `react` atualizado para v18
- `react-dom` atualizado para v18
- `react-router` atualizado para v6.11
- `umi` atualizado para v4
- `dumi` atualizado para v2

As dependências em `package.json` devem ser alteradas para a versão mais recente, por exemplo:

```diff
{
  "devDependencies": {
+   "react": "^18".
+   "react-dom": "^18".
+   "react-router-dom": "^6.11.2".
-   "react": "^17".
-   "react-dom": "^17".
-   "react-router-dom": "^5".
  }
}
```

### Mudanças de código

Como o react-router foi atualizado, o código relacionado também precisa ser alterado. As principais mudanças incluem

### Componente Layout

O componente Layout precisa usar `<Outlet />` em vez de `props.children`.

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
-      { props.children }
+      <Outlet />
    </div>
  );
}
```

Se você usa `React.cloneElement` para renderizar o componente de rota, precisa alterar assim:

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function RouteComponent(props) {
  return (
    <div>
-      { React.cloneElement(props.children, { someProp: 'p1' }) }
+      <Outlet context={{ someProp: 'p1' }} />
    </div>
  );
}
```

Altere o componente de rota para obter o valor de `useOutletContext`

```diff
import React from 'react';
+ import { useOutletContext } from 'react-router-dom';

- export function Comp(props){
+ export function Comp() {
+   const props = useOutletContext();
  return props.someProp;
}
```

### Redirecionamento

`<Redirect>` é alterado para `<Navigate replace />`.

```diff
- <Redirect to="about" />
+ <Navigate to="about" replace />
```

### useHistory

`useNavigate` é alterado para `useHistory`.

```diff
- import { useHistory } from 'react-router-dom';
+ import { useNavigate} from 'react-router-dom';

- const history = useHistory();
+ const navigate = useNavigate();

- history.push('/about')
+ navigate('/about')

- history.replace('/about')
+ navigate('/about', { replace: true })
```

### useLocation

`useLocation<type>()` é alterado para `useLocation`.

```diff
- const location= useLocation<type>();
+ const location= useLocation();
```

`const { query } = useLocation()` é alterado para `useSearchParams()`.

```diff
- const location = useLocation();
- const query = location.query;
- const name = query.name;
+ const [searchParams, setSearchParams] = useSearchParams();
+ searchParams.get('name');
```

### path

Todos os seguintes são caminhos de rota válidos no v6:

```
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

Os seguintes caminhos de rota no estilo RegExp não são válidos no v6:

```
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

Para mais mudanças na API, consulte [react-router@6](https://reactrouter.com/en/main/upgrading/v5).
