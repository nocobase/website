---
title: "Primeiro Processo de Otimização para APIs do Lado do Servidor do NocoBase"
description: "Descubra o processo abrangente de otimização para as APIs do lado do servidor do NocoBase. Este guia detalhado aborda testes de desempenho, análise de código e melhorias estratégicas para aumentar a eficiência da API. Aprenda sobre o impacto de vários middlewares e estratégias de cache no desempenho e explore as melhorias significativas alcançadas. Ideal para desenvolvedores que buscam otimizar o desempenho de APIs em cenários complexos."
---

## Contexto

Um usuário reportou uma taxa de transferência insatisfatória do sistema para o NocoBase por meio de uma [issue no GitHub](https://github.com/nocobase/nocobase/issues/2912). Devido à iteração rápida do nosso produto, a equipe está priorizando melhorias na funcionalidade do sistema, com menos foco em otimizações específicas de desempenho. No entanto, à medida que o NocoBase avança para a produção e expande sua base de usuários, problemas de desempenho estão surgindo. É imperativo intensificarmos nosso foco e iniciarmos esforços de otimização.

Certamente, para um produto como o NocoBase, os cenários de aplicação do mundo real tendem a ser complexos, e há uma variação significativa nos hábitos dos usuários. A otimização de desempenho necessita de análises específicas e em fases para diferentes cenários. Não é viável abordar todos os problemas de forma abrangente em uma única rodada de otimização.

Esta rodada de otimização foca em fornecer uma avaliação inicial do desempenho da API do lado do servidor do sistema, seguida por melhorias fundamentais direcionadas.

## Teste de desempenho

### Explicação

O NocoBase utiliza o framework subjacente Koa + Sequelize. Projetamos vários cenários de teste para usar como referência para análise comparativa:

* **Koa + Sequelize:** Representa o framework fundamental, refletindo o ótimo teórico, embora cenários do mundo real possam introduzir algumas concessões.
* **Koa + @nocobase/database:** @nocobase/database é uma camada de abstração baseada em Sequelize para operações de banco de dados.
* **Koa + @nocobase/resourcer:** @nocobase/resourcer funciona como a camada de roteamento e despacho.
* **Koa + @nocobase/server:** @nocobase/server serve como o servidor NocoBase.
* **Koa + Nocobase:** Este é o programa NocoBase completo, incorporando plugins integrados.

Este teste de desempenho não é uma simulação de um ambiente de produção para testes de estresse exaustivos. Em vez disso, ele foca em testes em camadas para comparar dados e identificar os principais fatores que afetam o desempenho da API. Os testes foram conduzidos principalmente no meu computador pessoal com as seguintes especificações:

* **Sistema Operacional:** MacOS 14.0
* **CPU:** 10 núcleos
* **Memória:** 32GB
* **Banco de Dados:** PostgreSQL (Docker, versão mais recente)
* **Execução do NocoBase:** `yarn start -d`

O endpoint de API testado é `/api/users:list`, equivalente a executar as instruções `select ... limit 20` e `count` na tabela `users`. O código específico pode ser consultado [aqui](https://github.com/nocobase/nocobase/tree/main/benchmark).

Cada cenário de teste foi avaliado usando o comando `wrk -t20 -c20 -d1m`.

### Koa + Sequelize

RPS: 6938.71

```
> $ wrk -t20 -c20 -d1m http://localhost:13020/ 
Running 1m test @ http://localhost:13020/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.91ms    0.88ms  38.10ms   97.01%
    Req/Sec   348.52     30.22   434.00     84.53%
  416831 requests in 1.00m, 141.52MB read
Requests/sec:   6938.71
Transfer/sec:      2.36MB
```

CPU do Banco de Dados > 100%

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   125.63%   196.7MiB / 7.748GiB   2.48%     11.6GB / 15.8GB   76.4MB / 2.81GB   11
```

O PostgreSQL normalmente utiliza apenas um núcleo de CPU, indicando que o gargalo de desempenho está no banco de dados.

### Koa + @nocobase/database

RPS: 5487.29

```
> $ wrk -t20 -c20 -d1m http://localhost:13010/                   
Running 1m test @ http://localhost:13010/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     3.66ms  795.89us  32.80ms   91.85%
    Req/Sec   275.53     21.87   434.00     82.60%
  329784 requests in 1.00m, 121.71MB read
Requests/sec:   5487.29
Transfer/sec:      2.03MB
```

CPU do Banco de Dados > 100%

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   102.99%   197.7MiB / 7.748GiB   2.49%     12.3GB / 16.6GB   76.5MB / 2.82GB   11
```

O desempenho diminuiu um pouco, mas é aceitável, e o banco de dados está geralmente operando em sua capacidade máxima.

### Koa + @nocobase/resourcer

RPS: 4787.94

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13040/api/users:list'
Running 1m test @ http://localhost:13040/api/users
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.20ms    0.92ms  30.97ms   88.29%
    Req/Sec   240.48     18.01   333.00     80.79%
  287757 requests in 1.00m, 120.47MB read
Requests/sec:   4787.94
Transfer/sec:      2.00MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O         BLOCK I/O         PIDS
80393e7580c1   postgres   87.72%    197.3MiB / 7.748GiB   2.49%     12.6GB / 17GB   76.5MB / 2.82GB   11
```

O desempenho degradou ainda mais, e o banco de dados não atingiu sua capacidade total. Analisaremos os motivos posteriormente.

### Koa + @nocobase/server

RPS: 2285.86

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13030/api/users:list'                                                   
Running 1m test @ http://localhost:13030/api/users:list
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.80ms    2.05ms  93.25ms   97.23%
    Req/Sec   114.80      9.27   300.00     93.35%
  137358 requests in 1.00m, 87.90MB read
Requests/sec:   2285.86
Transfer/sec:      1.46MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   47.82%    197.5MiB / 7.748GiB   2.49%     13.2GB / 17.7GB   76.9MB / 3.15GB   11
```

Comparando os dados de teste com Koa + @nocobase/resourcer, há aproximadamente uma redução de 50% no desempenho, indicando que o principal gargalo de desempenho mudou do banco de dados para o próprio programa.

### Nocobase

RPS: 580.48

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg' 
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    34.44ms    3.85ms  97.95ms   85.18%
    Req/Sec    29.03      3.94    50.00     85.04%
  34886 requests in 1.00m, 26.25MB read
Requests/sec:    580.48
Transfer/sec:    447.27KB
```

O desempenho abrangente do NocoBase diminuiu significativamente, como esperado antes do teste. Isso ocorre porque as interfaces percorrem inúmeros middlewares de plugins, envolvendo autenticação, verificações de permissão e consultas ao banco de dados. Notavelmente, o cache não foi implementado até este ponto, tornando-o um foco chave para otimização na fase atual.

## Análise e Otimização de Código

### Sequelize -> database -> resourcer

A transição do Sequelize subjacente para o database, e depois para o resourcer, embora cada camada incorra em alguma sobrecarga de desempenho, permanece aceitável para um único processo. Isso se deve principalmente ao encapsulamento adicional da lógica do código. Como o foco atual da otimização não é alcançar uma solução completa de uma só vez, esta parte será mantida como está por enquanto, e quaisquer ajustes necessários serão tratados separadamente no futuro.

### resourcer -> server

Na transição do resourcer para o server, a degradação do desempenho excede a metade, indicando um problema definitivo nesta área. Portanto, vamos começar a análise aqui. O server introduz middlewares adicionais em nível de aplicativo em comparação com o resourcer (consulte [`helper.ts`](https://github.com/nocobase/nocobase/blob/main/packages/core/server/src/helper.ts)). Ao revisar o código, a maioria da lógica parece relativamente direta, sem áreas aparentes que impactem significativamente o desempenho. Consequentemente, decidi coletar dados relacionados ao consumo de tempo dos middlewares para obter mais insights.

#### perf\_hooks

O NodeJS fornece APIs de teste de desempenho através de [perf\_hooks](https://nodejs.org/api/perf_hooks.html#perf_hooksperformance). Essas APIs oferecem um conjunto mais rico de métricas além de simples cálculos de tempo de execução. Em nosso contexto, o foco permanece em examinar minuciosamente o tempo gasto em cada middleware. Utilizando `perf_hooks.createHistogram` para construir histogramas, podemos executar testes de estresse, registrando meticulosamente os tempos de execução de cada middleware. Essa abordagem nos permite derivar estatísticas chave como tempos de execução mínimo, máximo e mediano durante o período de teste de estresse. Por exemplo:

```
{
  "i18n": {
    "count": 12455,
    "min": 1875,
    "max": 927231,
    "mean": 4867.227137695704,
    "exceeds": 0,
    "stddev": 10258.399954791737,
    "percentiles": {
      "0": 1875,
      "50": 3250,
      "75": 5372,
      "100": 926720
    }
  }
}
```

Ao classificar os resultados, dois componentes de middleware que notavelmente impactam o desempenho se destacam: logging e `i18n`.

#### Logging

Por padrão, o NocoBase envia logs para arquivos e para o terminal simultaneamente. Referindo-se à documentação do Node.js sobre [process I/O](https://nodejs.org/api/process.html#a-note-on-process-io),

> **Aviso**: Escritas síncronas bloqueiam o loop de eventos até que a escrita seja concluída.

No meu ambiente de teste, ambas as saídas são provavelmente síncronas, e como há logging para cada requisição e resposta, isso inevitavelmente tem algum impacto no desempenho. Considerando que os logs de interface são essenciais, manteremos a configuração atual por enquanto. No entanto, em um ambiente de produção, é comum reter apenas logs de arquivo. Portanto, em testes futuros, podemos considerar desabilitar os logs do terminal para reduzir alguma sobrecarga de desempenho. Em produção, ajustar os níveis de log conforme necessário também é uma opção viável.

#### i18n

O middleware `i18n`, responsável por gerenciar recursos localizados, mostrou um consumo de tempo significativo, com o principal gargalo identificado na seguinte linha de código:

```
const i18n = ctx.app.i18n.cloneInstance({ initImmediate: false });
```

A abordagem atual de clonar uma instância i18n para isolar recursos de idioma em diferentes requisições é demorada. Para otimizar, um padrão singleton baseado em idioma pode ser implementado, permitindo a reutilização de instâncias existentes para o mesmo idioma em vez de recarregá-las para cada requisição.

### server -> NocoBase

Na transição de um servidor simples para o NocoBase completo, há uma queda significativa de desempenho. Como mencionado anteriormente, o NocoBase completo inclui inúmeros plugins integrados, introduzindo muitos middlewares de camada de rota, incluindo autenticação e permissões. Seguindo os métodos discutidos anteriormente, usamos `perf_hooks` para medir o tempo gasto nesses middlewares. Os resultados destacam os dois middlewares mais impactantes e sua lógica de execução principal:

* `authManager.middleware` - Middleware para autenticação de usuário
  1. Verificar se o token do usuário está na lista negra.
  2. Recuperar o método de autenticação atualmente em uso.
  3. Obter informações do usuário com base no método de autenticação.
* `acl.setCurrentRole` - Middleware para definir informações de função no módulo de permissão
  * Recuperar informações de função associadas com base no ID do usuário atual e definir a função do usuário.

Ambos os middlewares realizam consultas ao banco de dados em sua lógica principal para cada requisição. Para resolver isso, estamos introduzindo cache.

#### Estratégia de cache

##### Armazenamento

O NocoBase atualmente emprega cache em memória e Redis. Para dados relativamente estáticos, como métodos de autenticação do sistema, armazenamos em memória. Dados relacionados a informações do usuário seguem a configuração de armazenamento padrão, permitindo que os usuários optem pelo Redis como método de armazenamento padrão.

##### Cache Sob Demanda + Atualizações por Hook

Dados como métodos de autenticação, informações do usuário e funções geralmente se enquadram na categoria de leitura intensiva e pouca escrita. Implementamos uma estratégia de cache sob demanda, onde a primeira requisição aciona uma consulta ao banco de dados e os resultados são armazenados em cache. Requisições subsequentes usam os resultados em cache. Para garantir a consistência dos dados, introduzimos hooks para ouvir quaisquer alterações no banco de dados e sincronizá-las com o cache.

##### Filtro Bloom

Para consultas de lista negra de tokens, onde precisamos comparar tokens de usuário com aqueles na lista negra, o cache sob demanda não é adequado. Em vez disso, durante a inicialização do programa, pré-carregamos os tokens da lista negra no cache. Para economizar espaço de memória, empregamos um filtro Bloom para armazenar em cache a lista negra. O filtro Bloom determina com precisão se um valor não está presente, com uma probabilidade de julgar erroneamente a existência de um valor. Inicialmente, o filtro Bloom verifica se um token de usuário está na lista negra. Se o filtro Bloom indicar existência, realizamos uma consulta secundária ao banco de dados para precisão.

##### LRU

O cache em memória do NocoBase usa por padrão a estratégia Least Recently Used (LRU) para despejo de cache. Os usuários podem configurar políticas de cache, como definir um limite superior no espaço do cache. Para usuários do Redis, estratégias de cache personalizadas como LRU ou LFU podem ser configuradas conforme necessário.

#### Outras Otimizações

Além das otimizações de middleware mencionadas anteriormente, alguns middlewares, como db2resource e ACLMiddleware, também impactam o desempenho. Para analisar melhor possíveis gargalos de desempenho, e como atualmente não há tarefas de otimização diretas, planejamos habilitar o inspetor para examinar o perfil de CPU do sistema durante a execução.

```
# Habilitar inspector
NODE_ARGS=--inspect yarn start
```

Ao enviar requisições continuamente para a API usando wrk e capturando o perfil de CPU no Chrome DevTools por uma duração específica, podemos obter resultados semelhantes ao seguinte.

![Chrome DevTools](https://static-docs.nocobase.com/fdfa998ef9c4067b2b302551f6ab950d.webp)

Ao inspecionar o perfil, identificamos que certa lógica no db2resource para analisar rotas, como o uso de pathToRegexp, tem um impacto notável no desempenho, explicando a degradação adicional no desempenho na camada de roteamento observada em testes anteriores. No ACLMiddleware, operações relacionadas ao tratamento de permissão, como miniMatch, também mostraram tempos de execução mais longos. Para esses aspectos, implementamos algumas otimizações preliminares, como armazenar em cache variáveis para cálculos repetitivos. Otimizações mais extensas serão abordadas em iterações futuras.

## Resumo

### Resultados da Otimização

Neste esforço de otimização, focamos em:

* Usar variáveis para armazenar em cache operações demoradas em middlewares, como criação de instância `i18n` e verificações de permissão.
* Introduzir mecanismos de cache apropriados para operações de middleware que envolvem consultas frequentes ao banco de dados.

Além disso, recomendamos ajustar o nível e o método de saída de logging no ambiente de produção com base nos requisitos para mitigar o impacto da impressão de logs no desempenho da API.

Após implementar essas otimizações, o reteste da aplicação NocoBase completa revelou melhorias significativas no desempenho da API.

```
> $ wrk -c20 -t20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0'
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     9.60ms    2.62ms 103.80ms   96.32%
    Req/Sec   105.44     11.62   393.00     83.66%
  126047 requests in 1.00m, 60.10MB read
  Non-2xx or 3xx responses: 2
Requests/sec:   2097.31
Transfer/sec:      1.00MB
```

### Otimização Contínua

O processo de otimização nesta rodada tem certas limitações:

Por um lado, testamos apenas requisições simples. Em cenários de negócios reais, aspectos como filtragem, análise de variáveis, transações complexas, etc., podem apresentar desafios adicionais de desempenho que exigem otimização adicional.

Por outro lado, focamos em otimizar as partes que impactam significativamente o desempenho, deixando espaço para melhorias em outras áreas.

No futuro, continuaremos a otimizar o desempenho do NocoBase. Se você encontrar problemas de desempenho em seu uso, sinta-se à vontade para fornecer casos específicos para análise e otimização. Seu feedback será valioso para lidar com cenários de uso do mundo real.

## Referências

* [Caching Best Practices | Amazon Web Services](https://aws.amazon.com/cn/caching/best-practices/)
* [Bloom filter](https://redis.io/docs/data-types/probabilistic/bloom-filter/)
* [Performance measurement APIs | Node.js v21.4.0 Documentation](https://nodejs.org/api/perf_hooks.html#perf_hookscreatehistogramoptions)
* [Debugging - Getting Started | Node.js](https://nodejs.org/en/guides/debugging-getting-started)
