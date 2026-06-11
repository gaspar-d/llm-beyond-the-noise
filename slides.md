---
theme: default
title: 'LLM: Beyond the Noise'
info: |
  Treinamento NTT Data — uso consciente de LLMs e Agents.
  Por Gaspar.
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: fade
mdc: true
colorSchema: light
fonts:
  sans: Space Grotesk
  mono: JetBrains Mono
---

<div class="catch">LLM: Beyond the <span class="hl sketch-under">Noise</span></div>

<div class="catch-sub">Como usar IA sem falir a empresa</div>

<div class="mt-14 note">Gaspar · NTT Data · 2026</div>

<!--
Boas-vindas. Quebra-gelo: "quem aqui já pediu pro agent renomear uma pasta? Então, essa talk é pra você."
-->

---
layout: center
class: text-center
---

<div class="catch">Agents são incríveis.</div>

<v-click>

<div class="catch mt-6">E é <span class="hl">exatamente por isso</span><br>que eles vão queimar seu budget.</div>

</v-click>

<!--
Tese da talk em uma frase. Pausa dramática antes do clique.
A talk NÃO é anti-agent. É anti-desperdício.
-->

---
layout: center
---

<div class="kicker text-center mb-8">a regra do 8 ou 80</div>

<div class="grid grid-cols-2 gap-8">
  <div class="sketch-box clay text-center">
    <div class="text-5xl mb-2">🤖</div>
    <div class="note text-2xl">"IA resolve tudo,<br>podem demitir todo mundo"</div>
  </div>
  <div class="sketch-box olive text-center">
    <div class="text-5xl mb-2">🙄</div>
    <div class="note text-2xl">"IA é hype,<br>isso vai passar"</div>
  </div>
</div>

<v-click>

<div class="catch mt-10 text-3xl">Os dois estão errados. Podem sentar juntos.</div>

</v-click>

<!--
Posicionamento: não sou evangelista nem hater. Sou o cara da fatura.
-->

---
layout: center
class: text-center
---

<div class="kicker mb-6">parte 1 · como isso funciona por baixo</div>

<div class="catch">A API é <span class="hl sketch-under">stateless</span>.</div>

<v-click>

<div class="catch-sub mt-8">O modelo não lembra de você.<br>Cada request começa do zero. Igual a Dory.</div>

</v-click>

<!--
Contexto: imagine que VOCÊS estão construindo um client de chat em cima da API do modelo.
O modelo não tem memória entre chamadas. Quem "lembra" é o SEU código — reenviando tudo.
Prompt caching existe, mas só dá desconto (~10% no read) e expira. Não elimina nada.
-->

---

<div class="kicker mb-4">parte 1 · a bola de neve</div>

## Toda mensagem reenvia a conversa inteira

<div class="mt-4 grid grid-cols-3 gap-6 items-start">

<div v-click="1" class="sketch-box">
  <div class="note text-xl mb-2">Request 1</div>
  <div class="text-sm font-mono">
    🧑 "Oi, tudo bem?"
  </div>
</div>

<div v-click="2" class="sketch-box">
  <div class="note text-xl mb-2">Request 2</div>
  <div class="text-sm font-mono">
    🧑 "Oi, tudo bem?"<br>
    🤖 "Oi! Como posso ajudar?"<br>
    🧑 "Me explica REST"
  </div>
</div>

<div v-click="3" class="sketch-box danger">
  <div class="note text-xl mb-2">Request 3</div>
  <div class="text-sm font-mono">
    🧑 "Oi, tudo bem?"<br>
    🤖 "Oi! Como posso ajudar?"<br>
    🧑 "Me explica REST"<br>
    🤖 "REST é... (800 tokens)"<br>
    🧑 "E GraphQL?"
  </div>
</div>

</div>

<v-click at="4">

<div class="catch mt-10 text-3xl">Você paga pela conversa inteira. Toda. Santa. Vez.</div>

</v-click>

<!--
Andar pelos 3 requests. O terceiro já carrega tudo, incluindo os 800 tokens da resposta sobre REST.
O contexto só cresce. E input token é cobrado por request.
-->

---
layout: center
class: text-center
---

<div class="catch">Duvida?</div>

<div class="catch-sub mt-6">Coloca <span class="hl">$5</span> na API e tenta manter um papo.</div>

<v-click>

<div class="note mt-10 text-2xl">Spoiler: a amizade acaba rápido. 💸</div>

</v-click>

<!--
Desafio real: criar uma key, fazer um client de 30 linhas em Python, conversar.
Ver o painel de billing subir em tempo real é a melhor aula de arquitetura que existe.
-->

---

<div class="kicker mb-4">parte 1 · o vilão silencioso</div>

## Seu `CLAUDE.md` de 500 linhas

<div class="mt-8 grid grid-cols-2 gap-10 items-center">

<div class="sketch-box clay">

```text
# CLAUDE.md (500 linhas)
- guia de estilo completo
- história da empresa
- todos os 47 microservices
- como fazer deploy em 2019
- receita de bolo da arquitetura
```

</div>

<div>
  <div class="stat">3–7k</div>
  <div class="stat-label mb-6">tokens por interação</div>
  <v-click>
    <div class="note text-2xl">Enviado <b>sempre</b>.<br>Mesmo quando você só pediu<br>um <code>console.log</code>.</div>
  </v-click>
</div>

</div>

<!--
O CLAUDE.md/agent.md vive no system prompt. Vai em TODA chamada do loop.
Não importa se a pergunta precisa daquilo ou não.
-->

---
layout: center
class: text-center
---

<div class="kicker mb-6">parte 1 · a conta</div>

<div class="catch text-7xl"><span class="hl">10 perguntas = 30–70k tokens</span></div>

<div class="catch-sub mt-8">de overhead. Só de CLAUDE.md.</div>

<v-click>

<div class="note mt-10 text-2xl">Tudo isso pra ele lembrar que você prefere <code>uv</code> ao <code>pip</code>.</div>

</v-click>

<!--
Matemática simples: 500 linhas ≈ 3-7k tokens × 10 interações.
E é overhead PURO quando o assunto não precisa do conteúdo.
Gancho: "e se só carregasse quando precisa?" → Skills.
-->

---
layout: center
class: text-center
---

<div class="kicker mb-6">parte 2 · skills</div>

<div class="catch">Skills = <span class="hl sketch-under">Lazy Loading</span></div>

<v-click>

<div class="catch-sub mt-8">Só o front matter vive no contexto: <span class="hl">~100 tokens</span>.<br>O resto carrega se — e só se — precisar.</div>

</v-click>

<!--
Conceito que todo dev conhece: lazy loading.
O front matter (nome + descrição) é o "índice". Carregado uma vez por sessão.
O corpo da skill só entra no contexto quando a tarefa pede.
-->

---

<div class="kicker mb-4">parte 2 · o slide do aha</div>

## 10 interações, a mesma informação

<div class="mt-10">

<div class="mb-8">
  <div class="note text-2xl mb-2">CLAUDE.md (500 linhas)</div>
  <div class="flex items-center gap-4">
    <svg width="640" height="40" viewBox="0 0 640 40">
      <path d="M3 6 Q 160 2, 620 7 L 618 33 Q 240 37, 4 32 Z" fill="#CC785C" stroke="#191919" stroke-width="2.5" stroke-linejoin="round"/>
    </svg>
    <span class="note text-3xl font-bold">30–70k</span>
  </div>
</div>

<v-click>

<div>
  <div class="note text-2xl mb-2">Skill (front matter)</div>
  <div class="flex items-center gap-4">
    <svg width="20" height="40" viewBox="0 0 20 40">
      <path d="M3 8 Q 8 5, 16 8 L 15 32 Q 9 35, 4 32 Z" fill="#788C5D" stroke="#191919" stroke-width="2.5" stroke-linejoin="round"/>
    </svg>
    <span class="note text-3xl font-bold">~1k</span>
  </div>
</div>

</v-click>

<v-click>

<div class="catch mt-10 text-3xl">~98% de desconto. Sem cupom.</div>

</v-click>

</div>

<!--
Mesma informação disponível, custo de contexto ~30-70x menor.
Esse é o slide que justifica a tese da talk.
-->

---

<div class="kicker mb-4">parte 2 · como estragar tudo</div>

## "Achei um repo: as 1000 melhores Skills do mundo ⭐ 47k"

<div class="mt-8 grid grid-cols-2 gap-8">

<div v-click="1" class="sketch-box danger">
  <div class="note text-2xl mb-1">1000 front matters</div>
  <div>~100 tokens cada → <b>~100k tokens</b> de "índice" vivendo no contexto. Sempre.</div>
</div>

<div v-click="2" class="sketch-box danger">
  <div class="note text-2xl mb-1">E quando carregam...</div>
  <div>O corpo da skill é grande — e depois de carregado, <b>fica no contexto</b> até o fim da sessão.</div>
</div>

</div>

<v-click at="3">

<div class="catch mt-10 text-3xl">Parabéns. Você reinventou o bloat. 👏</div>

</v-click>

<!--
Skills não são mágica, são lazy loading. Lazy loading de 1000 coisas ainda é 1000 coisas.
Curadoria > acumulação. Instale o que o SEU fluxo usa.
-->

---
layout: center
---

<div class="kicker text-center mb-8">parte 2 · a regra</div>

<div class="grid grid-cols-2 gap-8">
  <div class="sketch-box clay text-center">
    <div class="catch text-3xl mb-3">CLAUDE.md</div>
    <div class="text-xl">Pequeno. Enxuto.<br>Só o que é necessário <b>toda</b> interação.</div>
    <div class="note mt-3 text-xl">"usa uv, não pip" → aqui ✅</div>
  </div>
  <div class="sketch-box olive text-center">
    <div class="catch text-3xl mb-3">Skills</div>
    <div class="text-xl">Específicas. Sob demanda.<br>Conhecimento que só algumas tarefas usam.</div>
    <div class="note mt-3 text-xl">"processo de release interno" → aqui ✅</div>
  </div>
</div>

<!--
Regra de bolso. Se precisa SEMPRE → CLAUDE.md (curto).
Se precisa ÀS VEZES → Skill.
Preview: e se for trabalho PESADO? Sub-agent. Já chegamos lá.
-->

---
layout: center
class: text-center
---

<div class="kicker mb-6">parte 3 · agents</div>

<div class="catch">Agent é um <span class="hl sketch-under">while loop</span>.</div>

<v-click>

<div class="mt-10 text-left mx-auto" style="max-width: 720px">

```javascript
while (!done) {
  think();
  callTool();
  appendToContext();
  payAgain(); // 💸
}
```

</div>

</v-click>

<v-click>

<div class="catch-sub mt-8">Um while loop com cartão de crédito.</div>

</v-click>

<!--
Desmistificar: agent = modelo + tools num loop agir/observar.
model → tool call → resultado volta pro contexto → model de novo. Até terminar.
Não é "o modelo refinando a resposta sozinho" — é agir, observar, repetir.
-->

---

<div class="kicker mb-4">parte 3 · o loop por dentro</div>

## Cada volta reenvia TUDO de novo

<div class="mt-2 flex justify-center">
<svg width="860" height="360" viewBox="0 0 860 360">
  <!-- user -->
  <g>
    <rect x="20" y="150" width="120" height="60" rx="14" fill="none" stroke="#191919" stroke-width="2.5"/>
    <text x="80" y="187" text-anchor="middle" style="font-family: Caveat; font-size: 26px; fill: #191919">você 🧑</text>
  </g>
  <!-- arrow user -> agent -->
  <path d="M145 178 C 180 170, 200 185, 235 178" fill="none" stroke="#191919" stroke-width="2.5" marker-end="url(#arr)"/>
  <!-- agent -->
  <g>
    <rect x="245" y="140" width="160" height="80" rx="16" fill="#f7e8e1" stroke="#B05730" stroke-width="2.5"/>
    <text x="325" y="175" text-anchor="middle" style="font-family: Caveat; font-size: 26px; fill: #191919">agent 🤖</text>
    <text x="325" y="205" text-anchor="middle" style="font-family: Caveat; font-size: 18px; fill: #4a4a44">(modelo + loop)</text>
  </g>
  <!-- loop arrows agent <-> tools -->
  <g v-click="1">
    <path d="M410 160 C 470 120, 540 120, 600 155" fill="none" stroke="#788C5D" stroke-width="2.5" marker-end="url(#arrG)"/>
    <text x="505" y="115" text-anchor="middle" style="font-family: Caveat; font-size: 22px; fill: #788C5D">tool call</text>
    <path d="M600 205 C 540 245, 470 245, 410 205" fill="none" stroke="#788C5D" stroke-width="2.5" marker-end="url(#arrG)"/>
    <text x="505" y="270" text-anchor="middle" style="font-family: Caveat; font-size: 22px; fill: #788C5D">resultado → contexto</text>
    <!-- tools -->
    <rect x="610" y="140" width="150" height="80" rx="16" fill="#eef0e7" stroke="#788C5D" stroke-width="2.5"/>
    <text x="685" y="175" text-anchor="middle" style="font-family: Caveat; font-size: 24px; fill: #191919">tools 🔧</text>
    <text x="685" y="203" text-anchor="middle" style="font-family: Caveat; font-size: 17px; fill: #4a4a44">bash · read · grep</text>
  </g>
  <!-- token counter -->
  <g v-click="2">
    <text x="325" y="300" text-anchor="middle" style="font-family: Caveat; font-size: 24px; fill: #BF4D43">contexto: 10k → 25k → 45k → 70k...</text>
    <text x="325" y="330" text-anchor="middle" style="font-family: Caveat; font-size: 20px; fill: #BF4D43">cada volta paga o contexto inteiro de novo</text>
  </g>
  <!-- result -->
  <g v-click="3">
    <path d="M325 140 C 320 90, 180 70, 145 110" fill="none" stroke="#191919" stroke-width="2.5" stroke-dasharray="7 6" marker-end="url(#arr)"/>
    <text x="230" y="65" text-anchor="middle" style="font-family: Caveat; font-size: 22px; fill: #191919">resultado (depois de N voltas)</text>
  </g>
  <defs>
    <marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6" fill="none" stroke="#191919" stroke-width="1.8"/></marker>
    <marker id="arrG" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6" fill="none" stroke="#788C5D" stroke-width="1.8"/></marker>
  </defs>
</svg>
</div>

<!--
Clique 1: o loop tool call / resultado. Cada output de tool VOLTA pro contexto.
Clique 2: o contexto cresce a cada volta — e a cada volta o contexto INTEIRO é reenviado.
Crescimento ~quadrático no tamanho do loop.
Clique 3: você só vê o resultado final. A fatura viu todas as voltas.
-->

---
layout: center
class: text-center
---

<div class="kicker mb-6">parte 3 · analogia</div>

<div class="catch">A AWS tem 200+ serviços.</div>

<div class="catch-sub mt-6">Você usa 12. E sabe <span class="hl">exatamente</span> por quê.</div>

<v-click>

<div class="catch mt-12 text-4xl">LLM é igual. Só que o agent<br><span class="hl">provisiona sozinho</span>.</div>

</v-click>

<!--
Todo mundo aqui já levou susto com fatura da AWS. Mesmo instinto vale pra LLM.
Diferença: na AWS quem cria recurso é você. No agent, o loop decide quantas voltas dá.
-->

---

<div class="kicker mb-4">parte 3 · quando ninguém supervisiona</div>

## Replit, julho de 2025

<div class="mt-6 grid grid-cols-2 gap-6">

<div v-click="1" class="sketch-box danger">💀 Agent deletou o <b>DB de produção</b> — durante um <b>code freeze</b> explícito</div>

<div v-click="2" class="sketch-box danger">🗑️ Dados de 1.200+ executivos e 1.190+ empresas apagados</div>

<div v-click="3" class="sketch-box danger">🎭 Criou ~4.000 usuários fake pra mascarar o estrago</div>

<div v-click="4" class="sketch-box danger">🤥 Disse que rollback "não funcionaria" — funcionava</div>

</div>

<v-click at="5">

<div class="catch mt-8 text-3xl">O agent não só errou. Ele <span class="hl">mentiu na daily</span>.</div>

</v-click>

<!--
Caso real e documentado: Jason Lemkin (SaaStr) testando o agent da Replit por 12 dias.
Fontes: Fortune, The Register, AI Incident Database #1152.
Moral: agent com write em prod e sem humano no loop = incidente esperando data.
-->

---

<div class="kicker mb-4">parte 3 · a fatura chegou</div>

## Números reais de 2026

<div class="mt-8 grid grid-cols-2 gap-x-12 gap-y-10">

<div v-click="1">
  <div class="stat">$500M</div>
  <div class="stat-label">uma empresa, um mês de Claude — sem usage limits configurados</div>
</div>

<div v-click="2">
  <div class="stat">$4.200</div>
  <div class="stat-label">um dev, um feriado prolongado de API</div>
</div>

<div v-click="3">
  <div class="stat">abril</div>
  <div class="stat-label">mês em que a Uber zerou o budget de IA <b>do ano</b></div>
</div>

<div v-click="4">
  <div class="stat">24×</div>
  <div class="stat-label">projeção da Goldman Sachs pra demanda de tokens com agents</div>
</div>

</div>

<!--
Todos verificáveis: Tom's Hardware, LeanOps, TechCrunch (jun/2026), Gizmodo.
Bônus pra contar: Amazon matou o ranking interno de "quem mais usa IA" porque
viraram tokenmaxxing — gente dando tarefa inútil pro agent pra subir no ranking.
-->

---
layout: center
class: text-center
---

<div class="kicker mb-6">parte 3 · "mas eu pago assinatura..."</div>

<div class="catch">Você não paga em dinheiro.</div>

<div class="catch mt-4">Você paga em <span class="hl sketch-under">rate limit</span>.</div>

<v-click>

<div class="catch-sub mt-10">Queimou o limite renomeando pasta de manhã?<br>Às 15h, sem modelo bom pra você.</div>

</v-click>

<v-click>

<div class="note mt-8 text-2xl">E a empresa? Essa paga em dinheiro mesmo. (slide anterior 👆)</div>

</v-click>

<!--
A objeção clássica: "pago $20/$100 flat, token é problema da Anthropic".
Resposta 1: assinatura é medida em janela de uso. Desperdício = throttle/downgrade na hora H.
Resposta 2: no plano enterprise/API a cobrança É por token. A fatura dos $500M era disso.
-->

---

<div class="kicker mb-4">parte 3 · onde agents brilham ✨</div>

## Automação sem humano esperando

<div class="mt-6 grid grid-cols-3 gap-6">
  <div class="sketch-box olive text-center">
    <div class="text-4xl mb-2">🔍</div>
    <div class="text-xl"><b>Code review</b><br>em todo PR</div>
  </div>
  <div class="sketch-box olive text-center">
    <div class="text-4xl mb-2">📜</div>
    <div class="text-xl"><b>Log search</b><br>e correlação de incidente</div>
  </div>
  <div class="sketch-box olive text-center">
    <div class="text-4xl mb-2">🚦</div>
    <div class="text-xl"><b>CI triage</b><br>de testes flaky</div>
  </div>
</div>

<v-click>

<div class="catch mt-10 text-3xl">Eles também queimam tokens.<br>A diferença se chama <span class="hl">ROI</span>.</div>

</v-click>

<v-click>

<div class="note mt-6 text-2xl text-center">1 bug de prod evitado paga meses de agent. Leverage, não preço.</div>

</v-click>

<!--
Sem humano esperando = pode usar modelo mais barato, rodar em batch, fora de pico.
A justificativa nunca é "é barato" — é o retorno por token.
-->

---

<div class="kicker mb-4">parte 3 · onde é desperdício 🔥</div>

## Você não precisa de um agent pra isso

<div class="mt-6 grid grid-cols-2 gap-6">

<div v-click="1" class="sketch-box danger text-xl">📁 "Organiza minhas pastas" → <code>mv</code> existe e custa $0</div>

<div v-click="2" class="sketch-box danger text-xl">❓ "O que é idempotência?" → chat simples (ou um search engine, lembra deles?)</div>

<div v-click="3" class="sketch-box danger text-xl">✏️ Renomear variável → seu IDE faz com F2</div>

<div v-click="4" class="sketch-box danger text-xl">🔁 E não crie seu "agent de codar" — os harnesses já existem</div>

</div>

<v-click at="5">

<div class="mt-8 text-center note text-2xl">
Claude Code · OpenCode · Cursor · <span class="scratch">Gemini CLI</span> ✝ <span class="text-base">(2025 – 18/06/2026, morto pelo próprio pai, como manda a tradição Google)</span>
</div>

</v-click>

<!--
Cada item: pergunta retórica pro público antes de revelar.
Gemini CLI: funeral marcado pra 18/06 — DAQUI A 8 DIAS. Free/Pro/Ultra perdem acesso,
substituto é o Antigravity CLI (closed source). Enterprise mantém. RIP. 🪦
-->

---

<div class="kicker mb-4">parte 3 · sub-agents</div>

## Quando o trabalho sujo não cabe no seu contexto

<div class="mt-6 grid grid-cols-3 gap-6">
  <div v-click="1" class="sketch-box">
    <div class="note text-2xl mb-1">🗂️ Contexto isolado</div>
    <div class="text-lg">O sub-agent trabalha à parte. Só o <b>resultado</b> volta — não as 50 voltas do loop dele.</div>
  </div>
  <div v-click="2" class="sketch-box">
    <div class="note text-2xl mb-1">⚡ Roda em paralelo</div>
    <div class="text-lg">Vários sub-agents ao mesmo tempo, sem travar o agent principal.</div>
  </div>
  <div v-click="3" class="sketch-box">
    <div class="note text-2xl mb-1">🤝 Delegação automática</div>
    <div class="text-lg">O harness delega sozinho pela <code>description</code>. Criar é com você; usar, ele decide.</div>
  </div>
</div>

<v-click at="4">

<div class="catch mt-10 text-3xl">Spinning é automático. <span class="hl">Criar é com você.</span></div>

</v-click>

<!--
Formato do arquivo é quase igual ao de uma Skill (markdown + frontmatter).
Claude Code, Cursor 2.4+ e OpenCode: todos delegam proativamente pela description.
"use proactively" na description aumenta a chance de delegação automática.
O que NENHUM faz: definir um tipo novo de sub-agent sozinho.
-->

---
layout: center
class: text-center
---

<div class="kicker mb-6">parte 4 · personas</div>

<div class="sketch-box mx-auto" style="max-width: 760px">
  <div class="text-2xl font-mono">"Você é um engenheiro de software<br>com 30 anos de experiência em..."</div>
</div>

<v-click>

<div class="catch mt-12">Parabéns. Você acabou de<br>deixar o modelo <span class="hl sketch-under">mais burro</span>.</div>

</v-click>

<!--
Pergunta pro público: quem aqui tem um prompt assim salvo? (todo mundo tem)
Pausa. Clique. Deixar a frase doer.
-->

---

<div class="kicker mb-4">parte 4 · a ciência</div>

## Persona ajuda OU atrapalha — depende da tarefa

<div class="mt-8 grid grid-cols-2 gap-8">

<div class="sketch-box olive">
  <div class="note text-2xl mb-2">✅ Ajuda</div>
  <div class="text-xl">Tarefas de <b>alinhamento</b>:<br>writing, roleplay, tom, safety</div>
</div>

<div class="sketch-box danger">
  <div class="note text-2xl mb-2">❌ Atrapalha</div>
  <div class="text-xl">Tarefas de <b>pre-training</b>:<br>matemática, <b>coding</b>, factual recall</div>
</div>

</div>

<v-click>

<div class="mt-8 text-xl text-center">Dizer que ele é expert não adiciona fatos —<br><b>só atrapalha a busca dos que já existem.</b></div>

<div class="note mt-4 text-center text-lg">CMU (2026) · Wharton "Playing Pretend" (2025) · arXiv 2311.10054 (2023)</div>

</v-click>

<!--
CMU: 6 modelos, milhares de prompts — persona de expert degrada precisão.
Wharton: 6 modelos, questões graduate-level (física, química, bio, eng, direito). Mesmo resultado.
Hipótese: o prefixo de persona ativa o modo "instruction following" e rouba capacidade de recall factual.
Pra sub-agents é pior ainda: ele só fala com o agent principal. Não tem humano. Cosplay pra quem?
-->

---

<div class="kicker mb-4">parte 4 · faça assim</div>

## Constraints > Cosplay

<div class="mt-6 grid grid-cols-2 gap-10 items-center">

<div class="sketch-box danger">
  <div class="note text-xl mb-2">❌ Persona</div>
  <div class="font-mono text-base">"Você é um engenheiro sênior<br>brilhante com 30 anos de<br>experiência, vencedor de<br>prêmios, respeitado por..."</div>
</div>

<div class="sketch-box olive">
  <div class="note text-xl mb-2">✅ Constraints</div>
  <div class="font-mono text-base">
    Nível: senior/staff<br>
    Domínio: fintech, produção<br>
    Standards: SOLID, TDD<br>
    Tom: direto, sem filler<br>
    Temperature: 0
  </div>
</div>

</div>

<!--
Mesma intenção, zero teatro. Constraints dizem O QUE você quer, não QUEM ele deveria fingir ser.
"Constraints > Cosplay" é a frase pra levar pra casa dessa parte.
-->

---
layout: center
---

<div class="kicker text-center mb-6">o resumo · pode fotografar 📸</div>

| Quando você precisa... | Use |
| --- | --- |
| Sempre, em toda interação | **CLAUDE.md** (pequeno e enxuto) |
| Às vezes, em tarefas específicas | **Skills** (lazy loading) |
| Trabalho pesado que poluiria seu contexto | **Sub-agents** (isolado, paralelo) |
| Sem humano no loop, com ROI claro | **Agents** (automação) |
| Imitar um humano de 30 anos de XP | **Nada. Pare.** |

<!--
ESTE é o slide que o pessoal vai fotografar. Dar tempo.
Recapitular em 30 segundos andando linha por linha.
-->

---
layout: center
class: text-center
---

<div class="catch">Use a ferramenta <span class="hl sketch-under">mais barata</span><br>que resolve o problema.</div>

<v-click>

<div class="catch-sub mt-10">IA não é mágica. É infra.<br>E infra tem fatura.</div>

</v-click>

<v-click>

<div class="mt-14 note text-2xl">Obrigado! Perguntas? 🎤</div>

</v-click>

<!--
Fechamento. Voltar à tese: não é anti-agent, é anti-desperdício.
Deixar o slide da tabela acessível pro Q&A (tecla ← volta).
-->


