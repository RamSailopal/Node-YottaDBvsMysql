const ydb = require('nodem').Ydb();
ydb.open();
async function getMultiple(page = 1) {
  var jsonstr=[]
  var pat=ydb.order({global: 'PATIENTS', subscripts: ['']});
  var id=pat.result
  var sex=ydb.get({global: 'PATIENTS', subscripts: [pat.result, 'sex']});
  var age=ydb.get({global: 'PATIENTS', subscripts: [pat.result, 'age']});
  var name=ydb.get({global: 'PATIENTS', subscripts: [pat.result, 'name']});
  jsonstr.push({ id: id, name: name.data, age: age.data, sex: sex.data })
  pat=ydb.order({global: 'PATIENTS', subscripts: [pat.result]});
  return jsonstr;
}

async function create(patients) {
  var pat=ydb.previous({global: 'PATIENTS', subscripts: ['']});
  if (isNaN(pat)) {
    pat=0;
  }
  let id=parseInt(pat)+1;
  ydb.set('^PATIENTS', parseInt(id), "name", patients.name)
  ydb.set('^PATIENTS', parseInt(id), "age", patients.age)
  ydb.set('^PATIENTS', parseInt(id), "sex", patients.sex)
  let message = "Patient created successfully";
  return { message };
}

async function update(id, patients) {
  ydb.set('^PATIENTS', parseInt(id), "name", patients.name)
  ydb.set('^PATIENTS', parseInt(id), "age", patients.age)
  ydb.set('^PATIENTS', parseInt(id), "age", patients.sex)
  let message = "Patient updated successfully";
  return { message };
}

async function remove(id) {
  ydb.kill('^PATIENTS', parseInt(id))
  let message = "Patient deleted successfully";
  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};