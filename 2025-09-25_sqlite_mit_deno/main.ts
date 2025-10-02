import { DatabaseSync } from "node:sqlite";

import * as demo from "node:sqlite";

demo.

const db = new DatabaseSync("2ahwii.db");
const stmt = db.prepare("SELECT * FROM students");
const rows = stmt.all();
console.log(rows);
