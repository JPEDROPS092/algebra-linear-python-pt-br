# Site — Álgebra Linear com Python (IFAM)

Site estático (HTML + CSS + JS puro, sem build) que apresenta a teoria em **LaTeX**
e as **demonstrações em Python** de cada seção do livro *Linear Algebra Done Right* (Axler).

Bibliotecas externas carregadas por **CDN** (MathJax e highlight.js), então basta servir
os arquivos — ideal para **GitHub Pages**.

```
docs/
├── index.html
└── assets/
    ├── img/IFAM.png        # logo
    ├── css/style.css
    └── js/
        ├── content.js      # teoria + código de todas as seções
        └── main.js         # navegação, busca, progresso
```

## Rodar localmente

Abra um terminal **dentro da pasta `docs/`** e suba um servidor estático. Escolha uma opção:

### Python (já vem no sistema)

```bash
cd docs
python -m http.server 8000
```

Depois acesse: **http://localhost:8000**

### Node (se preferir)

```bash
cd docs
npx serve .          # ou: npx http-server -p 8000
```

### VS Code

Instale a extensão **Live Server**, clique com o botão direito em `index.html`
→ *Open with Live Server*.

> Observação: abrir o `index.html` com duplo-clique (`file://`) **não funciona bem**,
> porque o `content.js`/`main.js` e os CDNs precisam de um servidor HTTP.
> Sempre use um dos comandos acima.

Para parar o servidor: `Ctrl + C` no terminal.

## Publicar no GitHub Pages

1. Faça commit da pasta `docs/` no branch `main`.
2. No repositório: **Settings → Pages**.
3. Em *Source*, escolha **Deploy from a branch** → Branch **`main`** → pasta **`/docs`** → *Save*.
4. Aguarde ~1 min; o site fica em `https://jpedrops092.github.io/algebra-linear-python-pt-br/`.

Os links do GitHub e dos notebooks (GitHub + Colab) já apontam para `JPEDROPS092/algebra-linear-python-pt-br` (`index.html` e `main.js`).
