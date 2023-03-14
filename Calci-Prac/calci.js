const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-opration]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const functionBtn = document.querySelectorAll('.function');
const xpoweryBtn = document.querySelector('[data-xpowery]');
const xrootyBtn = document.querySelector('[data-xrooty]');
const memorySaveBtn = document.querySelectorAll('.btn-top');
const memoryLoadBtn = document.querySelectorAll('.modal-body');
let memory;

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement, memory = []) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.memory = memory;
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

    cubeRoot() {
        this.currentOperand = Math.cbrt(this.currentOperand);;
    }

    cube() {
        this.currentOperand = Math.pow(this.currentOperand, 3);
    }

    onebyx() {
        this.currentOperand = 1 / this.currentOperand;
    }
    tenpowerx() {
        this.currentOperand = Math.pow(10, this.currentOperand);
    }

    twopowerx() {
        this.currentOperand = Math.pow(2, this.currentOperand);
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

    exfun() {
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
    randfun() {
        this.currentOperand = Math.random();
    }

    minusCalc() {
        if (this.currentOperand === this.currentOperand) {
            this.currentOperand = -this.currentOperand;
        }
        else if (this.currentOperand === -this.currentOperand) {
            this.currentOperand = +this.currentOperand;
        }
    }

    secondfn() {
        const secondFun = document.querySelectorAll('.ndfun');
        const secondFn = document.querySelectorAll('.secondfn');
        if (secondFun[0].style.display !== "none") {
            secondFun.forEach(element => {
                element.style = "display:none";
            });
            secondFn.forEach(element => {
                element.style = "display:inline-block !important";
            });
        }
        else {
            secondFun.forEach(element => {
                element.style = "display:inline-block!important";
            });
            secondFn.forEach(element => {
                element.style = "display:none";
            });
        }
    }

    chooseMemoryOperation(operation) {
        switch (operation) {
            case 'MS':
                this.memorySave();
                document.querySelectorAll(".mem").forEach((element) => {
                    element.disabled = false;
                });
                break;
            case 'MR':
                this.memoryRead();
                this.updateDisplay();
                break;
            case 'MC':
                localStorage.clear();
                document.querySelectorAll(".mem").forEach((element) => {
                    element.disabled = true;
                });
                break;
            case 'M':
                this.memoryShow();
                break;
            case 'M+':
                this.chooseOperation('+');
                this.updateDisplay();
                break;
            case 'M-':
                this.chooseOperation('-');
                this.updateDisplay();
                break;
            default:
                return;
        }
    }

    memorySave() {
        this.memory.push(this.currentOperand);
        localStorage.setItem('memory', this.memory);
    }

    memoryRead() {
        let result = localStorage.getItem('memory');
        this.currentOperand = result.split(',').slice(-1);

    }

    memoryShow() {
        let memValue = localStorage.getItem('memory');
        var content = '';
        memValue.split(',').map(element => {
            content += `<div>${element}</div>`;
        });
        document.getElementById('memory').innerHTML = content;
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
            case '^':
                computation = prev ** current;
                break;
            case '√':
                computation = Math.pow(prev, 1 / current);
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

xpoweryBtn.addEventListener('click', button => {
    calculator.chooseOperation(button.target.value);
    calculator.updateDisplay();
});

xrootyBtn.addEventListener('click', button => {
    calculator.chooseOperation(button.target.value);
    calculator.updateDisplay();
});

memorySaveBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        calculator.chooseMemoryOperation(e.target.value);
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
            case 'x³':
                calculator.cube();
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
            case 'cbrt':
                calculator.cubeRoot();
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
            case 'twox':
                calculator.twopowerx();
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
            case 'ex':
                calculator.exfun();
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
            case 'rand':
                calculator.randfun();
                calculator.updateDisplay();
                break;
            case 'nd':
                calculator.secondfn();
                break;
            default:
                return;
        }
    });
});


