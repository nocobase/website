---
title: "NocoBase 0.21: Suporte a múltiplas fontes de dados para gráficos e fluxo de trabalho"
description: "NocoBase 0.21 introduz suporte a múltiplas fontes de dados para gráficos e fluxos de trabalho, eventos de gatilho de fluxo de trabalho otimizados e vários novos tipos de campo, melhorando a flexibilidade e o desempenho."
---

## Anúncio

![v1.0](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/img_v3_029o_3dd91ba0-bb96-4315-a273-208f06d432fg.png)

## Novos recursos

### Suporte a múltiplas fontes de dados para gráficos

![20240407222304](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222304.png)

[Para mais informações, consulte a documentação de [Visualização de Dados]](https://docs.nocobase.com/handbook/data-visualization)

### Suporte a múltiplas fontes de dados para fluxo de trabalho

![20240407222523](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222523.png)

[Para mais informações, consulte a documentação de [Fluxo de Trabalho]](https://docs.nocobase.com/handbook/workflow)

### Otimização dos eventos de gatilho do fluxo de trabalho

Alterações nos nomes dos gatilhos:

| Nome Original                     | Alterado para          |
| --------------------------------- | ---------------------- |
| Eventos de Formulário, Eventos de Operação | Eventos Pós-operação   |
| Tarefas Agendadas                 | Eventos Agendados      |
| Interceptadores de Requisição     | Eventos Pré-operação   |
| Aprovação                         | Eventos de Aprovação   |

Melhorias na configuração do modo de gatilho para os seguintes eventos:

#### Eventos pós-ação

![20240407222652](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222652.png)

[Para mais informações, consulte a documentação de [Fluxo de Trabalho - Eventos pós-ação]](https://docs.nocobase.com/handbook/workflow-custom-action-trigger)

#### Eventos pré-ação

![20240407222834](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222834.png)

[Para mais informações, consulte a documentação de [Fluxo de Trabalho - Eventos pré-ação]](https://docs.nocobase.com/handbook/workflow-request-interceptor)

### Plugin de marca personalizada

![20240407222949](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222949.png)

[Para mais informações, consulte a documentação de [Marca Personalizada]](https://docs.nocobase.com/handbook/custom-brand)

### Suporte para campo nanoid

![20240407223221](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223221.png)

[Para mais informações, consulte a documentação de [campo nanoid]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/nano-id)

### Suporte para campo uuid

![20240407223431](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223431.png)

[Para mais informações, consulte a documentação de [campo uuid]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/uuid)

### Suporte para campo unix timestamp

![20240407223512](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223512.png)

[Para mais informações, consulte a documentação de [Campo Unix timestamp]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/datetime/unix-timestamp)

### Campo do tipo número suporta configuração de formatação

![20240407223736_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223736_rec_.gif)

[Para mais informações, consulte a documentação de [Configurar campo / Configurações de propriedade específica / Componente Número]](https://docs.nocobase.com/handbook/ui/fields/field-settings/number-format)

### Suporte para implantação em subcaminho

Adicionada a variável de ambiente `APP_PUBLIC_PATH` para suportar implantação em subcaminho. Por exemplo:

```
APP_PUBLIC_PATH=/nocobase/
```

Acesse localmente via URL [http://localhost:13000/nocobase/](http://localhost:13000/nocobase/)

Exemplo de proxy nginx:

```
server {
    listen 80;
    server_name your_domain.com;  # Substitua your_domain.com pelo seu domínio

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

Agora, você pode acessar via http://your\_domain.com/nocobase/.

### Otimização de desempenho de blocos

#### Suporte para efeito de tela esqueleto

Cartões de Bloco

![20240407224956](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224956.png)

Cartões Kanban

![20240407224811](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224811.png)

Células de Tabela

![20240407230028](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407230028.png)

#### Processamento distribuído da configuração de blocos

Anteriormente, alterações em qualquer Schema na página inteira causavam a re-renderização de toda a página. Agora, o Schema de cada bloco é independente.

```
<SchemaComponent distributed schema={} />
```

O componente Grid também suporta processamento distribuído.

```
{
  'x-component': 'Grid',
  'x-component-props': {
    distributed: true,
  },
}
```

## Alterações incompatíveis

### Vários useProps do UI Schema substituídos por x-use-decorator-props e x-use-component-props

x-use-decorator-props e x-use-component-props são não intrusivos e suportados por todos os componentes.
