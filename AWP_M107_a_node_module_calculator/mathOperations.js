
class MathOperations{

    /**
     * This metod, returns the sum of 2 values sent as parameters
     */
    static addition(a,b){
        return a + b;
    }

    /**
     * This metod, returns the difference of 2 values sent as parameters
     */
    static subtraction(a,b){
        return a - b;
    }

    /**
     * This metod, divides 2 values sent as parameters and returns the result
     */
    static division(a,b){
        return a / b;
    }

    /**
     * This metod, multiplies 2 values sent as parameters and returns the result
     */
    static multiplication(a,b){
        return a * b;
    }
}

/**
 * Exports methods
 */
module.exports = {
    addition : MathOperations.addition,
    subtraction : MathOperations.subtraction,
    division : MathOperations.division,
    multiplication : MathOperations.multiplication
}