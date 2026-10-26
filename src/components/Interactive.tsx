import { useState } from 'react'
import { INICIAL, PMAX, QMAX, Params, demanda, oferta, equilibrio, producao } from '../lib/economics'
import { quiz } from '../data/content'

export function Simulator() {
  const [p, setP] = useState<Params>(INICIAL)
  const eq = equilibrio(p), eq0 = equilibrio(INICIAL)!
  const X = (q: number) => 40 + (q / QMAX) * 440, Y = (v: number) => 220 - (v / PMAX) * 200
  const line = (f: (P: number) => number) => `${X(f(0))},${Y(0)} ${X(f(PMAX))},${Y(PMAX)}`
  const labels: [keyof Params, string][] = [['consumidores','Consumidores'],['produtores','Produtores'],['trigo','Disponibilidade de trigo'],['custo','Custos de produção']]
  const dP = eq ? eq.P - eq0.P : 0, dQ = eq ? eq.Q - eq0.Q : 0
  return <div className="grid">
    <div>{labels.map(([k, l]) => <label key={k}>{l}: {p[k]}
      <input type="range" min={0} max={100} value={p[k]} onChange={e => setP({ ...p, [k]: +e.target.value })} /></label>)}
      <button className="btn ghost" onClick={() => setP(INICIAL)}>Restaurar cenário inicial</button></div>
    <div>
      <svg viewBox="0 0 500 250" role="img" aria-labelledby="gt gd" width="100%">
        <title id="gt">Gráfico de oferta e demanda do pão</title>
        <desc id="gd">Eixo vertical: preço; eixo horizontal: quantidade. A demanda desce, a oferta sobe.</desc>
        <line x1="40" y1="220" x2="480" y2="220" stroke="#AAB3C2"/><line x1="40" y1="20" x2="40" y2="220" stroke="#AAB3C2"/>
        <text x="440" y="240">Quantidade</text><text x="2" y="14">Preço</text>
        <polyline points={line(P => demanda(p, P))} fill="none" stroke="#6FC3C0" strokeWidth="2" /><text x="45" y="35">Demanda</text>
        <polyline points={line(P => oferta(p, P))} fill="none" stroke="#D4AF65" strokeWidth="2" /><text x="420" y="35">Oferta</text>
        {eq && <circle cx={X(eq.Q)} cy={Y(eq.P)} r="6" fill="#F5F5F0" />}
      </svg>
      {eq ? <p><span className="stat">R$ {eq.P.toFixed(2)}</span> · <span className="stat">{eq.Q.toFixed(0)} pães</span><br />
        Em relação ao início: preço {dP >= 0 ? '+' : ''}{dP.toFixed(2)}, quantidade {dQ >= 0 ? '+' : ''}{dQ.toFixed(0)}. {expl(dP, dQ)}</p>
        : <p role="alert">Nesses valores as curvas não se cruzam dentro do intervalo do gráfico, então não há equilíbrio válido para mostrar. Ajuste os controles.</p>}
      <p className="mut">Modelo didático com curvas lineares; a economia real é muito mais complexa.</p>
    </div></div>
}
const expl = (dP: number, dQ: number) => Math.abs(dP) < .01 && Math.abs(dQ) < 1 ? 'Cenário igual ao inicial.'
  : dP > 0 && dQ > 0 ? 'Demanda cresceu mais que a oferta: preço e quantidade sobem.'
  : dP > 0 ? 'A oferta diminuiu: o pão fica mais caro e menos é vendido.'
  : dQ > 0 ? 'A oferta aumentou: o pão fica mais barato e mais é vendido.' : 'A demanda diminuiu: preço e quantidade caem.'

export function Labor() {
  const [esp, setEsp] = useState(false)
  const a = producao(false), b = producao(true), c = esp ? b : a
  const etapas = ['Preparação', 'Corte', 'Montagem', 'Acabamento', 'Embalagem']
  const diff = ((b.unidades - a.unidades) / a.unidades) * 100
  return <div>
    <div role="group" aria-label="Cenário">
      <button className="chip" aria-pressed={!esp} onClick={() => setEsp(false)}>A — sem especialização</button>
      <button className="chip" aria-pressed={esp} onClick={() => setEsp(true)}>B — especializada</button></div>
    <svg viewBox="0 0 600 70" width="100%" role="img" aria-label="Estações de trabalho conectadas por setas">
      {etapas.map((e, i) => <g key={e}><rect x={8 + i * 118} y="15" width="100" height="40" rx="4" fill="none" stroke="#D4AF65" />
        <text x={58 + i * 118} y="40" textAnchor="middle">{e}</text>{i < 4 && <text x={110 + i * 118} y="40" style={{ fill: '#D4AF65' }}>→</text>}</g>)}
      <circle className="dot" cx={20} cy={65} r={4} fill="#6FC3C0" />
    </svg>
    <p>{esp ? '5 trabalhadores, uma etapa cada.' : '1 trabalhador faz as 5 etapas.'}</p>
    <p><span className="stat">{c.unidades}</span> unidades em 8 h · {c.minPorUnidade} min por unidade · <span className="stat">{c.porTrabalhador}</span> por trabalhador</p>
    <p>Diferença total B vs. A: <strong>+{diff.toFixed(0)}%</strong>. Números hipotéticos, não são dados históricos.</p>
    <p className="mut">Limites: trabalho repetitivo, dependência entre etapas, necessidade de coordenação e ganhos que podem ser mal distribuídos.</p>
    <p><em>A especialização pode aumentar a produtividade, mas produzir mais não significa, automaticamente, distribuir melhor a riqueza.</em></p></div>
}

export function Quiz() {
  const [i, setI] = useState(0), [sel, setSel] = useState<number | null>(null), [pts, setPts] = useState(0)
  if (i >= quiz.length) return <div><p className="stat">{pts} / {quiz.length} acertos</p>
    <button className="btn" onClick={() => { setI(0); setSel(null); setPts(0) }}>Refazer o quiz</button></div>
  const q = quiz[i]
  return <div><progress max={quiz.length} value={i} aria-label="Progresso do quiz" /> <span>Questão {i + 1} de {quiz.length} · acertos: {pts}</span>
    <h3>{q.q}</h3>
    {q.o.map((o, k) => <button key={k} className="chip" style={{ display: 'block', width: '100%', textAlign: 'left' }} disabled={sel !== null}
      aria-pressed={sel === k} onClick={() => { setSel(k); if (k === q.a) setPts(pts + 1) }}>{o}</button>)}
    {sel !== null && <><p role="status"><strong>{sel === q.a ? 'Correto.' : 'Incorreto.'}</strong> {q.e}</p>
      <button className="btn" onClick={() => { setI(i + 1); setSel(null) }}>{i + 1 < quiz.length ? 'Próxima' : 'Ver resultado'}</button></>}</div>
}
