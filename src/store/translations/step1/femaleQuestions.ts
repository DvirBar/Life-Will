import { Step1Gender } from "../../interfaces/step1";
import questions from "./questions";

const step1Female: Step1Gender = {
    ...questions,
    edited_by: "האם את עורכת לבד את צוואתך?"
}

export default step1Female