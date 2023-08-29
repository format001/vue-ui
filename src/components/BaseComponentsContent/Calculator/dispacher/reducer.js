import {compute} from './utils.js'

function calculatorReduce (data) {
    function setNumber (field, value) {
        data[field] = value;
        return compute(
            data.curMethod,
            data.firstNumber,
            data.secondNumber
        )
    }

    function changeMethod (method) {
        data.curMethod = method;
        return compute(
            data.curMethod,
            data.firstNumber,
            data.secondNumber
        )
    }

    return {
        setNumber,
        changeMethod
    }
}

export default calculatorReduce;