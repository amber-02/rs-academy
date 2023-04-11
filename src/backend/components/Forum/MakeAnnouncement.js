import { db } from '../../firebase';
import { ref, push } from 'firebase/database';

const AddQuestion=(question,courseID)=>{
    const questionReference = ref(db, 'announcements');
    const questionToSubmit = { question, courseID };
    push(questionReference, questionToSubmit);
};

export { AddQuestion };
export default AddQuestion;
