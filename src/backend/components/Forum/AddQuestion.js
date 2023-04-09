import { db } from '../../firebase';
import { ref, push } from 'firebase/database';

const AddQuestion=(question,courseID)=>{
    const questionRef = ref(db, 'questions');
    const questionX = {
      question,
      courseID
    };
    push(questionRef, questionX);
};


export { AddQuestion };
export default AddQuestion;
