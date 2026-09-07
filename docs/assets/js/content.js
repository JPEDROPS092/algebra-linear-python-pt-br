/* Conteúdo do curso — Álgebra Linear Feita Corretamente (Axler, 4ª ed.)
   Cada seção mapeia um notebook do repositório. LaTeX via MathJax; código via highlight.js.
   String.raw preserva as barras invertidas do LaTeX. */
const R = String.raw;

const CONTENT = [
/* ============================ CAPÍTULO 1 ============================ */
{num:1,id:"cap01",title:"Vector Spaces",titlePt:"Espaços Vetoriais",pages:"1–26",dir:"cap01_vector_spaces",
 sections:[
 {code:"1A",id:"01A",nb:"01A_Rn_and_Cn.ipynb",title:"Rⁿ e Cⁿ",en:"Rⁿ and Cⁿ",pages:"2–10",
  tags:["Números complexos","Listas","Corpos"],
  body:R`<p>A álgebra linear estuda estruturas construídas sobre um <b>corpo</b> \(\mathbb{F}\), que aqui será \(\mathbb{R}\) (reais) ou \(\mathbb{C}\) (complexos). Um número complexo tem a forma \(z = a + b\,i\), com \(a,b\in\mathbb{R}\) e \(i^2=-1\).</p>
  <div class="callout def"><div class="lbl">Definição — \(\mathbb{F}^n\)</div>
  <p>\(\mathbb{F}^n\) é o conjunto de todas as listas de comprimento \(n\) com entradas em \(\mathbb{F}\):
  \[\mathbb{F}^n=\{(x_1,\dots,x_n): x_j\in\mathbb{F},\ j=1,\dots,n\}.\]</p></div>
  <p>Soma e multiplicação por escalar são definidas coordenada a coordenada:
  \[(x_1,\dots,x_n)+(y_1,\dots,y_n)=(x_1+y_1,\dots,x_n+y_n),\qquad \lambda(x_1,\dots,x_n)=(\lambda x_1,\dots,\lambda x_n).\]</p>
  <div class="callout thm"><div class="lbl">Propriedade — Comutatividade</div>
  <p>Para todos \(x,y\in\mathbb{F}^n\): \(x+y=y+x\). A soma herda a comutatividade da adição em \(\mathbb{F}\).</p></div>
  <h2>Conjugado e módulo</h2>
  <p>O conjugado de \(z=a+bi\) é \(\bar z=a-bi\); o módulo é \(|z|=\sqrt{a^2+b^2}=\sqrt{z\bar z}\).</p>`,
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
print("x+y == y+x ?", np.array_equal(x + y, y + x))`},
 {code:"1B",id:"01B",nb:"01B_definition_of_vector_space.ipynb",title:"Definição de espaço vetorial",en:"Definition of Vector Space",pages:"12–16",
  tags:["Axiomas","Vetor zero","Inverso aditivo"],
  body:R`<p>Um espaço vetorial abstrai as propriedades de \(\mathbb{F}^n\). É um conjunto \(V\) com uma adição e uma multiplicação por escalar satisfazendo oito axiomas.</p>
  <div class="callout def"><div class="lbl">Definição — Espaço vetorial</div>
  <p>\(V\) sobre \(\mathbb{F}\) satisfaz: comutatividade, associatividade, existência de vetor nulo \(0\), inverso aditivo, identidade multiplicativa \(1v=v\), e distributividades:
  \[a(u+v)=au+av,\qquad (a+b)v=av+bv.\]</p></div>
  <div class="callout thm"><div class="lbl">Teorema — Unicidade do zero e do inverso</div>
  <p>O vetor nulo é único, e cada \(v\in V\) possui um único inverso aditivo \(-v\). Além disso \(0v=0\) e \((-1)v=-v\).</p></div>
  <p>Exemplos: \(\mathbb{F}^n\), o espaço \(\mathbb{F}^\infty\) de sequências, e \(\mathbb{F}^S\) das funções \(S\to\mathbb{F}\) — em particular os polinômios \(\mathcal{P}(\mathbb{F})\).</p>`,
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
  body:R`<p>Um subconjunto \(U\subseteq V\) é um <b>subespaço</b> se é ele mesmo um espaço vetorial com as operações de \(V\).</p>
  <div class="callout def"><div class="lbl">Critério de subespaço</div>
  <p>\(U\subseteq V\) é subespaço \(\iff\) contém \(0\), é fechado sob soma e fechado sob multiplicação por escalar.</p></div>
  <p>A <b>soma</b> de subespaços \(U_1+\dots+U_m=\{u_1+\dots+u_m: u_j\in U_j\}\) é o menor subespaço que contém todos eles.</p>
  <div class="callout thm"><div class="lbl">Teorema — Soma direta</div>
  <p>\(U_1+\dots+U_m\) é <b>soma direta</b> \(U_1\oplus\dots\oplus U_m\) sse cada elemento se escreve de modo único; equivalentemente, a única forma de escrever \(0\) é com todos os \(u_j=0\). Para dois subespaços: \(U\oplus W \iff U\cap W=\{0\}\).</p></div>`,
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
print("U ∩ W = {0}: dim(U)+dim(W)=3 = dim(R^3) ✓")`}]},

/* ============================ CAPÍTULO 2 ============================ */
{num:2,id:"cap02",title:"Finite-Dimensional Vector Spaces",titlePt:"Espaços de Dimensão Finita",pages:"27–48",dir:"cap02_finite_dimensional",
 sections:[
 {code:"2A",id:"02A",nb:"02A_span_and_linear_independence.ipynb",title:"Geradores e independência linear",en:"Span and Linear Independence",pages:"28–37",
  tags:["Span","Combinação linear","Independência"],
  body:R`<p>Uma <b>combinação linear</b> de \(v_1,\dots,v_m\) é \(a_1v_1+\dots+a_mv_m\). O <b>span</b> é o conjunto de todas elas — o menor subespaço contendo esses vetores.</p>
  <div class="callout def"><div class="lbl">Independência linear</div>
  <p>\(v_1,\dots,v_m\) são linearmente independentes se
  \[a_1v_1+\dots+a_mv_m=0 \implies a_1=\dots=a_m=0.\]
  Caso contrário, são linearmente dependentes.</p></div>
  <div class="callout thm"><div class="lbl">Lema da dependência linear</div>
  <p>Num sistema dependente existe \(v_j\) no span dos anteriores; removê-lo não altera o span.</p></div>
  <div class="callout thm"><div class="lbl">Teorema fundamental da contagem</div>
  <p>O comprimento de qualquer lista linearmente independente \(\le\) comprimento de qualquer lista geradora.</p></div>`,
  py:R`import numpy as np

V = np.array([[1,0,1],
              [0,1,1],
              [1,1,2.]]).T   # colunas = vetores
r = np.linalg.matrix_rank(V)
print("posto:", r, "| nº de vetores:", V.shape[1])
print("dependentes" if r < V.shape[1] else "independentes")
# terceiro = soma dos dois primeiros -> dependência linear`},
 {code:"2B",id:"02B",nb:"02B_bases.ipynb",title:"Bases",en:"Bases",pages:"39–42",
  tags:["Base","Coordenadas"],
  body:R`<p>Uma <b>base</b> de \(V\) é uma lista linearmente independente que gera \(V\).</p>
  <div class="callout thm"><div class="lbl">Critério de base</div>
  <p>\(v_1,\dots,v_n\) é base \(\iff\) todo \(v\in V\) se escreve de forma <b>única</b> como \(v=a_1v_1+\dots+a_nv_n\).</p></div>
  <div class="callout thm"><div class="lbl">Teoremas de extensão e redução</div>
  <p>Toda lista geradora pode ser reduzida a uma base; toda lista independente pode ser estendida a uma base. Logo todo espaço de dimensão finita possui base.</p></div>`,
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
  body:R`<p>A <b>dimensão</b> \(\dim V\) é o comprimento de qualquer base — bem definida, pois todas têm o mesmo tamanho.</p>
  <div class="callout thm"><div class="lbl">Fórmula da dimensão da soma</div>
  <p>\[\dim(U+W)=\dim U+\dim W-\dim(U\cap W).\]</p></div>
  <p>Consequências: se \(\dim V=n\), toda lista independente de \(n\) vetores é base, e toda lista geradora de \(n\) vetores é base.</p>`,
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
  body:R`<p>Uma aplicação \(T:V\to W\) é <b>linear</b> se \(T(u+v)=Tu+Tv\) e \(T(\lambda v)=\lambda Tv\).</p>
  <div class="callout def"><div class="lbl">\(\mathcal{L}(V,W)\)</div>
  <p>O conjunto das aplicações lineares de \(V\) em \(W\) é ele mesmo um espaço vetorial com soma \((S+T)v=Sv+Tv\) e escalar \((\lambda T)v=\lambda(Tv)\).</p></div>
  <div class="callout thm"><div class="lbl">Lema — determinação por uma base</div>
  <p>Dada base \(v_1,\dots,v_n\) de \(V\) e vetores \(w_1,\dots,w_n\in W\), existe uma única \(T\in\mathcal{L}(V,W)\) com \(Tv_j=w_j\).</p></div>`,
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
  body:R`<p>O <b>núcleo</b> \(\operatorname{null}T=\{v: Tv=0\}\) e a <b>imagem</b> \(\operatorname{range}T=\{Tv: v\in V\}\) são subespaços.</p>
  <div class="callout thm"><div class="lbl">Teorema Fundamental das Aplicações Lineares</div>
  <p>Se \(V\) tem dimensão finita e \(T\in\mathcal{L}(V,W)\):
  \[\dim V=\dim\operatorname{null}T+\dim\operatorname{range}T.\]</p></div>
  <ul><li>\(T\) injetiva \(\iff \operatorname{null}T=\{0\}\).</li>
  <li>Se \(\dim V>\dim W\), nenhuma \(T\) é injetiva.</li>
  <li>Se \(\dim V<\dim W\), nenhuma \(T\) é sobrejetiva.</li></ul>`,
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
  body:R`<p>Fixadas bases, cada \(T\in\mathcal{L}(V,W)\) tem uma <b>matriz</b> \(\mathcal{M}(T)\): a \(j\)-ésima coluna são as coordenadas de \(Tv_j\).</p>
  <div class="callout def"><div class="lbl">Produto de matrizes</div>
  <p>\((AC)_{ij}=\sum_{k}A_{ik}C_{kj}\). Foi definido exatamente para que \(\mathcal{M}(ST)=\mathcal{M}(S)\,\mathcal{M}(T)\).</p></div>
  <p>A adição de aplicações corresponde à soma de matrizes, e a composição corresponde ao produto — dando isomorfismo \(\mathcal{L}(V,W)\cong \mathbb{F}^{m\times n}\).</p>`,
  py:R`import numpy as np

# M(ST) = M(S) M(T)
S = np.array([[1,2],[0,1.]])
T = np.array([[2,0],[1,3.]])
print("M(S)M(T):\n", S @ T)

# Coluna j da matriz = imagem do j-ésimo vetor da base
e1, e2 = np.array([1.,0]), np.array([0.,1])
print("T e1:", T@e1, " (1ª coluna)")
print("T e2:", T@e2, " (2ª coluna)")`},
 {code:"3D",id:"03D",nb:"03D_invertibility_and_isomorphisms.ipynb",title:"Invertibilidade e isomorfismos",en:"Invertibility and Isomorphisms",pages:"82–93",
  tags:["Invertível","Isomorfismo","Operador"],
  body:R`<p>\(T\) é <b>invertível</b> se existe \(S\) com \(ST=I\) e \(TS=I\). Um isomorfismo é uma aplicação linear invertível; \(V\cong W\) sse existe isomorfismo entre eles.</p>
  <div class="callout thm"><div class="lbl">Teorema</div>
  <p>Espaços de dimensão finita são isomorfos \(\iff\) têm a mesma dimensão. Para um <b>operador</b> \(T\in\mathcal{L}(V)\) com \(\dim V<\infty\): injetivo \(\iff\) sobrejetivo \(\iff\) invertível.</p></div>`,
  py:R`import numpy as np

A = np.array([[2,1],[1,1.]])
print("det =", np.linalg.det(A))          # ≠ 0 => invertível
Ainv = np.linalg.inv(A)
print("A·A⁻¹ = I ?", np.allclose(A @ Ainv, np.eye(2)))

# Operador em dim finita: injetivo <=> sobrejetivo <=> invertível
print("posto =", np.linalg.matrix_rank(A), "= dim => bijetivo")`},
 {code:"3E",id:"03E",nb:"03E_products_and_quotients.ipynb",title:"Produtos e quocientes",en:"Products and Quotients",pages:"96–103",
  tags:["Produto","Espaço quociente","Coset"],
  body:R`<p>O <b>produto</b> \(V_1\times\dots\times V_m\) tem operações coordenada a coordenada e \(\dim=\sum\dim V_j\).</p>
  <div class="callout def"><div class="lbl">Espaço quociente</div>
  <p>Para subespaço \(U\subseteq V\), o coset \(v+U=\{v+u:u\in U\}\). O quociente \(V/U\) é o conjunto dos cosets, com
  \[\dim(V/U)=\dim V-\dim U.\]</p></div>`,
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
  body:R`<p>Um <b>funcional linear</b> é \(\varphi:V\to\mathbb{F}\) linear. O <b>espaço dual</b> \(V'=\mathcal{L}(V,\mathbb{F})\), com \(\dim V'=\dim V\).</p>
  <p>A base dual \(\varphi_1,\dots,\varphi_n\) satisfaz \(\varphi_i(v_j)=\delta_{ij}\). O <b>dual</b> de \(T\) é \(T'(\varphi)=\varphi\circ T\); sua matriz é a <b>transposta</b>.</p>
  <div class="callout thm"><div class="lbl">Teorema</div>
  <p>\(\dim\operatorname{range}T=\dim\operatorname{range}T'\): o <b>posto por colunas</b> = <b>posto por linhas</b>.</p></div>`,
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
