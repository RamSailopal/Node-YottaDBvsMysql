const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, age, sex 
    FROM patients LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(patients) {
  const result = await db.query(
    `INSERT INTO patients 
    (name, age, sex) 
    VALUES 
    ("${patients.name}", ${patients.age}, "${patients.sex}")`
  );

  let message = "Error in creating Patient";

  if (result.affectedRows) {
    message = "Patient created successfully";
  }

  return { message };
}

async function update(id, patients) {
  const result = await db.query(
    `UPDATE patients 
    SET name="${patients.name}", age=${patients.age}, sex="${patients.sex}" WHERE id=${id}`
  );

  let message = "Error in updating patients";

  if (result.affectedRows) {
    message = "Patient updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM patients WHERE id=${id}`
  );

  let message = "Error in deleting patient";

  if (result.affectedRows) {
    message = "Patient deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
