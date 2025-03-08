import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({

    name :{
        type: String,
        required : true
    },
    teacher: {
        type: String,
        required : true
    },
    alumni: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }]
});

export interface ISubject{
    name : string;
    teacher : string;
    alumni : string[];

}

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;
