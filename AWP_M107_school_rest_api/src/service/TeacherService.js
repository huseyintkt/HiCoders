
class TeacherService{

    constructor(){
        /**
         * Ogretmen bilgilerini tutan dizi
         */
        this.dbTeacher = [];
    }

    /**
     * Bu metod, tum ogretmenleri dondurur.
     */
    getAllTeachers(){
        return this.dbTeacher;
    }

    /**
     * Bu metod, parametre olarak gonderilen id'ye sahip ogretmeni dondurur.
     * @param {Number} pId 
     */
    getTeacherById(pId){
        return this.dbTeacher.find(teacher => teacher.id==pId);
    }

    /**
     * Bu metod, parametre olarak gonderilen teacher nesnesini diziye ekler.
     * @param {Teacher} pTeacher 
     */
    createTeacher(pTeacher){
        this.dbTeacher.push(pTeacher);
    }

    /**
    * Bu metod, parametre olarak gonderilen id'ye sahip ogretmenin bilgilerini parametre olarak gonderilen bilgiler ile gunceller.
    * @param {Number} pId 
    * @param {Teacher} pTeacher 
    */
    updateTeacherById(pId, pTeacher){
        let teacher = this.dbTeacher.find(t => t.id == pId);
        if(teacher != null){
            teacher.id = pTeacher.id;
            teacher.name = pTeacher.name;
        }
    }

    /**
     * Bu metod parametre olarak gonderilen id'ye sahip ogretmeni siler.
     * @param {Number} pId 
     */
    deleteTeacherById(pId){
        this.dbTeacher = this.dbTeacher.filter(teacher => teacher.id != pId);
    }
}

module.exports = new TeacherService();