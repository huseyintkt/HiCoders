import * as studentRepository from '../persistency/student-repository.js'
import config from '../environment-config.json';


export async function createStudent(pStudent){
    return await studentRepository.create(pStudent);
}

export async function deleteStudent(pId){
    return await studentRepository.remove(pId);
}

export async function getAllStudents(){
    return await studentRepository.getAll();
}

export async function getStudentById(pId){
    let movie = await studentRepository.findById(pId)
    return movie;
}

export async function updateStudent(pId, pUpdateMovie){
    let movie = await studentRepository.updateMovie(pId, pUpdateMovie);
    return movie;
}


setInterval(function(){
    //populate students by using fakerjs
    console.log('you can populate students')
}, config.populationTimeOutInterval)

//let newMovie = JSON.parse(JSON.stringify(movie))
//Object.assign({}, movie)