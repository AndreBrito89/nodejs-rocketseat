# API de CRUD de Vídeos

Esta é uma API simples para criar, ler, atualizar e excluir vídeos. Ela permite que você gerencie informações de vídeo, incluindo título, descrição e URL.
Projeto original: https://www.youtube.com/watch?v=hHM-hr9q4mo&t=4504s
## Recursos

A API oferece as seguintes operações de CRUD:

- **Listar Vídeos**: Obtém a lista de todos os vídeos.

- **Obter um Vídeo**: Obtém detalhes de um vídeo específico com base no seu ID.

- **Criar um Vídeo**: Adiciona um novo vídeo à lista de vídeos disponíveis.

- **Atualizar um Vídeo**: Atualiza as informações de um vídeo existente.

- **Excluir um Vídeo**: Remove um vídeo com base no seu ID.

## Endpoints

- **Listar Vídeos**
  - Método: GET
  - URL: `/videos`

- **Obter um Vídeo**
  - Método: GET
  - URL: `/videos/{id}`

- **Criar um Vídeo**
  - Método: POST
  - URL: `/videos`
  - Corpo da solicitação (JSON):
    ```json
    {
      "title": "Título do Vídeo",
      "description": "Descrição do Vídeo",
      "url": "URL do Vídeo"
    }
    ```

- **Atualizar um Vídeo**
  - Método: PUT
  - URL: `/videos/{id}`
  - Corpo da solicitação (JSON):
    ```json
    {
      "title": "Novo Título do Vídeo",
      "description": "Nova Descrição do Vídeo",
      "url": "Nova URL do Vídeo"
    }
    ```

- **Excluir um Vídeo**
  - Método: DELETE
  - URL: `/videos/{id}`

## Exemplos de Uso

### Listar Vídeos

