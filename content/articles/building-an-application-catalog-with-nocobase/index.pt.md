---
title: "Governança de Arquitetura Simplificada: Construindo um Catálogo de Aplicações com NocoBase"
description: "O objetivo é demonstrar o potencial e a facilidade do NocoBase para desenvolver aplicações web sem codificação."
---

📝 Nota: Este artigo foi atualizado pela última vez em 23 de janeiro de 2026. Atualizamos regularmente as informações para garantir que você tenha as últimas novidades! 😊

Este blog foi produzido por Leandro Martins e publicado originalmente em [Build Application Catalog with NocoBase](https://leandromartins.hashnode.dev/simplified-architecture-governance-building-an-application-catalog-with-nocobase#).

O objetivo é demonstrar o potencial e a facilidade do [NocoBase](https://www.nocobase.com/) para desenvolver aplicações web sem codificação. Como estudo de caso, criarei um catálogo de aplicações para auxiliar na governança de arquitetura. Este caso envolverá modelagem, instalação, criação de tabelas, menus, formulários, gráficos e fluxos de trabalho usando os recursos do NocoBase.

Para este artigo, usaremos as seguintes tecnologias: NocoBase, Postgres e Docker.

---

💬 Ei, você está lendo o blog do NocoBase. O NocoBase é a plataforma de desenvolvimento no-code/low-code mais extensível, com inteligência artificial, para construir aplicações empresariais, ferramentas internas e todos os tipos de sistemas. É totalmente auto-hospedado, baseado em plugins e amigável para desenvolvedores. → [Explore o NocoBase no GitHub](https://github.com/nocobase/nocobase)

---

## **O que é NocoBase?**

[NocoBase](https://www.nocobase.com/) é uma plataforma de código aberto escrita em JavaScript, usando NodeJS, TypeScript e AntDesign, projetada para criar aplicações personalizadas sem a necessidade de codificação. É uma solução de backend low-code que permite a criação visual de tabelas, formulários personalizados, automação de fluxo de trabalho e interfaces personalizadas.

![O que é NocoBase?.png](https://static-docs.nocobase.com/0cfdc6c0e72f9088609239bbec1cd515.png)

### **Principais Destaques do NocoBase**:

* **Comunidade ativa**: Um fórum altamente ativo para apoiar o desenvolvimento de plugins e a solução de problemas.
* **Código constantemente revisado**: Atualizações frequentes com contribuições no GitHub, ostentando mais de 13 mil estrelas.
* **Compatibilidade com bancos de dados**: Suporta os principais bancos de dados relacionais como Postgres e MySQL.
* **Modelagem visual de dados**: Defina tabelas e dados visualmente usando o plugin Main Database.
* **Biblioteca extensa de plugins**: Oferece uma ampla gama de plugins gratuitos e pagos, com a capacidade de desenvolver plugins personalizados.

* **Funcionários de IA incorporados ao sistema**: Integre perfeitamente capacidades de IA em interfaces de usuário, fluxos de trabalho de negócios e contextos de dados, permitindo que a IA seja aplicada de forma prática em cenários empresariais reais.

![Principais Destaques do NocoBase.png](https://static-docs.nocobase.com/95c4cc96a72c8e414e5399d7d9b6ee18.png)

## **Visão Geral do Estudo de Caso**

Para mostrar alguns dos recursos do NocoBase, criaremos um estudo de caso chamado *Portal de Arquitetura*. Este portal é projetado para organizar dados sobre as aplicações de uma organização, apresentando as seguintes funcionalidades:

* **Catálogo de aplicações**.
* **Lembretes para atualizações**, como upgrades de versão e renovações de certificados.
* **Catálogo de APIs** para os sistemas da organização.
* **Gráficos** para visualização de dados com insights.

![Visão Geral do Estudo de Caso.png](https://static-docs.nocobase.com/7391b4a43314b7ec8e84469f6e8d3697.png)

## **Etapas de Desenvolvimento**

### **Modelando os Dados**

O primeiro passo é mapear e definir os campos que incluiremos no Portal de Arquitetura. Abaixo está um exemplo:

```
1. Catálogo de Aplicações

Aplicações:
id: Identificador único.
name: Nome da aplicação.
description: Descrição detalhada da aplicação.
stack: Tecnologias utilizadas.
owner: Pessoa ou equipe responsável.
created_at: Data de criação.
last_updated: Data da última atualização.

Lembretes (Vinculados às Aplicações):
id: Identificador único.
application_id: Referência à aplicação.
type: Tipo de lembrete (ex.: atualização de versão, renovação de certificado).
description: Descrição do lembrete.
scheduled_date: Data agendada para o lembrete.
status: Status (ex.: Pendente, Concluído).

2. Catálogo de APIs

APIs:
id: Identificador único.
Application_id: Referência ao sistema correspondente.
name: Nome da API.
description: Descrição funcional da API.
documentation_url: Link para a documentação oficial.
last_updated: Data da última atualização.
version: Versão atual.
```

### **Instalando o NocoBase**

Para [instalação](https://docs.nocobase.com/welcome/getting-started/installation) e configuração, optei por usar a versão Docker localmente. Outras opções de instalação incluem npm ou fonte Git.

Abaixo está o código YAML para Docker Compose. Após instalar o Docker, navegue até o diretório do arquivo YAML e execute o seguinte comando:

```
docker compose up -d
```

Isso iniciará o NocoBase em sua máquina na porta `13000`. Abra [`http://localhost:13000`](http://localhost:13000/) em seu navegador web. As credenciais padrão são [`admin@nocobase.com`](mailto:admin@nocobase.com) e `admin123`.

```
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:beta
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # A chave secreta da aplicação, usada para gerar tokens de usuário, etc.
      # Se APP_KEY for alterado, tokens antigos também se tornarão inválidos.
      # Pode ser qualquer string aleatória, e certifique-se de que não seja exposta.
      - APP_KEY=your-secret-key
      # Tipo de banco de dados, suporta postgres, mysql, mariadb
      - DB_DIALECT=postgres
      # Host do banco de dados, pode ser substituído pelo IP de um servidor de banco de dados existente
      - DB_HOST=postgres
      # Nome do banco de dados
      - DB_DATABASE=nocobase
      # Usuário do banco de dados
      - DB_USER=nocobase
      # Senha do banco de dados
      - DB_PASSWORD=nocobase
      # Fuso horário
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # Se estiver usando um servidor de banco de dados existente, o serviço postgres pode ser omitido
  postgres:
    image: postgres:16
    restart: always
    command: postgres -c wal_level=logical
    environment:
      POSTGRES_USER: nocobase
      POSTGRES_DB: nocobase
      POSTGRES_PASSWORD: nocobase
    volumes:
      - ./storage/db/postgres:/var/lib/postgresql/data
    networks:
      - nocobase
```

### **Criando Tabelas e Dados**

Usando o plugin **Data Source Manager**, podemos criar coleções (tabelas) e definir campos. O processo é simples e segue o modelo descrito acima. Abaixo estão algumas referências e links para mais detalhes sobre o plugin [aqui](https://www.nocobase.com/en/plugins)).

![Criando Tabelas e Dados.png](https://static-docs.nocobase.com/b0bece241dd24b7a80cdc69925bbe739.png)

![Criando Tabelas e Dados.png](https://static-docs.nocobase.com/c8b1b649eebf01b952cc88b4a6aadfc6.png)

### **Criando Menus**

Clicando no ícone de lápis no lado direito da tela, você pode criar menus superior e lateral, conforme mostrado na imagem. Vamos replicá-lo conforme demonstrado na imagem.

![Criando Menus.png](https://static-docs.nocobase.com/c501bbd624755efaff7110d7fa5431b2.png)

### **Criando Formulários**

Criar formulários (CRUD) também é muito simples. O NocoBase usa blocos para criar tabelas, formulários, detalhes, listas, gráficos, cartões e muito mais. Após selecionar o tipo de bloco, basta escolher qual coleção (tabela) você deseja vincular a este bloco, e o componente (bloco) vinculado à coleção aparece magicamente. Cada bloco tem suas próprias configurações de personalização. Para mais detalhes sobre blocos, verifique aqui.

![Criando Formulários.png](https://static-docs.nocobase.com/fe99e76874a89bc15d5e8ae67722053d.png)

### **Criando Gráficos**

Construir gráficos também é simples. Basta adicionar um bloco chamado *Chart* e selecionar a coleção que você deseja usar como fonte de dados, conforme mostrado na imagem abaixo.

![Criando Gráficos.png](https://static-docs.nocobase.com/1fc75066b78581b91e1a4966f1718761.png)

Uma vez selecionado o bloco, você pode configurar as propriedades do gráfico. A imagem abaixo mostra as opções de configuração do gráfico, permitindo definir indicadores, agrupamento, filtros, vários tipos de gráfico e títulos, entre outras propriedades disponíveis. Aqui, você pode explorar todas as possibilidades de configuração.

![Criando Gráficos.png](https://static-docs.nocobase.com/acab53f9586f3c4fbf6d38ee95be0c17.png)

### **Criando um Fluxo de Trabalho Agendado para Lembretes**

O NocoBase permite criar fluxos de trabalho automatizados para realizar vários tipos de tarefas através de eventos. Os três tipos de gatilhos são: *Collection Event, Scheduled Event e Post-Action Event.* Usando esses gatilhos, você pode criar ações dentro do sistema, como enviar notificações, inserir dados em outras tabelas ou fazer requisições para uma API externa. Abaixo está um exemplo de fluxo de trabalho para enviar notificações dentro da aplicação.

![Fluxo de Trabalho.png](https://static-docs.nocobase.com/e58fb9a4492c7f620f1de94a9d240798.png)

No nosso caso, criaremos um fluxo de trabalho para enviar uma notificação no dia em que um lembrete está agendado. Este será um **Scheduled Event** para ser executado todos os dias em um horário específico, conforme mostrado nas imagens abaixo.

![Fluxo de Trabalho.png](https://static-docs.nocobase.com/a095a620448ce80d7f4d385fe13d3a41.png)

![Fluxo de Trabalho.png](https://static-docs.nocobase.com/802cd35254c5fd661543be67d964a52a.png)

Além de configurar o agendamento, você precisa configurar o fluxo de trabalho para consultar a coleção **Lembretes**, buscar os lembretes do dia, percorrer cada um e enviar notificações para cada lembrete, conforme mostrado na imagem abaixo. O processo é simples: basta adicionar essas ações clicando no botão "+" e configurando-as.

![Fluxo de Trabalho.png](https://static-docs.nocobase.com/7e5534a92af59f2bb4272660bb3ed65f.png)

Após concluir a configuração, basta ativar o fluxo de trabalho clicando no botão "On" no canto superior direito. Para visualizar os resultados da execução, clique em "…" no canto superior direito e selecione **Execution History**, conforme mostrado na imagem abaixo.

![Fluxo de Trabalho.png](https://static-docs.nocobase.com/1a8dd52681a79e43d484b95d1326df81.png)

## **Conclusão**

Como demonstrado, o NocoBase oferece inúmeros recursos para acelerar o desenvolvimento de aplicações. Dependendo da escala e dos requisitos, ele oferece flexibilidade para construir aplicações, com capacidades adicionais como gerenciamento de arquivos, suporte a internacionalização, suporte mobile e edição de temas. Você pode até mesmo desenvolver seus próprios plugins ou comprar plugins comerciais disponíveis no marketplace.

Leitura relacionada:

* [How to build apps with NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Top 8 Powerful No-Code Development Platforms in 2025](https://www.nocobase.com/en/blog/top-8-powerful-no-code-development-platforms-in-2024)
* [The Top 12 Open-Source No-Code Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [Top 15 Open-Source Low-Code Projects with the Most GitHub Stars](https://www.nocobase.com/en/blog/top-15-open-source-low-code-projects-with-the-most-github-Stars)
* [Top 6 No-Code Tools for Developers](https://www.nocobase.com/en/blog/top-6-no-code-tools-for-developers)
* [Top 7 Open Source Rapid Development Platform](https://www.nocobase.com/en/blog/rapid-development-platform)
