```javascript
      ____                 __
     /\  _`\              /\ \__
   __\ \ \L\ \___     ____\ \ ,_\   ____
 /'__`\ \ ,__/ __`\  /',__\\ \ \/  /',__\
/\  __/\ \ \/\ \L\ \/\__, `\\ \ \_/\__, `\
\ \____\\ \_\ \____/\/\____/ \ \__\/\____/
 \/____/ \/_/\/___/  \/___/   \/__/\/___/

          _______________________
          ___    |__  __ \___  _/
          __  /| |_  /_/ /__  /
          _  ___ |  ____/__/ /
          /_/  |_/_/     /___/
```

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1.svg?style=for-the-badge&logo=Zod&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Pug](https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

# API ePosts

A ePosts API é uma api de leitura de postagens, categorias, tags e partidas relacionadas a e-sports. A api consome os dados da api pública do worpress, conectada a um projeto de mesmo nome da plataforma, e da api pandascore para consulta de dados de partidas agendadas e ao vivo. Para vizualizar a documentação completa, acesse [https://eposts-api.vercel.app/swagger](https://eposts-api.vercel.app/swagger).

Abaixo estão os endpoints disponíveis:

## 1. **GET /api/tags**

- Retorna uma lista de todas as tags.
- Exemplo de resposta:
  ```json
  {
    "found": 0,
    "tags": [
      {
        "ID": 0,
        "name": "string",
        "slug": "string",
        "description": "string",
        "post_count": 0,
        "feed_url": "string",
        "meta": {
          "links": {
            "self": "string",
            "help": "string",
            "site": "string"
          }
        }
      }
    ]
  }
  ```

## 2. **GET /api/tags/{slug}**

- Retorna detalhes de uma tag específica com base no `slug`.
- Parâmetros de rota:
  - `slug`: Slug da tag.
- Exemplo de resposta:
  ```json
  {
    "ID": 0,
    "name": "string",
    "slug": "string",
    "description": "string",
    "post_count": 0,
    "feed_url": "string",
    "meta": {
      "links": {
        "self": "string",
        "help": "string",
        "site": "string"
      }
    }
  }
  ```

## 3. **GET /api/posts/{categorySlug}**

- Retorna uma lista de postagens com base no `categorySlug`.
- Parâmetros de rota:
  - `categorySlug`: Slug da categoria.
- Exemplo de resposta:
  ```json
  {
    "found": 0,
    "posts": [
      {
        "ID": 0,
        "site_ID": 0,
        "author": {
          "ID": 0,
          "login": "string",
          "email": true,
          "name": "string",
          "first_name": "string",
          "last_name": "string",
          "nice_name": "string",
          "URL": "string",
          "avatar_URL": "string",
          "profile_URL": "string",
          "site_ID": 0
        },
        "date": "string",
        "modified": "string",
        "title": "string",
        "URL": "string",
        "short_URL": "string",
        "content": "string",
        "excerpt": "string",
        "slug": "string",
        "guid": "string",
        "status": "string",
        "sticky": true,
        "password": "string",
        "parent": true,
        "type": "string",
        "discussion": {
          "comments_open": true,
          "comment_status": "string",
          "pings_open": true,
          "ping_status": "string",
          "comment_count": 0
        },
        "likes_enabled": true,
        "sharing_enabled": true,
        "like_count": 0,
        "i_like": true,
        "is_reblogged": true,
        "is_following": true,
        "global_ID": "string",
        "featured_image": "string",
        "post_thumbnail": "null",
        "format": "string",
        "geo": true,
        "menu_order": 0,
        "page_template": "string",
        "publicize_URLs": ["string"],
        "terms": {
          "category": "string",
          "post_tag": {},
          "post_format": {},
          "mentions": {}
        },
        "tags": {},
        "categories": "string",
        "attachments": {},
        "attachment_count": 0,
        "metadata": ["string"],
        "meta": {
          "links": {
            "self": "string",
            "help": "string",
            "site": "string",
            "replies": "string",
            "likes": "string"
          }
        },
        "capabilities": {
          "publish_post": true,
          "delete_post": true,
          "edit_post": true
        },
        "other_URLs": {}
      }
    ],
    "meta": {
      "links": {
        "counts": "string"
      },
      "wpcom": true
    }
  }
  ```

## 4. **GET /api/posts/tag/{slug}**

- Retorna uma lista de postagens com base na tag.
- Parâmetros de rota:
  - `slug`: Slug da tag.
- Exemplo de resposta:
  ```json
  {
    "found": 0,
    "posts": [
      {
        "ID": 0,
        "site_ID": 0,
        "author": {
          "ID": 0,
          "login": "string",
          "email": true,
          "name": "string",
          "first_name": "string",
          "last_name": "string",
          "nice_name": "string",
          "URL": "string",
          "avatar_URL": "string",
          "profile_URL": "string",
          "site_ID": 0
        },
        "date": "string",
        "modified": "string",
        "title": "string",
        "URL": "string",
        "short_URL": "string",
        "content": "string",
        "excerpt": "string",
        "slug": "string",
        "guid": "string",
        "status": "string",
        "sticky": true,
        "password": "string",
        "parent": true,
        "type": "string",
        "discussion": {
          "comments_open": true,
          "comment_status": "string",
          "pings_open": true,
          "ping_status": "string",
          "comment_count": 0
        },
        "likes_enabled": true,
        "sharing_enabled": true,
        "like_count": 0,
        "i_like": true,
        "is_reblogged": true,
        "is_following": true,
        "global_ID": "string",
        "featured_image": "string",
        "post_thumbnail": "null",
        "format": "string",
        "geo": true,
        "menu_order": 0,
        "page_template": "string",
        "publicize_URLs": ["string"],
        "terms": {
          "category": "string",
          "post_tag": {},
          "post_format": {},
          "mentions": {}
        },
        "tags": {},
        "categories": "string",
        "attachments": {},
        "attachment_count": 0,
        "metadata": ["string"],
        "meta": {
          "links": {
            "self": "string",
            "help": "string",
            "site": "string",
            "replies": "string",
            "likes": "string"
          }
        },
        "capabilities": {
          "publish_post": true,
          "delete_post": true,
          "edit_post": true
        },
        "other_URLs": {}
      }
    ],
    "meta": {
      "links": {
        "counts": "string"
      },
      "wpcom": true
    }
  }
  ```

## 5. **GET /api/posts/post/{slug}**

- Retorna detalhes de uma postagem específica com base no `slug`.
- Parâmetros de rota:
  - `slug`: Slug da postagem.
- Exemplo de resposta:
  ```json
  {
    "ID": 0,
    "site_ID": 0,
    "author": {
      "ID": 0,
      "login": "string",
      "email": true,
      "name": "string",
      "first_name": "string",
      "last_name": "string",
      "nice_name": "string",
      "URL": "string",
      "avatar_URL": "string",
      "profile_URL": "string",
      "site_ID": 0
    },
    "date": "string",
    "modified": "string",
    "title": "string",
    "URL": "string",
    "short_URL": "string",
    "content": "string",
    "excerpt": "string",
    "slug": "string",
    "guid": "string",
    "status": "string",
    "sticky": true,
    "password": "string",
    "parent": true,
    "type": "string",
    "discussion": {
      "comments_open": true,
      "comment_status": "string",
      "pings_open": true,
      "ping_status": "string",
      "comment_count": 0
    },
    "likes_enabled": true,
    "sharing_enabled": true,
    "like_count": 0,
    "i_like": true,
    "is_reblogged": true,
    "is_following": true,
    "global_ID": "string",
    "featured_image": "string",
    "post_thumbnail": "null",
    "format": "string",
    "geo": true,
    "menu_order": 0,
    "page_template": "string",
    "publicize_URLs": ["string"],
    "terms": {
      "category": "string",
      "post_tag": {},
      "post_format": {},
      "mentions": {}
    },
    "tags": {},
    "categories": "string",
    "attachments": {},
    "attachment_count": 0,
    "metadata": ["string"],
    "meta": {
      "links": {
        "self": "string",
        "help": "string",
        "site": "string",
        "replies": "string",
        "likes": "string"
      }
    },
    "capabilities": {
      "publish_post": true,
      "delete_post": true,
      "edit_post": true
    },
    "other_URLs": {}
  }
  ```

## 6. **GET /api/category/{slug}**

- Retorna detalhes de uma categoria específica com base no `slug`.
- Parâmetros de rota:
  - `slug`: Slug da categoria.
- Exemplo de resposta:

  ```json
  {
    "ID": 0,
    "name": "string",
    "slug": "string",
    "description": "string",
    "post_count": 0,
    "feed_url": "string",
    "parent": 0,
    "meta": {
      "links": {
        "self": "string",
        "help": "string",
        "site": "string"
      }
    }
  }
  ```

  ## 7. **GET /api/matches/upcoming**

- Retorna uma lista de partidas agendadas.
- Parâmetros de busca:
  - `page`: Página atual da lista.
  - `per_page`: Quantidade de itens por página.
  - `filter`: Termos de filtro.
  - `filter_type`: Tipo do filtro a ser aplicado.
- Exemplo de resposta:

  ```json
  [
    {
      "original_scheduled_at": "string",
      "videogame_title": "null",
      "videogame": {
        "id": 0,
        "name": "string",
        "slug": "string"
      },
      "league": {
        "id": 0,
        "image_url": "string",
        "modified_at": "string",
        "name": "string",
        "slug": "string",
        "url": "null"
      },
      "status": "string",
      "modified_at": "string",
      "tournament": {
        "begin_at": "string",
        "detailed_stats": true,
        "end_at": "string",
        "has_bracket": true,
        "id": 0,
        "league_id": 0,
        "live_supported": true,
        "modified_at": "string",
        "name": "string",
        "prizepool": "null",
        "serie_id": 0,
        "slug": "string",
        "tier": "string",
        "winner_id": "null",
        "winner_type": "string"
      },
      "scheduled_at": "string",
      "live": {
        "opens_at": "null",
        "supported": true,
        "url": "null"
      },
      "match_type": "string",
      "id": 0,
      "name": "string",
      "winner_id": "null",
      "detailed_stats": true,
      "winner_type": "string",
      "begin_at": "string",
      "game_advantage": "null",
      "end_at": "null",
      "draw": true,
      "rescheduled": true,
      "forfeit": true,
      "serie": {
        "begin_at": "string",
        "end_at": "string",
        "full_name": "string",
        "id": 0,
        "league_id": 0,
        "modified_at": "string",
        "name": "string",
        "season": "null",
        "slug": "string",
        "winner_id": "null",
        "winner_type": "string",
        "year": 0
      },
      "streams_list": [
        {
          "embed_url": "string",
          "language": "string",
          "main": true,
          "official": true,
          "raw_url": "string"
        },
        {
          "embed_url": "null",
          "language": "string",
          "main": true,
          "official": true,
          "raw_url": "string"
        }
      ],
      "results": [
        {
          "score": 0,
          "team_id": 0
        }
      ],
      "number_of_games": 0,
      "games": [
        {
          "begin_at": "string",
          "complete": true,
          "detailed_stats": true,
          "end_at": "string",
          "finished": true,
          "forfeit": true,
          "id": 0,
          "length": 0,
          "match_id": 0,
          "position": 0,
          "status": "string",
          "winner": {
            "id": 0,
            "type": "string"
          },
          "winner_type": "string"
        },
        {
          "begin_at": "string",
          "complete": true,
          "detailed_stats": true,
          "end_at": "null",
          "finished": true,
          "forfeit": true,
          "id": 0,
          "length": "null",
          "match_id": 0,
          "position": 0,
          "status": "string",
          "winner": {
            "id": "null",
            "type": "string"
          },
          "winner_type": "string"
        },
        {
          "begin_at": "null",
          "complete": true,
          "detailed_stats": true,
          "end_at": "null",
          "finished": true,
          "forfeit": true,
          "id": 0,
          "length": "null",
          "match_id": 0,
          "position": 0,
          "status": "string",
          "winner": {
            "id": "null",
            "type": "string"
          },
          "winner_type": "string"
        }
      ],
      "tournament_id": 0,
      "winner": "null",
      "slug": "string",
      "videogame_version": {
        "current": true,
        "name": "string"
      },
      "opponents": [
        {
          "opponent": {
            "acronym": "string",
            "id": 0,
            "image_url": "string",
            "location": "string",
            "modified_at": "string",
            "name": "string",
            "slug": "string"
          },
          "type": "string"
        }
      ],
      "serie_id": 0,
      "league_id": 0
    }
  ]
  ```

  ## 8. **GET /api/matches/running**

- Retorna uma lista de partidas ao vivo.
- Parâmetros de busca:
  - `page`: Página atual da lista.
  - `per_page`: Quantidade de itens por página.
  - `filter`: Termos de filtro.
  - `filter_type`: Tipo do filtro a ser aplicado.
- Exemplo de resposta:

  ```json
  [
    {
      "original_scheduled_at": "string",
      "videogame_title": "null",
      "videogame": {
        "id": 0,
        "name": "string",
        "slug": "string"
      },
      "league": {
        "id": 0,
        "image_url": "string",
        "modified_at": "string",
        "name": "string",
        "slug": "string",
        "url": "null"
      },
      "status": "string",
      "modified_at": "string",
      "tournament": {
        "begin_at": "string",
        "detailed_stats": true,
        "end_at": "string",
        "has_bracket": true,
        "id": 0,
        "league_id": 0,
        "live_supported": true,
        "modified_at": "string",
        "name": "string",
        "prizepool": "null",
        "serie_id": 0,
        "slug": "string",
        "tier": "string",
        "winner_id": "null",
        "winner_type": "string"
      },
      "scheduled_at": "string",
      "live": {
        "opens_at": "null",
        "supported": true,
        "url": "null"
      },
      "match_type": "string",
      "id": 0,
      "name": "string",
      "winner_id": "null",
      "detailed_stats": true,
      "winner_type": "string",
      "begin_at": "string",
      "game_advantage": "null",
      "end_at": "null",
      "draw": true,
      "rescheduled": true,
      "forfeit": true,
      "serie": {
        "begin_at": "string",
        "end_at": "string",
        "full_name": "string",
        "id": 0,
        "league_id": 0,
        "modified_at": "string",
        "name": "string",
        "season": "null",
        "slug": "string",
        "winner_id": "null",
        "winner_type": "string",
        "year": 0
      },
      "streams_list": [
        {
          "embed_url": "string",
          "language": "string",
          "main": true,
          "official": true,
          "raw_url": "string"
        },
        {
          "embed_url": "null",
          "language": "string",
          "main": true,
          "official": true,
          "raw_url": "string"
        }
      ],
      "results": [
        {
          "score": 0,
          "team_id": 0
        }
      ],
      "number_of_games": 0,
      "games": [
        {
          "begin_at": "string",
          "complete": true,
          "detailed_stats": true,
          "end_at": "string",
          "finished": true,
          "forfeit": true,
          "id": 0,
          "length": 0,
          "match_id": 0,
          "position": 0,
          "status": "string",
          "winner": {
            "id": 0,
            "type": "string"
          },
          "winner_type": "string"
        },
        {
          "begin_at": "string",
          "complete": true,
          "detailed_stats": true,
          "end_at": "null",
          "finished": true,
          "forfeit": true,
          "id": 0,
          "length": "null",
          "match_id": 0,
          "position": 0,
          "status": "string",
          "winner": {
            "id": "null",
            "type": "string"
          },
          "winner_type": "string"
        },
        {
          "begin_at": "null",
          "complete": true,
          "detailed_stats": true,
          "end_at": "null",
          "finished": true,
          "forfeit": true,
          "id": 0,
          "length": "null",
          "match_id": 0,
          "position": 0,
          "status": "string",
          "winner": {
            "id": "null",
            "type": "string"
          },
          "winner_type": "string"
        }
      ],
      "tournament_id": 0,
      "winner": "null",
      "slug": "string",
      "videogame_version": {
        "current": true,
        "name": "string"
      },
      "opponents": [
        {
          "opponent": {
            "acronym": "string",
            "id": 0,
            "image_url": "string",
            "location": "string",
            "modified_at": "string",
            "name": "string",
            "slug": "string"
          },
          "type": "string"
        }
      ],
      "serie_id": 0,
      "league_id": 0
    }
  ]
  ```

## Considerações Finais

A api será consumida por uma aplicação web que está em desenvolvimento.
