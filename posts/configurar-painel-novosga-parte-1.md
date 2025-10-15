---
tags: posts
title: Configurar Painel com o NovoSGA (parte 1)
description: Tutorial de como integrar o NovoSGA com o Painel Mangati
layout: post.njk
---

Antes de começar a utilizar o Painel para chamar senhas do NovoSGA é preciso cadastrar as informações da sua instalação do NovoSGA. Esta etapa é feita no cadastro de Apps: [https://painel.mangati.com/apps/](https://painel.mangati.com/apps/).

![posts-painel-apps.png](/images/posts-painel-apps.png)

Depois de clicar no botão "Novo app", é preciso preencher os campos de conforme descrito abaixo:

- **Tipo do aplicativo**: É o tipo de aplicativo no qual estamos integrando com o Painel. No caso do NovoSGA, é preciso escolher a versão correta do mesmo. Para as versões entre 1.0 e 1.5, a opção "NovoSGA V1.X" deverá ser escolhida, já para a versão 2.0 a opção a ser escolhida é "NovoSGA V2.0", e para demais versões a partir da versão 2.1 a opção "NovoSGA V2.1+" é a opção correta.
- **Nome**: Esse campo é utilizado apenas para identificação do cadastro. É um campo de texto livre e deve ser preenchido de forma a melhor identificar o App que está sendo integrado.

Os demais campos variam de acordo com a opção escolhida em **Tipo de aplicativo**.

### NovoSGA V1.X

Se você está fazendo a integração do Painel com uma versão legada do NovoSGA (por exemplo v1.5). Apenas 3 campos são necessários:

- **URL**: Esse é o endereço HTTP do NovoSGA. Pode ser copiado a partir da barra de endereço do navegador web. É necessário se atentar para não colar o caminho `/login`. Exemplo de endereços: http://ip-ou-nome-do-servidor/, http://ip-ou-nome-do-servidor/public/

Caso o endereço acima esteja correto e o mesmo seja acessível no momento do cadastro (mesma rede em caso de rede interna ou disponível via internet), os demais campos serão automaticamente transformados em campo de seleção, facilitando a escolha da Unidade e dos Serviços desejados.

- **Unidade**: Escolha a unidade do NovoSGA na qual pretende fazer a integração
- **Serviços**: Escolha os serviços disponíveis na Unidade escolhida anteriormente. Somente os serviços escolhidos serão chamados no Painel.

![posts-painel-apps-novosgav1x.png](/images/posts-painel-apps-novosgav1x.png)

Em caso de erro ao tentar carregar a URL, uma mensagem de alerta será exibida e os campos Unidade e Serviços deverão ser preenchidos manualmente. Tanto o ID da Unidade quanto os IDs dos serviços devem ser copiados a partir dos cadastros do NovoSGA e informados conforme exibidos abaixo:

![posts-painel-apps-novosgav1x-error.png](/images/posts-painel-apps-novosgav1x-error.png)

Esta mensagem de alerta, basicamente, pode ser exibida pelos seguintes motivos:

- **Endereço errado**: O endereço informado não está correto. Verifique novamente o endereço e faça um teste copiando e colando em uma nova guia do navegador para certificar-se que o sistema NovoSGA está abrindo corretamente.
- **Conteúdo inseguro**: Por questão de segurança o navegdor web bloqueia requisições para um endereço HTTP (sem certificado) a partir de um endereço HTTPS (seguro, com certificado). Veja como resolver isso mais abaixo na seção sobre **Conteúdo inseguro**.
- **Endereço não acessível**: Isso pode acontecer quando o cadastro está sendo feito fora da rede onde o NovoSGA está rodando (em caso de uma instalação na rede interna). Nesse caso o navegador não conseguirá acessar o sistema e a configuração deverá ser feita manualmente.

### NovoSGA V2.0 e V2.1+

Nas versões mais recentes do NovoSGA toda a API é protegida com usuário e senha. Por isso, nesse caso além da URL é necessário preencher os campos para autenticação via OAuth2.

- **URL**: Esse é o endereço HTTP do NovoSGA. Pode ser copiado a partir da barra de endereço do navegador web. É necessário se atentar para não colar o caminho `/login`. Exemplo de endereços: http://ip-ou-nome-do-servidor/, http://ip-ou-nome-do-servidor/public/
- **Usuário**: Nome de usuário (login) com acesso ao NovoSGA.
- **Senha**: Senha do usuário do NovoSGA
- **Client ID**: Identificador do cliente OAuth2. O cadastro de clientes OAuth2 fica na administração do NovoSGA (caminho `/admin/api/`).
- **Client Secret**: Chave secreta do cliente OAuth2. O cadastro de clientes OAuth2 fica na administração do NovoSGA (caminho `/admin/api/`).

![posts-painel-apps-novosgav2x.png](/images/posts-painel-apps-novosgav2x.png)

Em caso de erro ao tentar autenticar, uma mensagem de alerta será exibida e os campos Unidade e Serviços deverão ser preenchidos manualmente. Tanto o ID da Unidade quanto os IDs dos serviços devem ser copiados a partir dos cadastros do NovoSGA e informados conforme exibidos abaixo:

![posts-painel-apps-novosgav2x-error.png](/images/posts-painel-apps-novosgav2x-error.png)

Esta mensagem de alerta, basicamente, pode ser exibida pelos seguintes motivos:

- **Endereço errado**: O endereço informado não está correto. Verifique novamente o endereço e faça um teste copiando e colando em uma nova guia do navegador para certificar-se que o sistema NovoSGA está abrindo corretamente.
- **Credencial errada**: O endereço informado está correto, porém o usuário e senha estão errados.
- **OAuth2 client errado**: O endereço e a credencial (usuário e senha) estão corretos, porém os campos não foram copiados corretamente.
- **Conteúdo inseguro**: Por questão de segurança o navegdor web bloqueia requisições para um endereço HTTP (sem certificado) a partir de um endereço HTTPS (seguro, com certificado). Veja como resolver isso mais abaixo na seção sobre **Conteúdo inseguro**.
- **Endereço não acessível**: Isso pode acontecer quando o cadastro está sendo feito fora da rede onde o NovoSGA está rodando (em caso de uma instalação na rede interna). Nesse caso o navegador não conseguirá acessar o sistema e a configuração deverá ser feita manualmente.


## Conteúdo inseguro

Como já mencionado acima, por padrão o navegador web irá bloqueiar as requisições para endereços HTTP. Para contornar esse bloqueio basta ir nas configurações do site, clicando no ícone ao lado do endereço da página e depois em "Configurações do site":

![posts-painel-apps-site-settings.png](/images/posts-painel-site-settings.png)

Uma nova aba irá abrir com a lista de todas as configurações disponíveis. Procure por "Conteúdo inseguro", e altere o valor para "Permitir".

![posts-painel-site-settings-insecure-content.png](/images/posts-painel-site-settings-insecure-content.png)

Após essa mudança, basta recarregar a página do Painel para verificar se a mensagem de alerta irá sumir e os campos Unidade e Serviços serão automaticamente preenchidos.

**ATENÇÃO**: Esse mesmo procedimento deve ser feito para o endereço [https://painel-client.mangati.com/](https://painel-client.mangati.com/) uma vez que a visualização do Painel acontece em outro endereço.


A próxima etapa é a configuração dos widgets do Painel, que será demonstrada na [parte 2 do tutorial](/posts/configurar-painel-novosga-parte-2).
