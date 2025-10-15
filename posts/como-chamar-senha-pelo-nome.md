---
tags: posts
title: Como chamar a senha pelo nome
description: Tutorial de como vocalizar o nome do cliente no Painel Mangati
layout: post.njk
---

Muitas vezes é necessário chamar a senha pelo número ao invés das letras e números. Nesses casos com uma simples configuração no Painel Mangati você consegue habilitar a chamada de senha pelo nome.

Primeiro, vá na edição do painel, e depois clique para editar o bloco com o componente `"NovoSGA - Senha em destaque"`.

Depois nas opções de `"Vocalização"`, certifique-se que a opção `"Vocalizar"` está habilitada e o `"Tipo de vocalização"` está definido como `"Usando Web Speech API"`.

![posts-chamar-senha-nome1.png](/images/posts-chamar-senha-nome1.png)

Por fim, nas opções do `"Texto 2"` (texto principal), altere a opção `"Mensagem a ser exibida"` para `"Nome do cliente"`. O conteúdo do `"Texto 2"` é o que será utilizado na fala.

![posts-chamar-senha-nome2.png](/images/posts-chamar-senha-nome2.png)

Pronto. O seu painel já está preparado para chamar as senhas pelo nome do cliente.

![posts-chamar-senha-nome-demo.png](/images/posts-chamar-senha-nome-demo.png)
