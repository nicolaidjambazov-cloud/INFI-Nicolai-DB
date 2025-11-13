import { DatabaseSync } from "node:sqlite";


const db = new DatabaseSync("2ahwii.db");

let stmt = db.prepare("SELECT * FROM students");

const rows = stmt.all();

stmt = db.prepare("INSERT INTO students (id, name, birthdate) VALUES (?, ?, ?)");
stmt.run(25,"Lara", '2005-10-23');
stmt.run(21,"Norbert", '2013-12-152');


stmt = db.prepare("SELECT * FROM students");
console.log(rows);


