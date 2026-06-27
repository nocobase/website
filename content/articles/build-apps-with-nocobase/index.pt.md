---
title: "Como construir aplicativos com NocoBase?"
description: "Vamos explorar como construir um aplicativo de rastreamento de animais de estimação com NocoBase!"
---

📝 Nota: Este artigo foi atualizado pela última vez em 23 de janeiro de 2026. Atualizamos regularmente as informações para garantir que você tenha as últimas novidades! 😊

Este blog foi produzido por Don Freeman da [Freeman Tech Consulting](https://freemantechconsulting.com/) e publicado originalmente em [nocodefounders.com](https://www.aidutu.cn/info/link?url=http://nocodefounders.com). A Freeman Tech Consulting é uma empresa de engenharia de software completa que pode ajudar com implantações No Code, desenvolvimento de aplicações web, design/construção de infraestrutura em nuvem, gerenciamento GRC, análise de dados e muito mais.

## 🌟O que é NocoBase?

**NocoBase** é uma plataforma AI no-code (zero-code) / low-code projetada para facilitar a criação de aplicações orientadas a dados. Eles oferecem versões pagas onde o logotipo do NocoBase é removido. É open source, então se você quiser contribuir, pode fazê-lo facilmente no GitHub. Eles fornecem um sistema de plugins para estender a funcionalidade da plataforma quando necessário.

## 🚀 Implantar NocoBase Localmente

### **O que é necessário para executar o NocoBase localmente?**

* **Docker**
* **Docker compose**
* **Um banco de dados PostgreSQL** Neste blog, executaremos um com docker compose, mas em um ambiente de produção real, você deve ter um banco de dados PostgreSQL dedicado.

### **Executar NocoBase Localmente**

* Existem etapas para executar o NocoBase localmente no site deles [aqui](https://docs.nocobase.com/welcome/getting-started/installation/docker-compose)

Primeiro, crie um diretório onde você trabalhará. No seu terminal, entre nesse diretório. Depois disso, você precisa criar um arquivo docker compose. Usei o das referências acima de introdução no site do NocoBase e o modifiquei ligeiramente.

---

💬 Ei, você está lendo o blog do NocoBase. NocoBase é a plataforma de desenvolvimento no-code/low-code mais extensível com inteligência artificial para construir aplicações empresariais, ferramentas internas e todos os tipos de sistemas. É totalmente auto-hospedado, baseado em plugins e amigável para desenvolvedores. →[ Explore o NocoBase no GitHub](https://github.com/nocobase/nocobase)

---

***O docker compose abaixo mostra a execução de um banco de dados PostgreSQL localmente, mas é sugerido ter um banco de dados dedicado em um ambiente de produção real.***

![docker compose.png](https://static-docs.nocobase.com/8c25f1c572a1330beb04376b5053dcd4.png)

Após criar isso no diretório local, execute o seguinte comando para baixar as imagens necessárias.

![baixar as imagens necessárias.png](https://static-docs.nocobase.com/222cba9fddfe376ee2d031bfb1aa1708.png)

Agora execute o seguinte comando para iniciar os contêineres em segundo plano.

![iniciar os contêineres.png](https://static-docs.nocobase.com/7fc3c0958673e3264b2881c18a5e949d.png)

Agora você pode acessar o NocoBase em http://localhost:13000

## 🐶 Construindo a Aplicação NocoBase: Aplicação de Rastreamento de Pets

![Aplicação de Rastreamento de Pets.png](https://static-docs.nocobase.com/0960fcf248fce60c67d186aaa5b1e8fe.png)

Neste exemplo, vamos construir uma aplicação de rastreamento de pets 🐕 🐈! Esta aplicação rastreará os donos de pets e as informações de seus animais. Primeiro, precisamos definir o modelo de dados para nossa aplicação. Isso é super fácil no NocoBase.

### **Modelo de Dados do NocoBase**

**🔍 Encontre o Editor de Modelo de Dados**

Na interface do NocoBase, clique na pequena engrenagem ⚙️ no canto superior direito e depois clique em `Fontes de Dados`. Isso abrirá o editor de modelo de dados. Lá, você verá a fonte de dados padrão que deve ser chamada de main. Clique em `Configurar` para a fonte de dados main.

**Criar Coleções**

Agora podemos criar coleções dentro da fonte de dados main. Essas coleções armazenarão os dados da nossa aplicação. Para este exemplo, criaremos duas coleções. Uma para os donos de pets e outra para os pets.

**Coleção de Dono de Pet**

Na tela de Coleções, clique no botão `Nova Coleção`. Em seguida, dê à coleção um `Nome de Exibição da Coleção` de Dono de Pet e um `Nome da Coleção` de petowner.

Agora vamos adicionar os campos que precisamos à coleção de dono de pet. Na tela de coleções, clique em `Configurar Campos` ao lado da coleção Dono de Pet. Com o botão `Adicionar Campo`, você pode adicionar os campos que precisamos à coleção. A coleção de dono de pet terá os seguintes campos.

* **Nome** *Interface de Campo de Texto de Linha Única*
* **Sobrenome** *Interface de Campo de Texto de Linha Única*
* **Email** *Interface de Campo de Email*

**Coleção de Pet**

Agora podemos repetir esses mesmos passos para a coleção de pet. A coleção de pet terá os seguintes campos.

* **Nome** *Interface de Campo de Texto de Linha Única*
* **Tipo de Pet** *Interface de Campo de Seleção Múltipla*
* **Data de Nascimento** *Interface de Campo de Data/Hora*

**🔗 Vincular Coleção de Dono de Pet à Coleção de Pet**

Para vincular a coleção de Dono de Pet à coleção de Pet, volte para a coleção **Pet** e clique no botão `Adicionar Campo` na tela de configuração da coleção. Encontre o Tipo de Interface Um para Muitos. Dê ao relacionamento um nome de exibição, selecione pet como a `Coleção Alvo` e depois ID como a `Chave Alvo`.

**🥳 Modelo de dados concluído!!!**

Isso é tudo para a configuração do modelo de dados. Aqui está meu exemplo para o modelo de dados de pet.

![modelo de dados de pet.png](https://static-docs.nocobase.com/5b683b9ddaeab7c644512fa7dbdbbeb6.png)

### **Construindo a Interface do NocoBase**

**🏠 Criar a Página Inicial**

Agora que temos nosso modelo de dados completo, podemos construir rapidamente uma interface para interagir com esse modelo de dados. Volte para a página principal da aplicação e você deve ver o item `Adicionar Novo Menu` no topo da página. Clique nele e depois clique em `página`. Dê à página o nome de Início e você deve ver algo semelhante a isso.

![Criar a Página Inicial.png](https://static-docs.nocobase.com/06081448ef1a5b90c1703905e42bb727.png)

**📜 Criar Lista de Donos de Pets**

Agora vamos adicionar uma lista de cartões para nos permitir interagir com nossa coleção de donos de pets. Clique em `Adicionar Bloco` → `Cartão em Grade` → `PetOwner`. Isso nos permite exibir nossos donos de pets em uma grade de cartões. Clique em `Configurar Campos` para adicionar os campos Nome, Sobrenome e Email.

**➕ Adicionar Donos de Pets**

Agora precisamos ser capazes de criar donos de pets. Clique em `Configurar Ação` no canto superior direito do bloco (**não** o `Configurar Ação` no Cartão). Em seguida, clique em `Adicionar Novo`. Isso cria um botão que diz Adicionar Novo. Clique nesse botão para configurar o que pode ser feito ao adicionar um dono de pet.

**🍿 Popup de Adicionar Novo Dono de Pet**

Dentro do popup, clique em `Adicionar Bloco` → `Formulário` → `Coleção Atual`. Clique em `Configurar Campos` e adicione Nome, Sobrenome e Email. Isso permite que você preencha esses valores ao criar um novo dono de pet. Finalmente, clique em `Configurar Ação` → `Enviar`. Clique fora do popup para fechá-lo.

**➕ Adicionar Novo Pet**

Agora que temos a capacidade de visualizar e criar novos donos de pets, precisamos ser capazes de adicionar seus pets. Agora, de volta à **Página Inicial**, clique no `Configurar Ação` *dentro do cartão* e clique em popup. Isso criará um link no cartão chamado popup, clique nele. Dentro do popup, clique em `Adicionar Bloco` → `Formulário (adicionar novo)` → `Registros Associados` → `Pets`. Dentro deste novo bloco, clique em `Configurar Campos` e adicione Nome, Tipo de Pet, Data de Nascimento. Isso permite que você preencha esses valores ao criar um novo pet. Finalmente, clique em `Configurar Ação` → `Enviar`.

**📜 Listar Pets Existentes**

Agora, logo abaixo deste novo bloco, clique em `Adicionar Bloco` → `Lista` → `Registros Associados` → `Pets`. Dentro deste novo bloco, clique em `Configurar Campos` e adicione Nome, Tipo de Pet e Data de Nascimento. O popup deve se parecer com algo assim. Eu já tinha um pet no meu banco de dados, então pode parecer ligeiramente diferente.

![Listar Pets Existentes.png](https://static-docs.nocobase.com/3cfc6fadf38b4f88dcee4478aa1b65cb.png)

Clique fora do popup para fechá-lo. Agora temos a capacidade de criar e visualizar pets. Sua interface deve agora se parecer com algo assim.

![Interface.png](https://static-docs.nocobase.com/97149b76b62c72ccc9d484ceffd50208.png)

**🧪 Teste**

Agora clique no botão laranja Editor de Interface para sair do Editor de Interface. Você pode brincar com a interface e criar Pets e Donos de Pets.

Este blog estava faltando muitas peças, incluindo Autenticação de Usuários, interfaces mais complexas, implantação de um ambiente de produção, etc. Posso cobrir isso em blogs futuros.

💡 Leia Mais:

* [Construindo um Assistente de IA com Langflow e AstraDB: Da Arquitetura à Integração com NocoBase](https://www.nocobase.com/en/blog/building-ai-assistant-langflow-astradb-nocobase)
* [Desenvolvendo um Plugin para Enviar Mensagens WhatsApp no NocoBase](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [Governança de Arquitetura Simplificada: Construindo um Catálogo de Aplicações com NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
