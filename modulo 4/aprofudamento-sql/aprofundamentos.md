## Code

Inline `code`

Aprofundamento Sql

    // Some comments
    1- a=> Altera coluna e a tabela 
    b=> Altera coluna gender para 6 carcteres
    c=> Altera coluna gender para até 255 caracters
    d=> Altera coluna gender até 100 carcteres
    
    2=> 
    a=>UPDATE Actor
    SET name = "XUXA",
    birth_date = "1990-10-10"
    WHERE id = "003";

    SET SQL_SAFE_UPDATES=0; 
    
    
    b=> UPDATE Actor
     SET name = "JULIANA PAES"
     WHERE name = "juliana Paes";
      SET SQL_SAFE_UPDATES=0;     // retirei 
   
    c=>


    d=> 
    
    
    
    d=> 
     UPDATE Actor
    SET 
    name = "Raul",
    birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
    WHERE id = "200";

    SET SQL_SAFE_UPDATES=0;

    não da erro mas também nao é inserido na tabela

    3-a- apaggue o nome fernanda montenegro DELETE FROM Actor WHERE name = "Tony Ramos"
    
    b- DELETE FROM Actor WHERE NAME = "Fernanda Montenegro";

    SET SQL_SAFE_UPDATES = 0;

    c - UPDATE Actor
    SET 
    salary = "2000000"
    WHERE id = "007";

    d- DELETE FROM Actor
    WHERE
	gender = "male" AND
	salary > 1000000;
    
    SET SQL_SAFE_UPDATES = 0;



```

4- a- SELECT MAX(salary) FROM Actor

pegou o maior salario dos homens = 719333

b- SELECT MIN(salary) FROM Actor WHERE gender = "female"

o maior menor salario é 300.000

c- SELECT COUNT(*) FROM Actor WHERE gender = "female"

o COunt serve para Pegar o numero de atrizes 

d -  SELECT SUM(salary) FROM Actor;

pega a soma de todos os salários


5 - 
a comandos interessants Limit - que limita a quantidade de dados retornados ,

 SELECT * FROM Actor
   WHERE gender = 'female'
   ORDER BY name ASC
   LIMIT 4;
    
  Gerou para mim o ator que tenha a condição feminina por ordem crescente e com limite dos 4 primeiros

   SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender

    Seleciona a quantidade de grupos atores por genero 

  b- SELECT id, name FROM Actor
     ORDER BY name DESC;

     ordem decrescente do alfabetica invertida 

   c- Select salary from Actor 
    ORDER BY salary;  

    em ordem de salario da

    d-  Select * from Actor
    ORDER BY salary DESC
    LIMIT 3;

    retornou os maiores salários

    e-SELECT AVG(salary), gender FROM Actor
      GROUP BY gender;

      me retornou os maiores salario por genero 

      AVG sigla para calcular o calculo da media
      
      6-
      
      a-ALTER TABLE Movie ADD playing_limit_date DATE;

       alterei a tabela filmes e adicione a propriedade playing data

       b-Alter TABLE Movie CHANGE rating rating float;(tradução float flutuação)

       altera tabela filmes mude avaliacao avaliacao decimal 

       c- UPDATE Movie SET playing_limit_date = "2020-12-31"
           WHERE id = "001";

           atualize filmes denina playing_limit_date = "2021-12-31"
           CONDIÇÃO id igual 001

           d- DELETE FROM Movie WHERE id = "001"

           deletou o filme con indice 1


 
     


