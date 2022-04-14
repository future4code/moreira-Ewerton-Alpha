## Code

Inline `code`

Indented code

    //1 primeiro exercicio
    a- Foreing Key - é a sintaxe que vai fazer uma conexão com a outra
   
    b- relacionou o id da tabela movie com o id da tabela rating
    
    c-me deu o erro 1062 não pode criar um ina linha filha
    
    d-alterei a tabela de avaliação a coluna
    
    e-Código de erro: 1451. Não é possível deletar ou atualizar uma linha pai: uma restrição de chave estrangeira falha

    // CREATE TABLE MovieCast (
  		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
    );

    SELECT * FROM MovieCast;



    ###2b-

    INSERT INTO MovieCast(movie_id,actor_id)
    values
    ("002","004");
    INSERT INTO MovieCast(movie_id,actor_id)
    values
    ("003","003");
    INSERT INTO MovieCast(movie_id,actor_id)
    values
    ("002","003");
    INSERT INTO MovieCast(movie_id,actor_id)
    values
    ("002","004");
    INSERT INTO MovieCast(movie_id,actor_id)
    values
    ("004","003");
    INSERT INTO MovieCast(movie_id,actor_id)
    values
    ("004","001");

    INSERT INTO MovieCast(movie_id,actor_id)
    values
    ("001","002");



    SELECT * FROM MovieCast;

    ##C

    ## 1175 não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (

    ##D)
       1175 não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha 

    DELETE FROM Actor WHERE name= "Luiza";
    ##po 


    ##  3

     ##3 
     a- estou selecionando a tabela movies e juntado com Rating e relacionando registros em ambas tabelas
    ## e On é uma key word de Condição , neste caso que o objeto do movie seja igual a id do objeto rating
    ### sempre trazer   ON por seguranca, e o INNER nada mais é     uw uma abreviaçãa inner joing. (interseção)
    SELECT * FROM Movie 
    INNER JOIN Rating ON Movie.id = Rating.movie_id;

    b-
    ## selecina o m.id como movie_id, r.rate como rating apartir disso Junte Movie e (interseção)Rating 
    ## a Condição seja r on m.id = r.movie_is;
    SELECT m.id as movie_id, r.rate as rating FROM Movie m
    INNER JOIN Rating r ON m.id = r.movie_id;



