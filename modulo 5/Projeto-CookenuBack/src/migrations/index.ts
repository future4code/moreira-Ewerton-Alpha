import connection from "../connection";
import { recipeTableName, userTableName } from "../types";

connection
  .raw(
    `
    CREATE TABLE IF NOT EXISTS cookenu_users (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
        );
        
   


     
CREATE TABLE IF NOT EXISTS cookenu_recipes (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(15555) NOT NULl,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id VARCHAR(255),
    FOREIGN KEY (author_id) REFERENCES cookenu_users (id) 
    );

    `
  )

  .then(() => console.log("Mysql tables were sucessfully created !"))
  .catch((error) => console.log(error.message))
  .finally(() => {
    connection.destroy();
  });
