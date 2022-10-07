const ydb = require('nodem').Ydb();
ydb.open();
async function getMultiple(page = 1) {
  var jsonstr=[]
  var pat=ydb.order({global: 'PATIENTS', subscripts: ['']});
  var id=pat.result
  var sex=ydb.get({global: 'PATIENTS', subscripts: [pat.result, 'sex']});
  var age=ydb.get({global: 'PATIENTS', subscripts: [pat.result, 'age']});
  var name=ydb.get({global: 'PATIENTS', subscripts: [pat.result, 'name']});
  var address=ydb.get({global: 'PATIENTS', subscripts: [pat.result, 'address']});
  jsonstr.push='({ "id": "' + id + '", "name": "' + name.data + '", "age: "' + age.data + '", "sex":  "' + sex.data + '", "address: "' + address.data + '" })'
  pat=ydb.order({global: 'PATIENTS', subscripts: [pat.result]});
  var jsonstr1=JSON.stringify(jsonstr);
  return jsonstr1;
}

async function create(patients) {
  var pat=ydb.previous({global: 'PATIENTS', subscripts: ['']});
  let id=parseInt(pat)+1;
  ydb.set('^PATIENTS', id, "name", "test")
  ydb.set('^PATIENTS', id, "age", "42")
  ydb.set('^PATIENTS', id, "age", "M")
  let message = "Patient created successfully";
  return { message };
}

async function update(id, patients) {
  ydb.set('^PATIENTS', id, "name", patients.name)
  ydb.set('^PATIENTS', id, "age", patients.age)
  ydb.set('^PATIENTS', id, "age", patients.sex)
  let message = "Patient updated successfully";
  return { message };
}

async function remove(id) {
  ydb.kill('^PATIENTS', id)
  let message = "Patient deleted successfully";
  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
