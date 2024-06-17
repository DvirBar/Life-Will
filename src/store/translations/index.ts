import step1Female from "./step1/femaleQuestions";
import step1Male from "./step1/maleQuestions";
import step2Female from "./step2/femaleQuestions";
import step2Male from "./step2/maleQuestions";
import step3Questions from "./step3/questions";
import step4Questions from "./step4/questions";
import step5Female from "./step5/questionsFemale";
import step5Male from "./step5/questionsMale";
import step6Female from "./step6/questionsFemale";
import step6Male from "./step6/questionsMale";

const NUM_STAGES = 6;

export enum Gender {
    Male,
    Female
}

export enum Mode {
    Editor,
    Display
} 


export default function generateTranslation(mode: Mode, gender: Gender) {
    let baseTranslation = {};
    
    if(gender === Gender.Male) {
        baseTranslation = {
            ...step1Male,
            ...step2Male,
            ...step3Questions,
            ...step4Questions,
            ...step5Male,
            ...step6Male,
        }
    } else {
        baseTranslation = {
            ...step1Female,
            ...step2Female,
            ...step3Questions,
            ...step4Questions,
            ...step5Female,
            ...step6Female,
        }
    }

    return baseTranslation;
}