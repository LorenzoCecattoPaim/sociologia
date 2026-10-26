export const timeline = [
 {id:'t1',when:'Século XVII',title:'Transformações políticas',ctx:'Guerras religiosas e disputas entre reis e parlamentos na Inglaterra.',exp:'Debates sobre direitos individuais, tolerância religiosa, propriedade e limites do poder dos governantes. John Locke é um dos principais pensadores desse período.',rel:'Prepara a ideia de que o poder político tem limites.'},
 {id:'t2',when:'1689',title:'Dois Tratados sobre o Governo',ctx:'Publicado em 1689 (após a Revolução Gloriosa), com ideias elaboradas antes.',exp:'Locke defende direitos naturais, consentimento dos governados e limitação do poder político.',rel:'Base do liberalismo político e do constitucionalismo.'},
 {id:'t3',when:'Século XVIII',title:'Iluminismo',ctx:'Valorização da razão e crítica ao absolutismo.',exp:'Diferentes correntes iluministas contribuíram com novas concepções políticas e sociais; nem todas eram liberais.',rel:'Ambiente intelectual em que o liberalismo se difunde.'},
 {id:'t4',when:'1776',title:'A Riqueza das Nações',ctx:'Obra de Adam Smith, publicada em 1776.',exp:'Analisa divisão do trabalho, mercados e criação de riqueza, e critica restrições mercantilistas.',rel:'Marco da economia política clássica.'},
 {id:'t5',when:'Final do século XVIII',title:'Revoluções políticas',ctx:'Independência dos EUA e Revolução Francesa, entre outras.',exp:'Ideias de liberdade, direitos e limitação do poder circularam nesses processos, que tiveram também outras causas e orientações. Nem todas foram exclusivamente liberais.',rel:'Ideias liberais ganham expressão em constituições e declarações de direitos.'},
 {id:'t6',when:'Séculos XVIII e XIX',title:'Revolução Industrial',ctx:'Fábricas, máquinas e crescimento das cidades.',exp:'Expansão da produção, urbanização, especialização produtiva e novas relações de trabalho — com ganhos de produção e também condições duras para muitos trabalhadores.',rel:'Cenário em que debates sobre mercado e desigualdade se intensificam.'},
 {id:'t7',when:'Século XX',title:'Debates liberais contemporâneos',ctx:'Guerras, crises econômicas e disputa entre planejamento e mercado.',exp:'Friedrich Hayek e Milton Friedman debatem planejamento econômico, concorrência, liberdade econômica e política monetária.',rel:'Renovam e transformam o pensamento liberal.'},
]
export const principles = [
 {t:'Liberdade individual',e:'Cada pessoa tem direito de fazer escolhas sobre a própria vida, dentro de regras iguais para todos.',ex:'Escolher a profissão que quer seguir.',p:'Locke',q:'Até onde vai a liberdade de um sem prejudicar o outro?'},
 {t:'Propriedade privada',e:'Direito de possuir e usar bens, protegido por leis estáveis.',ex:'Ser dono da bicicleta que você comprou.',p:'Locke',q:'A propriedade deve ter limites?'},
 {t:'Livre iniciativa',e:'Liberdade para criar negócios e oferecer produtos e serviços.',ex:'Abrir uma padaria no bairro.',p:'Smith',q:'Que regras mínimas um negócio precisa seguir?'},
 {t:'Livre mercado',e:'Trocas voluntárias em que preços sinalizam escassez e desejos.',ex:'O preço do pão sobe quando falta trigo.',p:'Hayek',q:'Os preços captam tudo o que importa?'},
 {t:'Concorrência',e:'Vários vendedores disputam clientes, o que pode baixar preços e estimular melhorias.',ex:'Duas padarias na mesma rua.',p:'Smith',q:'O que acontece se a concorrência acaba?'},
 {t:'Limitação do poder estatal',e:'O Estado deve seguir leis e respeitar direitos. Os liberais divergem sobre o tamanho e as funções do Estado.',ex:'Ninguém pode ser preso sem lei e julgamento.',p:'Locke',q:'Quais funções o Estado deveria ter?'},
]
export const thinkers = [
 {n:'John Locke',v:'1632–1704',h:'Liberdade, direitos e limites do poder',obra:'Dois Tratados sobre o Governo',ideas:['Direitos naturais: vida, liberdade e propriedade','Governo baseado no consentimento','Limitação do poder político','Direito de resistência em certas circunstâncias'],c:'Fundamenta o liberalismo político e o constitucionalismo.',q:'Como limitar o poder político e proteger os direitos?'},
 {n:'Adam Smith',v:'1723–1790',h:'Divisão do trabalho e riqueza das nações',obra:'A Riqueza das Nações (1776)',ideas:['Especialização e produtividade','Mercados, trocas e concorrência','Crítica a restrições mercantilistas','Importância de instituições e justiça'],c:'Resumir Smith à ideia de que todo interesse individual sempre gera benefício coletivo é incorreto: ele também discutiu justiça, instituições e riscos de acordos entre comerciantes.',q:'Como a especialização e as trocas podem aumentar a riqueza?'},
 {n:'Friedrich Hayek',v:'1899–1992',h:'O conhecimento está espalhado pela sociedade',obra:'O Caminho da Servidão; The Use of Knowledge in Society',ideas:['Conhecimento disperso','Preços como sinais','Críticas ao planejamento centralizado','Regras gerais e instituições'],c:'Pensador liberal do século XX, central no debate sobre planejamento e mercado.',q:'Como coordenar decisões quando o conhecimento está disperso?'},
 {n:'Milton Friedman',v:'1912–2006',h:'Liberdade econômica e escolhas individuais',obra:'Capitalismo e Liberdade; A Monetary History of the United States (com Anna Schwartz)',ideas:['Liberdade econômica','Mercados competitivos','Teoria monetária e inflação','Críticas a certas intervenções do governo'],c:'Associado à Escola de Chicago; influente nos debates liberais do século XX.',q:'Quais são os efeitos das políticas econômicas sobre a liberdade e os mercados?'},
]
export const cenarios = [
 {s:'Empresas combinam preços para eliminar a concorrência.',o:[['Aplicar leis de defesa da concorrência','Muitos liberais aceitam, pois cartéis prejudicam a concorrência; o próprio Smith alertou para acordos entre comerciantes. Risco: autoridades mal desenhadas podem errar ou ser capturadas.'],['Não intervir','Alguns liberais confiam que novos entrantes quebrariam o cartel; outros veem isso como insuficiente quando há barreiras de entrada.']]},
 {s:'Uma fábrica polui um rio usado pela população.',o:[['Responsabilização legal e direitos de propriedade','Pode proteger quem é prejudicado, mas provar o dano e identificar culpados é difícil.'],['Tributo ou regra ambiental','Muitos economistas veem como forma de corrigir externalidades; críticos temem custos e má calibragem.']]},
 {s:'O governo quer controlar todos os preços.',o:[['Aceitar o controle total','Hayek argumentaria que preços carregam informação dispersa; sem eles, o planejamento tende a errar.'],['Limitar o controle a casos específicos','Debate: controles pontuais podem proteger consumidores, mas causar escassez ou filas.']]},
 {s:'Uma estrada é necessária, mas não há incentivo privado para pagá-la.',o:[['Financiamento público','Parte dos liberais aceita obras de infraestrutura; outros preferem concessões ou pedágios.'],['Concessão privada','Pode atrair investimento, mas exige contratos claros e pode gerar monopólio local.']]},
 {s:'Uma empresa tenta impedir a entrada de concorrentes.',o:[['Punir práticas anticompetitivas','Protege a concorrência, mas distinguir prática abusiva de competição dura é complexo.'],['Remover barreiras legais','Se a barreira vem de leis ou licenças, retirá-las pode abrir o mercado.']]},
]
export const criticas = [
 {t:'Desigualdade econômica',p:'Ganhos de riqueza podem se distribuir de forma desigual.',w:'Afeta oportunidades e coesão social.',l:'Alguns liberais enfatizam igualdade de regras e oportunidades; outros aceitam redistribuição mínima.',c:'Críticos argumentam que só regras iguais não bastam para corrigir diferenças de partida.',q:'Igualdade de regras basta?'},
 {t:'Monopólios e poder de mercado',p:'Poucas empresas podem controlar preços e impedir rivais.',w:'Reduz a concorrência que beneficia consumidores.',l:'Há liberais que defendem leis antitruste e outros que veem o Estado como fonte de monopólios.',c:'Críticos veem tendência à concentração em mercados sem regulação.',q:'Quem deve vigiar a concorrência?'},
 {t:'Externalidades',p:'Custos como poluição recaem sobre quem não participou da troca.',w:'Preços podem não refletir danos ambientais.',l:'Soluções discutidas: direitos de propriedade, tributos, regras ou negociação.',c:'Críticos ambientais apontam limites dessas soluções para bens coletivos.',q:'Como incluir o custo ambiental nos preços?'},
 {t:'Condições de trabalho e distribuição dos ganhos',p:'Produtividade maior nem sempre significa salários e condições melhores.',w:'Mostra que produzir mais não é distribuir melhor.',l:'Visões liberais divergem sobre sindicatos, salário mínimo e proteção trabalhista.',c:'Tradições críticas destacam o poder desigual de negociação entre empregador e trabalhador.',q:'Quem deve garantir condições dignas?'},
]
export const fluxo = [
 ['Liberdade de iniciativa','Pessoas podem criar, trabalhar e oferecer produtos.'],
 ['Produção e empreendedorismo','Negócios transformam ideias em bens e serviços.'],
 ['Divisão do trabalho','Etapas especializadas podem aumentar a eficiência.'],
 ['Possível aumento da produtividade','Produz-se mais com os mesmos recursos, em certas condições.'],
 ['Trocas e concorrência','Vendedores disputam clientes; trocas voluntárias distribuem bens.'],
 ['Circulação de bens e serviços','Mercados conectam quem produz e quem consome.'],
 ['Possível crescimento da riqueza','Maior oferta pode ampliar o bem-estar, sem garantia automática.'],
]
export const ramos = [
 ['Preços e informações','Sinalizam escassez e preferências (Hayek).'],
 ['Incentivos à inovação','Lucro e concorrência podem estimular novidades.'],
 ['Instituições e direitos','Leis e contratos dão segurança às trocas.'],
 ['Monopólios e cartéis','Podem bloquear a concorrência e prejudicar consumidores.'],
 ['Externalidades','Custos para terceiros, como poluição.'],
 ['Desigualdade e distribuição','Os ganhos podem se distribuir de modo desigual.'],
]
export const quiz = [
 {q:'(Fácil) Em que ano foi publicada A Riqueza das Nações?',o:['1689','1776','1848','1929'],a:1,e:'Adam Smith publicou a obra em 1776.'},
 {q:'(Fácil) Qual obra de Locke defende consentimento dos governados e limites do poder?',o:['Dois Tratados sobre o Governo','O Capital','Leviatã','O Príncipe'],a:0,e:'Publicada em 1689, é central para o liberalismo político.'},
 {q:'(Fácil) Qual exemplo Smith usou para explicar a divisão do trabalho?',o:['Fabricação de alfinetes','Produção de trigo','Construção naval','Tecelagem'],a:0,e:'Smith descreveu etapas especializadas na fabricação de alfinetes.'},
 {q:'(Intermediária) Quando a demanda por pão aumenta e a oferta não muda, tende a ocorrer:',o:['Queda do preço','Alta do preço de equilíbrio','Preço inalterado','Fim do mercado'],a:1,e:'A curva de demanda se desloca e o preço de equilíbrio sobe.'},
 {q:'(Intermediária) A concorrência pode beneficiar consumidores porque:',o:['Elimina todos os preços','Incentiva vendedores a melhorar qualidade e preços','Proíbe lucros','Garante igualdade de renda'],a:1,e:'Vendedores disputam clientes, mas a concorrência não resolve tudo.'},
 {q:'(Intermediária) O liberalismo clássico defende necessariamente ausência total de Estado?',o:['Sim','Não; há variação, e muitos aceitam funções como justiça e proteção de direitos','Apenas no século XX','Apenas Smith'],a:1,e:'As funções do Estado variam entre autores.'},
 {q:'(Intermediária) Para Hayek, preços funcionam como:',o:['Castigos','Sinais que transmitem informação dispersa','Decisões do governo','Impostos'],a:1,e:'Hayek enfatizou o conhecimento disperso e o papel dos preços.'},
 {q:'(Avançada) Milton Friedman é associado a qual escola?',o:['Escola de Chicago','Escola de Frankfurt','Escola Histórica Alemã','Escola Mercantilista'],a:0,e:'Friedman foi figura central da Escola de Chicago.'},
 {q:'(Avançada) Poluição de um rio por uma fábrica é exemplo de:',o:['Monopólio','Externalidade','Divisão do trabalho','Cartel'],a:1,e:'É um custo imposto a terceiros fora da transação.'},
 {q:'(Avançada) Por que aumentar a produtividade não garante melhor distribuição?',o:['Porque produtividade nunca aumenta','Porque ganhos podem se distribuir desigualmente, dependendo de instituições e poder de negociação','Porque preços são fixos','Porque o Estado produz tudo'],a:1,e:'Produzir mais não significa, automaticamente, distribuir melhor.'},
]

export const tipos=[
 ['Liberalismo clássico','Séculos XVII–XIX (Locke, Smith): direitos individuais, governo limitado por leis e trocas econômicas com menos restrições do que no mercantilismo e no absolutismo.'],
 ['Liberalismo político','Defesa de direitos, constituições, separação de poderes e consentimento dos governados. Pode existir sem defender liberdade econômica ampla.'],
 ['Liberalismo econômico','Defesa de propriedade, concorrência e trocas voluntárias. Varia muito quanto ao papel do Estado.'],
 ['Liberalismo contemporâneo','Nome usado em sentidos diferentes: nos EUA, "liberal" costuma designar quem aceita mais intervenção social do Estado; na Europa e no Brasil, tende a designar a defesa de mais liberdade de mercado.'],
 ['Neoliberalismo','Termo disputado. Refere-se a correntes do século XX que defendem mercados e concorrência (Hayek, Friedman) e, em uso crítico, às reformas de mercado a partir dos anos 1970-80. Não é sinônimo de liberalismo clássico.'],
]
export const sociologia=[
 ['Igualdade jurídica x igualdade de condições','O liberalismo ajudou a firmar que todos são iguais perante a lei, em oposição a sociedades de privilégios de nascimento. Mas igualdade formal não elimina diferenças de renda, escolaridade e herança. Para T. H. Marshall, a cidadania se ampliou em etapas (direitos civis, políticos e sociais); os direitos sociais surgiram em boa parte para enfrentar desigualdades que a igualdade formal deixava intactas.'],
 ['Liberdade individual e vida coletiva','A liberdade individual depende de instituições coletivas: tribunais, contratos, escolas e segurança. Pensar a sociedade como soma de indivíduos ou como estrutura que molda escolhas é uma tensão central da Sociologia.'],
 ['Propriedade, poder econômico e organização social','Para Locke, a propriedade é um direito que limita o poder do governante. Críticos, como Marx, argumentam que a propriedade dos meios de produção também gera poder de uma classe sobre outra. Os dois olhares ajudam a entender o tema.'],
 ['Mercado como instituição social','Karl Polanyi (A Grande Transformação, 1944) sustentou que mercados dependem de normas, leis e Estado, e que a expansão do mercado gerou reações sociais de proteção. É uma interpretação de um autor, não consenso.'],
 ['Efeitos históricos e atuais','Ideias liberais influenciaram constituições, direitos civis e a economia moderna. Também conviveram com exclusões: a escravidão e a negação de direitos políticos às mulheres e aos pobres. Debates atuais sobre desigualdade, trabalho e regulação continuam essa discussão.'],
]
