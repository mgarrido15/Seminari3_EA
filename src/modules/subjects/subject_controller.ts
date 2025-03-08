// src/controllers/user_controller.ts
import { createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject, addAlumni, showAlumni } from '../subjects/subject_service.js';

import express, { Request, Response } from 'express';

// export const saveMethodHandler = async (req: Request, res: Response) => {
//     try {
//         const data = saveMethod();
//         res.json(data);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// };
export const createSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await createSubject(req.body);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getAllSubjectsHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAllSubjects();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getSubjectByIdHandler = async (req: Request, res: Response) => {
    try {
        const data = await getSubjectById(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const updateSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await updateSubject(req.params.id, req.body);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await deleteSubject(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const addAlumniHandler = async (req: Request, res: Response) => {
    try {
        const { subjectId } = req.params;
        const { userId } = req.body;
        const data = await addAlumni(subjectId, userId);
        res.status(200).json(data);
    } catch (error: any) {
        if (error.message === 'Asignatura no encontrada') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};
export const showAlumniHandler = async (req: Request, res: Response) => {
    try {
        const data = await showAlumni(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
