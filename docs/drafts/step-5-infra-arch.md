# Step 5 - Infraestrutura

## O que foi pedido

Criar um Dockerfile gerando uma mix release otimizada do Elixir,
garantindo a persistência do volume do banco SQLite.

## Limitações

Não tenho conhecimento em Docker nem em mix release do Elixir.
Pesquisei e entendi que o Dockerfile empacota a aplicação inteira
numa imagem — assim ela roda em qualquer servidor sem precisar
instalar nada manualmente.

## O que eu entendi

O mix release compila a aplicação Elixir em um executável único,
sem precisar do Elixir instalado no servidor. Isso é importante
no contexto de Edge Computing da Planta 42 — o servidor local
da fábrica roda a aplicação de forma autônoma.

A persistência do volume garante que o banco SQLite não seja
apagado quando o container reinicia — os dados históricos
ficam salvos mesmo em caso de queda do servidor.

## Como eu entregaria

Por não dominar Docker e Elixir, minha entrega é a interface
completa em HTML, CSS e JavaScript — que representa a camada
visual que rodaria dentro desse container.

## Diagrama do fluxo final
┌─────────────────────────────────────────────────┐
│                   Docker                        │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │            Aplicação Elixir             │   │
│  │                                         │   │
│  │  Sensor → GenServer → ETS → Worker      │   │
│  │                        ↓                │   │
│  │                     SQLite              │   │
│  │                        ↓                │   │
│  │               LiveView + PubSub         │   │
│  │                        ↓                │   │
│  │                   Dashboard             │   │
│  └─────────────────────────────────────────┘   │
│                                                │
│   volume/banco.db  ← persistido no host         │
└─────────────────────────────────────────────────┘