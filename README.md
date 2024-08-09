
# EcoViva

A comunicação e a colaboração entre moradores e voluntários para promover a preservação do meio ambiente e a educação sobre sustentabilidade são muitas vezes ineficientes e fragmentadas. Moradores enfrentam dificuldades em reportar ocorrências ambientais, compartilhar ideias ou fazer denúncias, enquanto voluntários encontram obstáculos para engajar a comunidade em atividades educativas e de preservação ambiental.

O sistema proposto é uma plataforma digital que facilita a comunicação entre moradores e voluntários com o objetivo de promover a preservação do meio ambiente e a educação sobre sustentabilidade.

A plataforma será composta por **três seções principais**:

**1 -** `Página Inicial`: Moradores poderão postar ideias, ocorrências ou denúncias relacionadas ao meio ambiente. Voluntários poderão acessar essas postagens, entrar em contato com os moradores para oferecer suporte ou esclarecimentos e marcar as publicações como respondidas ou vistas.

**2 -** `Eventos e Workshops`: Uma seção onde voluntários podem divulgar eventos e workshops voltados para a educação ambiental e a promoção de boas práticas de sustentabilidade.

**3 -** `Dicas e Publicações`: Uma página mantida pelos voluntários, onde serão compartilhadas dicas práticas e publicações sobre sustentabilidade, como orientações sobre reciclagem, como economizar água, jardinagem sustentável e outras boas práticas ambientais. 

A nossa equipe escolheu utilizar `HTML`, `CSS` e `JavaScript`, utilizando os frameworks `React` para moldar o front-end e `NodeJS` para o back-end. O banco de dados escolhido foi o `SQLite3`. Escolhemos essas tecnologias pensando no usuário que precisará apenas de um dispositivo com acesso a internet e um navegador, tornando o nosso sistema mais acessível e mais dinâmico. Utilizamos o NodeJS com o SQLite3 devido a facilidade do uso mas ainda sim oferecendo confiabilidade e eficiência, onde por exemplo o SQLite3 rodará localmente aumentando a eficiência na manipulação de informações e armazenamento dos dados.



## Documentação da API

#### Retorna todos os itens

```http
  GET /eventos
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `N/A` | `N/A` | Retorna todos os eventos criados |

#### Cadastra um item

```http
  POST /eventos
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `JSON`      | `String` | Cadastra um evento de acordo com os dados do body da requisição. |

#### Atualiza um item

```http
  PUT /eventos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `JSON`      | `String` | Atualiza um evento de acordo com os dados do body da requisição e o ID dos parâmetros. |

#### Exclui um item

```http
  DELETE /eventos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `JSON`      | `String` | Exclui um evento de acordo com o ID passado nos parâmetros. |

