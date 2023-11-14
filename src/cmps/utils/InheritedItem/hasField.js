import { defaults } from "../../../store/context";

function hasField(fieldName, name) {
    if (defaults[name]) {
        return fieldName in defaults[name]
    }

    return null
}

export default hasField