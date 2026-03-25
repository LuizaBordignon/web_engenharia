# Step 2 — OTP & ETS

## O que foi pedido

Construir o sistema de ingestão de eventos com GenServer, ETS
e um Worker assíncrono gravando em lote no SQLite.

## Limitações

Não tenho conhecimento em OTP e BEAM. Pesquisei e entendi que
o ETS funciona como uma memória super rápida que absorve os eventos
antes de gravar no banco, evitando que o SQLite trave com muitas
escritas ao mesmo tempo.

## Como resolvi no que domino

No `js/dashboard.js` simulei esse fluxo com um array em memória
e `setInterval` atualizando a tela a cada 3 segundos, a ideia
do "buffer antes de persistir" é a mesma, só em escala menor.