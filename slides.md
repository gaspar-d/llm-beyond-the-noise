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

<div class="catch">Agentes são incríveis.</div>

<v-click>

<div class="catch mt-6">E é <span class="hl">exatamente por isso</span><br>que eles vão queimar seu budget.</div>

</v-click>

<!--
Tese da talk em uma frase. Pausa dramática antes do clique.
A talk NÃO é anti-agent. É anti-desperdício.
-->

---

<div class="kicker mb-2">in memoriam ⚰️</div>

## Hype Deaths

<div class="note text-2xl mb-2">Todas já foram "o fim da programação como conhecemos".</div>

<div class="flex justify-center">
<svg width="880" height="250" viewBox="0 0 880 250">
  <!-- ground -->
  <path d="M0 218 Q 110 211, 220 218 T 440 218 T 660 218 T 880 218" fill="none" stroke="#191919" stroke-width="2.5"/>
  <!-- tombstone 1: ghost autocomplete -->
  <g v-click="1">
    <path d="M32 214 L34 64 Q36 18 100 16 Q164 18 166 64 L168 214 Z" fill="#EFEDE6" stroke="#191919" stroke-width="2.5"/>
    <text x="100" y="52" text-anchor="middle" style="font-family: Caveat; font-size: 20px; fill: #4a4a44">✝ R.I.P.</text>
    <text x="100" y="98" text-anchor="middle" style="font-family: Caveat; font-size: 23px; fill: #191919">Ghost</text>
    <text x="100" y="124" text-anchor="middle" style="font-family: Caveat; font-size: 23px; fill: #191919">Autocomplete</text>
    <text x="100" y="156" text-anchor="middle" style="font-family: Caveat; font-size: 19px; fill: #4a4a44">2021 – 2023</text>
    <text x="100" y="186" text-anchor="middle" style="font-family: Caveat; font-size: 16px; fill: #788C5D">morto pelo chat</text>
  </g>
  <!-- tombstone 2: prompt engineer -->
  <g v-click="2">
    <path d="M252 214 L254 64 Q256 18 320 16 Q384 18 386 64 L388 214 Z" fill="#EFEDE6" stroke="#191919" stroke-width="2.5"/>
    <text x="320" y="52" text-anchor="middle" style="font-family: Caveat; font-size: 20px; fill: #4a4a44">✝ R.I.P.</text>
    <text x="320" y="110" text-anchor="middle" style="font-family: Caveat; font-size: 23px; fill: #191919">Prompt Engineer</text>
    <text x="320" y="150" text-anchor="middle" style="font-family: Caveat; font-size: 19px; fill: #4a4a44">2022 – 2024</text>
    <text x="320" y="182" text-anchor="middle" style="font-family: Caveat; font-size: 16px; fill: #788C5D">virou skill de todo mundo</text>
  </g>
  <!-- tombstone 3: vibe coder -->
  <g v-click="3">
    <path d="M472 214 L474 64 Q476 18 540 16 Q604 18 606 64 L608 214 Z" fill="#EFEDE6" stroke="#191919" stroke-width="2.5"/>
    <text x="540" y="52" text-anchor="middle" style="font-family: Caveat; font-size: 20px; fill: #4a4a44">✝ R.I.P.</text>
    <text x="540" y="110" text-anchor="middle" style="font-family: Caveat; font-size: 23px; fill: #191919">Vibe Coder</text>
    <text x="540" y="150" text-anchor="middle" style="font-family: Caveat; font-size: 19px; fill: #4a4a44">2025 – 2026</text>
    <text x="540" y="182" text-anchor="middle" style="font-family: Caveat; font-size: 16px; fill: #788C5D">o código chegou em prod</text>
  </g>
  <!-- tombstone 4: agents (fresh grave) -->
  <g v-click="4">
    <path d="M692 214 L694 64 Q696 18 760 16 Q824 18 826 64 L828 214 Z" fill="#f7e8e1" stroke="#B05730" stroke-width="2.5"/>
    <text x="760" y="52" text-anchor="middle" style="font-family: Caveat; font-size: 20px; fill: #B05730">✝ R.I.P.?</text>
    <text x="760" y="110" text-anchor="middle" style="font-family: Caveat; font-size: 23px; fill: #191919">Agents</text>
    <text x="760" y="150" text-anchor="middle" style="font-family: Caveat; font-size: 22px; fill: #B05730">2025 – ???</text>
    <!-- fresh dirt mound -->
    <path d="M700 218 Q760 196 820 218 Z" fill="#D4A27F" stroke="#191919" stroke-width="2"/>
    <!-- shovel stuck in the dirt -->
    <line x1="838" y1="148" x2="822" y2="206" stroke="#191919" stroke-width="3"/>
    <path d="M818 204 Q830 198 836 210 Q828 222 816 214 Z" fill="#4a4a44" stroke="#191919" stroke-width="2"/>
    <path d="M834 142 q6 -2 8 4 q-2 6 -8 4 Z" fill="none" stroke="#191919" stroke-width="2.5"/>
  </g>
</svg>
</div>

<v-click at="5">

<div class="catch text-3xl mt-2">A cova já está cavada. <span class=hl>Mas será?</span></div>

</v-click>

<!--
Hype deaths, não tech deaths: o autocomplete continua vivo (Cursor Tab), o que morreu
foi cada um ser "o futuro da programação".
Ghost autocomplete: revolução de 2021 (Copilot), virou paisagem quando o chat chegou.
Prompt Engineer: vagas de $300k em 2023. Hoje? "saber escrever" voltou a ser requisito básico.
Vibe Coder: nasceu no tweet do Karpathy (fev/2025), morreu quando o código chegou em produção.
Agents: a pá tá ali do lado. Se a gente usar como tá usando, a data aparece sozinha.
-->

---
layout: center
---

<div class="catch mb-12">Hoje a gente vai ver:</div>

<div class="mx-auto" style="max-width: 700px">

<v-click>

<div class="sketch-box mb-4 text-xl">1️⃣ &nbsp;Como a API funciona por baixo <span class="note text-xl">(e por que sua fatura já sabe)</span></div>

</v-click>

<v-click>

<div class="sketch-box mb-4 text-xl">2️⃣ &nbsp;CLAUDE.md vs Skills — contexto custa caro</div>

</v-click>

<v-click>

<div class="sketch-box mb-4 text-xl">3️⃣ &nbsp;Agents: while loops com cartão de crédito</div>

</v-click>

<v-click>

<div class="sketch-box mb-4 text-xl">4️⃣ &nbsp;Desastres reais <span class="note text-xl">(tem DB de produção deletado)</span></div>

</v-click>

<v-click>

<div class="sketch-box text-xl">5️⃣ &nbsp;Personas: por que o cosplay deixa o modelo mais burro</div>

</v-click>

</div>

<!--
Revelar um por um, com uma frase de gancho pra cada.
No item 4, segurar o suspense: "sim, deletado. Sim, produção. Já chegamos lá."
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

<div class="catch mt-10 text-3xl">Os dois estão errados. Não ande com eles!</div>

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

<div class="catch-sub mt-8">O modelo não lembra de você.<br>Cada request começa do zero.</div>

</v-click>

<!--
Contexto: imagine que VOCÊS estão construindo um client de chat em cima da API do modelo.
O modelo não tem memória entre chamadas. Quem "lembra" é o SEU código — reenviando tudo.
Prompt caching existe, mas só dá desconto (~10% no read) e expira. Não elimina nada.
-->

---

<div class="kicker mb-4">parte 1 · a bola de neve</div>

## Toda mensagem precisa reenviar a conversa inteira

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
    🧑 "Dá para ficar rico com o tigrinho?"
  </div>
</div>

<div v-click="3" class="sketch-box danger">
  <div class="note text-xl mb-2">Request 3</div>
  <div class="text-sm font-mono">
    🧑 "Oi, tudo bem?"<br>
    🤖 "Oi! Como posso ajudar?"<br>
    🧑 "Dá para ficar rico com o tigrinho?"<br>
    🤖 "Fácil, é só..."<br>
    🧑 "E sem ir preso?"
  </div>
</div>

</div>

<v-click at="4">

<div class="catch mt-10 text-3xl">Você paga pela conversa inteira. A.. Cada.. Iteração..</div>

</v-click>

<!--
Andar pelos 3 requests. O terceiro já carrega tudo, incluindo os 800 tokens da resposta sobre REST.
O contexto só cresce. E input token é cobrado por request.
Comentário en passant: "duvida? coloca $5 na API e tenta manter um papo — spoiler: a amizade acaba rápido."
-->

---

<div class="kicker mb-4">parte 1 · Momento onde o backend levanta mão e pergunta... </div>

## "Mas e o prompt caching?"

<div class="mt-6 mx-auto" style="max-width: 820px">

<v-click>

<div class="sketch-box mb-4 text-xl">💸 É <b>desconto</b>, não isenção: 10 turnos = 10 cobranças <span class="note text-lg">(melhor caso: 1 write + 9 reads a ~10%)</span></div>

</v-click>

<v-click>

<div class="sketch-box mb-4 text-xl">🧠 Cache economiza <b>compute</b>, não <b>qualidade</b>: os tokens continuam ocupando contexto e atenção do modelo</div>

</v-click>

<v-click>

<div class="sketch-box text-xl">⏱️ Cache <b>expira</b> (TTL de 5 min): o mundo real é cheio de cold start</div>

</v-click>

</div>

<v-click>

<div class="catch mt-8 text-3xl">O desconto encolhe a fatura.<br>Não encolhe o <span class="hl">bloat</span>.</div>

</v-click>

<!--
Antecipar a objeção antes que alguém levante a mão.
Mecânica: o servidor guarda o KV cache do prefixo já processado e reusa se o começo
do prompt bater byte a byte. Só os tokens novos são processados.
Anthropic: write 1.25x, read 0.1x, TTL 5min (sliding). 1h opcional a 2x o write.
-->

---

<div class="kicker mb-4">parte 1 · cache 101</div>

## O cache pune quem mexe no passado

<div class="mt-6 grid grid-cols-2 gap-8">

<div v-click="1" class="sketch-box danger">
  <div class="note text-2xl mb-1">✏️ Editou o CLAUDE.md no meio da sessão?</div>
  <div class="text-lg">Ele fica no <b>topo</b> do prompt. Uma palavra mudada → cache inválido do byte ~0 → próxima request recomputa <b>tudo</b> a preço cheio.</div>
</div>

<div v-click="2" class="sketch-box olive">
  <div class="note text-2xl mb-1">📎 Por isso harnesses são append-only</div>
  <div class="text-lg">Tool results, file reads, suas mensagens: tudo colado <b>no fim</b>. Prefixo intacto, cache hit em toda volta.</div>
</div>

</div>

<v-click at="3">

<div class="catch mt-10 text-3xl">A linha mais cara do seu dia:<br>um edit no <span class="hl">topo do prompt</span>.</div>

</v-click>

<!--
Match é por prefixo (hash em blocos), não diff: primeiro byte diferente → recomputa tudo dali em diante.
Releu um arquivo alterado? Ele é APPENDED de novo (cache sobrevive; contexto incha — escolha seu veneno).
Compaction/summarization também reescreve o histórico → cache reset.
Bônus: harness que põe timestamp no topo do system prompt mata o cache em TODA chamada.
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

<div class="note mt-10 text-2xl">Tudo começou pedindo pra ele lembrar que você prefere <code>uv</code> ao invés do <code>pip</code>.</div>

</v-click>

<!--
Matemática simples: 500 linhas ≈ 3-7k tokens × 10 interações.
E é overhead PURO quando o assunto não precisa do conteúdo.
Se desafiarem com "mas e o cache?": em TOKENS a conta vale igual (o modelo recebe e lê os
3-7k em toda pergunta). Em DÓLARES o cache desconta: melhor caso 1 write + 9 reads ≈ custo
de ~2 cópias a preço cheio em vez de 10. Pior caso (pausas > 5min): preço cheio de novo.
E atenção não tem cache — qualidade degrada igual.
Gancho: "e se só carregasse quando precisa?" → Skills.
-->

---

<div class="kicker mb-4">parte 1 · dica grátis</div>

## The book is on the table

<div class="note text-xl mb-4">O mesmo prompt de code review em <span class="hl">inglês</span> vs <span class="hl">português</span>, a mesma informação:</div>

<div class="mb-3">
  <div class="flex items-center gap-4">
    <span class="font-mono text-sm" style="width: 130px">EN · o200k</span>
    <svg width="460" height="30" viewBox="0 0 460 30"><path d="M3 5 Q 120 2, 458 6 L 456 24 Q 180 28, 4 25 Z" fill="#788C5D" stroke="#191919" stroke-width="2.5" stroke-linejoin="round"/></svg>
    <span class="note text-2xl">66 tokens</span>
  </div>
</div>

<div v-click="1" class="mb-5">
  <div class="flex items-center gap-4">
    <span class="font-mono text-sm" style="width: 130px">PT · o200k</span>
    <svg width="544" height="30" viewBox="0 0 544 30"><path d="M3 5 Q 140 2, 542 6 L 540 24 Q 210 28, 4 25 Z" fill="#CC785C" stroke="#191919" stroke-width="2.5" stroke-linejoin="round"/></svg>
    <span class="note text-2xl font-bold">78 (+18%)</span>
  </div>
</div>

<div class="mb-3">
  <div class="flex items-center gap-4">
    <span class="font-mono text-sm" style="width: 130px">EN · cl100k</span>
    <svg width="470" height="30" viewBox="0 0 470 30"><path d="M3 5 Q 120 2, 468 6 L 466 24 Q 180 28, 4 25 Z" fill="#788C5D" stroke="#191919" stroke-width="2.5" stroke-linejoin="round"/></svg>
    <span class="note text-2xl">67 tokens</span>
  </div>
</div>

<div v-click="2">
  <div class="flex items-center gap-4">
    <span class="font-mono text-sm" style="width: 130px">PT · cl100k</span>
    <svg width="637" height="30" viewBox="0 0 637 30"><path d="M3 5 Q 160 2, 635 6 L 633 24 Q 250 28, 4 25 Z" fill="#CC785C" stroke="#191919" stroke-width="2.5" stroke-linejoin="round"/></svg>
    <span class="note text-2xl font-bold">91 (+36%)</span>
  </div>
</div>

<v-click at="3">

<div class="catch mt-6 text-3xl">Falar inglês com o modelo é um<br>desconto de <span class="hl">~20%</span> que ninguém usa.</div>

</v-click>

<div class="sources">
Sources: medido com gpt-tokenizer (o200k/cl100k) · <a href="https://arxiv.org/pdf/2308.11878" target="_blank">arxiv.org/2308.11878 (Cabrita)</a>
</div>

<!--
Tokenizers são treinados majoritariamente em inglês: palavras comuns viram 1 token;
português fragmenta mais (acentos, palavras longas).
Bônus que ninguém lembra: a RESPOSTA em português também custa mais — e output é ~5x o preço do input.
Honestidade: tokenizers novos encolhem o gap (o200k 18% vs cl100k 36%). Tendência é melhorar.
Cabrita (arXiv): tokenizer otimizado pra PT corta >35% dos tokens — prova o tamanho da penalidade.
-->

---
layout: center
class: text-center
---

<div class="kicker mb-6">parte 2 · skills</div>

<div class="catch text-5xl">Skills ♥️ <span class="hl sketch-under">Lazy Loading</span></div>

<div class="mx-auto mt-8" style="max-width: 860px">

<div class="grid items-center" style="grid-template-columns: 1fr 250px; gap: 0.8rem 1.4rem">

<v-click>

<div class="sketch-box olive font-mono text-sm" style="text-align: left">---<br>name: release-process<br>description: Processo de release interno.<br>&nbsp;&nbsp;Use quando a tarefa envolver deploy.<br>---</div>

</v-click>

<div v-click="1" class="note text-xl" style="text-align: left">✅ front matter<br><b>~100 tokens</b>, sempre no contexto</div>

<v-click>

<div class="sketch-box font-mono text-sm" style="text-align: left; border-style: dashed; opacity: 0.6">
# Release passo a passo<br>
1. Congela a branch...<br>
2. Roda o pipeline de...<br>
3. Valida o changelog...<br>
<span style="opacity: 0.7">... (+500 linhas de processo)</span>
</div>

</v-click>

<div v-click="2" class="note text-xl" style="text-align: left">💤 corpo<br><b>~2.000 tokens</b>, só entra se — e só se — precisar</div>

</div>

</div>

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

<div class="mt-4 grid grid-cols-2 gap-8">

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

<div class="catch mt-6 text-3xl">Parabéns. Você reinventou o bloat. 👏</div>

</v-click>

<v-click at="4">

<div class="sketch-box security mt-4 mx-auto" style="max-width: 880px">
  <div class="note text-xl mb-1">☠️ Prêmio extra: superfície de ataque</div>
  <div class="text-base">Skill é <b>instrução que seu agent obedece</b> — com as <b>suas</b> permissões. Skill aleatória da internet pode trazer prompt injection, exfiltrar código e secrets, ou rodar comandos maliciosos. É supply chain attack, versão "em linguagem natural".</div>
</div>

</v-click>

<!--
Skills não são mágica, são lazy loading. Lazy loading de 1000 coisas ainda é 1000 coisas.
Curadoria > acumulação. Instale o que o SEU fluxo usa.
Segurança: skill de repo aleatório = você instalando um prompt que o agent VAI seguir,
com acesso ao seu código, suas envs, seu bash. npm package malicioso precisa explorar
o runtime; skill maliciosa só precisa PEDIR. Trate skill de terceiro como dependência:
leia antes de instalar, prefira fonte confiável.
-->

---
layout: center
---

<div class="kicker text-center mb-8">parte 2 · a regra</div>

<div class="grid grid-cols-2 gap-8">
  <div class="sketch-box olive text-center">
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
  pay()// 💸
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
    <text x="80" y="187" text-anchor="middle" style="font-family: Caveat; font-size: 26px; fill: #191919">você 👨🏽‍💻</text>
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

<div class="kicker mb-4">parte 3 · capacidade ≠ viabilidade</div>

## O prompt dos sonhos

<div class="mx-auto mt-6" style="max-width: 760px">
  <div style="background: #191919; border: 2.5px solid #191919; border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; padding: 1.2rem 1.6rem">
    <div class="font-mono text-base" style="color: #F5F4EF">
      <span style="color: #788C5D">$</span> agent run<br>
      <span style="color: #D4A27F">></span> Reescreva o kernel do Linux em Rust.<br>
      <span style="color: #D4A27F">></span> Não cometa erros!.<span style="color: #CC785C">▌</span>
    </div>
  </div>
</div>

<v-click>

<div class="note text-2xl text-center mt-6">30 dias de loop depois... 🔄💸</div>

</v-click>

<v-click>

<div class="flex items-center justify-center gap-10 mt-4">
  <svg width="260" height="170" viewBox="0 0 280 180">
    <!-- ground -->
    <path d="M6 168 Q 80 163, 150 168 T 274 167" fill="none" stroke="#191919" stroke-width="2.5"/>
    <!-- chimney -->
    <rect x="132" y="34" width="15" height="30" fill="#EFEDE6" stroke="#191919" stroke-width="2.5"/>
    <!-- roof (gable, slightly wobbly) -->
    <path d="M20 88 Q 60 54 100 26 Q 142 54 182 86 L168 90 L34 90 Z" fill="#D4A27F" stroke="#191919" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- house body -->
    <path d="M33 167 L34 89 L167 88 L169 167 Z" fill="#EFEDE6" stroke="#191919" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- door -->
    <path d="M88 167 L89 125 Q 101 121 114 125 L115 167 Z" fill="#CC785C" stroke="#191919" stroke-width="2.2"/>
    <circle cx="109" cy="147" r="2" fill="#191919"/>
    <!-- windows -->
    <rect x="46" y="104" width="26" height="22" rx="2" fill="#F5F4EF" stroke="#191919" stroke-width="2.2"/>
    <line x1="59" y1="105" x2="59" y2="125" stroke="#191919" stroke-width="1.5"/>
    <rect x="128" y="104" width="26" height="22" rx="2" fill="#F5F4EF" stroke="#191919" stroke-width="2.2"/>
    <line x1="141" y1="105" x2="141" y2="125" stroke="#191919" stroke-width="1.5"/>
    <!-- for sale sign -->
    <line x1="228" y1="167" x2="228" y2="112" stroke="#191919" stroke-width="3"/>
    <rect x="190" y="84" width="78" height="30" rx="4" fill="#f8e9e7" stroke="#BF4D43" stroke-width="2.5" transform="rotate(-4 229 99)"/>
    <text x="229" y="106" text-anchor="middle" style="font-family: Caveat; font-size: 19px; fill: #BF4D43" transform="rotate(-4 229 99)">VENDE-SE</text>
  </svg>
  <div class="catch text-3xl text-left">Funcionar? Pode.<br>Mas quem paga os tokens<br>é a <span class="hl">escritura da casa</span>.</div>
</div>

</v-click>

<!--
O ponto: a pergunta errada é "o agent CONSEGUE?". Em cenário controlado, com budget
infinito, agents fazem coisas absurdas (e os papers/demos adoram mostrar isso).
A pergunta certa é "a fatura fecha?". Capability não é a restrição — a invoice é.
Se alguém citar runs longos: Simon Last (Notion) rodou agents por 13 dias seguidos — com
rollback automático, test gates, tasks atômicas e checkpointing obsessivo via git.
Funciona porque é um SISTEMA de engenharia em volta de um "trabalhador não confiável".
(sitepoint.com/run-ai-coding-agents-continuously-days-without-losing-plot)
Gancho pro próximo slide: e mesmo quando funciona E cabe no bolso... → comprehension debt.
-->

---

<div class="kicker mb-4">parte 3 · o custo que não aparece na fatura</div>

## Comprehension Debt

<div class="mt-8 grid grid-cols-3 gap-8">

<div v-click="1">
  <div class="stat">5–7×</div>
  <div class="stat-label">mais rápido: a IA gera código numa velocidade que nenhum humano absorve</div>
</div>

<div v-click="2">
  <div class="stat">−17%</div>
  <div class="stat-label">compreensão do próprio código (52 engenheiros, mesma velocidade de entrega — pior em <b>debugging</b>)</div>
</div>

<div v-click="3">
  <div class="stat">4×</div>
  <div class="stat-label">custo de manutenção no 2º ano quando o débito não é gerenciado</div>
</div>

</div>

<v-click at="4">

<div class="catch mt-10 text-3xl">O código existe. O entendimento, não.<br><span class="hl">Quem entendia era o modelo — e ele esqueceu<br>quando a sessão fechou.</span></div>

</v-click>

<div class="sources">
Sources: <a href="https://addyosmani.com/blog/comprehension-debt/" target="_blank">addyosmani.com</a> · <a href="https://www.oreilly.com/radar/comprehension-debt-the-hidden-cost-of-ai-generated-code/" target="_blank">oreilly.com/radar</a> · <a href="https://arxiv.org/pdf/2512.08942" target="_blank">arxiv.org/2512.08942</a>
</div>

<!--
Conceito (Addy Osmani): comprehension debt = o gap entre o código que existe no sistema
e o que algum humano de fato entende.
Escrever código É entender código: edge cases, micro-decisões de arquitetura, modelo mental.
Com IA esse loop colapsa: descreve → gera → testes passam → ship.
Diferente de technical debt, não faz atrito — cria FALSA CONFIANÇA. Aparece 6-18 meses
depois, quando ninguém consegue modificar, debugar ou assumir o código.
Fechamento amarra com o stateless do início: o único que "entendia" era o modelo,
e o modelo não lembra de nada. A sessão fechou, o entendimento foi junto.
Gancho: e quando além de tudo ninguém tá olhando? → Replit.
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

<div class="catch mt-8 text-3xl">O agent não só errou. <span class="hl">Ele mentiu na daily</span>.</div>

</v-click>

<div class="sources">
Sources: <a href="https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/" target="_blank">fortune.com</a> · <a href="https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/" target="_blank">theregister.com</a> · <a href="https://incidentdatabase.ai/cite/1152/" target="_blank">incidentdatabase.ai/cite/1152</a>
</div>

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

<div class="sources">
Sources: <a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/mystery-company-accidentally-blew-usd500-million-on-claude-in-a-single-month-failed-to-put-usage-limit-on-licenses-for-employees" target="_blank">tomshardware.com ($500M)</a> · <a href="https://leanopstech.com/blog/agentic-ai-cost-runaway-token-budget-2026/" target="_blank">leanopstech.com ($4.200)</a> · <a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-costs-begin-to-bite-as-agents-may-increase-token-demand-by-24-times-says-goldman-sachs-report-uber-and-microsoft-among-companies-feeling-the-bite-of-tokenized-billing" target="_blank">tomshardware.com (Uber, 24×)</a> · <a href="https://techcrunch.com/2026/06/05/the-token-bill-comes-due-inside-the-industry-scramble-to-manage-ais-runaway-costs/" target="_blank">techcrunch.com</a>
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

<div class="sources">
Sources: <a href="https://www.theregister.com/2026/03/24/ai_models_persona_prompting/" target="_blank">theregister.com (CMU)</a> · <a href="https://www.techradar.com/pro/stop-telling-ai-its-an-expert-programmer-youre-making-it-worse-at-its-job-new-research-shows-the-best-results-need-specific-prompts" target="_blank">techradar.com (Wharton)</a> · <a href="https://arxiv.org/abs/2311.10054" target="_blank">arxiv.org/abs/2311.10054</a>
</div>

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


