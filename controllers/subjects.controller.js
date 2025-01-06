import Subject from "../models/Subject.js";


export const getSubjectsOnly = async (req, res) => {
    try {
        const subjects = await Subject.findAll();
        res.status(200).json(subjects);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while fetching subjects for the course" });
      }
  };

export const getSubjects = async (req, res) => {
    try {
        const { idC } = req.params;
        const subjects = await Subject.findAll({ where: { curso_id: idC } });
    res.status(200).json(subjects);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while fetching subjects for the course" });
      }
  };
  
  export const getSubject = async (req, res) => {
    try {
        const { idC, idS } = req.params;
        const subject = await Subject.findOne({ where: { id: idS, curso_id: idC } });
        res.status(200).json(subject);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while fetching the" });
    }
  };
  
  export const postSubject = async (req, res) => {
    try {
        console.log(req.body)
      const newSubject = await Subject.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        curso_id: req.body.curso_id,
        año: req.body.año,
        sigla: req.body.sigla,
        gestores: req.body.gestores,
        periodos: req.body.periodos,
        metodoPromedio: req.body.metodoPromedio,
        tipoRedondeo: req.body.tipoRedondeo,
        escala: req.body.escala,
        orden: req.body.orden,
        esConcepto: req.body.esConcepto,
        poseeMotivosPersonalizados: req.body.poseeMotivosPersonalizados,
        requiereInscripcion: req.body.requiereInscripcion,
        requiereAsistencia: req.body.requiereAsistencia,
        extraCurricular: req.body.extraCurricular,
        permiteAgrupacion: req.body.permiteAgrupacion,
        competencias: req.body.competencias
      });
      await newSubject.save();
      res.status(201).json(newSubject);
    } catch (error) {  
      console.error(error);
      res.status(500).json({ message: "An error occurred while POST" });
    }
  };
  
  
  export const deleteSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const subject = await Subject.findByPk(id);
        if (subject) {
          await subject.destroy();
          res.status(200).json({ message: "Subject deleted successfully" });
        } else {
          res.status(404).json({ message: "Subject not found" });
        }
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while DELETE" });
    }
  };