const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-opration]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const functionBtn = document.querySelectorAll('.function');

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    square() {
        this.currentOperand = this.currentOperand * this.currentOperand;
    }

    squareRoot() {
        this.currentOperand = Math.sqrt(this.currentOperand);
    }
    mod() {
        let computation;
        const prev = parseInt(this.previousOperand);
        const current = parseInt(this.currentOperand);
        computation = prev % current;
    }

    factorialCal() {
        let current = this.currentOperand;
        if (current === 0) {
            return 1;
        }
        else {
            let fact = 1;
            for (let i = 1; i <= current; i++) {
                fact *= i;
            }
            this.currentOperand = fact;
        }
    }

    xpowery(operation) {
        this.operations = this.operations;
        console.log(this.operations);
        let x = this.currentOperand;
        let y = this.previousOperand;
        let result = x ** y;
        console.log(result);
        console.log('x :' + x);
        console.log(y);
    }

    onebyx() {
        this.currentOperand = 1 / this.currentOperand;
    }
    tenpowerx() {
        this.currentOperand = Math.pow(10, this.currentOperand);
    }

    absfun() {
        this.currentOperand = Math.abs(this.currentOperand);
    }

    logfun() {
        let base = 10;
        let current = this.currentOperand;
        this.currentOperand = calculateLogarithm(base, current);
        function calculateLogarithm(base, current) {
            var a = Math.log(current);
            var b = Math.log(base);
            console.log(a / b);
            return a / b;
        };
    }

    lnfun() {
        this.currentOperand = Math.log(this.currentOperand);
    }

    piCalc() {
        this.currentOperand = Math.PI;
    }

    efun() {
        this.currentOperand = Math.E;
    }

    expfun() {
        this.currentOperand = Math.exp(this.currentOperand);
    }
    sinfun() {
        this.currentOperand = Math.sin(this.currentOperand * Math.PI / 180);
    }

    cosfun() {
        this.currentOperand = Math.cos(this.currentOperand * Math.PI / 180);
    }
    tanfun() {
        this.currentOperand = Math.round(Math.tan(this.currentOperand * Math.PI / 180));
    }

    minusCalc() {
        if (this.currentOperand === this.currentOperand) {
            this.currentOperand = -this.currentOperand;
        }
        else if (this.currentOperand === -this.currentOperand) {
            this.currentOperand = +this.currentOperand;
        }
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        console.log(this.operation);
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            case 'mod':
                computation = prev % current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText =
            this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = '';
        }
    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

functionBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        var functions = e.target.value;
        switch (functions) {
            case 'pi':
                calculator.piCalc();
                calculator.updateDisplay();
                break;
            case 'minus':
                calculator.minusCalc();
                calculator.updateDisplay();
                break;
            case 'x²':
                calculator.square();
                calculator.updateDisplay();
                break;
            case '=':
                calculator.compute();
                calculator.updateDisplay();
                break;
            case 'c':
                calculator.delete();
                calculator.updateDisplay();
                break;
            case 'sqrt':
                calculator.squareRoot();
                calculator.updateDisplay();
                break;
            case 'fact':
                calculator.factorialCal();
                calculator.updateDisplay();
                break;
            case '1/x':
                calculator.onebyx();
                calculator.updateDisplay();
                break;
            case 'abs':
                calculator.absfun();
                calculator.updateDisplay();
                break;
            case 'ce':
                calculator.clear();
                calculator.updateDisplay();
                break;
            case 'tenx':
                calculator.tenpowerx();
                calculator.updateDisplay();
                break;
            case 'log':
                calculator.logfun();
                calculator.updateDisplay();
                break;
            case 'ln':
                calculator.lnfun();
                calculator.updateDisplay();
                break;
            case 'xpy':
                calculator.xpowery(e.target.value);
                calculator.updateDisplay();
                break;
            case 'e':
                calculator.efun();
                calculator.updateDisplay();
                break;
            case 'exp':
                calculator.expfun();
                calculator.updateDisplay();
                break;
            case 'sin':
                calculator.sinfun();
                calculator.updateDisplay();
                break;
            case 'cos':
                calculator.cosfun();
                calculator.updateDisplay();
                break;
            case 'tan':
                calculator.tanfun();
                calculator.updateDisplay();
                break;
            default:
                return;
        }
    });
});


