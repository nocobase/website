---
title: "Guia de Ativação da Licença Comercial do NocoBase"
description: "Um guia para ativar sua licença comercial do NocoBase. Aprenda como ativar rápida e seguramente seus recursos comerciais usando o novo método de \"ID da Instância\" e \"Chave de Licença\"."
---

## **Guia de Ativação da Licença Comercial do NocoBase**

Para melhorar a experiência do usuário e fortalecer a segurança, atualizamos de forma abrangente nosso processo de licenciamento e ativação comercial. O novo método de autorização substitui a abordagem anterior de inserir nome de usuário e senha em arquivos de configuração, introduzindo um mecanismo baseado em "ID da Instância" e "Chave de Licença".

As principais vantagens da nova solução incluem:

* **Segurança Aprimorada**: Não requer mais o armazenamento das informações da sua conta em texto simples, reduzindo o risco de vazamento de informações sensíveis.
* **Processo Simplificado**: A autorização é vinculada diretamente à sua instância NocoBase, tornando o gerenciamento e as atualizações de licença mais intuitivos e convenientes.
* **Maior Flexibilidade**: Quando seu ambiente de implantação mudar, você pode regenerar facilmente a autorização para se adaptar rapidamente ao novo ambiente.
* **Proteção da Licença**: Através do gerenciamento de licenças no backend e monitoramento de status, você pode monitorar o uso real da sua licença, detectar e lidar prontamente com aplicações não autorizadas e evitar o uso indevido de licenças comerciais.

Este guia o conduzirá por todo o novo processo de ativação da licença comercial do NocoBase.

<image src="https://static-docs.nocobase.com/undefined20250701160935956.png" >

---

## **Guia Passo a Passo para Ativação da Licença**

Antes de começar, certifique-se de ter instalado e estar executando com sucesso a Edição Comunitária do NocoBase.

### **Passo 1: Acessar a Página de Licença e Copiar o ID da Instância**

1. Em sua aplicação NocoBase local, navegue até a página `Configurações do Sistema` -> `Configurações de Licença`.
2. Nesta página, você verá uma string de **ID da Instância**, que é o identificador único do seu ambiente de execução atual. Clique no ícone de cópia à sua direita.

![img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g](https://static-docs.nocobase.com/img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g.jpg)

### **Passo 2: Criar Aplicação na Plataforma de Serviço e Associar o ID da Instância**

1. Faça login na plataforma de Serviço NocoBase, clique no botão "Adicionar" na página de gerenciamento "Aplicações".
2. No formulário que aparecer, preencha as informações da sua aplicação e cole o `ID da Instância` copiado no passo anterior no campo de entrada `ID da Instância`, e então envie.

![20250707233019](https://static-docs.nocobase.com/20250707233019.png)

### **Passo 3: Obter a Chave de Licença**

1. Após a aplicação ser criada com sucesso, retorne à lista de licenças, encontre a entrada correspondente e clique no botão "Visualizar Licença" na coluna de ações.
2. No popup de detalhes da licença, clique no botão "Copiar" para obter a **Chave de Licença** que corresponde à sua instância.
   ![img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g](https://static-docs.nocobase.com/img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g.jpg)

### **Passo 4: Configurar a Chave de Licença no NocoBase**

1. Retorne à página `Configurações de Licença` do seu NocoBase local.
2. Cole a `Chave de Licença` recém-copiada no campo de entrada `Chave de licença` e clique no botão "Enviar".
3. Após salvar com sucesso, o sistema exibirá "Chave de licença salva com sucesso, por favor reinicie o servidor", indicando que a chave de licença foi configurada com sucesso e está aguardando reinicialização.

![img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g](https://static-docs.nocobase.com/img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g.jpg)

### **Passo 5: Completar a Ativação e Baixar a Versão Comercial e Plugins Comerciais**

Reinicie seu serviço NocoBase para aplicar a licença e baixar automaticamente a versão comercial e os plugins comerciais.

* **Para implantação Docker**: Execute o comando de reinicialização `docker compose restart app`.
* **Para implantação por código-fonte ou `create-nocobase-app`**: Execute o comando `yarn nocobase pkg download-pro` no diretório raiz do projeto.

Após o serviço reiniciar e baixar os plugins com sucesso, sua licença comercial estará ativada. Se precisar alterar a licença, você pode reentrar na página de configurações de licença, clicar no botão "Alterar chave" e repetir o processo acima.

---

## **Como Visualizar as Informações da Licença**

Após a ativação da licença, você pode clicar no ícone de informações da licença no canto superior direito da interface do NocoBase a qualquer momento para visualizar o status detalhado da licença atual, incluindo versão da licença, data de expiração, status de correspondência de domínio e lista de plugins autorizados.

![20250707234415](https://static-docs.nocobase.com/20250707234415.png)

---

## Lista de Verificação Rápida para Implantação e Licença

Ao encontrar problemas, você pode consultar esta lista de verificação para solução rápida:

- [ ]  **Passo 1: Obter o ID da Instância**
  - [ ]  A Edição Comunitária/Edição Não Licenciada do NocoBase está sendo executada com sucesso.
  - [ ]  O `ID da Instância` foi completamente copiado da página `Configurações de licença`.
- [ ]  **Passo 2: Gerar a Chave de Licença**
  - [ ]  A aplicação foi criada na plataforma de Serviço.
  - [ ]  O `ID da Instância` colado ao criar a aplicação é o mais recente e correto.
  - [ ]  A `Chave de Licença` foi completamente copiada de "Visualizar Licença".
- [ ]  **Passo 3: Ativação**
  - [ ]  A `Chave de Licença` foi colada de volta no NocoBase e salva com sucesso.
  - [ ]  **A reinicialização do contêiner ou o comando `download-pro` foi executado de acordo com o método de implantação.** (Muitos usuários perdem esta etapa!)
- [ ]  **Verificação**
  - [ ]  O popup de informações da licença mostra o status como "Ativo".

## Perguntas Frequentes (FAQ)

Durante a instalação ou uso, você pode encontrar os seguintes avisos. Siga as soluções correspondentes:

### 1. `License key mismatch` - A Chave de Licença Não Corresponde ao Ambiente

<image src="https://static-docs.nocobase.com/undefined20250701193351673.png" />

[P]Por que recebo `License key mismatch` após a configuração?

[R]Seu ambiente de execução pode ter mudado, fazendo com que o "`ID da Instância`" seja atualizado, mas sua aplicação ainda possui a "`Chave de Licença`" antiga.
**Solução**: Siga rigorosamente o **Passo 1** deste guia para obter o `ID da Instância` mais recente do seu **ambiente atual**, e então complete o processo subsequente para gerar uma nova "chave".

### 2. `Invalid license key` - A Chave de Licença Expirou

<image src="https://static-docs.nocobase.com/undefined20250701193558012.png" />

[P]O que significa `Invalid license key`?

[R]Sua `Chave de Licença` pode ter expirado ou sido marcada como inválida pela plataforma por outros motivos.
**Solução**: Entre em contato conosco ou verifique o status da sua licença na plataforma de serviço. Se necessário, regenere a `Chave de Licença` e configure-a.

### 3. `Invalid license key format` - Erro no Formato da Chave de Licença

<image src="https://static-docs.nocobase.com/undefined20250701193148501.png" />

[P]O que devo fazer sobre `Invalid license key format`?

[R]A `Chave de Licença` que você colou está incompleta ou com formato incorreto, impedindo o sistema de analisá-la.
**Solução**: Retorne à plataforma de serviço, certifique-se de ter copiado completamente a `Chave de Licença`, e então cole-a novamente e salve.

### 4. Diálogo de Informações da Licença Aparece Forçadamente ao Acessar o Sistema

<image src="https://static-docs.nocobase.com/undefined20250625164238000.png" width="400" />

[P]Por que o diálogo de informações da licença aparece sempre?

[R]Este popup geralmente indica falha na verificação da licença. As possíveis razões incluem:

- A `Chave de Licença` está corrompida ou não corresponde ao ambiente local
- A licença expirou ou é inválida
- A `Chave de Licença` não corresponde à versão dos plugins comerciais que você está executando

**Solução**: A solução mais direta é **reexecutar completamente o processo de configuração da licença**: obtenha o `ID da Instância` mais recente, gere uma nova `Chave de Licença` e configure-a no sistema local.

### 5. Problemas Relacionados à Migração de Ambiente

[P]Migrei meu servidor/banco de dados e os plugins comerciais pararam de funcionar. O que devo fazer?

[R]Este é o mesmo problema do item anterior. O servidor ou banco de dados são informações-chave que constituem o "documento de identidade (`ID da Instância`)", e quando eles mudam, o `ID da Instância` muda.

**Solução**: Igual ao anterior, obtenha o novo `ID da Instância`, gere uma nova `Chave de Licença` e reative. Todo o processo é como atualizar o endereço do seu documento de identidade após se mudar.

### 6. Plugin Não Está Fazendo Efeito

[P]Já reiniciei, por que os plugins comerciais ainda não estão funcionando?

[R]Se você confirmou que a configuração da `Chave de Licença` está correta, tente a seguinte solução de problemas:

1. **Verifique a Rede**: Certifique-se de que seu servidor pode acessar o repositório npm do NocoBase.
2. **Verifique os Logs**: Revise os logs de inicialização do NocoBase para verificar se há falhas no download de plugins ou erros de verificação de licença.
3. **Execução Manual**: Se você estiver usando implantação por código-fonte, execute manualmente o comando `yarn nocobase pkg download-pro` novamente e observe a saída da linha de comando.

### 7. Plugins comerciais não aparecem após ativação em um sistema em execução?

**[P]** Iniciei o sistema NocoBase primeiro e depois inseri a Chave de Licença nas configurações. A ativação foi bem-sucedida, então por que os plugins comerciais não estão aparecendo?

**[R]** Este é um comportamento esperado e uma pergunta muito comum. O NocoBase é projetado para verificar a licença e carregar os plugins correspondentes **na inicialização do serviço**. Se você completou a ativação enquanto o sistema já estava em execução, você precisa **reiniciar o serviço NocoBase** para acionar o download e a ativação dos plugins comerciais.

Simplificando, a licença é como um "passe" para o NocoBase, mas ele precisa "reentrar pela porta" (reiniciar) para verificar e usar este passe.

Por favor, execute a operação de reinicialização de acordo com seu método de implantação:

* **Para implantação Docker**: Execute o comando de reinicialização `docker compose restart app`.
* **Para implantação por código-fonte ou `create-nocobase-app`**: Primeiro, pare o serviço em execução no seu terminal (geralmente pressionando `Ctrl+C`), e então execute o comando de início novamente, como `yarn start`.

### 8. Comparação Entre os Métodos de Autorização Novo e Antigo

[P]Como este processo é diferente do método anterior de nome de usuário/senha?

[R]O método antigo expunha sua senha de conta diretamente no ambiente, o que não era seguro o suficiente. O novo sistema de `Chave de Licença` tem vários benefícios:

1. **Mais Seguro**: Você não precisa expor a senha da sua conta principal, usando apenas chaves vinculadas a ambientes específicos.
2. **Mais Flexível**: Você pode gerar diferentes `Chaves de Licença` para diferentes clientes ou projetos, facilitando o gerenciamento.
3. **Mais Claro**: As informações da licença são claras à primeira vista, com todos os detalhes registrados na plataforma de Serviço.
