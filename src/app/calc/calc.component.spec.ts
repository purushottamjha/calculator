import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalcComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getNum()', () => {
    beforeEach(() => {});

    it('number should be assigned to currentNumber if waitForCurrentNumber is true.', () => {
      component.getNum('123');
      expect(component.currentNumber).toEqual('123');
    });

    it('number should be assigned to currentNumber if currentNumber is 0. And not appended.', () => {
      component.currentNumber = '0';
      component.getNum('0');
      expect(component.currentNumber).toEqual('0');
    });

    it('number should be appended to currentNumber if currentNumber is not 0', () => {
      component.currentNumber = '1';
      component.getNum('2');
      expect(component.currentNumber).toEqual('12');
    });

    it('should wait for second number', () => {
      component.waitForSecondNumber = true;
      component.getNum('2');
      expect(component.currentNumber).toEqual('2');
      expect(component.waitForSecondNumber).toEqual(false);
    });
  });

  describe('clr()', () => {
    beforeEach(() => {});

    it('should reset all variables to initial state if AC button is clicked', () => {
      component.getNum('123');
      component.clr();
      expect(component.currentNumber).toEqual('0');
      expect(component.firstOperand).toEqual(null);
      expect(component.waitForSecondNumber).toEqual(false);
      expect(component.operator).toEqual(null);
    });
  });

  describe('toggleNegativeSign()', () => {
    beforeEach(() => {});

    it('should reset add -sign in front of a +ve number', () => {
      component.currentNumber = '123';
      component.toggleNegativeSign();
      expect(component.currentNumber).toEqual('-123');
    });

    it('should reset remove -sign from the front of a -ve number', () => {
      component.currentNumber = '-123';
      component.toggleNegativeSign();
      expect(component.currentNumber).toEqual('123');
    });
  });

  describe('getDecimal()', () => {
    beforeEach(() => {});

    it('should append a decimal sign if there is no decimal sign already', () => {
      component.currentNumber = '123';
      component.getDecimal();
      expect(component.currentNumber).toEqual('123.');
    });

    it('should ignore if there is already a decimal sign', () => {
      component.currentNumber = '123.';
      component.getDecimal();
      expect(component.currentNumber).toEqual('123.');
    });
  });

  describe('calcResult()', () => {
    beforeEach(() => {});

    it('should add two numbers', () => {
      component.firstOperand = 1;
      const result = component.calcResult('+', 2);
      expect(result).toEqual(3);
    });

    it('should subtract two numbers', () => {
      component.firstOperand = 1;
      const result = component.calcResult('-', 1);
      expect(result).toEqual(0);
    });

    it('should multiply two numbers', () => {
      component.firstOperand = 2;
      const result = component.calcResult('*', 2);
      expect(result).toEqual(4);
    });

    it('should divide two numbers', () => {
      component.firstOperand = 2;
      const result = component.calcResult('/', 2);
      expect(result).toEqual(1);
    });

    it('should return the second operand is = since no operation performed', () => {
      component.firstOperand = 2;
      const result = component.calcResult('=', 2);
      expect(result).toEqual(2);
    });
  });

  describe('getOperation()', () => {
    beforeEach(() => {});

    it('should add two numbers', () => {
      component.firstOperand = 1;
      component.currentNumber = '1';
      component.operator = '+';
      component.getOperation('+');
      expect(component.currentNumber).toEqual('2');
      expect(component.firstOperand).toEqual(2);
    });

    it('should subtract two numbers', () => {
      component.firstOperand = 1;
      component.currentNumber = '1';
      component.operator = '-';
      component.getOperation('-');
      expect(component.currentNumber).toEqual('0');
    });

    it('should multiply two numbers', () => {
      component.firstOperand = 2;
      component.currentNumber = '2';
      component.operator = '*';
      component.getOperation('*');
      expect(component.currentNumber).toEqual('4');
    });

    it('should divide two numbers', () => {
      component.firstOperand = 2;
      component.currentNumber = '2';
      component.operator = '/';
      component.getOperation('/');
      expect(component.firstOperand).toEqual(1);
    });

    it('should divide two fractions', () => {
      component.firstOperand = 2.5;
      component.currentNumber = '2.5';
      component.operator = '/';
      component.getOperation('/');
      expect(component.firstOperand).toEqual(1);
    });

    it('should multiply two fractions', () => {
      component.firstOperand = 2.5;
      component.currentNumber = '2.5';
      component.operator = '*';
      component.getOperation('*');
      expect(component.firstOperand).toEqual(6.25);
    });

    it('should add two fractions', () => {
      component.firstOperand = 2.5;
      component.currentNumber = '2.5';
      component.operator = '+';
      component.getOperation('+');
      expect(component.firstOperand).toEqual(5);
    });

    it('should subtract two fractions', () => {
      component.firstOperand = 2.5;
      component.currentNumber = '2.5';
      component.operator = '-';
      component.getOperation('-');
      expect(component.firstOperand).toEqual(0);
    });

    it('should set the current number as first operand if firstOperand is null', () => {
      component.firstOperand = null;
      component.currentNumber = '2.5';
      component.getOperation('-');
      expect(component.firstOperand).toEqual(2.5);
      expect(component.waitForSecondNumber).toEqual(true);
    });

    it('should wait for second number', () => {
      component.firstOperand = 123;
      component.operator = null;
      component.getOperation('-');
      expect(component.operator).toEqual('-');
      expect(component.waitForSecondNumber).toEqual(true);
    });
  });
});
