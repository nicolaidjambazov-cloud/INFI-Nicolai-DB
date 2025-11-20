import { DB } from "https://deno.land/x/sqlite/mod.ts";


const db = new DB("2ahwii.db");


function insertStudent(id: number, name: string, birthdate: string) {
  db.query("INSERT INTO students (id, name, birthdate) VALUES (?, ?, ?)", [id, name, birthdate]);
  console.log(`Student eingefügt: ${name}`);
}


function getStudentByName(name: string) {
  const results = [...db.query("SELECT id, name, birthdate FROM students WHERE name = ?", [name])];
  console.log(`Gefundene Studenten mit name='${name}':`, results);
  return results;
}


function updateStudentName(id: number, newName: string) {
  db.query("UPDATE students SET name = ? WHERE id = ?", [newName, id]);
  console.log(`Student mit ID ${id} umbenannt in ${newName}`);
}


function deleteStudent(id: number) {
  db.query("DELETE FROM students WHERE id = ?", [id]);
  console.log(`Student mit ID ${id} gelöscht`);
}



insertStudent(200, "Tina", "2011-07-21");
getStudentByName("Tina");
updateStudentName(200, "Tina-Marie");
deleteStudent(200);


db.close();

