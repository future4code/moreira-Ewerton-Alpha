## Resposta

Inline `code`

Indented code

    //Respostas
    
    1-
    a- id VARCHAR(255) PRIMARY KEY - VARCHAR cono string são no máximo 255 caracteres, id único
    - name VARCHAR (255) NOT NULL - ARCHAR cono string são no máximo 255 caracteres, não aceita nulo
    - salary FLOAT NOT NULL - valores numericos não inteiros , não aceita nulo ,sem campo
    birth_date DATE NOT NULL, - respresenta uma data ano mes Dia não nula 
    gender Varch(6),=>  representa  genreo sexual aceita 6 caracteres não nula

    b-showDatabse - INFORMAÇÃO da mina data base 
     -SHOWTABLES  - Informações das tabelas

     Describe nome da tabela - Mostrou todos os Dados de uma tabela
    
    2-
    a-  inseri a gloria peres 
    b- entrada duplicada para chave primaria codeError 1062 impede a criacao do um novo user
    c-error : faltou dois paramentros birth_date, gender data genero respectivamente

     corrigindo : acrescentando  birth_date, gender
    
    d- error : Código do erro: 1364. O campo 'name' não possui um valor padrão
       
      corrigindo:colocar a propiedade nome no parametro 

    e- error : Código do erro: 1292. Valor de data incorreto : '1950' para        coluna 'birth_date' na linha 1 0,188 seg 

    corrigindo : faltava as aspas na data 

    f- 
    c-error : Deu erro era o código  primario 

     corrigindo : o erro é id igual

    d-error : Deu erro era o código  primario 

     corrigindo : o erro é id igual

     e-error : Deu erro era o código  primario 

     corrigindo : o erro é id igual


     3
     -a- retornou todas as atrizes com id diferentes com as devidas informacoes


     b-SELECT salary,name from Actor where name="Tony Ramos" o 
      where se trata da condicional
    
    
    c- SELECT * FROM Actor where gender="invalid";=> todos os resulados como nulo;

    d-SELECT id, name, salary FROM Actor
       WHERE salary <= 500000;
     
    e - error 1054 , nome não foi encontrado no nome da lista

    4- SELECT * FROM Actor
     WHERE (name LIKE "A%" OR name LIKE "J%") AND salary >300000
     
     a- query mostra como rastreiar os atores com ae j que ganham mais de 300.00

     b-SELECT * FROM Actor
     WHERE name NOT LIKE "A%" AND salary > 350000;

     seleciona os atores que não começam com A e é maior 350000

     c- não conseguimos BETEWEN ACREDITO os

     D- SELECT * FROM Actor
    WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE   "%g%" OR name LIKE "%G%") 
     AND salary BETWEEN 350000 AND 900000;

     Betewen - comparação entre dois valores

     5 - crindo tabela filmes 
    a-    
        CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL, 
	synopsis TEXT NOT NULL, 
	release_date DATE NOT NULL,
	rating INT NOT NULL
    );

    b- 





Block code "fences"

```
Sample text here...
```

