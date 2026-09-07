# Álgebra Linear com Python

Estudo interativo de Álgebra Linear baseado no livro "Linear Algebra Done Right" (4ª edição, 2024) de Sheldon Axler.

Cada seção do livro foi mapeada para um notebook Jupyter com teoria, código Python, visualizações e exercícios. O objetivo é explorar os conceitos com NumPy, SciPy, SymPy, NetworkX e outras bibliotecas científicas.

[![Python](https://img.shields.io/badge/Python-3.10%2B-blue?logo=python)](https://www.python.org/)
[![Jupyter](https://img.shields.io/badge/Jupyter-Lab-orange?logo=jupyter)](https://jupyter.org/)
[![NumPy](https://img.shields.io/badge/NumPy-1.24%2B-013243?logo=numpy)](https://numpy.org/)
[![SymPy](https://img.shields.io/badge/SymPy-1.12%2B-3B5526?logo=sympy)](https://www.sympy.org/)
[![NetworkX](https://img.shields.io/badge/NetworkX-3.2%2B-1F77B4?logo=networkx)](https://networkx.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Estrutura do Repositório

```text
algebra-linear-python-pt-br/
|
|-- README.md
|-- requirements.txt
|-- .gitignore
|-- LICENSE
|
|-- notebooks/
|   |-- 00_configuracao.ipynb
|   |
|   |-- cap01_vector_spaces/
|   |   |-- 01A_Rn_and_Cn.ipynb
|   |   |-- 01B_definition_of_vector_space.ipynb
|   |   `-- 01C_subspaces.ipynb
|   |
|   |-- cap02_finite_dimensional/
|   |   |-- 02A_span_and_linear_independence.ipynb
|   |   |-- 02B_bases.ipynb
|   |   `-- 02C_dimension.ipynb
|   |
|   |-- cap03_maps/
|   |   |-- 03A_vector_space_of_linear_maps.ipynb
|   |   |-- 03B_null_spaces_and_ranges.ipynb
|   |   |-- 03C_matrices.ipynb
|   |   |-- 03D_invertibility_and_isomorphisms.ipynb
|   |   |-- 03E_products_and_quotients.ipynb
|   |   `-- 03F_duality.ipynb
|   |
|   |-- cap04_polynomials/
|   |   `-- 04_polynomials.ipynb
|   |
|   |-- cap05_eigenvalues/
|   |   |-- 05A_invariant_subspaces.ipynb
|   |   |-- 05B_minimal_polynomial.ipynb
|   |   |-- 05C_upper_triangular_matrices.ipynb
|   |   |-- 05D_diagonalizable_operators.ipynb
|   |   `-- 05E_commuting_operators.ipynb
|   |
|   |-- cap06_inner_product_spaces/
|   |   |-- 06A_inner_products_and_norms.ipynb
|   |   |-- 06B_orthonormal_bases.ipynb
|   |   `-- 06C_orthogonal_complements.ipynb
|   |
|   |-- cap07_operators_inner_product/
|   |   |-- 07A_self_adjoint_and_normal.ipynb
|   |   |-- 07B_spectral_theorem.ipynb
|   |   |-- 07C_positive_operators.ipynb
|   |   |-- 07D_isometries_unitary_factorization.ipynb
|   |   |-- 07E_singular_value_decomposition.ipynb
|   |   `-- 07F_consequences_of_svd.ipynb
|   |
|   |-- cap08_operators_complex/
|   |   |-- 08A_generalized_eigenvectors_nilpotent.ipynb
|   |   |-- 08B_generalized_eigenspace_decomposition.ipynb
|   |   |-- 08C_consequences_and_jordan.ipynb
|   |   `-- 08D_trace.ipynb
|   |
|   `-- cap09_multilinear_determinants/
|       |-- 09A_bilinear_quadratic_forms.ipynb
|       |-- 09B_alternating_multilinear_forms.ipynb
|       |-- 09C_determinants.ipynb
|       `-- 09D_tensor_products.ipynb
|
`-- exercises/
    |-- cap01_exercises.ipynb
    |-- cap02_exercises.ipynb
    |-- cap03_exercises.ipynb
    |-- cap04_exercises.ipynb
    |-- cap05_exercises.ipynb
    |-- cap06_exercises.ipynb
    |-- cap07_exercises.ipynb
    |-- cap08_exercises.ipynb
    `-- cap09_exercises.ipynb
```

## Conteúdo Completo por Capítulo

### Capítulo 1 - Vector Spaces (p. 1-26)

| Notebook | Seção | Tópico | Páginas |
|----------|-------|--------|---------|
| `01A_Rn_and_Cn.ipynb` | 1A | R^n e C^n | 2-10 |
| `01B_definition_of_vector_space.ipynb` | 1B | Definição de espaço vetorial | 12-16 |
| `01C_subspaces.ipynb` | 1C | Subespaços | 18-24 |

### Capítulo 2 - Finite-Dimensional Vector Spaces (p. 27-48)

| Notebook | Seção | Tópico | Páginas |
|----------|-------|--------|---------|
| `02A_span_and_linear_independence.ipynb` | 2A | Geradores e independência linear | 28-37 |
| `02B_bases.ipynb` | 2B | Bases | 39-42 |
| `02C_dimension.ipynb` | 2C | Dimensão | 44-48 |

### Capítulo 3 - Maps (p. 51-115)

| Notebook | Seção | Tópico | Páginas |
|----------|-------|--------|---------|
| `03A_vector_space_of_linear_maps.ipynb` | 3A | Espaço de aplicações lineares | 52-57 |
| `03B_null_spaces_and_ranges.ipynb` | 3B | Núcleo e imagem | 59-66 |
| `03C_matrices.ipynb` | 3C | Matrizes | 69-79 |
| `03D_invertibility_and_isomorphisms.ipynb` | 3D | Invertibilidade e isomorfismos | 82-93 |
| `03E_products_and_quotients.ipynb` | 3E | Produtos e quocientes | 96-103 |
| `03F_duality.ipynb` | 3F | Dualidade | 105-115 |

### Capítulo 4 - Polynomials (p. 119-129)

| Notebook | Seção | Tópico | Páginas |
|----------|-------|--------|---------|
| `04_polynomials.ipynb` | 4 | Polinômios | 119-129 |

### Capítulo 5 - Eigenvalues and Eigenvectors (p. 132-179)

| Notebook | Seção | Tópico | Páginas |
|----------|-------|--------|---------|
| `05A_invariant_subspaces.ipynb` | 5A | Subespaços invariantes | 133-139 |
| `05B_minimal_polynomial.ipynb` | 5B | Polinômio mínimo | 143-150 |
| `05C_upper_triangular_matrices.ipynb` | 5C | Matrizes triangulares superiores | 154-160 |
| `05D_diagonalizable_operators.ipynb` | 5D | Operadores diagonalizáveis | 163-172 |
| `05E_commuting_operators.ipynb` | 5E | Operadores comutantes | 175-179 |

### Capítulo 6 - Inner Product Spaces (p. 181-224)

| Notebook | Seção | Tópico | Páginas |
|----------|-------|--------|---------|
| `06A_inner_products_and_norms.ipynb` | 6A | Produtos internos e normas | 182-191 |
| `06B_orthonormal_bases.ipynb` | 6B | Bases ortonormais | 197-207 |
| `06C_orthogonal_complements.ipynb` | 6C | Complementos ortogonais | 211-224 |

### Capítulo 7 - Operators on Inner Product Spaces (p. 227-294)

| Notebook | Seção | Tópico | Páginas |
|----------|-------|--------|---------|
| `07A_self_adjoint_and_normal.ipynb` | 7A | Operadores auto-adjuntos e normais | 228-239 |
| `07B_spectral_theorem.ipynb` | 7B | Teorema espectral | 243-247 |
| `07C_positive_operators.ipynb` | 7C | Operadores positivos | 251-255 |
| `07D_isometries_unitary_factorization.ipynb` | 7D | Isometrias e fatoração unitária | 258-268 |
| `07E_singular_value_decomposition.ipynb` | 7E | Decomposição em valores singulares | 270-278 |
| `07F_consequences_of_svd.ipynb` | 7F | Consequências da SVD | 280-294 |

### Capítulo 8 - Operators on Complex Vector Spaces (p. 297-330)

| Notebook | Seção | Tópico | Páginas |
|----------|-------|--------|---------|
| `08A_generalized_eigenvectors_nilpotent.ipynb` | 8A | Autovetores generalizados e operadores nilpotentes | 298-306 |
| `08B_generalized_eigenspace_decomposition.ipynb` | 8B | Decomposição em autoespaços generalizados | 308-316 |
| `08C_consequences_and_jordan.ipynb` | 8C | Consequências e forma de Jordan | 319-324 |
| `08D_trace.ipynb` | 8D | Traço | 326-330 |

### Capítulo 9 - Multilinear Algebra and Determinants (p. 332-380)

| Notebook | Seção | Tópico | Páginas |
|----------|-------|--------|---------|
| `09A_bilinear_quadratic_forms.ipynb` | 9A | Formas bilineares e quadráticas | 333-344 |
| `09B_alternating_multilinear_forms.ipynb` | 9B | Formas multilineares alternadas | 346-352 |
| `09C_determinants.ipynb` | 9C | Determinantes | 354-367 |
| `09D_tensor_products.ipynb` | 9D | Produtos tensoriais | 370-380 |

## Como Usar

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/algebra-linear-python-pt-br.git
cd algebra-linear-python-pt-br
```

### 2. Crie um ambiente virtual

```bash
python -m venv .venv
source .venv/bin/activate      # Linux / macOS
.venv\Scripts\activate         # Windows
```

### 3. Instale as dependências

```bash
pip install -r requirements.txt
```

### 4. Inicie o Jupyter Lab

```bash
jupyter lab
```

### 5. Comece pelo notebook `00_configuracao.ipynb`

## Requirements

```txt
# Núcleo
jupyterlab>=4.0.0
notebook>=7.0.0
ipywidgets>=8.0.0

# Álgebra linear e matemática
numpy>=1.24.0
scipy>=1.10.0
sympy>=1.12.0
networkx>=3.2.0
matplotlib>=3.7.0
plotly>=5.14.0

# Visualização
seaborn>=0.12.0
ipympl>=0.9.0

# Utilitários
pandas>=2.0.0
tqdm>=4.65.0
```

Para instalar tudo de uma vez:

```bash
pip install jupyterlab ipywidgets numpy scipy sympy networkx matplotlib plotly seaborn ipympl pandas tqdm
```

## Referências

### Livro principal

- **Axler, Sheldon.** *Linear Algebra Done Right.* 4th edition. Springer, 2024.
- Site oficial: https://linear.axler.net/

### Materiais complementares

- **Hefferon, Jim.** *Linear Algebra.* (grátis) - https://hefferon.net/linearalgebra/
- **Strang, Gilbert.** *Introduction to Linear Algebra.* MIT OCW - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/
- **3Blue1Brown.** *Essence of Linear Algebra.* - https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVVeG-krI70vL
- **UNICAMP.** *Notas de Aula de Álgebra Linear.* - https://www.ime.unicamp.br/~marcos/al/
- **NetworkX.** Documentação - https://networkx.org/documentation/stable/

### Documentação das bibliotecas

- NumPy: https://numpy.org/doc/stable/
- SciPy: https://docs.scipy.org/doc/scipy/
- SymPy: https://docs.sympy.org/latest/index.html
- Matplotlib: https://matplotlib.org/stable/contents.html
- Plotly: https://plotly.com/python/
- NetworkX: https://networkx.org/documentation/stable/

## Progresso do Estudo

| Capítulo | Título | Status |
|----------|--------|--------|
| 1 | Vector Spaces | [ ] Não iniciado |
| 2 | Finite-Dimensional Vector Spaces | [ ] Não iniciado |
| 3 | Maps | [ ] Não iniciado |
| 4 | Polynomials | [ ] Não iniciado |
| 5 | Eigenvalues and Eigenvectors | [ ] Não iniciado |
| 6 | Inner Product Spaces | [ ] Não iniciado |
| 7 | Operators on Inner Product Spaces | [ ] Não iniciado |
| 8 | Operators on Complex Vector Spaces | [ ] Não iniciado |
| 9 | Multilinear Algebra and Determinants | [ ] Não iniciado |

## Licença

Este repositório está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

O livro "Linear Algebra Done Right" é de propriedade de Sheldon Axler e publicado pela Springer. Este repositório é um material de estudo pessoal e não contém cópias do livro.
