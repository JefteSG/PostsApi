  <h1>API de Posts de Jogos</h1>

  <p>Esta é uma API desenvolvida em Node.js que fornece informações sobre jogos, como o nome, uma breve descrição, uma foto e um ID. Essa API foi criada para ser consumida por um projeto de site que exibe essas informações.</p>
  <h2>Exemplo de Resposta</h2>

  <p>A seguir, está um exemplo de resposta da API contendo informações sobre dois jogos:</p>

  <pre>
    <code>
      {
        "userId": 1,
        "id": 2,
        "title": "God of War",
        "body": "God of War é um jogo de ação e aventura, onde você acompanha a vida mortal de Kratos enquanto ele tanta sobreviver. Aqui, Kratos volta ser pai e mentor do próprio filho Atreus. O jogador poderá controlar os dois personagens, enquanto viaja pelo reino Nórdico, enfrentando Deuses e monstros da mitologia viking.",
        "photo": "https://i.pinimg.com/736x/d4/5e/72/d45e7239142a2b438b6407f2e137d9e6.jpg"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "Hades",
        "body": "Hades é um roguelike que possui elementos de ação e RPG. Neste game, o jogador irá controlar Zargreus, filho do Deus dos mortos Hades, que possui como objetivo sair do submundo. Com um estilo de combate bastante dinâmico, o jogo te ensina da pior maneira “aprenda morrendo” a passar das fases, sem ser frustrante.",
        "photo": "https://i.insider.com/6079bce744f45400192071de"
      }
    </code>
  </pre>

  <h2>Recursos Disponíveis</h2>

  <p>A API oferece os seguintes recursos:</p>

  <ul>
    <li>
      <strong>Obter todos os posts de jogos</strong>
      <br>
      <code>GET <a href="https://posts-api-zeta.vercel.app/posts"> /posts</a></code>
      <br>
      Este endpoint retorna todos os posts de jogos disponíveis.
    </li>
  </ul>

  <h2>Tecnologias Utilizadas</h2>

  <p>
    <strong>Node.js:</strong> O servidor da API foi desenvolvido em Node.js para lidar com as requisições e respostas.
    <br>
    <strong>React:</strong> O projeto que consome essa API foi desenvolvido utilizando a biblioteca React para a criação do site.
  </p>

  <h2>Como Executar Localmente</h2>

  <p>Para executar esta API localmente, siga as etapas abaixo:</p>

  <ol>
    <li>Clone este repositório em sua máquina local.</li>
    <li>Certifique-se de ter o Node.js instalado.</li>
    <li>No diretório do projeto, execute o seguinte comando para instalar as dependências:</li>
  </ol>

  <pre><code>npm install</code></pre>

  <ol start="4">
    <li>Em seguida, inicie o servidor da API com o seguinte comando:</li>
  </ol>

  <pre><code>npm start</code></pre>

  <p>Agora, a API estará disponível em <a href="http://localhost:3000/api/posts">http://localhost:3000/api/posts</a>.</p>

  <h2>Contribuição</h2>

  <p>Contribuições para melhorias deste projeto são bem-vindas. Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma issue ou enviar um pull request.</p>
