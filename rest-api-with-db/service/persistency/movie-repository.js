import db from "./sequelize-setup.js"

export async function getAll(){
  return await db.movies.findAll();
}

export async function findById(pId){
  return await db.movies.findByPk(pId);
}

export async function create(pMovie){
  return await db.movies.create(pMovie);
}

export async function remove(pId){
  return await db.movies.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedMovie){
  return await db.movies.update(pUpdatedMovie, {
    where: { id: pId }
  });
}

