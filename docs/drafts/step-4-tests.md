# Step 4 - Testes

## O que foi pedido

Testes unitários e um teste de integração injetando 10.000 eventos
concorrentes, provando que o ETS não perdeu eventos e que o SQLite
sincronizou corretamente.

## Limitações

Não tenho conhecimento em testes no ecossistema Elixir — nem em
ExUnit, que é o framework de testes nativo. Também não implementei
o ETS e o GenServer, então não teria como testar o que não construí.

## Como eu testaria no que domino

No JavaScript, testaria a função `renderizarSensores()` e os
contadores do dashboard — verificando se o número de sensores
por status bate com o que aparece na tela.

Um exemplo simples seria:
```js
for (var i = 0; i < 100; i++) {
  sensors[i % sensors.length].status = 'critico'
}

renderizarSensores()

var contador = document.getElementById('count-critico').textContent
console.assert(contador === '8', 'contador incorreto')
```