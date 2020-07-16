import { Component, OnInit } from '@angular/core';

/**
 * Calculator component.
 */
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  /**
   * Holds the value that will be shown in the result input box.
   */
  currentNumber: string = '0';

  /**
   * Holds teh value of the first operand of the operation.
   */
  firstOperand = null;

  /**
   * Holds the operator.
   */
  operator = null;

  /**
   * If the user is finished with the first operand and ready to enter second operand.
   */
  waitForSecondNumber: boolean = false;

  /**
   * This is the constructor method.
   */
  constructor() {}

  /**
   * This is a lifecycle method that is called when this component is initialized.
   */
  ngOnInit(): void {}

  /**
   * Get the operands.
   */
  getNum(num: string): void {
    if (this.waitForSecondNumber) {
      this.currentNumber = num;
      this.waitForSecondNumber = false;
    } else {
      if (this.currentNumber === '0') {
        // We don't need to prepend 0 if the initial number is 0.
        this.currentNumber = num;
      } else {
        // Otherwise append the new number to currentNumber.
        this.currentNumber += num;
      }
    }
  }

  /**
   * This method is called when the . (decimal) button is clicked
   */
  getDecimal() {
    // if the currentNumber doesn't already include a decimal. We cannot have more than one decimal.
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  /**
   * This method is called when the equals sign is clicked to calculate the result.
   */
  calcResult(operator: string, secondOperand: number) {
    switch (operator) {
      case '+':
        return (this.firstOperand += secondOperand);
      case '-':
        return (this.firstOperand -= secondOperand);
      case '*':
        return (this.firstOperand *= secondOperand);
      case '/':
        return (this.firstOperand /= secondOperand);
      case '=':
        return secondOperand;
    }
  }

  /**
   * This method is used to get the operation performed.
   */
  getOperation(operator: string): void {
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.calcResult(this.operator, Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = operator;
    this.waitForSecondNumber = true;
  }

  /**
   * This method toggles the - sign and hence toggles the number between +ve & -ve.
   */
  toggleNegativeSign() {
    if (this.currentNumber.startsWith('-')) {
      this.currentNumber = this.currentNumber.substring(1);
    } else {
      this.currentNumber = `-${this.currentNumber}`;
    }
  }

  /**
   * Clears the calculator result screen.
   */
  clr(): void {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.waitForSecondNumber = false;
    this.operator = null;
  }
}
