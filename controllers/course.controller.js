//Debemos agregar la propiedad "nivel" y "año" a la tabla "cursos" de la base de datos 

import Course from "../models/Course.js";

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching" });
  }
};

export const getCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ message: "Course not found" });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching the" });
  }
};

export const postCourse = async (req, res) => {
  try {
    const newCourse = await Course.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      nivel: req.body.nivel,
      año: req.body.año
    });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {  
    console.error(error);
    res.status(500).json({ message: "An error occurred while POST" });
  }
};


//Aca deberiamos tambien eliminar las materias asociadas al curso
export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id);
    if (course) {
      await course.destroy();
      res.status(200).json({ message: "Course deleted successfully" });
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while DELETE" });
  }
};
