/* Conteúdo do curso — Álgebra Linear Feita Corretamente (Axler, 3ª ed.)
   Cada seção mapeia um notebook do repositório. LaTeX via MathJax; código via highlight.js.
   String.raw preserva as barras invertidas do LaTeX. */
const R = String.raw;

const CONTENT = [
/* ============================ CAPÍTULO 1 ============================ */
{num:1,id:"cap01",title:"Vector Spaces",titlePt:"Espaços Vetoriais",pages:"1–26",dir:"cap01_vector_spaces",
 sections:[
 {code:"1A",id:"01A",nb:"01A_Rn_and_Cn.ipynb",title:"Rⁿ e Cⁿ",en:"Rⁿ and Cⁿ",pages:"2–10",
  tags:["Números complexos","Listas","Corpos"],
  body:R`<p>A álgebra linear estuda aplicações lineares em espaços vetoriais de dimensão finita — e teoremas melhores surgem quando trabalhamos também com números complexos. Por isso começamos por eles.</p>
  <h2>Números complexos</h2>
  <div class="callout def"><div class="lbl">Definição 1.1 — Números complexos</div>
  <p>Um <b>número complexo</b> é um par ordenado \((a,b)\), com \(a,b\in\mathbb{R}\), escrito \(a+bi\). O conjunto de todos eles é
  \[\mathbb{C}=\{a+bi : a,b\in\mathbb{R}\}.\]
  Adição e multiplicação em \(\mathbb{C}\):
  \[(a+bi)+(c+di)=(a+c)+(b+d)i,\]
  \[(a+bi)(c+di)=(ac-bd)+(ad+bc)i.\]</p></div>
  <p>Identificando \(a\) com \(a+0i\), temos \(\mathbb{R}\subseteq\mathbb{C}\); e escrevendo \(i=0+1i\) obtém-se \(i^2=-1\). Não é preciso decorar a fórmula do produto: basta usar \(i^2=-1\) e a aritmética usual.</p>
  <div class="callout thm"><div class="lbl">1.3 — Propriedades da aritmética complexa</div>
  <p>Para todos \(\alpha,\beta,\lambda\in\mathbb{C}\): comutatividade \(\alpha+\beta=\beta+\alpha\), \(\alpha\beta=\beta\alpha\); associatividade da soma e do produto; identidades \(\lambda+0=\lambda\), \(\lambda 1=\lambda\); inverso aditivo \(-\alpha\) e, se \(\alpha\ne0\), inverso multiplicativo \(1/\alpha\); e distributividade \(\lambda(\alpha+\beta)=\lambda\alpha+\lambda\beta\).</p></div>
  <h2>Corpos: \(\mathbb{R}\) ou \(\mathbb{C}\)</h2>
  <div class="callout def"><div class="lbl">Notação 1.6 — \(\mathbb{F}\)</div>
  <p>Ao longo do curso \(\mathbb{F}\) denota \(\mathbb{R}\) ou \(\mathbb{C}\) (ambos são <b>corpos</b>). Elementos de \(\mathbb{F}\) chamam-se <b>escalares</b>. Provar um resultado para \(\mathbb{F}\) o garante tanto no caso real quanto no complexo.</p></div>
  <h2>Listas e \(\mathbb{F}^n\)</h2>
  <div class="callout def"><div class="lbl">Definição 1.8 — Lista</div>
  <p>Uma <b>lista</b> de comprimento \(n\) é \((x_1,\dots,x_n)\). Duas listas são iguais sse têm o mesmo comprimento e os mesmos elementos <b>na mesma ordem</b>. Ao contrário de conjuntos, em listas <b>a ordem importa e repetições contam</b>: \((3,5)\ne(5,3)\) e \((4,4)\ne(4,4,4)\).</p></div>
  <div class="callout def"><div class="lbl">Definição 1.10 — \(\mathbb{F}^n\)</div>
  <p>\(\mathbb{F}^n\) é o conjunto das listas de comprimento \(n\) com entradas em \(\mathbb{F}\):
  \[\mathbb{F}^n=\{(x_1,\dots,x_n): x_j\in\mathbb{F},\ j=1,\dots,n\}.\]
  \(x_j\) é a \(j\)-ésima <b>coordenada</b>. Assim \(\mathbb{R}^2\) é o plano e \(\mathbb{R}^3\) é o espaço usual.</p></div>
  <p>As operações são definidas coordenada a coordenada — adição (1.12), vetor nulo (1.14), inverso aditivo (1.16) e multiplicação por escalar (1.17):
  \[(x_1,\dots,x_n)+(y_1,\dots,y_n)=(x_1+y_1,\dots,x_n+y_n),\quad 0=(0,\dots,0),\]
  \[-x=(-x_1,\dots,-x_n),\qquad \lambda(x_1,\dots,x_n)=(\lambda x_1,\dots,\lambda x_n).\]</p>
  <div class="callout thm"><div class="lbl">1.13 — Comutatividade em \(\mathbb{F}^n\)</div>
  <p>Para todos \(x,y\in\mathbb{F}^n\): \(x+y=y+x\). A soma herda a comutatividade coordenada a coordenada de \(\mathbb{F}\).</p></div>
  <h2>Interpretação geométrica em \(\mathbb{R}^2\)</h2>
  <p>Um elemento \(x=(x_1,x_2)\) pode ser visto como <b>ponto</b> ou como uma <b>seta</b> (vetor) da origem até \((x_1,x_2)\). A soma segue a <b>regra do triângulo</b>: transladamos \(y\) para a ponta de \(x\); a seta da origem à ponta de \(y\) é \(x+y\). Multiplicar por \(\lambda\) estica/encolhe (e inverte o sentido se \(\lambda<0\)).</p>
  <p class="hint">Diagramas interativos — arraste os pontos e mova o slider.</p>
  <div class="jxg-wrap">
    <figure class="jfig"><div id="jxg-1Asum" class="jxg-board"></div>
      <figcaption>Soma \(x+y\): arraste \(x\) e \(y\) (regra do paralelogramo).</figcaption></figure>
    <figure class="jfig"><div id="jxg-1Ascal" class="jxg-board"></div>
      <figcaption>Escalar \(\lambda x\): mova o slider — \(\lambda<0\) inverte o sentido.</figcaption></figure>
  </div>`,
  py:R`import numpy as np

# Números complexos e F^n
z = 3 + 4j
print("conjugado:", z.conjugate(), "| módulo:", abs(z))   # (3-4j) | 5.0

# Vetores em R^n e C^n (listas de comprimento n)
x = np.array([1, 2, 3])
y = np.array([4, 5, 6])
print("soma coordenada a coordenada:", x + y)     # [5 7 9]
print("multiplicação por escalar:", 2 * x)        # [2 4 6]

# Comutatividade
print("x+y == y+x ?", np.array_equal(x + y, y + x))`,
  draw:function(JXG){
    const O=[0,0], opt={boundingbox:[-1,5,6,-1],axis:true,showNavigation:false,
      showCopyright:false,keepAspectRatio:true,pan:{enabled:false},zoom:{wheel:false}};
    // --- Soma de vetores ---
    const b=JXG.JSXGraph.initBoard("jxg-1Asum",opt);
    const P=b.create("point",[3,1],{name:"x",size:3,strokeColor:"#1e7a26",fillColor:"#2ea836",label:{fontSize:15}});
    const Q=b.create("point",[1,3],{name:"y",size:3,strokeColor:"#b06a00",fillColor:"#f0a020",label:{fontSize:15}});
    b.create("arrow",[O,P],{strokeColor:"#2ea836",strokeWidth:3,lastArrow:{size:6}});
    b.create("arrow",[O,Q],{strokeColor:"#f0a020",strokeWidth:3,lastArrow:{size:6}});
    const S=b.create("point",[()=>P.X()+Q.X(),()=>P.Y()+Q.Y()],
      {name:"x+y",size:2,strokeColor:"#a3121b",fillColor:"#d3202a",label:{fontSize:15}});
    b.create("arrow",[O,S],{strokeColor:"#d3202a",strokeWidth:3,lastArrow:{size:7}});
    b.create("segment",[P,S],{dash:2,strokeColor:"#f0a020",strokeWidth:1.3});
    b.create("segment",[Q,S],{dash:2,strokeColor:"#2ea836",strokeWidth:1.3});
    // --- Multiplicação por escalar ---
    const b2=JXG.JSXGraph.initBoard("jxg-1Ascal",{boundingbox:[-4,4,4,-4],axis:true,
      showNavigation:false,showCopyright:false,keepAspectRatio:true,pan:{enabled:false},zoom:{wheel:false}});
    const lam=b2.create("slider",[[-3,-3.3],[3,-3.3],[-2,1.8,2]],{name:"λ",snapWidth:0.1,
      fillColor:"#2ea836",strokeColor:"#1e7a26"});
    const v=b2.create("point",[1.6,1],{name:"x",size:3,strokeColor:"#1e7a26",fillColor:"#2ea836",label:{fontSize:15}});
    b2.create("arrow",[[0,0],v],{strokeColor:"#2ea836",strokeWidth:3,lastArrow:{size:6}});
    const lv=b2.create("point",[()=>lam.Value()*v.X(),()=>lam.Value()*v.Y()],
      {name:"λx",size:2,strokeColor:"#a3121b",fillColor:"#d3202a",label:{fontSize:15}});
    b2.create("arrow",[[0,0],lv],{strokeColor:"#d3202a",strokeWidth:3,lastArrow:{size:7}});
  }},
 {code:"1B",id:"01B",nb:"01B_definition_of_vector_space.ipynb",title:"Definição de espaço vetorial",en:"Definition of Vector Space",pages:"12–16",
  tags:["Axiomas","Vetor zero","Inverso aditivo"],
  body:R`<p>Um espaço vetorial abstrai as propriedades de \(\mathbb{F}^n\). A <b>adição</b> em um conjunto \(V\) associa a cada par \(u,v\in V\) um elemento \(u+v\in V\); a <b>multiplicação por escalar</b> associa a cada \(\lambda\in\mathbb{F}\) e \(v\in V\) um elemento \(\lambda v\in V\).</p>
  <div class="callout def"><div class="lbl">Definição 1.19 — Espaço vetorial</div>
  <p>\(V\) (com essa adição e multiplicação por escalar) é um <b>espaço vetorial sobre \(\mathbb{F}\)</b> se valem, para todos \(u,v,w\in V\) e \(a,b\in\mathbb{F}\):</p>
  <ul>
    <li><b>Comutatividade:</b> \(u+v=v+u\).</li>
    <li><b>Associatividade:</b> \((u+v)+w=u+(v+w)\) e \((ab)v=a(bv)\).</li>
    <li><b>Identidade aditiva:</b> existe \(0\in V\) com \(v+0=v\).</li>
    <li><b>Inverso aditivo:</b> para cada \(v\) existe \(w\in V\) com \(v+w=0\).</li>
    <li><b>Identidade multiplicativa:</b> \(1v=v\).</li>
    <li><b>Distributividade:</b> \(a(u+v)=au+av\) e \((a+b)v=av+bv\).</li>
  </ul></div>
  <p>Elementos de \(V\) chamam-se <b>vetores</b> ou <b>pontos</b> (1.20). Um espaço sobre \(\mathbb{R}\) é <b>real</b>; sobre \(\mathbb{C}\), <b>complexo</b> (1.21).</p>
  <div class="callout def"><div class="lbl">Exemplos</div>
  <p>Além de \(\mathbb{F}^n\): o espaço \(\mathbb{F}^\infty\) das <b>sequências</b> \((x_1,x_2,\dots)\) com \(x_j\in\mathbb{F}\) (1.22); e \(\mathbb{F}^S\), o espaço das <b>funções</b> \(f:S\to\mathbb{F}\), com \((f+g)(x)=f(x)+g(x)\) e \((\lambda f)(x)=\lambda f(x)\) (1.23). Note que \(\mathbb{F}^n\) e \(\mathbb{F}^\infty\) são casos particulares de \(\mathbb{F}^S\). Os elementos de um espaço vetorial podem ser listas, sequências ou funções.</p></div>
  <div class="callout thm"><div class="lbl">Propriedades básicas (1.25–1.31)</div>
  <p>O vetor nulo é <b>único</b> (1.25) e cada \(v\) tem <b>único</b> inverso aditivo \(-v\) (1.26). Além disso, usando a distributividade:
  \[0v=0\ (1.29),\qquad a0=0\ (1.30),\qquad (-1)v=-v\ (1.31).\]
  Aqui \(0\) à esquerda de \(0v\) é o escalar; nos demais, o vetor nulo.</p></div>`,
  py:R`import numpy as np

# Verificação numérica dos axiomas em R^3
u = np.array([1., 0., -2.]); v = np.array([3., 1., 4.]); w = np.array([0., 5., 1.])
a, b = 2.0, -3.0

assert np.allclose(u + v, v + u)                 # comutatividade
assert np.allclose((u + v) + w, u + (v + w))     # associatividade
assert np.allclose(1 * v, v)                     # identidade
assert np.allclose(a*(u+v), a*u + a*v)           # distributividade
assert np.allclose((a+b)*v, a*v + b*v)
assert np.allclose(0*v, np.zeros(3))             # 0v = 0
assert np.allclose((-1)*v, -v)                   # (-1)v = -v
print("Todos os axiomas verificados ✓")`},
 {code:"1C",id:"01C",nb:"01C_subspaces.ipynb",title:"Subespaços",en:"Subspaces",pages:"18–24",
  tags:["Subespaço","Soma de subespaços","Soma direta"],
  body:R`<p>Considerando subespaços, ampliamos muito nossos exemplos de espaços vetoriais.</p>
  <div class="callout def"><div class="lbl">Definição 1.32 — Subespaço</div>
  <p>\(U\subseteq V\) é um <b>subespaço</b> de \(V\) se \(U\) é ele mesmo um espaço vetorial com as operações de \(V\).</p></div>
  <div class="callout thm"><div class="lbl">1.34 — Condições para subespaço</div>
  <p>\(U\subseteq V\) é subespaço \(\iff\) satisfaz as três condições:</p>
  <ul>
    <li><b>Identidade aditiva:</b> \(0\in U\).</li>
    <li><b>Fechado sob soma:</b> \(u,w\in U \implies u+w\in U\).</li>
    <li><b>Fechado sob escalar:</b> \(a\in\mathbb{F},\,u\in U \implies au\in U\).</li>
  </ul></div>
  <p>Assim \(\{0\}\) é o menor subespaço e \(V\) o maior. Geometricamente, os subespaços de \(\mathbb{R}^2\) são exatamente \(\{0\}\), as <b>retas pela origem</b> e o próprio \(\mathbb{R}^2\); os de \(\mathbb{R}^3\) são \(\{0\}\), retas e <b>planos pela origem</b>, e \(\mathbb{R}^3\). (O conjunto vazio não é subespaço: falta o \(0\).)</p>
  <h2>Somas de subespaços</h2>
  <div class="callout def"><div class="lbl">Definição 1.36 — Soma</div>
  <p>Para subespaços \(U_1,\dots,U_m\),
  \[U_1+\dots+U_m=\{u_1+\dots+u_m: u_j\in U_j\}.\]
  É o <b>menor</b> subespaço de \(V\) que contém todos os \(U_j\) (1.39) — análogo à união de conjuntos, mas a união em geral não é subespaço.</p></div>
  <h2>Somas diretas</h2>
  <div class="callout def"><div class="lbl">Definição 1.40 — Soma direta</div>
  <p>A soma é <b>direta</b>, denotada \(U_1\oplus\dots\oplus U_m\), quando cada elemento se escreve de <b>modo único</b> como \(u_1+\dots+u_m\) com \(u_j\in U_j\).</p></div>
  <div class="callout thm"><div class="lbl">1.44 / 1.45 — Critérios</div>
  <p>A soma é direta \(\iff\) a única maneira de escrever \(0=u_1+\dots+u_m\) é com todos os \(u_j=0\) (1.44). Para <b>dois</b> subespaços há um teste simples:
  \[U\oplus W \iff U\cap W=\{0\} \quad(1.45).\]
  Atenção: para três ou mais, a interseção dois a dois ser \(\{0\}\) <b>não</b> basta.</p></div>
  <p class="hint">Interativo: arraste \(v\), e as direções de \(U\) e \(W\). A decomposição \(v=u+w\) é sempre única.</p>
  <div class="jxg-wrap">
    <figure class="jfig"><div id="jxg-1Cds" class="jxg-board" style="height:320px"></div>
      <figcaption>\(\mathbb{R}^2=U\oplus W\): \(v\) se escreve de modo único como \(u\in U\) mais \(w\in W\).</figcaption></figure>
  </div>`,
  py:R`import numpy as np

# U = plano z=0 em R^3 ; W = eixo z. U ∩ W = {0}  ->  R^3 = U ⊕ W
def in_span(vecs, target):
    A = np.array(vecs).T
    coef, *_ = np.linalg.lstsq(A, target, rcond=None)
    return np.allclose(A @ coef, target)

U = [np.array([1,0,0.]), np.array([0,1,0.])]   # plano xy
W = [np.array([0,0,1.])]                        # eixo z

alvo = np.array([2., -3., 5.])
print("alvo pertence a U+W ?", in_span(U + W, alvo))   # True
# Interseção trivial => soma direta
print("U ∩ W = {0}: dim(U)+dim(W)=3 = dim(R^3) ✓")`,
  draw:function(JXG){
    const b=JXG.JSXGraph.initBoard("jxg-1Cds",{boundingbox:[-5,5,5,-5],axis:true,
      showNavigation:false,showCopyright:false,keepAspectRatio:true,pan:{enabled:false},zoom:{wheel:false}});
    // direções (arrastáveis) das retas U e W pela origem
    const du=b.create("point",[3,1],{name:"",size:2,strokeColor:"#2ea836",fillColor:"#2ea836"});
    const dw=b.create("point",[-1,2],{name:"",size:2,strokeColor:"#f0a020",fillColor:"#f0a020"});
    b.create("line",[[0,0],du],{strokeColor:"#2ea836",strokeWidth:1.4,name:"U",withLabel:true,
      label:{position:"rt",fontSize:15,strokeColor:"#2ea836"}});
    b.create("line",[[0,0],dw],{strokeColor:"#f0a020",strokeWidth:1.4,name:"W",withLabel:true,
      label:{position:"lft",fontSize:15,strokeColor:"#b06a00"}});
    const v=b.create("point",[2,3],{name:"v",size:4,strokeColor:"#a3121b",fillColor:"#d3202a",label:{fontSize:16}});
    // resolve v = s·du + t·dw (coordenadas na base {du,dw})
    const st=()=>{ const a=du.X(),c=du.Y(),e=dw.X(),f=dw.Y(),det=a*f-c*e;
      if(Math.abs(det)<1e-9) return [0,0];
      return [(v.X()*f-v.Y()*e)/det, (a*v.Y()-c*v.X())/det]; };
    const uP=b.create("point",[()=>st()[0]*du.X(),()=>st()[0]*du.Y()],{visible:false});
    const wP=b.create("point",[()=>st()[1]*dw.X(),()=>st()[1]*dw.Y()],{visible:false});
    b.create("arrow",[[0,0],uP],{strokeColor:"#2ea836",strokeWidth:3,lastArrow:{size:6}});
    b.create("arrow",[[0,0],wP],{strokeColor:"#f0a020",strokeWidth:3,lastArrow:{size:6}});
    b.create("arrow",[[0,0],v],{strokeColor:"#d3202a",strokeWidth:2,lastArrow:{size:6}});
    b.create("segment",[uP,v],{dash:2,strokeColor:"#f0a020",strokeWidth:1.3});
    b.create("segment",[wP,v],{dash:2,strokeColor:"#2ea836",strokeWidth:1.3});
    b.create("text",[0.15,-0.5,"u"],{fontSize:14,strokeColor:"#1e7a26"});
    b.create("text",[-0.7,0.4,"w"],{fontSize:14,strokeColor:"#b06a00"});
  }}]},

/* ============================ CAPÍTULO 2 ============================ */
{num:2,id:"cap02",title:"Finite-Dimensional Vector Spaces",titlePt:"Espaços de Dimensão Finita",pages:"27–48",dir:"cap02_finite_dimensional",
 sections:[
 {code:"2A",id:"02A",nb:"02A_span_and_linear_independence.ipynb",title:"Geradores e independência linear",en:"Span and Linear Independence",pages:"28–37",
  tags:["Span","Combinação linear","Independência"],
  body:R`<h2>Combinações lineares e span</h2>
  <div class="callout def"><div class="lbl">Definição 2.3 / 2.5 — Combinação linear e span</div>
  <p>Uma <b>combinação linear</b> de \(v_1,\dots,v_m\) é um vetor \(a_1v_1+\dots+a_mv_m\), com \(a_j\in\mathbb{F}\). O <b>span</b> é o conjunto de todas elas:
  \[\operatorname{span}(v_1,\dots,v_m)=\{a_1v_1+\dots+a_mv_m: a_j\in\mathbb{F}\}.\]
  Convenciona-se \(\operatorname{span}()=\{0\}\).</p></div>
  <div class="callout thm"><div class="lbl">2.7 — Span é o menor subespaço</div>
  <p>\(\operatorname{span}(v_1,\dots,v_m)\) é o menor subespaço de \(V\) que contém \(v_1,\dots,v_m\). Se ele é igual a \(V\), dizemos que a lista <b>gera</b> \(V\) (2.8).</p></div>
  <div class="callout def"><div class="lbl">Definição 2.10 — Dimensão finita</div>
  <p>\(V\) tem <b>dimensão finita</b> se <em>alguma</em> lista de vetores o gera. Caso contrário é de <b>dimensão infinita</b> (2.15). Ex.: \(\mathbb{F}^n\) tem dimensão finita; o espaço dos polinômios \(\mathcal{P}(\mathbb{F})\) é de dimensão infinita (2.16), pois qualquer lista tem grau máximo limitado. Já \(\mathcal{P}_m(\mathbb{F})=\operatorname{span}(1,z,\dots,z^m)\) tem dimensão finita.</p></div>
  <h2>Independência linear</h2>
  <div class="callout def"><div class="lbl">Definição 2.17 / 2.19</div>
  <p>\(v_1,\dots,v_m\) é <b>linearmente independente</b> se
  \[a_1v_1+\dots+a_mv_m=0 \implies a_1=\dots=a_m=0.\]
  Caso contrário é <b>linearmente dependente</b> (existe combinação nula com algum \(a_j\ne0\)). Equivale a dizer que cada vetor do span tem representação <b>única</b>. Toda lista que contém o vetor \(0\) é dependente.</p></div>
  <div class="callout thm"><div class="lbl">2.21 — Lema da dependência linear</div>
  <p>Se \(v_1,\dots,v_m\) é dependente, existe \(j\) com \(v_j\in\operatorname{span}(v_1,\dots,v_{j-1})\); removendo esse \(v_j\), o span não muda.</p></div>
  <div class="callout thm"><div class="lbl">2.23 — Independente \(\le\) gerador</div>
  <p>Em dimensão finita, o comprimento de <b>qualquer</b> lista linearmente independente é \(\le\) comprimento de <b>qualquer</b> lista geradora. (Daí: todo subespaço de um espaço de dimensão finita também tem dimensão finita — 2.26.)</p></div>
  <h2>Visualizando em \(\mathbb{R}^2\)</h2>
  <p>Duas setas \(v_1,v_2\) são independentes exatamente quando o paralelogramo que elas geram tem <b>área não nula</b> — isto é, \(\det[v_1\ v_2]\ne0\). Se a área colapsa (vetores colineares), a lista é dependente e o span é apenas uma reta.</p>
  <p class="hint">Arraste as pontas de \(v_1\) e \(v_2\).</p>
  <div class="jxg-wrap">
    <figure class="jfig"><div id="jxg-2Aspan" class="jxg-board" style="height:320px"></div>
      <figcaption>Área do paralelogramo \(=|\det|\): \(\ne0\Rightarrow\) independentes (span \(=\mathbb{R}^2\)); \(=0\Rightarrow\) dependentes.</figcaption></figure>
  </div>`,
  py:R`import numpy as np

V = np.array([[1,0,1],
              [0,1,1],
              [1,1,2.]]).T   # colunas = vetores
r = np.linalg.matrix_rank(V)
print("posto:", r, "| nº de vetores:", V.shape[1])
print("dependentes" if r < V.shape[1] else "independentes")
# terceiro = soma dos dois primeiros -> dependência linear`,
  draw:function(JXG){
    const b=JXG.JSXGraph.initBoard("jxg-2Aspan",{boundingbox:[-5,5,5,-5],axis:true,
      showNavigation:false,showCopyright:false,keepAspectRatio:true,pan:{enabled:false},zoom:{wheel:false}});
    const P1=b.create("point",[3,1],{name:"v₁",size:3,strokeColor:"#1e7a26",fillColor:"#2ea836",label:{fontSize:15}});
    const P2=b.create("point",[1,2.5],{name:"v₂",size:3,strokeColor:"#b06a00",fillColor:"#f0a020",label:{fontSize:15}});
    const det=()=>P1.X()*P2.Y()-P1.Y()*P2.X();
    // paralelogramo O, v1, v1+v2, v2
    b.create("polygon",[[0,0],P1,[()=>P1.X()+P2.X(),()=>P1.Y()+P2.Y()],P2],
      {fillColor:"#2ea836",fillOpacity:0.16,borders:{strokeWidth:0},vertices:{visible:false}});
    // reta do span quando dependentes
    const L=b.create("line",[[0,0],P1],{strokeColor:"#d3202a",strokeWidth:1.4,dash:2,
      visible:()=>Math.abs(det())<0.15});
    b.create("arrow",[[0,0],P1],{strokeColor:"#2ea836",strokeWidth:3,lastArrow:{size:6}});
    b.create("arrow",[[0,0],P2],{strokeColor:"#f0a020",strokeWidth:3,lastArrow:{size:6}});
    b.create("text",[-4.7,4.4,()=>{
      const d=det();
      return Math.abs(d)<0.15 ? "dependentes · span = reta" : "independentes · área = "+Math.abs(d).toFixed(2);
    }],{fontSize:14,strokeColor:"#0d1117",cssStyle:"font-weight:600"});
  }},
 {code:"2B",id:"02B",nb:"02B_bases.ipynb",title:"Bases",en:"Bases",pages:"39–42",
  tags:["Base","Coordenadas"],
  body:R`<div class="callout def"><div class="lbl">Definição 2.27 — Base</div>
  <p>Uma <b>base</b> de \(V\) é uma lista de vetores que é <b>linearmente independente</b> e <b>gera</b> \(V\).</p></div>
  <p>Exemplo: a <b>base canônica</b> de \(\mathbb{F}^n\) é \((1,0,\dots,0),(0,1,0,\dots,0),\dots,(0,\dots,0,1)\). Um espaço tem muitas bases: \((7,5),(-4,9)\) e \((1,2),(3,5)\) são ambas bases de \(\mathbb{F}^2\). E \(1,z,\dots,z^m\) é base de \(\mathcal{P}_m(\mathbb{F})\).</p>
  <div class="callout thm"><div class="lbl">2.29 — Critério de base</div>
  <p>\(v_1,\dots,v_n\) é base de \(V\) \(\iff\) todo \(v\in V\) se escreve de forma <b>única</b> como
  \[v=a_1v_1+\dots+a_nv_n,\qquad a_j\in\mathbb{F}.\]
  Esses escalares são as <b>coordenadas</b> de \(v\) na base.</p></div>
  <div class="callout thm"><div class="lbl">2.31 / 2.32 / 2.33 — Redução, existência e extensão</div>
  <ul>
    <li>Toda lista <b>geradora</b> pode ser <b>reduzida</b> a uma base (descartando vetores redundantes).</li>
    <li>Logo <b>todo espaço de dimensão finita possui base</b>.</li>
    <li>Toda lista <b>independente</b> pode ser <b>estendida</b> a uma base.</li>
  </ul></div>
  <div class="callout thm"><div class="lbl">2.34 — Todo subespaço é somando direto de \(V\)</div>
  <p>Se \(V\) tem dimensão finita e \(U\subseteq V\) é subespaço, então existe subespaço \(W\) com \(V=U\oplus W\). (Estende-se uma base de \(U\) a uma base de \(V\); \(W\) é o span dos vetores acrescentados.)</p></div>`,
  py:R`import numpy as np

# Base canônica de R^3 e coordenadas de um vetor
B = np.eye(3)
v = np.array([2., -1., 4.])
coords = np.linalg.solve(B, v)      # únicas
print("coordenadas na base canônica:", coords)

# Outra base
B2 = np.array([[1,1,0],[0,1,1],[1,0,1.]]).T
coords2 = np.linalg.solve(B2, v)
print("coordenadas na base B2:", coords2)
print("reconstrução:", B2 @ coords2)`},
 {code:"2C",id:"02C",nb:"02C_dimension.ipynb",title:"Dimensão",en:"Dimension",pages:"44–48",
  tags:["Dimensão","dim(U+W)"],
  body:R`<div class="callout thm"><div class="lbl">2.35 — O comprimento da base é invariante</div>
  <p>Quaisquer duas bases de um espaço de dimensão finita têm o <b>mesmo comprimento</b>. (Decorre de 2.23, comparando independente vs. gerador nos dois sentidos.)</p></div>
  <div class="callout def"><div class="lbl">Definição 2.36 — Dimensão</div>
  <p>\(\dim V\) é o comprimento de qualquer base de \(V\). Ex.: \(\dim\mathbb{F}^n=n\); \(\dim\mathcal{P}_m(\mathbb{F})=m+1\). A dimensão depende do corpo: \(\mathbb{C}\) tem dimensão \(1\) sobre \(\mathbb{C}\), mas \(2\) sobre \(\mathbb{R}\).</p></div>
  <div class="callout thm"><div class="lbl">2.38 — Dimensão de subespaço</div>
  <p>Se \(U\subseteq V\) e \(V\) tem dimensão finita, então \(\dim U\le\dim V\).</p></div>
  <div class="callout thm"><div class="lbl">2.39 / 2.42 — O comprimento certo basta</div>
  <p>Se \(\dim V=n\), então: toda lista <b>independente</b> de \(n\) vetores é base; e toda lista <b>geradora</b> de \(n\) vetores é base. Ou seja, sabendo a dimensão, basta verificar <em>uma</em> das duas propriedades.</p></div>
  <div class="callout thm"><div class="lbl">2.43 — Dimensão da soma</div>
  <p>\[\dim(U_1+U_2)=\dim U_1+\dim U_2-\dim(U_1\cap U_2).\]
  Análogo à contagem de elementos da união de conjuntos finitos. Em particular, a soma é <b>direta</b> \(\iff \dim(U_1+U_2)=\dim U_1+\dim U_2\).</p></div>`,
  py:R`import numpy as np
from numpy.linalg import matrix_rank as rank

U = np.array([[1,0,0],[0,1,0.]]).T   # plano xy  (dim 2)
W = np.array([[0,1,0],[0,0,1.]]).T   # plano yz  (dim 2)

dimU, dimW = rank(U), rank(W)
dimUW = rank(np.hstack([U, W]))              # dim(U+W)
dimInt = dimU + dimW - dimUW                 # fórmula
print(f"dim U={dimU}, dim W={dimW}, dim(U+W)={dimUW}, dim(U∩W)={dimInt}")`}]},

/* ============================ CAPÍTULO 3 ============================ */
{num:3,id:"cap03",title:"Linear Maps",titlePt:"Aplicações Lineares",pages:"51–115",dir:"cap03_maps",
 sections:[
 {code:"3A",id:"03A",nb:"03A_vector_space_of_linear_maps.ipynb",title:"Espaço das aplicações lineares",en:"The Vector Space of Linear Maps",pages:"52–57",
  tags:["Linearidade","L(V,W)","Composição"],
  body:R`<div class="callout def"><div class="lbl">Definição 3.1 — Aplicação linear</div>
  <p>\(T:V\to W\) é <b>linear</b> se, para todos \(u,v\in V\) e \(\lambda\in\mathbb{F}\):
  \[T(u+v)=Tu+Tv \quad\text{(aditividade)},\qquad T(\lambda v)=\lambda\,Tv \quad\text{(homogeneidade)}.\]
  Escreve-se \(Tv\) em vez de \(T(v)\). Cuidado: nem toda função "parecida" é linear — \(\cos\) não é, pois \(\cos 2x\ne 2\cos x\).</p></div>
  <p>Exemplos: a aplicação nula, a identidade, a <b>derivação</b> \(Dp=p'\) em \(\mathcal{P}(\mathbb{R})\), a <b>integração</b> \(p\mapsto\int_0^1 p\), o <b>deslocamento</b> \((x_1,x_2,\dots)\mapsto(x_2,x_3,\dots)\), e toda \(T:\mathbb{F}^n\to\mathbb{F}^m\) dada por combinações lineares das coordenadas.</p>
  <div class="callout thm"><div class="lbl">3.5 — Uma base do domínio determina \(T\)</div>
  <p>Dada uma base \(v_1,\dots,v_n\) de \(V\) e vetores quaisquer \(w_1,\dots,w_n\in W\), existe uma <b>única</b> \(T\in\mathcal{L}(V,W)\) com \(Tv_j=w_j\). Ou seja, uma aplicação linear fica totalmente determinada pelos valores numa base.</p></div>
  <div class="callout def"><div class="lbl">3.6 / 3.7 — O espaço \(\mathcal{L}(V,W)\)</div>
  <p>Com \((S+T)v=Sv+Tv\) e \((\lambda T)v=\lambda(Tv)\), o conjunto \(\mathcal{L}(V,W)\) das aplicações lineares é ele mesmo um <b>espaço vetorial</b>.</p></div>
  <div class="callout def"><div class="lbl">3.8 / 3.9 — Produto (composição)</div>
  <p>Para \(T\in\mathcal{L}(U,V)\) e \(S\in\mathcal{L}(V,W)\), o <b>produto</b> \(ST\in\mathcal{L}(U,W)\) é a composição \((ST)u=S(Tu)\). É associativo e distributivo, mas <b>não comutativo</b>: em geral \(ST\ne TS\).</p></div>
  <p>Toda aplicação linear leva \(0\) em \(0\): \(T(0)=0\) (3.11).</p>`,
  py:R`import numpy as np

# T: R^2 -> R^2 rotação de 90°.  Testando linearidade.
T = np.array([[0,-1],[1,0.]])
u = np.array([2.,1.]); v = np.array([-1.,3.]); lam = 4.0

print("T(u+v)=Tu+Tv ?", np.allclose(T@(u+v), T@u + T@v))
print("T(λv)=λTv ?",   np.allclose(T@(lam*v), lam*(T@v)))

# Composição de lineares é linear: (S∘T)
S = np.array([[2,0],[0,3.]])
print("matriz de S∘T:\n", S @ T)`},
 {code:"3B",id:"03B",nb:"03B_null_spaces_and_ranges.ipynb",title:"Núcleo e imagem",en:"Null Spaces and Ranges",pages:"59–66",
  tags:["Núcleo","Imagem","Teorema do posto-nulidade"],
  body:R`<div class="callout def"><div class="lbl">Definição 3.12 / 3.17 — Núcleo e imagem</div>
  <p>O <b>núcleo</b> (kernel) e a <b>imagem</b> (range) de \(T\in\mathcal{L}(V,W)\):
  \[\operatorname{null}T=\{v\in V: Tv=0\},\qquad \operatorname{range}T=\{Tv: v\in V\}.\]
  \(\operatorname{null}T\) é subespaço de \(V\) (3.14) e \(\operatorname{range}T\) é subespaço de \(W\) (3.19).</p></div>
  <div class="callout thm"><div class="lbl">3.16 / 3.20 — Injetividade e sobrejetividade</div>
  <p>\(T\) é <b>injetiva</b> \(\iff \operatorname{null}T=\{0\}\) (o único vetor levado a \(0\) é o \(0\)). \(T\) é <b>sobrejetiva</b> \(\iff \operatorname{range}T=W\).</p></div>
  <div class="callout thm"><div class="lbl">3.22 — Teorema Fundamental das Aplicações Lineares</div>
  <p>Se \(V\) tem dimensão finita e \(T\in\mathcal{L}(V,W)\), então \(\operatorname{range}T\) tem dimensão finita e
  \[\dim V=\dim\operatorname{null}T+\dim\operatorname{range}T.\]</p></div>
  <p>Consequências imediatas (3.23 / 3.24), úteis para sistemas lineares:</p>
  <ul>
    <li>Se \(\dim V>\dim W\), <b>nenhuma</b> \(T\) é injetiva. (Sistema homogêneo com mais variáveis que equações tem solução não trivial — 3.26.)</li>
    <li>Se \(\dim V<\dim W\), <b>nenhuma</b> \(T\) é sobrejetiva. (Sistema com mais equações que variáveis pode não ter solução — 3.29.)</li>
  </ul>`,
  py:R`import numpy as np
from scipy.linalg import null_space

A = np.array([[1,2,3],
              [2,4,6],
              [1,1,1.]])
n = A.shape[1]
nul = null_space(A)                    # base do núcleo
dim_null = nul.shape[1]
dim_range = np.linalg.matrix_rank(A)   # dim da imagem
print("dim(núcleo) =", dim_null, "| dim(imagem) =", dim_range)
print("soma =", dim_null + dim_range, "= dim V =", n, "✓")`},
 {code:"3C",id:"03C",nb:"03C_matrices.ipynb",title:"Matrizes",en:"Matrices",pages:"69–79",
  tags:["Matriz de T","Produto matricial"],
  body:R`<div class="callout def"><div class="lbl">Definição 3.32 — Matriz de \(T\)</div>
  <p>Fixadas bases \(v_1,\dots,v_n\) de \(V\) e \(w_1,\dots,w_m\) de \(W\), a matriz \(\mathcal{M}(T)\) tem entradas \(A_{j,k}\) definidas por
  \[Tv_k=A_{1,k}w_1+\dots+A_{m,k}w_m.\]
  Em palavras: a \(k\)-ésima <b>coluna</b> de \(\mathcal{M}(T)\) são as coordenadas de \(Tv_k\). Nas bases canônicas, a coluna \(k\) é simplesmente \(Te_k\).</p></div>
  <div class="callout def"><div class="lbl">Definição 3.41 — Produto de matrizes</div>
  <p>\((AC)_{j,k}=\sum_{r}A_{j,r}\,C_{r,k}\). Essa definição foi escolhida <em>exatamente</em> para que \(\mathcal{M}(ST)=\mathcal{M}(S)\,\mathcal{M}(T)\) (3.43). Colunas: \((AC)_{\cdot,k}=A\,C_{\cdot,k}\) (3.49); e \(Ac\) é combinação linear das colunas de \(A\) (3.52).</p></div>
  <p>Soma de aplicações ↔ soma de matrizes (3.36); escalar ↔ escalar (3.38). O espaço \(\mathbb{F}^{m,n}\) tem dimensão \(mn\) (3.40), e \(\mathcal{L}(V,W)\cong\mathbb{F}^{m,n}\).</p>
  <h2>Uma aplicação linear transforma o plano</h2>
  <p>Como as colunas de \(\mathcal{M}(T)\) são \(Te_1\) e \(Te_2\), a matriz fica <b>completamente determinada</b> pelas imagens dos vetores da base. O quadrado unitário vira o paralelogramo gerado por \(Te_1,Te_2\), e \(|\det|\) é o fator de escala das áreas — se \(\det=0\), o plano colapsa numa reta (não invertível).</p>
  <p class="hint">Arraste \(Te_1\) e \(Te_2\) para montar a matriz e ver a transformação.</p>
  <div class="jxg-wrap">
    <figure class="jfig"><div id="jxg-3Cmap" class="jxg-board" style="height:340px"></div>
      <figcaption>Colunas \(Te_1,Te_2\) definem \(T\); a malha cinza (grade original) vira a malha colorida.</figcaption></figure>
  </div>`,
  py:R`import numpy as np

# M(ST) = M(S) M(T)
S = np.array([[1,2],[0,1.]])
T = np.array([[2,0],[1,3.]])
print("M(S)M(T):\n", S @ T)

# Coluna j da matriz = imagem do j-ésimo vetor da base
e1, e2 = np.array([1.,0]), np.array([0.,1])
print("T e1:", T@e1, " (1ª coluna)")
print("T e2:", T@e2, " (2ª coluna)")`,
  draw:function(JXG){
    const b=JXG.JSXGraph.initBoard("jxg-3Cmap",{boundingbox:[-5,5,5,-5],axis:true,
      showNavigation:false,showCopyright:false,keepAspectRatio:true,pan:{enabled:false},zoom:{wheel:false}});
    const O=[0,0], N=3;
    // quadrado unitário de referência (grade original)
    b.create("polygon",[[0,0],[1,0],[1,1],[0,1]],{fillColor:"#9fb0c0",fillOpacity:0.12,
      borders:{strokeColor:"#9fb0c0",strokeWidth:1,dash:2},vertices:{visible:false},fixed:true});
    const E1=b.create("point",[2,0.4],{name:"Te₁",size:3,strokeColor:"#1e7a26",fillColor:"#2ea836",label:{fontSize:15}});
    const E2=b.create("point",[-0.4,2],{name:"Te₂",size:3,strokeColor:"#b06a00",fillColor:"#f0a020",label:{fontSize:15}});
    // malha transformada (imagem do reticulado inteiro)
    for(let i=-N;i<=N;i++){
      b.create("segment",[[()=>i*E1.X()-N*E2.X(),()=>i*E1.Y()-N*E2.Y()],
                          [()=>i*E1.X()+N*E2.X(),()=>i*E1.Y()+N*E2.Y()]],
        {strokeColor:"#2ea836",strokeWidth:1,strokeOpacity:0.35});
      b.create("segment",[[()=>i*E2.X()-N*E1.X(),()=>i*E2.Y()-N*E1.Y()],
                          [()=>i*E2.X()+N*E1.X(),()=>i*E2.Y()+N*E1.Y()]],
        {strokeColor:"#f0a020",strokeWidth:1,strokeOpacity:0.35});
    }
    // imagem do quadrado unitário
    b.create("polygon",[O,E1,[()=>E1.X()+E2.X(),()=>E1.Y()+E2.Y()],E2],
      {fillColor:"#2ea836",fillOpacity:0.18,borders:{strokeColor:"#2ea836",strokeWidth:1.5},vertices:{visible:false}});
    b.create("arrow",[O,E1],{strokeColor:"#2ea836",strokeWidth:3,lastArrow:{size:6}});
    b.create("arrow",[O,E2],{strokeColor:"#f0a020",strokeWidth:3,lastArrow:{size:6}});
    b.create("text",[-4.7,4.4,()=>{
      const d=E1.X()*E2.Y()-E1.Y()*E2.X();
      return Math.abs(d)<0.08 ? "det ≈ 0 · não invertível (colapsa em reta)" : "det = "+d.toFixed(2)+" (escala de área)";
    }],{fontSize:14,strokeColor:"#0d1117",cssStyle:"font-weight:600"});
  }},
 {code:"3D",id:"03D",nb:"03D_invertibility_and_isomorphisms.ipynb",title:"Invertibilidade e isomorfismos",en:"Invertibility and Isomorphisms",pages:"82–93",
  tags:["Invertível","Isomorfismo","Operador"],
  body:R`<div class="callout def"><div class="lbl">Definição 3.53 — Invertível e inversa</div>
  <p>\(T\in\mathcal{L}(V,W)\) é <b>invertível</b> se existe \(S\in\mathcal{L}(W,V)\) com \(ST=I\) e \(TS=I\). A inversa é <b>única</b> (3.54) e denota-se \(T^{-1}\).</p></div>
  <div class="callout thm"><div class="lbl">3.56 — Caracterização</div>
  <p>\(T\) é invertível \(\iff\) é <b>injetiva e sobrejetiva</b>.</p></div>
  <div class="callout def"><div class="lbl">Definição 3.58 — Isomorfismo</div>
  <p>Um <b>isomorfismo</b> é uma aplicação linear invertível. \(V\) e \(W\) são <b>isomorfos</b> (\(V\cong W\)) se existe um isomorfismo entre eles — pense nele como um "renomear" os vetores.</p></div>
  <div class="callout thm"><div class="lbl">3.59 / 3.60 / 3.61 — Dimensão e isomorfismo</div>
  <p>Espaços de dimensão finita sobre \(\mathbb{F}\) são isomorfos \(\iff\) têm a <b>mesma dimensão</b>. Em particular \(\mathcal{L}(V,W)\cong\mathbb{F}^{m,n}\) via \(\mathcal{M}\), e \(\dim\mathcal{L}(V,W)=(\dim V)(\dim W)\). Fixada uma base, \(\mathcal{M}(Tv)=\mathcal{M}(T)\,\mathcal{M}(v)\) (3.65): aplicar \(T\) vira multiplicar pela matriz.</p></div>
  <div class="callout thm"><div class="lbl">3.67 / 3.69 — Operadores</div>
  <p>Um <b>operador</b> é uma aplicação linear de \(V\) em si mesmo (\(\mathcal{L}(V)\)). Se \(\dim V<\infty\), então para \(T\in\mathcal{L}(V)\):
  \[T\ \text{injetivo}\iff T\ \text{sobrejetivo}\iff T\ \text{invertível}.\]
  (Em dimensão infinita isso falha: o deslocamento é sobrejetivo mas não injetivo.)</p></div>`,
  py:R`import numpy as np

A = np.array([[2,1],[1,1.]])
print("det =", np.linalg.det(A))          # ≠ 0 => invertível
Ainv = np.linalg.inv(A)
print("A·A⁻¹ = I ?", np.allclose(A @ Ainv, np.eye(2)))

# Operador em dim finita: injetivo <=> sobrejetivo <=> invertível
print("posto =", np.linalg.matrix_rank(A), "= dim => bijetivo")`},
 {code:"3E",id:"03E",nb:"03E_products_and_quotients.ipynb",title:"Produtos e quocientes",en:"Products and Quotients",pages:"96–103",
  tags:["Produto","Espaço quociente","Coset"],
  body:R`<div class="callout def"><div class="lbl">Definição 3.71 — Produto de espaços</div>
  <p>\(V_1\times\dots\times V_m\) é o conjunto das listas \((v_1,\dots,v_m)\), \(v_j\in V_j\), com operações coordenada a coordenada. É espaço vetorial e
  \[\dim(V_1\times\dots\times V_m)=\dim V_1+\dots+\dim V_m\quad(3.76).\]</p></div>
  <div class="callout def"><div class="lbl">Definição 3.79 / 3.81 — Coset e espaço quociente</div>
  <p>Para um subespaço \(U\subseteq V\), o <b>coset</b> (subconjunto afim) é \(v+U=\{v+u:u\in U\}\). O <b>quociente</b> \(V/U\) é o conjunto de todos os cosets, com \((v+U)+(w+U)=(v+w)+U\) e \(\lambda(v+U)=\lambda v+U\). Vale \(v+U=w+U \iff v-w\in U\).</p></div>
  <div class="callout thm"><div class="lbl">3.89 — Dimensão do quociente</div>
  <p>\[\dim(V/U)=\dim V-\dim U.\]</p></div>
  <div class="callout thm"><div class="lbl">3.88 / 3.91 — Aplicação quociente e \(\tilde T\)</div>
  <p>A <b>aplicação quociente</b> \(\pi:V\to V/U\), \(\pi(v)=v+U\), é linear e sobrejetiva com \(\operatorname{null}\pi=U\). Toda \(T\in\mathcal{L}(V,W)\) induz \(\tilde T:V/(\operatorname{null}T)\to W\), que é <b>injetiva</b> e satisfaz \(V/(\operatorname{null}T)\cong\operatorname{range}T\) — a versão abstrata do teorema fundamental.</p></div>`,
  py:R`import numpy as np

# dim(V/U) = dim V - dim U, com V=R^3 e U=eixo x
V_dim = 3
U = np.array([[1,0,0.]]).T
dimU = np.linalg.matrix_rank(U)
print("dim(V/U) =", V_dim - dimU)   # 2 (plano de cosets)

# cosets v+U: dois vetores estão no mesmo coset se diferem por U
v1 = np.array([1,2,3.]); v2 = np.array([5,2,3.])
print("mesmo coset ?", np.allclose((v1-v2)[1:], 0))  # diferem só em x`},
 {code:"3F",id:"03F",nb:"03F_duality.ipynb",title:"Dualidade",en:"Duality",pages:"105–115",
  tags:["Funcional linear","Espaço dual","Transposta"],
  body:R`<div class="callout def"><div class="lbl">Definição 3.92 / 3.94 — Funcional linear e espaço dual</div>
  <p>Um <b>funcional linear</b> em \(V\) é uma aplicação linear \(\varphi:V\to\mathbb{F}\). O <b>espaço dual</b> é \(V'=\mathcal{L}(V,\mathbb{F})\); se \(\dim V<\infty\) então \(\dim V'=\dim V\) (3.95).</p></div>
  <div class="callout def"><div class="lbl">Definição 3.96 — Base dual</div>
  <p>Dada base \(v_1,\dots,v_n\) de \(V\), a <b>base dual</b> \(\varphi_1,\dots,\varphi_n\) de \(V'\) é definida por
  \[\varphi_j(v_k)=\delta_{jk}=\begin{cases}1,&k=j\\0,&k\ne j.\end{cases}\]
  Na base canônica de \(\mathbb{F}^n\), \(\varphi_j\) seleciona a \(j\)-ésima coordenada.</p></div>
  <div class="callout def"><div class="lbl">Definição 3.99 — Aplicação dual</div>
  <p>Para \(T\in\mathcal{L}(V,W)\), a <b>dual</b> \(T'\in\mathcal{L}(W',V')\) é \(T'(\varphi)=\varphi\circ T\). Propriedades: \((S+T)'=S'+T'\), \((\lambda T)'=\lambda T'\) e \((ST)'=T'S'\) (ordem invertida). Sua matriz é a <b>transposta</b>: \(\mathcal{M}(T')=\mathcal{M}(T)^{\mathsf t}\).</p></div>
  <div class="callout def"><div class="lbl">Definição 3.102 — Anulador</div>
  <p>Para \(U\subseteq V\), o <b>anulador</b> \(U^0=\{\varphi\in V':\varphi(u)=0\ \forall u\in U\}\) é subespaço de \(V'\), com \(\dim U+\dim U^0=\dim V\) (3.106).</p></div>
  <div class="callout thm"><div class="lbl">3.107–3.118 — Núcleo, imagem e posto do dual</div>
  <p>\(\operatorname{null}T'=(\operatorname{range}T)^0\) e \(\operatorname{range}T'=(\operatorname{null}T)^0\). Assim \(T\) é sobrejetiva \(\iff T'\) injetiva (e vice-versa). Sobretudo:
  \[\dim\operatorname{range}T'=\dim\operatorname{range}T,\]
  isto é, o <b>posto por linhas = posto por colunas</b> de uma matriz.</p></div>`,
  py:R`import numpy as np

A = np.array([[1,2,3],[4,5,6.]])
print("posto de A   :", np.linalg.matrix_rank(A))
print("posto de Aᵀ  :", np.linalg.matrix_rank(A.T))   # iguais

# Base dual: φ_i(e_j) = δ_ij  (as linhas da identidade)
phi = np.eye(3)
e2 = np.array([0,1,0.])
print("φ aplicados a e2:", phi @ e2)   # (0,1,0)`}]},

/* ============================ CAPÍTULO 4 ============================ */
{num:4,id:"cap04",title:"Polynomials",titlePt:"Polinômios",pages:"119–129",dir:"cap04_polynomials",
 sections:[
 {code:"4",id:"04",nb:"04_polynomials.ipynb",title:"Polinômios",en:"Polynomials",pages:"119–129",
  tags:["Divisão","Raízes","Fatoração"],
  body:R`<p>Um polinômio \(p\in\mathcal{P}(\mathbb{F})\) é \(p(z)=a_0+a_1z+\dots+a_mz^m\). Os coeficientes são <b>únicos</b>.</p>
  <div class="callout thm"><div class="lbl">Algoritmo da divisão</div>
  <p>Dados \(p,s\) com \(s\ne0\), existem únicos \(q,r\) com \(p=sq+r\) e \(\deg r<\deg s\).</p></div>
  <div class="callout thm"><div class="lbl">Teorema Fundamental da Álgebra</div>
  <p>Todo polinômio não constante em \(\mathbb{C}\) tem raiz. Logo fatora-se como \(p(z)=c\,(z-\lambda_1)\cdots(z-\lambda_m)\). Em \(\mathbb{R}\), fatora em fatores lineares e quadráticos irredutíveis \(x^2+bx+c\) com \(b^2<4c\).</p></div>`,
  py:R`import numpy as np

# p(x) = x^3 - 6x^2 + 11x - 6 = (x-1)(x-2)(x-3)
p = np.array([1, -6, 11, -6.])
raizes = np.roots(p)
print("raízes:", np.round(raizes.real, 6))

# Divisão de polinômios: p = s·q + r
q, r = np.polydiv(p, np.array([1, -1.]))   # dividir por (x-1)
print("quociente:", q, "| resto:", r)`}]},

/* ============================ CAPÍTULO 5 ============================ */
{num:5,id:"cap05",title:"Eigenvalues, Eigenvectors, and Invariant Subspaces",titlePt:"Autovalores e Autovetores",pages:"131–179",dir:"cap05_eigenvalues",
 sections:[
 {code:"5A",id:"05A",nb:"05A_invariant_subspaces.ipynb",title:"Subespaços invariantes",en:"Invariant Subspaces",pages:"133–139",
  tags:["Invariante","Autovalor","Autovetor"],
  body:R`<p>\(U\) é <b>invariante</b> sob \(T\in\mathcal{L}(V)\) se \(Tu\in U\) para todo \(u\in U\).</p>
  <div class="callout def"><div class="lbl">Autovalor e autovetor</div>
  <p>\(\lambda\in\mathbb{F}\) é autovalor se existe \(v\ne0\) com \(Tv=\lambda v\); \(v\) é autovetor. Equivale a \(T-\lambda I\) não injetiva.</p></div>
  <div class="callout thm"><div class="lbl">Independência de autovetores</div>
  <p>Autovetores associados a autovalores distintos são linearmente independentes. Logo \(T\) tem no máximo \(\dim V\) autovalores distintos.</p></div>`,
  py:R`import numpy as np

A = np.array([[2,0,0],[0,3,4],[0,4,9.]])
vals, vecs = np.linalg.eig(A)
print("autovalores:", np.round(vals,4))
for i,l in enumerate(vals):
    v = vecs[:,i]
    print(f"Av = λv ? {np.allclose(A@v, l*v)}  (λ={l:.3f})")`},
 {code:"5B",id:"05B",nb:"05B_minimal_polynomial.ipynb",title:"Autovetores e matrizes triangulares",en:"Eigenvectors and Upper-Triangular Matrices",pages:"143–150",
  tags:["Polinômio de operador","Triangular","Existência de autovalor"],
  body:R`<p>Polinômios aplicados a operadores: \(p(T)=a_0I+a_1T+\dots+a_mT^m\). Vale \(p(T)q(T)=(pq)(T)\).</p>
  <div class="callout thm"><div class="lbl">Existência de autovalores</div>
  <p>Todo operador em espaço complexo de dimensão finita \(>0\) tem ao menos um autovalor.</p></div>
  <div class="callout thm"><div class="lbl">Forma triangular superior</div>
  <p>Sobre \(\mathbb{C}\), todo operador possui uma base na qual sua matriz é triangular superior. Os autovalores são exatamente as entradas da diagonal.</p></div>`,
  py:R`import numpy as np
from scipy.linalg import schur

A = np.array([[4,1,2],[0,3,1],[0,0,5.]])
# Já triangular: autovalores = diagonal
print("diagonal (autovalores):", np.diag(A))

# Decomposição de Schur: T = Q A Qᵀ triangular (complexa)
B = np.array([[0,-1],[1,0.]])
Tri, Q = schur(B, output='complex')
print("Schur triangular:\n", np.round(Tri,3))
print("diagonal:", np.round(np.diag(Tri),3))`},
 {code:"5C",id:"05C",nb:"05C_upper_triangular_matrices.ipynb",title:"Autoespaços e matrizes diagonais",en:"Eigenspaces and Diagonal Matrices",pages:"154–160",
  tags:["Autoespaço","Diagonalização"],
  body:R`<p>O <b>autoespaço</b> \(E(\lambda,T)=\operatorname{null}(T-\lambda I)\) reúne os autovetores de \(\lambda\) e o \(0\).</p>
  <div class="callout thm"><div class="lbl">Condições para diagonalização</div>
  <p>\(T\) é diagonalizável \(\iff V\) tem base de autovetores \(\iff V=E(\lambda_1,T)\oplus\dots\oplus E(\lambda_m,T)\) \(\iff \sum\dim E(\lambda_j,T)=\dim V\). Ter \(\dim V\) autovalores distintos é suficiente.</p></div>`,
  py:R`import numpy as np

A = np.array([[1,0,0],[1,2,0],[1,1,3.]])
vals, P = np.linalg.eig(A)
D = np.diag(vals)
# A = P D P⁻¹
print("diagonalizável ?", np.allclose(P @ D @ np.linalg.inv(P), A))
print("D =\n", np.round(D,3))`},
 {code:"5D",id:"05D",nb:"05D_diagonalizable_operators.ipynb",title:"Operadores diagonalizáveis",en:"Diagonalizable Operators",pages:"163–172",
  tags:["Multiplicidade","Potências"],
  body:R`<p>A diagonalização \(A=PDP^{-1}\) simplifica potências e funções: \(A^k=PD^kP^{-1}\).</p>
  <div class="callout thm"><div class="lbl">Diagonalização e multiplicidade</div>
  <p>\(T\) é diagonalizável sse, para cada autovalor, a multiplicidade geométrica \(\dim E(\lambda,T)\) iguala a algébrica.</p></div>`,
  py:R`import numpy as np

A = np.array([[2,1],[0,3.]])
vals, P = np.linalg.eig(A)
D = np.diag(vals)
Pinv = np.linalg.inv(P)

k = 10
Ak = P @ np.diag(vals**k) @ Pinv     # potência via diagonalização
print("A^10 =\n", np.round(Ak,1))
print("confere ?", np.allclose(Ak, np.linalg.matrix_power(A, k)))`},
 {code:"5E",id:"05E",nb:"05E_commuting_operators.ipynb",title:"Operadores comutantes",en:"Commuting Operators",pages:"175–179",
  tags:["Comutação","Diagonalização simultânea"],
  body:R`<p>\(S\) e \(T\) <b>comutam</b> se \(ST=TS\).</p>
  <div class="callout thm"><div class="lbl">Diagonalização simultânea</div>
  <p>Dois operadores diagonalizáveis são <b>simultaneamente</b> diagonalizáveis \(\iff\) comutam. Comutantes sempre partilham um autovetor comum (sobre \(\mathbb{C}\)).</p></div>`,
  py:R`import numpy as np

A = np.array([[2,0],[0,3.]])
B = np.array([[5,0],[0,7.]])
print("comutam ?", np.allclose(A@B, B@A))   # matrizes diagonais comutam

# autovetores comuns: base canônica diagonaliza ambas
print("AB = BA =\n", A@B)`}]},

/* ============================ CAPÍTULO 6 ============================ */
{num:6,id:"cap06",title:"Inner Product Spaces",titlePt:"Espaços com Produto Interno",pages:"181–224",dir:"cap06_inner_product_spaces",
 sections:[
 {code:"6A",id:"06A",nb:"06A_inner_products_and_norms.ipynb",title:"Produtos internos e normas",en:"Inner Products and Norms",pages:"182–191",
  tags:["Produto interno","Norma","Cauchy–Schwarz"],
  body:R`<p>Um <b>produto interno</b> \(\langle\cdot,\cdot\rangle\) é positivo-definido, aditivo, homogêneo na 1ª entrada e conjugado-simétrico: \(\langle u,v\rangle=\overline{\langle v,u\rangle}\).</p>
  <div class="callout def"><div class="lbl">Norma</div>
  <p>\(\lVert v\rVert=\sqrt{\langle v,v\rangle}\).</p></div>
  <div class="callout thm"><div class="lbl">Cauchy–Schwarz e triângulo</div>
  <p>\[|\langle u,v\rangle|\le \lVert u\rVert\,\lVert v\rVert,\qquad \lVert u+v\rVert\le\lVert u\rVert+\lVert v\rVert.\]
  Vetores são ortogonais quando \(\langle u,v\rangle=0\); vale então Pitágoras \(\lVert u+v\rVert^2=\lVert u\rVert^2+\lVert v\rVert^2\).</p></div>`,
  py:R`import numpy as np

u = np.array([1., 2., 3.])
v = np.array([4., -1., 0.])
ip = np.dot(u, v)
print("⟨u,v⟩ =", ip, "| ‖u‖ =", np.linalg.norm(u))

# Cauchy–Schwarz
print("Cauchy–Schwarz:", abs(ip), "≤", np.linalg.norm(u)*np.linalg.norm(v))
# Ortogonais?
print("ortogonais ?", np.isclose(ip, 0))`},
 {code:"6B",id:"06B",nb:"06B_orthonormal_bases.ipynb",title:"Bases ortonormais",en:"Orthonormal Bases",pages:"197–207",
  tags:["Ortonormal","Gram–Schmidt","Projeção"],
  body:R`<p>Uma lista é <b>ortonormal</b> se os vetores são unitários e mutuamente ortogonais. Numa base ortonormal, \(v=\sum_j\langle v,e_j\rangle e_j\) e \(\lVert v\rVert^2=\sum_j|\langle v,e_j\rangle|^2\) (Parseval).</p>
  <div class="callout thm"><div class="lbl">Gram–Schmidt</div>
  <p>Qualquer lista independente pode ser ortonormalizada mantendo os spans parciais. Logo todo espaço com produto interno de dimensão finita possui base ortonormal.</p></div>`,
  py:R`import numpy as np

A = np.array([[1., 1., 0.],
              [1., 0., 1.],
              [0., 1., 1.]])
Q, R = np.linalg.qr(A)     # Gram–Schmidt (colunas de Q ortonormais)
print("Qᵀ Q = I ?", np.allclose(Q.T @ Q, np.eye(3)))
print("Q =\n", np.round(Q, 3))`},
 {code:"6C",id:"06C",nb:"06C_orthogonal_complements.ipynb",title:"Complementos ortogonais",en:"Orthogonal Complements",pages:"211–224",
  tags:["Complemento ortogonal","Projeção","Mínimos quadrados"],
  body:R`<p>O <b>complemento ortogonal</b> \(U^\perp=\{v:\langle v,u\rangle=0\ \forall u\in U\}\) satisfaz \(V=U\oplus U^\perp\).</p>
  <div class="callout thm"><div class="lbl">Melhor aproximação</div>
  <p>A projeção ortogonal \(P_U v\) é o ponto de \(U\) mais próximo de \(v\): \(\lVert v-P_Uv\rVert\le\lVert v-u\rVert\ \forall u\in U\). É a base dos <b>mínimos quadrados</b>.</p></div>`,
  py:R`import numpy as np

# Mínimos quadrados: melhor reta y = a x + b
x = np.array([0,1,2,3.]); y = np.array([1, 3, 4, 6.])
A = np.vstack([x, np.ones_like(x)]).T
coef, *_ = np.linalg.lstsq(A, y, rcond=None)   # projeção ortogonal
print("a, b =", np.round(coef, 4))
print("resíduo ⟂ ao span:", np.round(A.T @ (y - A@coef), 10))`}]},

/* ============================ CAPÍTULO 7 ============================ */
{num:7,id:"cap07",title:"Operators on Inner Product Spaces",titlePt:"Operadores em Espaços com Produto Interno",pages:"227–294",dir:"cap07_operators_inner_product",
 sections:[
 {code:"7A",id:"07A",nb:"07A_self_adjoint_and_normal.ipynb",title:"Operadores auto-adjuntos e normais",en:"Self-Adjoint and Normal Operators",pages:"228–239",
  tags:["Adjunto","Auto-adjunto","Normal"],
  body:R`<p>O <b>adjunto</b> \(T^*\) satisfaz \(\langle Tv,w\rangle=\langle v,T^*w\rangle\); em matrizes, \(T^*=\bar T^{\,\top}\) (conjugada transposta).</p>
  <div class="callout def"><div class="lbl">Auto-adjunto e normal</div>
  <p>\(T\) é <b>auto-adjunto</b> se \(T=T^*\); é <b>normal</b> se \(TT^*=T^*T\). Autovalores de operadores auto-adjuntos são reais.</p></div>`,
  py:R`import numpy as np

A = np.array([[2, 1+1j],[1-1j, 3]])
Astar = A.conj().T
print("auto-adjunto (hermitiano) ?", np.allclose(A, Astar))
print("autovalores (reais):", np.round(np.linalg.eigvalsh(A), 4))

N = np.array([[0,-1],[1,0.]])   # normal (NNᵀ = NᵀN) mas não simétrico
print("normal ?", np.allclose(N@N.T, N.T@N))`},
 {code:"7B",id:"07B",nb:"07B_spectral_theorem.ipynb",title:"Teorema espectral",en:"Spectral Theorem",pages:"243–247",
  tags:["Espectral","Diagonalização ortogonal"],
  body:R`<div class="callout thm"><div class="lbl">Teorema Espectral</div>
  <p><b>Complexo:</b> \(T\) é normal \(\iff V\) tem base ortonormal de autovetores de \(T\). <b>Real:</b> \(T\) é auto-adjunto \(\iff V\) tem base ortonormal de autovetores. Em ambos, \(A=UDU^*\) com \(U\) unitária e \(D\) diagonal.</p></div>`,
  py:R`import numpy as np

A = np.array([[6, 2],[2, 3.]])     # simétrica real
vals, U = np.linalg.eigh(A)        # U ortogonal, vals reais
D = np.diag(vals)
print("U ortogonal ?", np.allclose(U.T@U, np.eye(2)))
print("A = U D Uᵀ ?", np.allclose(U @ D @ U.T, A))`},
 {code:"7C",id:"07C",nb:"07C_positive_operators.ipynb",title:"Operadores positivos",en:"Positive Operators",pages:"251–255",
  tags:["Positivo","Raiz quadrada","Cholesky"],
  body:R`<p>\(T\) é <b>positivo</b> se auto-adjunto e \(\langle Tv,v\rangle\ge0\) para todo \(v\). Equivale a ter todos os autovalores \(\ge0\), ou a possuir raiz quadrada positiva \(T=S^2\), ou fatoração \(T=R^*R\).</p>`,
  py:R`import numpy as np

A = np.array([[4, 2],[2, 3.]])         # simétrica, autovalores > 0
print("autovalores ≥ 0 ?", np.all(np.linalg.eigvalsh(A) >= 0))

L = np.linalg.cholesky(A)              # A = L Lᵀ  (R*R)
print("Cholesky L=\n", np.round(L,4))
print("A = L Lᵀ ?", np.allclose(L @ L.T, A))`},
 {code:"7D",id:"07D",nb:"07D_isometries_unitary_factorization.ipynb",title:"Isometrias e decomposição polar",en:"Isometries and Polar Decomposition",pages:"258–268",
  tags:["Isometria","Unitária","Decomposição polar"],
  body:R`<p>Uma <b>isometria</b> \(S\) preserva normas: \(\lVert Sv\rVert=\lVert v\rVert\); equivale a \(S^*S=I\) (unitária).</p>
  <div class="callout thm"><div class="lbl">Decomposição polar</div>
  <p>Todo operador \(T\) fatora \(T=S\sqrt{T^*T}\), com \(S\) isometria — análogo a \(z=\frac{z}{|z|}\,|z|\).</p></div>`,
  py:R`import numpy as np
from scipy.linalg import polar

A = np.array([[1, 2],[3, 4.]])
U, P = polar(A)                 # A = U P, U unitária, P positiva
print("U unitária ?", np.allclose(U@U.T, np.eye(2)))
print("P positiva ?", np.all(np.linalg.eigvalsh(P) >= -1e-9))
print("A = U P ?", np.allclose(U @ P, A))`},
 {code:"7E",id:"07E",nb:"07E_singular_value_decomposition.ipynb",title:"Decomposição em valores singulares",en:"Singular Value Decomposition",pages:"270–278",
  tags:["SVD","Valores singulares"],
  body:R`<div class="callout thm"><div class="lbl">SVD</div>
  <p>Todo \(T\in\mathcal{L}(V,W)\) admite \(A=U\Sigma V^*\), com \(U,V\) unitárias e \(\Sigma\) diagonal com <b>valores singulares</b> \(s_1\ge\dots\ge s_r>0\) — as raízes dos autovalores de \(T^*T\).</p></div>
  <p>O número de valores singulares positivos é o posto; a SVD é a fatoração central da álgebra linear numérica.</p>`,
  py:R`import numpy as np

A = np.array([[3, 1, 1],[-1, 3, 1.]])
U, s, Vt = np.linalg.svd(A)
print("valores singulares:", np.round(s, 4))
print("posto =", np.sum(s > 1e-10))
Sig = np.zeros_like(A); Sig[:len(s), :len(s)] = np.diag(s)
print("A = U Σ Vᵀ ?", np.allclose(U @ Sig @ Vt, A))`},
 {code:"7F",id:"07F",nb:"07F_consequences_of_svd.ipynb",title:"Consequências da SVD",en:"Consequences of the SVD",pages:"280–294",
  tags:["Norma","Pseudoinversa","Baixa posto"],
  body:R`<p>Da SVD seguem: a <b>norma</b> \(\lVert A\rVert=s_1\); a <b>pseudoinversa</b> \(A^+=V\Sigma^+U^*\) (mínimos quadrados); e a <b>melhor aproximação de posto \(k\)</b> (Eckart–Young), truncando os valores singulares.</p>`,
  py:R`import numpy as np

A = np.random.default_rng(0).random((6,6))
U, s, Vt = np.linalg.svd(A)

k = 2   # melhor aproximação de posto 2 (Eckart–Young)
Ak = (U[:, :k] * s[:k]) @ Vt[:k, :]
print("erro ‖A-A_k‖ =", round(np.linalg.norm(A-Ak, 2), 4), "= s_{k+1} =", round(s[k], 4))

# Pseudoinversa e mínimos quadrados
Aplus = np.linalg.pinv(A)
print("A A⁺ A = A ?", np.allclose(A @ Aplus @ A, A))`}]},

/* ============================ CAPÍTULO 8 ============================ */
{num:8,id:"cap08",title:"Operators on Complex Vector Spaces",titlePt:"Operadores em Espaços Vetoriais Complexos",pages:"297–330",dir:"cap08_operators_complex",
 sections:[
 {code:"8A",id:"08A",nb:"08A_generalized_eigenvectors_nilpotent.ipynb",title:"Autovetores generalizados e nilpotentes",en:"Generalized Eigenvectors and Nilpotent Operators",pages:"298–306",
  tags:["Autovetor generalizado","Nilpotente"],
  body:R`<p>Um <b>autovetor generalizado</b> satisfaz \((T-\lambda I)^k v=0\) para algum \(k\ge1\). O operador é <b>nilpotente</b> se \(N^m=0\) para algum \(m\).</p>
  <div class="callout thm"><div class="lbl">Nilpotência</div>
  <p>\(N\) nilpotente em \(V\) de dimensão \(n\) satisfaz \(N^n=0\), e há base na qual \(N\) é triangular estritamente superior (diagonal nula).</p></div>`,
  py:R`import numpy as np

N = np.array([[0,1,0],[0,0,1],[0,0,0.]])   # nilpotente de índice 3
print("N² =\n", np.linalg.matrix_power(N,2))
print("N³ =\n", np.linalg.matrix_power(N,3))   # zero
print("autovalores (todos 0):", np.linalg.eigvals(N))`},
 {code:"8B",id:"08B",nb:"08B_generalized_eigenspace_decomposition.ipynb",title:"Decomposição em autoespaços generalizados",en:"Generalized Eigenspace Decomposition",pages:"308–316",
  tags:["Autoespaço generalizado","Multiplicidade"],
  body:R`<div class="callout thm"><div class="lbl">Decomposição</div>
  <p>Sobre \(\mathbb{C}\), \(V=G(\lambda_1,T)\oplus\dots\oplus G(\lambda_m,T)\), onde \(G(\lambda,T)=\operatorname{null}(T-\lambda I)^{\dim V}\). A <b>multiplicidade</b> de \(\lambda\) é \(\dim G(\lambda,T)\); a soma das multiplicidades é \(\dim V\).</p></div>`,
  py:R`import numpy as np
from numpy.linalg import matrix_rank, matrix_power

A = np.array([[5,1,0],[0,5,0],[0,0,2.]])
n = A.shape[0]
for lam in [5., 2.]:
    M = matrix_power(A - lam*np.eye(n), n)
    mult = n - matrix_rank(M)          # dim do autoespaço generalizado
    print(f"multiplicidade de λ={lam}: {mult}")`},
 {code:"8C",id:"08C",nb:"08C_consequences_and_jordan.ipynb",title:"Consequências e forma de Jordan",en:"Consequences and Jordan Form",pages:"319–324",
  tags:["Jordan","Polinômio característico","Cayley–Hamilton"],
  body:R`<div class="callout thm"><div class="lbl">Forma canônica de Jordan</div>
  <p>Todo operador complexo tem base na qual sua matriz é diagonal por blocos de Jordan (autovalor na diagonal, 1's na superdiagonal). O <b>polinômio característico</b> é \(\prod(z-\lambda_j)^{d_j}\) e vale <b>Cayley–Hamilton</b>: \(q(T)=0\).</p></div>`,
  py:R`import sympy as sp

A = sp.Matrix([[5,1,0],[0,5,0],[0,0,2]])
P, J = A.jordan_form()
print("Forma de Jordan J =")
sp.pprint(J)
# Cayley–Hamilton: característica anula o operador
car = A.charpoly().as_expr()
print("char(A):", car)`},
 {code:"8D",id:"08D",nb:"08D_trace.ipynb",title:"Traço",en:"Trace",pages:"326–330",
  tags:["Traço","Invariante"],
  body:R`<p>O <b>traço</b> é a soma da diagonal — igual à soma dos autovalores (com multiplicidade) e ao coeficiente do polinômio característico. É invariante por semelhança: \(\operatorname{tr}(AB)=\operatorname{tr}(BA)\).</p>`,
  py:R`import numpy as np

A = np.array([[5,1,0],[0,5,0],[0,0,2.]])
print("traço:", np.trace(A))
print("soma dos autovalores:", np.sum(np.linalg.eigvals(A)).real)

B = np.random.default_rng(1).random((3,3))
print("tr(AB) = tr(BA) ?", np.isclose(np.trace(A@B), np.trace(B@A)))`}]},

/* ============================ CAPÍTULO 9 ============================ */
{num:9,id:"cap09",title:"Multilinear Algebra and Determinants",titlePt:"Álgebra Multilinear e Determinantes",pages:"332–380",dir:"cap09_multilinear_determinants",
 sections:[
 {code:"9A",id:"09A",nb:"09A_bilinear_quadratic_forms.ipynb",title:"Formas bilineares e quadráticas",en:"Bilinear and Quadratic Forms",pages:"333–344",
  tags:["Bilinear","Quadrática","Sylvester"],
  body:R`<p>Uma <b>forma bilinear</b> \(B:V\times V\to\mathbb{F}\) é linear em cada entrada; representa-se por matriz \(B(u,v)=u^\top M v\). A <b>forma quadrática</b> associada é \(q(v)=B(v,v)\).</p>
  <div class="callout thm"><div class="lbl">Lei da inércia de Sylvester</div>
  <p>Toda forma quadrática real diagonaliza; o número de sinais \(+\), \(-\) e \(0\) (a assinatura) é invariante.</p></div>`,
  py:R`import numpy as np

M = np.array([[2, 1],[1, 3.]])      # forma quadrática simétrica
v = np.array([1., 2.])
print("q(v) = vᵀ M v =", v @ M @ v)

sig = np.sign(np.linalg.eigvalsh(M))   # assinatura (Sylvester)
print("assinatura (+, -, 0):",
      int((sig>0).sum()), int((sig<0).sum()), int((sig==0).sum()))`},
 {code:"9B",id:"09B",nb:"09B_alternating_multilinear_forms.ipynb",title:"Formas multilineares alternadas",en:"Alternating Multilinear Forms",pages:"346–352",
  tags:["Multilinear","Alternada","Permutação"],
  body:R`<p>Uma forma \(m\)-linear é <b>alternada</b> se zera quando dois argumentos coincidem — trocar dois argumentos inverte o sinal. O espaço das formas alternadas de grau máximo \(n=\dim V\) tem dimensão 1, o que dá origem ao determinante.</p>`,
  py:R`import numpy as np
from itertools import permutations

def det_leibniz(A):
    n = len(A); total = 0
    for perm in permutations(range(n)):
        sign = 1
        for i in range(n):
            for j in range(i+1, n):
                if perm[i] > perm[j]: sign = -sign
        prod = np.prod([A[i, perm[i]] for i in range(n)])
        total += sign * prod
    return total

A = np.array([[1,2,3],[4,5,6],[7,8,10.]])
print("det (Leibniz):", det_leibniz(A), "| numpy:", round(np.linalg.det(A),6))`},
 {code:"9C",id:"09C",nb:"09C_determinants.ipynb",title:"Determinantes",en:"Determinants",pages:"354–367",
  tags:["Determinante","Multiplicatividade","Volume"],
  body:R`<p>O <b>determinante</b> é a única forma \(n\)-linear alternada com \(\det I=1\). Propriedades: \(\det(AB)=\det A\det B\); \(A\) invertível \(\iff\det A\ne0\); \(\det=\prod\lambda_j\); e \(|\det A|\) é o <b>volume</b> do paralelepípedo das colunas.</p>`,
  py:R`import numpy as np

A = np.array([[2,0,1],[1,3,2],[0,1,1.]])
print("det A =", round(np.linalg.det(A), 6))
print("produto dos autovalores:", round(np.prod(np.linalg.eigvals(A)).real, 6))

B = np.array([[1,1,0],[0,2,1],[1,0,1.]])
print("det(AB)=det A·det B ?",
      np.isclose(np.linalg.det(A@B), np.linalg.det(A)*np.linalg.det(B)))`},
 {code:"9D",id:"09D",nb:"09D_tensor_products.ipynb",title:"Produtos tensoriais",en:"Tensor Products",pages:"370–380",
  tags:["Tensor","Produto de Kronecker"],
  body:R`<p>O <b>produto tensorial</b> \(V\otimes W\) tem dimensão \(\dim V\cdot\dim W\); lineariza aplicações bilineares. Em matrizes corresponde ao <b>produto de Kronecker</b> \(A\otimes B\).</p>
  <p>Propriedade: \((A\otimes B)(C\otimes D)=(AC)\otimes(BD)\).</p>`,
  py:R`import numpy as np

A = np.array([[1,2],[3,4.]])
B = np.array([[0,1],[1,0.]])
K = np.kron(A, B)                 # produto de Kronecker (tensor)
print("A ⊗ B =\n", K, "\nforma:", K.shape)   # 4x4

# (A⊗B)(C⊗D) = (AC)⊗(BD)
C = np.eye(2); D = np.array([[2,0],[0,3.]])
lhs = np.kron(A,B) @ np.kron(C,D)
rhs = np.kron(A@C, B@D)
print("identidade mista ?", np.allclose(lhs, rhs))`}]}
];
