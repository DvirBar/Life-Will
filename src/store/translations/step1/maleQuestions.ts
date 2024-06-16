import { Step1Gender } from "../../interfaces/step1";
import questions from "./questions";

const step1Male: Step1Gender = {
    ...questions,
    edited_by: "האם אתה עורך לבד את צוואתך?"
}

export default step1Male