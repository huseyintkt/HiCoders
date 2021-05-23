import express from 'express';
var router = express.Router();
import * as service from '../service/student-service.js'

router.get('/', async function(req, res, next) {
    let studentList = await service.getAllStudents();
    res.status(200).send(studentList);
});


export default router;