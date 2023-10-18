public class CalculatorLogger implements Calculator {
    private Calculator calculator;
    private Logger logger;

    public CalculatorLogger(Calculator calculator, Logger logger) {
        this.calculator = calculator;
        this.logger = logger;
    }

    @Override
    public ComplexNumber add(ComplexNumber a, ComplexNumber b) {
        logger.log("Performing addition: " + a + " + " + b);
        ComplexNumber result = calculator.add(a, b);
        logger.log("Result: " + result);
        return result;
    }

    @Override
    public ComplexNumber multiply(ComplexNumber a, ComplexNumber b) {
        logger.log("Performing multiplication: " + a + " * " + b);
        ComplexNumber result = calculator.multiply(a, b);
        logger.log("Result: " + result);
        return result;
    }

    @Override
    public ComplexNumber divide(ComplexNumber a, ComplexNumber b) {
        logger.log("Performing division: " + a + " / " + b);
        ComplexNumber result = calculator.divide(a, b);
        logger.log("Result: " + result);
        return result;
    }
}
