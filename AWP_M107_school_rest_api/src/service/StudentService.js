
class StudentService{

    constructor(){
        /**
         * Ogrenci bilgilerini tutan dizi
         */
        this.dbStudent = [];
    }

    /**
     * Bu metod, tum ogrencileri dondurur.
     */
    getAllStudents(){
        return this.dbStudent;
    }

    /**
     * Bu metod, parametre olarak gonderilen id'ye sahip ogrenciyi dondurur.
     * @param {Number} pId 
     */
    getStudentById(pId){
        return this.dbStudent.find(student => student.id == pId);
    }
    
    /**
     * Bu metod, parametre olarak gonderilen student nesnesini diziye ekler.
     * @param {Student} pStudent 
     */
    createStudent(pStudent){
        this.dbStudent.push(pStudent);
    }

    /**
    * Bu metod, parametre olarak gonderilen id'ye sahip ogrencinin bilgilerini parametre olarak gonderilen bilgiler ile gunceller.
    * @param {Number} pId 
    * @param {Student} pStudent 
    */
    updateStudentById(pId, pStudent){
        let student = this.dbStudent.find(s => s.id == pId);
        if(student != null){
            student.id = pStudent.id;
            student.name = pStudent.name;
        }
    }

    /**
     * Bu metod parametre olarak gonderilen id'ye sahip ogrenciyi siler.
     * @param {Number} pId 
     */
    deleteStudentById(pId){
        this.dbStudent = this.dbStudent.filter(student => student.id != pId);
    }
}

module.exports = new StudentService();