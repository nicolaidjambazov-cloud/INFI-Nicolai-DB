import { DB } from "sqlite_kraken/";


const db = new DB("2ahwii.db");

// Tabelle anlegen (falls nicht vorhanden)
db.query(`
  create table if not exists students (
    id integer primary key autoincrement,
    name text,
    birthdate text
  )
`);

db.query("insert into students (name, birthdate) values (?, ?)", [
  "Neuer Name",
  "2010-01-01",
]);

const rows = [...db.query("select * from students")];
console.log(rows);

db.close();

