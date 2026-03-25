# Step 1 - Fundação e Autenticação

## O que foi pedido

Configurar a aplicação em Elixir + Phoenix, banco SQLite e gerar
autenticação via `phx.gen.auth`.

## Limitações

Não tenho conhecimento em Elixir e Phoenix, então não consegui
implementar este passo. Pesquisei o que o `phx.gen.auth` faz e
entendi que ele gera automaticamente o sistema de login, tabela
de usuários e sessões seguras, sem precisar escrever isso do zero.

## Como resolvi no que domino

Simulei a autenticação em `js/login.js` com usuários mockados.
A lógica é a mesma, verificar credenciais e redirecionar, só
que acontece no front em vez de no servidor.