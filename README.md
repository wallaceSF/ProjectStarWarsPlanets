# Star Wars Planets
Uma API Rest com a capacidade de retornar os dados dos planetas inseridos manualmente.

## Levantando ambiente
Antes de tudo tenha instalado em sua máquina o `npm`, `nodejs` e `mongodb`.

Após o processo acima.
Entre na raiz do projeto e instale as dependências  com `npm install`, e em seguida, assim que finalizar execute o comando `npm start`.

OBS: dependendo das condições da conexão e de sua máquina, esse processo pode levar alguns minutos

## Acessando o projeto
Para acessar entre na barra de endereço com essa url: `http://localhost:4000`, porém você deve se certificar que a porta(4000) não está sendo utilizada.

## Api's
| EndPoints                    | Tipo   | Descrição                               |
| ---------------------------- | ------ | --------------------------------------- | 
| `/planet`                    |`post`  | Cria um novo registro.                  |
| `/plant/:id`                 |`delete`| apaga um registro do planeta pelo id.   |
| `/planet/:id`                |`get`   | retorna um planeta cadastrado pelo id.  |
| `/planet/find-by-name/:name` |`get`   | retorna um planeta cadastrado pelo nome.|
| `/planet`                    |`get`   | retorna todos os planetas cadastrados.  |

## Exemplos - Curl

##POST

Adicionar mais um novo registro de planeta :

    curl -X POST \
      http://localhost:4000/planet \
      -H 'Content-Type: application/json' \      
      -d '{
        "nome": "Coruscant",
        "clima": "temperate",
        "terreno": "cityscape, mountains"
    }'

##GET
Retorna um planeta cadastrado pelo id

    curl -X GET \
      http://localhost:4000/planet/5cc5d8c9ca633e4374814ecf \  
      -H 'cache-Control: no-cache'      

Retorna um planeta cadastrado pelo nome.
  
    curl -X GET \
      http://localhost:4000/planet/find-by-name/Hoth \
      -H 'cache-control: no-cache'

Retorna todos os planetas cadastrados.
 
    curl -X GET \
      http://localhost:4000/planet \
      -H 'cache-control: no-cache'

##DELETE
Apaga um registro do planeta pelo id.
    
    curl -X DELETE \
      http://localhost:4000/planet/5cc5c0d1039dee3b6d87dab2 \
      -H 'cache-control: no-cache'



## Dúvidas
Qualquer dúvida entre em contato com wallace.sf87@gmail.com
