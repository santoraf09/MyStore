# MyStore - Restaurante Online

**MyStore** é um site desenvolvido para um restaurante, simulando a solicitação de um cliente. Ele busca oferecer aos usuários uma experiência intuitiva e atrativa, permitindo explorar o menu e produtos com facilidade enquanto destaca a identidade do restaurante.

## 🌟 Funcionalidades

- **Navegação Interativa**:
  - Menu com links para diferentes seções (Home, Produtos e Sobre).
- **Exibição de Produtos**:
  - Cartões de produto com:
    - Nome, preço e imagem.
    - Botão "Adicionar ao Carrinho".
- **Design Responsivo**:
  - Interface adaptada para dispositivos móveis e desktops.
- **Estilização Inicial**:
  - Cabeçalho e rodapé estilizados para manter uma identidade visual consistente.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces dinâmicas.
- **CSS**: Para estilização e responsividade.
- **React-Scripts**: Gerenciamento e configuração do ambiente React.

## 📆 Setup do Projeto

Siga estas etapas para rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/santoraf09/MyStore.git
   cd mystore


Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

npm start

Acesse o projeto no navegador:

https://mystore-blue-two.vercel.app/

🌐 Deploy
O projeto está hospedado no Vercel e pode ser acessado no link abaixo:

MyStore Online

O processo de deploy foi realizado utilizando a integração do repositório GitHub com o Vercel. A cada commit enviado para o branch principal, o Vercel automaticamente constrói e publica a versão mais recente do site.

## 📂 Estrutura do Projeto

```plaintext
mystore/
├── public/                 # Arquivos públicos estáticos
├── src/                    # Código-fonte principal
│   ├── assets/             # Recursos visuais (imagens, etc.)
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Header.js       # Cabeçalho
│   │   ├── Footer.js       # Rodapé
│   │   ├── ProductCard.js  # Cartão de produto
│   │   └── ProductList.js  # Lista de produtos
│   ├── App.js              # Componente principal
│   └── index.js            # Entrada do aplicativo
├── .gitignore              # Arquivos ignorados pelo Git
├── package.json            # Dependências e scripts
└── README.md               # Documentação do projeto



🛠️ Problemas Conhecidos
Funcionalidades como carrinho de compras e integração com APIs ainda não foram implementadas. Planeja-se implementar a integração com uma API REST para gerenciar os pedidos e a conexão com um gateway de pagamento como Stripe ou PayPal.
Design ainda em fase inicial para melhorias futuras, como personalização de temas e melhorias de acessibilidade para garantir uma experiência mais inclusiva.
📄 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

✉️ Contato
Rafael Santiago
E-mail: [rafaelrsantiago@hotmail.com](mailto:rafaelrsantiago@hotmail.com)
GitHub: santoraf09
Deploy: https://mystore-blue-two.vercel.app/

