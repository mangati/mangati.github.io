---
tags: posts
title: Configurar Painel com o NovoSGA (parte 2)
description: Tutorial de como integrar o NovoSGA com o Painel Mangati
layout: post.njk
---

Nesta segunda parte do tutorial será demonstrado como configurar os widgets do Painel. Para isso é necessário ter feito o cadastro do NovoSGA (App) conforme descrito na [parte 1 do tutorial](/posts/configurar-painel-novosga-parte-1).

Agora que a configuração de acesso ao NovoSGA já está cadastrada, é hora de criar o painel que irá exibir as senhas chamadas. Clique no item `"Painéis"` no menu principal, e depois clique no botão `"Novo painel"`:

![posts-painel-new.png](/images/posts-painel-new.png)

A página de seleção do template do painel será exibida. Essa etapa é muito importante para definir a dimensão e posicionamento dos widgets do painel. Neste case iremos selecionar um template divido em 3 partes, permitindo então que sejam escolhidos 3 widgets:

![posts-painel-new2.png](/images/posts-painel-new2.png)

Com o campo de novo do painel preenchido e o template selecionado, basta clicar em `"Avançar"` para ir para a página de edição dos widgets do painel.

Para esse template escolhido, nós vamos adicionar ao bloco principal (`main_content`) o widget de exibição da senha que está sendo chamada. Clique em qualquer lugar do bloco desejado e uma barra lateral irá aparecer para selecionar o tipo de componente a ser adicionado.

O componente para exibição da senha que está sendo chamada é o `"NovoSGA - Senha em destaque"`, e após selecioná-lo é preciso escolher o NovoSGA a ser utilizado (cadastro feito na [parte 1 do tutorial](/posts/configurar-painel-novosga-parte-1)).

![posts-painel-novosga-featured-ticket.png](/images/posts-painel-novosga-featured-ticket.png)

Próxima etapa é configurar a notificação sonora do painel.

**Alerta:** Escolha o tipo de alerta que irá tocar quando uma nova senha for chamada. Clique no botão `"Tocar"` para escutar o áudio selecionado.

![posts-painel-novosga-featured-ticket-alert.png](/images/posts-painel-novosga-featured-ticket-alert.png)

**Vocalização**: Além do áudio de alerta, é possível configurar o painel para pronunciar a senha que está sendo chamada. Para isso é necessário habilitar a vocalização e preencher as demais opções conforme desejado:

- **Idioma da voz**: atualmente somente Português é suportado
- **Tipo de vocalização**: Há dois tipos de vocalização, utilizando áudios previamente gravados ou utilizando a API de fala do navegador.
  - **Usando arquivos MP3**: Ideal para pronunciar letras e números, permite escolher entre voz Masculina e Feminina (não suporta pronúncia de textos).
  - **Usando WebSpeech API**: Ideal para pronunciar nomes, a qualidade da fala depende do sistema operacional e do navegador utilizado.
- **Volume da fala**: Valor do volume da fala, sendo 0 mudo e 100 o mais alto.
- **Pronunciar "Senha"**: Se deseja que a palavra `"Senha`" seja falada antes de chamar uma senha
- **Pronunciar "0" à esquerda**: Se deseja que pronuncie `"0 0 1"` ao invés de `"1"` (ex: senha A001)
- **Pronunciar local**: Se deseja que pronuncie o local de atendimento (ex: Guichê 1)
- **Pronunciar prioridade**: Se deseja que a palavra `"Prioridade"` seja falada ao final quando for prioridade

![posts-painel-novosga-featured-ticket-speech.png](/images/posts-painel-novosga-featured-ticket-speech.png)

Após configurar o widget, clique em `"Atualizar"` para salvar as alterações.

Agora vamos adicionar o histórico de senhas à lateral do painel. Clique no bloco da lateral (`sidebar`) e escolha o componte `"NovoSGA - Histórico de senhas"`.

![posts-painel-novosga-ticket-history.png](/images/posts-painel-novosga-ticket-history.png)

Depois vamos configurar as opções de layout:

- **Limite de senhas**: Número máximo de senhas a serem exibidas no histórico
- **Orientação da lista**: Se a lista deve ser exibida verticalmente (de cima para baixo) ou horizontalmente (da esquerda para a direita)
- **Margem entre as senhas**: Define qual é o tamanho do espaço entre as senhas
- **Ocultar título**: Se deseja que exibir ou não o título `"Senhas anteriores"`
- **Texto do título**: Caso queira alterar o texto do título (padrão: `"Senhas anteriores"`)

![posts-painel-novosga-ticket-history-layout.png](/images/posts-painel-novosga-ticket-history-layout.png)

Por fim, para visualizar o painel basta clicar no botão `"Abrir painel"` na parte superior-direita da página de edição do painel. Uma nova aba do navegador abrirá, exibindo o painel que acabamos de cadastrar. Esse link é único e pode ser compartilhado para que o painel seja acessado em outros dispositivos.

![posts-painel-open-panel.png](/images/posts-painel-open-panel.png)

Abaixo é a tela do painel configurado neste tutorial, já com algumas senhas chamadas:

![posts-painel-demo.png](/images/posts-painel-demo.png)

