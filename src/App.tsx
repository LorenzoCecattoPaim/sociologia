import { ReactNode, useEffect, useState } from 'react'
import { timeline, principles, thinkers, cenarios, criticas, fluxo, ramos } from './data/content'
import { Simulator, Labor, Quiz } from './components/Interactive'

function Timeline() {
  const [s, setS] = useState(timeline[0])
  return <div><div className="tl" role="group" aria-label="Linha do tempo">{timeline.map(t =>
    <button key={t.id} aria-pressed={s.id === t.id} onClick={() => setS(t)}><strong>{t.when}</strong><br />{t.title}</button>)}</div>
    <div className="panel"><h3>{s.title} <span className="mut">({s.when})</span></h3>
      <p><b>Contexto:</b> {s.ctx}</p><p><b>Explicação:</b> {s.exp}</p><p><b>Relação com o liberalismo:</b> {s.rel}</p></div></div>
}
function Principles() {
  const [o, setO] = useState<number | null>(null)
  return <div className="grid">{principles.map((p, i) => <div key={p.t} className="panel">
    <h3>{p.t}</h3><button className="chip" aria-expanded={o === i} onClick={() => setO(o === i ? null : i)}>{o === i ? 'Recolher' : 'Expandir'}</button>
    {o === i && <><p>{p.e}</p><p><b>Exemplo:</b> {p.ex}</p><p><b>Pensador:</b> {p.p}</p><p><em>{p.q}</em></p></>}</div>)}</div>
}
function State() {
  const [c, setC] = useState(0), [o, setO] = useState<number | null>(null)
  const x = cenarios[c]
  return <div><p>O liberalismo clássico não equivale automaticamente à ausência de Estado: proteção contra violência, justiça, direitos, contratos e ordem jurídica estável são funções defendidas por diversas tradições liberais, com extensões diferentes.</p>
    {cenarios.map((_, i) => <button key={i} className="chip" aria-pressed={c === i} onClick={() => { setC(i); setO(null) }}>Situação {i + 1}</button>)}
    <div className="panel"><h3>{x.s}</h3>{x.o.map((a, k) => <button key={k} className="chip" aria-pressed={o === k} onClick={() => setO(k)}>{a[0]}</button>)}
      {o !== null && <p role="status">{x.o[o][1]} Perspectivas liberais divergem; não há resposta única.</p>}</div></div>
}
function Thinkers() {
  const [k, setK] = useState(0), t = thinkers[k]
  return <div><p className="mut">Perguntas-síntese didáticas, não citações literais.</p>
    {thinkers.map((x, i) => <button key={x.n} className="chip" aria-pressed={k === i} onClick={() => setK(i)}>{x.n}: {x.q}</button>)}
    <div className="panel"><h3>{t.n} <span className="mut">{t.v}</span></h3><p><em>{t.h}</em></p><p><b>Obras:</b> {t.obra}</p>
      <ul>{t.ideas.map(i => <li key={i}>{i}</li>)}</ul><p>{t.c}</p></div></div>
}
function Infographic() {
  const all = [...fluxo, ...ramos], [s, setS] = useState(0)
  return <div><p className="mut">Síntese de mecanismos associados a diferentes tradições liberais, não uma lei inevitável.</p>
    <ol style={{ listStyle: 'none', padding: 0 }}>{fluxo.map((f, i) => <li key={f[0]}>
      <button className="chip" aria-pressed={s === i} onClick={() => setS(i)}>{f[0]}</button>{i < fluxo.length - 1 && <span aria-hidden> ↓</span>}</li>)}</ol>
    <div>{ramos.map((r, i) => <button key={r[0]} className="chip" aria-pressed={s === fluxo.length + i} onClick={() => setS(fluxo.length + i)}>{r[0]}</button>)}</div>
    <div className="panel" role="status"><h3>{all[s][0]}</h3><p>{all[s][1]}</p></div></div>
}
function Criticism() {
  return <div className="grid">{criticas.map(c => <details key={c.t} className="panel"><summary><strong>{c.t}</strong></summary>
    <p><b>Problema:</b> {c.p}</p><p><b>Por que importa:</b> {c.w}</p><p><b>Perspectivas liberais:</b> {c.l}</p><p><b>Crítica alternativa:</b> {c.c}</p><p><em>{c.q}</em></p></details>)}</div>
}
const refs = ['Locke, John — Dois Tratados sobre o Governo (obra primária)','Smith, Adam — A Riqueza das Nações (obra primária)','Hayek, Friedrich A. — O Caminho da Servidão (obra primária)','Hayek, Friedrich A. — The Use of Knowledge in Society (obra primária)','Friedman, Milton — Capitalismo e Liberdade (obra primária)','Friedman, Milton; Schwartz, Anna J. — A Monetary History of the United States (obra primária)','Fontes secundárias: Stanford Encyclopedia of Philosophy; Encyclopaedia Britannica; Library of Economics and Liberty.']

const secs: { id: string; nav: string; title: string; body: () => ReactNode }[] = [
 { id: 'contexto', nav: 'Contexto histórico', title: 'Como surgiu o liberalismo clássico?', body: () => <Timeline /> },
 { id: 'principios', nav: 'Princípios fundamentais', title: 'Princípios fundamentais', body: () => <><p>Existem diferentes tradições liberais, e nem todos os autores defendem as mesmas funções para o Estado.</p><Principles /></> },
 { id: 'mercado', nav: 'O mercado', title: 'Como o mercado coordena a economia?', body: () => <><p>Uma cidade tem consumidores e padeiros. Mexa nos controles e veja o equilíbrio mudar.</p><Simulator /></> },
 { id: 'trabalho', nav: 'Divisão do trabalho', title: 'Como a divisão do trabalho pode gerar riqueza?', body: () => <><p>Em A Riqueza das Nações (1776), Smith descreve a fabricação de alfinetes: especialização, economia de tempo e aperfeiçoamento de ferramentas.</p><Labor /></> },
 { id: 'estado', nav: 'O papel do Estado', title: 'Estado mínimo ou ausência de Estado?', body: () => <State /> },
 { id: 'pensadores', nav: 'Grandes pensadores', title: 'Grandes pensadores', body: () => <Thinkers /> },
 { id: 'infografico', nav: 'Infográfico', title: 'Como uma economia de mercado pode gerar riqueza?', body: () => <Infographic /> },
 { id: 'criticas', nav: 'Críticas e limites', title: 'As ideias liberais também são questionadas', body: () => <Criticism /> },
 { id: 'quiz', nav: 'Quiz', title: 'Teste seus conhecimentos', body: () => <Quiz /> },
 { id: 'conclusao', nav: 'Conclusão', title: 'Afinal, quem deve decidir os rumos da economia?', body: () => <>
   <p>O liberalismo clássico contribuiu para consolidar ideias de liberdade individual, propriedade, limitação do poder político e importância das trocas econômicas. Em Adam Smith, a divisão do trabalho e os mercados ajudam a compreender como a produtividade e a riqueza podem crescer. Entretanto, a análise econômica também exige considerar as instituições, o poder de mercado, as condições sociais e os limites de cada modelo.</p>
   <ol><li>O mercado consegue resolver todos os problemas econômicos?</li><li>Como equilibrar liberdade econômica e proteção dos direitos?</li><li>Qual deve ser o papel do Estado em uma sociedade livre?</li></ol>
   <h3>Compreender a economia é também compreender as escolhas de uma sociedade.</h3>
   <a className="btn" href="#inicio">Voltar ao início</a></> },
 { id: 'referencias', nav: 'Referências', title: 'Referências', body: () => <ul>{refs.map(r => <li key={r}>{r}</li>)}</ul> },
]
const pieces = [['Indivíduo', 'Liberdade de escolha e iniciativa.'], ['Mercado', 'Trocas, preços, concorrência e cooperação.'], ['Estado', 'Leis, direitos, instituições e limites do poder.']]

export default function App() {
  const [cur, setCur] = useState('inicio'), [prog, setProg] = useState(0), [pres, setPres] = useState<number | null>(null), [pc, setPc] = useState(0)
  useEffect(() => {
    const on = () => { setProg(scrollY / Math.max(1, document.body.scrollHeight - innerHeight) * 100)
      const ids = ['inicio', ...secs.map(s => s.id)]; let c = ids[0]
      ids.forEach(id => { const e = document.getElementById(id); if (e && e.getBoundingClientRect().top < 120) c = id }); setCur(c) }
    addEventListener('scroll', on); on(); return () => removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    if (pres === null) return
    const k = (e: KeyboardEvent) => { if (e.key === 'ArrowRight') setPres(p => Math.min(secs.length - 1, (p ?? 0) + 1)); if (e.key === 'ArrowLeft') setPres(p => Math.max(0, (p ?? 0) - 1)); if (e.key === 'Escape') setPres(null) }
    addEventListener('keydown', k); return () => removeEventListener('keydown', k)
  }, [pres])
  const s = pres !== null ? secs[pres] : null
  return <>
    <nav aria-label="Menu principal"><ul><li><a href="#inicio" className={cur === 'inicio' ? 'on' : ''}>Início</a></li>
      {secs.map(x => <li key={x.id}><a href={'#' + x.id} className={cur === x.id ? 'on' : ''} aria-current={cur === x.id ? 'true' : undefined}>{x.nav}</a></li>)}
      <li><button className="chip" onClick={() => setPres(0)}>Modo apresentação</button></li></ul><div className="bar" style={{ width: prog + '%' }} role="progressbar" aria-label="Progresso" aria-valuenow={Math.round(prog)} /></nav>
    <main>
      <section id="inicio" className="hero"><p className="mut">Das ideias iluministas à economia de mercado.</p>
        <h1>Quem deve decidir os rumos da economia?</h1><h2 style={{ fontSize: '1.3rem', color: 'var(--fg)' }}>Uma viagem pelas ideias que transformaram a liberdade, a política e as relações econômicas.</h2>
        <p>O liberalismo clássico contribuiu para transformar a maneira de compreender a liberdade individual, a propriedade, os limites do poder político e o funcionamento das relações econômicas. Suas ideias ajudaram a moldar o mundo moderno e continuam presentes nos debates sobre riqueza, desigualdade e liberdade.</p>
        <div className="trio">{pieces.map((p, i) => <button key={p[0]} className="panel" aria-pressed={pc === i + 1} onClick={() => setPc(pc === i + 1 ? 0 : i + 1)}><h3>{p[0]}</h3>{pc === i + 1 && <p>{p[1]}</p>}</button>)}</div>
        <p><a className="btn" href="#contexto" style={{ textDecoration: 'none', display: 'inline-block' }}>Iniciar a experiência</a></p></section>
      {secs.map(x => <section key={x.id} id={x.id}><div className="in"><h2>{x.title}</h2>{x.body()}</div></section>)}
    </main>
    <footer style={{ padding: '2rem', textAlign: 'center' }} className="mut">Projeto educacional. Ilustrações em SVG originais; sem imagens externas.</footer>
    {s && <div className="pres" role="dialog" aria-label="Modo de apresentação"><section><h2>{s.title}</h2>{s.body()}</section>
      <div className="ctl"><button className="btn ghost" onClick={() => setPres(Math.max(0, pres! - 1))}>Voltar</button><span style={{ alignSelf: 'center' }}>{pres! + 1}/{secs.length}</span>
        <button className="btn" onClick={() => setPres(Math.min(secs.length - 1, pres! + 1))}>Avançar</button><button className="btn ghost" onClick={() => setPres(null)}>Sair</button></div></div>}
  </>
}
