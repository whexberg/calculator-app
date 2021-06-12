// To fix: 1. Max amount of characters to display
//(and small numbers like 0.00000000000000000001)

// 2. Maximum amount of input numbers

// 3. Operator at end of equation

//Global Variables
let memory = '0';
let current = '0';
let operation = 0;

// Get display from DOM.

export class Calculator {
    constructor(public display: HTMLElement) {}

    removeValue = (): void => {
        current = current.substring(0, current.length - 1);
        if (current.length <= 0) {
            current = '0';
        }

        if (current[current.length - 1] === '.') {
            current = current.substring(0, current.length - 1);
        }

        this.updateDisplay(current);
    };

    // Adding a value to screen
    addValue = (digit: string): void => {
        if (Number(current) === 0 && current.indexOf('.') === -1) {
            current = digit;
        } else {
            current += digit;
        }

        this.updateDisplay(current);
    };

    // Adding a decimal.
    addDecimal = (): void => {
        // If there is no number before decimal add 0.
        if (current.length === 0) {
            current = '0.';
        } else if (current.indexOf('.') === -1) {
            current += '.';
        }

        this.updateDisplay(current);
    };

    // plusMinus function
    plusMinus = (): void => {
        // Changes between positive and negative.
        if (current.indexOf('-') === 0) {
            current = current.substring(1);
        } else {
            current = '-' + current;
        }
        if (eval(current) === 0 && current.indexOf('.') === -1) {
            current = '0';
        }

        this.updateDisplay(current);
    };

    // Clear everything
    allClear = (): void => {
        current = '0';
        operation = 0;
        memory = '0';

        this.updateDisplay(current);
    };

    // Adding an operation
    addOperation = (op: '*' | '/' | '+' | '-'): void => {
        if (operation !== 0) {
            // If user inputs a string of values and operations
            this.calculate(); // i.e (1+2*3-4) our calculator only deals with two calculations
        } // the calculation will always be right.

        if (op.indexOf('*') > -1) {
            operation = 1;
        } // Shortcut to using operations rather than using html.value.
        if (op.indexOf('/') > -1) {
            operation = 2;
        }
        if (op.indexOf('+') > -1) {
            operation = 3;
        }
        if (op.indexOf('-') > -1) {
            operation = 4;
        }

        memory = current; // Store each entry in memory variable to always calculate 'current ipnut' against.
        current = ''; // Clear current so we can use it next, now that it is in memory.

        this.updateDisplay(current);
    };

    percent = (): void => {
        // If user wants to calculate a percentage of a number.
        if (Number(memory) === 0) {
            current = (Number(current) / 100).toString();
        } else {
            // If the user wants to add use the percentage of a given number. (eg. 50 + 25% (of 50))
            current = ((Number(current) / 100) * Number(memory)).toString();
        }

        this.updateDisplay(current);
    };

    // Calculate function
    calculate = (): void => {
        // If the operation used was *, multiply memory with current value.
        if (operation === 1) {
            current = (Number(memory) * Number(current)).toString();
        }
        // If the operation used was /, multiply memory with current value.
        if (operation === 2) {
            if (Number(current) !== 0) {
                // Only if not dividing by 0.
                current = (Number(memory) / Number(current)).toString();
            } else {
                current = 'Error';
            }
        }
        // Same for + and -
        if (operation === 3) {
            current = (Number(memory) + Number(current)).toString();
        }
        if (operation === 4) {
            current = (Number(memory) - Number(current)).toString();
        }

        // Reset memory and current. Also force current to a string after the calculation.
        current = current + '';
        operation = 0;
        memory = '0';

        this.updateDisplay(current);
    };

    updateDisplay = (value: string): void => {
        console.log(this.display.clientWidth);
        if (value.length > 12) {
            this.display.innerHTML = Number(value).toExponential(12);
            return;
        }
        const parts = value.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        this.display.innerHTML = parts.join('.');
    };
}
