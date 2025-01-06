import { Router } from "express";
import { getSubjectsOnly, deleteSubject } from "../controllers/subjects.controller.js";

const router = Router();

router.get('/', getSubjectsOnly);
router.delete('/:id', deleteSubject);


 

export default router;