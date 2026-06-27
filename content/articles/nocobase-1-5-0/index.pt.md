---
title: "NocoBase v1.5.0 Lançado Oficialmente"
description: "Otimizações principais, importação/exportação de dados em larga escala, gerenciamento de e-mail, impressão de modelos e outros recursos melhoram de forma abrangente o desempenho do sistema e a experiência do usuário."
---

## Otimizações Principais

### Habilitar Links em Campos de Texto de Linha Única

O modo de abertura suporta gaveta, diálogo e página.

![20250207212903](https://static-docs.nocobase.com/20250207212903.png)

### Bloco de Associação Suporta Ações de Associar/Desassociar

Agora você pode realizar ações de associação e desassociação diretamente no bloco de associação.

![20250207211837](https://static-docs.nocobase.com/20250207211837.png)

### Depuração de Fluxo de Trabalho

Agora você pode acionar fluxos de trabalho diretamente durante a configuração para depurá-los.

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/20250207213343_rec_.mp4" type="video/mp4">
</video>

### Interação Melhorada para Componentes de Data em Dispositivos Móveis

Experiência de interação aprimorada para componentes relacionados a data em dispositivos móveis.

![0084553986f6b3de21ca62f22d09a91a.png](https://static-docs.nocobase.com/0084553986f6b3de21ca62f22d09a91a.png)

### Otimizações de Performance no Frontend

* Velocidade de carregamento inicial da tela otimizada.
* Ferramenta de build do frontend alterada para **rspack**.
* Tamanho do bundle dos arquivos de entrada para vários pacotes de plugins reduzido.
* Performance de renderização para tabelas de dados grandes aprimorada.
* Redução de travamentos durante transições de menu.
* Introdução de métodos de carregamento sob demanda com as novas bibliotecas `lazy` e `useLazy`.

Abaixo está uma breve introdução ao uso de `lazy` e `useLazy`:

```ts
import { lazy, useLazy } from '@nocobase/client';

// Exportar um único componente:
const { RolesManagement } = lazy(() => import('./RolesManagement'), 'RolesManagement');

// Exportar múltiplos componentes:
const { AuthLayout, SignInPage, SignUpPage } = lazy(() => import('./pages'), 'AuthLayout', 'SignInPage', 'SignUpPage');

// Exportar um componente padrão:
const ThemeList = lazy(() => import('./components/ThemeList'));

// Retornar um hook:
const useReactToPrint = useLazy<typeof import('react-to-print').useReactToPrint>(
  () => import('react-to-print'),
  'useReactToPrint',
);
  
// Retornar uma biblioteca:
const parseExpression = useLazy<typeof import('cron-parser').parseExpression>(
  () => import('cron-parser'),
  'parseExpression',
);
```

---

## Novos Plugins

### Import Pro

Suporta operações de importação assíncronas que são executadas em uma thread separada. Este recurso permite a importação de grandes volumes de dados com performance aprimorada.

![20250119221221](https://static-docs.nocobase.com/20250119221221.png)

Referência: [Import Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Export Pro

Permite operações de exportação assíncronas que são executadas em uma thread separada, suportando exportações de dados em larga escala, bem como exportação de anexos.

![20250119221237](https://static-docs.nocobase.com/20250119221237.png)

Referência: [Export Pro](https://docs.nocobase.com/handbook/action-export-pro)

### Template Print

O plugin de Impressão de Template permite editar arquivos de template usando Word, Excel ou PowerPoint (suportando os formatos `.docx`, `.xlsx` e `.pptx`). Ao definir placeholders e estruturas lógicas dentro do template, você pode gerar dinamicamente arquivos em formatos predefinidos como `.docx`, `.xlsx`, `.pptx` e até mesmo `.pdf`. Esta funcionalidade é amplamente aplicável para criar diversos documentos de negócios, incluindo cotações, faturas, contratos e muito mais.

**Principais Características**

* **Suporte a Múltiplos Formatos**: Compatível com templates do Word, Excel e PowerPoint para atender a diversas necessidades de geração de documentos.
* **Preenchimento Dinâmico de Dados**: Preenche automaticamente o conteúdo do documento com base nos placeholders e na lógica definidos.
* **Gerenciamento Flexível de Templates**: Adicione, edite, exclua e categorize templates facilmente para melhor manutenção e uso.
* **Sintaxe Rica de Template**: Suporta substituição básica, acesso a arrays, loops, saída condicional e outras sintaxes de template para geração de documentos complexos.
* **Suporte a Formatadores**: Fornece saídas condicionais, formatação de data, formatação de número e muito mais para melhorar a clareza e o profissionalismo do documento.
* **Opções de Saída Eficientes**: Suporta geração direta de PDF para fácil compartilhamento e impressão.

![20250119221258](https://static-docs.nocobase.com/20250119221258.png)

Referência: [Template Print](https://docs.nocobase.com/handbook/action-template-print)

### Audit Logger

Este plugin registra e rastreia atividades do usuário, bem como históricos de operações de recursos dentro do sistema.

![20250119221319](https://static-docs.nocobase.com/20250119221319.png)

Referência: [Audit Logger](https://docs.nocobase.com/handbook/audit-logger)

### Fluxo de Trabalho: Subfluxo

Este recurso permite que um fluxo de trabalho chame outro processo. Você pode usar variáveis do fluxo de trabalho atual como entrada para o subfluxo e, em seguida, usar a saída do subfluxo como variáveis em nós subsequentes.

![20250119221334](https://static-docs.nocobase.com/20250119221334.png)

Referência: [Fluxo de Trabalho: Subfluxo](https://docs.nocobase.com/handbook/workflow-subflow)

### Gerenciador de E-mail

Integre suas contas de e-mail do Google ou Microsoft no NocoBase para enviar, receber, visualizar e gerenciar e-mails. Além disso, os e-mails podem ser incorporados diretamente nas páginas.

![20250119221346](https://static-docs.nocobase.com/20250119221346.png)

Referência: [Gerenciador de E-mail](https://docs.nocobase.com/handbook/email-manager/usage-admin)

### Armazenamento de Arquivos: S3 (Pro)

Suporta tipos de armazenamento de arquivos compatíveis com o protocolo S3, incluindo Amazon S3, Alibaba Cloud OSS, Tencent Cloud COS, MinIO e muito mais. Este plugin também suporta upload direto de arquivos e acesso privado.

![20250119221404](https://static-docs.nocobase.com/20250119221404.png)

Referência: [Armazenamento de Arquivos: S3(Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
