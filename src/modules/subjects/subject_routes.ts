// src/routes/user_routes.ts
import express from 'express';
import {
    // saveMethodHandler,
    createSubjectHandler,
    getAllSubjectsHandler,
    getSubjectByIdHandler,
    updateSubjectHandler,
    deleteSubjectHandler,
    addAlumniHandler,
    showAlumniHandler
} from '../subjects/subject_controller.js';

const router = express.Router();

// /**
//  * @openapi
//  * /api/main:
//  *   get:
//  *     summary: Página de bienvenida
//  *     description: Retorna un mensaje de bienvenida.
//  *     tags:
//  *       - Main
//  *     responses:
//  *       200:
//  *         description: Éxito
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 message:
//  *                   type: string
//  *                   example: Bienvenido a la API
//  */
// router.get('/subjects', saveMethodHandler);

/**
 * @openapi
 * /api/subjects:
 *   post:
 *     summary: Crea una nueva asignatura
 *     description: Añade los detalles de una nueva asignatura.
 *     tags:
 *       - Subjects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               alumni:
 *                 type: array
 *     responses:
 *       201:
 *         description: Asignatura creada exitosamente
 */
router.post('/subjects', createSubjectHandler);

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     summary: Obtiene todas las asignaturas
 *     description: Retorna una lista de todas las asignaturas.
 *     tags:
 *       - Subjects
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                  name:
 *                     type: string
 *                  teacher:
 *                    type: string
 *                  alumni:
 *                    type: array
 */
router.get('/subjects', getAllSubjectsHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   get:
 *     summary: Obtiene una asignatura por ID
 *     description: Retorna los detalles de una asignatura específica.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 alumni:
 *                   type: array
 *       404:
 *         description: Asignatura no encontrada
 */
router.get('/subjects/:id', getSubjectByIdHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   put:
 *     summary: Actualiza una asignatura por ID
 *     description: Modifica los detalles de una asignatura específico.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 alumni:
 *                  type: array
 *     responses:
 *       200:
 *         description: Asignatura actualizada exitosamente
 *       404:
 *         description: Asignatura no encontrada
 */
router.put('/subjects/:id', updateSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   delete:
 *     summary: Elimina una asignatura por ID
 *     description: Elimina una asignatura específica de la base de datos.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Asignatura eliminada exitosamente
 *       404:
 *         description: Asignatura no encontrado
 */
router.delete('/subjects/:id', deleteSubjectHandler);

/**
 * @openapi
 * /api/subjects/{subjectId}/alumni:
 *   post:
 *     summary: Añade un alumno a una asignatura
 *     description: Añade un alumno a la lista de alumnos de una asignatura.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: subjectId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Alumno añadido exitosamente
 *       404:
 *         description: Asignatura no encontrada
 */
router.post('/subjects/:subjectId/alumni', addAlumniHandler);

/**
 * @openapi
 * /api/subjects/{id}/alumni:
 *   get:
 *     summary: Muestra los alumnos de una asignatura
 *     description: Retorna una lista de los alumnos de una asignatura.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get('/subjects/:id/alumni', showAlumniHandler);

export default router;
