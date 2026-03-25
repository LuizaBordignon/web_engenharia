# Step 3 — Design System e Dashboard

## O que foi pedido

Criar o Dashboard para usuários autenticados usando LiveView e
componentes HEEx. A interface deve reagir em tempo real via
Phoenix.PubSub quando o status das máquinas mudar.

## O que eu implementei

Este foi o passo principal da minha entrega. Construí o dashboard
completo em HTML, CSS e JavaScript puro, sem bibliotecas externas, tentei seguir a mesma ideia do HEEx puro que o teste pede.

## Estrutura de arquivos
```
w-core/
├── login.html
├── dashboard.html
├── css/
│   ├── variables.css
│   ├── login.css
│   └── dashboard.css
└── js/
    ├── login.js
    └── dashboard.js
```

## Design System

Criei um `variables.css` centralizando todos os tokens visuais
do projeto, cores, fontes e bordas. Qualquer mudança visual
acontece em um lugar só e reflete em toda a aplicação.

As cores seguem uma semântica fixa:
- Verde → online / funcionando
- Âmbar → alerta / atenção
- Vermelho → crítico / falha

## Tela de login

Simulei a autenticação com usuários mockados em `js/login.js`.
Na versão real, essa verificação seria feita pelo servidor via
`phx.gen.auth`.

Credenciais para teste:
- email: operador@planta42.com
- senha: 123456

## Dashboard

O dashboard exibe todos os sensores em tempo real com:
- Cards de resumo no topo com contagem por status
- Grid de sensores com status visual por cor
- Atualização automática a cada 3 segundos

## Como simulei o tempo real

O Phoenix PubSub empurra atualizações do servidor para a tela
automaticamente. Como não tenho esse recurso, simulei com
`setInterval` no JavaScript, a cada 3 segundos um sensor
aleatório muda de status e a tela é redesenhada.

## Responsividade

A interface funciona em três tamanhos de tela:
- Desktop → 4 colunas
- Tablet  → 2 colunas
- Mobile  → 1 coluna

Implementado com media queries no CSS, sem nenhuma biblioteca.

## Trade-offs

Por não dominar Elixir, os dados são mockados no front em vez
de virem do servidor. Numa versão real, o `js/dashboard.js`
seria substituído pelo LiveView recebendo eventos do GenServer
via PubSub, a estrutura visual permaneceria a mesma.