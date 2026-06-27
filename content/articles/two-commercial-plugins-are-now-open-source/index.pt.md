---
title: "Dois Plugins Comerciais Agora São Open Source"
description: "Aborda os motivos por trás da abertura do código-fonte, as capacidades dos plugins e os ajustes para clientes existentes."
---

Com base no feedback dos usuários, decidimos tornar dois plugins comerciais de workflow open-source:

* [Cálculo JSON](https://v2.docs.nocobase.com/workflow/nodes/json-query)
* [Mapeamento de Variáveis JSON](https://v2.docs.nocobase.com/workflow/nodes/json-variable-mapping)

## Por que open source?

Esses plugins estão entre os mais usados em workflows e são frequentemente necessários após nós de SQL ou Requisição HTTP. Quando eram plugins comerciais, usuários da edição comunitária não conseguiam usar completamente o nó de Requisição HTTP, o que gerava uma experiência ruim. Por isso, estamos tornando-os open-source.

## Visão geral dos plugins

### Cálculo JSON

Lida com JSON complexo produzido por nós upstream, permitindo calcular, extrair ou remodelar os dados.

Casos de uso comuns incluem:

* Resultados de consultas SQL
* Dados retornados por requisições HTTP  
  Ajuda a converter essas saídas nos formatos de variáveis e valores de campo necessários para nós downstream.

### Mapeamento de Variáveis JSON

Mapeia estruturas JSON complexas em variáveis mais fáceis de usar em etapas posteriores do workflow.

Casos de uso comuns incluem:

* Extrair campos-chave de JSON aninhado retornado por APIs ou SQL
* Renomear campos ou ajustar estruturas de arrays
* Preparar variáveis mais limpas para nós subsequentes

Com este plugin, você evita configurar repetidamente caminhos profundos de campo em cada nó.

## Ajustes para clientes existentes

Seus direitos permanecerão inalterados. Reembolsaremos pontos de plugin da seguinte forma:

* *Uso vitalício, upgrade de 1 ano* → 2 pontos
* *Uso vitalício e upgrade* → 4 pontos

Esses ajustes serão concluídos para todos os clientes existentes até 23 de novembro de 2025, e a empresa controladora da NocoBase fornecerá a interpretação final.

## Para encerrar

Agradecemos a todos os usuários da NocoBase e contribuidores open-source. Seus feedbacks e issues nos ajudam a melhorar a cada lançamento. Continuaremos a avançar mais rápido e oferecer capacidades mais robustas a um preço mais amigável.
