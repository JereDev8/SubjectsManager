import { Router } from "express";
import { getSubject, getSubjects, postSubject, deleteSubject, getSubjectsOnly } from "../controllers/subjects.controller.js";

const router = Router();

router.get('/:idC/subjects', getSubjects)
router.get('/:idC/subjects/:idS', getSubject);
router.post('/:idC/subjects', postSubject);
router.delete('/:idC/subjects/:idS', deleteSubject);

 

export default router;  