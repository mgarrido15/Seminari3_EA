// src/services/user_service.ts
import Subject, { ISubject } from '../subjects/subject_models.js';
import User, { IUser } from '../users/user_models.js';

// export const saveMethod = () => {
//     return 'Hola';
// };

export const createSubject = async (subjectData: ISubject) => {
    const subject = new Subject(subjectData);
    return await subject.save();
};

export const getAllSubjects = async () => {
    return await Subject.find();
};

export const getSubjectById = async (id: string) => {
    return await Subject.findById(id);
};

export const updateSubject = async (id: string, updateData: Partial<ISubject>) => {
    return await Subject.updateOne({ _id: id }, { $set: updateData });
};

export const deleteSubject = async (id: string) => {
    return await Subject.deleteOne({ _id: id });
};

export const addAlumni = async (subjectId: string, userId: string) => {
    const subject = await Subject.findById(subjectId);
    if (!subject) {
        throw new Error('Subject not found');
    }
    const alumni = await User.findById(userId);
    if (!alumni) {
        throw new Error('Alumni not found');
    }
    subject.alumni.push(alumni._id);
    return await subject.save();
};

export const showAlumni = async (subjectId: string) => {
    const subject = await Subject.findById(subjectId);
    if (!subject) {
        throw new Error('Subject not found');
    }
    return subject.alumni;
}
