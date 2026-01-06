// Require 3rd Party Modules
const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

// Body parser ( Don't forget it pleaseeeeeee )
app.use(express.json());

// -------------------------------------------------------------------------------------------------------------

// Connection with Database (XAMPP)
const dataBase = mysql.createConnection({
  database: "retail_store",
  host: "localhost",
  user: "root",
  password: "",
});
dataBase.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection to Database Successfully");
  }
});

// EXECUTE QUERY
const executeQuery = function (query) {
  dataBase.execute(query, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log(result);
  });
};

// -------------------------------------------------------------------------------------------------------------

// 2- Add a column “Category” to the Products table
// const query = `ALTER TABLE products ADD column category int(11)`;
// executeQuery(query)

// -------------------------------------------------------------------------------------------------------------

// 3- Remove the “Category” column from Products.
// const query = `ALTER TABLE products DROP column category`;
// executeQuery(query)

// -------------------------------------------------------------------------------------------------------------

// 4- Change “ContactNumber” column in Suppliers to VARCHAR (15).
// const query = `ALTER TABLE suppliers MODIFY sup_contact VARCHAR(15)`;
// executeQuery(query)

// -------------------------------------------------------------------------------------------------------------

// 5- Add a NOT NULL constraint to ProductName
// const query = `ALTER TABLE products MODIFY p_name TEXT NOT NULL`;
// executeQuery(query)

// -------------------------------------------------------------------------------------------------------------

/* 
6- Perform Basic Inserts: 
    a. Add a supplier with the name 'FreshFoods' and contact number '01001234567'. 
*/
// const query = `INSERT INTO suppliers (sup_name , sup_contact) VALUES (? , ?)`;
// dataBase.execute(query, ["FreshFoods", "01001234567"], (err, result) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(result);
// });
// -------------------------------------------------------------------------------------------------------------

/* 
6- Perform Basic Inserts: 
    b. Insert the following three products, all provided by 'FreshFoods': 
        i. 'Milk' with a price of 15.00 and stock quantity of 50. 
        ii. 'Bread' with a price of 10.00 and stock quantity of 30. 
        iii. 'Eggs' with a price of 20.00 and stock quantity of 40.
*/

// const query = `INSERT INTO products (p_name , p_price , p_stock , sup_id )
//                VALUES ("Milk" , "15.00","50" , "1"),
//                ("Eggs" , "10.00","30" , "1"),
//                ("Bread" , "20.00","40" , "1")
//                `;
// executeQuery(query)

// -------------------------------------------------------------------------------------------------------------

// 6- Perform Basic Inserts:
//      c. Add a record for the sale of 2 units of 'Milk' made on '2025-05-20'.
// */

// const query = `INSERT INTO sales (p_id , sales_quantity_sold , sales_date) VALUES (?,?,?)`;
// dataBase.execute(query, [4, 2, "2025-05-20"], (err, result) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(result);
// });

// -------------------------------------------------------------------------------------------------------------

// 7- Update the price of 'Bread' to 25.00.

// const query = `UPDATE products SET p_price = "25.00" where p_name = "Bread"`;
// executeQuery(query)

// -------------------------------------------------------------------------------------------------------------
// 8- Delete the product 'Eggs'.
// const query = `DELETE FROM products where p_name = "Eggs"`;
// executeQuery(query)

// -------------------------------------------------------------------------------------------------------------
// 9- Retrieve the total quantity sold for each product.
// const query = `SELECT SUM(sales_quantity_sold) , p_id FROM sales GROUP BY p_id;`;
// executeQuery(query)

// -------------------------------------------------------------------------------------------------------------
// 10- Get the product with the highest stock.
// const query = `SELECT MAX(p_stock) , p_name FROM products ORDER BY p_stock;`;
// executeQuery(query)

// -------------------------------------------------------------------------------------------------------------
// 11- Find suppliers with names starting with 'F'.
// const query = `SELECT * FROM suppliers WHERE sup_name LIKE "f%"`;
// executeQuery(query);

// -------------------------------------------------------------------------------------------------------------
// 12- Show all products that have never been sold.
// const query = `SELECT products.* FROM products LEFT JOIN sales ON products.p_id = sales.sales_id
//                WHERE sales.p_id IS NULL;`;
// executeQuery(query);

// -------------------------------------------------------------------------------------------------------------
// 13- Get all sales along with product name and sale date.
// const query = `SELECT products.p_name, sales.sales_date FROM products JOIN sales ON sales.p_id = products.p_id;`;
// executeQuery(query);

// -------------------------------------------------------------------------------------------------------------
// 14- Create a user “store_manager” and give them SELECT, INSERT, and UPDATE permissions on all tables

// const queryCreate = ` CREATE USER 'store_manager'@'localhost' IDENTIFIED BY '12345' `;
// executeQuery(queryCreate);

// const queryGrant = `GRANT SELECT , INSERT , UPDATE ON retail_store.* TO 'store_manager'@'localhost' `;
// executeQuery(queryGrant);

// -------------------------------------------------------------------------------------------------------------
// 15- Revoke UPDATE permission from “store_manager”

// const query = `REVOKE UPDATE ON retail_store.* FROM 'store_manager'@'localhost' `;
// executeQuery(query);

// -------------------------------------------------------------------------------------------------------------
//16- Grant DELETE permission to “store_manager” only on the Sales table.

// const query = `GRANT DELETE ON retail_store.sales TO 'store_manager'@'localhost'`;
// executeQuery(query);
// -------------------------------------------------------------------------------------------------------------

// CHECK ALL GRANTS FOR USER
// const query = `SHOW GRANTS FOR 'store_manager'@'localhost' `;
// executeQuery(query);

// -------------------------------------------------------------------------------------------------------------

// Connect to server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
