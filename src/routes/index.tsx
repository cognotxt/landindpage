import { createFileRoute } from "@tanstack/react-router";
import {
  FileText,
  ScanText,
  Image,
  Database,
  Bot,
  Zap,
  Layers,
  ShieldCheck,
  ArrowRight,
  Download,
  RotateCcw,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "cognotxt — Extração inteligente de documentos para LLMs" },
      {
        name: "description",
        content:
          "Extraia dados de PDFs, documentos digitalizados e imagens com alta confiabilidade. Dados prontos para Claude, ChatGPT, DeepSeek e Mistral. Processe milhares de documentos com visibilidade total de cada etapa.",
      },
      { property: "og:title", content: "cognotxt — Extração inteligente de documentos para LLMs" },
      {
        property: "og:description",
        content:
          "PDFs, digitalizados e imagens viram dados prontos para sua LLM preferida. Alta confiabilidade, escala de milhares de documentos e visibilidade de cada etapa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const llms = ["Claude", "ChatGPT", "DeepSeek", "Mistral", "Llama", "Gemini"];

const demoRows = [
  { file: "contrato001.pdf", upload: "100%", bar: 80, status: "Processando", state: "active" },
  { file: "contrato002.pdf", upload: "100%", bar: 100, status: "Baixar TXT", state: "done" },
  { file: "contrato003.pdf", upload: "64%", bar: 0, status: "Aguardando", state: "waiting" },
  { file: "contrato004.pdf", upload: "100%", bar: 30, status: "Processando", state: "active" },
  { file: "contrato005.pdf", upload: "ERRO", bar: 0, status: "Reenviar", state: "error" },
] as const;

function ProcessingDemo() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-ink text-primary-foreground shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <span className="font-display text-sm font-semibold">Processamento de documentos</span>
        <span className="font-mono text-xs text-white/60">João | Sair</span>
      </div>
      <div className="flex gap-3 px-5 py-4">
        <button className="rounded-lg bg-primary-foreground px-4 py-2 font-mono text-xs font-semibold text-ink">
          Selecionar PDFs
        </button>
        <button className="rounded-lg border border-white/20 px-4 py-2 font-mono text-xs text-white/80">
          Enviar arquivos
        </button>
      </div>
      <div className="px-5 pb-2">
        <div className="grid grid-cols-[1.4fr_0.7fr_1.4fr_1fr] gap-2 border-b border-white/10 pb-2 font-mono text-[10px] uppercase tracking-wider text-white/50">
          <span>Arquivo</span>
          <span>Upload</span>
          <span>Processamento</span>
          <span>Resultado</span>
        </div>
        {demoRows.map((row) => (
          <div
            key={row.file}
            className="grid grid-cols-[1.4fr_0.7fr_1.4fr_1fr] items-center gap-2 border-b border-white/5 py-2.5 font-mono text-xs"
          >
            <span className="truncate text-white/90">{row.file}</span>
            <span className={row.state === "error" ? "text-red-400" : "text-white/70"}>
              {row.upload}
            </span>
            <span className="flex items-center gap-1.5">
              {row.state === "waiting" ? (
                <span className="text-white/40">Aguardando</span>
              ) : row.state === "error" ? (
                <span className="text-white/30">—</span>
              ) : (
                <>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                    <span
                      className="block h-full rounded-full bg-signal transition-all"
                      style={{ width: `${row.bar}%` }}
                    />
                  </span>
                  <span className="w-8 text-white/70">{row.bar}%</span>
                </>
              )}
            </span>
            <span>
              {row.state === "done" && (
                <span className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-[10px] text-white">
                  <Download className="size-3" /> Baixar TXT
                </span>
              )}
              {row.state === "active" && (
                <span className="inline-flex items-center gap-1.5 text-[10px] text-signal">
                  <span className="size-1.5 rounded-full bg-signal animate-pulse-dot" />
                  Processando
                </span>
              )}
              {row.state === "waiting" && <span className="text-white/30">—</span>}
              {row.state === "error" && (
                <span className="inline-flex items-center gap-1 rounded-md border border-red-400/40 px-2 py-1 text-[10px] text-red-400">
                  <RotateCcw className="size-3" /> Reenviar
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-6 px-5 py-3 font-mono text-[11px] text-white/60">
        <span>5 arquivos</span>
        <span className="text-signal">3 processando</span>
        <span className="text-emerald-400">1 concluído</span>
      </div>
    </div>
  );
}

const features = [
  {
    icon: FileText,
    title: "PDFs nativos",
    desc: "Extração de texto, tabelas e estrutura de PDFs complexos com fidelidade total ao documento original.",
    span: "md:col-span-2",
  },
  {
    icon: ScanText,
    title: "Documentos digitalizados",
    desc: "OCR avançado para scans, mesmo com baixa qualidade, rotação ou ruído.",
    span: "",
  },
  {
    icon: Image,
    title: "Identificação de imagens",
    desc: "Reconhece e descreve imagens, gráficos e diagramas embutidos nos documentos.",
    span: "",
  },
  {
    icon: Database,
    title: "Rebuild de dados",
    desc: "Reconstrói a estrutura lógica do documento: seções, tabelas e relações viram dados organizados.",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "Alta confiabilidade",
    desc: "Taxas de acerto líderes de mercado, com validação em cada etapa do pipeline.",
    span: "",
  },
  {
    icon: Layers,
    title: "Escala massiva",
    desc: "Milhares e milhares de documentos processados em paralelo, sem fila travada.",
    span: "md:col-span-2",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-xl font-bold tracking-tight">
            cogno<span className="text-signal">txt</span>
          </span>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#recursos" className="transition-colors hover:text-foreground">Recursos</a>
            <a href="#demo" className="transition-colors hover:text-foreground">Demonstração</a>
            <a href="#llms" className="transition-colors hover:text-foreground">LLMs</a>
          </nav>
          <a
            href="#cta"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Começar agora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-muted-foreground">
            <Zap className="size-3.5 text-signal" />
            Extração inteligente de documentos
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Seus documentos, prontos para a sua{" "}
            <span className="text-signal">LLM preferida</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            O cognotxt extrai dados de PDFs, documentos digitalizados e imagens com alta
            confiabilidade — e entrega tudo estruturado para Claude, ChatGPT, DeepSeek ou Mistral.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Testar gratuitamente <ArrowRight className="size-4" />
            </a>
            <a
              href="#demo"
              className="rounded-lg border border-border bg-card px-6 py-3 font-semibold transition-colors hover:bg-secondary"
            >
              Ver demonstração
            </a>
          </div>
        </div>

        <div id="demo" className="mx-auto mt-16 max-w-4xl scroll-mt-24">
          <ProcessingDemo />
          <p className="mt-4 text-center font-mono text-xs text-muted-foreground">
            Visibilidade total: cada arquivo, cada etapa, em tempo real.
          </p>
        </div>
      </section>

      {/* LLM marquee */}
      <section id="llms" className="border-y border-border bg-secondary py-6">
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-12">
            {[...llms, ...llms].map((llm, i) => (
              <span
                key={i}
                className="flex items-center gap-2 font-display text-lg font-semibold text-muted-foreground"
              >
                <Bot className="size-5 text-signal" /> {llm}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bento features */}
      <section id="recursos" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Do papel ao prompt, sem fricção
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Um pipeline completo de extração, reconstrução e entrega de dados — com a confiabilidade
            que seus modelos de IA precisam.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg ${f.span}`}
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-signal/10">
                <f.icon className="size-5 text-foreground transition-colors group-hover:text-signal" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            { value: "99,4%", label: "taxa de confiabilidade na extração" },
            { value: "10.000+", label: "documentos processados por lote" },
            { value: "100%", label: "de visibilidade em cada etapa" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-ink p-6 text-primary-foreground"
            >
              <span className="font-display text-4xl font-bold text-signal">{s.value}</span>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold tracking-tight md:text-5xl">
            Transforme milhares de documentos em dados úteis hoje
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Envie seus primeiros PDFs e veja o cognotxt trabalhar, etapa por etapa.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Criar conta grátis <ArrowRight className="size-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <span className="font-display font-bold text-foreground">
            cogno<span className="text-signal">txt</span>
          </span>
          <span>© 2026 cognotxt — Extração inteligente de documentos</span>
        </div>
      </footer>
    </div>
  );
}
