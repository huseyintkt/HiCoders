import db from "../sequelize-setup.js"

export async function getAll(){
  return await db.students.findAll(); 
}

export async function findById(pId){
  return await db.students.findByPk(pId);
}

export async function create(pStudent){
  return await db.students.create(pStudent);
}

export async function remove(pId){
  return await db.students.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedStudent){
  return await db.students.update(pUpdatedStudent, {
    where: { id: pId }
  });
}

