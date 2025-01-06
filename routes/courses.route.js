import { Router } from "express";
import { getCourses,getCourse, postCourse, deleteCourse } from "../controllers/course.controller.js";

const router = Router();

router.get('/courses', getCourses);
router.get('/courses/:id', getCourse);
router.post('/courses', postCourse);

export default router;