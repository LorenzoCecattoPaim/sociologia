/**
 * Modelo didático linear (preço P em R$, quantidade Q em pães/dia).
 * Demanda: Qd = a − b·P, com a = 20 + 3·consumidores, b = 4
 * Oferta:  Qs = c + d·P, com c = 1,2·produtores + 0,8·trigo − 0,6·custo − 10
 *                         e d = 2 + 0,08·produtores
 * Equilíbrio (Qd = Qs): P* = (a − c)/(b + d);  Q* = a − b·P*
 * Todos os controles variam de 0 a 100 (50 = cenário inicial).
 */
export interface Params { consumidores: number; produtores: number; trigo: number; custo: number }
export const INICIAL: Params = { consumidores: 50, produtores: 50, trigo: 50, custo: 50 }
export const PMAX = 20
export const QMAX = 400

export function coef(p: Params) {
  return {
    a: 20 + 3 * p.consumidores, b: 4,
    c: 1.2 * p.produtores + 0.8 * p.trigo - 0.6 * p.custo - 10,
    d: 2 + 0.08 * p.produtores,
  }
}
export const demanda = (p: Params, P: number) => coef(p).a - coef(p).b * P
export const oferta = (p: Params, P: number) => coef(p).c + coef(p).d * P

export function equilibrio(p: Params): { P: number; Q: number } | null {
  const k = coef(p)
  const P = (k.a - k.c) / (k.b + k.d)
  const Q = k.a - k.b * P
  if (!isFinite(P) || P <= 0 || P > PMAX || Q <= 0 || Q > QMAX) return null
  return { P, Q }
}

/** Divisão do trabalho — números hipotéticos, não históricos. */
export function producao(especializado: boolean, horas = 8) {
  const trabalhadores = especializado ? 5 : 1
  // Sem especialização: 20 min por unidade (uma pessoa, 5 etapas).
  // Especializada: cada estação leva 3 min por unidade; a linha produz 1 unidade a cada 3 min.
  const minPorUnidade = especializado ? 3 : 20
  const unidades = Math.floor((horas * 60) / minPorUnidade)
  return { unidades, minPorUnidade, trabalhadores, porTrabalhador: unidades / trabalhadores }
}
